import { Page_Flexiblecontent_Blocks_PressList, Press_Release } from "graphql";
import PressListItem from "./Fragments/PressItem";
import Link from "next/link";
import ReadMore from "public/read-more.svg";
export interface PressListProps extends Page_Flexiblecontent_Blocks_PressList {
  className?: string;
}

const PressList = ({
  className,
  backgroundColor,
  cta,
  items,
  title,
  titleUnderlineColor,
}: PressListProps) => {
  const hasItems = items && items.length > 0;
  const textColor = backgroundColor === "white" ? "secondary" : "white";
  return (
    <div className={`${className ? className : ``} mt-8 overflow-hidden`}>
      <div
        className={`container mx-auto flex max-w-4xl flex-col gap-12 px-8 py-12 bg-${backgroundColor}`}
      >
        {title ? (
          <div
            className={`flex w-fit flex-col border-b-[1px] pb-6 pr-12 border-${titleUnderlineColor}`}
          >
            <h2 className={`font-sans text-xl uppercase text-${textColor}`}>
              {title}
            </h2>
          </div>
        ) : null}
        {hasItems ? (
          <div className="flex w-full gap-8 overflow-x-auto pb-4">
            {items.map((item, index) => (
              <PressListItem
                key={item?.id}
                item={item as Press_Release}
                className={`flex max-w-[75%] flex-none flex-col gap-4 text-${textColor} md:max-w-1/2 hover:text-${titleUnderlineColor}`}
              />
            ))}
          </div>
        ) : null}
        {cta ? (
          <div className="flex justify-end">
            <Link
              href={cta.url ? cta.url : ``}
              className={`flex items-center gap-4 font-sans uppercase text-${textColor} hover:text-${titleUnderlineColor} group transition-colors duration-300 ease-in-out`}
              aria-label={`Get The Full Story`}
            >
              Get The Full Story
              <ReadMore
                className={`h-10 w-10 text-${textColor} group-hover:animate-pulse group-hover:text-${titleUnderlineColor} transition-all duration-300 ease-in-out`}
              />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PressList;
