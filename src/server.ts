import exrpress from "express"
import bookRoutes from "./routes/bookRoutes"

const app = exrpress()


app.use(exrpress.json())
app.use(bookRoutes)

app.listen("3000", ()=>{
  console.log("SERVIDOR RODANDO NA PORTA 3000")
})