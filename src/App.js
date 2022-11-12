import React, { useState, useEffect } from "react";

import NavBar from "./Components/NavBar/NavBar";
import Dropdown from "./Components/Dropdown/Dropdown";
import TargetingBox from "./Components/TargetingBox/TargetingBox";
import PopupBox from "./Components/PopupBox/PopupBox";

import Westeros from "./assets/Westeros.jpg";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [location, setLocation] = useState({});
  const [pixels, setPixels] = useState({});
  const [foundCharacter, setFoundCharacter] = useState("");

  function showLocation(e) {
    if (e.target.tagName === "BUTTON") {
      return;
    }

    if (isVisible) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
    setLocation({
      pageX: e.pageX,
      pageY: e.pageY,
    });
    console.log(e.pageX, e.pageY);
  }

  useEffect(() => {
    document.addEventListener("click", showLocation);

    return () => {
      document.removeEventListener("click", showLocation);
    };
  });

  useEffect(() => {
    if (foundCharacter) {
      setTimeout(() => {
        setFoundCharacter("");
      }, 2000);
    }
  }, [foundCharacter]);

  return (
    <React.Fragment>
      {foundCharacter ? <PopupBox foundCharacter={foundCharacter} /> : null}
      <NavBar />
      <img src={Westeros} className="westeros" />
      {isVisible ? (
        <Dropdown
          location={location}
          handleIsVisible={setIsVisible}
          pixels={pixels}
          handleFoundCharacter={setFoundCharacter}
        />
      ) : null}
      {isVisible ? (
        <TargetingBox
          location={location}
          handlePixels={setPixels}
          pixels={pixels}
        />
      ) : null}
    </React.Fragment>
  );
}

export default App;
