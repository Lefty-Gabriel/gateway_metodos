
# Prueba de Microservicios NestJS (TCP, Redis)

Los Endpoints disponibles


- `GET /tcp` → Prueba el microservicio TCP
- `GET /redis` → Prueba el microservicio Redis

---

## Requisitos

- Node.js y npm instalados.
- Docker para Redis y NATS.
- NestJS CLI (`npm i -g @nestjs/cli`).
- Todos los microservicios deben estar en carpetas separadas: `/gateway`, `/tcp-ms`, `/redis-ms`.

---

## Levantar Redis y NATS con Docker

```bash
docker run -d --name redis-micro -p 6379:6379 redis
```

---

## Iniciar servicios

En cada terminal, desde sus respectivas carpetas:

```bash
# Gateway
cd gateway
npm install
npm run start

# Microservicio TCP
cd tcp-ms
npm install
npm run start

# Microservicio Redis
cd redis-ms
npm install
npm run start


## Los Probar endpoints

Desde Postman:

- http://localhost:3000/tcp
- http://localhost:3000/redis

---

##Respuestas esperadas

- `/tcp` → `"Hello from TCP microservice"`
- `/redis` → `"Hello from Redis microservice"`

