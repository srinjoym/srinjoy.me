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
  Alert
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
    <Heading mt={6} mb={4} as={`h${level}`} size={sizes[`${level - 1}`]}>
      {children}
    </Heading>
  );
}

export const defaults = {
  p: props => {
    const { children } = props;
    return <Text my={3}>{children}</Text>;
  },
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
      <Code p={2} my={2} className={className} rounded="md" maxW="100%" overflow="scroll">
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
  ul: (props) => <List as="ul" styleType="disc" {...props}/>,
  ol: (props) => <List as="ol" styleType="decimal" {...props}/>,
  li: ({children}) => <ListItem>{children}</ListItem>,
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