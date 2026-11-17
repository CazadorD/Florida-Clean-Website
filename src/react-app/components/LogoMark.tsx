import { useId } from "react";

// Florida SunRinse logo: Florida sun rising over a wave.
export default function LogoMark({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Florida SunRinse logo">
      <defs>
        <clipPath id={`c${id}`}><circle cx="32" cy="32" r="30" /></clipPath>
        <linearGradient id={`s${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#E0F5F8" /><stop offset="1" stopColor="#FFFFFF" /></linearGradient>
        <linearGradient id={`w${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0E9AA7" /><stop offset="1" stopColor="#0A5F78" /></linearGradient>
      </defs>
      <g clipPath={`url(#c${id})`}>
        <rect width="64" height="64" fill={`url(#s${id})`} />
        <circle cx="32" cy="34" r="13" fill="#F98A3C" />
        <g stroke="#F98A3C" strokeWidth="3" strokeLinecap="round"><path d="M32 8v5M13 18l4 3.5M51 18l-4 3.5M7 33h5M52 33h5" /></g>
        <path d="M0 38 C10 32 20 32 32 38 C44 44 54 44 64 38 V64 H0Z" fill={`url(#w${id})`} />
        <path d="M0 46 C10 41 20 41 32 46 C44 51 54 51 64 46" fill="none" stroke="#fff" strokeWidth="2.5" opacity=".8" />
      </g>
      <circle cx="32" cy="32" r="30" fill="none" stroke="#0A5F78" strokeWidth="2.5" />
    </svg>
  );
}
