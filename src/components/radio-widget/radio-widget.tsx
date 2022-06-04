import React from "react";
import './radio-widget.css'
import {RadioStation} from "src/types/radio-station.types";

export interface RadioWidgetProps {
    stations: RadioStation[]
}

const RadioWidget:React.FC<RadioWidgetProps> = ({stations}) => {
    return (
        <div className="radio-widget">
            Radio widget working
        </div>
    )
}

export default RadioWidget
