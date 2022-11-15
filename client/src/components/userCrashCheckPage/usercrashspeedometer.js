import {buildStyles, CircularProgressbarWithChildren} from "react-circular-progressbar";
import RadialSeparators from "../reuse/RadialSeparators";
import React from "react";

export default function (props) {

    const [finalVal, setFinalVal] = React.useState(0);

    React.useEffect(()=>{
        setTimeout(()=>{
            setFinalVal(props.value)
        }, 1000)
    }, [finalVal])

    return (
        <CircularProgressbarWithChildren
            value={finalVal}
            text={(finalVal)?`${finalVal.toFixed(1)}%`:'0%'}
            // text={`${finalVal.toFixed(1)}%`}
            strokeWidth={10}
            styles={buildStyles({
                strokeLinecap: "butt",
                textColor: "#8930a8",
                pathColor: "#8930a8",
                trailColor: "#2c1232"
            })}
        >
            <RadialSeparators
                count={80}
                style={{
                    background: "#030203",
                    width: "8px",
                    // This needs to be equal to props.strokeWidth
                    height: `${50}px`
                }}
            />
        </CircularProgressbarWithChildren>
    )
}