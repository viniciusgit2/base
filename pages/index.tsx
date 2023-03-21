import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";
import Titulo from "./Titulo";
import Tabela from "./Tabela";
import Cliente from "./Cliente";
export default function IndexPage() {
  const[visivel,setvisivel]=useState<'Tabela' |'Formulario'>("Tabela")
  const clientes=[
    new Cliente(34,'1',"u"),
    new Cliente(45,'2',"1"),
    new Cliente(56,'3',"1"),
    new Cliente(64,'4',"1"),
  ]
  return (
  
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="text-neutral-500">hello </div>
      </Layout>
 )
  }