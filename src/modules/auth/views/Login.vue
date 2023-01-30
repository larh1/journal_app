<template>
<div class="main">
    <input type="checkbox" id="chk" aria-hidden="true">
    <div class="register">
        <form>
            <label>Ingresar1</label>
        </form>
    </div>
    <div class="login">
        <form @submit.prevent="onLogin">
            <label>Ingresar</label>
            <input type="email" v-model="user.email" name="email" placeholder="Email" required="">
            <input type="password" v-model="user.pasw" name="pswd" placeholder="Password" required="">
            <button>Ingresar</button>
        </form>
        <div class="" style="text-align:center">
            <router-link :to="{name:'register'}" class="ya-cuenta">
                No tengo una cuenta
            </router-link>
        </div>
    </div>

</div>
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
        const router=useRouter();
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
.ya-cuenta {
    color: #573b8a;
    margin-left: auto;
    margin-right: auto;
    font-size: 12px;
    text-align: center;
}
</style>
