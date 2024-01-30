---
title: 'Micro ERS'
description: 'Por que especificar cambios pequeños'
pubDate: '2024-01-29'
heroImage: '/blog-placeholder-3.jpg'
tags: []
---

## "Es una pavada"

Siempre que una solicitud de un cambio encierre estas palabras podemos encontrarnos en problemas, pero... ¿por que?.
Por que no siempre lo que se pide es lo que se espera y este es la raiz de muchos problmas y conflictos en el equipo de desarrollo. Contar con una Especificacin de Requermientos de Software es lo ideal pero no siempre podemos contar con uno ya que muchos de los cambios futuros setan por tareas de mantenimiento.

Las aplicaciones se tienen que adaptar a las necesidades del negocio y esto implica que en un futuro la aplicacion tenga que cambiar (voy a preparar un articulo sobre destinar tiempo a limpiar codigo). Es cuando pasan estas cosas como por ejemplo tenemos que cambiar una funcionalidad o agregar cosas nuevas.

Llegados a este punto lo que se puede hacer es contar con algun sistema de gestion de tareas como puede ser jira y agregar una historia que contenga un cuerpo como el siguiente:

``` text
CLIENTE - MODIFICACION
---
necesitamos implementar un cambio en esta aplicacion por que el cliente lo quiere
😄, espero que no te resulte muy complicado...
descripcion detallada de lo que se quiere hacer ...
descripcion de que datos usar de la base de datos o como plantear el diseño ...
detalles de que es lo que se espera que realice la aplicacion ...

Saludos el PM.
```

luego se le asigna la tarea a el usuario y puede que por medio de slack se genere un notificacion.

Tambien podria ser una notificacion de algun error o bug:
```text
CLIENTE - BUG
---
el cliente nos informa del siguiente bug:
descripcion de donde se encuentra el bug ...
descripcion de como replicar el bug ...
descripcion del usuario que esta usando la aplicacion (permisos con los que cuenta, nivel de acceso, etc´).

saludos el PM.
```

De esta menera el programador puede tener mas detalles de que es lo que se tiene que realizar y no queda en un mensaje de whatsapp o gmail.

En caso de que su equipo no tenga un gestor de proyectos puede enviar un email con este formato y usar el mismo titulo y asunto para poder filtrarlo luego.

```text
Titulo: CLIENTE - BUG / MODIFICACION - DESCRIPCION
Asunto: Modificacion / Bug - descripcion un poco mas detallada.
Body: mensaje detallando lo que se requiere.
```

Esto tambien funciona para cuando venga la visita del auditor ayuda a tener pruebas de que se realizan "mantenimiento" a los clientes.

Esto no quita que se realizen ERS propias para proyectos ya que son la base para cerrar contratos con los clientes.

Sin nada mas Saludos.