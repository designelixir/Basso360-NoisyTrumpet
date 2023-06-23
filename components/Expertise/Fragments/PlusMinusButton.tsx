import React from "react";
import { LazyMotion, m, Transition, SVGMotionProps } from "framer-motion";
const loadFeatures = () =>
  import("utilities/framerFeatures").then((res) => res.default);

interface Props extends SVGMotionProps<{}> {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  lineProps?: any;
  width?: string | number;
  height?: string | number;
  className?: string;
  onClick?: () => void;
}

const PlusMinusButton = ({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = "#fff",
  transition,
  lineProps = null,
  className,
  onClick,
  ...props
}: Props) => {
  const variant = isOpen ? "opened" : "closed";
  const horizontal = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 1,
    },
  };
  const vertical = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps,
  };
  const unitHeight = 6;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <div className={`${className}`}>
      <LazyMotion features={loadFeatures}>
        <m.svg
          viewBox={`0 0 ${unitWidth} ${unitHeight}`}
          overflow="visible"
          preserveAspectRatio="xMidYMid meet"
          width={width}
          height={height}
          onClick={onClick}
          {...props}
        >
          <m.line
            x1="0"
            x2={unitWidth}
            y1={unitHeight / 2}
            y2={unitHeight / 2}
            variants={horizontal}
            {...lineProps}
          />
          <m.line
            x1={unitWidth / 2}
            x2={unitWidth / 2}
            y1="0"
            y2={unitHeight}
            variants={vertical}
            {...lineProps}
          />
        </m.svg>
      </LazyMotion>
    </div>
  );
};

export default PlusMinusButton;
