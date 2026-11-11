interface WindowsIconProps {
  className?: string;
}

export default function WindowsIcon({ className = "w-5 h-5" }: WindowsIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 5.5L11 4.3v7.2H3V5.5zm0 13L11 19.7v-7.2H3v5.999zM12.5 4.1L21 3v8.5h-8.5V4.1zM12.5 19.9L21 21v-8.5h-8.5v7.4z" />
    </svg>
  );
}
