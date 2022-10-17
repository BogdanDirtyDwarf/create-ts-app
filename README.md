Ручное создание проекта браузерного приложения (Без фреймов и с ними)

===================

App:

- mkdir app
- cd app
- yarn init -y
- yarn add typescript
- yarn tsc --init
- touch index.html
- touch index.ts

interface Person {
firstName: string;
lastName: string;
}

function greeter(person: Person) {
return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Bogdan", lastName: "Hach" };

document.body.textContent = greeter(user);

- yarn tsc -w

=========================

Webpack + React:

- mkdir webpack
- yarn init -y
- yarn add webpack webpack-cli -D
- yarn webpack init .

  devServer: {
  open: true,
  host: 'localhost',
  port: 1991,
  hot: true,
  },

- yarn add react react-dom
- yarn add @types/node @types/react @types/react-dom @types/jest
- touch ./src/App.tsx

// tsconfig.json
{
"compilerOptions": {
"moduleResolution": "node",
"jsx": "react",
"allowSyntheticDefaultImports": true,
"noImplicitAny": true,
"module": "es6",
"target": "es5",
"allowJs": true,
"typeRoots": [
"node_modules/@types"
]
},
"files": ["src/index.tsx"]
}
//

// index.tsx
import React from 'react';

import { render } from "react-dom";
import App from "./App";

render(<App />, document.querySelector("#app"));
//

// App.tsx
import React from 'react';

const App = () => {
return (
<div>
123affaf
</div>
);
};

export default App;
//

========

Angular:

- npm install -g @angular/cli
- ng new angular
- ng serve

=====

Vue: 
- yarn create vite
- yarn
- yarn dev