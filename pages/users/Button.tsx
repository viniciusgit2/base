import Icone from "../Icone";
interface buttonprops{
childrem:any
classname:any
onCliick:()=>void
}
export default function button(props:buttonprops){
return (<button onClick={props.onCliick}>{props.childrem}</button>)    
}