import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: inline-block;
  text-decoration: none;

  &:hover {
    animation-name: wobble-vertical;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
  }

  @keyframes wobble-vertical {
    16.65% {
      transform: translateY(8px);
    }
    33.3% {
      transform: translateY(-6px);
    }
    49.95% {
      transform: translateY(4px);
    }
    66.6% {
      transform: translateY(-2px);
    }
    83.25% {
      transform: translateY(1px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

function WobbleVertical({ children }) {
  return <Container>{children}</Container>;
}

export default WobbleVertical;
