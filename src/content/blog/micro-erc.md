---
title: 'Micro ERS'
description: 'Por que especificar cambios pequeños'
pubDate: '2024-01-29'
heroImage: '/blog-placeholder-3.jpg'
tags: []
---

## "Es una pavada"

Siempre que una solicitud de un cambio encierra estas palabras podemos encontrarnos en problemas, pero... ¿por qué?.
Porque no siempre lo que se pide es lo que se espera y esto es la raíz de muchos problemas y conflictos en el equipo de desarrollo. Contar con una Especificación de Requerimientos de Software es lo ideal pero no siempre podemos contar con uno ya que muchos de los cambios futuros serán por tareas de mantenimiento.

Las aplicaciones se tienen que adaptar a las necesidades del negocio y esto implica que en un futuro la aplicación tenga que cambiar (voy a preparar un artículo sobre destinar tiempo a limpiar código). Es cuando pasan estas cosas como por ejemplo tenemos que cambiar una funcionalidad o agregar cosas nuevas.

Llegados a este punto lo que se puede hacer es contar con algún sistema de gestión de tareas como puede ser jira y agregar una historia que contenga un cuerpo como el siguiente:

``` text
CLIENTE - MODIFICACIÓN
---
necesitamos implementar un cambio en esta aplicación por que el cliente lo quiere
😄, espero que no te resulte muy complicado...
descripción detallada de lo que se quiere hacer ...
descripción de qué datos usar de la base de datos o cómo plantear el diseño ...
detalles de qué es lo que se espera que realice la aplicación ...

Saludos el PM.
```

luego se le asigna la tarea a el usuario y puede que por medio de slack se genere un notificación.

Tambien podria ser una notificacion de algún error o bug:
```text
CLIENTE - BUG
---
el cliente nos informa del siguiente bug:
descripción de donde se encuentra el bug ...
descripción de cómo replicar el bug ...
Descripción del usuario que está usando la aplicación (permisos con los que cuenta, nivel de acceso, etc ́).

Saludos el PM.
```

De esta manera el programador puede tener más detalles de qué es lo que se tiene que realizar y no queda en un mensaje de whatsapp o gmail.

En caso de que su equipo no tenga un gestor de proyectos puede enviar un email con este formato y usar el mismo título y asunto para poder filtrar luego.

```text
Titulo: CLIENTE - BUG / MODIFICACION - DESCRIPCION
Asunto: Modificación / Bug - descripción un poco más detallada.
Body: mensaje detallando lo que se requiere.
```

Esto también funciona para cuando venga la visita del auditor ayuda a tener pruebas de que se realizan "mantenimiento" a los clientes.

Esto no quita que se realicen ERS propias para proyectos ya que son la base para cerrar contratos con los clientes.

Sin nada mas Saludos.


