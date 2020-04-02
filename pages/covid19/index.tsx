import React from 'react'
import Container from "../../components/Container"
import Navigation from "../../components/Navigation"
import { Box, StatGroup, Flex,Heading, Link, SimpleGrid, Stat, StatLabel, StatNumber, Divider } from '@chakra-ui/core'
import styled from "styled-components"
import ReactMarkdown from 'react-markdown'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import ResponsivePlayer from '../../components/ResponsivePlayer'

const Line = styled.div`
  position: relative;
  max-width: 1200px;
  height: 50px;
  margin: 0 auto;

  ::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: gray;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
`

const TwitterCenteredContainer = styled.div`
  .twitter-tweet {
    margin-left: auto;
    margin-right: auto;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
`

export const TweetEvent = ({data}) => (
  <TwitterCenteredContainer>
    <TwitterTweetEmbed tweetId={data.tweetId} style={{marginLeft: "auto", marginRight: "auto"}}/>
    <Line />
  </TwitterCenteredContainer>
)

export const VideoEvent = ({video}) => {
  return (
    <div>
      <Box position="relative" borderWidth="1px" rounded="lg" overflow="hidden" p={8}>
        <SimpleGrid columns={{sm: 1, lg: 2}} alignContent="center">
          <Box m={4} display="flex" flexDirection="column">
            <Box flexGrow={1}>
              <Heading my={2} size="md">{video.title}</Heading>
              <Heading my={2} size="sm">{video.date}</Heading>

              {video.quotes.map(quote => (
                <ReactMarkdown key={quote} source={quote}/>
              ))}
            </Box>

            <Box>
              <Divider />

              <StatGroup>
                <Stat>
                  <StatLabel>Confirmed Cases</StatLabel>
                  <StatNumber>{video.confirmed}</StatNumber>
                </Stat>

                <Stat>
                  <StatLabel>Total deaths</StatLabel>
                  <StatNumber>{video.deaths}</StatNumber>
                </Stat>

                <Stat>
                  <StatLabel>Recovering</StatLabel>
                  <StatNumber>{video.recovered}</StatNumber>
                </Stat>
              </StatGroup>
            </Box>
          </Box>

          <Box m={4} rounded="lg">
            <ResponsivePlayer
              url={video.url}
            />
          </Box>
        </SimpleGrid>
      </Box>
      <Line />
    </div>
  )
}

