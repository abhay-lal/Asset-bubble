import React from "react";
import model from "../userCrashCheckPage/crashModel";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function (props) {

    const [finalVal, setFinalVal] = React.useState(0);

    React.useEffect(()=>{
        setTimeout(()=>{
            model([3.9, 7.036403, 19.94, 4112.38, 4325.28, 3954.53, 3955, 104.5464, 15.89782608695652, 2000, 11]).then((res)=>{
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