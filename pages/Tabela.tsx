import Cliente from "./Cliente";

interface TabelaProps {
  clientes: Cliente[];
}


export default function Tabela(props: TabelaProps) {
  
  const clientes=[
    new Cliente(34,'1',"u"),
    new Cliente(45,'2',"1"),
    new Cliente(56,'3',"1"),
    new Cliente(64,'4',"1"),
  ]
  return (
   
    <div className="w-full- rounded-xl overflow-hidden bg-black text-yellow-500">
      <tr>
        
        <thead> <tbody>{renderizar1()}</tbody></thead>
      </tr>
      
     
    </div>
  );

function renderizar1() {
 
  return(<table><tr><th>codigo</th><th>nome</th><th>idade</th></tr><td><tr></tr><td></td></td><thead><tbody>{renderizar2(clientes)}</tbody></thead>
  </table>)
 
} 
function renderizar2(Cliente){
  return (Cliente=[34,"u","10"])
}
}
