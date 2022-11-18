import Icone from "../Icone";
interface buttonprops{
childrem:any
classname:any
}
export default function button(props:buttonprops){
return (<button>{props.childrem}</button>)    
}