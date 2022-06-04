import {configureStore} from '@reduxjs/toolkit'
import radioStationsReducer from "src/slices/radioStation.slice";

export const store = configureStore({
    reducer: {
        radioStations: radioStationsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
