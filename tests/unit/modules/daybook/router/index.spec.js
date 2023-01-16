import router from "@/modules/daybook/router/index";

describe("Pruebas en daybook/router",() =>
{
    test("Configuracion del router",async () =>
    {
        expect(router).toMatchObject({
            name: "daybook",
            component: expect.any(Function), // Se espera una funcion
            children: [
                {
                    path: "",
                    name: "empty-entry",
                    component: expect.any(Function),
                },
                {
                    path: ":id",
                    name: "entry",
                    component: expect.any(Function),
                    props: expect.any(Function)
                }
            ],
        });

        // Probar los componentes del router
        expect((await router.children[0].component()).default.name)
            .toBe("empy-component"); // Comprobar por nombre

        expect((await router.children[1].component()).default.name)
            .toBe("entry-view"); // Comprobar por nombre

        /* Mejorar prueba */
        // Obtener las promesas de los componentes
        const promsRoutes = [];
        router.children.forEach(c => promsRoutes.push(c.component()));

        // Obtener nombes de los componentes
        const routes = await (await Promise.all(promsRoutes)).map(c => c.default.name);
        // Esperar los dos componentes
        expect(routes).toContain("entry-view");
        expect(routes).toContain("empy-component");
    });

    test("Se debe regresar el id de la ruta",() =>
    {
        // Crear ruta de prueba
        const test = {
            params: {
                id: "ENLku2JZw41DSd9n6lRW", // Id de Prueba
            }
        }
        // Comparar que el id enviado sea el esperado
        expect(router.children[1].props(test).id).toBe(test.params.id)
        /** Mejorar **/
        const child = router.children.find(c => c.name == "entry");
        expect((child.props(test).id)).toBe(test.params.id);
    })
})