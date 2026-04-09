import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { properties } from '../data/properties';
import { useTranslation } from '../context/LanguageContext';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Namaste! I am Mahakal AI Guide. How can I help you find your dream property today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const { t, language } = useTranslation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMsg }]);
    setInput('');
    processQuery(userMsg);
  };

  const processQuery = (query) => {
    setIsTyping(true);
    
    // Simulate AI thinking
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      let response = "";

      // Logic for contact/owner
      if (lowerQuery.includes('contact') || lowerQuery.includes('owner') || lowerQuery.includes('call') || lowerQuery.includes('number') || lowerQuery.includes('shivam')) {
        response = "You can contact our owner Shivam Tomar at +91 84355 23004. Would you like me to call him for you?";
      } 
      // Logic for location search
      else if (lowerQuery.includes('bhind') || lowerQuery.includes('shastri nagar') || lowerQuery.includes('darpan') || lowerQuery.includes('vivakanand') || lowerQuery.includes('garden')) {
        const matches = properties.filter(p => 
          p.location.toLowerCase().includes(lowerQuery) || 
          p.name.en.toLowerCase().includes(lowerQuery) ||
          p.description.en.toLowerCase().includes(lowerQuery)
        );
        
        if (matches.length > 0) {
          response = `I found ${matches.length} properties in that area. The best one is "${matches[0].name[language || 'en']}" priced at ${matches[0].price}. Should I show you more details?`;
        } else {
          response = "I couldn't find a direct match for that location, but we have several premium plots near the main highway in Bhind. What is your budget?";
        }
      }
      // Logic for price/budget
      else if (lowerQuery.includes('budget') || lowerQuery.includes('price') || lowerQuery.includes('lakh') || lowerQuery.includes('lac')) {
        const budgetMatch = query.match(/\d+/);
        if (budgetMatch) {
          const budget = parseInt(budgetMatch[0]);
          const affordable = properties.filter(p => {
             const priceNum = parseInt(p.price.replace(/[^\d]/g, ''));
             return priceNum <= budget;
          });
          if (affordable.length > 0) {
            response = `I have ${affordable.length} properties within your budget of ${budget} Lakhs. A great option is "${affordable[0].name[language || 'en']}" for ${affordable[0].price}.`;
          } else {
            response = `Currently, most of our premium properties start from ₹12 Lakhs. I have an affordable house in Joshi Nagar for that price. interested?`;
          }
        } else {
          response = "We have properties ranging from ₹12 Lakh to over ₹1 Crore. What range are you looking for?";
        }
      }
      // Default fallback
      else {
        response = "I am not sure I understand. I can help you find Properties, Plots, or Houses in Bhind and MP. You can also ask to 'Contact Owner'.";
      }

      setMessages(prev => [...prev, { type: 'bot', text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const quickActions = [
    { label: 'View Plots', query: 'Show me plots' },
    { label: 'Contact Owner', query: 'Contact owner' },
    { label: 'Under 30 Lakhs', query: 'Properties under 30 Lakh' }
  ];

  return (
    <div className="chatbot-container">
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="chatbot-window"
          >
            <div className="chatbot-header">
              <div className="chatbot-header__icon">🔱</div>
              <div className="chatbot-header__info">
                <h4>Mahakal AI Guide</h4>
                <p>Online | Always active</p>
              </div>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`message message--${msg.type}`}>
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="message message--bot" style={{ opacity: 0.6 }}>
                  Thinking...
                </div>
              )}
              <div ref={messagesEndRef} />
              
              {!isTyping && messages.length < 4 && (
                <div className="chatbot-actions">
                  {quickActions.map((action, i) => (
                    <button 
                      key={i} 
                      className="chatbot-action-btn"
                      onClick={() => {
                        setMessages(prev => [...prev, { type: 'user', text: action.label }]);
                        processQuery(action.query);
                      }}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="chatbot-input-area">
              <input 
                type="text" 
                className="chatbot-input" 
                placeholder="Ask about properties..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button className="chatbot-send" onClick={handleSend}>
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`chatbot-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '🤖'}
      </motion.button>
    </div>
  );
};

export default Chatbot;
