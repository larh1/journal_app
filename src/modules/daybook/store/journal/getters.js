
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

export const getEntriesById = () =>
{

}