(() => {
  const miniSearch = new MiniSearch({
    fields: ['title', 'summary', 'tags'],
  });

  const searchForm = document.querySelector('.cc-search-form');
  const searchInput = document.querySelector('.cc-search-form-input');
  const searchResults = document.querySelector('.cc-search-results');

  let resultsById = {};

  // Function to get search results
  const getSearchResults = (query) =>
    miniSearch.search(query, { prefix: true, fuzzy: 0.2, boost: { title: 2 } }).map(({ id }) => resultsById[id]);

  // Function to render search results
  const renderSearchResults = (results) => {
    searchResults.innerHTML = results
      .map(
        ({ title, url, summary, tags }) => `
        <a href="${url}" class="list-group-item list-group-item-action flex-column align-items-start text-decoration-none">
          <div class="d-flex w-100 justify-content-between">
            <h3 class="heading-small mb-1">${title}</h3>
          </div>
          <p class="mb-1">${summary}</p>
          <small class="text-muted">${tags.join(', ')}</small>
        </a>`
      )
      .join('\n');

    searchResults.classList.toggle('d-none', results.length === 0);
  };

  // Fetch index and initialize MiniSearch
  fetch('/api/search')
    .then((response) => response.json())
    .then((results) => {
      resultsById = results.reduce((byId, result) => {
        byId[result.id] = result;
        return byId;
      }, {});
      miniSearch.addAll(results);
    })
    .catch((error) => console.error('Error fetching search index:', error));

  // Handle form submission
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
      const results = getSearchResults(query);
      renderSearchResults(results);
    }
  });

  // Handle input event
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    const results = query.length > 1 ? getSearchResults(query) : [];
    renderSearchResults(results);
  });

  // Perform search if query parameter is present
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('q');
  if (query) {
    searchInput.value = query;
    const results = getSearchResults(query);
    renderSearchResults(results);
  }
})();
