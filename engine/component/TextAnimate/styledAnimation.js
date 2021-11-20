import { keyframes } from "styled-components";

export const textAnimate = (animation) => {
  let animationText = ``;

  switch (animation) {
    case "backToFront":
      return (animationText = keyframes`
        0%{ 
          opacity : 0;
          transform: translateZ(100%);
          filter: blur(10px);
        }
        100%{ 
          opacity : 1;
          transform: translateZ(0);
          filter: blur(0px);
        }`);
    case "outToFront":
      return (animationText = keyframes`
        0%{ 
          opacity : 0;
          transform: translateX(100%);
          filter: blur(10px);
        }
        100%{ 
          opacity : 1;
          transform: translateX(0);
          filter: blur(0px);
        }`);

    case "rigthToLeft":
      return (animationText = keyframes`
        0%{ 
          opacity : 0;
          transform: translateX(100%);
          filter: blur(10px);
        }
        100%{ 
          opacity : 1;
          transform: translateX(0);
          filter: blur(0px);
        }`);

    case "bottomToTop":
      return (animationText = keyframes`
        0%{ 
          opacity : 0;
          transform: translateY(1000%);
          filter: blur(1px);
        }
        100%{ 
          opacity : 1;
          transform: translateY(0);
          filter: blur(0px);
        }`);

    case "flipX":
      return (animationText = keyframes`
        0%{
          opacity: 0;
          filter: blur(10px);
        }
      
        50% {
          opacity: 0.5;
          transform: rotateY(180deg)
        }
      
        100% {
          opacity: 1;
          transform: rotateY(360deg)
          filter: blur(0px);
        }
    `);

    case "flipY":
      return (animationText = keyframes`
        0%{
          opacity: 0;
          filter: blur(10px);
        }
      
        50% {
          opacity: 0.5;
          transform: rotateX(180deg)
        }
      
        100% {
          opacity: 1;
          filter: blur(0px);
          transform: rotateX(360deg)
        }
    `);

    default:
      return (animationText = keyframes`
        0%{ 
          opacity : 0;
          transform: translateY(100%);
          filter: blur(10px);
        }
        100%{ 
          opacity : 1;
          transform: translateY(0);
          filter: blur(0px);
        }
    `);
  }
};
