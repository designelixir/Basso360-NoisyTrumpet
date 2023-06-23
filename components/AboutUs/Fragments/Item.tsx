import { Page_Flexiblecontent_Blocks_AboutUs_Items } from "graphql";
import AnimatedIcon from "./AnimatedIcon";
import removeAmp from "utilities/removeAmp";

interface AboutItemProps {
  className?: string;
  item: Page_Flexiblecontent_Blocks_AboutUs_Items;
}

const AboutItem = ({ className, item }: AboutItemProps) => {
  const { copy, type } = item;
  return (
    <div className={`${className ? className : ``}`}>
      <AnimatedIcon
        className={`h-auto w-32 text-center`}
        type={type as string}
      />
      {copy ? (
        <div
          className={`font-sans text-sm text-primary`}
          dangerouslySetInnerHTML={{
            __html: removeAmp(copy),
          }}
        />
      ) : null}
    </div>
  );
};

export default AboutItem;
