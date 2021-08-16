import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

import "./technologiesBarChart.scss";
import { technologiesInfo } from "../portfolioUtilities";
import { useLanguage } from "../../../../contexts/LanguageContext";
// import { TechnologiesCounter } from '../PortfolioPage';

// interface Props {
//     technologiesCounter: TechnologiesCounter
// }

// const TechnologiesBarChart: React.FC<Props> = ({data1}) => {
const TechnologiesBarChart = ({ technologiesCounter, width }) => {
    const language = useLanguage();
    const barChartRef = useRef(null);

    useEffect(() => {
        const height = 400;
        const margin = { top: 30, bottom: 85, left: -50, right: 8 };

        const svg = d3
            .select(barChartRef.current)
            .append("svg")
            .attr("width", width - margin.left - margin.right)
            .attr("height", height - margin.top - margin.bottom)
            .attr("viewBox", `0 0 ${width} ${height}`);

        const x = d3
            .scaleBand()
            .domain(d3.range(technologiesCounter.length))
            .range([margin.left, width - margin.right + 75])
            .padding(0.3);

        const y = d3
            .scaleLinear()
            .domain([0, 6])
            .range([height - margin.bottom, margin.top]);

        svg.append("g")
            .attr("fill", "#2F7EF5")
            .selectAll("rect")
            .data(
                technologiesCounter.sort((a, b) =>
                    d3.ascending(a.technology, b.technology)
                )
            )
            .join("rect")
            .attr("x", (d, i) => x(i))
            .attr("y", (d) => y(d.count))
            .attr("title", (d) => d.count)
            .attr("class", (d, i) => technologiesCounter[i].technology)
            .attr("height", (d) => y(0) - y(d.count))
            .attr("width", x.bandwidth());

        const yAxis = (g) => {
            g.attr("transform", `translate(${margin.left}, 0)`)
                .call(d3.axisLeft(y).tickValues([0, 1, 2, 3, 4, 5]))
                .call(d3.axisLeft(y).ticks(6))
                .attr("font-size", "20px")
                .attr("font-weight", "300");
        };

        const xAxis = (g) => {
            g.attr("transform", `translate(0,${height - margin.bottom})`)
                .call(
                    d3
                        .axisBottom(x)
                        .tickFormat((i) => technologiesCounter[i].technology)
                )
                .attr("font-size", "20px")
                .attr("font-weight", "300")
                .selectAll("text")
                .attr("transform", "translate(-10, 5)rotate(-45)")
                .style("text-anchor", "end");
        };

        svg.append("g").call(xAxis);
        svg.append("g").call(yAxis);
        svg.node();
    }, []);

    return (
        <div className="TechnologiesBarChart">
            <h3>{language === "en" ? "Occurrences in featured projects" : "Förekomster i nedanstående projekt"}</h3>
            <div ref={barChartRef} />
        </div>
    );
};

export default TechnologiesBarChart;
