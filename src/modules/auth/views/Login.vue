<template>
<main class="pt-5">
    <form @submit.prevent="onLogin" class="mx-auto py-5 form_class">
        <div class="text-center mb-3">
            <img class="mx-auto" src="@/assets/libro.png" alt="Libro" height="80">
        </div>
        <div class="form_div">
            <label>Correo</label>
            <input class="field_class" type="text" v-model="user.email" placeholder="Email" required>
            <label>Contraseña</label>
            <input class="field_class" type="password" v-model="user.pasw" placeholder="Contraseña" required>
            <button class="submit_class" type="submit">Entrar</button>
        </div>
        <div class="info_div">
            <router-link :to="{name:'register'}">
                No tengo una cuenta
            </router-link>
        </div>
    </form>

</main>
</template>

<script>
import
{
    ref
}
from 'vue';
import
{
    useRouter
}
from "vue-router";
import useAuth from "../composables/useAuth";
export default
{
    name: "auth-login",
    setup()
    {
        // composable
        const
        {
            loginUser
        } = useAuth();
        const router = useRouter();
        const user = ref(
        {
            email: "",
            pasw: "",
        });
        return {
            user,
            onLogin: async () =>
            {
                const
                {
                    ok,
                    message
                } = await loginUser(user.value);
                // Mensaje en error
                if (!ok) alert(message)
                else
                {
                    alert("Ingreso correcto");
                    router.push("/daybook/empty-entry");
                }
            }
        }
    }
}
</script>

<style scoped>
main {
    background-color: #2c3e50;
    min-height: 100vh;
}

.form_class {
    width: 500px;
    padding: 40px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.3);
}

.form_div>label {
    font-size: 1rem;
}

.info_div {
    text-align: right;
    margin-top: 20px;
}

.info_div a {
    color: #2c3e50;
}

.field_class {
    width: 100%;
    border-radius: 6px;
    border-style: solid;
    border-width: 1px;
    padding: 5px 0px;
    text-indent: 6px;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 0.9rem;
}

.submit_class {
    border-style: none;
    border-radius: 5px;
    padding: 8px 20px;
    text-transform: uppercase;
    letter-spacing: .8px;
    display: block;
    margin: auto;
    margin-top: 10px;
    box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.2);
    cursor: pointer;
}
</style>
