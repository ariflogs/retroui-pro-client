import type React from "react";

import { useState } from "react";
import {
  ArrowUp,
  ArrowDown,
  DollarSign,
  ShoppingBag,
  Users,
  TrendingUp,
  Calendar,
} from "lucide-react";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  color: "yellow" | "blue" | "green" | "red" | "purple";
}

interface TopProduct {
  name: string;
  sales: number;
}

function StatCard({ title, value, change, icon, color }: StatCardProps) {
  const colorClasses = {
    yellow: "bg-yellow-300",
    blue: "bg-blue-400",
    green: "bg-green-400",
    red: "bg-red-400",
    purple: "bg-purple-400",
  };

  const isPositive = change >= 0;

  return (
    <Card className="shadow-none hover:shadow-md bg-card">
      <Card.Header>
        <div className="flex items-center gap-2 justify-between">
          <Text className="font-medium text-lg">{title}</Text>
          <div className={`${colorClasses[color]} p-2 border-2  border-black`}>
            {icon}
          </div>
        </div>
      </Card.Header>
      <Card.Content className="pt-0">
        <Text as="h2">{value}</Text>
        <div className="flex items-center text-sm mt-2">
          <span
            className={`flex items-center ${isPositive ? "text-green-600" : "text-red-600"} font-bold mr-1`}
          >
            {isPositive ? (
              <ArrowUp className="h-4 w-4 mr-1" />
            ) : (
              <ArrowDown className="h-4 w-4 mr-1" />
            )}
            {Math.abs(change)}%
          </span>
          <span className="text-gray-600">vs last period</span>
        </div>
      </Card.Content>
    </Card>
  );
}

export default function EcommerceStatsOne() {
  const [timeframe, setTimeframe] = useState<"day" | "week" | "month" | "year">(
    "week"
  );

  const [stats, setStats] = useState<StatCardProps[]>([
    {
      title: "Revenue",
      value: "$8,492",
      change: 18.7,
      icon: <DollarSign className="h-4 w-4" />,
      color: "yellow",
    },
    {
      title: "Orders",
      value: "187",
      change: 12.4,
      icon: <ShoppingBag className="h-4 w-4" />,
      color: "blue",
    },
    {
      title: "Customers",
      value: "143",
      change: 5.8,
      icon: <Users className="h-4 w-4" />,
      color: "green",
    },
    {
      title: "Conversion",
      value: "3.8%",
      change: -2.1,
      icon: <TrendingUp className="h-4 w-4" />,
      color: "red",
    },
  ]);

  const [topProducts, setTopProducts] = useState<TopProduct[]>([
    { name: "Fancy Pants Lg", sales: 42 },
    { name: "Fancy t-shirt Md", sales: 35 },
    { name: "Fancy t-shirt Sm", sales: 28 },
    { name: "Fancy t-shirt Xs", sales: 22 },
  ]);

  return (
    <div className="border-1 border-black p-6 bg-yellow-50">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <Text as="h2" className="mb-1">
            Retro Stats
          </Text>
          <Text className="text-sm">Key metrics for your online store</Text>
        </div>

        <div className="flex items-center gap-2 border-2 border-black p-1 bg-white">
          <button
            className={`font-mono ${timeframe === "day" ? "bg-primary" : "bg-white hover:bg-primary/50"} border-2 border-black px-3 py-1`}
            onClick={() => setTimeframe("day")}
          >
            Day
          </button>
          <button
            className={`font-mono ${timeframe === "week" ? "bg-primary" : "bg-white hover:bg-primary/50"} border-2 border-black px-3 py-1`}
            onClick={() => setTimeframe("week")}
          >
            Week
          </button>
          <button
            className={`font-mono ${timeframe === "month" ? "bg-primary" : "bg-white hover:bg-primary/50"} border-2 border-black px-3 py-1`}
            onClick={() => setTimeframe("month")}
          >
            Month
          </button>
          <button
            className={`font-mono ${timeframe === "year" ? "bg-primary" : "bg-white hover:bg-primary/50"} border-2 border-black px-3 py-1`}
            onClick={() => setTimeframe("year")}
          >
            Year
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Revenue Breakdown */}
        <Card className="col-span-1 lg:col-span-3 w-full shadow-none bg-card">
          <Card.Header className="flex-row items-center justify-between mb-6">
            <Card.Title>Revenue Breakdown</Card.Title>
            <Badge className="flex items-center gap-2" variant="solid">
              <Calendar className="h-4 w-4" />
              <span>
                This {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
              </span>
            </Badge>
          </Card.Header>

          <Card.Content className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <Text className="text-lg font-medium">Product Sales</Text>
                <Badge variant="surface">$6,794</Badge>
              </div>
              <div className="w-full bg-gray-200 border-2 border-black h-4">
                <div
                  className="bg-primary border-r-2 border-black h-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Text className="text-lg font-medium">Subscriptions</Text>
                <Badge variant="surface" className="bg-blue-400">
                  $1,443
                </Badge>
              </div>
              <div className="w-full bg-gray-200 border-2 border-black h-4">
                <div
                  className="bg-blue-400 border-r-2 border-black h-full"
                  style={{ width: "17%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Text className="text-lg font-medium">Digital Downloads</Text>
                <Badge variant="surface" className="bg-green-400">
                  $255
                </Badge>
              </div>
              <div className="w-full bg-gray-200 border-2 border-black h-4">
                <div
                  className="bg-green-400 border-r-2 border-black h-full"
                  style={{ width: "5%" }}
                ></div>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Top Products */}
        <Card className="col-span-1 lg:col-span-2 w-full shadow-none bg-card">
          <Card.Header>
            <Card.Title>Top Products</Card.Title>
          </Card.Header>
          <Card.Content>
            <ul className="space-y-4">
              {topProducts.map((product, index) => (
                <li
                  key={index}
                  className={`flex justify-between items-center pb-3 ${index !== 3 && "border-black border-b-2"}`}
                >
                  <div className="flex items-center">
                    <span className="inline-block bg-black text-white w-5 text-sm h-5 text-center mr-3">
                      {index + 1}
                    </span>
                    <Text>{product.name}</Text>
                  </div>
                  <Badge variant="solid" size="sm">
                    {product.sales} sold
                  </Badge>
                </li>
              ))}
            </ul>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
