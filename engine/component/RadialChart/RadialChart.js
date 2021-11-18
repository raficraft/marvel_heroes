import React, { useRef, useEffect, useState } from "react";
import { drawCircle, drawRadial } from "./draw";

import styles from "./RadialChart.module.scss";

export default function RadialChart({
  score,
  color,
  label,
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
    //draw background circle
    drawCircle({ ctx, size, lineWidth, strokeStyle, padding, ratio });
  };

  useEffect(() => {
    if (inputValue < score) {
      const interval = setInterval(() => {
        increment();
      }, 4000 / 60);
      return () => clearInterval(interval);
    }
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");

    //
    drawRadial({
      ctx,
      size,
      lineWidth,
      padding,
      strokeStyle: "rgba(216,216,216,1)",
    });

    getCircle();
  }, [inputValue]);

  return (
    <div className={styles.radialContainer}>
      <div className={styles.radialContent}>
        <canvas width={size} height={size} ref={canvasRef}></canvas>
        <canvas width={size} height={size} ref={colorRef}></canvas>
        <input
          type="hidden"
          value={inputValue}
          ref={inputRef}
          min={min}
          max={max}
        />
        <input type="text" value={score} disabled />
        <p className={styles.radialLabel}>{label}</p>
      </div>
    </div>
  );
}
