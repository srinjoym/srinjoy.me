import React from 'react'
import Container from "../components/Container"
import ReactPlayer from 'react-player'
import { Box, Text } from '@chakra-ui/core'
import styled from "styled-components"
import ReactMarkdown from 'react-markdown'
import { TwitterTweetEmbed } from 'react-twitter-embed'

const VisibilitySensor = require('react-visibility-sensor').default;

const Timeline = styled.ul`
  position: relative;
  max-width: 95%;
  list-style: none;
  &:before {
    background-color: black;
    content: '';
    margin-left: -1px;
    position: absolute;
    top: 0;
    left: 2em;
    width: 2px;
    height: 100%;
  }
`

const EventListItem = styled.li`
  position: relative;

  .icon {
    transform: rotate(45deg);
    background-color: black;
    outline: 10px solid white;
    display: block;
    margin: 0.5em 0.5em 0.5em -0.5em;
    position: absolute;
    top: 0;
    left: 2em;
    width: 1em;
    height: 1em;
  }

  .body {
    padding: 2em 2em 0 2em;
    position: relative;
    top: -1.875em;
    left: 2em;
    width: 95%;
    h3 {
      font-size: 1.75em;
    }
    h4 {
      font-size: 1.2em;
      margin-bottom: 1.2em;
    }
  }

  .date {
    color: white;
    background-color: black;
    box-shadow: inset 0 0 0 0em #ef795a;
    display: inline-block;
    margin-bottom: 1.2em;
    padding: 0.25em 1em 0.2em 1em;
  }
`
export const Event = ({ interval, children }) =>
  <EventListItem>
    <label className="icon"></label>
    <div className="body">
      <p className="date">{interval}</p>

      {children}
    </div>
  </EventListItem>

export const Quote = ({children}) =>
  <Text>"{children}"</Text>

export const TweetEvent = ({data}) => (
  <div>
    <Event interval={data.date}>
      <TwitterTweetEmbed tweetId={data.tweetId} />
    </Event>
  </div>
)

export const VideoEvent = ({video}) => (
  <VisibilitySensor>
    {({isVisible}) =>
      <div>
        <Event interval={video.date}>
          {video.quotes.map(quote => (
            <ReactMarkdown source={'"'+quote+'"'}/>
          ))}

          <Box my={10}>
            <ReactPlayer playing={isVisible} url={video.url}/>
          </Box>
        </Event>
      </div>
    }
  </VisibilitySensor>
)

function Covid19({ events }){
  return (
    <Container>
      <Timeline>
      {events.map(event => {
        switch(event.type) {
          case 'tweet':
            return <TweetEvent data={event}/>
          case 'video':
            return <VideoEvent video={event}/>
        }
      })}
      </Timeline>
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
