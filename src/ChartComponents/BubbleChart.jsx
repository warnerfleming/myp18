//Task 3
import React from "react";
import ChartComponent from "./ChartComponents";

const BubbleChart = ({ data }) => {
    const chartData = {
        datasets: [  
            {
                label: "Sales, Profits, Expenses",
                data: data.expenses.map((item, index) => ({
                    x: item,
                    y: data.profits[index],
                    r:  Math.max(data.sales[index] / 1000, 20),
                    backgroundColor: "rgba(173, 216, 230, 0.8)",
                    borderColor: "rgba(0, 0, 0, 0.8)" 
                })),
            },
        ],
    };

    return <ChartComponent type="bubble" data={chartData} />;
};

export default BubbleChart;