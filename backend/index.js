const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
app.get("/main", (req, res) => {
  res.json({
    message: "Телефонная книга",
  });
});
app.get("/about", (req, res) => {
  res.json({
    message: "Dima",
  });
});
app.get("/contact", (req, res) => {
  res.json({
    message: "telefon: 89951817480",
  });
});
