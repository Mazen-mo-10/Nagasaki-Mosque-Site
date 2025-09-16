import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Reveal({ children, className = "" }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
