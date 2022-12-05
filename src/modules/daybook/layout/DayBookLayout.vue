<template>
<Navbar />
<div class="d-flex">
    <!-- Sidebar -->
    <div class="col-4">
        <ListaRegistros />
    </div>
    <!-- Content -->
    <div class="col">
        <router-view />
    </div>
</div>
</template>

<script>
import
{
    defineAsyncComponent
}
from 'vue'
export default
{
    components:
    {
        Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
        ListaRegistros: defineAsyncComponent(() => import("../components/ListaRegistros.vue")),
    }
}
</script>
