import { Flex, Link } from "@chakra-ui/react";
import { SocialLinkProps } from "@/interfaces";
import {
  SiTwitter,
  SiInstagram,
  SiDiscord,
  SiGithub,
  SiSpotify,
  SiYoutube,
} from "react-icons/si";

const Socials = ({ socials }: { socials: SocialLinkProps[] }) => {
  const getIconForPlatform = (platform: string) => {
    switch (platform) {
      case "twitter":
        return <SiTwitter />;
      case "discord":
        return <SiDiscord />;
      case "instagram":
        return <SiInstagram />;
      case "github":
        return <SiGithub />;
      case "spotify":
        return <SiSpotify />;
      case "youtube":
        return <SiYoutube />;
      default:
        return null;
    }
  };

  return (
    <Flex align="center" justify="center" wrap="wrap" gap={2} my={6}>
      {socials.map((social) => (
        <Link
          key={social.platform}
          href={social.url}
          mx={2}
          fontSize={"3xl"}
          _hover={{
            color: "brand.100",
          }}
          isExternal
        >
          {getIconForPlatform(social.platform)}
        </Link>
      ))}
    </Flex>
  );
};

export default Socials;
