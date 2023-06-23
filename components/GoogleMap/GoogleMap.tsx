import { Acf_GoogleMap, Page_Flexiblecontent_Blocks_GoogleMap } from "graphql";

interface GoogleMapProps extends Page_Flexiblecontent_Blocks_GoogleMap {
  className?: string;
}

const GoogleMap = ({ className, address }: GoogleMapProps) => {
  if (!address) return null;
  const { city, country, postCode, state, streetAddress } =
    address as Acf_GoogleMap;
  return (
    <section
      className={`${
        className ? className : ``
      } container mx-auto max-w-4xl py-8`}
    >
      <div className="flex flex-col items-center justify-center">
        <iframe
          className="h-[500px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${streetAddress}+${city}+${state}+${postCode}+${country}`}
          title="Google Map"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default GoogleMap;
