import { FeaturedImage } from "components/FeaturedImage";
import {
  Page_Flexiblecontent_Blocks_TeamMembers,
  TeamMember,
  TeamMember_Teammemberoptions,
} from "graphql";

export interface TeamMembersProps
  extends Page_Flexiblecontent_Blocks_TeamMembers {
  className?: string;
}

const menuHoverColor = (i: number) => {
  switch (i) {
    case 0:
      return "brand-blue";
    case 1:
      return "brand-green";
    case 2:
      return "brand-orange";
    case 3:
      return "brand-blue";
    case 4:
      return "brand-green";
    case 5:
      return "brand-orange";
    case 6:
      return "brand-blue";
    default:
      return "brand-blue";
  }
};

const TeamMembers = ({ className, title, members }: TeamMembersProps) => {
  const hasMembers = members && members.length > 0;
  const moddedMembers = members as TeamMember[];

  return (
    <div className={`${className ? className : ``}`}>
      <div className={`container mx-auto max-w-4xl px-4 py-12 md:px-8 lg:px-0`}>
        {title ? (
          <h2
            className={`w-fit border-[1px] border-x-0 border-t-0 border-b-brand-red pb-4 pr-6 text-left font-sans text-xl uppercase text-secondary`}
          >
            {title}
          </h2>
        ) : null}
        <ul className={`flex flex-col gap-8 py-12`}>
          {hasMembers
            ? moddedMembers.map(({ id, name, teamMemberOptions }, i) => {
                const { headshot, title, biography } =
                  teamMemberOptions as TeamMember_Teammemberoptions;

                return (
                  <li
                    key={id}
                    className={`flex flex-col gap-4 bg-white p-8 pb-8 md:flex-row md:gap-12`}
                  >
                    <div
                      className={`flex flex-col gap-2 md:w-1/3 md:border-r-[1px] md:border-primary md:pr-6`}
                    >
                      <FeaturedImage className={`w-full`} image={headshot} />
                      {name ? (
                        <h3
                          className={`text-center font-serif text-3xl font-light text-secondary`}
                        >
                          {name}
                        </h3>
                      ) : null}
                      {title ? (
                        <h4
                          className={`text-md text-center font-sans uppercase text-secondary`}
                        >
                          {title}
                        </h4>
                      ) : null}
                    </div>
                    <div className={`flex flex-col gap-8 md:w-2/3`}>
                      {biography ? (
                        <div
                          className={`text-left font-body text-lg text-secondary`}
                          dangerouslySetInnerHTML={{ __html: biography }}
                        />
                      ) : null}
                    </div>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default TeamMembers;
