import React from 'react'
import ReactApexChart from 'react-apexcharts';
import './tooltip.css'
export default function Dstrb() {
    const series = [
        {
            name: "차량",
            data: [
                { x: "아침", y: 231 },
                { x: "점심", y: 122 },
                { x: "저녁", y: 63 },
                { x: "심야", y: 421 },
            ],

        },
        {
            name: "판매시설",
            data: [
                { x: "아침", y: 231 },
                { x: "점심", y: 122 },
                { x: "저녁", y: 63 },
                { x: "심야", y: 421 },
            ],

        },
        {
            name: "이상시설물",
            data: [
                { x: "아침", y: 231 },
                { x: "점심", y: 122 },
                { x: "저녁", y: 63 },
                { x: "심야", y: 421 },
            ],

        },
        {
            name: "쓰레기",
            data: [
                { x: "아침", y: 232 },
                { x: "점심", y: 113 },
                { x: "저녁", y: 341 },
                { x: "심야", y: 224 },
            ],
        },
        {
            name: "기타",
            data: [
                { x: "아침", y: 231 },
                { x: "점심", y: 122 },
                { x: "저녁", y: 63 },
                { x: "심야", y: 421 },
            ],

        },
    ];
    const options = {
        colors: ["#00FF00", "#006666", '#660066', '#FF3333', '#3366FF'],
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
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            labels: {
                style: {
                    cssClass: 'text-sm font-normal',
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
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            style: {
                fontSize: '20px',
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