<template>
<div class="entry-list_container">
    <!-- Caja de busqueda -->
    <div class="py-2 px-2">
        <input type="text" class="form-control" v-model="term" placeholder="Buscar...">
    </div>
    <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" @click="$router.push({name:'entry',params:{id:'new'}})">
            <i class="fas fa-plus"></i> Nuevo
        </button>
    </div>

    <div class="scroll-list">
        <h4 :key="r.id" v-for="r in entriesByTerm">
            <Registro :entry="r" />
        </h4>
    </div>
</div>
</template>

<script>
import
{
    defineAsyncComponent
}
from 'vue'
import
{
    mapGetters
}
from 'vuex';
export default
{
    name: "registro-component",
    components:
    {
        Registro: defineAsyncComponent(() => import("./Registro.vue"))
    },
    computed:
    {
        // Modulo, nombre getter
        ...mapGetters("journal", ["getEntriesByTerm"]),
        entriesByTerm()
        {
            // Buscar los
            return this.getEntriesByTerm(this.term);
        }
    },
    data()
    {
        return {
            term: ""
        }
    },
    mounted()
    {}
}
</script>

<style lang="scss" scoped>
.entry-list_container {
    border-right: 1px solid gray;
    height: calc(100vh - 50px);
}

.scroll-list {
    overflow: scroll;
    height: calc(100vh - 120px);
}
</style>
