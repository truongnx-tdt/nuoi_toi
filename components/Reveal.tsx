import React, { useEffect, useRef, useState } from 'react';

type RevealVariant = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'none';

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  duration?: number;
  delay?: number;
  className?: string;
  threshold?: number;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  variant = 'fade-up', 
  duration = 800, 
  delay = 0, 
  className = '',
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getHiddenClass = () => {
    switch (variant) {
      case 'fade-up': return 'opacity-0 translate-y-12';
      case 'fade-down': return 'opacity-0 -translate-y-12';
      case 'fade-left': return 'opacity-0 -translate-x-12';
      case 'fade-right': return 'opacity-0 translate-x-12';
      case 'zoom-in': return 'opacity-0 scale-90';
      case 'none': return '';
      default: return 'opacity-0 translate-y-12';
    }
  };

  const getVisibleClass = () => {
     return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div
      ref={ref}
      className={`${className} transition-all ease-out transform ${isVisible ? getVisibleClass() : getHiddenClass()}`}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;