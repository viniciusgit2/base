import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";
import Titulo from "./Titulo";
import Tabela from "./Tabela";
import Cliente from "./Cliente";
export function IndexPage() {
  const[visivel,setvisivel]=useState<'Tabela' |'Formulario'>("Tabela")
  const clientes=[
    new Cliente(34,'1',"1"),
    new Cliente(45,'1',"1"),
    new Cliente(56,'1',"1"),
    new Cliente(64,'1',"1")
  ]
  return (
    <>
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="text-neutral-500">hello </div>
      
    {visivel==="Tabela"}
<>
      <div className="bg-black border-r-emerald-500 text-red-700">
        {" "}
        <Link href="/Cliente">Cliente</Link>
      </div>

      <div className="bg-black border-r-emerald-500 text-red-700">
        {" "}
      
      
      </div>
      <div className="bg-black border-r-emerald-500 text-red-700">
        
        <Link href="Formulario">Formulario</Link>
      </div>
      <div className="bg-black border-r-emerald-500 text-red-700">
        
        <Link href="Titulo">Titulo</Link>
      </div>

      <Tabela Cliente={clientes}></Tabela>
      <div>
      <Link href="./Tabela">tABELA</Link>
      </div>
      </>
      
      </Layout>
      </>
    )
  ;
}

export default IndexPage;
