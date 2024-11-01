import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const PORT = 3002;
app.use(cors());

const DB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "acopio",
});

DB.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Conexion exitosa");
});

//Ruta para el frontend GET materiales
app.get("/api/acopio/materiales", (req, res) => {
  const SQL_QUERY = "SELECT * FROM materiales";
  DB.query(SQL_QUERY, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

//Ruta para el frontend GET peticiones
app.get("/api/acopio/peticiones", (req, res) => {
  const SQL_QUERY = "SELECT * FROM peticiones";
  DB.query(SQL_QUERY, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

// EJECUCION DEL SERVIDOR :
app.listen(PORT, () => {
  console.log(`servidor escuchando en http://localhost:${PORT}`);
});
