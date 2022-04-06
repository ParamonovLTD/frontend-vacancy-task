import { useState, useEffect } from 'react';

interface hookRes {
  width: number;
  height: number;
}

function getWindowDimensions(): hookRes {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions(): hookRes {
  const [windowDimensions, setWindowDimensions] = useState<hookRes>(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}