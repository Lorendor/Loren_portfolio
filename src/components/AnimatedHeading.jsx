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
    <h1 className="text-4xl text-white md:text-5xl font-orbitron tracking-wider font-bold">
      Hi I am Loren,<br></br>{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-palegreen">
        <span className="inline-block min-w-[280px] md:min-w-[320px]">
          {text}
          <span className="border-r-2 border-white/50 pr-1"></span>
        </span>
      </span>
    </h1>
  );
};