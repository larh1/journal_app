<template>
<Navbar />
<template v-if="isLoading">
    <div class="container text-center mt-5">
        <p>Cargando</p>
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>
<template v-else>
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
</template>

<script>
import
{
    defineAsyncComponent
}
from 'vue'
import
{
    mapActions,
    mapState
}
from "vuex"
export default
{
    components:
    {
        Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
        ListaRegistros: defineAsyncComponent(() => import("../components/ListaRegistros.vue")),
    },
    computed:
    {
        ...mapState("journal", ["isLoading"])
    },
    created()
    {
        this.loadEntries();
    },
    methods:
    {
        ...mapActions("journal", ["loadEntries"]),
    }
}
</script>
