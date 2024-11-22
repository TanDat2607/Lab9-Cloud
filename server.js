const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Trang web don gian</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          margin-top: 50px;
        }
        h1 {
          color: #007bff;
        }
      </style>
    </head>
    <body>
      <h1>Chao mung ban den voi Express!</h1>
      <p>Day la mot trang web don gian chay tren Express.</p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
