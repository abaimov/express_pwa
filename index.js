const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());

app.get('/api/link', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100);

    const link = {
        url: `https://example.com/page/${randomNumber}`,
        text: `Динамическая ссылка ${randomNumber}`
    };

    res.json(link);
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);

});
