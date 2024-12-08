//Task 3
import React from "react";
import ChartComponent from "./ChartComponents";
const ScatterChart = ({data}) => {
    const chartData = {
        datasets: [
            {
                label: "Profits vs Expenses",
                data: data.expenses.map((item, index) => ({
                    x: item,
                    y: data.profits[index],
                    backgroundColor: "rgba(173, 216, 230, 0.8)",
                    borderColor: "rgba(0, 0, 0, 0.8))"   
         })
        )}]};
    return <ChartComponent type="scatter" data={chartData}/>;
};

export default ScatterChart;