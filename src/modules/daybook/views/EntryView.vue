<template>
<div class="entry-title d-flex justify-content-between p-2">
    <!-- titulo -->
    <div>
        <span class="text-success fw-bold fs-2">15</span>
        <span class="mx-1 fs-2">Nov</span>
        <span class="mx-1 fs-3 fw-light">2022, Lunes</span>
    </div>
    <div>
        <!-- Borrar -->
        <button class="btn btn-danger btn-sm"> Borrar
            <i class="fas fa-trash-alt"></i>
        </button>
        <!-- Subir Foto -->
        <button class="btn btn-primary btn-sm ms-1"> Subir foto
            <i class="fas fa-upload"></i>
        </button>
    </div>
</div>
<hr>
<!-- Descripcion -->
<div class="d-flex flex-column px-3 h-75">
    <textarea class="form-control1" placeholder="Cuéntame algo"></textarea>
</div>
<!-- Fab -->
<Fab icon="fa-save"/>
<!-- imagen -->
<img class="img-thumbnail " src="https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="alt-picture">
</template>

<script>
import
{
    defineAsyncComponent
}
from '@vue/runtime-core'
export default
{
    name: "entry-view",
    components:
    {
        Fab: defineAsyncComponent(() => import("../components/Fab.vue"))
    }
}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 16px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: .2);
}
</style>
