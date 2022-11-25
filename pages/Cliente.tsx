

 export default class Cliente {
#id: String
     public get id(): String {
         return this.id
     }
     public set id(value: String) {
         this.id = value
     }
     #nome: String
     public get nome(): String {
         return this.nome
     }
     public set nome(value: String) {
         this.nome = value
     }
#idade: Number
     public get idade(): Number {
         return this.idade
     }
     public set idade(value: Number) {
         this.idade = value
     }
     constructor( idade:Number,nome:String,id:String=null  ){
        this.#id=id
this.#nome=nome
this.#idade=idade


     }
  static vazio(Cliente){
return new Cliente("U","U",10)
  }
     }

    
