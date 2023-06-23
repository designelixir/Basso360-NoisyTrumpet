import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

interface Social {
  type: string;
  url: string;
}

interface SocialProps {
  socials: Social[];
  isSub?: boolean;
}

const FloatingSocials = ({ socials, isSub }: SocialProps) => {
  const socialsRef = useRef(null);
  const [isScrolledPastSocials, setIsScrolledPastSocials] = useState(false);
  const { scrollY: scrollYSocials } = useScroll({
    target: socialsRef,
    offset: ["start end", "end end"],
    layoutEffect: false,
  });

  useMotionValueEvent(scrollYSocials, "change", (latest) => {
    const viewPortHeight = window.innerHeight - 700;
    if (latest > viewPortHeight) {
      setIsScrolledPastSocials(true);
    } else {
      setIsScrolledPastSocials(false);
    }
  });
  const socialDefaultClass = `rounded-full bg-white p-2 hover:bg-gray-100/50 transition duration-300 ease-in-out`;

  const socialScrolledClass = `rounded-full text-white bg-brand-dark-gray p-2 hover:bg-brand-gray transition duration-300 ease-in-out`;

  const socialClass =
    isScrolledPastSocials || isSub ? socialScrolledClass : socialDefaultClass;
  return (
    // Floating Socials
    <div
      className={`fixed right-16 top-[50%] hidden flex-col flex-wrap gap-4 xl:flex`}
      ref={socialsRef}
    >
      {socials.map(({ type, url }) => {
        switch (type) {
          case "instagram":
            return (
              <a
                key={type}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={socialClass}
              >
                <BsInstagram className={`h-6 w-6`} />
              </a>
            );
          case "facebook":
            return (
              <a
                key={type}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={socialClass}
              >
                <BsFacebook className={`h-6 w-6`} />
              </a>
            );
          case "twitter":
            return (
              <a
                key={type}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className={socialClass}
              >
                <BsTwitter className={`h-6 w-6`} />
              </a>
            );
          case "linkedin":
            return (
              <a
                key={type}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={socialClass}
              >
                <BsLinkedin className={`h-6 w-6`} />
              </a>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default FloatingSocials;
