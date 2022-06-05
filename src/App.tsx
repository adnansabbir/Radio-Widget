import React, {useEffect} from 'react';
import './App.css';
import RadioWidget from "src/components/radio-widget/radio-widget";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentlyPlayingStation, selectRadioStationList, setStations} from "src/slices/radioStation.slice";
import {useGetRadioStations} from "src/api/useGetRadioStations";


function App() {
    const {radioStations, loading} = useGetRadioStations()
    const dispatch = useDispatch()

    useEffect(()=> {
        if(!loading){
            dispatch(setStations(radioStations))
        }
    }, [dispatch, radioStations, loading])

    const stations = useSelector(selectRadioStationList)
    const currentlyPlaying = useSelector(selectCurrentlyPlayingStation)
    return (
        <div className="app">
            <RadioWidget stations={stations} currentlyPlayingStation={currentlyPlaying} loading={loading}/>
        </div>
    );
}

export default App;
