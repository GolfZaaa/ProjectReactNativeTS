import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { Text } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

export default function RestaurantDetailScreen({route}:any) {
    const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
}
