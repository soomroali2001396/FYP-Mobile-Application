// // import React from 'react';
// // import { StatusBar, StyleSheet, Text } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { SafeAreaProvider } from 'react-native-safe-area-context';
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// // import Splash from './components/Splash';
// // import Login from './components/Login';
// // import Signup from './components/Signup';
// // import Home from './components/Home';
// // import Profile from './components/Profile';
// // import Chat from './components/Chat';
// // import ProfileData from './components/ProfileData';
// // const Stack = createStackNavigator();
// // const Tab = createBottomTabNavigator();

// // function BottomTabNavigator() {
// //   return (
// //     <Tab.Navigator
// //       screenOptions={({ route }) => ({
// //         tabBarIcon: ({ color, size }) => {
// //           let iconName;

// //           switch (route.name) {
// //             case 'Home':
// //               iconName = 'home';
// //               break;
// //             case 'Chat':
// //               iconName = 'chat';
// //               break;
// //             case 'Profile':
// //               iconName = 'account';
// //               break;
// //             default:
// //               iconName = 'home';
// //               break;
// //           }

// //           return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
// //         },
// //         tabBarActiveTintColor: '#1e90ff',
// //         tabBarInactiveTintColor: 'gray',
// //         tabBarStyle: {
// //           backgroundColor: '#f8f8ff',
// //           paddingBottom: 5,
// //           height: 60,
// //         },
// //         tabBarLabelStyle: {
// //           fontSize: 14,
// //           color: '#fff',
// //         },
// //         tabBarLabel: ({ color }) => {
// //           return <Text style={{ color }}>{route.name}</Text>;
// //         },
// //       })}
// //     >
// //       <Tab.Screen
// //         name="Home"
// //         component={Home}
// //         options={{
// //           headerShown: true,
// //           headerStyle: {
// //             backgroundColor: '#f8f8ff',
// //           },
// //           headerTitle: () => <ProfileData />,
// //           headerTintColor: '#fff',
// //         }}
// //       />
// //       <Tab.Screen
// //         name="Chat"
// //         component={Chat}
// //         options={{
// //           headerShown: true,
// //           headerStyle: {
// //             backgroundColor: '#f8f8ff',
// //           },
// //           headerTitle: () => <ProfileData />,
// //           headerTintColor: '#fff',
// //         }}
// //       />
// //       <Tab.Screen
// //         name="Profile"
// //         component={Profile}
// //         options={{
// //           headerShown: true,
// //           headerStyle: {
// //             backgroundColor: '#f8f8ff',
// //           },
// //           headerTitle: () => <ProfileData />,
// //           headerTintColor: '#fff',
// //         }}
// //       />
// //     </Tab.Navigator>
// //   );
// // }

// // export default function App() {
// //   return (
// //     <SafeAreaProvider>
// //       <NavigationContainer>
// //         <StatusBar 
// //           barStyle="light-content"
// //           backgroundColor="#000"
// //         />
// //         <Stack.Navigator screenOptions={{ headerShown: false }}>
// //           <Stack.Screen name="Splash" component={Splash} />
// //           <Stack.Screen name="Login" component={Login} />
// //           <Stack.Screen name="Signup" component={Signup} />
// //           <Stack.Screen name="Main" component={BottomTabNavigator} />
// //         </Stack.Navigator>
// //       </NavigationContainer>
// //     </SafeAreaProvider>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fafafa',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

// import React from 'react';
// import { StatusBar, StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Svg, { Path } from 'react-native-svg'; 

