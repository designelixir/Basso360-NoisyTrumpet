import { Button } from "components/Button";
import { Page_Flexiblecontent_Blocks_Cta } from "graphql";
import Balancer from "react-wrap-balancer";

export interface CTAProps extends Page_Flexiblecontent_Blocks_Cta {
  className?: string;
}

const CTA = ({ className, title, body, link, type, underline }: CTAProps) => {
  return (
    <section className={`${className ? className : ``} px-8 py-12`}>
      <div
        className={`container mx-auto flex max-w-4xl flex-col gap-12 px-4 ${
          underline ? `border-b-[1px] border-gray-400 pb-12` : ``
        }`}
      >
        {title ? (
          <h2 className="text-center font-serif text-3xl font-light text-secondary md:text-5xl">
            <Balancer>{title}</Balancer>
          </h2>
        ) : null}
        {body ? (
          <div
            className="text-center font-sans text-lg md:text-xl"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        ) : null}
        {link && type ? (
          <Button
            variant={type}
            href={link?.url ?? ``}
            className={`mx-auto w-fit`}
          >
            {link?.title ?? `Learn More`}
          </Button>
        ) : null}
      </div>
    </section>
  );
};

export default CTA;
