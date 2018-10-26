import { AppRegistry } from 'react-native';
import App from './App';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screen';

Navigation.registerComponent('capstone', () => App);

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'avatar.startScreen',
    title: 'Welcome', // title of the screen as appears in the nav bar (optional)
        navigatorStyle: {
          navBarHidden: false,
        }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {}
    }
});