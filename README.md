# 🧾 Dynamic CRM Table

An interactive and customizable CRM-style data table built with **React** and **Vite**, styled using **CSS**, featuring powerful data handling and export functionalities.



## 📌 Features

### 🔍 Search
- Global search (search across all visible fields)
- *(Bonus available: Column-specific search)*

### 📊 Column Management
- Show/hide columns dynamically
- Lock (sticky) columns during horizontal scroll
- *(Bonus: Resizable columns, drag-to-reorder UI supported in roadmap)*

### 🎯 Field-Specific Behavior
- 📞 Phone: Click-to-call
- ✉️ Email: Opens mail client
- 🌐 Website: Opens in new tab
- 📅 Date: Inline editing with date picker
- ⬇️ Status: Editable dropdown
- ✅ Subscribed: Toggle switch

### 🧩 Row Interaction
- Click row to open detailed modal with all fields
- *(Optional: route-based navigation ready)*

### 📈 Export & Data
- Export visible rows to **CSV**
- Export filtered results to **Excel**
- 100+ rows generated using `faker.js`

### 💡 UI/UX
- Responsive for desktop/tablet
- Styled with plain CSS (Tailwind/CSS Modules optional)
- Scrollable table layout with sticky header & column support

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Styling**: CSS (extendable with Tailwind or Modules)
- **Data Generation**: [faker.js](https://fakerjs.dev/)
- **Export**: SheetJS (xlsx), FileSaver
- **State**: React Hooks

---

## 📁 Getting Started

### 1. Clone the repo

```bash
git clonehttps://github.com/vbhatt552/crm-table
cd crm-table
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run the app
```bash
npm run dev
```
Then open: http://localhost:5173

## 📸 Screenshots (Optional)
![Home Page]({3D898809-D229-4F9D-8D55-151D90FBDC03}.png)
![Customer Info](image.png)
## 📦 Deployment
This app is deployed on Vercel.
To deploy your own:

Push to GitHub

Connect repo to vercel.com

Vercel auto-builds and deploys

## ✅ To-Do / Improvements
Column-specific search

Pagination (client-side)

Dark mode toggle

Drag-and-drop column ordering

Route-based row detail page

## 📜 License
This project is open-source and free to use.

## 🙋‍♂️ Author
Made by Vipul Bhatt