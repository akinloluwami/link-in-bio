import { ProfileProps } from "@/interfaces";
import {
  Flex,
  Text,
  Image,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Box,
  Icon,
} from "@chakra-ui/react";
import { BiShareAlt } from "react-icons/bi";
import { SiDiscord, SiFacebook, SiReddit, SiTwitter } from "react-icons/si";

const Header = ({ name, bio, image }: ProfileProps) => {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      py={18}
      bgColor={"brand.100"}
      position={"relative"}
    >
      <Box position={"absolute"} top={2} right={2}>
        <Popover>
          <PopoverTrigger>
            <Button>
              <Icon as={BiShareAlt} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>
              <Text fontWeight={"bold"} fontSize={"xl"}>
                Share to:
              </Text>
            </PopoverHeader>
            <PopoverBody>
              <Flex gap={5}>
                <SiTwitter />
                <SiFacebook />
                <SiReddit />
                <SiDiscord />
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
      <Image src={image} width={"150px"} borderRadius={"full"} alt={name} />

      <Text fontWeight={"bold"} mt={3} fontSize={"3xl"}>
        {name}
      </Text>
      <Text fontWeight={"medium"} fontSize={"xl"}>
        {bio}
      </Text>
    </Flex>
  );
};

export default Header;
