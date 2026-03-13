'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Loads FinalCTA only when the section is near the viewport (reduces initial JS / TBT).
 * Import and viewport check are done entirely on the client, so no function is passed from server.
 */
export default function FinalCTALazy() {
  const [Component, setComponent] = useState(null);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { rootMargin: '400px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    import('./FinalCTA').then((mod) => setComponent(() => mod.default));
  }, [inView]);

  return (
    <section ref={ref} aria-hidden={!Component}>
      {Component ? <Component /> : <div className="min-h-[180px]" />}
    </section>
  );
}
