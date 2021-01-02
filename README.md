1.  `yarn install` to install all the dependencies.
2.  https://reactnative.dev/docs/environment-setup go to tab `React Native CLI Quickstart` to setup the environment.
3.  setup the device or emulator accordingly.
4.  `yarn start` to start the development server.
5.  `yarn android` to install the app on emulator or device.

Building app for the Android device

1.  Generating an upload key. https://reactnative.dev/docs/signed-apk-android
2.  `cd android` and `./gradlew bundleRelease` to generate release bundle for android
3.  the generated `.aab` bundle is in folder `android/app/build/outputs/bundle`
    upload the `.aab` file to playstore.
	
	How to change App ID
	https://gist.github.com/mayank-shekhar/73446ac5f3b2cdb32869e4d466208dcc
