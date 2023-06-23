import { FeaturedImage } from "components/FeaturedImage";
import { LazyMotion, m } from "framer-motion";
import { Page_Flexiblecontent_Blocks_Hero } from "graphql";
const loadFeatures = () =>
  import("utilities/framerFeatures.js").then((res) => res.default);

interface TertiaryHeroProps extends Page_Flexiblecontent_Blocks_Hero {
  className?: string;
}

const TertiaryHero = ({
  className,
  title,
  content,
  icon,
}: TertiaryHeroProps) => {
  return (
    <section
      className={`-mt-20 mb-20 grid h-screen w-screen`}
      style={{ gridTemplate: `"content" 1fr / 1fr` }}
    >
      <div
        className={`container relative z-40 mx-auto grid h-full w-full place-items-center`}
        style={{
          gridArea: `content`,
        }}
      >
        <div
          className={`relative flex flex-col items-center gap-6 px-6 text-center`}
        >
          {icon ? (
            <LazyMotion features={loadFeatures}>
              <m.div
                className={`-right-24 -top-48 mx-auto md:absolute md:mx-0`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5,
                }}
              >
                <FeaturedImage
                  image={icon}
                  className="w-32 animate-spin-slow"
                />
              </m.div>
            </LazyMotion>
          ) : null}
          {title ? (
            <h1 className={`font-serif text-6xl font-thin`}>{title}</h1>
          ) : null}
          {content ? (
            <div
              className={`mx-auto max-w-xl font-sans text-lg`}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : null}
        </div>
      </div>
      <div
        className={`absolute h-full w-full`}
        style={{
          gridArea: `content`,
        }}
      >
        <LazyMotion features={loadFeatures}>
          {/* Desktop from side */}
          <m.div
            className={`absolute hidden h-full w-full rounded-r-full bg-brand-gray opacity-[16%] md:flex`}
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <m.div
            className={`absolute top-[13%] hidden h-[75%] w-[85%] rounded-r-full bg-brand-gray opacity-[16%] md:flex`}
            // delayed
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.1,
            }}
          />
          <m.div
            className={`absolute top-[31%] hidden h-[40%] w-[70%] rounded-r-full bg-[#DCDEDF] md:flex`}
            // delayed
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
            }}
          />
          {/* Mobile: From top */}
          <m.div
            className={`absolute h-full w-full rounded-b-full bg-brand-gray opacity-[16%] md:hidden`}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <m.div
            className={`absolute top-0 h-[75%] w-full rounded-b-full bg-brand-gray opacity-[16%] md:hidden`}
            // delayed
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.1,
            }}
          />
          <m.div
            className={`absolute top-0 h-[40%] w-full rounded-b-full bg-[#DCDEDF] md:hidden`}
            // delayed
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
            }}
          />
        </LazyMotion>
      </div>
    </section>
  );
};

export default TertiaryHero;
