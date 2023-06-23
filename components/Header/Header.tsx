import { NavigationMenu } from "components/NavigationMenu";
import { useCycle, useMotionValueEvent, useScroll } from "framer-motion";
import { AcfLink, MediaItem, MenuItem } from "graphql";
import { useRef, useState } from "react";
import flatListToHierarchical from "utilities/flatListToHierarchical";
import Logo from "public/logo/logo.svg";
import LogoWhite from "public/logo/logo-white.svg";
import Link from "next/link";
import socials from "constants/socials";
import FloatingSocials from "./Fragments/FloatingSocials";
export interface HeaderProps {
  menuItems: MenuItem[];
  logo: MediaItem;
  logoAlt: MediaItem;
  cta: AcfLink;
  isSub?: boolean;
}

const Header = ({ menuItems, logo, logoAlt, cta, isSub }: HeaderProps) => {
  const ref = useRef(null);
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const [open, cycleOpen] = useCycle(false, true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isBrowser = typeof window !== "undefined";
    const viewPortHeight = window.innerHeight - 300;

    const isMobile = window.innerWidth < 768;
    const heroElement = window.document.getElementById("hero");
    const heroHeight = heroElement ? heroElement.offsetHeight : 0;

    if (isMobile) {
      if (latest > heroHeight) {
        setIsScrolledPast(true);
      } else {
        setIsScrolledPast(false);
      }
    } else {
      if (latest > viewPortHeight) {
        setIsScrolledPast(true);
      } else {
        setIsScrolledPast(false);
      }
    }
  });

  return (
    <header
      ref={ref}
      className={`fixed left-0 top-0 z-50 flex w-full flex-row items-center justify-between gap-6 px-8 py-2 xl:left-12 xl:w-fit xl:flex-col xl:py-6 ${
        isScrolledPast && isSub ? `bg-brand-dark-gray text-primary` : ``
      }
      ${
        isScrolledPast && !isSub
          ? `bg-brand-dark-gray text-primary xl:bg-transparent`
          : ``
      }
       ${
         isSub
           ? `bg-brand-dark-gray text-white xl:bg-transparent`
           : `text-brand-dark-gray`
       }
      ${
        open
          ? `bg-brand-dark-gray text-white xl:bg-transparent`
          : `text-brand-dark-gray`
      } transition-all duration-300 ease-in-out`}
    >
      {/* Logo */}
      <div className={`flex flex-row flex-wrap items-center justify-center`}>
        <Link href="/" aria-label="Home | Basso | Yanity 360 Advertising">
          {isScrolledPast || isSub ? (
            <>
              <Logo className={`logo-color hidden w-16 xl:flex`} />
              <LogoWhite className={`w-16 text-brand-dark-gray xl:hidden`} />
            </>
          ) : (
            <LogoWhite className={`w-16 text-brand-dark-gray`} />
          )}
        </Link>
      </div>
      <div className={`flex flex-row flex-wrap`}>
        {/* Navigation Menu */}
        <NavigationMenu
          menuItems={flatListToHierarchical(menuItems)}
          isOpen={open}
          type="primary"
          toggleOpen={() => cycleOpen()}
          isScrolledPast={isScrolledPast}
          isSub={isSub}
          socials={socials}
        />
      </div>
      {/* Floating Socials */}
      <FloatingSocials socials={socials} isSub={isSub} />
    </header>
  );
};

export default Header;
