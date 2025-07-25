
# 🧪 Pruebas de Microservicios NestJS (TCP, Redis, NATS)

Este proyecto consiste en un gateway que se comunica con 3 microservicios usando diferentes transportes: TCP, Redis y NATS. A continuación se detallan los pasos para probarlos.

---

## 🚀 Endpoints disponibles (Gateway)

Los siguientes endpoints están disponibles para probar los microservicios:

- `GET /tcp` → Prueba el microservicio TCP
- `GET /redis` → Prueba el microservicio Redis
- `GET /nats` → Prueba el microservicio NATS

---

## ✅ Requisitos previos

- Node.js y npm instalados.
- Docker para Redis y NATS.
- NestJS CLI (`npm i -g @nestjs/cli`).
- Todos los microservicios deben estar en carpetas separadas: `/gateway`, `/tcp-ms`, `/redis-ms`, `/nats-ms`.

---

## 🐳 Levantar Redis y NATS con Docker

```bash
docker run -d --name redis-micro -p 6379:6379 redis
docker run -d --name nats-micro -p 4222:4222 nats
```

---

## ▶️ Iniciar servicios

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

# Microservicio NATS
cd nats-ms
npm install
npm run start
```

---

## 🌐 Probar endpoints

Desde Postman o navegador, visitar:

- http://localhost:3000/tcp
- http://localhost:3000/redis
- http://localhost:3000/nats

---

## 🔚 Respuestas esperadas

- `/tcp` → `"Hello from TCP microservice"`
- `/redis` → `"Hello from Redis microservice"`
- `/nats` → `"Hello from NATS microservice"`

---

