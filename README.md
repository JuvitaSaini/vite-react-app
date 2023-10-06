# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Developing React vite app
# Creating vite React app

Prerequisite :

### 1) node version ≥ 12.2.0

### 2) yarn package manager ≥1.22.0

### Steps to develope vite project :

1) `yarn create vite`

2) After the script finishes, you will be prompted to enter a project name:

 Type your project name

**`? Project name: »** vite-project`

3) After entering your project name, Vite will prompt you to select a framework:

```jsx
Output
? Select a framework: » - Use arrow-keys. Return to submit.
Vanilla
Vue
> React
Preact
Lit
Svelte
Others
```

4)  After selecting the React framework, Vite will prompt you to choose the language type. You can use JavaScript or TypeScript to work on your project.

Use your arrow keys to select `JavaScript`:

```jsx
Output
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
TypeScript
JavaScript + SWC
TypeScript + SWC
```

5)  Navigate to your project folder as directed:

```jsx
cd <vite-project-name> 
```

6) Install yarn in your project

      `$ yarn`

7) Then, use the `yarn` command to install the dependencies of the project:

```jsx
yarn <dependency name>
```

You have now set up a new React project using Vite and installed the packages required by React and Vite.

### **Step 2 — Starting the Development Server**

1) `yarn run dev`

Next, open your browser and visit `http://localhost:5173/`. The default React project will be running on port `5173`:

### **Step 4 — Removing the Default Boilerplate**

 Navigate to your project folder as directed:

```jsx
cd <vite-project-name>
```

1) `ls src/`

The output will list all available files.

2) Use the **rm** command to delete a file or directory.

`rm src/App.css
rm src/App.jsx
rm src/index.css`
3) Delete assets directory 
`rm -r src/assets`

The **-r** flag is a recursive operation, required when deleting a directory along with its contents.

3) After deleting these files, only **main.jsx** remains in the **src/** directory. Run the ls **src/** command again to see the remaining files:

`ls src/`

Because you have removed all other files, you now need to remove a reference in `main.jsx` to a deleted CSS file.

4) Create a new file named `App.jsx` under the `src/` directory with the following command:

`nano src/App.jsx`

5) Add the following code to the `App.jsx` file:

```jsx
export default function App() {
return (
<>
<div>Hello World</div>
</>
);
}
```

For more details visit :import './index.css’
src - https://www.digitalocean.com/community/tutorials/how-to-set-up-a-react-project-with-vite
