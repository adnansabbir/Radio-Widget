import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RadioStation} from "src/types/radio-station.types";
import {RootState} from "src/store";

export interface RadioStationState{
    stationList: RadioStation[],
    currentlyPlayingStation: RadioStation | null
}

const initialState: RadioStationState = {
    currentlyPlayingStation: null,
    stationList: [
        {
            id:"1",
            name: "Putin FM",
            frequency: "66.6",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/3076/3076044.png"
        },
        {
            id:"2",
            name: "Dribble FM",
            frequency: "101.2",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/2742/2742770.png"
        },
        {
            id:"3",
            name: "Doge FM",
            frequency: "99.4",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/7403/7403650.png"
        },
        {
            id:"4",
            name: "Ballads FM",
            frequency: "87.1",
            imageUrl: "https://cdn-icons.flaticon.com/png/512/1557/premium/1557142.png?token=exp=1654354080~hmac=6f149e2eda317953ca90bd7049fb4e0a"
        },
        {
            id:"5",
            name: "Maximum FM",
            frequency: "142.22",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/3563/3563395.png"
        },
        {
            id:"6",
            name: "Putin FM 2",
            frequency: "66.6",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/3076/3076044.png"
        },
        {
            id:"7",
            name: "Dribble FM 2",
            frequency: "101.2",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/2742/2742770.png"
        },
        {
            id:"8",
            name: "Doge FM 2",
            frequency: "99.4",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/7403/7403650.png"
        },
        {
            id:"9",
            name: "Ballads FM 2",
            frequency: "87.1",
            imageUrl: "https://cdn-icons.flaticon.com/png/512/1557/premium/1557142.png?token=exp=1654354080~hmac=6f149e2eda317953ca90bd7049fb4e0a"
        },
        {
            id:"10",
            name: "Maximum FM 2",
            frequency: "142.22",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/3563/3563395.png"
        }
    ]
}

export const radioStationsSlice = createSlice({
    name: "radioStations",
    initialState,
    reducers:{
        playStation: (state, action: PayloadAction<RadioStation>) => {
            state.currentlyPlayingStation = action.payload
        },
    }
})

export const selectRadioStationList = (state: RootState) => state.radioStations.stationList
export const selectCurrentlyPlayingStation = (state: RootState) => state.radioStations.currentlyPlayingStation

export const {playStation} = radioStationsSlice.actions
export default radioStationsSlice.reducer
