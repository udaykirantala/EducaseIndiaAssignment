# EducaseIndiaAssignment
# PopX React Assignment

## Project Overview

This project is a React JS implementation of the PopX mobile application design provided in Adobe XD. The application consists of four screens:

* Welcome Page
* Register Page
* Sign In Page
* Account Settings Page

The UI is designed to match the given mobile design as closely as possible while keeping the mobile interface centered on the webpage.

---

## Live Demo

Hosted Link: https://your-vercel-link.vercel.app

## GitHub Repository

Repository Link: https://github.com/your-username/popx-assignment

---

## Tech Stack

* React JS
* React Router DOM
* Material UI (MUI)
* CSS3
* Vite

---

## Features

### Welcome Page

* Displays application introduction.
* Navigation to Register page.
* Navigation to Sign In page.

### Register Page

* User registration form.
* Form validation for required fields.
* Email format validation.
* Password length validation.
* Agency selection using radio buttons.
* Redirects to Account Settings page after successful registration.

### Sign In Page

* Login form with validation.
* Email validation.
* Password validation.
* Redirects to Account Settings page after successful login.

### Account Settings Page

* Displays user profile information.
* Profile image with camera icon.
* User description section.
* Mobile-app style layout.

---

## Project Structure

src/

├── components/

│ └── MobileContainer/

├── pages/

│ ├── WelcomePage/

│ ├── Register/

│ ├── Signin/

│ └── AccountSettings/

├── Routes/

│ └── RoutesLayout.jsx

├── assets/

├── App.jsx

└── main.jsx

---

## Routing

The application uses React Router DOM for navigation.

Routes:

* `/` → Welcome Page
* `/register` → Register Page
* `/signin` → Sign In Page
* `/account-settings` → Account Settings Page

---

## How the Project Was Built

1. Created the project using Vite and React.
2. Installed React Router DOM for page navigation.
3. Installed Material UI for form components.
4. Created reusable MobileContainer component to maintain mobile layout.
5. Developed each page separately based on the provided design.
6. Added form validations using React state management.
7. Implemented page navigation using React Router.
8. Styled the application using CSS to achieve a pixel-perfect mobile UI.
9. Tested responsiveness and navigation flow.
10. Deployed the application on Vercel.

---

## Installation and Setup

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd popx-assignment
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Author

Uday Kiran

Frontend Developer | React JS Developer
