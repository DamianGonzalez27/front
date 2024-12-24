import { useEffect, useRef, useState, RefObject } from "react";

const useLazyRender = (): [RefObject<HTMLDivElement>, boolean] => {
  const [show, setShow] = useState<boolean>(false);
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadObserver = async () => {
      if (typeof window.IntersectionObserver === "undefined") {
        await import("intersection-observer");
      }

      const observer = new IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });

      if (element.current) {
        observer.observe(element.current);
      }
    };

    loadObserver();
  }, []);

  return [element, show];
};

export default useLazyRender;