// import Splash from './components/Splash';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Dashboard from './components/Dashboard';
// import Services from './components/Services'; 
// import Profile from './components/Profile';
// import Menu from './components/Menu';
// import Team from './components/Team';
// import Plan from './components/Plan';
// import Offers from './components/Offers';
// import Item1 from './components/screens/Item1'; 
// import Item2 from './components/screens/Item2';
// import Item3 from './components/screens/Item3'; 
// import Item4 from './components/screens/Item4';
// import onpremise from './components/screens1/onpremise'; 
// import offpremise from './components/screens1/offpremise'; 
// import Menu1 from './components/screens1/Menu1'; 
// import Menu2 from './components/screens1/Menu2'; 
// import Menu3 from './components/screens1/Menu3'; 
// import Menu4 from './components/screens1/Menu4'; 
// import transport from './components/screens2/transport'; 
// import Car from './components/screens2/Car'; 
// import decor from './components/screens2/decor'; 
// import music from './components/screens2/music'; 
// import Payment from './components/screens2/Payment';
// import templatesrc from './components/screens2/templatesrc'; 
// import edittemplate from './components/screens2/edittemplate'; 
// import ProfileData from './components/ProfileData';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function CustomTabBarBackground() {
//   return (
//     <Svg
//   width="100%"
//   height="100%"
//   viewBox="0 0 1440 320"
//   preserveAspectRatio="none"
//   style={styles.svgBackground}
// >
//   <Path
//     fill="#F9F3EC"
//     d="M0,160L80,138.7C160,117,320,75,480,90.7C640,107,800,181,960,186.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
//   />
// </Svg>
//   );
// }

// function BottomTabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           switch (route.name) {
//             case 'Dashboard':
//               iconName = 'view-dashboard';
//               break;
//             case 'Menu':
//               iconName = 'menu';
//               break;
//             case 'Profile':
//               iconName = 'account';
//               break;
//             default:
//               iconName = 'home';
//               break;
//           }

//           return (
//             <View style={focused ? styles.activeTab : null}>
//               <MaterialCommunityIcons name={iconName} color={color} size={focused ? 30 : 25} />
              
//             </View>
//           );
//         },
//         tabBarActiveTintColor: '#ffffff',
//         tabBarInactiveTintColor: 'gray',
//         tabBarStyle: {
//           backgroundColor: 'transparent',
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           height: 80,
//           borderTopWidth: 0,
//           elevation: 0,
//           paddingBottom: 10, // Add padding to ensure it is fixed at the bottom
//         },
//         tabBarBackground: () => <CustomTabBarBackground />,
//       })}
//     >
//       <Tab.Screen name="Dashboard" component={Dashboard} />
//       <Tab.Screen name="Menu" component={Menu} />
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <StatusBar 
//           barStyle="light-content"
//           backgroundColor="#000"
//         />
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="Splash" component={Splash} />
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="Signup" component={Signup} />
//           <Stack.Screen name="Main" component={BottomTabNavigator} />
//           <Stack.Screen name="Services" component={Services} />
//           <Stack.Screen name="Plan" component={Plan} />
//           <Stack.Screen name="Offers" component={Offers} />
//           <Stack.Screen name="Item1" component={Item1} />
//           <Stack.Screen name="Item2" component={Item2} />
//           <Stack.Screen name="Item3" component={Item3} />
//           <Stack.Screen name="Item4" component={Item4} />
//           <Stack.Screen name="Team" component={Team} />
//           <Stack.Screen name="onpremise" component={onpremise} />
//           <Stack.Screen name="offpremise" component={offpremise} />
//           <Stack.Screen name="Menu1" component={Menu1} />
//           <Stack.Screen name="Menu2" component={Menu2} />
//           <Stack.Screen name="Menu4" component={Menu4} />
//           <Stack.Screen name="Menu3" component={Menu3} />
//           <Stack.Screen name="transport" component={transport} />
//           <Stack.Screen name="Car" component={Car} />
//           <Stack.Screen name="decor" component={decor} />
//           <Stack.Screen name="music" component={music} />
//           <Stack.Screen name="Payment" component={Payment} />
//           <Stack.Screen name="templatesrc" component={templatesrc} />
//           <Stack.Screen name="edittemplate" component={edittemplate} />
          
         

//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fafafa',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '200%',
    
//   },
//   svgBackground: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 50,
//     zIndex: -1,
//   },
//   activeTab: {
//     backgroundColor: '#6A4E36',
//     borderRadius: 20,
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     top: 20,
//   },
//   label: {
//     color: '#fff',
//     fontSize: 12,
//     textAlign: 'center',
//     marginTop: 5,
//   },
// });
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, { Path } from 'react-native-svg'; 

