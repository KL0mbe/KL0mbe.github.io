import { motion } from "motion/react";

type Props = {
  buttonX: number;
  buttonY: number;
  divX: number;
  divTop: number;
  divWidth: number;
  divHeight: number;
};

export default function ProjectsConnector({
  buttonX,
  buttonY,
  divX,
  divTop,
  divWidth,
  divHeight,
}: Props) {
  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <defs>
        <clipPath id="line-reveal">
          <motion.rect
            x={buttonX}
            y={buttonY - 4}
            height={8}
            initial={{ width: 0 }}
            animate={{ width: divX - buttonX }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
        </clipPath>
        <mask id="border-mask-top">
          <motion.path
            d={`M ${divX} ${buttonY} V ${divTop} H ${divX + divWidth} V ${buttonY}`}
            stroke="white"
            strokeWidth={6}
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </mask>
        <mask id="border-mask-bottom">
          <motion.path
            d={`M ${divX} ${buttonY} V ${divTop + divHeight} H ${divX + divWidth} V ${buttonY}`}
            stroke="white"
            strokeWidth={6}
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </mask>
      </defs>
      <line
        x1={buttonX}
        y1={buttonY}
        x2={divX}
        y2={buttonY}
        stroke="#E5E5E5"
        strokeWidth={2}
        strokeDasharray="6 4"
        clipPath="url(#line-reveal)"
      />
      <path
        d={`M ${divX} ${buttonY} V ${divTop} H ${divX + divWidth} V ${buttonY}`}
        fill="none"
        stroke="#E5E5E5"
        strokeWidth={2}
        strokeDasharray="6 4"
        mask="url(#border-mask-top)"
      />
      <motion.path
        d={`M ${divX} ${buttonY} V ${divTop + divHeight} H ${divX + divWidth} V ${buttonY}`}
        fill="none"
        stroke="#E5E5E5"
        strokeWidth={2}
        strokeDasharray="6 4"
        mask="url(#border-mask-bottom)"
      />
    </svg>
  );
}
