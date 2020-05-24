import styled from "styled-components";

export const FrostedContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, .75);
  /* background-image: linear-gradient(150deg, rgba(85, 51, 255, .15) 15%, rgba(5, 213, 255, .15) 70%, rgba(166, 255, 203, .15) 94%);  */
  backdrop-filter: blur(50px);
  z-index: 100;

  .navbar {
    background-color: transparent;
    background-image: none;
  }
`
