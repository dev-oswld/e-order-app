import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Menu from './screens/Menu';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Login: { screen: Login },
    Register: { screen: Register },
    Menu: { screen: Menu },
},
    { //No show navbar and title
        headerMode: 'none',
    }
);

const App = createAppContainer(AppNavigator);
export default App;
