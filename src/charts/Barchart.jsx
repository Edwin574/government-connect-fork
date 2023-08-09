import { BarChart, axisClasses } from "@mui/x-charts";
import "../styles/components/Chart.css";

function Barchart() {
  const chartSetting = {
    yAxis: [
      {
        label: "Revenue in KShs",
      },
    ],
    width: 700,
    height: 400,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "rotate(-90deg) translate(0px, -20px)",
      },
    },
  };

  const dataset = [
    {
      revenue: 200,
      month: "Jan",
    },
    {
      revenue: 400,
      month: "Feb",
    },
    {
      revenue: 200,
      month: "Mar",
    },
    {
      revenue: 200,
      month: "Apr",
    },
    {
      revenue: 600,
      month: "May",
    },
    {
      revenue: 200,
      month: "Jun",
    },
    {
      revenue: 400,
      month: "Jul",
    },
    {
      revenue: 600,
      month: "Aug",
    },
    {
      revenue: 600,
      month: "Sep",
    },
    {
      revenue: 400,
      month: "Oct",
    },
    {
      revenue: 200,
      month: "Nov",
    },
    {
      revenue: 400,
      month: "Dec",
    },
  ];

  const valueFormatter = (value) => `${value}`;

  return (
    <div className="barChart">
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[
          {
            dataKey: "revenue",
            label: "Month",
            valueFormatter,
            color: "rgba(12,19,79,1)",
          },
        ]}
        {...chartSetting}
      />
    </div>
  );
}

export default Barchart;
