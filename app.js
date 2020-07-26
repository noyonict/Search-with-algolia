const client = algoliasearch("LHE4JXMNFW", "6acb412498b5d68004bfae9bfd145086");
const bloop = client.initIndex('bloop');

autocomplete('#aa-search-input', {}, [{
    source: autocomplete.sources.hits(bloop, { hitsPerPage: 7 }),
    displayKey: 'page_name',
    templates: {
        header: '<div class="aa-suggestions-category">Facebook Pages</div>',
        suggestion({ _highlightResult }) {
            return `<span>${_highlightResult.page_name.value}</span>`;
        }
    }
}, ]);