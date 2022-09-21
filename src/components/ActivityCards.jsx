import React from "react";
import ActivityCard from "./ActivityCard";

export default function ActivityCards({ data, timeframe }) {
  return (
    <div>
      {data.map((activity) => (
        <ActivityCard
          activity={activity}
          timeframe={timeframe}
          key={activity.title}
        />
      ))}
    </div>
  );
}
