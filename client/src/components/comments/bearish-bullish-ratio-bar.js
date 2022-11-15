import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import React from "react";

export default function (props) {

    const [bearishVal, setBearishVal] = React.useState(0);

    React.useEffect(()=>{
        setTimeout(()=>{
            setBearishVal(props.value);
        }, 1000)
    }, [])

    return (
        <CircularProgressbarWithChildren
            value={bearishVal}
            strokeWidth={props.strokeWidth}
            styles={buildStyles({
                trailColor: 'rgba(8,42,42,0.5)',
                pathColor: `rgb(158, 119, 236)`,
                strokeLinecap: "butt",
                pathTransitionDuration: 0.8
            })}
        >

            {/*
          Width here needs to be (100 - 2 * strokeWidth)%
          in order to fit exactly inside the outer progressbar.
        */}
            <div style={{ width: `84%` }}>
                <CircularProgressbar
                    value={100-bearishVal}
                    strokeWidth={props.strokeWidth}
                    styles={buildStyles({
                        trailColor: 'rgba(255,255,255,0.15)',
                        pathColor: `rgb(245,67,67)`,
                        rotation: bearishVal/100,
                        counterClockwise: true,
                        strokeLinecap: "butt",
                        pathTransitionDuration: 0.8
                    })}
                />
            </div>
        </CircularProgressbarWithChildren>
    )
}

