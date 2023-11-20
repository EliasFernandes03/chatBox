import express from "express"

const app = express();

app.get("/",(request,response) => {
    return response.send("Ola mundo")
})

app.post("/users",(request,response) => {
    return response.json({message:"usuario cadastrado com sucesso"})
})


app.listen(9999, () => console.log("Server is running on port 9999"))