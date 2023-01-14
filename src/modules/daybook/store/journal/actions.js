import journalApi from "@/api/journalApi"

export const loadEntries = async (context) =>
{
    // Obtener la información del backend
    const {data} = await journalApi.get("/entries.json");
    let entries = [];
    // convertir a array
    Object.keys(data).map(id =>
    {
        entries.push({id,...data[id]})
    });
    // Commit de entries
    context.commit("setEntries",entries);

}

export const updateEntry = async (context,entry) =>
{
    // Actualizar (menos el id)
    const data = {
        text: entry.text,
        date: entry.date,
        picture: entry.picture,
    };
    const res = await journalApi.put(`entries/${ entry.id }.json`,data);
    console.error(res);
    // Guardar actualizado en actuales
    context.commit("updateEntry",{...entry});
}