import React from 'react'
import Container from "../components/Container"
import ReactPlayer from 'react-player'
import { Box, Text, Flex,Heading, Link } from '@chakra-ui/core'
import styled from "styled-components"
import ReactMarkdown from 'react-markdown'
import { TwitterTweetEmbed } from 'react-twitter-embed'

const VisibilitySensor = require('react-visibility-sensor').default;


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

export const VideoEvent = ({video}) => (
    <VisibilitySensor scrollCheck={true}>
      {({isVisible}) =>
        <div>
          <Box position="relative" borderWidth="1px" rounded="lg" overflow="hidden" p={8} mx={8}>
            <Flex align="center">
              <Box m={4}>
                <Heading my={2} size="xl">Title</Heading>
                <Heading my={2} size="lg">{video.date}</Heading>

                {video.quotes.map(quote => (
                  <ReactMarkdown source={quote}/>
                ))}
              </Box>

              <Box m={4} rounded="lg">
                <ReactPlayer
                  playing={isVisible}
                  url={video.url}
                />
              </Box>
            </Flex>
          </Box>
          <Line />
        </div>
      }
  </VisibilitySensor>
)

function Covid19({ events }){
  return (
    <Container>
      <Box py={8}>
        {events.map(event => {
          switch(event.type) {
            case 'tweet':
              return <TweetEvent data={event}/>
            case 'video':
              return <VideoEvent video={event}/>
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
      date: '3/17/2020',
      type: 'video',
      quotes: [
        'I\'ve always know this is a pandemic. I felt it was a pandemic long before it was called a pandemic',
      ],
      url: 'https://www.youtube.com/embed/2eB_xCk5ABw?start=245&end=261',
    },
    {
      date: '3/15/2020',
      type: 'video',
      quotes: [
        'Reporter: On a scale of 1-10, how would you rate your response to this crisis? President Trump: I\'d rate it a 10, I think we\'ve done a great job',
      ],
      url: 'https://www.youtube.com/embed/2eB_xCk5ABw?start=208&end=244',
    },
    {
      date: '3/13/2020',
      type: 'video',
      quotes: [
        'Trump shakes hands with multiple CEOs during Coronavirus briefing despite social distancing recommendations...'
      ],
      url: 'https://www.youtube.com/embed/H0wYtsouUi0?start=47&end=80'
    },
    {
      date: '03/11/2020',
      type: 'video',
      quotes: [
        'Trump bans all travel from Europe. However, adminstration later has to correct and say that ban does **not** apply to American residents and any trade and cargo.'
      ],
      url: 'https://www.youtube.com/embed/EhP2JMgAwuE?start=125&end=177'
    },
    {
      date: '03/09/2020',
      type: 'tweet',
      tweetId: '1237027356314869761'
    },
    {
      date: '2/28/2020',
      type: 'video',
      quotes: [
        'Now the democrats are *politicizing* the Coronavirus.',
        'How\'s President Trump doing? They (House Democrats) go oh not good not good (in a mocking tone). They have no clue, they don\'t have any clue',
        'This is their new **hoax**',
        'We did something that\'s been pretty amazing. We have 15 people (infected) in this massive country and because of the fact that we went early, we could\'ve had a lot more than that. We\'re doing great'
      ],
      url: 'https://www.youtube.com/embed/2eB_xCk5ABw?start=102&end=139',
    },
    {
      date: '2/24/2020',
      type: 'tweet',
      tweetId: '1232058127740174339'
    },
    {
      date: '2/14/2020',
      type: 'video',
      quotes: ['We have a very small number of people in the country with it, it\s like around 12, many of them are getting better and some are fully recovered already so we\'re in very good shape'],
      url: 'https://www.youtube.com/embed/2eB_xCk5ABw?start=82&end=90',
    },
    {
      date: '2/10/2020',
      type: 'video',
      quotes: ['Looks like by April, you know when in theory when it gets a little warmer it miraculously goes away, hope that\'s true'],
      url: 'https://www.youtube.com/embed/2eB_xCk5ABw?start=60&end=78',
    },
    {
      date: '1/30/2020',
      type: 'video',
      quotes: ['Coronavirus is the new thing that a lot of people are talking about, hopefully won\'t be as bad as some people think it could be. But we\'re working very closely with and a lot of other people and a lot of other countries and we think we have it very well under control.'],
      url: 'https://www.youtube.com/embed/2eB_xCk5ABw?start=41&end=59',
    },
    {
      date: '1/22/2020',
      type: 'video',
      quotes: ['We have it totally under control. There\'s one person coming in from China and we have it under control'],
      url: 'https://www.youtube.com/embed/2eB_xCk5ABw?start=9&end=37', // Jan. 22 Trump Interview
    },
  ]
  return {
    props: {
      events
    }
  }
}

export default Covid19
