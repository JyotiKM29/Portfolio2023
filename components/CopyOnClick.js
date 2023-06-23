import { useRef, useEffect, useState } from 'react';
import Clipboard from 'clipboard';

const CopyOnClick = ({ text, children }) => {
  const textRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const clipboard = new Clipboard(textRef.current, {
      text: () => text,
    });

    clipboard.on('success', () => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 500);
    });

    clipboard.on('error', () => {
      console.error('Failed to copy text to clipboard');
    });

    return () => {
      clipboard.destroy();
    };
  }, [text]);

  return (
    <span ref={textRef} style={{ cursor: 'pointer' }}>
      {isCopied ? 'Copied!' : children}
    </span>
  );
};

export default CopyOnClick;
