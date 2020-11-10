
# react-native-inoah-common

## Getting started

`$ npm install react-native-inoah-common --save`

### Mostly automatic installation

`$ react-native link react-native-inoah-common`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-inoah-common` and add `RNInoahCommon.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNInoahCommon.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNInoahCommonPackage;` to the imports at the top of the file
  - Add `new RNInoahCommonPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-inoah-common'
  	project(':react-native-inoah-common').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-inoah-common/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-inoah-common')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNInoahCommon.sln` in `node_modules/react-native-inoah-common/windows/RNInoahCommon.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Inoah.Common.RNInoahCommon;` to the usings at the top of the file
  - Add `new RNInoahCommonPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNInoahCommon from 'react-native-inoah-common';

// TODO: What to do with the module?
RNInoahCommon;
```
  