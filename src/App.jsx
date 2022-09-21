import { useState } from "react";
import ActivityCards from "./components/ActivityCards";
import data from "./data.json";
import "./scss/style.scss";

function App() {
  const [timeframe, setTimeframe] = useState("weekly");

  const timeframeList = ["daily", "weekly", "monthly"];

  const timeframeChange = (base) => {
    setTimeframe(base);
  };

  return (
    <main>
      {/* the main card */}
      <div className="main-card">
        <div className="personal-info">
          <div className="image">
            <img src="/assets/image-jeremy.png" alt="jeremy image" />
          </div>
          <div className="title">
            <div className="side-title">Report for</div>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <div className="timeframe">
          {timeframeList.map((item) => (
            <div
              className={`${item === timeframe ? "active" : ""} ${item}`}
              onClick={() => timeframeChange(item)}
              key={item}
            >
              {item[0].toUpperCase() + item.slice(1)}
            </div>
          ))}
        </div>
      </div>

      {/* main card end */}
      {/* activity cards */}
      <ActivityCards data={data} timeframe={timeframe} />
      {/* activity card end */}
    </main>
  );
}

export default App;
