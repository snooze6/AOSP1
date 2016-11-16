# Boletín 1

Este war incluirá todos los ejercicios del primer boletín usando para todos ellos soap y javascript.

La página tiene un bug gracioso al cambiar de divisa muchas veces el precio por redondeo tiende a la baja.

No usa cookies para hacer más rápido el debuggeo, por ello al recargar la página estando logueado se pierde el login

## [1.1] Calculadora

|Ítem   |Puntuación   | Completado  |
|---|---|---|
|Creación del servicio web que implementa las operaciones de calculadora   |2   |100%   |
|Creación del servicio web que implementa las operaciones del análisis de texto   |3   |100%   |
|Implementación del cliente de la calculadora   |2   |100%   |
|Implementación del cliente del análisis de texto   | 2  | 100%  |
|Encapsulación de las operaciones de los servicios en clases  | 2  | 100%  |

- ~~Operaciones calculdora básicas~~
- ~~Operaciones calculadora avanzada~~
- ~~Operaciones análisis de texto:~~
    - ~~Número de palabras~~
    - ~~Número de caracteres del texto~~
    - ~~Frecuencia determinada palabra~~
    - ~~Palabra con mayor frecuencia~~
    
## [1.2] Monedas

|Ítem   |Puntuación   | Completado  |
|---|---|---|
|Creación del servicio de conversión de monedas   |2   |100%   |
|Creación del cliente del servicio de conversión de monedas   |1.5   | 100%  |
|Creación del cliente de cálculo de caracteres   | 1.5  | 100%  |
|Inclusión del servicio de conversión en la tienda virtual   |2   |100%   |
|Inclusión de la utilidad de comprobación de caracteres en la tienda virtual   |2   |100%   |
|Implementación del cliente Java de prueba   |1   |?%   |

- ~~Conversión~~
    - ~~Entrada: Conjunto de números~~
    - ~~Salida: Conjunto de números convertidos~~
    - ~~Si la moneda no se maneja -> Excepción~~
        - (Descomentar /web/app/controllers/Ctrl_Currency línea 29)
            - Esto usa el Tenge como divisa, el cual no está soportado, peta y se pilla la excepción
    - ~~En la cesta y en los productos~~
- ~~Usar el servicio que cuenta el número de caracteres de un texto~~
    - ~~En la descripción de los objetos (Limitado a 200)~~
    
En este apartado y dado que no he reutilizado la práctica de DAWA de la tienda me voy a tomar la libertad de efectuar 2 pequeños cambios en el enunciado: dichos cambios no suponen un despropósito en el aprendizaje de SOAP sin embargo me facilitarán la implementación de estas operaciones dado que la tienda será creada de 0. Los cambios son:

- El conversor de monedas solo estará disponible para los productos dado que no habrá cesta
- El contador de letras no estará en la descripción sino en la contraseña para asegurarse de la seguridad

## [1.3] Tienda

|Ítem   |Puntuación   | Completado  |
|---|---|---|
|Creación del servicio de validación en la tienda virtual   |1.25   | 100%  |
|Creación del servicio de consulta del catálogo de productos   |1.75   |100%   |
|Creación del servicio de consulta de las características de un producto a través de un id   |1.75   |100%   |
|Creación de un servicio web de consulta de productos de determinado autor   |1.75   |100%   |
|Creación del cliente Java que pruebe todo   |1.25   | ?%   |
|Creación del cliente que acceda al catálogo de productos y al validador de usuario   |2.25   |100%   |
|Creación del cliente que acceda a las características en función del id   |1.25   |100%   |
|Creación del cliente que acceda a las características en función del autor   |1.25   |100%   |
|Acceso a base de datos realizado enteramente a través de servicios web   |1.50   |100%   |

Como la tienda se realizará de 0, todo el trabajo que se haga tendrá como objetivo demostrar la pericia del alumno en SOAP y no en Diseño de Aplicaciones Web, esto es, se omitirán muchos de los flujos de trabajo de una tienda ya el saber implementarlos ya se ha demostrado en asignaturas anteriores.

Así pues se omitirán las siguientes partes de la tienda:

- Carrito
- Pago
- Facturas

Servicios:

- ~~Validar nombre/contraseña~~
- ~~Ver catálogo de productos~~
- ~~Ver características de productos en función de ID~~
- ~~Ver productos de determinado autor~~

Clientes:

- ~~Se creará un cliente Java que pruebe todos los servicios~~
    - (Hay un cliente web que prueba todos los servicios)
- ~~Desde la tienda se accederá al catálogo a través de los servicios web~~
- ~~El usuario deberá validarse antes de acceder al catálogo~~

## [1.4] Opcional (Manejo de mensajes)

|Ítem   |Puntuación   | Completado  |
|---|---|---|
|Visualización de los mensajes SOAP de invocación y respuesta   | 2  |100%   |
|Manejador SOAP asociado al cliente que envía el mensaje   | 4  |100%   |
|Manejador SOAP asociado al proveedor que recibe el mensaje   |1.5   |100%   |
|Implementación sobre los clientes/proveedores del ejercicio 1.1   |1.5   |100%   |
|Implementación sobre los clientes/proveedores del ejercicio 1.3   |1   |100%   |

- ~~Visualización de mensajes SOAP:~~
    - ~~Instalar SOAPui~~
    - ~~Testear los servicios 1.1 y 1.2 creando 2 mensajes SOAP para cada uno de los servicios web~~
    - ~~Captura de pantalla que muestra tanto los mensajes SOAP como las respuestas de las operaciones invocadas~~
- ~~<span style="color:red"> Información adicional del mensaje SOAP </span>~~
    - ~~El cliente debe incluir en el mensaje SOAP un texto que identifique el nombre del cliente que solicita la invocación del mensaje~~
    - ~~El proveedor deberá mostrar por pantalla el identificador del cliente que envía el mensaje~~
- ~~Servicios web~~
    - ~~Los servicios web que incluirán los manejadores SOAP serán los de los ejercicios 1.1 y 1.3~~
    
# soapUI


