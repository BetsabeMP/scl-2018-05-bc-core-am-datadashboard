# Data Dashboard

## Introducción

:point_right: [Wikipedia](https://goo.gl/P7PF4y) nos dice que un dashboard puede ser un resumen
gráfico de varias piezas de información importante, generalmente utilizadas para dar
una visión general de una empresa o de un servicio.

Para transformar datos en **información** necesitamos procesarlos y entenderlos.
Una manera muy sencilla de entender y analizar data es creando *visualizaciones*. Las
empresas líderes de hoy generan visualizaciones dinámicas de su data
que les permite entender mejor su negocio y tomar decisiones apropiadas.

## Preámbulo

La principal medida de progreso de una estudiante en Laboratoria es su avance
completando los proyectos de la [Ruta de Aprendizaje](https://docs.google.com/spreadsheets/d/1AoXQjZnZ5MTPwJPNEGDyvn5vksiOUoPr932TjAldTE4/edit#gid=536983970)
y su desempeño en función a la [Rúbrica de Niveles Esperados](https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQy1waRpQ-16sn7VogiDTy-Fz5e7OSZSYUCiHC_bkLAKYewr4L8pWJ_BG210PeULe-TjLScNQQT_x/pubhtml).
Sin embargo, para completar estos proyectos las estudiantes acceden a contenidos
de aprendizaje (lecturas, videos, ejercicios y quizzes) en un sistema que
llamamos LMS (Learning Management System). El LMS acumula data sobre quién
leyó qué, qué ejercicios se han completado, los resultados de los quizzes, etc.

A pesar de que la data de progreso del LMS (ej. lecturas leídas, ejercicios completados,
nota en quizzes, etc.) no impacta directamente la evaluación de una estudiante,
sí es una pieza de información relevante que las TMs quisieran visualizar
para tener un mejor entendimiento de cómo va cada estudiante en su proceso de aprendizaje.

## Definición del producto

Los principales usuarios del producto son las Training Managers (TMs) de Laboratoria,
las cuales van a poder *ver* , *usar* y *analizar* la mayor cantidad de datos posibles
respecto al progreso de las estudiantes para apoyarlas en su aprendizaje.

Los datos más relevantes que el usuario quiere ver según las preguntas correspondientes
que hicimos, son el progreso de las alumnas en cada bootcamp, la información simple
y detallada del progreso en cada contenido (unidades) del LMS.

Van poder revisar constantemente el dashboard, ya que la información actualizada siempre estará
disponible, fácil de leer y de usar.

## Diseño

**Data Dashboard** fue diseñada para que el cliente tenga un acceso fácil,
con información clara y relevante de los datos que quiera obtener, también la mayor parte se basó
en el diseño actual del LMS con los colores que distinguen a Laboratoria,
ya que según los resultados de la entrevista, el diseño sería más familiar y agradable a la vista de las TMs.

Se construyo el diseño creando un sketch de la solución (usando lápiz y papel), luego
creamos el diseño de la interfaz de usuario que representaría el ideal de la solución y continuamos
con la implementación hasta el final.

Observando la siguiente evolución desde el inicio del proyecto hasta el resultado final.

##### Prototipo

![Prototipo](https://github.com/NatalyVerdugoNogue/scl-2018-05-bc-core-am-datadashboard/raw/master/src/img/prototipo.png)

##### Interfaz de usuario

![captura pantalla interfaz](https://github.com/NatalyVerdugoNogue/scl-2018-05-bc-core-am-datadashboard/raw/master/src/img/capturaTabla.png)

## Datos

El objetivo del producto es obtener los datos de completitud de cada alumna, los que se pueden ver en la siguiente tabla:

![captura pantalla tabla](https://github.com/NatalyVerdugoNogue/scl-2018-05-bc-core-am-datadashboard/raw/master/src/img/tablaFinal.png)

Donde se puede ver en la parte superior el nombre de la alumna, seguido de el porcentaje de completitud total del bootcamp.

Ademas se muestra una tabla con la información dividida por las unidades del curso, en las que cada una muestra el avance total por unidad y por el tipo de trabajo.

Se detallan tipo Read, Practice y Quiz siendo cada ítem lo siguiente:

Completado: trabajo realizado por la alumna.

Duración: extensión completa del trabajo.

Porcentaje: porción ejecutada por la alumna.


## Guía de instalación

### Git

Git es un "sistema de control de versiones" usado por muchos programadores - es un sistema
que registra los cambios en los archivos a través del tiempo de forma tal que puedas
acceder a versiones específicas cuando lo desees. Es muy similar a la opción de "registrar cambios"
en Microsoft Word, pero mucho más poderoso.

#### Instalar Git

##### Windows

Puedes descargar Git de [git-scm.com][3]. Puedes hacer clic en "Next" para todos los pasos
excepto en uno; en el quinto paso titulado "Adjusting your PATH environment",
elije "Run Git and associated Unix tools from the Windows command-line" (la última opción).
Aparte de eso, los valores por defecto funcionarán bien. "Checkout Windows-style,
commit Unix-style line endings" también está bien.

[3]: https://git-scm.com/

##### MacOS

Descarga Git de [git-scm.com][3] y sigue las instrucciones.

##### Linux

Si no lo tienes ya instalado, git debería estar disponible a través del administrador de paquetes,
prueba con:

   sudo apt install git
   sudo yum install git

## Dependencias

### GitHub

#### Conectar

[Ingresa](https://github.com/) a tu cuenta en GitHub o registrarse.

#### Fork

Haz tu propio [fork](https://help.github.com/articles/fork-a-repo/)
del siguiente [repositorio](https://github.com/NatalyVerdugoNogue/scl-2018-05-bc-core-am-datadashboard).

#### Clonar

[Clona](https://help.github.com/articles/cloning-a-repository/)
tu fork a tu computadora (copia local).

#### Instalar

Instala las dependencias del proyecto con el comando `npm
install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
incluye [npm](https://docs.npmjs.com/)).