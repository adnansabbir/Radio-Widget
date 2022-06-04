import React, {useCallback} from "react";
import './radio-widget.css'
import {RadioStation} from "src/types/radio-station.types";
import {useDispatch} from "react-redux";
import {playStation} from "src/slices/radioStation.slice";

export interface RadioWidgetProps {
    stations: RadioStation[],
    currentlyPlayingStation: RadioStation | null
}

interface StationProps{
    name: string,
    frequency: string,
    imageUrl: string,
    onClick?: ()=> void
    currentlyPlaying?: boolean
}

const RadioWidget:React.FC<RadioWidgetProps> = ({stations, currentlyPlayingStation}) => {
    const dispatch = useDispatch()
    const selectStation = useCallback((station: RadioStation) => {
        dispatch(playStation(station))
    }, [dispatch])

    const Station: React.FC<StationProps> = (station) => {
        const {name, frequency, onClick, currentlyPlaying, imageUrl} = station
        return (
            <div className="station" onClick={onClick}>
                {currentlyPlaying && (<>
                    <div className="details">
                        <img className="button" src="/assets/icons/minus.png" alt="volume_down"/>
                        <img className="playing-station-image" src={imageUrl} alt={name}/>
                        <img className="button" src="/assets/icons/plus.png" alt="volume_down"/>
                    </div>
                </>)}
                <div className="summary">
                    <span>{name}</span>
                    <span>{frequency}</span>
                </div>
            </div>
        )
    }

    return (
        <div className="radio-widget">
            <div className="header">
                <img className="button" src="/assets/icons/back-arrow.png" alt="back_button"/>
                <span className="title">STATIONS</span>
                <img className="button" src="/assets/icons/switch.png" alt="back_button"/>
            </div>
            <div className="station-list">
                {
                    stations.map(
                        ({name, frequency, id,imageUrl}, index) =>
                            <Station
                                onClick={()=> selectStation(stations[index])}
                                name={name}
                                frequency={frequency}
                                currentlyPlaying={id === currentlyPlayingStation?.id}
                                imageUrl={imageUrl}
                                key={id}/>
                    )
                }
            </div>
            <div className="footer">
                {currentlyPlayingStation && (
                    <>
                        <span className="title">CURRENTLY PLAYING</span>
                        <span className="station-name">{currentlyPlayingStation?.name}</span>
                    </>
                )}
            </div>
        </div>
    )
}

export default RadioWidget
