import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Searchbar ,ActivityIndicator, MD2Colors } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Search } from "../components/search.component";
import {
  restaurantsRequest, restaurantsTransform,
} from "../../../services/restaurants/restaurants.service";
import { setError, setIsLoading, setRestaurants } from "../../../store/counter/restaurantSlice";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: ${(props:any) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export default function RestaurantsScreen() {

  const dispatch = useAppDispatch()
  const { isLoading ,restaurants } = useAppSelector((state) => state.restaurant)

  const { location } = useAppSelector((state) => state.location)


  const retrieveRestaurants = (loc:any) => {
    dispatch(setIsLoading(true));
    dispatch(setRestaurants([]));
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          dispatch(setIsLoading(false));
          dispatch(setRestaurants(results));
        })
        .catch((err) => {
          dispatch(setIsLoading(false));
          dispatch(setError(err));
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  // console.log(location)


  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.purple900} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item, i }: any) => {
          

          return(
            <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item}  />
          </Spacer>
          );


        }}
        keyExtractor={(_, index: any) => index}
      />
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});