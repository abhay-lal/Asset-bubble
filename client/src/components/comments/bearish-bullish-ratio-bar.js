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
    }, [bearishVal])

    return (
        <CircularProgressbarWithChildren
            value={bearishVal}
            strokeWidth={props.strokeWidth}
            styles={buildStyles({
                trailColor: 'rgba(20,100,100,0.5)',
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
                    value={bearishVal===0?0:100-bearishVal}
                    strokeWidth={props.strokeWidth}
                    styles={buildStyles({
                        trailColor: 'rgba(255,255,255,0.15)',
                        pathColor: `rgb(245,67,67)`,
                        rotation: 0.2,
                        strokeLinecap: "butt",
                        pathTransitionDuration: 0.8
                    })}
                />
            </div>
        </CircularProgressbarWithChildren>
    )
}

