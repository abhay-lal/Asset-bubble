import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function (props) {

    const [finalVal, setFinalVal] = React.useState(0);

    React.useEffect(()=>{
        setTimeout(()=>{
            setFinalVal(props.value);
        }, 1000)
    }, [finalVal])

    return (
        <CircularProgressbar
            value={finalVal}
            text={String(finalVal)}
            strokeWidth={props.strokeWidth}
            styles={buildStyles({
                pathColor: `rgba(255, 30, 30, ${finalVal / 100})`,
                trailColor: "rgba(40,39,40,0.3)",
                pathTransitionDuration: 0.8
            })}
        />
    )
}