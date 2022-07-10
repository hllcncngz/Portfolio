import React, { useEffect } from "react";
import "../css/backToTop.css";
const BackToTop = () => {
  let backToTopVisibility = () => {
    window.onscroll = function () {
      var pageOffset =
          document.documentElement.scrollTop || document.body.scrollTop,
        backToTopDOM = document.getElementById("backToTop");
      console.log(pageOffset);
      if (backToTopDOM)
        backToTopDOM.style.visibility =
          pageOffset >= 100 ? "visible" : "hidden";
    };
  };

  useEffect(() => {
    backToTopVisibility();
  }, []);
  return (
    <>
      <a id="backToTop" href="#home">
      <i class="fa-solid fa-angles-up" data-toggle="tooltip" data-placement="top" title="Back To Top"></i>
      </a>
    </>
  );
};

export default BackToTop;
