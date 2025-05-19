# Prestige Motors – Full‑Stack Platform

> **Status **: early‑stage &ndash; front‑end prototype finished ✅, back‑end scaffolding about to start 🚧

Prestige Motors is evolving from a static luxury‑car showcase into a **production‑ready, data‑driven dealership platform** with secure user accounts, a PostgreSQL database, real‑time inventory, and CRM‑ready lead management.

---

## 🌟 Vision

*Deliver an elegant browsing experience for buyers and a turn‑key management console for staff ‑‑ all on an open‑source, zero‑license‑fee stack.*  
Key pillars:

1. **Blazing fast UX** – static‑site performance on the front, async FastAPI on the back.
2. **100 % Python server** – readability, rich ecosystem, first‑class async support.
3. **Cloud‑ready containers** – parity between dev laptops and Fly.io/Render deployments.
4. **Automated lead capture** – enquiries, newsletter, and SMS alerts out of the box.
5. **Extensible micro‑integrations** – VIN decode, spec autofill, currency FX, maps.

---

## ✨ Current Features (v0.1)

| Area | Implemented |
|------|-------------|
| Responsive front‑end (Home, Inventory, Vehicle Detail, Contact) | ✅ |
| Vite 5 build with HMR & code‑splitting | ✅ |
| Mock JSON inventory (`/js/data/cars.js`) rendered dynamically | ✅ |
| Hero carousel, testimonials slider, newsletter form | ✅ |
| Dark‑on‑light luxury design system (CSS variables, Grid/Flex) | ✅ |

---

## 🛣️ Roadmap Highlights (v0.2 → v1.0)

| Milestone | Core Deliverables |
|-----------|------------------|
| **Backend MVP** | FastAPI service, SQLModel models, Alembic migrations, `/ping` health route |
| **Auth & RBAC** | Email + JWT login, Google OAuth2, admin role guards |
| **Inventory API** | Vehicle CRUD, VIN decoder enrichment, Redis caching |
| **Lead Engine** | Enquiry endpoint → Celery task → SendGrid emails + Twilio SMS |
| **Ops** | CI (GitHub Actions), Docker Compose, Fly.io deploy, Prometheus metrics |
| **Admin Console** | Protected React/HTMX dashboard or open‑source tooling (TBD) |
| **PWA & SEO** | Lighthouse 90+ scores, image lazy‑load, sitemap.xml |

---

## 🧰 Tech Stack

| Layer | Tooling | Notes |
|-------|---------|-------|
| **Front‑end** | HTML 5 / CSS 3 / Vanilla JS + Vite | No heavy framework; could add HTMX or React later |
| **API** | **FastAPI (ASGI)**, Uvicorn | Python 3.12, auto‑generated OpenAPI docs |
| **ORM** | SQLModel / SQLAlchemy 2 | Typed models reused as Pydantic schemas |
| **Database** | PostgreSQL 15 | Free on Docker; managed on Fly Postgres |
| **Background Jobs** | Celery 5 + Redis | Asynchronous e‑mail/SMS, weekly digest |
| **Auth** | fastapi‑users (JWT, OAuth2) | Bcrypt hashing, refresh tokens |
| **External Integrations** | NHTSA, CarQuery, SendGrid, CurrencyLayer, Twilio | All offer generous free tiers |
| **DevOps** | Docker Compose, GitHub Actions, Fly.io | Zero‑cost hobby deployment |
| **Observability** | Prometheus + Grafana Cloud, Sentry | Basic metrics + error tracking |

---

## 🗂️ Project Structure (after back‑end bootstrap)

```
prestige‑motors/
├─ apps/
│  ├─ web/                  # Vite front‑end (already present)
│  └─ api/                  # FastAPI service (coming soon)
├─ infra/
│  ├─ docker/               # Dockerfile, docker‑compose.yml
│  └─ ci/                   # GitHub Action workflows
└─ docs/                    # ADRs, architecture diagrams
```

---

## 🚀 Quick Start (will be updated as back‑end lands)

```bash
# clone & install front‑end deps
pnpm install   # or npm ci
pnpm dev       # localhost:5173

# back‑end (following upcoming bootstrap)
make dev       # poetry + uvicorn hot‑reload
```

*Detailed instructions for Docker and Fly deploy will be added once the api/ folder exists.*

---

## ✅ Progress Checklist

### Completed ✔️

- [x] Project repo initialised (`prestige‑motors`)  
- [x] Vite front‑end scaffold & page templates  
- [x] Static assets, luxury theme, responsive layout  
- [x] Mock vehicle catalogue + dynamic rendering  

### In Progress 🚧

- [ ] Finalise back‑end folder skeleton (`apps/api`)  
- [ ] Docker Compose with Postgres + Redis  
- [ ] Poetry / Pipenv dependency management  
- [ ] `FastAPI` app factory & `settings` module  

### To Do 🗓️

- [ ] SQLModel models & Alembic migration **init**  
- [ ] `fastapi-users` JWT/OAuth2 auth routes  
- [ ] Vehicle CRUD endpoints + pagination/filtering  
- [ ] Celery worker for e‑mail/SMS  
- [ ] Integrate VIN decode & CarQuery APIs  
- [ ] Newsletter opt‑in + weekly digest task  
- [ ] CI pipeline (lint, tests, Docker build)  
- [ ] Fly.io deployment & domain cut‑over  
- [ ] Prometheus metrics + Grafana dashboard  
- [ ] Admin console (React / HTMX)  

---

## 🤝 Contributing

Pull requests are very welcome! Until v0.2 we are focusing on the core Python back‑end & deployment; please open an issue first if you plan a large change.

1. Fork ➡️ `git clone` ➡️ `git checkout -b feature/awesome`  
2. `ruff check . && mypy app` must pass  
3. `pytest -q` should stay green  
4. Submit PR – CI will run the same checks.

---

## 📜 License

This project is licensed under the **MIT License** – see [`LICENSE`](LICENSE) for details.

---

*Made with 🖤 & 🏎️  by the Prestige Motors dev team.*
