import React from "react";
<<<<<<< HEAD
=======
import model from "../userCrashCheckPage/crashModel";
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function (props) {

    const [finalVal, setFinalVal] = React.useState(0);

    React.useEffect(()=>{
        setTimeout(()=>{
<<<<<<< HEAD
            setFinalVal(props.value);
=======
            model([3.9, 7.036403, 23.11, 4602.82, 4808.93, 4495.12, 4766.18, 101.7587, 1.465, 2022, 1]).then((res)=>{
                setFinalVal(res*100);
            })
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b
        }, 1000)
    }, [finalVal])

    return (
        <CircularProgressbar
            value={finalVal}
<<<<<<< HEAD
            text={String(finalVal)}
            strokeWidth={props.strokeWidth}
            styles={buildStyles({
                pathColor: `rgba(255, 30, 30, ${finalVal / 100})`,
=======
            text={String(finalVal.toFixed(2))}
            strokeWidth={props.strokeWidth}
            styles={buildStyles({
                pathColor: `rgba(255, 30, 30)`,
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b
                trailColor: "rgba(40,39,40,0.3)",
                pathTransitionDuration: 0.8
            })}
        />
    )
}