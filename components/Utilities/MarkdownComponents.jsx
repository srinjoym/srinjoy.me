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
} from "@chakra-ui/core";

const formatList = (props) => {
  const { children } = props;
  console.log(props)
  let styleType = 'disc';
  if (ordered) styleType = 'decimal';
  if (depth === 1) styleType = 'circle';
  return (
    <List as={ordered ? 'ol' : 'ul'} styleType={styleType} pl={4}>
      {children}
    </List>
  );
}

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
  h1: (props) => formatHeading({level: 1, ...props}),
  h2: (props) => formatHeading({level: 2, ...props}),
  h3: (props) => formatHeading({level: 3, ...props}),
  h4: (props) => formatHeading({level: 4, ...props}),
  h5: (props) => formatHeading({level: 5, ...props}),
  h6: (props) => formatHeading({level: 6, ...props}),
  inlineCode: props => {
    const { children } = props;
    return <Code rounded="md">{children}</Code>;
  }
};

export default defaults;