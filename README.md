# Cuemath-Phaser-Webpack-Boilerplate
This can be used to develop games/simulations with all the dependencies required for a phaser project. 

Get up and running with Phaser 3 using TypeScript or JavaScript ES6.

This Webpack setup takes care of your code bundling and local development server.

Included are some handy class files, extending Phaser 3's Scene and Sprite base classes.

## Installation

Ensure you have [Node.js](https://nodejs.org) installed.

Clone this repo and `cd` to project directory.

```
npm i
```

## Tasks

Run the development server to preview locally at http://localhost:8080/.

```
npm start
```

Create a production build.

```
npm run build
```

## A few more steps before you start

1. After completing the above steps, put all of your assets in the assets folder inside of **src** and the JS files in JS folder which is also inside **src**.

2. After this you won't need to have the CDN delivery for the Phaser Framework in index.html. 

3. You can remove all the references to the script files from index.html. 

4. **Game.js** script has to be renamed as **index.js**

5. Use import to reference the scene scripts inside of **index.js**

6. Use the below code to initialize your scene classes. 

```
      export default class GameScene extends Phaser.Scene {
        constructor() {
          super({
            key: "GameScene",
          });
        }
```

7. To use variables across scenes, you will need to use **import**

8. Thats all!!


