import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import Door from './screens/Door';
import Register from './screens/Register';
import Main from './screens/Main';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Door: { screen: Door },
    Register: { screen: Register },
    Main: { screen: Main },
},
    {
        headerMode: 'none',
    }
);

const App = createAppContainer(AppNavigator);
export default App;
