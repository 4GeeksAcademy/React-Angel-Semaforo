import React from "react";
import { useEffect, useState } from "react";


const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [colorsArray, setColorsArray] = useState(["red", "yellow", "green"])
    const [inputColor, setInputColor] = useState("")
    const [intervalId, setIntervalId] = useState(null); // Guardar el ID del intervalo
    const [isChanging, setIsChanging] = useState(false); // Para evitar múltiples intervalos

    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId); // Limpiar el intervalo al desmontar
            }
        };
    }, [intervalId]);

    function addColor(newColor) {
        if (colorsArray.find((colorArray) => colorArray === newColor)) {
            alert("Este color ya existe")
            return
        }
        if (!newColor) {
            alert("Necesitas escribir un color")
            return
        }


        setColorsArray([...colorsArray, newColor])
        setInputColor("")
    }

    function changeColor() {
        if (isChanging) return; // Evita que se inicie otro intervalo si ya está en curso
        setIsChanging(true);

        const id = setInterval(() => {
            setColor((prevColor) => {
                const currentIndex = colorsArray.indexOf(prevColor);
                const nextIndex = (currentIndex + 1) % colorsArray.length;
                return colorsArray[nextIndex];
            });
        }, 1000);

        setIntervalId(id); // Guardar el ID del intervalo
    }

    function stopColorChange() {
        if (intervalId) {
            clearInterval(intervalId); // Detener el intervalo
            setIsChanging(false); // Cambiar el estado a no activo
        }
    }


    return (
        <div className="Container">
            {/* aqui creo un div container para meter todo el componenete  */}
            <div className="Semaforo">
                {/*aqui meto las luces dentro del semáforo como 3 divs y uso el flex column para ponerlo en horinzontal*/}
                {colorsArray.map((colorArray) => {
                    return (
                        <div className={`${colorArray} mt-3 ${color === colorArray ? "active" : ""}`}
                            onClick={() => setColor(colorArray)}
                            style={{
                                backgroundColor: colorArray, "border-radius": "100%",
                                width: "100px",
                                height: "100px"
                            }}
                        ></div>
                    )
                })}
                {/* en resumen me costo las comillas inversas que tuve que pedir ayuda en general a un compi pero con un ternario establezco que cuando el color sea igual
al color de la luz sea active o sino se le quite el active para que no se ilumenen todas y con onClick y setColor
establezco el color correspondiente haciendo que cuandos se clicke en la luz */}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); addColor(inputColor) }}>
                <input type="text" value={inputColor} onChange={(e) => { setInputColor(e.target.value) }} />
                <button className="btn btn-light ms-5" type="submit">Añadir Color</button>
            </form>

            <button className="btn btn-dark ms-5" onClick={changeColor}>Cambiar colores</button>
            <button className="btn btn-danger ms-5" onClick={stopColorChange}>Detener</button>
        </div >
    )
}

export default TrafficLight;

// Me faltan los bonus pero lo haré seguramente más adelante por mi cuenta para poder ponerme al dia con el resto de proyectos//