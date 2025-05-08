import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    if (req.url === '/user') {
        res.write('<h1>Hello User</h1>');
    }
    else if (req.url === '/group') {
        res.write('<h1>Hello Group</h1>');
    }
    else {
        res.write(`<h1> ${req.url}</h1>`);
    }

    res.end();
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}. Press Ctrl+C to stop.`);
});
