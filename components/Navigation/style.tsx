import styled from "styled-components";

export const FrostedContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, .45);
  backdrop-filter: blur(50px);
  z-index: 9999;

  .navbar {
    background-color: transparent;
    background-image: none;
  }
`
