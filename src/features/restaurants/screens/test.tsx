import React from 'react'
import {Text,Button} from 'react-native'
import { listres, setloading } from '../../../store/counter/counterSlice'

import { useAppSelector, useAppDispatch } from '../../../store/hooks'

export default function test() {
    // The `state` arg is correctly typed as `RootState` already
    const {value,loading} = useAppSelector((state) => state.posts)

    const dispatch = useAppDispatch()
  
    return(
        <Text>
            {/* {value} */}
            {/* <Button title='plus' onPress={() =>{dispatch(increment(4))}}></Button> */}
            {/* <Button title='plus' onPress={() =>{dispatch(setloading(loading))}}></Button> */}
        </Text>
    )
  }