# Azpire Designs Website

This repository contains the source code for the **[Azpire Designs](https://azpiredesign.com)** website.  
It is being built entirely with **Next.js**, combining both the **frontend website** and **admin backend** within a single monorepo-style structure.

---

## 🚀 Project Overview

The **Azpire Designs Website** will serve as both a public-facing portfolio site and an admin control panel for managing website content.

### ✨ Features

- **Frontend UI:**  
  User-facing website showcasing the Azpire Designs portfolio, services, and contact forms.

- **Admin Dashboard:**  
  Accessible via `/admin/*` routes, allowing admins to manage projects, collect and view form submissions, and modify website content dynamically.

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | Next.js (App Router) |
| **Backend UI / Functionality** | Next.js (same project) |
| **Database** | Supabase (PostgreSQL) |
| **ORM** | Drizzle ORM |
| **Storage** | Supabase Storage |
| **Authentication** | Supabase Auth + NextAuth.js |
| **Styling** | Tailwind CSS & ShadCN UI |

---

## ⚙️ Getting Started

First, clone the repository and install dependencies:

```bash
npm install

# Start Project
npm run dev

# Build Project
npm run build
