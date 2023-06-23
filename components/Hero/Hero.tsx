import { FeaturedImage } from "components/FeaturedImage";
import { Page_Flexiblecontent_Blocks_Hero } from "graphql";
import Scroll from "public/icons/scroll.svg";
import { HiChevronDoubleDown } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import LoadingHero from "./Fragments/LoadingHero";

export interface HeroProps extends Page_Flexiblecontent_Blocks_Hero {
  className?: string;
}
import Link from "next/link";

const Hero = ({
  className,
  title,
  video,
  image,
  icon,
  variant,
  content,
  ctas,
  useAnimation,
  hasScrollDown,
  scrollDownId,
}: HeroProps) => {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  const isTertiary = variant === "tertiary";
  const isAnimated = variant === "animated" && useAnimation;
  const videoSrc = video?.mediaItemUrl;

  const heroWrapperClasses = twMerge(
    `${className || ""}`,
    useAnimation ? `bg-primary` : ``,
    !image ? `py-8 xl:py-12` : ``,
    isPrimary
      ? `relative grid max-h-full w-screen overflow-hidden md:h-screen`
      : ``,
    isSecondary
      ? `container max-w-4xl mx-auto border-t-0 border-b-[16px] xl:border-y-[16px] border-brand-gray bg-secondary`
      : ``
  );

  if (isTertiary) {
    return <LoadingHero title={title} content={content} icon={icon} />;
  }

  return (
    <div
      className={heroWrapperClasses}
      style={{ gridTemplate: `"content" 1fr / 1fr` }}
      id="hero"
    >
      {videoSrc && isPrimary ? (
        <video
          className={`absolute h-full w-full object-cover`}
          autoPlay
          muted
          loop
          playsInline
          src={videoSrc}
          poster="/hero/poster.webp"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}
      {isAnimated ? (
        <div
          className={`gradient relative z-30 flex h-full w-full items-center justify-center bg-primary`}
          style={{
            gridArea: `content`,
          }}
        />
      ) : null}
      <div
        className={`container relative z-40 mx-auto`}
        style={{
          gridArea: `content`,
        }}
      >
        <div className={`grid h-full w-full place-items-center`}>
          {isSecondary && image ? (
            <FeaturedImage
              image={image}
              className={`h-full w-full object-cover`}
              imgClassName={`flex-shink-0 h-full w-full object-cover`}
              priority
              quality={100}
            />
          ) : null}
          <div className={`flex flex-col gap-6 py-4`}>
            {title ? (
              <h1
                className={`${
                  isPrimary ? `pb-20 pt-20 md:py-24  md:text-6xl` : ``
                } px-4 text-center font-serif text-3xl font-thin text-white drop-shadow-lg `}
              >
                <span className={`${isPrimary ? `hidden` : ``}`}>{title}</span>
              </h1>
            ) : null}
            {content ? (
              <div
                className={`${
                  isPrimary ? `sr-only` : null
                } text-md w-full px-6 text-center font-sans font-thin text-white drop-shadow-lg`}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : null}
            {hasScrollDown && scrollDownId && isSecondary ? (
              <Link
                href={scrollDownId ?? ``}
                className={`mx-auto animate-bounce text-white`}
                aria-label={`Scroll down`}
              >
                <Scroll className={`h-8 w-8`} />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
      {hasScrollDown && scrollDownId && isPrimary ? (
        <div
          className={`absolute bottom-0 left-0 z-40 hidden h-1/3 w-full items-end bg-gradient-to-t from-primary md:flex`}
        >
          <Link
            href={scrollDownId ?? ``}
            className={`z-40 mx-auto mb-12 animate-bounce text-white md:mb-24`}
            aria-label={`Scroll down`}
          >
            <HiChevronDoubleDown className={`mb-10 h-12 w-12 drop-shadow-lg`} />
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Hero;