// Import screens
import Splash from './components/Splash';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Services from './components/Services'; 
import Profile from './components/Profile';
import Menu from './components/Menu';
import Team from './components/Team';
import Plan from './components/Plan';
import Offers from './components/Offers';
import Helperform from './components/Helperform';
import Existinghelper from './components/Existinghelper';
// Other imports remain unchanged
import Item1 from './components/screens/Item1'; 
import Item2 from './components/screens/Item2';
import Item3 from './components/screens/Item3'; 
import Item4 from './components/screens/Item4';
import onpremise from './components/screens1/onpremise'; 
import offpremise from './components/screens1/offpremise'; 
import Menu1 from './components/screens1/Menu1'; 
import Menu2 from './components/screens1/Menu2'; 
import Menu3 from './components/screens1/Menu3'; 
import Menu4 from './components/screens1/Menu4'; 
import transport from './components/screens2/transport'; 
import Car from './components/screens2/Car'; 
import decor from './components/screens2/decor'; 
import music from './components/screens2/music'; 
import Payment from './components/screens2/Payment';
import templatesrc from './components/screens2/templatesrc'; 
import edittemplate from './components/screens2/edittemplate'; 
// import ApiService from './components/screens2/ApiService';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Custom Tab Background for Bottom Tab
function CustomTabBarBackground() {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      style={styles.svgBackground}
    >
      <Path
        fill="#F9F3EC"
        d="M0,160L80,138.7C160,117,320,75,480,90.7C640,107,800,181,960,186.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
    </Svg>
  );
}

// Bottom Tab Navigator with Dashboard, Menu, and Profile
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Dashboard':
              iconName = 'view-dashboard';
              break;
            case 'Menu':
              iconName = 'menu';
              break;
           
          }

          return (
            <View style={focused ? styles.activeTab : null}>
              <MaterialCommunityIcons name={iconName} color={color} size={focused ? 30 : 25} />
            </View>
          );
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          borderTopWidth: 0,
          elevation: 0,
          paddingBottom: 10, // Padding to keep the tab bar fixed at the bottom
        },
        tabBarBackground: () => <CustomTabBarBackground />,
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Menu" component={Menu} />
      {/* <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
}

// App Main Component
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar 
          barStyle="light-content"
          backgroundColor="#000"
        />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Splash, Login, and Signup Screens */}
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          
          {/* Main Stack (Tabs) */}
          <Stack.Screen name="Main" component={BottomTabNavigator} />
          
          {/* Other Screens */}
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Services" component={Services} />
          <Stack.Screen name="Plan" component={Plan} />
          <Stack.Screen name="Offers" component={Offers} />
          <Stack.Screen name="Item1" component={Item1} />
          <Stack.Screen name="Item2" component={Item2} />
          <Stack.Screen name="Item3" component={Item3} />
          <Stack.Screen name="Item4" component={Item4} />
          <Stack.Screen name="Team" component={Team} />
          <Stack.Screen name="onpremise" component={onpremise} />
          <Stack.Screen name="offpremise" component={offpremise} />
          <Stack.Screen name="Menu1" component={Menu1} />
          <Stack.Screen name="Menu2" component={Menu2} />
          <Stack.Screen name="Menu4" component={Menu4} />
          <Stack.Screen name="Menu3" component={Menu3} />
          <Stack.Screen name="transport" component={transport} />
          <Stack.Screen name="Car" component={Car} />
          <Stack.Screen name="decor" component={decor} />
          <Stack.Screen name="music" component={music} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="templatesrc" component={templatesrc} />
          <Stack.Screen name="Helperform" component={Helperform} />
          <Stack.Screen name="Existinghelper" component={Existinghelper} />
          {/* <Stack.Screen name="edittemplate" component={edittemplate} /> */}
          {/* <Stack.Screen name="ApiService" component={ApiService} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    width: '200%',
  },
  svgBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    zIndex: -1,
  },
  activeTab: {
    backgroundColor: '#6A4E36',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
  },
  label: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
});
