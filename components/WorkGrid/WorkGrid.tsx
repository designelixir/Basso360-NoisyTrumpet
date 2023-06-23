import {
  Page_Flexiblecontent_Blocks_WorkGrid,
  Page_Flexiblecontent_Blocks_WorkGrid_Items,
  Work,
} from "graphql";
import WorkItem from "./Fragments/WorkItem";

export interface WorkGridProps extends Page_Flexiblecontent_Blocks_WorkGrid {
  className?: string;
}

const WorkGrid = ({ className, title, items, id = "" }: WorkGridProps) => {
  const hasWorks = items && items.length > 0;
  const works = items as Page_Flexiblecontent_Blocks_WorkGrid_Items[];

  return (
    <section id={id ? id : ``} className={`container relative mx-auto py-8`}>
      <div className={`relative mx-auto grid max-w-4xl px-4`}>
        {title ? (
          <h2 className={`text-center font-serif text-3xl font-bold`}>
            {title}
          </h2>
        ) : null}
        {hasWorks ? (
          <div
            className={`grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3`}
          >
            {works.map(({ work, isFeatured }, index) => {
              const { id } = work as Work;

              return (
                <WorkItem
                  key={id}
                  className={`flex flex-col items-center`}
                  work={work}
                  isFeatured={isFeatured}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default WorkGrid;
