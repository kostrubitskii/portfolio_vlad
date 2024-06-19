import React from 'react';

const ArrowIconRight = ({ width = 25, height = 26, color = '#0F0F0E', className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className}viewBox="0 0 25 26" fill="none">
  <line x1="1.30603" y1="13.0454" x2="22.2713" y2="13.0454" stroke={color} stroke-width="3.00877"/>
  <path d="M14.0345 19.9092L22.5058 11.4455C23.6754 12.6141 23.6754 14.5087 22.5058 15.6773L18.2702 19.9092C17.1005 21.0778 15.2042 21.0778 14.0345 19.9092Z" fill={color}/>
  <path d="M22.5058 14.5537L14.0345 6.08999C15.2042 4.92139 17.1005 4.92139 18.2702 6.08999L22.5058 10.3218C23.6754 11.4904 23.6754 13.3851 22.5058 14.5537Z" fill={color}/>
</svg>
);

export default ArrowIconRight;