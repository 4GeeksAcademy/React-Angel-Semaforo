import React from "react";
import { useState, useEffect } from "react";


const TrafficLight = () => {
    const [color, setColor] = useState("red");
    useEffect(() => {


    });
    return (
        <div className="Container">
{/* aqui creo un div container para meter todo el componenete  */}
            <div className="Semaforo">
{/*aqui meto las luces dentro del semáforo como 3 divs y uso el flex column para ponerlo en horinzontal*/}
                <div className={`red mt-3$ ${color === "red" ? "active" : ""}`}
                    onClick={() => setColor("red")}
                ></div>
                <div className={`yellow mt-3 ${color === "yellow" ? "active" : ""}`}
                    onClick={() => setColor("yellow")}
                > </div>
                <div className={`green mt-3 ${color === "green" ? "active" : ""}`}
                    onClick={() => setColor("green")}
                ></div>
{/* en resumen me costo las comillas inversas que tuve que pedir ayuda en general a un compi pero con un ternario establezco que cuando el color sea igual
al color de la luz sea active o sino se le quite el active para que no se ilumenen todas y con onClick y setColor
establezco el color correspondiente haciendo que cuandos se clicke en la luz */}
            </div>

        </div>
    )
}

export default TrafficLight;

// Me faltan los bonus pero lo haré seguramente más adelante por mi cuenta para poder ponerme al dia con el resto de proyectos//