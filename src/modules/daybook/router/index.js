/**
 * Rutas del modulo DayBook
 */
export default
    {
        name: "daybook",
        component: () => import(
            /* webpackChunkName: "daybook" */
            "@/modules/daybook/layout/DayBookLayout.vue"),
        children: [
            // Nada seleccionado
            {
                path: "",
                name: "empty-entry",
                component: () => import(
                    /* webpackChunkName: "EmptyEntry" */
                    "@/modules/daybook/views/EmptySelected.vue"),
            },
            // Detalles
            {
                path: ":id",
                name: "entry",
                component: () => import(
                    /* webpackChunkName: "EmptyEntry" */
                    "@/modules/daybook/views/EntryView.vue"),
                props: (route) =>
                {
                    return {
                        id: route.params.id
                    }
                }
            }
        ],
    }