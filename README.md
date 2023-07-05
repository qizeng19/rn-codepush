#### Plugin Installation and Configuration for React Native 0.60 version and above
https://github.com/microsoft/react-native-code-push/blob/master/docs/setup-android.md#plugin-installation-and-configuration-for-react-native-060-version-and-above-android

#### multi-deployment-testing-android.md
https://github.com/microsoft/react-native-code-push/blob/master/docs/multi-deployment-testing-android.md

#### 运行模拟器
emulator -avd Pixel_3a_API_31

#### 推代码
appcenter codepush release-react -a zqqqqq/rn-codepush -d Staging

#### 把Staging转换为Production
appcenter codepush promote -a zqqqqq/rn-codepush -s Staging -d Production

#### 案例
https://www.reactnativeschool.com/react-native-codepush-strategy-for-beta-testing