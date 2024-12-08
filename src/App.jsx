//Task 4

import React, { useEffect, useState } from 'react';
import BarChart from './ChartComponents/BarChart';
import BubbleChart from './ChartComponents/BubbleChart';
import LineChart from './ChartComponents/LineChart';
import ScatterChart from './ChartComponents/ScatterChart';

const App = () => {
    const [chartData, setChartData] = useState(null);
    useEffect(() => {
        fetch('/financial_data.json')
            .then((response) => response.json())
            .then((data) => setChartData(data))
            .catch((error) => console.error('Error', error));
    }, []);
//Task 5
    if (!chartData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
          <center>
            <h1>Financial Dashboard</h1>
            </center>
            <BarChart data={chartData} />
            <LineChart data={chartData} />
            <ScatterChart data={chartData} />
            <BubbleChart data={chartData} />
        </div>
    );
};

export default App;
