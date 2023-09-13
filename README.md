# Cookies-ExpressJS
Repositorio para implmentar cookies en JS con NodeJS usando el Framework ExpressJS

## Tecnologias
* [npm v9.6.7](https://www.npmjs.com/)
* [NodeJS v18.17.1](https://nodejs.org/)
* [ExpressJS v4.0.4](https://expressjs.com/)
* [Nodemon v3.0.1](https://nodemon.io/)
* [Postman v10.17.7](https://www.postman.com/)

## Instalación

Después de clonar este repositorio ve al directorio raíz (donde se encuentra el proyecto) y corre el siguiente comando para instalar las dependencias:

```bash
npm install 
```

Una vez instalado todas las dependencias, hay que iniciar el servidor con el siguiente comando:

```bash
npm run run
```

* Nota: El servidor corre en el puerto 1992 y con el demonio de nodemon

## Pruebas

Las pruebas se realizan usando postman.

Primero, realizan una petición de autorización que generá un token para ser guardado en la cookie.

```bash
localhost:1992/auth
```
### Petición/Respuesta
![Captura de pantalla 2023-09-12 a la(s) 22 13 16](https://github.com/Chekode/Cookies-ExpressJS/assets/83797775/4d99e4a6-5b7c-4da4-a12c-47546976a017)

Segundo, revisan que se haya guardado la cookie.

![Captura de pantalla 2023-09-12 a la(s) 22 14 20](https://github.com/Chekode/Cookies-ExpressJS/assets/83797775/7b7507a3-42e4-472c-b9e2-c610e671f73d)

Tercero, como postman ya guarda automaticamente la cookie, solo hacen una petición GET para obtener la información de ese usuario autorizado, ese servicio se creo un middleware para obtener el token berificarlo y que exista en la cookie y así mostrar el envio y guardado de las cookies.

```bash
localhost:1992/user  
```
### Petición/Respuesta
![Captura de pantalla 2023-09-12 a la(s) 22 18 13](https://github.com/Chekode/Cookies-ExpressJS/assets/83797775/5b9c0609-ab33-4b73-8522-6d0bfad82e52)

Cuarto, en caso de que falle el servicio de /user se mandará "No autorizado", falla por que el token expiro o la cookie no fue guardada correctamente.

### Petición/Respuesta
![Captura de pantalla 2023-09-12 a la(s) 22 19 17](https://github.com/Chekode/Cookies-ExpressJS/assets/83797775/cb0abcd5-0ada-4263-9d97-fe6a661adb1a)

 
## Author's
* Checo A.
