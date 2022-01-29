import { useState } from "react";
import Card from "./Card.js";

function Buttons(props) {
  const [buttonSelected, setButtonSelected] = useState(false);

  const handleButton = () => {
    setButtonSelected(props.text);

    setTimeout(() => {
      setButtonSelected(false);
    }, 500);
  };

  return (
    <>
      <button onClick={() => handleButton()}> {props.text}</button>
      <Card buttonSelected={buttonSelected} />
    </>
  );
}

export default Buttons;
