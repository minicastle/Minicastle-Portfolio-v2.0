import styled from "@emotion/styled";
import Particles from "react-tsparticles";
const ParticleContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  & #tsparticles {
    width: 100%;
    height: 100%;
    position: fixed;
  }
`;
function Particle() {
  return (
    <ParticleContainer id="particleContainer">
      <Particles
        id="tsparticles"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.03,
            },
            move: {
              direction: "right",
              speed: 0.05,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </ParticleContainer>
  );
}

export default Particle;
