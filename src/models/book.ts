import {v4 as uuidv4} from "uuid"

class Book{
  id?: string;
  titulo: string;
  autor: string;
  qtdPagina: number;
  anoDePublicacao: number;
  created_at: Date;
  
  constructor(){
    this.id = uuidv4()
  }

}

export default Book