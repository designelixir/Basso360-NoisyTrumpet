import { FeaturedImage } from "components/FeaturedImage";
import { AnimatePresence, LazyMotion, m, useCycle } from "framer-motion";
import { Page_Flexiblecontent_Blocks_Expertise_Items } from "graphql";
import PlusMinusButton from "./PlusMinusButton";
const loadFeatures = () =>
  import("utilities/framerFeatures").then((res) => res.default);
interface ItemProps extends Page_Flexiblecontent_Blocks_Expertise_Items {
  className?: string;
  i: number;
}

const Item = ({ className, label, content, icon, color, i }: ItemProps) => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <div
      className={`${
        className ? className : ``
      } flex flex-col gap-4 px-2 py-8 bg-${color} text-white ${
        open ? `h-full` : `h-fit`
      }`}
    >
      <FeaturedImage className={`h-18 mx-auto w-auto`} image={icon} />
      {label ? (
        <h3 className={`text-center font-sans text-sm font-light uppercase`}>
          {label}
        </h3>
      ) : null}
      {content ? (
        <>
          <div
            className={`flex w-full flex-row items-center justify-center gap-2 py-4 hover:cursor-pointer`}
            onClick={() => cycleOpen()}
          >
            <span className={`font-body text-sm`}>{`There's More`}</span>
            <PlusMinusButton width={8} height={8} isOpen={open} />
          </div>
          <LazyMotion features={loadFeatures}>
            <AnimatePresence>
              {open ? (
                <m.div
                  key={`content-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.3,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    transition: { duration: 0.3, type: "spring" },
                  }}
                  className={`w-full font-body`}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              ) : null}
            </AnimatePresence>
          </LazyMotion>
        </>
      ) : null}
    </div>
  );
};

export default Item;
