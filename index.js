const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000; // Вы можете изменить порт по вашему усмотрению

app.use(cors()); // Это позволит вашему фронтенду обращаться к API

app.get('/api/link', (req, res) => {
    // Генерируем случайное число, чтобы симулировать изменение ссылки при каждом запросе
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
