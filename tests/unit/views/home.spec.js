import {shallowMount} from "@vue/test-utils";
import HomeView from "@/views/HomeView"

describe("Home test",() =>
{
    test("Debe coincidir con el spanshot",() =>
    {
        const wrap1 = shallowMount(HomeView)
        expect(wrap1.html()).toMatchSnapshot();
    });

    test("Al hacer clic debe cambiar a 'empty-entry'",() =>
    {
        // Crear mock del router
        const mockRouter = {
            push: jest.fn(),
        };
        // Agregarlo al component
        const wrap = shallowMount(HomeView,{
            global:
            {
                mocks:
                {
                    $router: mockRouter // El router del Home
                }
            }
        });
        // Llamar evento click del boton
        wrap.find("button").trigger("click");
        // Se espera que el click haya sido llamado
        expect(mockRouter.push).toHaveBeenCalled();
        // Se espera que el click haya sido llamado con la data
        expect(mockRouter.push).toHaveBeenCalledWith({name:"empty-entry"});
    });
})