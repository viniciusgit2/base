import Link from "next/link";
import Layout from "../components/Layout";
import Cliente from "./Cliente";
import Tabela from "./users/Tabela";
import { useState } from "react";
import Formulario from "./Formulario";
import button from "./users/Button";
export function IndexPage() {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="text-neutral-500">hello </div>

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
      <div>
        <button className="bg-emerald-600 text to-white px-4 py-2 rounded-md " />{" "}
        por enquanto falso botao
      </div>
      </Layout>
    
  );
}

export default IndexPage;
