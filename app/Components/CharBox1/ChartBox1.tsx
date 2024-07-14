"use client";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import "./CharBox1.scss";
import Link from "next/link";
import Image from "next/image";
import img from "../../../public/assets/userIcon.svg";
type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};
function ChartBox1(props: Props) {
  // console.log(props);
  return (
    <>
      <div className="chartBox d-flex ">
        <div className="boxInfo pb-2 d-flex justify-content-between flex-column">
          <div className="title d-flex align-items-center">
            <Image
              className="Image"
              src={img}
              alt="icon"
              width={30}
              height={30}
            />
            <span>{props.title}</span>
          </div>
          <h1 className="py-4">{props.number}</h1>
          <Link className="py-1" href="/" style={{ color: props.color }}>
            View all
          </Link>
        </div>
        <div className="chartInfo py-2 d-flex justify-content-between flex-column">
          <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
              <LineChart data={props.chartData}>
                <Tooltip
                  contentStyle={{ background: "transparent", border: "none" }}
                  labelStyle={{ display: "none" }}
                  position={{ x: 10, y: 70 }}
                />
                <Line
                  type="monotone"
                  dataKey={props.dataKey}
                  stroke={props.color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="texts d-flex flex-column">
            <span
              className="percentage"
              style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
            >
              {props.percentage}%
            </span>
            <span className="duration">this month</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChartBox1;
