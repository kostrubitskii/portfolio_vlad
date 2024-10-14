export default function OpenMenu({ width = 36, height = 24, className}) {
  return (
    <svg width={width} height={height} viewBox="0 0 48 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="18.5" x2="48" y2="18.5" stroke="#0F0F0E" />
      <line y1="6.5" x2="48" y2="6.5" stroke="#0F0F0E" />
    </svg>

  )
}