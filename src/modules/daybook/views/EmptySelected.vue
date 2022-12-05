<template>
<!-- Mensaje Empty -->
<div class="empty-container d-flex justify-content-center">
    <h1 class="align-self-center">Seleccione un registro</h1>
</div>
<!-- FAB -->
<Fab />
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
    }
}
</script>

<style lang="scss" scoped>
.empty-container {
    height: 100%;
}
</style>
