import { Button } from "components/Button";
import { Page_Flexiblecontent_Blocks_TextBlock } from "graphql";
import LogoAlt from "public/logo/logo-alt.svg";
import { LazyMotion, m } from "framer-motion";
import { variants } from "./Fragments/variants";
const loadFeatures = () =>
  import("utilities/framerFeatures.js").then((res) => res.default);
export interface TextBlockProps extends Page_Flexiblecontent_Blocks_TextBlock {
  className?: string;
}

const TextBlock = ({
  className,
  title,
  content,
  cta,
  variant,
  id,
  hasUnderline,
}: TextBlockProps) => {
  const isFeatured = variant === "featured";

  return (
    <section id={id ?? ``} className={`container relative mx-auto`}>
      <LazyMotion features={loadFeatures}>
        <m.div
          initial="offscreen"
          variants={variants}
          whileInView={"onscreen"}
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <div
            className={`relative mx-auto grid max-w-3xl gap-4 px-8 ${
              isFeatured ? `py-16 md:py-28` : `py-8`
            } md:px-16`}
          >
            {isFeatured ? (
              <div className={`-left-24 top-16 mx-auto md:absolute md:mx-0`}>
                <LogoAlt className={`w-32 animate-spin-slow`} />
              </div>
            ) : null}
            {title ? (
              <h2 className={`font-sans text-3xl text-primary`}>{title}</h2>
            ) : null}
            {content ? (
              <div
                className={`${
                  hasUnderline ? `border-b-[1px] border-brand-red` : ``
                } pb-8 text-2xl text-primary ${
                  isFeatured ? `font-serif font-thin` : `font-body`
                }`}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : null}
            {cta ? (
              <div className={`mt-8`}>
                <Button href={cta?.url ?? ""} variant="primary">
                  {cta?.title ?? ""}
                </Button>
              </div>
            ) : null}
          </div>
        </m.div>
      </LazyMotion>
    </section>
  );
};

export default TextBlock;
