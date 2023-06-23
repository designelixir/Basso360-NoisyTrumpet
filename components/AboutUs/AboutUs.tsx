import {
  Page_Flexiblecontent_Blocks_AboutUs,
  Page_Flexiblecontent_Blocks_AboutUs_Items,
} from "graphql";
import Item from "./Fragments/Item";

export interface AboutUsProps extends Page_Flexiblecontent_Blocks_AboutUs {
  className?: string;
}

const AboutUs = ({
  className,
  title,
  subTitle,
  content,
  items,
}: AboutUsProps) => {
  return (
    <section
      className={`${className ? className : ``} mt-8 flex flex-col gap-8 px-8`}
    >
      <div className="container mx-auto flex max-w-4xl flex-col">
        {title ? (
          <div
            className={`flex max-w-fit flex-col border-b-[1px] border-brand-red pb-6 pr-12`}
          >
            <h2 className={`font-sans text-xl uppercase`}>{title}</h2>
          </div>
        ) : null}
      </div>
      <div className="container mx-auto flex max-w-4xl flex-col md:flex-row">
        <div className="flex w-full flex-col gap-8 overflow-x-auto pb-4 md:w-1/4">
          {subTitle ? (
            <h3
              className={`font-serif text-6xl text-primary`}
              dangerouslySetInnerHTML={{
                __html: subTitle,
              }}
            />
          ) : null}

          {content ? (
            <div
              className={`text-md font-body`}
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          ) : null}
        </div>
        {items ? (
          <div className="grid gap-8 md:w-3/4 md:grid-cols-3">
            {items.map((item, index) => (
              <Item
                item={item as Page_Flexiblecontent_Blocks_AboutUs_Items}
                key={`item-${index}`}
                className={`grid place-items-center gap-4 text-center`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default AboutUs;
