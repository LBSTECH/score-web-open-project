import React from 'react'
import ReactApexChart from 'react-apexcharts';

export default function PedestrianCon() {
    const options = {
        xaxis: {
            show: true,
            categories: ['아침','점심','저녁','심야'],
            labels: {
                show: true,
                style: {
                    fontSize : '15px',
                    fontWeight: 'bold',
                }
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
                show: true,
                style: {
                    fontSize : '15px',
                    fontWeight: 'bold',
                },
                formatter: function (value) {
                    return value + '점';
                }
            }
        },
        series: [
            {
                name: "평일",
                data: [46, 68, 42, 9],
                color: "#1A56DB",
            },
            {
                name: "휴일",
                data: [12, 26, 92, 16],
                color: "#7E3BF2",
            },
        ],
        chart: {
            sparkline: {
                enabled: false
            },
            height: "100%",
            width: "100%",
            type: "area",
            fontFamily: "Inter, sans-serif",
            dropShadow: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            enabled: true,
            x: {
                show: false,
            },
            style: {
                fontSize: '20px',
                colors: 'black'
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 6,
        },
        legend: {
            show: false
        },
        grid: {
            show: false,
        },
    };

    return (
        <div className="rounded-lg shadow mt-8">
            <div id="labels-chart" className="px-2.5">
                <ReactApexChart options={options} series={options.series} type="area" />
            </div>
        </div>
    );
};