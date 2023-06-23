import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant:
    | "primary"
    | "secondary"
    | "secondary-outline"
    | "tertiary"
    | "quaternary"
    | "alert"
    | "donate"
    | "donate-white"
    | "outline-white"
    | string;
  onClick?: () => void;
  disabled?: boolean;
}

const defaultButtonStyle = `rounded-full py-4 px-8 font-sans uppercase`;
const transitionStyle = `transition-colors duration-300 ease-in-out`;

const styleLoader = (variant: string) => {
  switch (variant) {
    case "primary":
      return `${defaultButtonStyle} ${transitionStyle} bg-brand-dark-gray text-white hover:bg-brand-gray`;
    case "secondary":
      return `${defaultButtonStyle} ${transitionStyle} bg-secondary text-white`;
    case "secondary-outline":
      return `${defaultButtonStyle} ${transitionStyle} bg-transparent border-2 border-secondary text-secondary`;
    case "tertiary":
      return `${defaultButtonStyle} ${transitionStyle} bg-tertiary text-white`;
    case "quaternary":
      return `${defaultButtonStyle} ${transitionStyle} bg-quaternary text-white`;
    case "alert":
      return `${defaultButtonStyle} ${transitionStyle} bg-alert text-white`;
    case "donate":
      return `${defaultButtonStyle} ${transitionStyle} bg-donate text-white`;
    case "donate-white":
      return `${defaultButtonStyle} ${transitionStyle} bg-donate-white text-white`;
    case "outline-white":
      return `${defaultButtonStyle} ${transitionStyle} bg-transparent border-2 border-white text-white`;
    default:
      return `${defaultButtonStyle} ${transitionStyle} bg-primary text-white`;
  }
};

const Button = ({
  href,
  children,
  className,
  variant,
  disabled,
  ...props
}: ButtonProps) => {
  if (href && variant !== "donate" && variant !== "donate-white") {
    return (
      <Link
        className={`${styleLoader(variant)} ${className}`}
        role="button"
        href={href}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      className={`${styleLoader(variant)} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
