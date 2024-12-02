async function fetchData() {
  try {
    const response = await fetch('/api/items'); 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Fetched data:', data); // Log the full JSON to verify it

    displayItems(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById('itemsList').innerHTML = '<p>Failed to load items. Please try again later.</p>';
  }
}


// Function to display the fetched items on the page
function displayItems(items) {
  const itemsContainer = document.getElementById('itemsList');
  itemsContainer.innerHTML = ''; // Clear previous content
  
  items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    
    // Format price
    const formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(item.price);

    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" loading="lazy">
      <h2>${item.name}</h2>
      <p>${item.description}</p>
      <p class="price">${formattedPrice}</p>
    `;
    itemsContainer.appendChild(itemDiv);
  });
}

// Add event listener to the button to trigger the fetch request
document.getElementById('loadItemsButton').addEventListener('click', fetchData);
