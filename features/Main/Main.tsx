import * as SELECTORS from "constants/selectors";

export interface MainProps {
  children: React.ReactNode;
  className?: string;
  isSub?: boolean;
}

export default function Main({
  children,
  className,
  isSub,
  ...props
}: MainProps) {
  return (
    <main
      id={SELECTORS.MAIN_CONTENT_ID}
      tabIndex={-1}
      className={`${className || ""} ${isSub ? `mt-20 xl:mt-6` : ``}`}
      {...props}
    >
      {children}
    </main>
  );
}
