import React, {useCallback} from "react";
import './radio-widget.css'
import {RadioStation} from "src/types/radio-station.types";
import {useDispatch} from "react-redux";
import {playStation} from "src/slices/radioStation.slice";

export interface RadioWidgetProps {
    stations: RadioStation[]
    currentlyPlayingStation: RadioStation | null
    loading: boolean
}

interface StationProps{
    name: string
    frequency: string
    imageUrl: string
    onClick?: ()=> void
    currentlyPlaying?: boolean
}

const Station: React.FC<StationProps> = (station) => {
    const {name, frequency, onClick, currentlyPlaying, imageUrl} = station
    return (
        <div className="station" onClick={onClick}>
            {currentlyPlaying && (<>
                <div className="details">
                    <img className="button" src="/assets/icons/minus.png" alt="volume_down"/>
                    <div className="playing-station-image" style={{backgroundImage: `url('${imageUrl}')`}}/>
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

const RadioWidget:React.FC<RadioWidgetProps> = ({stations, currentlyPlayingStation, loading}) => {
    const dispatch = useDispatch()
    const selectStation = useCallback((station: RadioStation) => {
        dispatch(playStation(station))
    }, [dispatch])

    return (
        <div className="radio-widget">
            <div className="header">
                <img className="button" src="/assets/icons/back-arrow.png" alt="back_button"/>
                <span className="title">STATIONS</span>
                <img className="button" src="/assets/icons/switch.png" alt="back_button"/>
            </div>
            {
                loading && (
                    <div className="station-list station-list-loading">
                        <div className="loader"></div>
                    </div>
                )
            }
            {
                !loading && (
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
                )
            }
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
