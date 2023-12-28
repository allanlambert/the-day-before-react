import React, { useEffect, useState } from "react";


function Nav() {

    const [topOfNav, setTopOfNav] = useState(0);

    useEffect(() => {
      const nav = document.querySelector(".nav__logo--img");
      setTopOfNav(nav.offsetTop + nav.offsetHeight);
  
      function fixNav() {
        if (window.scrollY >= topOfNav) {
          document.body.classList.add("fixed-nav");
        } else {
          document.body.style.paddingTop = 0;
          document.body.classList.remove("fixed-nav");
        }
      }
  
      window.addEventListener("scroll", fixNav);
  
      return () => {
        window.removeEventListener("scroll", fixNav);
      };
    }, [topOfNav]);
    
  return (
    <>
       <nav className="nav__container">
          <img
            className="nav__logo--img"
            src="//images.squarespace-cdn.com/content/v1/6329a85f62c0ad5bc365ffea/9e014b31-629a-4555-a701-2213cb6204c7/fnblacklogo.png?format=1500w"
            alt="Fntastic"
          ></img>
        </nav>
    </>
  )
}

export default Nav