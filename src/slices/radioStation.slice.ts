import {createSlice} from "@reduxjs/toolkit";
import {RadioStation} from "src/types/radio-station.types";
import {RootState} from "src/store";

export interface RadioStationState{
    stationList: RadioStation[]
}

const initialState: RadioStationState = {
    stationList: []
}

export const radioStationsSlice = createSlice({
    name: "radioStations",
    initialState,
    reducers:{
        increment: (state) => {
            state.stationList = []
        },
    }
})

export const selectRadioStationList = (state: RootState) => state.radioStations.stationList

export const {increment} = radioStationsSlice.actions
export default radioStationsSlice.reducer
