import model from './crashModel';

export default function (props) {

    const reCheck = (e) => {
        e.preventDefault();
        props.changeValue(0);
        // console.log(typeof props.crash);
        const data = [
            Number(props.unemployment),
            Number(props.cpi),
            Number(props.pe),
            Number(props.open),
            Number(props.high),
            Number(props.low),
            Number(props.close),
            Number(props.industrialProduction),
            Number(props.treasury),
            Number(props.year),
            Number(props.month),
        ];
        model(data)
            .then(res => {
                props.changeValue(res);
            });
    }

    return (
        <div className={"prev-data-card"}>
            <div className={"prev-data-heading"}>
                <h2>{props.chance}</h2>
                <p>Crash Probability</p>
            </div>

            <ul className={"data-list"}>
                <li><span>Unemployment: </span> <span>{props.unemployment}</span></li>
                <li><span>CPI: </span> <span>{props.cpi}</span></li>
                <li><span>PE Ratio</span> <span>{props.pe}</span></li>
                <li><span>Open: </span> <span>{props.open}</span></li>
                <li><span>High: </span> <span>{props.high}</span></li>
                <li><span>Low: </span> <span>{props.low}</span></li>
                <li><span>Close: </span> <span>{props.close}</span></li>
                <li><span>Industrial Production</span> <span>{props.industrialProduction}</span></li>
                <li><span>Treasury Year</span> <span>{props.treasury}</span></li>
                <li><span>Date</span> <span>{props.year} / {props.month}</span></li>
            </ul>
            <a href={"#"} onClick={reCheck} className={"validate-btn"}>
                Validate Again
            </a>
        </div>
    )
}