import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { properties } from '../data/properties';
import { useTranslation } from '../context/LanguageContext';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Namaste! 🙏 I am Mahakal Property Guide. How can I help you today? You can ask about properties, plots, prices, documents, or contact details.' }
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
    
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      let response = "";

      // --- Contact / Owner / Call ---
      if (lowerQuery.includes('contact') || lowerQuery.includes('owner') || lowerQuery.includes('call') || lowerQuery.includes('number') || lowerQuery.includes('shivam') || lowerQuery.includes('phone')) {
        response = "📞 You can contact our owner Shivam Tomar:\n\n• Phone: +91 84355 23004\n• WhatsApp: +91 84355 23004\n\nFeel free to call anytime between 9 AM - 9 PM!";
      }
      // --- WhatsApp ---
      else if (lowerQuery.includes('whatsapp') || lowerQuery.includes('message') || lowerQuery.includes('msg') || lowerQuery.includes('chat')) {
        response = "💬 You can WhatsApp us directly at +91 84355 23004. Just send your requirement and we'll respond within minutes!";
      }
      // --- Office / Visit / Address ---
      else if (lowerQuery.includes('office') || lowerQuery.includes('visit') || lowerQuery.includes('address') || lowerQuery.includes('where') || lowerQuery.includes('location office') || lowerQuery.includes('dukan')) {
        response = "🏢 Our office is located in Bhind, MP. You can visit us anytime!\n\n⏰ Office Hours: 9 AM - 9 PM (Monday-Sunday)\n📍 Check the 'Contact' section on our website for the exact map location.";
      }
      // --- Documents / Registration / Legal ---
      else if (lowerQuery.includes('document') || lowerQuery.includes('registry') || lowerQuery.includes('registration') || lowerQuery.includes('paper') || lowerQuery.includes('kagaj') || lowerQuery.includes('legal')) {
        response = "📋 For property purchase, you'll need:\n\n1. Aadhar Card\n2. PAN Card\n3. Property Registry Papers\n4. Sale Deed\n5. NOC (if applicable)\n\nWe assist with all documentation and registry! Contact us for free guidance.";
      }
      // --- Loan / EMI / Finance ---
      else if (lowerQuery.includes('loan') || lowerQuery.includes('emi') || lowerQuery.includes('finance') || lowerQuery.includes('bank')) {
        response = "🏦 We can help connect you with banks for home loans!\n\n• Most banks offer 7-9% interest rates\n• EMI options available for residential properties\n• We'll assist with all loan paperwork\n\nContact Shivam Tomar at +91 84355 23004 for loan guidance.";
      }
      // --- Plot / Land specific ---
      else if (lowerQuery.includes('plot') || lowerQuery.includes('land') || lowerQuery.includes('jamin') || lowerQuery.includes('zameen') || lowerQuery.includes('bigha')) {
        const plots = properties.filter(p => p.type === 'plot');
        if (plots.length > 0) {
          response = `🌿 We have ${plots.length} plots/lands available:\n\n`;
          plots.forEach((p, i) => {
            response += `${i + 1}. ${p.name[language || 'en']} - ${p.price}\n   📍 ${p.location}\n`;
          });
          response += "\nVisit our Properties page or contact us for more details!";
        } else {
          response = "Currently no plots listed. New plots are added regularly. Contact us at +91 84355 23004 for the latest availability!";
        }
      }
      // --- House / Makan ---
      else if (lowerQuery.includes('house') || lowerQuery.includes('makan') || lowerQuery.includes('ghar') || lowerQuery.includes('home') || lowerQuery.includes('flat') || lowerQuery.includes('apartment')) {
        const houses = properties.filter(p => p.type === 'house');
        if (houses.length > 0) {
          response = `🏠 We have ${houses.length} houses available:\n\n`;
          houses.forEach((p, i) => {
            response += `${i + 1}. ${p.name[language || 'en']} - ${p.price}\n   📍 ${p.location}\n`;
          });
          response += "\nClick on any property on our website to see photos, map & details!";
        } else {
          response = "No houses currently listed. Contact us for upcoming listings!";
        }
      }
      // --- Location-based search ---
      else if (lowerQuery.includes('bhind') || lowerQuery.includes('shastri nagar') || lowerQuery.includes('darpan') || lowerQuery.includes('vivekanand') || lowerQuery.includes('garden') || lowerQuery.includes('joshi') || lowerQuery.includes('lahar') || lowerQuery.includes('chungi') || lowerQuery.includes('bullet') || lowerQuery.includes('batalian') || lowerQuery.includes('kumrauha')) {
        const matches = properties.filter(p => 
          p.location.toLowerCase().includes(lowerQuery) || 
          p.name.en.toLowerCase().includes(lowerQuery) ||
          p.description.en.toLowerCase().includes(lowerQuery) ||
          (p.address && p.address.toLowerCase().includes(lowerQuery))
        );
        
        if (matches.length > 0) {
          response = `📍 I found ${matches.length} properties in that area:\n\n`;
          matches.forEach((p, i) => {
            response += `${i + 1}. ${p.name[language || 'en']} - ${p.price}\n`;
          });
          response += "\nWant more details on any of these?";
        } else {
          response = "I couldn't find properties in that exact location, but we have several listings in Bhind and nearby areas. Check our Properties page or call +91 84355 23004!";
        }
      }
      // --- Price / Budget ---
      else if (lowerQuery.includes('budget') || lowerQuery.includes('price') || lowerQuery.includes('lakh') || lowerQuery.includes('lac') || lowerQuery.includes('rate') || lowerQuery.includes('kitne') || lowerQuery.includes('cost') || lowerQuery.includes('keemat')) {
        const budgetMatch = query.match(/\d+/);
        if (budgetMatch) {
          const budget = parseInt(budgetMatch[0]);
          const affordable = properties.filter(p => {
             const priceNum = parseInt(p.price.replace(/[^\d]/g, ''));
             return priceNum <= budget;
          });
          if (affordable.length > 0) {
            response = `💰 I found ${affordable.length} properties within ₹${budget} Lakh:\n\n`;
            affordable.forEach((p, i) => {
              response += `${i + 1}. ${p.name[language || 'en']} - ${p.price}\n`;
            });
          } else {
            response = `Hmm, most of our properties start from ₹12 Lakh. We have an affordable house in Joshi Nagar at that price. Interested?`;
          }
        } else {
          response = "💰 Our properties range from ₹12 Lakh to ₹38 Lakh+. What's your budget? I can suggest the best options for you!";
        }
      }
      // --- Services / What do you do ---
      else if (lowerQuery.includes('service') || lowerQuery.includes('kya karte') || lowerQuery.includes('what do you') || lowerQuery.includes('help') || lowerQuery.includes('madad')) {
        response = "🏘️ Mahakal Property Dealer offers:\n\n✅ Buy & Sell Houses\n✅ Buy & Sell Plots/Land\n✅ Property Documentation Help\n✅ Registry & Legal Assistance\n✅ Home Loan Guidance\n✅ Property Valuation\n\nAll services available in Bhind, MP!";
      }
      // --- Sell property ---
      else if (lowerQuery.includes('sell') || lowerQuery.includes('bechna') || lowerQuery.includes('list my') || lowerQuery.includes('post property')) {
        response = "🏷️ Want to sell your property? We'll help you find buyers fast!\n\n1. Call us at +91 84355 23004\n2. Share photos & property details\n3. We'll list it on our website with verification\n\nFree listing for all property owners!";
      }
      // --- Thank you / Bye ---
      else if (lowerQuery.includes('thank') || lowerQuery.includes('dhanyavad') || lowerQuery.includes('shukriya') || lowerQuery.includes('bye') || lowerQuery.includes('ok')) {
        response = "🙏 Thank you for connecting with Mahakal Property Dealer! Feel free to ask anytime. We're here to help you find your dream property!";
      }
      // --- Hindi greetings ---
      else if (lowerQuery.includes('namaste') || lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey') || lowerQuery.includes('namaskar')) {
        response = "🙏 Namaste! Welcome to Mahakal Property Dealer.\n\nHow can I help you today? You can ask about:\n• Properties for sale\n• Plots & Land\n• Prices & Budget\n• Documents needed\n• Contact details";
      }
      // --- All properties ---
      else if (lowerQuery.includes('all') || lowerQuery.includes('show') || lowerQuery.includes('list') || lowerQuery.includes('sabhi') || lowerQuery.includes('dekhao')) {
        response = `📋 We currently have ${properties.length} properties listed:\n\n`;
        properties.forEach((p, i) => {
          response += `${i + 1}. ${p.name[language || 'en']} - ${p.price}\n`;
        });
        response += "\nVisit our Properties page for full details with photos & maps!";
      }
      // --- Default fallback ---
      else {
        response = "🤔 I didn't quite understand that. Here's what I can help with:\n\n🏠 Property listings (houses, plots)\n💰 Price & budget queries\n📞 Contact details & WhatsApp\n📋 Document requirements\n🏦 Home loan guidance\n🏷️ Sell your property\n\nTry asking something like 'Show houses' or 'Contact owner'!";
      }

      setMessages(prev => [...prev, { type: 'bot', text: response }]);
      setIsTyping(false);
    }, 800);
  };

  const quickActions = [
    { label: '🏠 Houses', query: 'Show me houses' },
    { label: '🌿 Plots', query: 'Show me plots' },
    { label: '📞 Contact', query: 'Contact owner' },
    { label: '💰 Under 30L', query: 'Properties under 30 Lakh' },
    { label: '📋 Documents', query: 'What documents needed' },
    { label: '🏷️ Sell Property', query: 'I want to sell my property' }
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
              <div className="chatbot-header__icon chatbot-m-logo">M</div>
              <div className="chatbot-header__info">
                <h4>Mahakal Property Guide</h4>
                <p>Online | Always active</p>
              </div>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`message message--${msg.type}`} style={{ whiteSpace: 'pre-line' }}>
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="message message--bot" style={{ opacity: 0.6 }}>
                  <span className="typing-dots">
                    <span>.</span><span>.</span><span>.</span>
                  </span>
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
                placeholder="Ask about properties, prices, documents..." 
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

      {/* Toggle Button - "M" Logo */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`chatbot-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : <span className="chatbot-m-btn-text">M</span>}
      </motion.button>
    </div>
  );
};

export default Chatbot;
