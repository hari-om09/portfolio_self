import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? '0';
            setTimeout(() => el.classList.add('visible'), Number(delay));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
