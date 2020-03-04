// DOM - Document Object Model

let notes = getSavedNotes();

const filters = {
    searchText: '',
    sortBy: 'byEdited'
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => {
    const uniqueID = uuidv4();
    const timestamp = moment().valueOf();

    notes.push( {
        id: uniqueID,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
        
    });

    saveNotes(notes);
    // renderNotes(notes, filters); // no need to render the notes since we are immediately redirecting
    location.assign(`/edit.html#${uniqueID}`);
});

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
});

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    };
});
