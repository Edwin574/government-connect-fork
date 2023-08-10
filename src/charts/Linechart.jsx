import { LineChart, axisClasses } from "@mui/x-charts";
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
        label: "Revenue in KShs",
      },
    ],
    width: 800,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "rotate(-90deg) translate(0px, -40px)",
      },
    },
  };

  const valueFormatter = (value) => `${value}mm`;

  return (
    <div className="linechart">
      <LineChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "time" }]}
        series={[
          {
            dataKey: "payment",
            label: "Time",
            valueFormatter,
            color: "rgba(12,19,79,1)",
          },
        ]}
        {...chartSetting}
      />
    </div>
  );
}

export default Linechart;
