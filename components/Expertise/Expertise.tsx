import { Page_Flexiblecontent_Blocks_Expertise } from "graphql";
import Item from "./Fragments/Item";

interface ExpertiseProps extends Page_Flexiblecontent_Blocks_Expertise {
  className?: string;
}

const Expertise = ({ className, title, items }: ExpertiseProps) => {
  const hasItems = items && items.length > 0;

  return (
    <div className={`${className ? className : ``}`}>
      <div className={`container mx-auto flex max-w-4xl flex-col gap-8`}>
        {title ? (
          <h2 className={`text-left font-serif text-2xl text-secondary`}>
            {title}
          </h2>
        ) : null}
        {hasItems ? (
          <div className={`grid grid-cols-1 gap-12 px-12 md:grid-cols-3`}>
            {items.map(({ label, content, icon, color }: any, i) => {
              return (
                <Item
                  key={`expertise-${i}`}
                  label={label}
                  content={content}
                  icon={icon}
                  color={color}
                  i={i}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Expertise;
