import { gql } from "@apollo/client";
import { MEDIA_ITEM_FRAGMENT } from "./MediaItemFragment";

export const FLEXIBLE_CONTENT_FRAGMENT = gql`
  fragment FlexibleContentFragment on Page_Flexiblecontent {
    blocks {
      ... on Page_Flexiblecontent_Blocks_Hero {
        content
        fieldGroupName
        variant
        useAnimation
        title
        isH1
        icon {
          ...MediaItemFragment
        }
        image {
          ...MediaItemFragment
        }
        video {
          mediaItemUrl
        }
        hasScrollDown
        scrollDownId
        ctas {
          type
          link {
            title
            target
            url
          }
        }
      }
      ... on Page_Flexiblecontent_Blocks_TextBlock {
        content
        fieldGroupName
        variant
        id
        title
        cta {
          target
          title
          url
        }
        hasUnderline
      }
      ... on Page_Flexiblecontent_Blocks_Form {
        content
        fieldGroupName
        form
        title
      }
      ... on Page_Flexiblecontent_Blocks_TeamMembers {
        fieldGroupName
        title
        members {
          ... on TeamMember {
            id
            name
            teamMemberOptions {
              biography
              title
              headshot {
                ...MediaItemFragment
              }
            }
          }
        }
      }
      ... on Page_Flexiblecontent_Blocks_Cta {
        body
        fieldGroupName
        underline
        type
        title
        link {
          target
          title
          url
        }
      }
      ... on Page_Flexiblecontent_Blocks_ClientGrid {
        fieldGroupName
        title
        titleUnderlineColor
        backgroundColor
        items {
          type
          client {
            id
            slug
            name
            clientOptions {
              color
              logo {
                ...MediaItemFragment
              }
              logoAlt {
                ...MediaItemFragment
              }
            }
          }
        }
      }
      ... on Page_Flexiblecontent_Blocks_Features {
        fieldGroupName
        title
        items {
          body
          title
          icon {
            ...MediaItemFragment
          }
        }
      }
      ... on Page_Flexiblecontent_Blocks_AboutUs {
        content
        fieldGroupName
        subTitle
        title
        items {
          copy
          type
        }
      }
      ... on Page_Flexiblecontent_Blocks_PressList {
        backgroundColor
        fieldGroupName
        title
        titleUnderlineColor
        cta {
          target
          title
          url
        }
        items {
          ... on Press_release {
            id
            uri
            title
            excerpt
            pressOptions {
              externalLink
              isExternal
              outletLogo {
                ...MediaItemFragment
              }
            }
          }
        }
      }
      ... on Page_Flexiblecontent_Blocks_WorkGrid {
        fieldGroupName
        title
        items {
          isFeatured
          work {
            ... on Work {
              id
              title
              uri
              clients {
                nodes {
                  slug
                  name
                  clientOptions {
                    color
                    logo {
                      ...MediaItemFragment
                    }
                  }
                }
              }
              workOptions {
                featuredBlockImage {
                  ...MediaItemFragment
                }
              }
            }
          }
        }
      }
      ... on Page_Flexiblecontent_Blocks_Expertise {
        title
        items {
          icon {
            ...MediaItemFragment
          }
          label
          content
          color
        }
      }
      ... on Page_Flexiblecontent_Blocks_GoogleMap {
        address {
          city
          country
          countryShort
          latitude
          longitude
          placeId
          postCode
          state
          stateShort
          streetAddress
          streetName
          streetNumber
          zoom
        }
      }
      ... on Page_Flexiblecontent_Blocks_LogoGrid {
        fieldGroupName
        title
        textAlign
        items {
          logo {
            ...MediaItemFragment
          }
          label
          link {
            target
            title
            url
          }
        }
        variant
      }
      ... on Page_Flexiblecontent_Blocks_VideoGrid {
        id
        fieldGroupName
        title
        cta {
          target
          title
          url
        }
        items {
          type
          image {
            ...MediaItemFragment
          }
          video {
            mediaDetails {
              height
              width
            }
            mediaItemUrl
            mimeType
            id
          }
        }
      }
    }
  }
  ${MEDIA_ITEM_FRAGMENT}
`;
