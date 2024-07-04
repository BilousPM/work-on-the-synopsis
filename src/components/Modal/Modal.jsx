import { useState, useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
    }, 2000);

    return () => {
      // Очищаємо інтервал за його ідентифікатором
      clearInterval(intervalId);
    };
  }, []);

  return <div>Modal</div>;
};

export default Modal;
