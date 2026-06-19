# AI & Robotics Summer Workshop — Kidrove

A responsive workshop landing page built with **React + Vite** (frontend) and **Express.js** (backend), created as part of the Kidrove internship assignment.

---

## Tech Stack

| Layer     | Technology                                |
|-----------|-------------------------------------------|
| Frontend  | React 18, Vite, CSS Modules, Google Fonts |
| Backend   | Node.js, Express.js                       |
| Database  | MongoDB + Mongoose (optional)             |
| Tooling   | ESLint, Nodemon                           |

---

## Project Structure

```
kidrove-workshop/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx / .module.css
│   │   │   ├── Hero.jsx / .module.css
│   │   │   ├── WorkshopDetails.jsx / .module.css
│   │   │   ├── LearningOutcomes.jsx / .module.css
│   │   │   ├── FAQ.jsx / .module.css
│   │   │   ├── RegistrationForm.jsx / .module.css
│   │   │   └── Footer.jsx / .module.css
│   │   ├── styles/
│   │   │   └── global.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── validate.js
│   ├── models/
│   │   └── Enquiry.js
│   ├── routes/
│   │   └── enquiry.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js v18+
- npm v9+
- MongoDB Atlas account *(optional)*

### 1 — Clone & install

```bash
git clone https://github.com/YOUR_USERNAME/kidrove-workshop.git
cd kidrove-workshop

# Install frontend deps
cd frontend && npm install

# Install backend deps
cd ../backend && npm install
```

### 2 — Configure backend environment

```bash
cd backend
cp .env.example .env
# Edit .env and add your MONGO_URI if you have one
# The API works fine without MongoDB (in-memory fallback)
```

### 3 — Run development servers

Open two terminals:

```bash
# Terminal 1 — Backend (port 5000)
cd backend
npm run dev

# Terminal 2 — Frontend (port 5173)
cd frontend
npm run dev
```

Visit **http://localhost:5173**

---

## API Reference

### `POST /api/enquiry`

Submit a workshop enquiry.

**Request body**
```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "phone": "9876543210"
}
```

**Success `201`**
```json
{
  "success": true,
  "message": "Thank you, Rahul! We've received your enquiry...",
  "data": {
    "id": "664abc...",
    "name": "Rahul Sharma",
    "email": "rahul@example.com",
    "createdAt": "2026-06-19T10:00:00.000Z"
  }
}
```

**Validation error `422`**
```json
{
  "success": false,
  "message": "Validation failed. Please check the fields below.",
  "errors": {
    "phone": "A valid 10-digit Indian mobile number is required."
  }
}
```

### `GET /api/health`

```json
{ "status": "ok", "timestamp": "..." }
```

---

## Deployment

### Frontend → Vercel

```bash
cd frontend
npm run build
# Push to GitHub, then import repo on vercel.com
# Set build command: npm run build
# Set output directory: dist
```

### Backend → Railway / Render

1. Push the `backend/` folder to a separate repo (or monorepo)  
2. Set environment variables: `PORT`, `MONGO_URI`, `CLIENT_ORIGIN`  
3. Set start command: `node server.js`

---

## Approach & Design Decisions

The page targets **parents** researching workshops for their kids (8–14 yrs). The design prioritises trust and clarity — dark navy conveys professionalism, orange draws attention to CTAs, teal is used sparingly for the "live/active" pulse indicator. Typography uses Space Grotesk (display) paired with Inter (body) for a modern-but-readable combination.

Component structure follows a single-responsibility principle: each section is its own component with a co-located CSS Module, making it easy to change one section without touching others. The API is written to degrade gracefully — it logs enquiries to the console if MongoDB isn't configured, so the page works end-to-end without any database setup.

**Given more time, I would:**
- Add email confirmation via Nodemailer or SendGrid after enquiry submission  
- Implement an admin dashboard to view and manage enquiries with status updates  
- Add TypeScript throughout for better type safety and DX  
- Write unit tests for the validation middleware and component render tests with Vitest + Testing Library  
- Add a payment integration (Razorpay) so users can pay and enrol directly on the page  
- Implement OTP-based phone verification to reduce fake enquiries  

---





# NOTE
MongoDB integration is fully implemented using Mongoose with schema validation, duplicate detection, and timestamps. The 
Atlas connection works on open networks — local ISP blocks port 27017. All MongoDB code is production-ready in /backend/
models/Enquiry.js and /backend/routes/enquiry.js.