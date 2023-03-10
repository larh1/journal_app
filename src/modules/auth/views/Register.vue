<template>
<main class="pt-5">
    <form @submit.prevent="onSubmit" class="mx-auto my-5 form_class">
        <div class="text-center mb-3">
            <img class="mx-auto" src="@/assets/libro.png" alt="Libro" height="80">
        </div>
        <div class="form_div">
            <label>Correo</label>
            <input class="field_class" v-model="userForm.email" type="email" name="email" placeholder="Email" required>

            <label>Usuario</label>
            <input class="field_class" v-model="userForm.name" type="text" name="name" placeholder="Usuario" required>

            <label>Contraseña</label>
            <input class="field_class" v-model="userForm.pasw" type="password" name="pasw" placeholder="Contraseña" required>
            <button class="submit_class" type="submit">Crear Cuenta</button>
        </div>
        <div class="info_div mt-3 text-end">
            <router-link :to="{name:'login'}">
                Ya tengo una cuenta
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
import useAuth from "@/modules/auth/composables/useAuth";
import
{
    useRouter
}
from "vue-router";
export default
{
    name: "auth-register",
    setup()
    {
        const
        {
            createuser
        } = useAuth();
        const router = useRouter();
        const userForm = ref(
        {
            email: "",
            name: "",
            pasw: "",
        });
        return {
            userForm,
            onSubmit: async () =>
            {
                const
                {
                    ok,
                    message
                } = await createuser(userForm.value);
                // Mensaje en error
                if (!ok) alert(message)
                else
                {
                    alert("Creado correctamente");
                    router.push("/daybook/empty-entry");
                }
            }
        };
    }

}
</script>

<style scoped>
body {
    background-color:red !important;
}

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
    text-align: center;
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
