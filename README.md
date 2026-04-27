# 🐉 The Dragon News

> **Journalism Without Fear or Favour**

A modern, full-stack news portal built with **Next.js 15**, featuring real-time authentication, social login, and a clean responsive UI.

🔗 **Live Site:** [dragon-news-next-app.vercel.app](https://dragon-news-next-app.vercel.app)
📦 **Repository:** [github.com/tanzid-48/dragon-news-next-app](https://github.com/tanzid-48/dragon-news-next-app)

---

## 📸 Screenshots

| Home | News Details |
|------|-------------|
| ![Home](https://dragon-news-next-app.vercel.app/og-home.png) | ![Details](https://dragon-news-next-app.vercel.app/og-details.png) |

---

## ✨ Features

- 🔐 **Email & Password Authentication** (Register / Login)
- 🌐 **Social Login** — Google & GitHub via Better Auth
- 🔒 **Password Visibility Toggle** on all auth forms
- 📰 **News by Category** with dynamic routing
- 🧭 **Breaking News Ticker** on homepage
- 👤 **User Session Management** — live user info in Navbar
- 🔴 **Toast Notifications** via Sonner
- 📱 **Fully Responsive** layout
- 🗓️ **Live Date** display in header

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS + DaisyUI |
| Authentication | Better Auth |
| Database | MongoDB (via MongoDB Atlas) |
| Forms | React Hook Form |
| Notifications | Sonner |
| Icons | React Icons |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (main)/           # Main layout (Header, Navbar, BreakingNews)
│   │   ├── page.jsx      # Home page
│   │   ├── about/        # About page
│   │   ├── career/       # Career page
│   │   └── category/     # Dynamic category pages
│   ├── (auth)/           # Auth layout
│   │   ├── login/        # Login page
│   │   └── register/     # Register page
│   └── api/auth/         # Better Auth route handler
├── assets/               # Images (logo, avatars, q-zone, social icons)
├── components/           # Reusable components
│   ├── Navbar.jsx
│   ├── Header.jsx
│   ├── BreakingNews.jsx
│   ├── RightSidebar.jsx
│   └── NavLink.jsx
└── lib/
    ├── auth.js           # Better Auth server config
    └── auth-client.js    # Better Auth client config
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account
- Google OAuth credentials
- GitHub OAuth credentials

### Installation

```bash
# Clone the repository
git clone https://github.com/tanzid-48/dragon-news-next-app.git

# Navigate to project directory
cd dragon-news-next-app

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000

DRAGON_NEWS=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Authentication Setup

### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create OAuth 2.0 credentials
3. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
4. For production: `https://your-domain.vercel.app/api/auth/callback/google`

### GitHub OAuth
1. Go to GitHub → Settings → Developer Settings → OAuth Apps
2. Create a new OAuth App
3. Set callback URL: `http://localhost:3000/api/auth/callback/github`
4. For production: `https://your-domain.vercel.app/api/auth/callback/github`

> 💡 **Tip:** Create separate OAuth apps for development and production.

---

## 📦 Deployment (Vercel)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Add all environment variables in Vercel → Settings → Environment Variables
4. Update `BETTER_AUTH_URL` to your production URL
5. Update OAuth callback URLs to your production domain

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by <a href="https://github.com/tanzid-48">Tanzid</a></p>