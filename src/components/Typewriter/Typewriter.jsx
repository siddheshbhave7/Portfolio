import React, { useState, useEffect } from 'react';

const Typewriter = ({ 
  words = ["Software Engineer", "DevOps Engineer", "Cloud Infrastructure Architect"], 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delayBetweenWords = 2000 
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const activeWord = words[currentWordIndex];

    if (!isDeleting) {
      // Typing phase
      if (currentText.length < activeWord.length) {
        timer = setTimeout(() => {
          setCurrentText(activeWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Pause before starting deletion
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      // Deleting phase
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(activeWord.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span style={{ fontFamily: 'var(--font-family)', fontWeight: 'inherit', color: 'inherit' }}>
      {currentText}
      <span 
        style={{
          marginLeft: '2px',
          borderRight: '2px solid var(--accent)',
          animation: 'blink 0.75s step-end infinite'
        }}
        className="typewriter-cursor"
      />
      <style>{`
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: var(--accent) }
        }
      `}</style>
    </span>
  );
};

export default Typewriter;
