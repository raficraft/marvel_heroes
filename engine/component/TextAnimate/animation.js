import styled, { keyframes, css } from "styled-components";
export const createStyled = (styles) => {
  const cssForStyled = makeStringStyle(styles);

  const styledComponent = cssForStyled;

  return styledComponent;
};

const makeStringStyle = (style) => {
  let res = `      `;

  for (const key in style) {
    if (Object.hasOwnProperty.call(style, key)) {
      const element = style[key];

      if (key !== "animation-name" && key !== "tag") {
        res += `${key} : ${element};\n      `;
      }
    }
  }
  return res;
};


