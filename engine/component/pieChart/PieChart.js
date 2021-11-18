import React, { useRef, useEffect, useState } from "react";
import { drawCircle, drawPie } from "./draw";

import styles from "./PieChart.module.scss";

export default function PieChart({
  level,
  color,
  legend,
  min,
  max,
  size,
  lineWidth,
  strokeStyle,
  padding,
}) {
  const canvasRef = useRef();
  const colorRef = useRef();
  const inputRef = useRef();
  !color ? (color = "#ff0000") : (color = color);
  const [inputValue, setInputValue] = useState(0);

  const increment = () => {
    return setInputValue((s) => s + 1);
  };
  8080;
  const getCircle = () => {
    const input = inputRef.current;
    const min = parseInt(input.attributes.min.value);
    const max = parseInt(input.attributes.max.value);
    let ratio = (input.value - min) / (max - min);

    const colorCircle = colorRef.current;
    const ctx = colorCircle.getContext("2d");
    drawCircle({ ctx, size, lineWidth, strokeStyle, padding, ratio });
  };

  useEffect(() => {
    if (inputValue < level) {
      const interval = setInterval(() => {
        increment();
      }, 4000 / 60);
      return () => clearInterval(interval);
    }
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");

    drawPie({
      ctx,
      size,
      lineWidth,
      padding,
      strokeStyle: "rgba(216,216,216,1)",
    });

    getCircle();
  }, [inputValue]);

  return (
    <div className={styles.pieContainer}>
      <div className={styles.pieContent}>
        <canvas width="100px" height="100px" ref={canvasRef}></canvas>
        <canvas width="100px" height="100px" ref={colorRef}></canvas>
        <input
          type="hidden"
          value={inputValue}
          ref={inputRef}
          min={min}
          max={max}
        />
        <input type="text" value={level} disabled />
      </div>

      <p className={styles.pieLegend}>{legend}</p>
    </div>
  );
}
