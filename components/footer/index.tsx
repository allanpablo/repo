import { Box, HStack, Image, Link as _Link, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

const SocialLinks: FC = () => {
  return (
    <Box p={4} as="footer">
      <Box maxW="6xl" mx="auto" fontSize="xs">
        <Box
          d="flex"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
        >
          <HStack spacing={2}>
            <Box>
              <_Link
                href="https://github.com/allanpablo/portfolio"
                p={8}
              >
                Source code on Github
              </_Link>
            </Box>
            <Box>
              <Link href="/">
                <_Link href="/" target="_blank" p={8}>
                  <Image
                    src="/images/common/facelogo.svg"
                    alt="Logo"
                    boxSize={9}
                    mx="auto"
                  />
                </_Link>
              </Link>
            </Box>
            <Box p={4}>
              <Text>
                Copyright &copy; {new Date().getFullYear()} Allan Pablo - ApK
              </Text>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialLinks;