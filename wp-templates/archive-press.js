import { useQuery, gql } from "@apollo/client";
import * as MENUS from "constants/menus";
import { Layout, Blocks } from "features"; // Blocks eventually
import { NavigationMenu, PressCard, CTA } from "components";
import {
  BLOG_INFO_FRAGMENT,
  SITE_SETTINGS_FRAGMENT,
  SEO_FRAGMENT,
  SEO_CONFIG_FRAGMENT,
  MEDIA_ITEM_FRAGMENT,
  FLEXIBLE_CONTENT_FRAGMENT,
} from "fragments";

export default function Component() {
  const { data, loading, error, fetchMore } = useQuery(Component.query, {
    variables: Component.variables(),
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const {
    page,
    headerMenuItems,
    footerMenuItems,
    siteSettings,
    seo: defaultSEO,
    pressReleases: { nodes: pressReleases },
    categories,
  } = data;

  const { social } = defaultSEO;

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
    turnOnAnnouncements,
    announcements,
    footerLogo,
  } = siteSettings.siteSettings;

  console.log(pressReleases);

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
      twitterUser={defaultSEO.social.twitter.username}
      address={address}
      customAddressLabel={customAddressLabel}
      phoneNumber={phoneNumber}
      email={email}
      social={social}
      turnOnAnnouncements={turnOnAnnouncements}
      announcements={announcements}
      footerLogo={footerLogo}
      isSub
    >
      <Blocks blocks={blocks} />
      <div className="container mx-auto max-w-4xl">
        {pressReleases.map((pressRelease) => {
          return <PressCard key={pressRelease.id} press={pressRelease} />;
        })}
      </div>
      <CTA
        title="Interested in working with us?"
        link={{
          title: "Let's Get Started",
          url: "/contact",
        }}
        type="primary"
      />
    </Layout>
  );
}

Component.query = gql`
  query PressPage(
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
    seo {
      ...SEOConfigFragment
    }
    page(id: 53, idType: DATABASE_ID, asPreview: $asPreview) {
      id
      title
      seo {
        ...SEOFragment
      }
      flexibleContent {
        ...FlexibleContentFragment
      }
    }
    categories {
      nodes {
        id
        name
        slug
      }
    }
    pressReleases {
      nodes {
        id
        title
        excerpt
        uri
        date
        pressOptions {
          isExternal
          externalLink
        }
        featuredImage {
          node {
            ...MediaItemFragment
          }
        }
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
  ${SEO_CONFIG_FRAGMENT}
  ${MEDIA_ITEM_FRAGMENT}
  ${FLEXIBLE_CONTENT_FRAGMENT}
`;

Component.variables = (ctx) => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    asPreview: ctx?.asPreview ?? false,
  };
};
