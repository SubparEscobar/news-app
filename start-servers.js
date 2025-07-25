const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting NewsHub servers...\n');

// Start backend server
console.log('📡 Starting backend server...');
const backend = spawn('node', ['server.js'], {
    cwd: path.join(__dirname, 'news-proxy-server'),
    stdio: 'inherit'
});

// Wait a moment for backend to start
setTimeout(() => {
    console.log('\n🌐 Starting frontend server...');
    
    // Try to use a simple HTTP server approach
    const frontend = spawn('node', ['-e', `
        const http = require('http');
        const fs = require('fs');
        const path = require('path');
        
        const server = http.createServer((req, res) => {
            let filePath = path.join(__dirname, 'frontend', req.url === '/' ? 'index.html' : req.url);
            
            // Security: prevent directory traversal
            if (!filePath.startsWith(path.join(__dirname, 'frontend'))) {
                res.writeHead(403);
                res.end('Forbidden');
                return;
            }
            
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end('File not found');
                    return;
                }
                
                const ext = path.extname(filePath);
                const mimeTypes = {
                    '.html': 'text/html',
                    '.css': 'text/css',
                    '.js': 'application/javascript',
                    '.json': 'application/json',
                    '.png': 'image/png',
                    '.jpg': 'image/jpeg',
                    '.gif': 'image/gif'
                };
                
                res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
                res.end(data);
            });
        });
        
        server.listen(8081, () => {
            console.log('Frontend server running on http://localhost:8081');
            console.log('Opening browser...');
            
            // Try to open browser
            const { exec } = require('child_process');
            exec('start http://localhost:8081', (err) => {
                if (err) console.log('Please manually open: http://localhost:8081');
            });
        });
    `], {
        cwd: __dirname,
        stdio: 'inherit'
    });
    
    frontend.on('error', (err) => {
        console.error('Frontend server error:', err);
    });
}, 2000);

backend.on('error', (err) => {
    console.error('Backend server error:', err);
});

console.log('\n✅ Servers are starting up!');
console.log('📱 Frontend: http://localhost:8081');
console.log('🔧 Backend: http://localhost:3000');
console.log('\nPress Ctrl+C to stop all servers'); 