import Header from "@/components/Header";
import Links from "@/components/Links";
import { LinkProps, SocialLinkProps } from "@/interfaces";
import { Box, Link } from "@chakra-ui/react";
import Head from "next/head";
import Socials from "@/components/Socials";

const Page = ({
  profile,
}: {
  profile: {
    name: string;
    bio: string;
    image: string;
    links: LinkProps[];
    socials: SocialLinkProps[];
  };
}) => {
  const { links, name, bio, image, socials } = profile;
  return (
    <Box minH={"100vh"} overflowX={"hidden"}>
      <Head>
        <title>{name}</title>
        <meta name="description" content={bio} />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={bio} />
        <meta property="og:image" content={image} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="https://link-in-bio.com" />
        <meta property="og:site_name" content={name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={name} />
        <meta name="twitter:description" content={bio} />
        <meta name="twitter:image" content={image} />
      </Head>
      <Header name={name} bio={bio} image={image} />
      <Socials socials={socials} />
      <Links links={links} />
      <center style={{ marginTop: "5rem" }}>
        <Link
          href={"https://link-in-bio.com"}
          textAlign={"center"}
          fontWeight={"extrabold"}
          color={"gray.600"}
          _hover={{ color: "brand.100" }}
          isExternal
        >
          link-in-bio
        </Link>
      </center>
    </Box>
  );
};

export default Page;

export const getStaticProps = () => {
  return {
    props: {
      profile: {
        name: "Akinkunmi",
        bio: "building internet things 🤖",
        image: "https://avatars.githubusercontent.com/u/54487532?v=4",
        links: [
          {
            title: "Github",
            url: "https://github.com/akinloluwami",
          },
          {
            title: "Source code",
            url: "https://github.com/akinloluwami/link-in-bio",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/xing0x",
          },
          {
            title: "My Blog",
            url: "https://hashnode.dev",
          },
          {
            title: "My side project",
            url: "https://hideme.bio",
          },
        ],
        socials: [
          {
            platform: "twitter",
            url: "https://twitter.com/xing0x",
          },
          {
            platform: "instagram",
            url: "#",
          },
          {
            platform: "spotify",
            url: "#",
          },
          {
            platform: "youtube",
            url: "#",
          },
          {
            platform: "github",
            url: "https://github.com/akinloluwami",
          },
          {
            platform: "discord",
            url: "#",
          },
        ],
      },
    },
  };
};
