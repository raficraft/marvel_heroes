import { useEffect, useRef, useState } from "react";

export const useClickOutside = (init, ref, callBack = () => {}) => {
  console.log(ref);
  const refOutsideClick = useRef(ref);
  const [visible, setVisible] = useState(init);

  const handleClickOutside = (event) => {
    console.log("click outside", refOutsideClick.current);
    console.log("click outside", event.target);

    if (
      refOutsideClick.current &&
      !refOutsideClick.current.current.contains(event.target)
    ) {
      //   console.log("in clickOutside current : ", ref.current);
      //   console.log("in clickOutside current contains : ", ref.current.contains);
      console.log("yolo");
      setVisible(false);
      callBack();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [refOutsideClick]);

  console.log("render clickoutside", refOutsideClick);

  return { visible, setVisible };
};
