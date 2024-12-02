const express = require('express');
const path = require('path'); // Required for correct file path handling
const app = express();
const PORT = 3000;

// Dummy Product Data (moved `image` field here for proper handling)
const items = [
  { 
    name: 'Wireless Bluetooth Headphones', 
    category: 'Audio', 
    price: 40, 
    image: '/images/headphones.jpg' // Correct file path for images in the "public" folder 
  },
  { 
    name: 'Smart LED Light Bulb', 
    category: 'Smart Home', 
    price: 60, 
    image: '/images/bulb.jpg' 
  },
  { 
    name: 'Eco-Friendly Water Bottle', 
    category: 'Lifestyle', 
    price: 20, 
    image: '/images/bottle.jpg' 
  },
  { 
    name: 'Adjustable Laptop Stand', 
    category: 'Work', 
    price: 30, 
    image: '/images/laptop.jpg' 
  },
  { 
    name: 'Portable Charger 10,000mAh', 
    category: 'Electronics', 
    price: 25, 
    image: '/images/charger.jpg' 
  },
  { 
    name: 'Smart Home Speaker', 
    category: 'Smart Home', 
    price: 100, 
    image: '/images/speaker.jpg' 
  }
];

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// API route to get JSON data
app.get('/api/items', (req, res) => {
  console.log('Request received for /api/items');
  res.json(items); // Send all items
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
