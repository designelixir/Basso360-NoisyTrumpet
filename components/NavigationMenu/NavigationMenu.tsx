import { gql } from "@apollo/client";
import { MenuItem } from "graphql";
import Link from "next/link";
import { AnimatePresence, m, LazyMotion } from "framer-motion";
import { itemVariants, sideVariants } from "./Fragments/variants";
import { MenuButton } from "./Fragments/MenuButton";
import NavigationSocials from "./Fragments/NavigationSocials";
import { useEffect } from "react";
const loadFeatures = () =>
  import("utilities/framerFeatures.js").then((res) => res.default);

interface Social {
  type: string;
  url: string;
}

interface NavigationMenuProps {
  menuItems: MenuItem[] | undefined;
  className?: string;
  type?: "primary" | "footer";
  isMobile?: boolean;
  isOpen?: boolean;
  toggleOpen?: () => void;
  isScrolledPast?: boolean;
  isSub?: boolean;
  socials?: Social[];
}

const menuHoverColor = (i: number) => {
  switch (i) {
    case 0:
      return "text-brand-blue";
    case 1:
      return "text-brand-green";
    case 2:
      return "text-brand-orange";
    case 3:
      return "text-brand-blue";
    case 4:
      return "text-brand-green";
    case 5:
      return "text-brand-orange";
    case 6:
      return "text-brand-blue";
    default:
      return "text-brand-blue";
  }
};

const NavigationMenu = ({
  menuItems,
  className,
  type = "primary",
  isMobile,
  isOpen,
  toggleOpen,
  isScrolledPast,
  isSub,
  socials,
}: NavigationMenuProps) => {
  const isFooter = type === "footer";

  const height = `100dvh`;
  // Eleiminate body scroll when menu is open
  useEffect(() => {
    let isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }
  }, [isOpen]);

  if (!menuItems) {
    return null;
  }
  if (isFooter) {
    return <></>;
  }

  return (
    <>
      <LazyMotion features={loadFeatures}>
        <MenuButton
          className={`xl:hidden`}
          isOpen={isOpen}
          onClick={toggleOpen}
          lineProps={{ strokeLinecap: "round" }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          width="24"
          height="24"
          strokeWidth="6"
          color={`white`}
        />
        <AnimatePresence>
          {isOpen ? (
            <m.aside
              initial={{ width: 0 }}
              animate={{
                width: "100%",
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
              className={`absolute left-0 top-full z-50 grid w-full items-center bg-brand-dark-gray`}
              style={{
                height,
              }}
            >
              <m.nav
                className={`bottom-100 z-40 flex w-full flex-col gap-8 font-sans`}
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
                aria-label={`Mobile Menu`}
              >
                {menuItems.map(({ path, label }) => (
                  <m.div
                    key={path}
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    className={`w-full py-4 text-center text-2xl uppercase`}
                  >
                    <Link
                      href={path ?? "/"}
                      className={`hover:${menuHoverColor(
                        0
                      )} w-full text-brand-white`}
                    >
                      {label}
                    </Link>
                  </m.div>
                ))}
                {/* Socials */}
                <NavigationSocials socials={socials} />
              </m.nav>
            </m.aside>
          ) : null}
        </AnimatePresence>
      </LazyMotion>
      <nav
        className={`font-heading text-md left-4 hidden flex-col gap-4 uppercase transition-all duration-300 ease-in-out xl:relative xl:flex`}
      >
        {menuItems.map(({ path, label }, i) => (
          <Link
            key={`nav-${path}`}
            href={path ?? "/"}
            className={`mr-5 hover:${menuHoverColor(i)}  ${
              isScrolledPast || isSub ? `text-brand-gray` : `text-brand-white`
            } font-regular font-sans drop-shadow-lg`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default NavigationMenu;

NavigationMenu.fragments = {
  entry: gql`
    fragment NavigationMenuItemFragment on MenuItem {
      id
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  `,
};
