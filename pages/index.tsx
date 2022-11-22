import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";
import Titulo from "./Titulo";
export function IndexPage() {
  const[visivel,setvisivel]=useState<'Tabela' |'Formulario'>("Tabela")
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="text-neutral-500">hello </div>
      {visivel==='Tabela'}
<>
      <div className="bg-black border-r-emerald-500 text-red-700">
        {" "}
        <Link href="/Cliente">Cliente</Link>
      </div>

      <div className="bg-black border-r-emerald-500 text-red-700">
        {" "}
        <Link href="/users/Tabela">Tabela</Link>
      </div>
      <div className="bg-black border-r-emerald-500 text-red-700">
        
        <Link href="Formulario">Formulario</Link>
      </div>
      <div className="bg-black border-r-emerald-500 text-red-700">
        
        <Link href="Titulo">Titulo</Link>
      </div>
      <div>
        <button className="bg-emerald-600 text to-white px-4 py-2 rounded-md "onClick={()=>setvisivel("Formulario")} />
        por enquanto falso botao
      </div>
      </>
      </Layout>
    
  );
}

export default IndexPage;
