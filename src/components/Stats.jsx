import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const CountUp = ({ target, suffix, triggered }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!triggered) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [target, triggered]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const sectionRef = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const { t } = useTranslation();

  const stats = [
    { icon: '🏠', number: 500, suffix: '+', label: t('stats.properties_sold') },
    { icon: '✅', number: 100, suffix: '%', label: t('wcu.approval.title') },
    { icon: '🤝', number: 1000, suffix: '+', label: t('stats.happy_clients') },
    { icon: '📍', number: 20, suffix: '+', label: t('stats.cities_covered') },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => setTriggered(true),
        once: true,
      });

      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-card__icon">{stat.icon}</div>
              <div className="stat-card__number">
                <CountUp target={stat.number} suffix={stat.suffix} triggered={triggered} />
              </div>
              <div className="stat-card__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
