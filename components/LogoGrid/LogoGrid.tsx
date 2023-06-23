import { FeaturedImage } from "components/FeaturedImage";
import Marquee from "react-fast-marquee";
import {
  Page_Flexiblecontent_Blocks_LogoGrid,
  Page_Flexiblecontent_Blocks_LogoGrid_Items,
} from "graphql";
import { useState } from "react";
import { AnimatePresence, LazyMotion, m } from "framer-motion";

interface LogoGridProps extends Page_Flexiblecontent_Blocks_LogoGrid {
  className?: string;
}

const loadFeatures = () =>
  import("utilities/framerFeatures.js").then((res) => res.default);

const LogoGrid: React.FC<LogoGridProps> = ({
  className,
  items,
  title,
  textAlign,
  variant,
}) => {
  const hasItems = items && items.length > 0;
  const isGrid = variant === "grid";
  const isTicker = variant === "ticker";
  const isSlider = variant === "slider";
  const [itemHover, setItemHover] = useState({
    index: -1,
    isHovering: false,
  });

  return (
    <div
      className={`${
        className ? className : ``
      } container relative mx-auto max-w-5xl overflow-x-hidden`}
    >
      <div className="flex flex-col items-center justify-center">
        {title ? (
          <h2 className={`font-serif text-3xl font-thin text-${textAlign}`}>
            {title}
          </h2>
        ) : null}

          {hasItems && isTicker ? (
            <LazyMotion features={loadFeatures}>
            <Marquee
              className={`flex h-fit gap-4 overflow-hidden py-12`}
              gradientColor={[243, 243, 243]}
              pauseOnHover
              gradientWidth={100}
              speed={75}
            >

              {items.map((item, index) => {
                const { logo, link, label } =
                  item as Page_Flexiblecontent_Blocks_LogoGrid_Items;

                if (link) {
                  return (
                    <m.a
                      key={`logo-${logo?.id}-${index}`}
                      href={link.url || "#"}
                      target={link.target || "_self"}
                      className={`relative h-fit overflow-hidden text-center transition-all duration-300 hover:scale-[1.2]`}
                      onMouseEnter={() =>
                        setItemHover({ index, isHovering: true })
                      }
                      onMouseLeave={() =>
                        setItemHover({ index: -1, isHovering: false })
                      }
                    >
                      <FeaturedImage
                        image={logo}
                        className={`relative grid h-auto w-[200px] place-items-center`}
                        imgClassName={`grayscale hover:grayscale-0 h-32 w-auto transition-all duration-300`}
                        priority
                      />
                      {label &&
                      itemHover.index === index &&
                      itemHover.isHovering ? (
                        <AnimatePresence>
                          <m.span
                            className={`w-full text-center font-sans text-sm font-bold text-brand-gray`}
                            initial={{
                              opacity: 0,
                              y: -20,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              y: -20,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut",
                            }}
                          >
                            {label}
                          </m.span>
                        </AnimatePresence>
                      ) : null}
                    </m.a>
                  );
                }

                return (
                  <m.div
                    key={`logo-${index}`}
                    className={`relative h-fit overflow-hidden text-center transition-all duration-300 hover:scale-[1.2]`}
                    onMouseEnter={() =>
                      setItemHover({ index, isHovering: true })
                    }
                    onMouseLeave={() =>
                      setItemHover({ index, isHovering: false })
                    }
                  >
                    <FeaturedImage
                      image={logo}
                      className={`relative grid h-auto w-[200px] place-items-center`}
                      imgClassName={`grayscale hover:grayscale-0 h-32 w-auto transition-all duration-300`}
                      priority
                    />
                    {label &&
                    itemHover.index === index &&
                    itemHover.isHovering ? (
                      <AnimatePresence>
                        <m.span
                          className={`w-full text-center font-sans text-sm font-bold text-brand-gray`}
                          initial={{
                            opacity: 0,
                            y: -20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -20,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                        >
                          {label}
                        </m.span>
                      </AnimatePresence>
                    ) : null}
                  </m.div>
                );
              })}
            </Marquee>
            </LazyMotion>
          ) : null}
      </div>
    </div>
  );
};

export default LogoGrid;
