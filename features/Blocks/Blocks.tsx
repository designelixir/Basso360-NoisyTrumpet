import dynamic from "next/dynamic";
// Hero: (Non dynamic import) Above the fold content
import { Hero } from "components";
// // Dynamic Imports: Below the fold content
const Form = dynamic(() => import("components/Form/Form"), {
  ssr: true,
});
// Text Block:
const TextBlock = dynamic(() => import("components/TextBlock/TextBlock"), {
  ssr: true,
});
// Team Members:
const TeamMembers = dynamic(
  () => import("components/TeamMembers/TeamMembers"),
  {
    ssr: true,
  }
);
// Work Grid:
const WorkGrid = dynamic(() => import("components/WorkGrid/WorkGrid"), {
  ssr: true,
});
// PressList:
const PressList = dynamic(() => import("components/PressList/PressList"), {
  ssr: true,
});
// AboutUs:
const AboutUs = dynamic(() => import("components/AboutUs/AboutUs"), {
  ssr: true,
});
// Features:
const Features = dynamic(() => import("components/Features/Features"), {
  ssr: true,
});
// ClientGrid:
const ClientGrid = dynamic(() => import("components/ClientGrid/ClientGrid"), {
  ssr: true,
});
// CTA:
const CTA = dynamic(() => import("components/CTA/CTA"), {
  ssr: true,
});
// Expertise:
const Expertise = dynamic(() => import("components/Expertise/Expertise"), {
  ssr: true,
});
// GoogleMap:
const GoogleMap = dynamic(() => import("components/GoogleMap/GoogleMap"), {
  ssr: true,
});
// VideoGrid:
const VideoGrid = dynamic(() => import("components/VideoGrid/VideoGrid"), {
  ssr: true,
});
// LogoGrid
const LogoGrid = dynamic(() => import("components/LogoGrid/LogoGrid"), {
  ssr: true,
});

import {
  Page_Flexiblecontent_Blocks,
  Page_Flexiblecontent_Blocks_Hero,
  Page_Flexiblecontent_Blocks_TextBlock,
  Page_Flexiblecontent_Blocks_Form,
  Page_Flexiblecontent_Blocks_TeamMembers,
  Page_Flexiblecontent_Blocks_Cta,
  Page_Flexiblecontent_Blocks_ClientGrid,
  Page_Flexiblecontent_Blocks_Features,
  Page_Flexiblecontent_Blocks_AboutUs,
  Page_Flexiblecontent_Blocks_PressList,
  Page_Flexiblecontent_Blocks_WorkGrid,
  Page_Flexiblecontent_Blocks_Expertise,
  Page_Flexiblecontent_Blocks_GoogleMap,
  AcfLink,
  Page_Flexiblecontent_Blocks_VideoGrid,
  Page_Flexiblecontent_Blocks_LogoGrid,
} from "graphql";

interface BlocksProps {
  blocks: Page_Flexiblecontent_Blocks[];
}

interface BlockProps {
  block:
    | Page_Flexiblecontent_Blocks_Hero
    | Page_Flexiblecontent_Blocks_TextBlock
    | Page_Flexiblecontent_Blocks_Form
    | Page_Flexiblecontent_Blocks_TeamMembers
    | Page_Flexiblecontent_Blocks_Cta
    | Page_Flexiblecontent_Blocks_ClientGrid
    | Page_Flexiblecontent_Blocks_Features
    | Page_Flexiblecontent_Blocks_AboutUs
    | Page_Flexiblecontent_Blocks_PressList
    | Page_Flexiblecontent_Blocks_WorkGrid
    | Page_Flexiblecontent_Blocks_Expertise
    | Page_Flexiblecontent_Blocks_GoogleMap
    | Page_Flexiblecontent_Blocks_VideoGrid
    | Page_Flexiblecontent_Blocks_LogoGrid;
}
const prefix = "Page_Flexiblecontent_Blocks_" || "Work_Flexiblecontent_Blocks_";

const Block = ({ block }: BlockProps) => {
  const { __typename } = block ?? {};

  let name = __typename && __typename.replace(prefix, "");

  switch (name) {
    // Hero
    case "Hero": {
      return <Hero {...(block as Page_Flexiblecontent_Blocks_Hero)} />;
    }
    // // Form
    case "Form": {
      return <Form {...(block as Page_Flexiblecontent_Blocks_Form)} />;
    }
    // Text Block
    case "TextBlock": {
      return (
        <TextBlock {...(block as Page_Flexiblecontent_Blocks_TextBlock)} />
      );
    }
    // Team Members
    case "TeamMembers": {
      return (
        <TeamMembers {...(block as Page_Flexiblecontent_Blocks_TeamMembers)} />
      );
    }
    // Work Grid
    case "WorkGrid": {
      return <WorkGrid {...(block as Page_Flexiblecontent_Blocks_WorkGrid)} />;
    }
    // Press List
    case "PressList": {
      return (
        <PressList {...(block as Page_Flexiblecontent_Blocks_PressList)} />
      );
    }
    // About Us
    case "AboutUs": {
      return <AboutUs {...(block as Page_Flexiblecontent_Blocks_AboutUs)} />;
    }
    // Features
    case "Features": {
      return <Features {...(block as Page_Flexiblecontent_Blocks_Features)} />;
    }
    // Client Grid
    case "ClientGrid": {
      return (
        <ClientGrid {...(block as Page_Flexiblecontent_Blocks_ClientGrid)} />
      );
    }
    // CTA
    case "Cta": {
      return <CTA {...(block as Page_Flexiblecontent_Blocks_Cta)} />;
    }
    // Expertise
    case "Expertise": {
      return (
        <Expertise {...(block as Page_Flexiblecontent_Blocks_Expertise)} />
      );
    }
    // Google Map
    case "GoogleMap": {
      return (
        <GoogleMap {...(block as Page_Flexiblecontent_Blocks_GoogleMap)} />
      );
    }
    // VideoGrid
    case "VideoGrid": {
      return (
        <VideoGrid {...(block as Page_Flexiblecontent_Blocks_VideoGrid)} />
      );
    }
    // LogoGrid
    case "LogoGrid": {
      return <LogoGrid {...(block as Page_Flexiblecontent_Blocks_LogoGrid)} />;
    }

    default: {
      return null;
    }
  }
};

const Blocks = ({ blocks = [] }: BlocksProps): JSX.Element => {
  return (
    <>
      {blocks &&
        blocks.map((block, index) => (
          <Block block={block} key={`block-${index}`} />
        ))}
    </>
  );
};

export default Blocks;
