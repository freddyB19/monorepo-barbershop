# Barbershop

La aplicación está hecha en **React** y la API en **Express**.

## Consideraciones
+ Para las validaciones de los formularios en React, se usó [React-Hook-Form](https://react-hook-form.com/)
+ Para el manejo de rutas se usó [React Router](https://reactrouter.com/)
+ Parte de los estilos estuvieron hechos en:
  + [React Bootstrap](https://react-bootstrap.netlify.app/)
  + [Bootstrap](https://getbootstrap.com/)
+ Para el formateo de fechas y tiempo, se usó la librería [Tempo](https://tempo.formkit.com/)
+ Para simular los datos del backend se usó [Faker](https://fakerjs.dev/)



## Ruta de las carpetas
```text
├───api/
│   ├───api/
│   │   ├───appointments/
│   │   │   ├───commands/
│   │   │   │   └───appointments/
│   │   │   │       └───commands.js
│   │   │   ├───db/
│   │   │   │   ├───dbAppointments.js
│   │   │   │   ├───dbEmployees.js
│   │   │   │   └───dbServices.js
│   │   │   ├───utils/
│   │   │   │   └───index.js
│   │   │   ├───appointments.js
│   │   │   ├───employees.js
│   │   │   ├───services.js
│   │   │   └───servicesAndEmployees.js
│   │   └───user/
│   │       ├───db.js
│   │       └───user.js
│   ├───restquest/
│   │   ├───appointments/
│   │   │   ├───deleteAppointment.http
│   │   │   ├───getAllAppointments.http
│   │   │   ├───getAllEmployees.http
│   │   │   ├───getAllServices.http
│   │   │   ├───getAppointment.http
│   │   │   ├───getBarbershop.http
│   │   │   ├───getEmployee.http
│   │   │   ├───getService.http
│   │   │   └───postAppointment.http
│   │   └───user/
│   │       ├───login.http
│   │       └───logout.http
│   ├───utils/
│   │   ├───cors/
│   │   │   └───index.js
│   │   ├───middlewares/
│   │   │   └───index.js
│   │   └───status/
│   │       └───index.js
│   ├───index.js
│   ├───package-lock.json
│   └───package.json
├───app/
│   ├───.swc/
│   ├───dist/
│   ├───node_modules/
│   ├───src/
│   │   ├───models/
│   │   │   ├───appointment/
│   │   │   │   ├───components/
│   │   │   │   │   ├───AppAppointment/
│   │   │   │   │   │   ├───components/
│   │   │   │   │   │   │   ├───ListAppointment.jsx
│   │   │   │   │   │   │   └───index.js
│   │   │   │   │   │   ├───AppAppointment.jsx
│   │   │   │   │   │   ├───Appointments.jsx
│   │   │   │   │   │   ├───DetailAppointment.jsx
│   │   │   │   │   │   └───index.js
│   │   │   │   │   ├───Form/
│   │   │   │   │   │   ├───FormAppointment.jsx
│   │   │   │   │   │   ├───fieldsForm.jsx
│   │   │   │   │   │   └───index.js
│   │   │   │   │   └───Modal/
│   │   │   │   │       ├───Modal.jsx
│   │   │   │   │       └───index.js
│   │   │   │   ├───hooks/
│   │   │   │   │   ├───UseAppointment.js
│   │   │   │   │   └───index.js
│   │   │   │   └───services/
│   │   │   │       ├───appointments.js
│   │   │   │       └───index.js
│   │   │   ├───auth/
│   │   │   │   ├───components/
│   │   │   │   │   ├───AppForm/
│   │   │   │   │   │   ├───AppLoginForm.jsx
│   │   │   │   │   │   └───index.js
│   │   │   │   │   └───Form/
│   │   │   │   │       ├───FormLogin.jsx
│   │   │   │   │       ├───fieldsForm.jsx
│   │   │   │   │       └───index.js
│   │   │   │   ├───hooks/
│   │   │   │   │   ├───UserHook.jsx
│   │   │   │   │   └───index.js
│   │   │   │   └───services/
│   │   │   │       ├───auth.js
│   │   │   │       └───index.js
│   │   │   └───core/
│   │   │       ├───components/
│   │   │       │   ├───AppRouter/
│   │   │       │   │   ├───AppRouter.jsx
│   │   │       │   │   ├───RouterLinks.jsx
│   │   │       │   │   └───index.js
│   │   │       │   ├───ErrorPages/
│   │   │       │   │   ├───Error404.jsx
│   │   │       │   │   └───index.js
│   │   │       │   ├───Home/
│   │   │       │   │   ├───Home.jsx
│   │   │       │   │   └───index.js
│   │   │       │   └───RoutesWithNotFound/
│   │   │       │       ├───RoutesWithNotFound.jsx
│   │   │       │       └───index.js
│   │   │       └───utils/
│   │   │           └───RouterPath/
│   │   │               ├───RouterPath.js
│   │   │               └───index.js
│   │   ├───reducers/
│   │   │   └───appointments/
│   │   │       ├───index.js
│   │   │       └───reducer.js
│   │   ├───utils/
│   │   │   ├───components/
│   │   │   │   └───notifications/
│   │   │   │       ├───Notifications.jsx
│   │   │   │       └───index.js
│   │   │   ├───index.js
│   │   │   └───tempo.js
│   │   ├───App.css
│   │   ├───App.jsx
│   │   ├───index.css
│   │   └───main.jsx
│   ├───.gitignore
│   ├───eslint.config.js
│   ├───index.html
│   ├───package-lock.json
│   ├───package.json
│   └───vite.config.js
├───.gitignore
├───package-lock.json
├───package.json

```
### Rest Client
En la carpeta 📁 **api/restquest/** podrá encontrar algunas pruebas hechas para la API.


## Aplicación
Para ejecutar la aplicación ejecute los siguientes comandos:
+ Para la app de React y la app de Express
```node
  npm run dev:app
  # y
  npm run dev:api
```

+ También tiene la opción de ejecutarlo de esta manera:
```node
  npm run dev
```
Para una mayor compresión revisar la configuración del archivo 🗒️ **package.json** del monorepo

### Login
La aplicación no cuenta con una sección para crear usuarios, por lo tanto, para acceder solo debes **ingresar un email <ins>(Un email con formato válido)</ins> y una contraseña <ins>(Mayor a 4 caracteres)</ins>**

#### Citas
+ Podrás crear citas:
    + Eligiendo el servicio que quieres y verificado su precio.
    + Con una persona en específico.
    + Eligiendo la fecha y el horario.
+ Podrás ver todas tus citas creadas.
+ Ver el detalle de una cita en particular.
+ Cancelar la citas que deseas.

Esto son algunos detalles que incluye, este proyecto.

   
