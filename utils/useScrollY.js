import { useState, useEffect } from 'react';

export default function useScrollY() {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return scrollTop;
}
