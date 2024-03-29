import { Flex, Link } from "@chakra-ui/react";
import { LinkProps } from "@/interfaces";

const Links = ({ links }: { links: LinkProps[] }) => {
  return (
    <Flex flexDirection={"column"} alignItems={"center"} gap={6}>
      {links.map((link, i) => (
        <Link
          key={i}
          href={link?.url}
          bgColor={"white"}
          w={"90%"}
          maxW={"400px"}
          textAlign={"center"}
          fontWeight={"bold"}
          py={3}
          boxShadow={"5px 7px"}
          fontSize={"20px"}
          _hover={{
            boxShadow: "10px 15px",
            transform: "scale(1.02)",
            bgColor: "brand.100",
          }}
          isExternal
          border={"2px solid"}
        >
          {link?.title}
        </Link>
      ))}
    </Flex>
  );
};

export default Links;
