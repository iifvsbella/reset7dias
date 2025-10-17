import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialImages: string[] = [
  "https://r2.fivemanage.com/loB7DwO6sLPQ9WKdZy10U/6.png",
  "https://r2.fivemanage.com/loB7DwO6sLPQ9WKdZy10U/5.png",
  "https://r2.fivemanage.com/loB7DwO6sLPQ9WKdZy10U/3.png",
  "https://r2.fivemanage.com/loB7DwO6sLPQ9WKdZy10U/1(6).png",
  "https://r2.fivemanage.com/loB7DwO6sLPQ9WKdZy10U/4.png",
  "https://r2.fivemanage.com/loB7DwO6sLPQ9WKdZy10U/2(1).png",
  "https://r2.fivemanage.com/loB7DwO6sLPQ9WKdZy10U/7.png"
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    console.log('[LandingReset7] Testimonial carousel initialized');
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonialImages.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-2xl">
        <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {testimonialImages.map((image, index) => (
            <div key={index} className="min-w-full">
              <img
                src={image}
                alt={`Transformação ${index + 1}`}
                className="w-full aspect-square object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-gray-800" />
      </button>

      <button
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Próximo"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-gray-800" />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {testimonialImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              index === current ? 'w-10 bg-orange-500' : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
