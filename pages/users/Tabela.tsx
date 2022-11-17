
import Cliente from "../Cliente"

import React from "react"
import Titulo from "../Titulo"
 export default function Tabela (){
return  <table className= " FLEX justify-center items-center W w-full rounded-xl overflow-hidden bg bg-gradient-to-r from to-amber-400 text-amber-500 text-left P-4 bg-black "><Titulo /> <tr></tr><tr></tr><tr>dados<td><Cliente /></td></tr><tr><td>campos</td><td>id</td><td>idade</td><td>nome</td></tr></table>
 }