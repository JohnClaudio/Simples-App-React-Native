import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import Page_List from './Page_List';

const Tab = createBottomTabNavigator();

export default function Page_Home() {
  const dataList = useSelector((state) => state.dataList);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'List') {
            return (
              <Ionicons
                name={
                  focused ? 'ios-document-text' : 'ios-document-text-outline'
                }
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#8B0000',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="List"
        component={Page_List}
        options={{ tabBarBadge: dataList.length }}
      />

    </Tab.Navigator>
  );
}
