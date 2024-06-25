import { useState, useEffect, RefObject } from 'react';

export default function useDetectClose(
  ref: RefObject<HTMLDivElement>,
  initialState: boolean
) {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (ref.current && !ref.current.contains(target)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isOpen, ref]);

  return { isOpen, setIsOpen };
}
