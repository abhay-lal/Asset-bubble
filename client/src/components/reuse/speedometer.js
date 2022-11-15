import React from "react";
import model from "../userCrashCheckPage/crashModel";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function (props) {

    const [finalVal, setFinalVal] = React.useState(0);

    React.useEffect(()=>{
        setTimeout(()=>{
            model([3.9, 7.036403, 23.11, 4602.82, 4808.93, 4495.12, 4766.18, 101.7587, 1.465, 2022, 1]).then((res)=>{
                setFinalVal(res*100);
            })
        }, 1000)
    }, [finalVal])

    return (
        <CircularProgressbar
            value={finalVal}
            text={String(finalVal.toFixed(2))}
            strokeWidth={props.strokeWidth}
            styles={buildStyles({
                pathColor: `rgba(255, 30, 30)`,
                trailColor: "rgba(40,39,40,0.3)",
                pathTransitionDuration: 0.8
            })}
        />
    )
}