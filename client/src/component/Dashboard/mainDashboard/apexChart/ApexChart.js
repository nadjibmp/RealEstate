import React from 'react'
import {Chart} from './ApexChart.styled'
import faker from 'faker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: `Nombre Totals des j'aimes `,
            padding: {
                top: 10,
                bottom:20,
            },
            align:'start',
            font:{
                size: '24',
            },
            color:'#737B8B',
        },
    },
};

const labels = ['Janvier', 'fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Nombre de j\'aime par Mois',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(51, 62, 75, 0.8)',
            borderRadius: '25',
            borderWidth:"15",
            borderColor:"transparent",
        },
    ],
};

const apexChart = () => {
    return (
        <>
            <Chart  options={options} data={data} x={10} y={20}/>
        </>
    )
}

export default apexChart