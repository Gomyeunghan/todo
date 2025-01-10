interface IconProps {
  isActive: boolean;
}

export default function Icon({ isActive }: IconProps) {
  return !isActive ? (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <circle
          cx="16"
          cy="16"
          r="15"
          fill="#FEFCE8"
          stroke="#0F172A"
          stroke-width="2"
        />
      </svg>
    </span>
  ) : (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <circle cx="16" cy="16" r="16" fill="#7C3AED" />
        <path
          d="M8 16.2857L13.8182 22L24 12"
          stroke="#FEFCE8"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  );
}
