
const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

const getDateYear = (dateString) =>
{
    const date = new Date(dateString);
    return {
        day: date.getDate(),
        month: months[date.getMonth()],
        year: `${ date.getFullYear() },${ days[date.getDay()] }`
    }
}

export default getDateYear