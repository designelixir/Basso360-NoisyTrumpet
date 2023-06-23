interface AnimatedIconProps {
  className?: string;
  type: string;
}

import Brand from "public/brand.svg";
import Leading from "public/leading.svg";
import Full from "public/full.svg";

const AnimatedIcon = ({ className, type }: AnimatedIconProps) => {
  switch (type) {
    case "brand": {
      return <Brand className={`${className ? className : ``}`} />;
    }
    case "leading": {
      return <Leading className={`${className ? className : ``}`} />;
    }
    case "full": {
      return <Full className={`${className ? className : ``}`} />;
    }
    default: {
      return null;
    }
  }
};

export default AnimatedIcon;
