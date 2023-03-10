import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFavourites } from "../../store/counter/favouriteSlice";


const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({restaurant}:any) => {

  const dispatch = useAppDispatch()

  const { favourites } = useAppSelector((state) => state.favourite)

  const isFavourite = favourites.find((r:any) => r.placeId === restaurant.placeId);

    const addToFavourites = (restaurant:any) => {
        dispatch(setFavourites([...favourites, restaurant]));
      };

      const removeFromFavourites = (restaurant:any) => {
        const newFavourites = favourites.filter(
          (x:any) => x.placeId !== restaurant.placeId
        );
    
        dispatch(setFavourites(newFavourites));
      };


    
    

  return (
    <FavouriteButton
    onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
            <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
