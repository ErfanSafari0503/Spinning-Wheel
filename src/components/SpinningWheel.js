import { useState } from "react";
import { WheelOption } from "./WheelOption";

export default function SpinningWheel({ btnName = "شروع", children }) {
  const [wheelStyles, setWheelStyles] = useState({});
  const [isSpinning, setIsSpinning] = useState(false);

  const values = children;

  function handleSpinBtn() {
    if (isSpinning) return;

    setIsSpinning(true);

    const value = Math.ceil(Math.random() * 3200);
    const spinDuration = 5000;

    setWheelStyles({
      transition: `transform ${spinDuration}ms ease-out`,
      transform: `rotate(${value}deg)`,
    });

    setTimeout(() => {
      setIsSpinning(false);
    }, spinDuration);
  }

  return (
    <div className="container">
      <div className="spin-button" role="button" onClick={handleSpinBtn}>
        {btnName}
      </div>
      <div className="wheel" style={wheelStyles}>
        {values.map((value, i) => (
          <WheelOption css={"option"} index={i + 1} key={i}>
            {value}
          </WheelOption>
        ))}
      </div>
    </div>
  );
}
