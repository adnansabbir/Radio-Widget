import React from 'react';
import './App.css';
import RadioWidget from "src/components/radio-widget/radio-widget";
import {useSelector} from "react-redux";
import {selectCurrentlyPlayingStation, selectRadioStationList} from "src/slices/radioStation.slice";


function App() {
    const stations = useSelector(selectRadioStationList)
    const currentlyPlaying = useSelector(selectCurrentlyPlayingStation)

    return (
        <div className="app">
            <RadioWidget stations={stations} currentlyPlayingStation={currentlyPlaying}/>
        </div>
    );
}

export default App;
