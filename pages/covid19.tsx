import React from 'react'
import Container from "../components/Container"
import ReactPlayer from 'react-player'
import { Box, Text } from '@chakra-ui/core'
import styled from "styled-components";

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

function Covid19({ videos }){
  return (
    <Container>
      <Timeline>
      {videos.map(video => (
        <VisibilitySensor>
          {({isVisible}) =>
            <div>
              <Event interval={video.date}>
                <Text>{video.quote}</Text>
                <Box my={10}>
                  <ReactPlayer playing={isVisible} url={video.url} style={{marginLeft: "auto", marginRight: "auto"}}/>
                </Box>
              </Event>
            </div>
          }
        </VisibilitySensor>
      ))}
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
  const videos = [
    {
      date: '2/19/2020',
      quote: '',
      url: 'https://www.youtube.com/embed/2eB_xCk5ABw?start=92&end=101',
    },
    {
      date: '2/14/2020',
      quote: '',
      url: 'https://www.youtube.com/embed/2eB_xCk5ABw?start=82&end=90',
    },
    {
      date: '2/10/2020',
      quote: 'Looks like by April, you know when in theory when it gets a little warmer it miraculously goes away, hope that\'s true',
      url: 'https://www.youtube.com/embed/2eB_xCk5ABw?start=60&end=78',
    },
    {
      date: '1/30/2020',
      quote: 'Coronavirus is the new thing that a lot of people are talking about, hopefully won\'t be as bad as some people think it could be. But we\'re working very closely with and a lot of other people and a lot of other countries and we think we have it very well under control.',
      url: 'https://www.youtube.com/embed/2eB_xCk5ABw?start=41&end=59',
    },
    {
      date: '1/22/2020',
      quote: 'We have it totally under control. There\'s one person coming in from China and we have it under control',
      url: 'https://www.youtube.com/embed/2eB_xCk5ABw?start=9&end=37', // Jan. 22 Trump Interview
    },
  ]
  return {
    props: {
      videos
    }
  }
}

export default Covid19
