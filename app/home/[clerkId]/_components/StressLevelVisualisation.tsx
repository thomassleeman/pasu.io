"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import "chartjs-adapter-date-fns";

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Updated type for Prisma data
type StressRating = {
  id: string;
  rating: number;
  createdAt: Date | string;
};

type UserData = {
  stressRatings?: StressRating[];
  // ... other user properties
};

const StressRatingChart = ({ user }: { user: UserData }) => {
  if (!user) {
    // Show custom skeleton resembling a chart
    return (
      <div className="mb-12">
        {/* Skeleton Title */}
        <div className="mb-6 mt-12 h-6 w-1/3 rounded bg-gray-200"></div>
        <div className="ml-2 mt-4 border-b-4 border-l-4 border-gray-200 p-4">
          <div className="animate-pulse">
            {/* Skeleton Chart Bars */}
            <div className="flex h-64 items-end space-x-4">
              {Array(4)
                .fill(0)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="w-1/5 rounded bg-gray-200"
                    style={{ height: `${(idx + 1) * 15}%` }}
                  ></div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Use stressRatings (plural) instead of stressRating
  const stressRatings = user.stressRatings ?? [];

  if (stressRatings.length === 0) {
    return <p className="mt-2">No stress rating data available yet.</p>;
  }

  // Process data: sort by date and prepare labels and data arrays
  const sortedRatings = stressRatings
    .filter((rating) => rating.createdAt)
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateA.getTime() - dateB.getTime();
    });

  // Convert createdAt to Date objects
  const labels = sortedRatings.map((rating) => new Date(rating.createdAt));
  const dataPoints = sortedRatings.map((rating) => rating.rating);

  const data = {
    labels,
    datasets: [
      {
        label: "Stress Level",
        data: dataPoints,
        fill: false,
        borderColor: "#4F46E5",
        backgroundColor: "#4F46E5",
        tension: 0.1,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    plugins: {
      title: {
        display: true,
        text: "Stress Ratings Over Time",
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Stress Level: ${context.parsed.y}`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
          tooltipFormat: "PP", // Pretty print date format
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
      y: {
        beginAtZero: true,
        max: 10,
        ticks: {
          stepSize: 1,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-4">
      <div style={{ height: "400px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default StressRatingChart;
