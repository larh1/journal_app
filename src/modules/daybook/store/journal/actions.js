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