import Cliente from "./Cliente";

interface TabelaProps {
  Cliente: Cliente[];
}
export default function Tabela(props: TabelaProps) {
  return (
    <div className="bg-black border-r-emerald-500 text-yellow-500">
      <tr>
        <th>codigo</th>
        <th></th>
        <th>nome</th>
        <th>idade</th>
        <thead> <tbody>{renderizar1}</tbody></thead>
      </tr>
      
     
    </div>
  );
}
function renderizar1(Props: TabelaProps) {
  return Props.Cliente?.map((Cliente, i) => {
    <tr key={Cliente.id}>
      <td>{Cliente.id}</td>
      <td>{Cliente.nome}</td>
      <td>{Cliente.idade}</td>
    </tr>;
  });
}
