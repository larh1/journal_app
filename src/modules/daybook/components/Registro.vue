<template>
<div class="registro-container pointer mb-3 p-2">
    <!-- titulo -->
    <div class="registro-titulo d-flex">
        <span class="text-success fw-bold fs-6">15</span>
        <span class="mx-1 fs-6">Nov</span>
        <span class="mx-1 fs-5 fw-light">2022, Lunes</span>
    </div>
    <div class="registro-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis et perspiciatis dicta hic perferendis reprehenderit, expedita, tempore quisquam illo doloremque officia, fuga laboriosam in optio. Blanditiis recusandae consequuntur at aliquam.
    </div>
</div>
</template>

<script>
export default
{
    name: "registro-component"
}
</script>

<style lang="scss" scoped>
.registro-container {
    border-bottom: 1px solid gray;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: gray, $amount: 45);
    }
}
.registro-description
{
    font-size: 14px;
}
</style>
