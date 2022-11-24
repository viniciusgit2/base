import Icone from "../Icone";
interface buttonprops{
childrem:any
classname:any
onCliick:()=>void
}
export default function button(props:buttonprops){
return (<button onClick ={props.onCliick}  className={"bg-black to-r px4-py2 rounded-md "} >{props.childrem} </button>)    
}