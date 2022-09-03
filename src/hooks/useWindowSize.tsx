import { useEffect, useState } from "react";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

export const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return windowSize;
};
