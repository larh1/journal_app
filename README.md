<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/42705449/224506434-2d70f513-57f1-4b72-91b8-ccff5a399315.png" alt="Journal App">
</p>

Journal App es una aplicación web para el registro de notas.

## Características

- Registro, búsqueda, actualización, eliminación
- Almacenamiento en Firebase
- Búsqueda por contenido
- Registro de usuarios
- Pruebas unitarias

## Demostración

Crear una nueva cuenta para ingresar, colocando un correo electrónico, nombre de usuario y contraseña.

<p align="center">
  <img width="650" src="https://user-images.githubusercontent.com/42705449/224504386-0f58a3db-0ff7-49fd-bb1e-0df1bd3a2d73.png" alt="Registro">
</p>

Para acceder, se coloca el correo y la contraseña ingresadas anteriormente.

<p align="center">
  <img width="650" src="https://user-images.githubusercontent.com/42705449/224504415-1e9be290-40ec-4eb8-9033-732d3a8cc19c.png" alt="Ingreso">
</p>

Al ingresar, se muestran todas las notas creadas, la fecha y una breve descripción de cada una de ellas.

<p align="center">
  <img width="650" src="https://user-images.githubusercontent.com/42705449/224504464-77282b94-6d95-4fbb-84e8-a00139a46bc4.png" alt="Inicio">
</p>

Para crear una nueva nota, se selecciona la opción _Nuevo_, se ingresa el contenido de la nota y se presiona el boton flotante _Guardar_.

Se puede realizar búsqueda de las notas, ingresando una parte del contenido. Las que coincidan se mostrarán en el panel lateral izquierdo.

<p align="center">
  <img width="650" src="https://user-images.githubusercontent.com/42705449/224504730-e2693795-e280-42c0-93dd-be5c3b5abb84.png" alt="Buúsqueda">
</p>

## Firebase

Para almacenar los datos se hace uso de _Real Time Database_ de Firebase. Para la configuración se siguen los siguientes pasos, teniendo una cuenta previamente creada.

1. Crear un [proyecto nuevo](https://console.firebase.google.com)
2. Seleccionar el proyecto creado
3. Mover a la sección _Real Time Database_ y crear una nueva base de datos
4. Importar [datos de ejemplo](https://raw.githubusercontent.com/larh1/journal_app/main/data.json)
5. Cambiar las reglas de acceso a la base de datos, quedando de la siguiente manera

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

**Nota:** Esto se hace para simplificar la demostración. Se deben aplicar reglas para producción.

6. Guardar la _URL de referencia_ para agregarla al proyecto
7. Permitir registro de usuarios

   En la sección de _Compilación > Authentication > Sign-in Methods_ habilitar el proveedor **Correo electrónico/contraseña**

8. Obtener Api Key
   En el menú _Descripción general > Configuración del proyecto > General_ guardar la **Clave de API Web** para la autenticación de los usuarios

## Instalación

1. Clonar repositorio

```
git clone https://github.com/larh1/journal_app.git
```

2. Mover al directorio creado

```
cd journal_app
```

3. Instalar dependencias

```
yarn install
```

4. Cambiar la _Base_URL_ de axios para los registros

```javascript
// src/api/journalApi.js

const journalApi = axios.create({
  baseURL: "URL_DE_REFERENCIA",
});
```

5. Cambiar la _Base_URL_ de axios para la autenticación

```javascript
// src/api/authAPI.js

const authApi = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
  params: {
    key: "CLAVE_DE_API_WEB",
  },
});
```

6. Compilar archivos necesarios y lanzar servidor

```
yarn serve
```

8. Ejecutar pruebas unitarias

```
yarn test:unit
```

## Tecnologías usadas

- Autenticación y DB: [Firebase](https://firebase.google.com/)
- [Bootstrap](https://getbootstrap.com/)
- Iconos: [FontAwesome](https://fontawesome.com/)
- UI: [Vue 3](https://vuejs.org/)
