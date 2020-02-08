import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import StarredRepository from './pages/StarredRepository';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      StarredRepository,
    },
    {
      defaultNavigationOptions: {
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
