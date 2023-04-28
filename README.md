## Frontend Laravel and Vuejs

### Componente Dashboard con Laravel, Inertia y TailwindCSS

Este es un componente de dashboard para una aplicación web construida con Laravel, Inertia (Vuejs) y TailwindCSS. Incluye navbar, sidebar o menú y contenido, así como un diseño de inicio de sesión, registro, vista de reportes y datable enfocados únicamente en el frontend y algunos subcomnentes que todavia estan en desarrollo.

### Instalación

1. Clona el repositorio en tu máquina local:

    ```
    git clone https://github.com/wdavidcalsin968/frontend-laravel-and-vuejs.git
    ```

2. Navega hasta el directorio del proyecto:

    ```
    cd frontend-laravel-and-vuejs
    ```

3. Instala las dependencias:

    ```
    composer install
    ```

    and

    ```
    npm install
    ```

4. Crea un nuevo archivo .env:

    ```
    cp .env.example .env
    ```

5. Genera una nueva clave de aplicación:

    ```
    php artisan key:generate
    ```

6. Crea una nueva base de datos y actualiza el archivo .env con las credenciales de tu base de datos:

    ```
    DB_DATABASE=frontend-dashboard
    DB_USERNAME=root
    DB_PASSWORD=
    ```

7. Ejecuta las migraciones de la base de datos:

    ```
    php artisan migrate:fresh --seed
    ```

8. Inicia el servidor de desarrollo:

    - Primer Terminal
        ```
        npm run dev
        ```
    - Segundo Terminal

        ```
        php artisan serve
        ```

### Usage

Una vez que el servidor de desarrollo esté funcionando, puedes acceder a la aplicación en http://localhost:8000.

-   Credenciales para acceder:
    -   email: unasistemas@gmail.com
    -   contraseña: password

### Participantes

-   Milton Jarata Quispe
-   Willian David Calsin Borda
-   Yury Brayan Huaquilla Torres
-   Brad Tyler Sanchez Mamani

### License

Este proyecto está bajo la licencia MIT.
