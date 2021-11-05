// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, // Adicione uma virgula
  // Cole as configurações copiadas do Firebase.
  firebaseConfig : {
    apiKey: 'AIzaSyA-TTvKZ0t4GwuHV4vXp6wBjSRswoU38Lw',
    authDomain: 'fireapp-2febf.firebaseapp.com',
    projectId: 'fireapp-2febf',
    storageBucket: 'fireapp-2febf.appspot.com',
    messagingSenderId: '230534437833',
    appId: '1:230534437833:web:02bc66b9e670794f2d2618'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
