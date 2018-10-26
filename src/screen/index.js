import { Navigation } from 'react-native-navigation';
import SignupForVolu from './SignupForVolu'
import SignupForBlind from './SignupForBlind'
import StartScreen from './StartScreen'
import SigninForVolu from './SigninForVolu'
import MainForVolu from './MainForVolu'
import SettingForVolu from './SettingForVolu'
//import MainTabForVolu from './MainTabForVolu'

export function registerScreens() {
    Navigation.registerComponent('avatar.signupForVolu', () => SignupForVolu);
    Navigation.registerComponent('avatar.signupForBlind', () => SignupForBlind);
    Navigation.registerComponent('avatar.startScreen', () => StartScreen);
    Navigation.registerComponent('avatar.signinForVolu', () => SigninForVolu);
    Navigation.registerComponent('avatar.mainForVolu', () => MainForVolu);
    Navigation.registerComponent('avatar.settingForVolu', () => SettingForVolu);

    //Navigation.registerComponent('avatar.mainTabForVolu', () => MainTabForVolu);
}