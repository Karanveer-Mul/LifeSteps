import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
} from "recharts";

const OrgBar = (props) => (
  <ResponsiveContainer width="95%" height={150}>
    <BarChart
      data={props.data}
      layout="vertical"
      margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
    >
      <XAxis
        type="number"
        tick={{ fontSize: "14px", fontWeight: "400", color: "#5c5c5c" }}
      ></XAxis>
      <YAxis
        type="category"
        dataKey="party"
        tick={{ fontSize: "14px", fontWeight: "400", color: "#5c5c5c" }}
      />

      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" width="100%" />
      <Bar dataKey="total" fill={props.data.fill} barSize={30}>
        <LabelList
          dataKey="total"
          position="insideRight"
          style={{ fill: "white" }}
        />
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export default OrgBar;
