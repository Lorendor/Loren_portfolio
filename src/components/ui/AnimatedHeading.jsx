import { useState, useEffect } from 'react';

export const AnimatedHeading = ({ phrases = ["Web Developer", "Designer", "Coder"] }) => {
  const [text, setText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      
      setText(isDeleting 
        ? currentPhrase.substring(0, text.length - 1) 
        : currentPhrase.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed]);

  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black dark:text-white font-work-sans tracking-wider font-bold">
      Hi I'm Loren,<br></br>{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-darkpurple dark:from-purple dark:to-lightpurple">
        <span className="font-work-sans whitespace-nowrap lg:whitespace-nowrap">
          {text}
          <span className="border-r-2 border-white/50 pr-1"></span>
        </span>
      </span>
    </h1>
  );
};