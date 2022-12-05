<template>
<div class="entry-list_container">
    <!-- Caja de busqueda -->
    <div class="py-2 px-2">
        <input type="text" class="form-control" placeholder="Buscar...">
    </div>
    <div class="scroll-list">
        <h4 :key="i" v-for="(r,i) in 100"> <Registro/></h4>
    </div>
</div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default
{
    name: "registro-component",
    components:
    {
        Registro:defineAsyncComponent(()=>import("./Registro.vue"))
    }
}
</script>

<style lang="scss" scoped>

.entry-list_container{
    border-right:1px solid gray;
    height: calc(100vh - 50px);
}
.scroll-list
{
    overflow: scroll;
    height: calc(100vh - 120px);
}
</style>
