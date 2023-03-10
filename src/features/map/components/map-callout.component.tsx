import React from "react";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../../../components/restaurants/compact-restaurant-info.component";

const MyText = styled.Text``;

export const MapCallout:any = ({ restaurant }:any) => (
  <CompactRestaurantInfo restaurant={restaurant} />
);
