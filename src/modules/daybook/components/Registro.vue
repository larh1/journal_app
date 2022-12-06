<template>
<div class="registro-container pointer mb-3 p-2" @click="ShowEntry">
    <!-- titulo -->
    <div class="registro-titulo d-flex">
        <span class="text-success fw-bold fs-6">{{day}}</span>
        <span class="mx-1 fs-6">{{month}}</span>
        <span class="mx-1 fs-5 fw-light">{{yearDay}}</span>
    </div>
    <div class="registro-description"> {{shortText}}</div>
</div>
</template>

<script>
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
export default
{
    name: "registro-component",
    props:
    {
        entry:
        {
            type: Object,
            required: true,
        }
    },
    computed:
    {
        shortText()
        {
            return (this.entry.text.length >= 130) ?
                this.entry.text.substring(0, 130) + "..." :
                this.entry.text;
        },
        day()
        {
            const date = new Date(this.entry.date);
            return date.getDate();
        },
        month()
        {
            const date = new Date(this.entry.date);
            return months[date.getMonth()];
        },
        yearDay()
        {
            const date = new Date(this.entry.date);
            return `${date.getFullYear()},${days[date.getDay()]}`;
        }
    },
    methods:
    {
        /**
         * Mostrar el registro seleccionado
         */
        ShowEntry()
        {
            this.$router.push(
            {
                name: "entry",
                params:
                {
                    id: this.entry.id
                }
            })
        }
    }
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

.registro-description {
    font-size: 14px;
}
</style>
