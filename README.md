
# MELI-TEST API 

para comenzar clonar el proyecto y ejecutar:
primero
```bash
npm install
```
luego
```bash
npm start
```

# Rutas

acceda a la siguiente ruta para optener el detalle de un producto
##### /api/items/:productId

parametros:

##### :productId => id del producto a consultar

respuesta:
``` 

  "author": {
    "name": "MELI",
    "lastname": "TEST"
  },
  "item": {
    "id": "MLA730906646",
    "title": "Vinilo Autoadhesivo Impreso Toy Story Catalogo De Imagenes",
    "price": {
      "currency": "ARS",
      "amount": 330,
      "decimals": 75
    },
    "picture": "http://http2.mlstatic.com/D_828728-MLA27545108086_062018-O.jpg",
    "condition": "new",
    "free_shipping": false,
    "sold_quantity": 5,
    "description": "vinilo autoadhesivo impreso toy story catalogo de imagenes para impresión de murales pared y puertas precio por 0.50 X 0.50\nconsulta tus medidas especiales"
  }
}
```

<br>
<br>

Para buscar productos por nombre use

##### /api/items?q=:query

parametros:

##### :q => criterio de busqueda

respuesta

```
{
  "author": {
    "name": "MELI",
    "lastname": "TEST"
  },
  "categories": [
    "MLA117185",
	...
  ],
  "items": [
    {
      "id": "MLA730906646",
      "title": "Vinilo Autoadhesivo Impreso Toy Story Catalogo De Imagenes",
      "price": {
        "currency": "ARS",
        "amount": 330,
        "decimals": 75
      },
      "picture": "http://http2.mlstatic.com/D_630123-MLA27545084921_062018-O.jpg",
      "condition": "new",
      "free_shipping": false
    },
    {...},
    {...},
    {...}
  ]
}
```
