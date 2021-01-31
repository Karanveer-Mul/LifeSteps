import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList,
} from "recharts";

const LegislatorBar = ({ data }) => (
  <ResponsiveContainer width="95%" height={400}>
    <BarChart
      data={data}
      layout="vertical"
      margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
    >
      <XAxis
        type="number"
        tick={{ fontSize: "14px", fontWeight: "400", color: "#5c5c5c" }}
      ></XAxis>
      <YAxis
        type="category"
        dataKey="org_name"
        tick={{ fontSize: "14px", fontWeight: "400", color: "#5c5c5c" }}
      />

      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" width="100%" />
      <Bar dataKey="total" fill="#285A64" barSize={30}>
        <LabelList
          dataKey="total"
          position="insideRight"
          style={{ fill: "white" }}
        />
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export default LegislatorBar;
