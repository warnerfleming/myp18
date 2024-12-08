//Task 3
import React from "react";
import ChartComponent from "./ChartComponents";

const BarChart = ({data}) => {
    const chartData = {
        labels: data.months,
        datasets: [
            {
                label: "Monthly Sales",
                data: data.sales,
                backgroundColor: "rgba(173, 216, 230, 0.8)",
                borderColor: "rgba(0, 0, 0, 0.8)",
                borderWidth: 2,
            }, 
        ],
    };

    return <ChartComponent type="bar" data={chartData}/>;
};

export default BarChart;