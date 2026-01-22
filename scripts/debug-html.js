const http = require('http');

http.get('http://localhost:3000/docs', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('HTML length:', data.length);
    console.log('Contains links:', data.includes('href'));
    console.log('First 1000 chars:');
    console.log(data.substring(0, 1000));
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});