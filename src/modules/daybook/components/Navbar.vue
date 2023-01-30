<template>
<!-- Navbar -->
<nav class="navbar bg-primary">
    <a class="navbar-brand text-white">
        <img src="@/assets/logo.png" alt="Logo" class="d-inline-block align-text-top mx-2" height="25">
        <span>{{userName}}</span>
    </a>
    <button class="btn btn-outline-info mx-2" @click="onLogOut">
        <i class="fa-solid fa-right-from-bracket"></i>
    </button>
</nav>
</template>

<script>
import useAuth from '@/modules/auth/composables/useAuth'
import
{
    useRouter
}
from 'vue-router';
export default
{
    name: "daybook-navbar",
    setup()
    {
        const router = useRouter();
        const
        {
            userName,
            logOut
        } = useAuth();

        return {
            userName,
            onLogOut: () =>
            {
                // Salir
                router.push(
                {
                    name: "login"
                });
                logOut();
            }
        }
    }
}
</script>
