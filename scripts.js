const items = [
    'JavaScript programming',
    'HTML and CSS basics',
    'Frontend development',
    'Web design principles',
    'Dynamic content handling',
    'Responsive web design',
    'JavaScript frameworks',
    'Server-side programming',
    'Database management',
    'Version control with Git',
    'Web performance optimization',
    'User experience design',
    'Mobile-first design',
    'Cross-browser compatibility',
    'Progressive web apps',
    'Single-page applications',
    'API integration',
    'Backend development',
    'Content management systems',
    'Web security basics'
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const itemList = document.getElementById('item-list');
  
    function renderItems(query = '') {
      itemList.innerHTML = '';
      items.forEach(item => {
        if (item.includes(query)) {
          const highlightedItem = highlightText(item, query);
          const li = document.createElement('li');
          li.innerHTML = highlightedItem;
          itemList.appendChild(li);
        }
      });
    }
  
    searchInput.addEventListener('input', () => {
      renderItems(searchInput.value);
    });
  
    // Render all items initially
    renderItems();
  });
  
  function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'g');
    return text.replace(regex, '<span class="highlight">$1</span>');
  }
  