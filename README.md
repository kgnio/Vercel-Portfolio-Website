# Vercel Portfolio Website

![License](https://img.shields.io/github/license/kgnio/vercel-portfolio-website)
![Stars](https://img.shields.io/github/stars/kgnio/vercel-portfolio-website)
![Issues](https://img.shields.io/github/issues/kgnio/vercel-portfolio-website)
![Last Commit](https://img.shields.io/github/last-commit/kgnio/vercel-portfolio-website)

A **modern, responsive portfolio website** built with **Next.js** and deployed on **Vercel**.  
Perfect for showcasing your projects, skills, and personal brand.

---

## 🚀 Features

- ⚡ **Next.js 14** with App Router  
- 🎨 **TailwindCSS** styling with dark mode  
- 📱 Fully **responsive design**  
- 🧩 **Reusable components** (Navbar, Footer, Cards, etc.)  
- 🔍 SEO optimized with meta tags + Open Graph  
- 📬 **Contact form** with email API integration (optional)  
- 🌐 **One-click deploy** to Vercel  

---

## 📦 Installation

```bash
# Clone repo
git clone https://github.com/kgnio/vercel-portfolio-website.git
cd vercel-portfolio-website

# Install dependencies
npm install
```

---

## ⚙️ Configuration

- Update `app/config/site.ts` (or `config.js`) with your personal info:
```ts
export const siteConfig = {
  name: "Kagan Dev",
  title: "Full Stack Developer",
  description: "Building web apps & digital experiences",
  url: "https://yourdomain.com",
  github: "https://github.com/kgnio",
  linkedin: "https://linkedin.com/in/yourprofile"
}
```

- Add your projects inside `data/projects.ts`:
```ts
export const projects = [
  {
    title: "My Cool App",
    description: "A web app built with Next.js and MongoDB.",
    link: "https://myapp.vercel.app",
    github: "https://github.com/kgnio/myapp"
  }
]
```

---

## ▶️ Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio locally.

---

## 🚀 Deployment (Vercel)

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com).
3. Import your repo and click **Deploy**.  
That’s it! 🎉

---

## 📜 License

This project is licensed under the **MIT License**.

---

## ✨ Preview

👉 Add screenshots or a live demo link here once deployed.  
