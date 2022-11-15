import {buildStyles, CircularProgressbarWithChildren} from "react-circular-progressbar";
import RadialSeparators from "../reuse/RadialSeparators";
import React from "react";

export default function (props) {

    const [finalVal, setFinalVal] = React.useState(0);

    React.useEffect(()=>{
        setTimeout(()=>{
<<<<<<< HEAD
            setFinalVal(props.value);
=======
            setFinalVal(props.value)
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b
        }, 1000)
    }, [finalVal])

    return (
        <CircularProgressbarWithChildren
            value={finalVal}
<<<<<<< HEAD
            text={`${finalVal}%`}
=======
            text={(finalVal)?`${finalVal.toFixed(1)}%`:'0%'}
            // text={`${finalVal.toFixed(1)}%`}
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b
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