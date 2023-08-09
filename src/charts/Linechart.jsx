import { LineChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts";
import "../styles/components/Chart.css";

function Linechart() {
  const dataset = [];

  for (let hour = 6; hour <= 18; hour++) {
    const formattedHour = (hour === 0 ? 12 : hour).toString();
    dataset.push({
      payment: Math.floor(Math.random() * 200000) + 20000,
      time: `${formattedHour} ${hour < 12 ? "AM" : "PM"}`,
    });
  }

  const chartSetting = {
    yAxis: [
      {
        label: "Revenue",
      },
    ],
    width: 800,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        //innerWidth: "-200px",
        transform: "rotate(-90deg) translate(0px, -20px)",
      },
      Line: {
        fill: "green",
        "&:hover": {
          fill: "#1976D2",
        },
      },
    },
  };

  const valueFormatter = (value) => `${value}mm`;

  return (
    <div className="linechart">
      <LineChart
        className="chart"
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "time" }]}
        series={[{ dataKey: "payment", label: "Time", valueFormatter }]}
        {...chartSetting}
      />
    </div>
  );
}

export default Linechart;
