# LeadDesk Mini

Built for Digital Heroes Full Stack Development Training Task.

## Live Demo

### Frontend
https://YOUR-VERCEL-URL.vercel.app

### Admin
https://YOUR-VERCEL-URL.vercel.app/admin

### Backend
https://leaddesk-mini-production-d5ae.up.railway.app

---

# Test Credentials

Email:
admin@gmail.com

Password:
admin123

---

# Project Overview

LeadDesk Mini is a full stack lead management application.

It allows visitors to submit business enquiries through a public landing page.

The submitted leads are stored in a MySQL database.

The admin can securely log in, view all leads, search them, and update their status.

---

# Features

- Public Landing Page
- Lead Capture Form
- Client-side Validation
- Server-side Validation
- MySQL Database
- Admin Login (JWT Authentication)
- Admin Dashboard
- Search Leads
- Update Lead Status
- Responsive UI
- Railway Deployment
- Vercel Deployment

---

# Tech Stack

## Frontend

- React
- Vite
- HTML
- CSS
- JavaScript
- Axios

## Backend

- Node.js
- Express.js

## Database

- MySQL

## Authentication

- JWT
- bcrypt

## Deployment

- Vercel
- Railway

---

# Folder Structure

```
LeadDesk-Mini

client/
server/
docs/
screenshots/
```

---

# Database Design

## users

- id
- name
- email
- password

## leads

- id
- name
- email
- budget
- message
- status
- created_at

---

# Authentication

Admin authentication uses JSON Web Token (JWT).

Passwords are securely stored using bcrypt hashing.

Only authenticated users can access the Admin Dashboard.

---

# API Endpoints

## Leads

POST /api/leads

GET /api/leads

PUT /api/leads/:id

DELETE /api/leads/:id

---

## Authentication

POST /api/auth/login

---

# Installation

Clone the repository

```
git clone <repository-url>
```

Install frontend

```
cd client
npm install
npm run dev
```

Install backend

```
cd server
npm install
npm start
```

---

# Deployment

Frontend deployed on Vercel.

Backend deployed on Railway.

---

# Built For

Digital Heroes Full Stack Development Internship Assignment.

Built for Digital Heroes Training Task.
