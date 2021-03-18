import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

import classes from './technologiesBarChart.module.scss';

interface Props {
    data1: Array<number>
}

const TechnologiesBarChart: React.FC<Props> = ({data1}) => {
    const barChartRef = useRef(null);

    const data = [
        { technology: 'Sass', count: 4 },
        { technology: 'React', count: 5 },
        { technology: 'Python', count: 3 },
        { technology: 'HTML', count: 2 },
        { technology: 'CSS', count: 7 },
        { technology: 'Java', count: 1 },
        { technology: 'JavaScript', count: 5 },
        { technology: 'TypeScript', count: 1 },
    ];


    useEffect(() => {
        const width = 500;
        const height = 250;
        const margin = { top: 50, bottom: 50, left: 50, right: 50 };

        const svg = d3.select(barChartRef.current)
            .append('svg')
            .attr('width', width - margin.left - margin.right)
            .attr('height', height - margin.top - margin.bottom)
            .attr("viewBox", `0 0 ${width} ${height}`);

        const x = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([margin.left, width - margin.right + 75])
            .padding(0.5);

        const y = d3.scaleLinear()
            .domain([0, 8])
            .range([height - margin.bottom, margin.top]);

        svg
            .append("g")
            .attr("fill", '#2F7EF5')
            .selectAll("rect")
            .data(data.sort((a, b) => d3.descending(a.score, b.score)))
            .join("rect")
            .attr("x", (d, i) => x(i))
            .attr("y", d => y(d.count))
            .attr('title', (d) => d.count)
            .attr("class", "rect")
            .attr("height", d => y(0) - y(d.count))
            .attr("width", x.bandwidth());

        const yAxis = g => {
            g.attr("transform", `translate(${margin.left}, 0)`)
                .call(d3.axisLeft(y).ticks(null, data.format))
                .attr("font-size", '20px')
                .attr("font-weight", '300')
        }

        const xAxis = g => {
            g.attr("transform", `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(x).tickFormat(i => data[i].technology))
                .attr("font-size", '20px')
                .attr("font-weight", '300');
        }

        svg.append("g").call(xAxis);
        svg.append("g").call(yAxis);
        svg.node();
    }, []);


    return (
        <div className={classes.TechnologiesBarChart}>
            <div
                ref = {barChartRef}
                className={classes.TechnologiesBarChart}
            />
        </div>
    )
}

export default TechnologiesBarChart;









