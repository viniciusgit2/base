
export interface base{
    tipo:string & number
     texto:String
    valor:any
    
    }
    export const Entrada =( base) => {
    
    return (
        <div className="bg bg-green-600">
            <label>
                {base.tipo}
            </label>
            <input type={base.texto} value={base.valor} >
        
            </input>
           
        </div>
    )
    }