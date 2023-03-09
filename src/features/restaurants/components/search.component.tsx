import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { locationRequest, locationTransform } from "../../../services/location/location.service";
import { setError, setIsLoading, setKeyword, setLocation } from "../../../store/counter/locationSlice";

const SearchContainer = styled.View`
  padding: ${(props:any) => props.theme.space[3]};
`;

export const Search = () => {

  const dispatch = useAppDispatch()
  const { keyword } = useAppSelector((state) => state.location)
  const [searchKeyword, setSearchKeyword] = useState(keyword); 
    
  
  
  const onSearch = (searchKeyword:any) => {
    dispatch(setIsLoading(true));
    dispatch(setKeyword(searchKeyword));
  };

  useEffect(() => {
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
          value={searchKeyword}
          onSubmitEditing={() => {
            onSearch(searchKeyword);
          }}
          onChangeText={(text) => {
            setSearchKeyword(text);
          }}
        />
      </SearchContainer>
    );
  };
  