import React from "react";
import { Chart } from "react-google-charts";
const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];
const centerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  marginTop: "-130px",
  marginBottom: "-180px",
};
const App = () => (
  <>
    <div style={centerStyle}>
      <h1>{"Your SEO Report"}</h1>
      <Chart chartType="PieChart" data={data} width={"100%"} height={"400px"} />
    </div>
    <div className="d-flex mx-5">
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Card title 1</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div class="card mx-5" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Card title 2</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div class="card mx-2" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Card title 3</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default App;
