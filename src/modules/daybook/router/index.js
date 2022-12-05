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
            {
                path: "",
                name: "empty-entry",
                component: () => import(
                    /* webpackChunkName: "EmptyEntry" */
                    "@/modules/daybook/views/EmptySelected.vue"),
            }
        ],
    }