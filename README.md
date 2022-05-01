## Requirements

- Node 14 LTS
- Java 11 (for android )

## Steps

### ios

```
$ yarn install
$ cd ios && pod install && cd ..
$ npx react-native run-ios
```

### android

```
$ yarn install
$ java -version          // verify if your version is 11
$ npx react-native run-android
```

## Architecture

The data was handled in the separated form, Posts, Users, and Comments as a architecture relational, it gives us several advatages in the process of editing, updating, or managing from the data with more simplicity. For this choice, the possible scalability of the data has been taken into account, which is always a good decision to consider.

## Libraries

### Redux

This was chosen because it allows us to handle a global state to achieve full controll of the app, although there are other libraries with the same functions like mobx, machine x etc, but the advantage is in the stability, ease to debuging and the complete tecnicals docs.

### Redux Saga

This library allows us handle the secondary effects or that type of process in background take advantage of generator function and have ease to unit testing a difference with redux thunk.

## React Navigation

This library is the encharged to handled the navigation, it has many advantages over others libraries of navigation, from its stability and performance until the animations, which is why it has the recomentation of the owners of react native.
