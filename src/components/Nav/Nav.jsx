import { useLayoutEffect, useRef } from "react";
import style from "./style.module.scss";

export default function Nav() {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    if (navRef.current) {
      const height = navRef.current.offsetHeight;
      document.documentElement.style.setProperty("--nav-height", `${height}px`);
    }
  }, []);

  return (
    <div ref={navRef} className={`${style.food_nav}`}>
      🍔 Food App
    </div>
  );
}
