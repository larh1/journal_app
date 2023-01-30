<template>
<div class="main">
    <input type="checkbox" id="chk" aria-hidden="true">
    <div class="signup">
        <form @submit.prevent="onSubmit">
            <label for="chk" aria-hidden="true">Registrar</label>
            <input v-model="userForm.email" type="email" name="email" placeholder="Email" required>
            <input v-model="userForm.name" type="text" name="name" placeholder="Usuario" required>
            <input v-model="userForm.pasw" type="password" name="pasw" placeholder="Contraseña" required>
            <button type="submit">Crear cuenta</button>
        </form>
    </div>

    <div class="login" style="text-align: center">
        <router-link :to="{name:'login'}" class="ya-cuenta">
            Ya tengo una cuenta
        </router-link>
    </div>
</div>
</template>

<script>
import
{
    ref
}
from 'vue';
import useAuth from "@/modules/auth/composables/useAuth"
export default
{
    name: "auth-register",
    setup()
    {
        const
        {
            createuser
        } = useAuth();
        const userForm = ref(
        {
            email: "",
            name: "",
            pasw: "",
        });
        return {
            userForm,
            onSubmit: async () => createuser(userForm.value)
        };
    }

}
</script>

<style scoped>
.ya-cuenta {
    color: #573b8a;
    margin-left: auto;
    margin-right: auto;
    font-size: 12px;
    text-align: center;
}
</style>
