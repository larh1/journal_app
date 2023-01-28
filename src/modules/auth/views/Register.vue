<template>
<div class="main">
    <input type="checkbox" id="chk" aria-hidden="true">
    <div class="signup">
        <form>
            <label for="chk" aria-hidden="true">Registrar</label>
            <input type="email" name="email" placeholder="Email" required>
            <input type="email" name="email" placeholder="Usuario" required>
            <input type="password" name="pswd" placeholder="Contraseña" required>
            <button>Crear cuenta</button>
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
export default
{
    name: "auth-register",
}
</script>

<style scoped>
.ya-cuenta{
    color:#573b8a;
    margin-left: auto;
    margin-right: auto;
    font-size: 12px;
    text-align: center;
}
</style>
