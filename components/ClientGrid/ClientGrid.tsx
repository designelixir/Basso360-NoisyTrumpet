import { Page_Flexiblecontent_Blocks_ClientGrid } from "graphql";
import Client from "./Fragments/Client";

interface ClientGridProps extends Page_Flexiblecontent_Blocks_ClientGrid {
  className?: string;
}

const ClientGrid = ({
  className,
  items,
  title,
  titleUnderlineColor,
  backgroundColor,
}: ClientGridProps) => {
  const hasItems = items && items.length > 0;

  return (
    <section className={className}>
      <div className={`container mx-auto flex max-w-4xl flex-col gap-8 px-4`}>
        {title ? (
          <div
            className={`flex w-fit flex-col border-b-[1px] pb-6 pr-12 border-${titleUnderlineColor}`}
          >
            <h2 className={`font-sans text-xl uppercase text-primary`}>
              {title}
            </h2>
          </div>
        ) : null}
        {hasItems ? (
          <div
            className={`grid w-full grid-cols-2 gap-8 lg:grid-cols-4 bg-${backgroundColor}`}
          >
            {items.map((item, index) => (
              <Client
                key={item?.client?.id}
                client={item?.client}
                type={item?.type}
                className={`relative mx-auto grid max-w-full place-items-center p-4 md:min-h-[200px] md:max-w-[75%] lg:max-w-[100%]`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ClientGrid;
