# JWT-Practica
Carolina Edith Gómez Muñoz

-- ¿En que consiste el proyecto?

Consiste en comprender y realizar la actividad de la página de doEnv, este es un blog que ofrece un tutorial en dos partes sobre cómo crear un sistema de inicio de sesión completo utilizando Node.js, Vue.js, una API REST y JWT (JSON Web Tokens).

En este se explica cómo configurar el backend utilizando Node.js y Express. Se muestra cómo crear y configurar las rutas para el registro de usuarios, inicio de sesión, verificación de tokens y protección de rutas. También se explica cómo utilizar JWT para generar tokens de acceso y autenticar las solicitudes del usuario.

-- ¿En que consiste la librería UUID?
 
 UUID es una librería que se utiliza para generar identificadores únicos en la programación. Estos identificadores son únicos a nivel mundial y se usan para asignar identificadores únicos a entidades en sistemas distribuidos.
 
 -- ¿Por qué es tan bueno usar UUID en vez de un id autonumérico?
 
 Una buena razón para usar UUID en lugar de un ID autonumérico es que los UUID son únicos a nivel mundial, lo que evita las colisiones de ID y permite su generación en sistemas distribuidos sin depender de una base de datos específica.

-- ¿ Qué es el parámetro de Salt Rounds de la librería bcryptjs?

El parámetro "Salt Rounds" en la librería bcryptjs se refiere a la cantidad de veces que se aplica una función de hashing llamada "bcrypt" al generar un hash de contraseña. El valor de "Salt Rounds" indica la complejidad computacional del proceso de hashing y afecta la resistencia a ataques de fuerza bruta.

Un mayor número de salt rounds resulta en un hash más seguro pero también aumenta el tiempo necesario para generar el hash. Es importante encontrar un equilibrio entre seguridad y rendimiento al seleccionar el valor adecuado para "Salt Rounds".
