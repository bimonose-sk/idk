# Math API con Node.js y Express

Esta aplicación es una API sencilla que realiza operaciones matemáticas básicas (suma, resta, multiplicación y división) usando Node.js y Express.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/bimonose-sk/idk.git
   ```
2. Instala las dependencias:
   ```bash
   cd idk
   npm install
   ```

## Uso

Inicia la aplicación:
```bash
node app.js
```

La API estará disponible en `http://localhost:3000`.

### Endpoints

- **Suma:**  
  `GET /sum?a=5&b=3`  
  Respuesta: `{"result":8}`

- **Resta:**  
  `GET /subtract?a=5&b=3`  
  Respuesta: `{"result":2}`

- **Multiplicación:**  
  `GET /multiply?a=5&b=3`  
  Respuesta: `{"result":15}`

- **División:**  
  `GET /divide?a=6&b=3`  
  Respuesta: `{"result":2}`  
  Si `b=0` devuelve error.

## Ejemplos con curl

```bash
curl "http://localhost:3000/sum?a=5&b=3"
curl "http://localhost:3000/subtract?a=5&b=3"
curl "http://localhost:3000/multiply?a=5&b=3"
curl "http://localhost:3000/divide?a=6&b=3"
```

## Autor

- [bimonose-sk](https://github.com/bimonose-sk)