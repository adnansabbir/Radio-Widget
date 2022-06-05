import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RadioStation} from "src/types/radio-station.types";
import {RootState} from "src/store";

export interface RadioStationState{
    stationList: RadioStation[],
    currentlyPlayingStation: RadioStation | null
}

const initialState: RadioStationState = {
    currentlyPlayingStation: null,
    stationList: []
}

export const radioStationsSlice = createSlice({
    name: "radioStations",
    initialState,
    reducers:{
        setStations: (state, action: PayloadAction<RadioStation[]>) => {
            state.stationList = action.payload
        },
        playStation: (state, action: PayloadAction<RadioStation>) => {
            state.currentlyPlayingStation = action.payload
        },
    }
})

export const selectRadioStationList = (state: RootState) => state.radioStations.stationList
export const selectCurrentlyPlayingStation = (state: RootState) => state.radioStations.currentlyPlayingStation

export const {playStation, setStations} = radioStationsSlice.actions
export default radioStationsSlice.reducer
