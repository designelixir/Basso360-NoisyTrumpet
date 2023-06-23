import { Button } from "components/Button";
import { FeaturedImage } from "components/FeaturedImage";
import { AcfLink, Acf_GoogleMap, MediaItem, MenuItem } from "graphql";
import Link from "next/link";

export interface FooterProps {
  logo: MediaItem;
  menuItems: MenuItem[];
  phoneNumber: AcfLink;
  address: Acf_GoogleMap;
  email: AcfLink;
  cta: AcfLink;
  footerLogo?: MediaItem;
}

const Footer = ({
  logo,
  menuItems,
  phoneNumber,
  address,
  email,
  cta,
  footerLogo,
}: FooterProps) => {
  const { title: emailTitle, url: emailUrl } = email;
  const { streetName, streetNumber, city, state, postCode, placeId } = address;
  const mapsLink = `https://www.google.com/maps/place/${streetNumber}+${streetName}+${city}+${state}+${postCode}`;
  return (
    <footer className={`text-primary`}>
      <div
        className={`container mx-auto flex  max-w-7xl flex-col flex-wrap border-[1px] border-x-0 border-b-0 border-t-brand-light-brown py-8 md:flex-row md:justify-between`}
      >
        {/* Footer Details */}
        <div
          className={`flex w-full flex-col items-center gap-8 px-4 text-center md:flex-row md:items-start md:justify-between md:text-left`}
        >
          {/* Email */}
          <div className={`flex flex-col items-center gap-6 md:items-start`}>
            {emailTitle && emailUrl ? (
              <Button
                href={emailUrl}
                aria-label="Email"
                variant="secondary-outline"
              >
                {emailTitle}
              </Button>
            ) : null}
            {/* Address */}
            {address ? (
              <a
                href={mapsLink}
                className={`font-body  transition-colors duration-300 ease-in-out hover:text-brand-green hover:underline md:text-base`}
                aria-label="Address"
              >
                {`${streetNumber} ${streetName}, STE 960`}
                <br />
                {`${city}, ${state} ${postCode}`}
              </a>
            ) : null}
          </div>
          {footerLogo ? (
            <FeaturedImage
              image={footerLogo}
              className={`mx-auto h-32 w-32 object-contain md:mx-0`}
            />
          ) : null}
          {/* Privacy Policy */}
          <div className={`flex flex-col gap-6 text-center md:text-right`}>
            <Link
              href={`/privacy-policy`}
              className={` font-body  transition-colors duration-300 ease-in-out hover:text-brand-blue hover:underline md:text-base`}
            >
              Privacy Policy
            </Link>
            {/* Site by */}
            <div className={`flex flex-col `}>
              <a
                href={`https://noisytrumpet.com`}
                className={`font-body  transition-colors duration-300 ease-in-out hover:text-brand-orange hover:underline md:text-base`}
                aria-label="Site by Noisy Trumpet"
              >
                Site by Noisy Trumpet
              </a>
            </div>
            {/* CopyRight */}
            <p className={`font-body text-base `}>
              Copyright &copy; {new Date().getFullYear()} Basso Yanity
            </p>
          </div>
        </div>
        {/* Footer Logo */}
        <div className={`flex w-full flex-col items-center`}></div>
      </div>
    </footer>
  );
};

export default Footer;
