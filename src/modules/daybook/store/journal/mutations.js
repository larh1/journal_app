export const setEntries = (state,entries) =>
{
    state.entries = [...entries];
    state.isLoading = false;
}

export const updateEntry = (state,entry) =>
{
    // Obtener la posicion del index actualizado
    let index = state.entries.map(e => e.id).indexOf(entry.id);
    state.entries[index]=entry;
}

export const createEntry = (state,entry) =>
{
    state.entries.unshift(entry);
}