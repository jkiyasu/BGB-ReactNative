import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginOptionsComponent from "./session/login_options_component";
import EmailAuthComponent from './session/email_auth/email_auth_component';
import HomeComponent from "./home/home_component";
import DayComponent from "./day/day_component";
import ScheduleComponent from "./schedule/schedule_component";
import ProfileComponent from "./profile/profile_component";

// map stuff
import Map from "./Map";
import { Layers, TileLayer, VectorLayer } from "./Layers";
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { osm, vector } from "./Source";
import { fromLonLat, get } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';

const Stack = createStackNavigator();

const App = () => {
  const [center, setCenter] = useState([-122.2712, 37.8044]);
	const [zoom, setZoom] = useState(10);
  return(
    // <NavigationContainer>
    //   <Stack.Navigator
    //   screenOptions={{
    //     headerShown: false
    //   }}
    //   >
    //     <Stack.Screen 
    //       name="Login" 
    //       component={LoginOptionsComponent}
    //     />
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeComponent}
    //     />
    //     <Stack.Screen 
    //       name="Day" 
    //       component={DayComponent}
    //     />
    //     <Stack.Screen 
    //       name="Schedule" 
    //       component={ScheduleComponent}
    //     />
    //     <Stack.Screen 
    //       name="Profile" 
    //       component={ProfileComponent}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
      <div>
        <Map center={fromLonLat(center)} zoom={zoom}>
          <Layers>
            <TileLayer
						  source={osm()}
						  zIndex={0}
					  />
          </Layers>
        </Map>
      </div>
  )
};

export default App;
