<template>
<!-- Mensaje Empty -->
<div class="empty-container d-flex justify-content-center">
    <h1 class="align-self-center">Seleccione un registro</h1>
</div>
<!-- FAB -->
<Fab @click="newEntry" />
</template>

<script>
import
{
    defineAsyncComponent
}
from '@vue/runtime-core'
export default
{
    name: "empy-component",
    components:
    {
        Fab: defineAsyncComponent(() => import("../components/Fab.vue"))
    },
    methods:
    {
        newEntry()
        {
            // Cambiar a ruta 'new'
            this.$router.push(
            {
                name: "entry",
                params:
                {
                    id: "new"
                }
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.empty-container {
    height: 100%;
}
</style>
