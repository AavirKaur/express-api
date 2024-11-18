const express = require('express');
const app = express();
const PORT = 3000;

// Load JSON data
const items = require('./data/items.json');

// Serve static files from the "public" folder
app.use(express.static('public'));
    
// API route to get JSON data
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
