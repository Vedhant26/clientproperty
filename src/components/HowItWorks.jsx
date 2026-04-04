import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  const steps = [
    { icon: '📝', title: t('hiw.1.title'), desc: t('hiw.1.desc') },
    { icon: '👀', title: t('hiw.2.title'), desc: t('hiw.2.desc') },
    { icon: '🤝', title: t('hiw.3.title'), desc: t('hiw.3.desc') },
    { icon: '📄', title: t('hiw.4.title'), desc: t('hiw.4.desc') },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate steps from their respective directions
      const oddSteps = sectionRef.current.querySelectorAll('.step-card:nth-child(odd)');
      const evenSteps = sectionRef.current.querySelectorAll('.step-card:nth-child(even)');

      gsap.from(oddSteps, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from(evenSteps, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.1, // Slight offset for even steps
      });

      // Animate the line
      gsap.from('.steps-line', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 1.5,
        ease: 'power3.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="how-it-works" id="how-it-works" ref={sectionRef}>
      <div className="container">
        <div className="section-label">{t('section.simple_process')}</div>
        <h2 className="section-title">{t('section.how_it_works')}</h2>

        <div className="steps-container">
          <div className="steps-line"></div>
          {steps.map((step, i) => (
            <div className="step-card" key={i}>
              <div className="step-card__number">{i + 1}</div>
              <div className="step-card__content">
                <div className="step-card__icon">{step.icon}</div>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
