import React from 'react';
import './App.css';
import RadioWidget from "src/components/radio-widget/radio-widget";
import {useSelector} from "react-redux";
import {selectRadioStationList} from "src/slices/radioStation.slice";


function App() {
    const stations = useSelector(selectRadioStationList)

    return (
        <div className="app">
            <RadioWidget stations={stations}/>
        </div>
    );
}

export default App;
