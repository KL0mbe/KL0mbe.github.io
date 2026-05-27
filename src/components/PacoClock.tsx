import { useState, useEffect, useRef, useLayoutEffect } from "react";

// refactor to not use any javascript
function PacoClock() {
  const [time, setTime] = useState(new Date());
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const [tooltipOffset, setTooltipOffset] = useState(0);

  useLayoutEffect(() => {
    if (!hovered) {
      setTooltipOffset(0);
      return;
    }
    if (!tooltipRef.current) return;
    const rect = tooltipRef.current.getBoundingClientRect();
    const rightOverflow = rect.right - (window.innerWidth - 8);
    if (rightOverflow > 0) setTooltipOffset(-rightOverflow);
    else setTooltipOffset(0);
  }, [hovered]);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        className="relative border-textSecondary border rounded-[100%] w-7.5 h-7.5"
        onMouseEnter={() => {
          timeoutRef.current = setTimeout(() => setHovered(true), 400);
        }}
        onMouseLeave={() => {
          setHovered(false);
          clearTimeout(timeoutRef.current);
        }}
      >
        <div
          style={{
            transform: `rotate(${time.getSeconds() * 6}deg)`,
          }}
          className="absolute bg-textSecondary rounded-2xl h-3.25 w-px bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom"
        />
        <div
          style={{
            transform: `rotate(${(time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6}deg)`,
          }}
          className="absolute bg-textSecondary rounded-2xl h-2.5 w-[1.5px] bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom"
        />
        <div
          style={{
            transform: `rotate(${(time.getHours() / 12) * 360 + (time.getMinutes() / 60) * 30}deg)`,
          }}
          className="absolute bg-textSecondary rounded-2xl h-2 w-[1.75px] bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom"
        />
        {hovered && (
          <span
            ref={tooltipRef}
            style={{ transform: `translateX(calc(-50% + ${tooltipOffset}px))` }}
            className="absolute p-2 border border-secondary bg-primary rounded -top-11 left-1/2  text-sm
  whitespace-nowrap"
          >
            <p className="text-textPrimary">{time.toString().slice(0, 25)}</p>
          </span>
        )}
      </div>
    </>
  );
}

export default PacoClock;
