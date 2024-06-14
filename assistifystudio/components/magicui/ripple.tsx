
import React, { CSSProperties } from "react";

// Define constants
const MAIN_CIRCLE_SIZE = 210;
const MAIN_CIRCLE_OPACITY = 0.24;
const NUM_CIRCLES = 8;

// Define Ripple component
const Ripple: React.FC = React.memo(() => {
  return (
    <div className="absolute left-1/2 top-1/2 overflow-visible">
      {Array.from({ length: NUM_CIRCLES }, (_, i) => (
        <div
          key={i}
          className={`absolute -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full bg-neutral-400`}
          style={{
            width: `${MAIN_CIRCLE_SIZE + i * 70}px`,
            height: `${MAIN_CIRCLE_SIZE + i * 70}px`,
            opacity: MAIN_CIRCLE_OPACITY - i * 0.03,
            animationDelay: `${i * 0.06}s`,
          }}
        ></div>
      ))}
    </div>
  );
});

export default Ripple;

