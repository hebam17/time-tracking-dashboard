export default function ActivityCard({ activity, timeframe }) {
  const { title, timeframes } = activity;
  const data = timeframes[timeframe];

  return (
    <div className="card">
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
          <div className="current">{data.current}</div>
          <div className="previous">{data.previous}</div>
        </div>
        {/* THE CARD BODY END */}
      </div>
    </div>
  );
}
