import { FeaturedImage } from "components/FeaturedImage";
import {
  Page_Flexiblecontent_Blocks_Features,
  Page_Flexiblecontent_Blocks_Features_Items,
} from "graphql";
import Balancer from "react-wrap-balancer";

export interface FeaturesProps extends Page_Flexiblecontent_Blocks_Features {
  className?: string;
}

const Features = ({ className, title, items }: FeaturesProps) => {
  const hasItems = items && items.length > 0;
  const length = items && items.length;
  const features = items as Page_Flexiblecontent_Blocks_Features_Items[];

  return (
    <section
      className={`${
        className ? className : ``
      } container relative mx-auto px-4 py-12`}
    >
      <div className={`relative mx-auto grid max-w-4xl gap-16`}>
        {title ? (
          <h2
            className={`font-serif text-3xl font-thin text-secondary md:text-4xl`}
          >
            {title}
          </h2>
        ) : null}
        {hasItems ? (
          <div className={`grid grid-cols-1 gap-6 md:grid-cols-3`}>
            {features.map(({ title, body, icon }, index) => {
              return (
                <div key={`feature-${index}`} className={`flex flex-col gap-8`}>
                  <div className={`flex items-center gap-6`}>
                    {icon ? (
                      <FeaturedImage image={icon} className={`h-auto w-12`} />
                    ) : null}
                    {title ? (
                      <h3 className={`font-sans text-sm`}>
                        <Balancer>{title}</Balancer>
                      </h3>
                    ) : null}
                  </div>
                  {body ? (
                    <div
                      className={`px-6 font-body text-sm`}
                      dangerouslySetInnerHTML={{ __html: body }}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Features;
