import { Button } from "components/Button";
import { FeaturedImage } from "components/FeaturedImage";
import {
  MediaDetails,
  MediaItem,
  Page_Flexiblecontent_Blocks_VideoGrid,
  Page_Flexiblecontent_Blocks_VideoGrid_Items,
} from "graphql";

interface VideoGridProps extends Page_Flexiblecontent_Blocks_VideoGrid {
  className?: string;
}

const VideoGrid = ({ className, title, items, cta, id }: VideoGridProps) => {
  const hasItems = items && items?.length > 0;

  return (
    <section
      className={`${
        className ? className : ``
      } container mx-auto flex max-w-4xl flex-col gap-4 px-4 py-6 md:gap-6 md:py-8`}
      id={id || ``}
    >
      {title ? (
        <div
          className={`flex flex-col gap-4 border-y-[12px] border-y-brand-gray bg-secondary py-6`}
        >
          <h2
            className={`-mt-2 text-center font-serif text-4xl font-light text-white`}
          >
            {title}
          </h2>
        </div>
      ) : null}
      {hasItems ? (
        <div className={`flex flex-row flex-wrap`}>
          {items.map((item, index) => {
            const { type, video, image } =
              item as Page_Flexiblecontent_Blocks_VideoGrid_Items;

            const { id, mimeType, mediaItemUrl, mediaDetails } =
              (video as MediaItem) || {};

            const { width, height } = (mediaDetails as MediaDetails) || {};

            const wrapperClass = () => {
              let defaultClass = `p-2`;
              switch (type) {
                case `full`:
                  return `w-full ${defaultClass}`;
                case `1/2`:
                  return `w-1/2 ${defaultClass}`;
                case `1/4`:
                  return `w-[35%] ${defaultClass}`;
                case `3/4`:
                  return `w-[65%] ${defaultClass}`;
                case `[65%]`:
                  return `w-[60%] ${defaultClass}`;
                case `[35%]`:
                  return `w-[40%] ${defaultClass}`;
                default:
                  return ``;
              }
            };

            if (image) {
              return (
                <div className={wrapperClass()} key={image?.id}>
                  <FeaturedImage
                    image={image}
                    className={`h-full w-full object-cover`}
                    imgClassName="w-full object-cover h-full"
                  />
                </div>
              );
            }

            return (
              <div className={wrapperClass()} key={id}>
                <video
                  preload="lazy"
                  className={`h-full w-full object-cover`}
                  src={mediaItemUrl || ``}
                  width={width || 1920}
                  height={height || 1080}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                />
              </div>
            );
          })}
        </div>
      ) : null}
      {cta ? (
        <div className={`flex justify-center`}>
          <Button href={cta?.url || ``} variant="primary">
            {cta?.title || `Learn More`}
          </Button>
        </div>
      ) : null}
    </section>
  );
};

export default VideoGrid;
