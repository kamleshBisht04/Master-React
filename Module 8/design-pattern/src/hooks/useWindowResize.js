import { useEffect, useState } from "react";

const useWindowResize = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(function () {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    // clean up function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export default useWindowResize;
