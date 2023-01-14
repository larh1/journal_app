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
    // Guardar actualizado en actuales
    context.commit("updateEntry",{...entry});
}

export const createEntry = async (context,entry) =>
{
    // Actualizar (menos el id)
    let data = {
        text: entry.text,
        date: entry.date,
        picture: entry.picture,
    };
    const res = await journalApi.post(`entries.json`,data);
    const id = res.data.name; // Id que regresa firebase
    data.id = id;
    // Guardar actualizado en actuales
    context.commit("createEntry",{...data});
    return id;
}

