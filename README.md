# Let's start with Typescript!

Let's create a folder for us to work in.
```bash
mkdir pure-typescript-exercises
cd pure-typescript-exercises
```
Next, we'll setup the project `package.json` and add the dependencies.

```bash
npm init 
```
This will create a `package.json` file with some values that will be asked in the terminal (interactive mode)

Install some dependencies:
```bash
npm install typescript --save-dev
npm install @types/node --save-dev
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev 
```
I have created also a typescript config file tsconfig.json:
```json
    {
	    "compilerOptions": {
	    "target": "es5",
	    "module": "commonjs",
	    "lib": ["es6"],
	    "allowJs": true,
	    "outDir": "build",
	    "rootDir": "src",
	    "strict": true,
	    "noImplicitAny": true,
	    "esModuleInterop": true,
	    "resolveJsonModule": true
	    }
    }
```
# Compiling / Running ts code

The following command will compile the ts files and produce respective js transpiled files.
```bash
npx tsc
```
This library adds Cold Reload which is nice for local / dev projects
```bash
npm install --save-dev ts-node nodemon
```
Add a  `nodemon.json`  config.

```json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "ts-node ./src/index.ts"
}
```
Run
```bash
    npm run start:dev
```
On each file modification in the terminal you will see something like:
```bash
[nodemon] 2.0.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*
[nodemon] watching extensions: ts,js
[nodemon] starting `ts-node ./src/index.ts`
Hello World!
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `ts-node ./src/index.ts`
Hello !
[nodemon] clean exit - waiting for changes before restart
```
