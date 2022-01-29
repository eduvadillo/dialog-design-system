import { useState, useEffect } from "react";

function Card(props) {
  const [alertVisibility, setAlertVisibility] = useState(`hide-card`);
  const [imageCard, setImageCard] = useState(``);
  const [titleCard, setTitleCard] = useState(``);
  const [subTitleCard, setSubTitleCard] = useState(``);
  const [cardButton, setCardButton] = useState(`card-button`);
  const [cardButton2, setCardButton2] = useState(`card-button2`);
  const [textButtonCard1, setTextButtonCard1] = useState(``);
  const [textButtonCard2, setTextButtonCard2] = useState(``);

  console.log(props.buttonSelected);

  useEffect(() => {
    if (props.buttonSelected === `¡Cuidado!`) {
      setImageCard("warn.svg");
      setTitleCard("¡Cuidado!");
      setSubTitleCard(`No podrás volver atrás`);
      setTextButtonCard1(`Borrar`);
      setTextButtonCard2(`Cancelar`);
      setAlertVisibility(`show-card`);
    }

    if (props.buttonSelected === `¡Todo ok!`) {
      setImageCard("check.svg");
      setTitleCard("¡Vamos!");
      setSubTitleCard(`Todo ha salido bien`);
      setTextButtonCard1(`Cerrar pestanya`);
      setCardButton2(`hide-button`);
      setAlertVisibility(`show-card`);
    }

    if (props.buttonSelected === `¡Error!`) {
      setImageCard("error.svg");
      setTitleCard("Upps");
      setSubTitleCard(`No podrás volver atrás`);
      setCardButton(`hide-button`);
      setCardButton2(`hide-button`);
      setAlertVisibility(`show-card`);
    }
  }, [props.buttonSelected]);

  const handleButtonCard = () => {
    setAlertVisibility(`hide-card-again`);
  };

  if (alertVisibility === `show-card`) {
    return (
      <>
        <div className={alertVisibility}>
          <div className='card-container'>
            <div className='close-card'>
              <img src='./close.svg' alt='close' onClick={() => handleButtonCard()}></img>
            </div>
            <img src={imageCard} alt='check'></img>
            <h1>{titleCard}</h1>
            <h4>{subTitleCard}</h4>
            <div className='button-div'>
              <button className={cardButton} onClick={() => handleButtonCard()}>
                {textButtonCard1}
              </button>
              <button className={cardButton2} onClick={() => handleButtonCard()}>
                {textButtonCard2}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

export default Card;
