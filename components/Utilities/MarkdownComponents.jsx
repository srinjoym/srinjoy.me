import React from "react";
import {
  Text,
  Code,
  Divider,
  Link,
  List,
  AlertIcon,
  ListItem,
  Heading,
  Image,
  Alert,
  Box
} from "@chakra-ui/react";

const formatHeading = ({level, children}) => {
  const sizes = ['xl', 'lg', 'md', 'sm', 'xs', 'xs'];
  return (
    <Heading mt={6} mb={2 } as={`h${level}`} size={sizes[`${level - 1}`]}>
      {children}
    </Heading>
  );
}

export const defaults = {
  em: props => {
    const { children } = props;
    return <Text as="em">{children}</Text>;
  },
  blockquote: props => {
    const { children } = props;

    return (
      <Text as="i">
        {children}
      </Text>
    )
  },
  code: props => {
    const { children, className } = props;

    return (
      <Code p={2} mt={2} className={className} rounded="md" maxW="100%" overflow="scroll">
        {children}
      </Code>
    );
  },
  del: props => {
    const { children } = props;
    return <Text as="del">{children}</Text>;
  },
  thematicBreak: Divider,
  a: ({href, children}) => <Link href={href} color="blue.500">{children}</Link>,
  img: ({src, alt}) => <Image src={src} alt={alt} maxW="xl" w="100%" my={2} />,
  p: (props) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" {...props} />,
  definition: () => null,
  h1: formatHeading({level: 1}),
  h2: formatHeading({level: 2}),
  h3: formatHeading({level: 3}),
  h4: formatHeading({level: 4}),
  h5: formatHeading({level: 5}),
  h6: formatHeading({level: 6}),
  inlineCode: props => {
    const { children } = props;
    return <Code rounded="md">{children}</Code>;
  }
};

export default defaults;