import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

interface Social {
  type: string;
  url: string;
}

interface SocialProps {
  socials?: Social[];
}

const NavigationSocials = ({ socials }: SocialProps) => {
  const socialDefaultClass = `rounded-full bg-brand-white p-2 hover:bg-gray- transition duration-300 ease-in-out`;

  return (
    // Floating Socials
    <div className={`flex flex-row flex-wrap justify-center gap-4`}>
      {socials
        ? socials.map(({ type, url }) => {
            switch (type) {
              case "instagram":
                return (
                  <a
                    key={type}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className={socialDefaultClass}
                  >
                    <BsInstagram className={`h-6 w-6 text-primary`} />
                  </a>
                );
              case "facebook":
                return (
                  <a
                    key={type}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className={socialDefaultClass}
                  >
                    <BsFacebook className={`h-6 w-6 text-primary`} />
                  </a>
                );
              case "twitter":
                return (
                  <a
                    key={type}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className={socialDefaultClass}
                  >
                    <BsTwitter className={`h-6 w-6 text-primary`} />
                  </a>
                );
              case "linkedin":
                return (
                  <a
                    key={type}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className={socialDefaultClass}
                  >
                    <BsLinkedin className={`h-6 w-6 text-primary`} />
                  </a>
                );
              default:
                return null;
            }
          })
        : null}
    </div>
  );
};

export default NavigationSocials;