function Covid19({ events }){
  return (
    <Container>
      <Navigation />

      <Heading py={4} size="xl">President Trump's Coronavirus Response</Heading>
      <Heading size="md">This timeline documents President Trump's lies and faulty decision making in handling the 2019 Coronavirus outbreak.</Heading>
      <Box py={8}>
        {events.slice().reverse().map(event => {
          switch(event.type) {
            case 'tweet':
              return <TweetEvent key={event.date+event.type} data={event}/>
            case 'video':
              return <VideoEvent key={event.date+event.type} video={event} />
          }
        })}
      </Box>
    </Container>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  const events = [
    {
      date: '3/29/2020',
      type: 'video',
      title: "Changes course AGAIN and extends guidelines till end of April (Easter is April 12)",
      quotes: [
        `Trump: "I would love to have that. It’s such an important day for other reasons, but I’d love to make it an important day for this. I would love to have the country opened up, and rarin’ to go by Easter."`,
      ],
      url: 'https://www.youtube.com/watch?v=t1RCznQ41Mc&t=2s',
      "confirmed": 140886,
      "deaths": 2467,
      "recovered": 2665
    },
    {
      date: '3/24/2020',
      type: 'video',
      title: "Changes tone as if things are getting better",
      quotes: [
        `Trump: "I would love to have that. It’s such an important day for other reasons, but I’d love to make it an important day for this. I would love to have the country opened up, and rarin’ to go by Easter."`,
      ],
      url: 'https://www.youtube.com/watch?v=qV6b_8gD_bg',
      "confirmed": 53740,
      "deaths": 706,
      "recovered": 348
    },
    {
      date: '3/20/2020',
      type: 'tweet',
      tweetId: '1241935285916782593'
    },
    {
      date: '3/20/2020',
      type: 'video',
      title: 'Verbally attacks reporter when asked what his advice is for scared Americans',
      quotes: ['Reporter: "What do you say to Americans who are scared?"',
               'Trump: "I say that you are a terrible reporter, That\'s what I say. \
                I think that’s a very nasty question, and I think that’s a very bad signal that you’re putting out to the American people."'],
      url: 'https://www.youtube.com/watch?v=N5NQdmHzBTY',
      "confirmed": 19100,
      "deaths": 244,
      "recovered": 147
    },
    {
      date: '3/17/2020',
      type: 'video',
      title: "Claims he's always known it's a pandemic",
      quotes: [
        `Trump: "I\'ve always know this is a pandemic. I felt it was a pandemic long before it was called a pandemic"`,
      ],
      url: 'https://www.youtube.com/watch?v=HOneVW5gA3U',
      "confirmed": 6421,
      "deaths": 108,
      "recovered": 17
    },
    {
      date: '3/15/2020',
      type: 'video',
      title: "Rates self response 10/10",
      quotes: [
        `Reporter: "On a scale of 1-10, how would you rate your response to this crisis?"`,
        `Trump: "I\'d rate it a 10, I think we\'ve done a great job"`,
      ],
      url: 'https://www.youtube.com/watch?v=jXjqsCNk4v8?start=4&end=83',
      "confirmed": 3499,
      "deaths": 63,
      "recovered": 12
    },
    {
      date: '3/13/2020',
      type: 'video',
      title: "Shakes hands with multiple people",
      quotes: [
        'Trump continues to shake hands with multiple speakers during the Coronavirus briefing despite his own social distancing recommendations.'
      ],
      url: 'https://www.youtube.com/embed/H0wYtsouUi0?start=47&end=80',
      "confirmed": 2179,
      "deaths": 47,
      "recovered": 12
    },
    {
      date: '3/11/2020',
      type: 'video',
      title: "Confuses public with Europe travel ban",
      quotes: [
        'Trump bans all travel from Europe. However, adminstration later has to correct and say that ban does **not** apply to American residents and any trade and cargo.'
      ],
      url: 'https://www.youtube.com/watch?v=yAzS_xWBhfk&t=8s',
      "confirmed": 1281,
      "deaths": 36,
      "recovered": 8
    },
    {
      date: '3/9/2020',
      type: 'tweet',
      tweetId: '1237027356314869761'
    },
    {
      date: '3/7/2020',
      type: 'video',
      title: 'Doesn\'t want sick passengers on cruise ship to disembark to keep numbers low',
      quotes: ['Trump: "They would like to have the people come off. I’d rather have the people stay [on the ship]. But I’d go with them. I told them to make the final decision."',
                '"I would rather — because I like the numbers being where they are. I don’t need to have the numbers double because of one ship that wasn’t our fault."'],
      url: 'https://www.youtube.com/watch?v=ExWLn86Mu_g',
      "confirmed": 402,
      "deaths": 17,
      "recovered": 7
    },
    {
      date: '3/6/2020',
      type: 'video',
      title: 'Claims anyone who wants a test can get a test',
      quotes: ['Trump: "But as of right now and yesterday, anybody that needs a test — that’s the important thing — and the tests are all perfect"'],
      url: 'https://www.youtube.com/watch?v=1_XwC9IQKBc',
      "confirmed": 262,
      "deaths": 14,
      "recovered": 7
    },
    {
      date: '2/28/2020',
      type: 'video',
      title: "Blames Democrats for Coronavirus",
      quotes: [
        'Trump: "Now the democrats are *politicizing* the Coronavirus."',
        '"This is their new **hoax**"',
      ],
      url: 'https://www.youtube.com/watch?v=G5TZ6fTYrsE',
      "confirmed": 60,
      "deaths": 0,
      "recovered": 7
    },
    {
      date: '2/24/2020',
      type: 'tweet',
      tweetId: '1232058127740174339'
    },
    {
      date: '2/14/2020',
      type: 'video',
      title: `Lies about "small" number of people who are fully recovering`,
      quotes: ['Trump: "We have a very small number of people in the country with it, it\s like around 12, many of them are getting better and some are fully recovered already so we\'re in very good shape"'],
      url: 'https://www.youtube.com/embed/2eB_xCk5ABw?start=82&end=90',
      "confirmed": 13,
      "deaths": 0,
      "recovered": 3
    },
    {
      date: '1/22/2020',
      type: 'video',
      title: `Claims situation is totally under control`,
      quotes: ['Trump: "We have it totally under control. There\'s one person coming in from China and we have it under control"'],
      url: 'https://www.youtube.com/embed/2eB_xCk5ABw?start=9&end=37',
      "confirmed": 1,
      "deaths": 0,
      "recovered": 0
    },
  ]

  return {
    props: {
      events,
    }
  }
}

export default Covid19
