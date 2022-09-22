export default function ActivityCard({ activity, timeframe }) {
  const { title, timeframes } = activity;
  const data = timeframes[timeframe];

  return (
    <div className={`card ${activity.title.toLowerCase().replace(" ", "-")}`}>
      <div className="card-inner">
        {/* THE CARD HEAD START */}
        <div className="card-head">
          <div className="head-title">{title}</div>
          <div className="head-icon">
            <img src="/assets/icon-ellipsis.svg" alt="ellipsis icon" />
          </div>
        </div>
        {/* THE CARD HEAD END */}

        {/* THE CARD BODY START */}
        <div className="card-body">
          <div className="current">{data.current}hrs</div>
          <div className="previous">
            Last{" "}
            {timeframe === "daily"
              ? "Day"
              : timeframe[0].toUpperCase() + timeframe.slice(1, -2)}{" "}
            - {data.previous}hrs
          </div>
        </div>
        {/* THE CARD BODY END */}
      </div>
    </div>
  );
}
