import { useState } from "react";
import Cliente from "./Cliente";
import Entrada from "./Entrada";
interface Formulario{
    cliente:Cliente
cancelado():()=> void

}
export default function Formulario (){
    
    return(
        <div className=" justify-items-center bg-stone-900 text-red-800 h-fit w-fit">digite abaixo
    <Entrada type texto={"nome"} onchange></Entrada><Entrada texto="idade"tipo={"number"}></Entrada>
        </div>
            )
            }