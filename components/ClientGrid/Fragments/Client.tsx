import { FeaturedImage } from "components/FeaturedImage";
import {
  Client,
  Client_Clientoptions,
  Page_Flexiblecontent_Blocks_ClientGrid_Items,
} from "graphql";

export interface ClientItemProps
  extends Page_Flexiblecontent_Blocks_ClientGrid_Items {
  className?: string;
}

const Client = ({ className, type, client }: ClientItemProps) => {
  const data = client as Client;
  const { clientOptions } = data;

  const { logo, logoAlt } = clientOptions as Client_Clientoptions;
  const isAlt = type === "alt";

  return (
    <FeaturedImage
      className={`${className} ${isAlt ? "grayscale filter" : ""}`}
      image={isAlt ? logoAlt : logo}
    />
  );
};

export default Client;
