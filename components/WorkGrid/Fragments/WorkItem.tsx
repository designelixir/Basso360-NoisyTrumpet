import { Button } from "components/Button";
import { FeaturedImage } from "components/FeaturedImage";
import {
  Page_Flexiblecontent_Blocks_WorkGrid_Items,
  Work,
  Work_Workoptions,
} from "graphql";
import Balancer from "react-wrap-balancer";

interface WorkItemProps extends Page_Flexiblecontent_Blocks_WorkGrid_Items {
  className?: string;
}

const WorkItem = ({ className, work, isFeatured }: WorkItemProps) => {
  const { title, id, uri, clients, workOptions } = work as Work;
  const options = workOptions as Work_Workoptions;
  const { featuredBlockImage } = options;
  const client = clients?.nodes[0].name;
  const icon = clients?.nodes[0].clientOptions?.logo;
  const color = clients?.nodes[0].clientOptions?.color;

  // Classes to span full with of grid-cols-3
  const featuredClasses = `col-span-3 flex flex-col items-center relative group transition-all duration-300 ease-in-out`;
  //   classes for regular work items
  const workClasses = `col-span-3 grid place-items-center group py-32 relative bg-${color} lg:col-span-1 transition-all duration-300 ease-in-out`;

  return (
    <div key={id} className={`${isFeatured ? featuredClasses : workClasses}`}>
      {featuredBlockImage && isFeatured ? (
        <FeaturedImage
          className={`w-full overflow-hidden`}
          imgClassName="w-full group-hover:scale-110 transition-all duration-300 ease-in-out"
          image={featuredBlockImage}
          quality={100}
        />
      ) : (
        <FeaturedImage
          className={`grid min-h-[200px] w-full place-items-center`}
          imgClassName="mx-auto w-48 group-hover:scale-110 transition-all duration-300 ease-in-out"
          image={icon}
        />
      )}
      {isFeatured ? (
        <div
          className={`flex w-full flex-col gap-8 bg-primary bg-opacity-75 p-8 lg:hidden`}
        >
          <p
            className={`w-fit border-b-[1px] border-white pb-2 pr-12 font-sans uppercase text-white lg:pb-6`}
          >
            Featured Work
          </p>
          <h2 className={`font-serif text-3xl text-white `}>
            <Balancer>{client}</Balancer>
          </h2>
          <span className={`text-lg text-white`}>{title}</span>
          {/* <Button
            variant={`outline-white`}
            // href={uri as string} @TODO: Add Work Templates
            href={`/work/`}
            className={`w-fit`}
          >
            Case Study +
          </Button> */}
        </div>
      ) : null}
      <div
        className={`absolute left-0 top-0 hidden h-full w-full flex-col bg-primary bg-opacity-75 px-6 py-8 uppercase backdrop-blur-sm transition-all duration-300 ease-in-out   ${
          isFeatured
            ? `gap-2 lg:gap-8 lg:group-hover:flex`
            : `items-center justify-center gap-4 group-hover:flex`
        }`}
      >
        {isFeatured ? (
          <span
            className={`w-fit border-b-[1px] border-white pb-2 font-sans uppercase text-white lg:pb-6`}
          >
            Featured Work
          </span>
        ) : null}
        <h2
          className={`text-white ${
            isFeatured
              ? `font-serif text-2xl lg:max-w-sm lg:text-5xl`
              : `text-center font-sans text-xl`
          }`}
        >
          {client}
        </h2>
        <span
          className={`max-w-xs text-white ${
            isFeatured ? `font-serif text-xl` : `text-md font-sans`
          }`}
        >
          {title}
        </span>
        {/* <Button
          variant={`outline-white`}
          // href={uri as string} @TODO: Add Work Templates
          href={`/work/`}
          className={`w-fit`}
        >
          Case Study +
        </Button> */}
      </div>
    </div>
  );
};

export default WorkItem;
