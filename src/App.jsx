import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function App() {
  const [shapeType, setShapeType] = useState("");
  const [baseValue, setBaseValue] = useState(0);
  const [heightValue, setHeightValue] = useState(0);
  const icons = ['./src/assets/shapes/1.png', './src/assets/shapes/2.png', './src/assets/shapes/3.png'];

  const handleSelectedShape = (btn, shape) => {
    setShapeType(shape);
    document.querySelectorAll(".active").forEach((b) => b.classList.remove("active"));
    btn.currentTarget.classList.add("active");
  }

  const handleCalculate = () => {
    let result = 0;
    let icon = [];

    switch (shapeType) {
      case 'quadrado':
        result = baseValue * baseValue;
        icon = icons[0];
        break;
      case 'retângulo':
        result = baseValue * heightValue;
        icon = icons[1];
        break;
      case 'triângulo':
        result = (baseValue * heightValue) / 2;
        icon = icons[2];
        break;
      default:
        break
    }

    Swal.fire({
      title: "Parabéns!",
      text: `A área do seu ${shapeType} é de ${result} cm²`,
      imageUrl: icon,
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: `${shapeType}`,
    })
  }

  return (
    <div className="container">
      <h1>Calculadora de Áreas</h1>

      <div className="shapes">
        <button onClick={(e) => handleSelectedShape(e, 'quadrado')}>
          <figure className="shapes_item">
            <img src="./src/assets/shapes/1.png" alt="Quadrado" />
          </figure>
        </button>
        <button onClick={(e) => handleSelectedShape(e, 'retângulo')}>
          <figure className="shapes_item">
            <img src="./src/assets/shapes/2.png" alt="Retângulo" />
          </figure>
        </button>
        <button onClick={(e) => handleSelectedShape(e, 'triângulo')}>
          <figure className="shapes_item">
            <img src="./src/assets/shapes/3.png" alt="Triângulo" />
          </figure>
        </button>
      </div>

      <div className="calc">
        <div className="calc_input">
          <label htmlFor="base">Base: </label>
          <input type="text" name="base" id="base" onChange={(e) => setBaseValue(e.target.value)} />
        </div>
        <div className="calc_input">
          <label htmlFor="height">Altura: </label>
          <input type="text" name="height" id="height" onChange={(e) => setHeightValue(e.target.value)} />
        </div>
      </div>
      <button onClick={handleCalculate} className="calc_submit">Calcular</button>
    </div>
  );
}

export default App; // Make App the default export