<template>
<Navbar />
<div class="d-flex">
    <!-- Sidebar -->
    <div class="col-4">
        <Registro/>
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
        Registro: defineAsyncComponent(() => import("../components/Registro.vue")),
    }
}
</script>
