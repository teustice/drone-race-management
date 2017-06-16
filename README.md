# Drone Race Management
_This project is a simple way to organize fpv drone races._

## Installation/setup
* Clone the repository, and run the following commands to install dependencies

```
$ npm install
$ bower install
```
* Create a file named `api-keys.ts` in your /src/app folder
* Create a firebase project, and add your firebase credentials to the file like so
```
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

For further help, please contact me through github.

## License

MIT, Copyright by Tanner Eustice
