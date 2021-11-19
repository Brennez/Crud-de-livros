import Book from "../models/book"
class BookDatabase{
  Books: Book[]

  constructor(){
    this.Books = []
  }

  //Cria livro e armazena na base de dados
  createBook({titulo, autor, qtdPagina, anoDePublicacao}){
    const book = new Book()
    book.titulo = titulo;
    book.autor = autor;
    book.qtdPagina = qtdPagina;
    book.anoDePublicacao = anoDePublicacao;
    book.created_at = new Date()
    this.Books.push(book)
    return book
  }


  //Lista todos os livros da base de dados
  list(): Book[]{
    return this.Books
  }

  //Retorna o livro utilizando o id 
  bookById(id:string): Book{
    const idExiste = this.Books.find((books)=> books.id === id)
    return idExiste;
  }

  //retorna o livro que vai ser atualizado
  updateBook(id:string): Book{
    const index = this.Books.find((books) => books.id === id)
    return index
  }

  //Retorna a posição do elemento que vai ser deletado
  deleteBook(id:string): number{
    const index = this.Books.findIndex((books) => books.id === id)
    return index
  }
    
}

export default BookDatabase