import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import { Image, Text, Link } from "@chakra-ui/core"

const MyChakraUIRenderer = () => {
  const defaultRenderer = ChakraUIRenderer()
  const overrides = {
    image: ({src, alt}) => <Image src={src} alt={alt} maxW="xl" />,
    link: ({href, children}) => <Link href={href} color="blue.500">{children}</Link>
  }
  return {...defaultRenderer, ...overrides}
}

export default MyChakraUIRenderer