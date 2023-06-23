import { useQuery, gql } from "@apollo/client";
import * as MENUS from "constants/menus";
import { Layout, Blocks } from "features"; // Blocks eventually
import { NavigationMenu } from "components";
import {
  BLOG_INFO_FRAGMENT,
  SITE_SETTINGS_FRAGMENT,
  SEO_FRAGMENT,
  SEO_CONFIG_FRAGMENT,
  FLEXIBLE_CONTENT_FRAGMENT,
} from "fragments";

export default function Component() {
  const { data, loading, error } = useQuery(Component.query, {
    variables: Component.variables(),
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { page, headerMenuItems, footerMenuItems, siteSettings } = data;
  const {
    seo,
    title,
    flexibleContent: { blocks },
  } = page;
  const {
    address,
    customAddressLabel,
    phoneNumber,
    logo,
    logoWhite,
    logoAlt,
    cta,
    email,
    footerLogo,
  } = siteSettings.siteSettings;

  return (
    <Layout
      headerMenuItems={headerMenuItems}
      footerMenuItems={footerMenuItems}
      siteSettings={siteSettings}
      seo={seo}
      logo={logo}
      logoWhite={logoWhite}
      logoAlt={logoAlt}
      cta={cta}
      email={email}
      footerLogo={footerLogo}
      address={address}
    >
      <Blocks blocks={blocks} />
    </Layout>
  );
}

Component.query = gql`
  query HomePage(
    $headerLocation: MenuLocationEnum!
    $footerLocation: MenuLocationEnum!
    $asPreview: Boolean = false
  ) {
    generalSettings {
      ...BlogInfoFragment
    }
    siteSettings {
      ...SiteSettingsFragment
    }
    page(id: "/", idType: URI, asPreview: $asPreview) {
      id
      title
      seo {
        ...SEOFragment
      }
      flexibleContent {
        ...FlexibleContentFragment
      }
    }
    headerMenuItems: menuItems(
      where: { location: $headerLocation }
      first: 50
    ) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(
      where: { location: $footerLocation }
      first: 50
    ) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
  ${BLOG_INFO_FRAGMENT}
  ${SITE_SETTINGS_FRAGMENT}
  ${NavigationMenu.fragments.entry}
  ${SEO_FRAGMENT}
  ${FLEXIBLE_CONTENT_FRAGMENT}
`;

Component.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    asPreview: false,
  };
};
