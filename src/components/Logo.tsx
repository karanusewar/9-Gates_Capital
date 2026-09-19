export default function Logo({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 100"
      className={`fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 0 0 
           H 100 
           V 100 
           H 0 
           V 70 
           H 70 
           V 30 
           H 30 
           L 55 40 
           L 44 68 
           L 0 50.4 
           Z"
        fillRule="evenodd"
      />
      <text x="105" y="20" fontSize="20" fontWeight="bold" fontFamily="sans-serif">
        TM
      </text>
    </svg>
  );
}
