import { useState, useEffect } from 'react';

export default function AnimatedCounter() {
  const [count, setCount] = useState(1563);

  useEffect(() => {
    const intervals = [12, 9, 5];
    let currentIntervalIndex = 0;

    const timer = setInterval(() => {
      const increment = intervals[currentIntervalIndex];
      setCount((prev) => prev + increment);

      currentIntervalIndex = (currentIntervalIndex + 1) % intervals.length;
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-block transition-all duration-500 font-bold">
      {count.toLocaleString('pt-BR')}
    </span>
  );
}
