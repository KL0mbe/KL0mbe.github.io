import { useState, useRef, useEffect } from "react";

export function useCoordinates(isOpen: boolean) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);

  const [buttonX, setButtonX] = useState(0);
  const [buttonY, setButtonY] = useState(0);
  const [divX, setDivX] = useState(0);
  const [divTop, setDivTop] = useState(0);
  const [divWidth, setDivWidth] = useState(0);
  const [divHeight, setDivHeight] = useState(0);

  useEffect(() => {
    if (isOpen && columnRef.current && buttonRef.current) {
      const colRect = columnRef.current.getBoundingClientRect();
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setButtonX(buttonRect.right);
      setButtonY(buttonRect.top + buttonRect.height / 2);
      setDivX(colRect.left);
      setDivTop(colRect.top);
      setDivWidth(colRect.width);
      setDivHeight(colRect.height);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleResize() {
      if (columnRef.current && buttonRef.current) {
        const colRect = columnRef.current.getBoundingClientRect();
        const buttonRect = buttonRef.current.getBoundingClientRect();
        setButtonX(buttonRect.right);
        setButtonY(buttonRect.top + buttonRect.height / 2);
        setDivX(colRect.left);
        setDivTop(colRect.top);
        setDivWidth(colRect.width);
        setDivHeight(colRect.height);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return {
    buttonRef,
    columnRef,
    buttonX,
    buttonY,
    divX,
    divTop,
    divWidth,
    divHeight,
  };
}
