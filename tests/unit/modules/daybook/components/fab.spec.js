import Fab from "@/modules/daybook/components/Fab"
import {shallowMount} from "@vue/test-utils";

describe("Pruebas en el FAB Component",() =>
{
    test("Debe mostrar el icono por defecto 'fa-plus'",() =>
    {
        const wrp = shallowMount(Fab); // Montar component
        // Buscar la clase fa-plus 
        expect(wrp.find("i").classes("fa-plus")).toBeTruthy();
    });

    test("Debe mostrar el icono pasado: fa-circle",() =>
    {
        const wrp = shallowMount(Fab,{
            props: {
                icon: "fa-circle"
            }
        }); // Montar component
        // Buscar la clase fa-plus 
        expect(wrp.find("i").classes("fa-circle")).toBeTruthy();
    })

    test("Debe emitir el click2 al hacer click",() =>
    {
        const wrp = shallowMount(Fab); // Montar component
        wrp.find("button").trigger("click"); // Hacer click en el button
        // Comprobar que se emitió el click2
        // IMPORTANTE: El emit regresa un array (con parametos) cuando se emite
        expect(wrp.emitted("click2")).toHaveLength(1);
    })
})