## APLICACION WEB
Aplicación web desarrollada con React + Vite para visualizar información de buses. Consume una API REST construida en Java Spring Boot, conectada a una base de datos PostgreSQL y optimizada con Lombok para reducir la carga de código repetitivo.
### Tecnologías utilizadas
#### Frontend
* React + Vite
* React Router DOM
* Axios
* CSS modular
#### Backend
* Spring Boot
* Spring Data JPA
* PostgreSQL
* Lombok
### Base de datos: PostgreSQL
La aplicación se conecta a una base de datos relacional PostgreSQL, donde se almacena la información de los buses. Se utiliza Spring Data JPA para mapear las entidades
#### ⚙️ Configuración de conexión
```
spring.datasource.url=jdbc:postgresql://localhost:5432/civa_db
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

```
## Funcionalidades principales
* Listado de buses con paginación
* Vista detallada con alert informativo
* Consumo eficiente de API REST con Axios
