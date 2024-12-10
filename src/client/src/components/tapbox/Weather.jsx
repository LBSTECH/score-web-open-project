import React from 'react'
import ReactApexChart from 'react-apexcharts';

export default function Weather() {
    const series = [
        {
            name: "결빙",
            data: [
                { x: "결빙", y: 231 },
                { x: "침수", y: 122 },
                { x: "자외선경보", y: 63 },
            ],
        },
    ];
    const options = {
        colors: ["#006666", '#660066'],
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '80%',
                borderRadius: 4
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 10,
            colors: ['transparent'],
        },
        xaxis: {
            labels: {
                style: {
                    fontSize : '15px',
                    fontWeight: 'bold',
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: true,
            labels: {
                style: {
                    fontSize : '15px',
                    fontWeight: 'bold',
                },
            },            
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            style: {
                fontSize: '15px',
                colors: 'black'
            },
            shared: true,
            intersect: false,
            y: {
                formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
                    return value
                }
            }
        },
    };
    return (
        <div className="rounded-lg shadow my-10 ">
            <style>
                {`
                .apexcharts-tooltip {
                    z-index: 9999 !important; /* Make tooltip appear above other elements */
                    color: black !important; /* Ensure text color is black */
                }
                .apexcharts-tooltip .apexcharts-tooltip-text-y-value {
                    color: black !important; /* Specifically target the y-value text color */
                }
                `}
            </style>
            <div id="column-chart" className="chart-container">
                <ReactApexChart options={options} series={series} type="bar" height={350} />
            </div>
        </div>
    );
}