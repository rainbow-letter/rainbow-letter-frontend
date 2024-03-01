import { useRef, useState } from 'react';

function useDraggableScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft ?? 0));
    setScrollLeft(containerRef.current?.scrollLeft ?? 0);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const scrollSpeed = (x - startX) * 1;
    containerRef.current.scrollLeft = scrollLeft - scrollSpeed;
  };

  const onMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return { containerRef, onMouseDown, onMouseMove, onMouseUpOrLeave };
}

export default useDraggableScroll;
