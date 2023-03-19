<div align="center">

  <img src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png" alt="logo" width="200" height="auto" />

  <h1>Gmail WebApp with REACT.JS!</h1>

  <p>
A website like Gmail which is created using ReactJS, the React-Router is implemented for the mail page, React-Redux has been used as a state management tool. The firebase is used for the authentication and firebase firestore is used as a database. React-Hook-Form is used for compose and Material-UI icons have been used.
  </p>

<!-- Badges -->

<a href="https://clo-c911f.web.app/" target="_blank">![](https://img.shields.io/website-up-down-green-red/http/monip.org.svg)</a>
![](https://img.shields.io/badge/Maintained-Yes-indigo)
![](https://img.shields.io/github/forks/Priyanshu88/Gmail-WebApp.svg)
![](https://img.shields.io/github/stars/Priyanshu88/Gmail-WebApp.svg)
![](https://img.shields.io/github/issues/Priyanshu88/Gmail-WebApp)
![](https://img.shields.io/github/last-commit/Priyanshu88/Gmail-WebApp)

<h4>
    <a href="https://clo-c911f.web.app/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/Priyanshu88/Gmail-WebApp/blob/master/README.md">Documentation</a>
  <span> · </span>
    <a href="https://github.com/Priyanshu88/Gmail-WebApp/issues">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/Priyanshu88/Gmail-WebApp/issues">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->

## :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Screenshots](#camera-screenshots)
  - [Tech Stack](#space_invader-tech-stack)
  - [Firebase Config](#key-firebase-config)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Installation](#gear-installation)
  - [Run Locally](#running-run-locally)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Contact](#handshake-contact)

<!-- About the Project -->

## :star2: About the Project

<!-- Screenshots -->

### :camera: Screenshots

- Application Home page & Demo

<div align="center">
<a href="https://clo-c911f.web.app/" target="_blank"><img  src='./demo/ezgif-2-b23fb77da9.gif' alt='image'/></a>
</div>



https://user-images.githubusercontent.com/86107841/225989243-f717d3bf-441d-4478-82f9-0f07de0b6584.mp4



<br />

- Mail Details Page

<div align="center">
<a href="https://clo-c911f.web.app/" target="_blank"><img  src='https://user-images.githubusercontent.com/86107841/225974937-3ef17be5-51c6-4809-a687-cc61e1ba8b20.png' alt='image' width='800'/></a>
</div>

<br />

- Mails and Compose Page

<div align="center">
<a href="https://clo-c911f.web.app/" target="_blank"><img  src='https://user-images.githubusercontent.com/86107841/225977430-98f6f217-a0f7-412c-902e-8f851fbaf775.png' alt='image' width='800'/></a>
</div>

## <a href="https://clo-c911f.web.app/" target="_blank">LIVE DEMO 💥</a>

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/for-you.svg)
![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://react.dev/">React.js</a></li>
    <li><a href="https://reactrouter.com/en/main">React Router</a></li>
    <li><a href="https://react-redux.js.org/">React Redux</a></li>
    <li><a href="https://mui.com/material-ui/getting-started/overview/">Material UI</a></li>
  </ul>
</details>

<details>
  <summary>Database and Hosting</summary>
  <ul>
    <li><a href="https://firebase.google.com/">Firebase</a></li>
  </ul>
</details>

<br />

<table>
    <tr>
        <td>
<a href="#"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="" width="30" height="30" /></a>
        </td>
                        <td>
<a href="#"><img src="https://user-images.githubusercontent.com/86107841/225979374-f10f15a3-db41-4eaa-812d-8a6509049424.png" alt="Google" width="30" height="30" /></a>
        </td>
                        <td>
<a href="#"><img src="https://user-images.githubusercontent.com/86107841/225979643-e8b42859-441f-4d5b-a2f0-f9f1a3b2af0d.jpg" alt="" width="30" height="30" /></a>
        </td>
          <td>
<a href="#"><img src="https://user-images.githubusercontent.com/86107841/225980120-628b73b6-5c90-48d7-bd5d-92858e781710.png" alt="" width="30" height="30" /></a>
        </td>
         <td>
<a href="#"><img src="https://user-images.githubusercontent.com/86107841/225980482-cfd6e246-6684-4e3a-a067-a59875d6c6a7.jpg" alt="" width="30" height="30" /></a>
        </td>                                          
    </tr>
</table>

## :toolbox: Getting Started

### :bangbang: Prerequisites

- Sign up for Firebase account <a href='https://console.firebase.google.com/'>HERE</a>
- Install Node JS in your computer <a href='https://nodejs.org/en/'>HERE</a>

<!-- Env Variables -->

### :key: Firebase Config

To run this project, you will need to add the following config of your project to firebase file

`apiKey`

`authDomain`

`projectId`

`storageBucket`

`NEXTAUTH_URL`

`messagingSenderId`

`appId`

`measurementId`

### :gear: Installation

Install my-project with npm

```bash
npx create-react-app my-project --template redux
```

```
cd my-project
```

Install dependencies

### :test_tube: Install Firebase and Material UI

#### Install Firebase

Install Firebase and copy the config of your project and setup locally.

```bash
npm install firebase
```
#### Install Material UI

Install material ui icons
```bash
npm install @mui/material @emotion/react @emotion/styled
```

<!-- #### Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.
<br>

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
``` -->

<!-- #### Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your `./styles/globals.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
``` -->

Install dependencies

<a href="https://github.com/Priyanshu88/Gmail-WebApp/blob/master/package.json" target="_blank">🔶 Other Dependency Info</a>

<!-- Run Locally -->

### :running: Run Locally

Clone the project

```bash
git clone https://github.com/Priyanshu88/Gmail-WebApp.git
```

```bash
cd Gmail-WebApp
```

Install dependencies
This is a [React.js](https://react.dev/) project bootstrapped with [`create-react-app`](https://github.com/facebook/create-react-app).

```bash
npm install
```

Start the server
First, run the development server:

```bash
npm run start
```

This is a [Reac.js](https://react.dev/) project bootstrapped with [`create-react-app`](https://github.com/facebook/create-react-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app.js`. The page auto-updates as you edit the file.

<!-- [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`. -->

<!-- The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
 -->
### Learn More

This project uses [`react-hook-form`](https://react-hook-form.com/) to compose the mails.

<!-- Deployment -->

### :triangular_flag_on_post: Deployment

To deploy this project run

##### Commands
```bash
firebase login
```
```bash
firebase init
```
```bash
npm run build
```
```bash
firebase deploy
```
<!-- 
##### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Netlify Platform](https://app.netlify.com/) from the creators of Next.js.

Check out our [Netlify deployment documentation](https://docs.netlify.com/) for more details. -->

<!-- ##### Backend (server)
 -->
<!-- ##### Deploy on Railway

The easiest way to deploy your server is to use the [Railway Platform](https://railway.app/) from the creators of Next.js.

Check out our [Railway deployment documentation](https://docs.railway.app/deploy/deployments) for more details. -->

## :handshake: Contact

Your Name - [@twitter_handle](https://twitter.com/Priyans75729802?s=09) - 2040020@sliet.ac.in

Project Link: [https://github.com/Priyanshu88/Gmail-WebApp.git](https://github.com/Priyanshu88/Gmail-WebApp.git)

<hr />
<br />

<div align="center">Don't forget to leave a star ⭐️</div>
