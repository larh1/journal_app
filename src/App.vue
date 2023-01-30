<template>
<router-view />
</template>

<script>
import useAuth from './modules/auth/composables/useAuth';
export default
{
    setup()
    {
        const
        {
            authStatus
        } = useAuth();
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
