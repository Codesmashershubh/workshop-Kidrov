
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
models/Enquiry.js and /backend/routes/enquiry.js
