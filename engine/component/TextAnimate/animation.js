import styled, { keyframes, css } from "styled-components";
export const createStyled = (styles) => {
  const framesFromStyled = makeKeyframes(styles["animation-name"]);
  const styledAnimation = keyframes`${framesFromStyled}`;

  const animation = css`
    ${styledAnimation}
  `;

  const TAG = styles.tag;

  const cssForStyled = makeStringStyle(styles);
  const styledComponent = styled[TAG]`
    ${cssForStyled};
    animation: ${animation};
  `;

  return [styledComponent];
};

const makeStringStyle = (style) => {
  let res = ``;

  for (const key in style) {
    if (Object.hasOwnProperty.call(style, key)) {
      const element = style[key];

      if (key !== "animation-name" && key !== "tag") {
        res += `${key} : ${element}; `;
      } else {
      }
    }
  }
  return res;
};

const makeKeyframes = (frames) => {
  console.log(frames);
  let res = ``;

  for (const iterator of Object.keys(frames)) {
    res += `${iterator}%{`;

    for (const key in frames[parseInt(iterator)]) {
      if (Object.hasOwnProperty.call(frames[parseInt(iterator)], key)) {
        const element = frames[parseInt(iterator)][key];

        res += `${key}: ${element};`;
      }
    }

    res += `}`;
  }

  return res;
};
