
/**
 * Obtener los registros que coincidan con el termino ingresado
 * @param  state State del Store
 * @returns Array
 */
export const getEntriesByTerm = (state) => (term = "") =>
{
    if (term.trim().length == 0) return state.entries;

    return state.entries.filter(e => e.text.toLowerCase().includes(term));
}

/**
 * Obtener el registro del Id ingresado
 */
export const getEntryById = (state) => (id) =>
{
    const entry = state.entries.find(r => r.id === id);
    if (!entry) return;
    return {...entry};
}