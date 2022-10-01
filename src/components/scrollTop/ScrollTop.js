import React, { useState, useEffect } from "react";
import "./ScrollTop.css";
import { useWindowScroll } from "react-use";
function ScrollTop() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 600) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) {
    return false;
  }
  return (
    <div className="scrollToTop" onClick={handleScroll}>
      <i className="icon fas fa-chevron-up"></i>
    </div>
  );
}

export default ScrollTop;
