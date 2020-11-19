import React from 'react'
import { Stack, StackProps, Link, Box } from '@chakra-ui/react'
import { FiTwitter, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { IconType } from 'react-icons/lib/cjs'

interface SocialIconLinkProps {
  Icon: IconType,
  link: string
}

const SocialIconLink = ({Icon, link, ...rest}:SocialIconLinkProps&StackProps) => (
  <Box
    transition="all .15s ease-in-out"
    _hover={{transform: "scale(1.05)"}}
    {...rest}>

    <Link href={link}>
      <Icon />
    </Link>
  </Box>
)

const SocialIcons = (props: StackProps) => (
  <Stack isInline fontSize="2.5em" color="white" {...props}>
    <SocialIconLink Icon={FiTwitter} link="https://twitter.com/SrinjoyMajumdar" mr={2} />
    <SocialIconLink Icon={FiGithub} link="https://github.com/srinjoym" mx={2} />
    <SocialIconLink Icon={FiLinkedin} link="https://www.linkedin.com/in/srinjoym" mx={2}/>
    <SocialIconLink Icon={FiMail} link="mailto:srinjoy.majumdar@gmail.com" mx={2}/>
  </Stack>
)

export default SocialIcons
