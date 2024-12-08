//Task 3
import React from "react";
import ChartComponent from "./ChartComponents";

const LineChart = ({data}) => {
    const chartData = {
        labels: data.months,
        datasets: [
            {
                label: "Monthly Profits",
                data: data.profits,
                backgroundColor: "rgba(173, 216, 230, 0.8)",
                borderColor: "rgba(0, 0, 0, 0.8))"
            }, 
        ],
    };

    return <ChartComponent type="line" data={chartData}/>

};

export default LineChart;