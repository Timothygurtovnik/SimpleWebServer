import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    const url = new URL(req.url, `http://${req.headers.host}`);
    const name = url.searchParams.get('name');

    if (name) {
        res.write(`<h1>Hello ${name}</h1>`);
    }
    else if (url.pathname === '/user') {
        res.write('<h1>Hello User</h1>');
    }
    else if (url.pathname === '/group') {
        res.write('<h1>Hello Group</h1>');
    }
    else {
        res.write(`<h1>Вы перешли по адресу: ${url.pathname}</h1>`);
    }

    res.end();
});


server.listen(port, () => {
    console.log(`Server is running on port ${port}. Press Ctrl+C to stop.`);
});
