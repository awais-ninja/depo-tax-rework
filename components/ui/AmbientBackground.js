/**
 * Hero-only ambient background. Md+ only; hidden on mobile.
 * Large blob, accent circle, dot pattern, thin lines – slow drift/pulse.
 */
export default function AmbientBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block"
      aria-hidden
    >
      {/* 1. Large soft circle – upper-right behind cards */}
      <div
        className="ambient-shape absolute -top-20 right-0 w-[420px] h-[420px] rounded-full bg-[#1F4E79] opacity-[0.09] animate-float-slow"
        style={{ animationDelay: '0s' }}
      />
      {/* 2. Secondary red-tinted circle – lower-right */}
      <div
        className="ambient-shape absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#9a0000] opacity-[0.11] animate-drift-slow"
        style={{ animationDelay: '2s' }}
      />
      {/* 3. Thin abstract line – behind right edge */}
      <div
        className="ambient-shape absolute top-1/3 right-0 w-px h-40 bg-[#9a0000] opacity-[0.15] origin-top animate-float-soft"
        style={{ animationDelay: '1s' }}
      />
    </div>
  );
}
