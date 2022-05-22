import { useEffect, useRef, useState } from "react";

export const useClickOutside = (init, ref, callBack = () => {}) => {
  const refOutsideClick = useRef(ref);
  const [visible, setVisible] = useState(init);

  const handleClickOutside = (event) => {
    if (
      refOutsideClick.current &&
      !refOutsideClick.current.current.contains(event.target)
    ) {
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

  return { visible, setVisible };
};
