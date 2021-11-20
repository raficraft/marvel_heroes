import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { textAnimate } from "./styledAnimation";
import { createStyled } from "./animation";

export default function Text_animate({ children, ...props }) {
  // console.log(children.type);

  const content = {
    ...{ tag: children.type, text: children.props.children },
    ...props.content,
  };
  const params = {
    ...{
      method: "wordByWord",
      lineBreak: [],
      spacingDimension: "1.375rem", // Dimension d'espacement entre les mots pour l'animation lettre par lettre
    },
    ...props.params,
  };

  const [text, setText] = useState(content.text);

  //console.log(params.keyframesName);
  let animationName = textAnimate(params.keyframesName); //Styled Compononent keyframes

  const fullText = (content) => {
    let styleByProps = createStyled(props.styles);
    let Wrapper = styled.span`
      ${styleByProps};
      animation-name: ${props.frames};
    `;

    let span = <Wrapper key="fullText_animate">{content}</Wrapper>;

    return span;
  };

  const wordByWord = (content) => {
    const words = content.trim(" ").split(" ");
    const countWord = words.length;

    return words.map((word, key) => {
      const shiftDelay = (key + 1) * params.shiftDelay + params.animationOffset;

      let styleByProps = createStyled(props.styles);
      let Wrapper = styled.span`
        ${styleByProps};
        animation-name: ${props.frames};
        animation-delay: ${shiftDelay};
      `;

      //Component

      let span = <Wrapper key={key}>{word}&ensp;</Wrapper>;
      //Remove spacing to last word
      if (key === countWord - 1) {
        span = <Wrapper key={key}>{word}</Wrapper>;
      }

      return span;
    });
  };

  const letterByLetter = (content) => {
    console.log("letterByLetter");
    const words = content.trim(" ").split(" ");
    const letterArray = [];
    const wordsCount = words.length - 1;

    words.forEach((word, key) => {
      const letters = word.split("");
      letters.forEach((letter) => {
        letterArray.push(letter);
      });

      if (key < wordsCount) {
        letterArray.push(false);
      }
    });

    return letterArray.map((letter, key) => {
      const shiftDelay = params.shiftDelay * key;

      let Wrapper = styled.span`
        display: inline-block;
        overflow: hidden;
        opacity: 0;
        font-size: ${params.fontSize};
        animation-name: ${animationName};
        animation-fill-mode: forwards;
        animation-duration: ${params.animationDuration}ms;
        animation-delay: ${shiftDelay}ms;
      `;

      if (!letter) {
        Wrapper = styled.span`
        display: inline-block;
        overflow: hidden;
        opacity: 0;
        animation-name: ${animationName};
        animation-fill-mode: forwards;
        animation-duration: ${params.animationDuration}ms;
        animation-delay: ${shiftDelay}ms;
        content = " ";
        min-width : ${params.spacingDimension};
        `;
      }

      //Component
      return <Wrapper key={key}>{letter ? letter : null}</Wrapper>;
    });

    /* words.forEach((word, key) => {
      const shiftDelay = (key + 1) * params.shiftDelay + params.animationOffset;
     
    });*/
  };

  useEffect(() => {
    let newText;
    switch (params.method) {
      case "letterByLetter":
        newText = letterByLetter(content.text);
        setText(newText);
        break;
      case "fullText":
        newText = fullText(content.text);
        setText(newText);
        break;
      default:
        newText = wordByWord(content.text);
        setText(newText);
        break;
    }
  }, []);

  console.log("render Text Animate");
  return <content.tag>{text}</content.tag>;
}
