<template>
<div class="main">
    <input type="checkbox" id="chk" aria-hidden="true">
    <div class="register">
        <form>
            <label>Ingresar1</label>
        </form>
    </div>
    <div class="login">
        <form>
            <label>Ingresar</label>
            <input type="email" name="email" placeholder="Email" required="">
            <input type="password" name="pswd" placeholder="Password" required="">
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
export default
{
    name: "auth-login",
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
