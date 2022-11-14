import React, { useState, useEffect } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import app from "./firebaseConfig";

import NavBar from "./Components/NavBar/NavBar";
import Dropdown from "./Components/Dropdown/Dropdown";
import TargetingBox from "./Components/TargetingBox/TargetingBox";
import PopupBox from "./Components/PopupBox/PopupBox";
import Gameover from "./Components/Gameover/Gameover";
import Gamestart from "./Components/Gamestart/Gamestart";

import Westeros from "./assets/Westeros.jpg";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [location, setLocation] = useState({});
  const [pixels, setPixels] = useState({});
  const [foundCharacter, setFoundCharacter] = useState("");
  const [totalCharacters, setTotalCharacters] = useState(null);
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(false);
  const [startVisible, setStartVisible] = useState(true);

  function showLocation(e) {
    if (e.target.className !== "westeros") {
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
  }

  useEffect(() => {
    const db = getFirestore(app);

    getDocs(collection(db, "characters")).then((data) => {
      setTotalCharacters(data.docs.length);
    });
  }, []);

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

  useEffect(() => {
    if (totalCharacters === 0) {
      setTime((prevTime) => new Date().getTime() - prevTime);
    }
  }, [totalCharacters]);

  useEffect(() => {
    if (startTime) {
      setTime(new Date().getTime());
    }
  }, [startTime]);

  return (
    <React.Fragment>
      {startVisible ? (
        <Gamestart
          handleStartTime={setStartTime}
          handleStartVisible={setStartVisible}
        />
      ) : null}
      {totalCharacters === 0 ? <Gameover time={time} /> : null}
      {foundCharacter ? <PopupBox foundCharacter={foundCharacter} /> : null}
      <NavBar />
      <img src={Westeros} className="westeros" />
      {isVisible ? (
        <Dropdown
          location={location}
          handleIsVisible={setIsVisible}
          pixels={pixels}
          handleFoundCharacter={setFoundCharacter}
          totalCharacters={totalCharacters}
          handleTotalCharacters={setTotalCharacters}
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
