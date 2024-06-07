# Welcome to Promptopia! 🎉✨

## Introduction 🚀

Welcome to Promptopia, a delightful and whimsical web application crafted with **Next.js**, **MongoDB**, and **Tailwind CSS**. Dive into a world of creativity where you can share intriguing prompt messages with fellow users, all while enjoying the seamless integration of modern technologies.

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000" alt="Next.js" />
    <img src="https://img.shields.io/badge/-Mongodb-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

## Features 🌟

### **Google Sign-In:** 📝 Sign in effortlessly using your Google account.
- Authentication and User Profiles: Secure logins and personalized experiences.
- Users can sign in using their Google accounts.
- New users are automatically registered and their profiles are created upon their first sign-in.
- User sessions are managed using NextAuth for seamless authentication.

### **Share Prompts:** 📣 Share your most captivating prompt messages with the community.
- Authenticated users can create new prompts.
- Users can provide prompt content and associated tags.
- Prompts are associated with the user's profile and displayed in the feed.

### **Interactive Interface:** 💻 Immerse yourself in an interactive and engaging user experience.
- Users can explore creative prompts submitted by the community.
- Each prompt displays the username of the creator, the prompt content, and associated tags.
- Users can click on tags to filter prompts by specific topics.

### **MongoDB Integration:** 🗃️ MongoDB stores prompt messages and user information reliably.
- Users can edit prompts they have created.
- Edits include updating the prompt content and tags.
- Users can also delete prompts they have created.
- Deletion removes the prompt from the feed and their profile, as well as from the database MongoDB.

### **User Profiles:** 👥 Users have personalized profile pages.
- Profiles display the user's username, email, and a profile image.
- Profiles showcase prompts created by the user.
- Users can edit and delete their prompts directly from their profile.

### **Tailwind CSS Styling:** 🎨 Tailwind CSS provides sleek and modern styling for the UI.
- The navigation bar provides easy access to different sections of the application.
- It includes links to the home page, create prompt page, and user profile page.
- Navigation adapts for both desktop and mobile devices.

## Technologies Used 👩‍💻
- React for building interactive user interfaces.
- Next.js for server-side rendering and routing.
- NextAuth for handling user authentication.
- MongoDB for storing user profiles and prompts.
- CSS styles and components for responsive and visually appealing design.

## Getting Started 🛠️

To embark on your Promptopia journey locally, follow these simple steps:

1. Clone the repository: `git clone https://github.com/priyyasi/project_promptopia.git`
2. Navigate to the project directory: `cd promptopia`
3. Install dependencies: `npm install`
4. Create a `.env.local` file in the root directory and add the following environment variables:

```plaintext
GOOGLE_ID=your-google-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
MONGODB_URI=your-mongodb-uri
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=
```

5. Start the development server: `npm run dev`
6. Open your browser and navigate to `http://localhost:3000`

## Prompts Page 📑

![prompt-1](https://github.com/priyyasi/project_promptopia/assets/67642788/94992908-c0fb-459b-acff-1aa7178b5751)

![prompt-2](https://github.com/priyyasi/project_promptopia/assets/67642788/0b1cf4e0-8acd-40f3-9f0a-7631b4c61554)

![prompt-3](https://github.com/priyyasi/project_promptopia/assets/67642788/d6ebc627-7873-42cc-8f29-30124b7d9505)

![prompt-4](https://github.com/priyyasi/project_promptopia/assets/67642788/ffd123b4-9111-4e0d-aac8-a481ae46b379)

![prompt-5](https://github.com/priyyasi/project_promptopia/assets/67642788/cbc403a6-31e6-4175-b203-e694a1512a20)

![prompt-6](https://github.com/priyyasi/project_promptopia/assets/67642788/6ec15f10-3ad5-4d8a-bbe6-65887a93cb7e)

## Credits 🙌

A heartfelt thank you to [Adrian Hajdin](https://github.com/adrianhajdin) for inspiring and guiding us in the creation of this fantastic and fun project!

## Support and Contribution 🤝

Have questions, feedback, or ideas? Don't hesitate to open an issue or reach out to the project maintainers. Contributions are always welcome!

Let's join forces to make Promptopia an even more delightful place for creativity and fun! 🌈🎨

---

*Promptopia - Where creativity meets fun!* 🌟🎈
