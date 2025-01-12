import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileTab from "../../components/ProfileTab.js";
import LearnTab from "../../components/LearnTab.js";
import SchemesTab from "../../components/SchemesTab.js";
import CommunityTab from "../../components/CommunityTab.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Profile" component={ProfileTab} />
      <Tab.Screen name="Learn" component={LearnTab} />
      <Tab.Screen name="Schemes" component={SchemesTab} />
      <Tab.Screen name="Community" component={CommunityTab} />
    </Tab.Navigator>
  );
}
