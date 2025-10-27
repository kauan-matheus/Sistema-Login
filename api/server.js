import express from "express";

const app = express();

//rota pra resgatar todos os logins
app.get("/login", (req, res) => {
  try {
    res.send("teste");
  } catch (error) {}
});

//pegar por id
app.get("/login/:id", (req, res) => {
  try {
    res.send("teste");
  } catch (error) {}
});

//criar novo usuario
app.post("/login", (req, res) => {
  try {
    res.send("teste");
  } catch (error) {}
});

//editar usuario
app.put("/login/:id", (req, res) => {
  try {
    res.send("teste");
  } catch (error) {}
});

//deletar usuario
app.delete("/login/:id", (req, res) => {
  try {
    res.send("teste");
  } catch (error) {}
});


app.listen(3000);
