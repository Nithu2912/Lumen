# Lumen ✦
### Your calm AI companion 🍵

Lumen is a full-stack AI chat application built with the MERN stack. It features per-user authentication, persistent chat history, and a clean aesthetic UI — all containerized with Docker and backed by a CI pipeline.

---

## Features

- **JWT Authentication** — secure register, login and logout
- **Per-user chat history** — your conversations are saved and isolated per account
- **AI responses** — powered by OpenAI GPT-4o-mini
- **Persistent threads** — chat history survives across sessions and devices
- **Dockerized** — run the entire app with one command
- **CI Pipeline** — every push to main triggers an automated build via GitHub Actions

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Vite |
| Backend | Node.js, Express |
| Database | MongoDB Atlas |
| Auth | JWT (JSON Web Tokens) |
| AI | OpenAI API (GPT-4o-mini) |
| Containerization | Docker, docker-compose |
| CI/CD | GitHub Actions |

---

## Getting Started

### Prerequisites
- Docker and Docker Compose installed
- OpenAI API key
- MongoDB Atlas connection string

### Run locally with Docker

1. Clone the repo
```bash
git clone https://github.com/Nithu2912/Lumen.git
cd Lumen
```

2. Create a `.env` file inside the `Backend` folder:
```env
OPENAI_API_KEY=your_openai_api_key
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

3. Run with Docker Compose
```bash
docker-compose up --build
```

4. Open your browser
```
Frontend: http://localhost:5173
Backend:  http://localhost:8080
```

---

## Project Structure

```
Lumen/
├── Backend/
│   ├── middleware/       # JWT auth middleware
│   ├── models/           # MongoDB schemas (User, Thread)
│   ├── routes/           # API routes (auth, chat)
│   ├── utils/            # OpenAI API integration
│   ├── Dockerfile
│   └── server.js
├── Frontend/
│   ├── src/
│   │   ├── context/      # Auth context
│   │   ├── pages/        # Login, Register
│   │   └── components/   # Sidebar, ChatWindow, Chat
│   └── Dockerfile
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions CI pipeline
└── docker-compose.yml
```

---

## API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT token |

### Chat
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/chat` | Send a message (protected) |
| GET | `/api/thread` | Get all threads for current user (protected) |
| GET | `/api/thread/:id` | Get messages for a thread (protected) |
| DELETE | `/api/thread/:id` | Delete a thread (protected) |

---

## CI/CD Pipeline

Every push to `main` triggers a GitHub Actions workflow that:
- Installs backend dependencies
- Builds the frontend
- Confirms the app compiles successfully

[![CI](https://github.com/Nithu2912/Lumen/actions/workflows/deploy.yml/badge.svg)](https://github.com/Nithu2912/Lumen/actions/workflows/deploy.yml)

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | Your OpenAI API key |
| `MONGODB_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key for signing JWT tokens |

---

## Author

Built by **Nithu** — from curiosity about OpenAI to a full production-ready stack.

> *"One thing led to another and I ended up building a full stack AI chat app. No plan. No roadmap. Just curiosity."*

---

⭐ Star this repo if you found it helpful!
