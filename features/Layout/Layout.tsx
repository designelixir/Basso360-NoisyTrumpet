import { Main } from "features/Main"; // SEO
import {
  AcfLink,
  Acf_GoogleMap,
  MediaItem,
  PostTypeSeo,
  RootQueryToMenuItemConnection,
} from "graphql";
import { SEO } from "features/SEO";
import { Header, Footer } from "components";

import localFont from "next/font/local";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-text",
});

const nitti = localFont({
  src: [
    {
      path: "../../public/fonts/Nitti-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nitti.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nitti-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nitti-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Nitti-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-heading",
});

const maecenas = localFont({
  src: [
    {
      path: "../../public/fonts/Maecenas-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Maecenas-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Maecenas-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Maecenas-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Maecenas-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Maecenas-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Maecenas-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-body",
});

export interface LayoutProps {
  children: React.ReactNode;
  headerMenuItems: RootQueryToMenuItemConnection;
  footerMenuItems: RootQueryToMenuItemConnection;
  title: string;
  description: string;
  logo: MediaItem;
  logoAlt: MediaItem;
  logoWhite: MediaItem;
  seo: PostTypeSeo;
  cta: AcfLink;
  phoneNumber: AcfLink;
  address: Acf_GoogleMap;
  email: AcfLink;
  isSub?: boolean;
  footerLogo?: MediaItem;
}

const Layout = ({
  children,
  headerMenuItems,
  footerMenuItems,
  cta,
  title,
  description,
  seo,
  logo,
  logoAlt,
  logoWhite,
  phoneNumber,
  address,
  email,
  isSub,
  footerLogo,
}: LayoutProps) => {
  return (
    <div
      className={`h-full ${maecenas.variable} ${nitti.variable} ${lato.variable}`}
    >
      <SEO seo={seo} twitter={`BassoYanity`} />
      <Header
        menuItems={headerMenuItems.nodes}
        logo={logo}
        logoAlt={logoAlt}
        cta={cta}
        isSub={isSub}
      />
      <Main isSub={isSub} className={`main h-full`}>
        {children}
      </Main>
      <Footer
        menuItems={footerMenuItems.nodes}
        cta={cta}
        phoneNumber={phoneNumber}
        logo={logoWhite}
        address={address}
        email={email}
        footerLogo={footerLogo}
      />
    </div>
  );
};

export default Layout;
