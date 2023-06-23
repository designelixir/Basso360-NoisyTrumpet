import { FeaturedImage } from "components/FeaturedImage";
import { Press_Release, Press_Release_Pressoptions } from "graphql";
import Link from "next/link";

export interface PressListItemProps {
  className?: string;
  item: Press_Release;
}

const PressListItem: React.FC<PressListItemProps> = ({ className, item }) => {
  const { excerpt, pressOptions, uri } = item;
  const { externalLink, outletLogo } =
    pressOptions as Press_Release_Pressoptions;
  return (
    <Link href={`${externalLink ? externalLink : uri}`} className={className}>
      {excerpt ? (
        <h3
          className={`cursor-pointer font-body text-lg font-bold`}
        >{`"${excerpt}"`}</h3>
      ) : null}
      {outletLogo ? (
        <FeaturedImage imgClassName={`h-12 w-auto`} image={outletLogo} />
      ) : null}
    </Link>
  );
};

export default PressListItem;
