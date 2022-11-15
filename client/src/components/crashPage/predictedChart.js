import Chart from "react-apexcharts";

export default (props) => {

    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: ['2022-11', '2022-12', '2023-1', '2023-2', '2023-3', '2023-4', '2023-5', '2023-6', '2023-7', '2023-8', '2023-9',
                '2023-10','2023-11','2023-12']
        }
    }

    const series = [
        {
            name: "series-1",
            data: [...props.vals]
        }
    ]
    return (
        <div className={"chart-card"}>
            <Chart
                options={options}
                series={series}
                type={'line'}
                width={'100%'}
            />
            <h2 style={{textAlign: 'center', color:'#A5C9CA'}}>{props.type}</h2>
        </div>
    )
}