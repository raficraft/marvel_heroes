import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { textAnimate } from "./styledAnimation";
import { createStyled } from "./animation";

export default function Text_animate({ children, ...props }) {
  // console.log(children.type);

  console.log(createStyled(props.styles));

  const content = {
    ...{ tag: children.type, text: children.props.children },
    ...props.content,
  };
  const params = {
    ...{
      method: "wordByWord",
      lineBreak: [],
      keyframesName: "flipY", //nom de l'animation à appliqué
      animationDuration: 500, //Durée de l'animation des mots ou lettre du texte
      shiftDelay: 50, //Délai d'animation entre deux mots ou deux lettre.
      animationOffset: 0, //Délai de lancement de l'animation global.
      spacingDimension: "1.375rem", // Dimension d'espacement entre les mots pour l'animation lettre par lettre
      fontSize: "16px",
    },
    ...props.params,
  };

  const [text, setText] = useState(content.text);

  //console.log(params.keyframesName);
  let animationName = textAnimate(params.keyframesName); //Styled Compononent keyframes

  const fullText = (content) => {
    let Wrapper = styled.span`
      display: inline-block;
      overflow: hidden;
      opacity: 0;
      line-height: 1.5rem;
      animation-name: ${animationName};
      animation-fill-mode: forwards;
      animation-duration: ${params.animationDuration}ms;
    `;

    console.log("dif", Wrapper);

    //Component

    let span = <Wrapper key="fullText_animate">{content}</Wrapper>;

    return span;
  };

  const wordByWord = (content) => {
    const words = content.trim(" ").split(" ");
    const countWord = words.length;

    return words.map((word, key) => {
      const shiftDelay = (key + 1) * params.shiftDelay + params.animationOffset;

      let Wrapper = styled.span`
        display: inline-block;
        overflow: hidden;
        opacity: 0;
        animation-name: ${animationName};
        animation-fill-mode: forwards;
        animation-duration: ${params.animationDuration}ms;
        animation-delay: ${shiftDelay}ms;
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
