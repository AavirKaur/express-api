document.getElementById('fetchDataBtn').addEventListener('click', async () => {
  try {
    const response = await fetch('/api/items');
    const items = await response.json();

    const itemsListDiv = document.getElementById('itemsList');
    itemsListDiv.innerHTML = '';

    items.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('item');
      itemElement.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>Price: $${item.price}</p>`;
      itemsListDiv.appendChild(itemElement);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
