<template>
<div class="entry-title d-flex justify-content-between p-2">
    <!-- titulo -->
    <div>
        <span class="text-success fw-bold fs-2">{{day}}</span>
        <span class="mx-1 fs-2">{{month}}</span>
        <span class="mx-1 fs-3 fw-light">{{year}}</span>
    </div>
    <div>
        <!-- Borrar -->
        <button v-if="entry.id" class="btn btn-danger btn-sm" @click="onDelete"> Borrar
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
    <textarea v-model="entry.text" class="form-control1" placeholder="Cuéntame algo"></textarea>
</div>
<!-- Fab -->
<Fab icon="fa-save" @click2="saveEntry" />
<!-- imagen -->
<img class="img-thumbnail " src="https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="alt-picture">
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
    mapGetters
}
from 'vuex';
import getDateYear from "../helpers/getDateYear";
export default
{
    name: "entry-view",
    components:
    {
        Fab: defineAsyncComponent(() => import("../components/Fab.vue"))
    },
    props:
    {
        // Id del Entry
        id:
        {
            type: String,
            required: true,
        }
    },
    data()
    {
        return {
            entry:
            {}
        }
    },
    computed:
    {
        ...mapGetters("journal", ["getEntryById"]),
        day()
        {
            return getDateYear(this.entry.date).day
        },
        month()
        {
            return getDateYear(this.entry.date).month
        },
        year()
        {
            return getDateYear(this.entry.date).year
        },
    },
    watch:
    {
        // Obtener el nuevo registro al cambiar el Id (current,old)
        id()
        {
            this.LoadEntry();
        }
    },
    created()
    {
        // Obtener Id seleccionado y cargar registro
        this.LoadEntry();
    },
    methods:
    {
        /*
         * IMPORTANTE: Las Actions se llaman como Metodos
         */
        ...mapActions("journal", ["updateEntry"]),
        ...mapActions("journal", ["createEntry"]),
        ...mapActions("journal", ["deleteEntry"]),
        /**
         * Obtener el registro del Id actual
         */
        LoadEntry()
        {
            if (this.id == "new")
            {
                this.entry = {
                    text: "",
                    date: new Date().getTime(),
                }
            }
            else
            {
                const entry = this.getEntryById(this.id);
                if (!entry) this.$router.push(
                {
                    name: "empty-entry"
                });
                else this.entry = entry;
            }
        },

        /**
         * Guardar o actualizar el registro
         */
        async saveEntry()
        {
            if (this.entry.id)
            {
                // Actualizar
                await this.updateEntry(this.entry);
            }
            else
            {
                // Registrar
                const id = await this.createEntry(this.entry);
                this.$router.push(
                {
                    name: "entry",
                    params:
                    {
                        id
                    }
                });

            }
        },

        /**
         * Borrar el registro actual
         */
        async onDelete()
        {
            await this.deleteEntry(this.entry)
            this.$router.push(
            {
                name: "empty-entry"
            })
        }
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
