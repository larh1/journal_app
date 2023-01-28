/**
 * Rutas del modulo Auth
 */
export default
    {
        name: "auth",
        component: () => import(
            /* webpackChunkName: "AuthLayout" */
            "@/modules/auth/layouts/AuthLayout.vue"),
        children: [
            {
                path: '',
                name: 'login',
                component: () => import(
                    /* webpackChunkName: "AuthLayout_Login" */ '../views/Login.vue')
            },
            {
                path: 'register',
                name: 'register',
                component: () => import(
                    /* webpackChunkName: "AuthLayout_Register" */ '../views/Register.vue')
            },
        ],
    }