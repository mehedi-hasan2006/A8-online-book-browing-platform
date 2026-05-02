# 📚 eBookBorrow — Online Book Browsing Platform

> **Your digital sanctuary for discovering, borrowing, and losing yourself in thousands of handpicked books. Read anywhere, anytime.**

🌐 **Live Demo:** [online-book-browing-platform.vercel.app](https://online-book-browing-platform.vercel.app/)

---

## ✨ Features

- 🔍 **Discover** — Browse a curated library of thousands of titles across 200+ genres and categories
- 📚 **Borrow** — One-click borrowing with no fees and no queues
- 📱 **Read Anywhere** — Seamlessly read on any device
- 🔄 **Auto-Return** — Books are automatically returned when you're done
- 🔐 **User Accounts** — Register, log in, and manage your profile
- 🧭 **Book Search** — Search and filter books by category or keyword
- 💌 **Testimonial** — Stay updated about users feedback

---

## 📸 Preview

| Home Page | All Books | Book Detail |
|-----------|-----------|-------------|
| Featured books, hero section, testimonials | Browse & search by category | Individual book info & borrow action |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | [Next.js](https://nextjs.org/) (React) |
| **Deployment** | [Vercel](https://vercel.com/) |
| **Styling** |  Tailwind CSS |
| **Image Hosting** | [imgbb](https://imgbb.com/) |
| **Database** | [mongodb](https://www.mongodb.com/products/platform/atlas-database) |
| **UI Component** | [Hero UI](https://heroui.com/) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mehedi-hasan2006/A8-online-book-browing-platform.git

# Navigate into the project folder
cd online-book-browsing-platform

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
├── public/              # Static assets (logo, images)
├── app/ or pages/       # Next.js routing
│   ├── page.jsx         # Home page
│   ├── all-books/       # Book listing & search
│   ├── book/[id]/       # Individual book detail
│   ├── my-profile/      # User profile
│   ├── login/           # Login page
│   ├── signup/          # Registration page
│   └── faqs/            # FAQ page
├── components/          # Reusable UI components
└── README.md
```

---

## 📊 Platform Stats

| Metric | Value |
|--------|-------|
| 📖 Books Available | 12,000+ |
| 🎭 Genres & Categories | 200+ |
| 😊 Happy Readers | 50,000+ |
| ⚡ Uptime | 99.9% |

---

## 🗺️ Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, featured books, how it works, testimonials |
| `/all-books` | Browse all books with search and category filter |
| `/book/:id` | Individual book detail page |
| `/my-profile` | User profile page (authenticated) |
| `/login` | User login |
| `/signup` | User registration |


---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

Crafted with ❤️ for readers.

> © 2026 eBookBorrow — *Read anywhere, anytime.*
