<template>
<div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button class="btn btn-success" @click="Cambiar">success</button>
    <button class="btn btn-primary" @click="Cambiar">primary</button>
    <button class="btn btn-danger" @click="Cambiar">danger</button>
</div>
</template>

<script>
export default
{
    methods:
    {
        Cambiar()
        {
            this.$router.push(
            {
                name: "empty-entry"
            });
        },
    },
};
</script>
