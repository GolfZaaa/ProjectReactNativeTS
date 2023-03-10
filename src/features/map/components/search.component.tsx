import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setError, setIsLoading, setKeyword ,setLocation } from "../../../store/counter/locationSlice";
import { locationRequest, locationTransform } from "../../../services/location/location.service";

const SearchContainer = styled.View`
  padding: ${(props:any) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 20px;
  width: 100%;
`;

export const Search = () => {

    const dispatch = useAppDispatch()
    const { keyword } = useAppSelector((state) => state.location)
    const [searchKeyword, setSearchKeyword] = useState(keyword); 


    const search = (searchKeyword:any) => {
        dispatch(setIsLoading(true));
        dispatch(setKeyword(searchKeyword));
      };
      useEffect(() => {
        dispatch(setIsLoading(true));
        dispatch(setKeyword(searchKeyword));
        if (!keyword.length) {
          // don't do anything
          return;
        }
        locationRequest(keyword.toLowerCase())
          .then(locationTransform)
          .then((result) => {
            dispatch(setIsLoading(false));
            dispatch(setLocation(result));
          })
          .catch((err) => {
            dispatch(setIsLoading(false));
            dispatch(setError(err));
          });
      }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );};
