# LeadDesk Mini

Built for Digital Heroes Full Stack Development Training Task.

---

# Live Demo

## Frontend

https://lead-desk-mini-one-delta.vercel.app

## Admin

https://lead-desk-mini-one-delta.vercel.app/admin

## Backend

https://leaddesk-mini-production-d5ae.up.railway.app

---

# Test Credentials

**Email**

admin@gmail.com

**Password**

admin123

---

# Project Overview

LeadDesk Mini is a Full Stack Lead Management Application built as part of the Digital Heroes Full Stack Development Training Task.

The application allows users to submit business enquiries through a public landing page. All submitted leads are stored in a MySQL database. The administrator can securely log in, view all leads, search leads, and update their status.

---

# Features

- Public Landing Page
- Responsive UI
- Lead Capture Form
- Client-side Validation
- Server-side Validation
- MySQL Database Integration
- Admin Login using JWT Authentication
- Secure Password Hashing using bcrypt
- Admin Dashboard
- View All Leads
- Search Leads
- Update Lead Status (New / Contacted / Closed)
- REST API
- Railway Backend Deployment
- Vercel Frontend Deployment

---

# Tech Stack

## Frontend

- React
- Vite
- HTML5
- CSS3
- JavaScript (ES6)
- Axios

## Backend

- Node.js
- Express.js

## Database

- MySQL

## Authentication

- JWT (JSON Web Token)
- bcrypt

## Deployment

- Vercel
- Railway

---

# Folder Structure

```text
LeadDesk-Mini/

├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── docs/
├── screenshots/
└── README.md
```

---

# Database Design

## users

| Column | Type |
|---------|------|
| id | INT |
| name | VARCHAR |
| email | VARCHAR |
| password | VARCHAR |

---

## leads

| Column | Type |
|---------|------|
| id | INT |
| name | VARCHAR |
| email | VARCHAR |
| budget | VARCHAR |
| message | TEXT |
| status | VARCHAR |
| created_at | TIMESTAMP |

---

# Authentication

The Admin Dashboard is protected using JWT Authentication.

- User logs in with email and password.
- Passwords are securely hashed using bcrypt.
- A JWT token is generated after successful login.
- Protected routes are accessible only with a valid token.

---

# API Endpoints

## Lead APIs

### Create Lead

```
POST /api/leads
```

### Get All Leads

```
GET /api/leads
```

### Update Lead Status

```
PUT /api/leads/:id
```

### Delete Lead

```
DELETE /api/leads/:id
```

---

## Authentication API

```
POST /api/auth/login
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/rutuharde99/LeadDesk-Mini.git
```

## Install Frontend

```bash
cd client
npm install
npm run dev
```

## Install Backend

```bash
cd server
npm install
npm start
```

---

# Deployment

## Frontend

Hosted on Vercel

## Backend

Hosted on Railway

---

# Author

**Rutika Harde**

B.Tech Information Technology

---

# Built For

Digital Heroes Full Stack Development Training Task.