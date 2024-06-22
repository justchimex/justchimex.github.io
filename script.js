function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

function highlightMatches(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

function filterItems() {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll('.item');
    let hasResults = false;

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.innerHTML = highlightMatches(item.textContent, query);
            item.style.display = 'block';
            hasResults = true;
        } else {
            item.style.display = 'none';
        }
    });

    const noResults = document.querySelector('.no-results');
    if (!hasResults && !noResults) {
        const noResultsItem = document.createElement('li');
        noResultsItem.className = 'no-results';
        noResultsItem.textContent = 'No results found';
        document.querySelector('.items').appendChild(noResultsItem);
    } else if (hasResults && noResults) {
        noResults.remove();
    }
}

const debouncedFilterItems = debounce(filterItems, 300);
document.querySelector('.search-input').addEventListener('input', debouncedFilterItems);
