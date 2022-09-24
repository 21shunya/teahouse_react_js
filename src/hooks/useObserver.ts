import React, { useEffect, useRef } from 'react';

export const useObserver = (
  ref: React.RefObject<HTMLDivElement>,
  canLoad: boolean,
  isLoading: boolean,
  callback: () => void,
) => {
  const observer: any = useRef();

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (observer.current) {
      observer.current.disconnect();
    }
    const cb = (entries: any) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
