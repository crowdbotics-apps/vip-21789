import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList153353Navigator from '../features/ArticleList153353/navigator';
import ArticleList153352Navigator from '../features/ArticleList153352/navigator';
import ArticleList153351Navigator from '../features/ArticleList153351/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList153353: { screen: ArticleList153353Navigator },
ArticleList153352: { screen: ArticleList153352Navigator },
ArticleList153351: { screen: ArticleList153351Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
