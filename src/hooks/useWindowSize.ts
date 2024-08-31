import { useEffect, useState } from "react";

type WindowSizeProps = {
  width: number;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeProps>({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize((prev) => {
        return {
          ...prev,
          width: window.innerWidth,
        };
      });
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { windowSize };
};
