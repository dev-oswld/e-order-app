import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import Door from './screens/Door';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Door: { screen: Door },
},
    {
        headerMode: 'none',
    }
);

const App = createAppContainer(AppNavigator);
export default App;
