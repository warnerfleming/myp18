//Task 2

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ type, data , options }) => {
  const chartInstance = useRef(null); 
  const chartRef = useRef(null); 
  
  useEffect(() => {
    const text = chartRef.current?.getContext(`2d`);
    if (chartInstance.current) {
      chartInstance.current.destroy(); 
    }
    chartInstance.current = new Chart(text, {
      type,
      data,
      options,
    }
);
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null; }};
  }, 
  [type, data , options]); 
  return <canvas ref={chartRef}>
  </canvas>;
};

export default ChartComponent;