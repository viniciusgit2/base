
import Cliente from "../Cliente"

import React from "react"
import Titulo from "../Titulo"
 export default function Tabela (){
return  <table className= " h-screen  justify-items-center text-center  from to-amber-400 text-amber-500   bg-black "><Titulo /> <tr></tr><tr></tr><tr>dados<td><Cliente /></td></tr><tr><td>campos</td><td>id</td><td>idade</td><td>nome</td></tr></table>
 }