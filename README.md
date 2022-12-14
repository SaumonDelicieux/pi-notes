<h1 align="center">
    <img height="250" src="https://www.pngkey.com/png/full/435-4358013_icon-note-png-notes-icon.png">
</h1>

<p align="center">
	<a href="https://github.com/SaumonDelicieux/pi-notes/raw/master/LICENSE">
		<img src="https://img.shields.io/github/license/SaumonDelicieux/pi-notes">
	</a>
</p>

# 🗒📌 Pi'Notes

_Front end part of the peanut note._

| Stack used  | Utility                 |
| ----------- | ----------------------- |
| React       | Librarie (framework 🙄) |
| Typescript  |
| TailwindCSS | Framework CSS           |
| Redux       | Centralized state       |
| Toastify    | Notification inside App |

ViteJS ⚡️ : lightning-fast frontend build tool  
ESLint / Prettier for beautiful code 🥰

## How to clone/use the project :

```bash
git clone https://github.com/SaumonDelicieux/pi-notes.git
cd pi-notes
yarn i
yarn dev
```

_⚠️ Don't forget to set .env.local (copy/paste/edit .env.example)_

## Workflow (Git) :

feature/XXXXXX : pour un feature  
hotfix|fix/XXXXX : pour corriger un bug  
Release/X.X.X : pour staging vers master (prod)

## Utils

-   Github (Github CI)
-   Vercel (CD)
-   NoSQL (MongoDB Atlas)
-   [Trello](https://trello.com/invite/b/myE9AJBx/ATTI3e58a3f5c2450d1b5c5f1c5bc637b2144A18CF20/pi-notes)
-   🌍 [Production](https://pi-notes.vercel.app)
-   🌍 [Staging](https://pi-notes-git-staging-saumon-delicieux.vercel.app)
-   🌍 [Develop](https://pi-notes-git-develop-saumon-delicieux.vercel.app)

## Features

-   Pipeline CI/CD (Github CI & Vercel)
-   Swagger [API-Pi'Notes](https://api-pi-notes.herokuapp.com/docapi)
-   Authentication (login/register/reset password/confirm password)
-   Profile page (update information)
-   Create folder, sub-folder and assign note
-   Download note as PDF
-   Got Preview link (read only)
-   Checkout with Stripe (Be Premium) and can cancel sub
-   Search on all notes
-   Update state of note (junk/public/achived, delete)
-   WYSIWYG
-   Auto-save
-   Share note if Premium

## To do

-   [ ] Preview note
-   [ ] User shared permission

## :art: Prototype

<a target="_blank" href="https://www.figma.com/file/a7KIMzMch1pOuP1zjBYwdp/Desktop?node-id=0%3A1">Click me 👋</a>

# 🌳 Project structure

```shell
├── __tests__
├── .github                          # Github CI
├── src
│   ├── actions           # Redux
│   │   └── ...
│   ├── assets
│   │   ├── css
│   │   │   └── ...
│   │   ├── fonts
│   │   │   └── ...
│   │   └── images
│   │       └── ...
│   ├── components
│   │   └──  ...
│   ├── features          # Redux
│   │   └──  ...
│   ├── layouts
│   │   └──  ...
│   ├── pages
│   │   └──  ...
│   ├── routes
│   │   └──  ...
│   ├── types
│   │   └──  ...
│   └── helpers
│   │   └──  ...
│   ├── index.tsx
│   ├── App.tsx
│   └── store.tsx         # Redux
├── package.json
├── .env.example
├── .eslintrc.cjs
├── .prettierrc.cjs
├── postcss.config.js
├── LICENSE
├── vite.config.js
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock
```

## 👯‍♂️ Collaborators
  
Groupe 2  
  
-   Enzo CANDOTTI [@ecandotti](https://github.com/ecandotti)
-   Lamine ADEL [@A-Lamine](https://github.com/A-Lamine)
-   Walid MOKHTARI [@walidmokhtari](https://github.com/walidmokhtari)
-   Melly LUCAS [@mellylu](https://github.com/mellylu)
-   Swann JUMPERTZ [@RazAallgull60](https://github.com/RazAallgull60)
-   Nels27 [@Nels27](https://github.com/Nels27)

## ⭐️ Show your support

Please give a :star: if this project helped you !

## 🪪 License

ISC © [Saumon Délicieux](https://github.com/SaumonDelicieux)
