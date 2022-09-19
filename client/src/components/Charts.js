import ReactECharts from 'echarts-for-react';
import moment from "moment";
import Filter from './Filter';
import { useState, useEffect } from "react";

const Charts = ({weatherData, re}) => {

    const [filter, setFilter] = useState({chart:"Temperature"});
    const[yAxisData, setyAxisData] = useState([])

    const data = []
    weatherData.list.map((days) => {
        if (re.test(days.dt_txt)) {
            data.push(days);
        }
        return null;
      })

 
    const xAxisData = [] 
    data.map((days) => {
        xAxisData.push(moment(days.dt_txt).format("DD MMM YYYY"));
        return null;
    })
    const yAxisData1 = [] 
    data.map((days) => {
        yAxisData1.push(Math.round(days.main.temp));
        return null;
    })
    const yAxisData2 = [] 
    data.map((days) => {
        yAxisData2.push(Math.round(days.main.pressure * 760 / 101325 * 100));
        return null;
    })
    const yAxisData3 = [] 
    data.map((days) => {
        yAxisData3.push(days.main.humidity);
        return null;
    })


    const options = {
        grid: { top: 28, right: 8, bottom: 24, left: 36 },
        xAxis: {
        type: 'category',
        data: xAxisData,
        },
        yAxis: {
        type: 'value',
        },
        series: [
        {
            data: yAxisData,
            type: 'line',
            smooth: true,
        },
        ],
        tooltip: {
        trigger: 'axis',
        },
    };
  
    const changeChart = (filter) => {
        if (filter) {
            if (filter.chart === 'Temperature') {
                return setyAxisData(yAxisData1)
            }
            if (filter.chart === 'Pressure') {
                return setyAxisData(yAxisData2)
            }
            if (filter.chart === 'Humidity') {
                return setyAxisData(yAxisData3)
            }
        }
        return yAxisData;
      }

    useEffect(() => {
        changeChart(filter)
      }, [filter])

    return (
        <>
            <Filter
                filter={filter}
                setFilter={setFilter}
            />
            <ReactECharts option={options} />
        </>
    )
};

export default Charts;