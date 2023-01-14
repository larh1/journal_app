<template>
<button class="btn btn-primary" @click="saveEntry">
    <i class="fa fa-2x fas" :class="icon"></i>
</button>
</template>

<script>
export default
{
    name: "fab-button",
    props:
    {
        icon:
        {
            default: "fa-plus",
            type: String
        }
    },
    methods:
    {
        saveEntry()
        {
            this.$emit("click2")
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    border-radius: 100%;
    bottom: 20px;
    height: 80px;
    position: fixed;
    right: 20px;
    width: 80px;
}
</style>
