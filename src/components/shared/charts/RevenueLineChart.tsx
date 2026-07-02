"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { monthlyRevenueData } from "@/lib/chart-data"

const chartConfig = {
  revenue: {
    label: "الإيرادات",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "المصروفات",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function RevenueLineChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>نظرة عامة على الإيرادات</CardTitle>
        <CardDescription>الإيرادات مقابل المصروفات الشهرية خلال العام الماضي</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer config={ chartConfig } className="aspect-auto h-[300px] w-full">
          <LineChart
            accessibilityLayer
            data={ monthlyRevenueData }
            margin={ { left: 12, right: 12 } }
          >
            <CartesianGrid vertical={ false } />
            <XAxis
              dataKey="month"
              tickLine={ false }
              axisLine={ false }
              tickMargin={ 8 }
            />
            <YAxis
              tickLine={ false }
              axisLine={ false }
              tickMargin={ 8 }
              tickFormatter={ (value) => `$${(value / 1000).toFixed(0)}k` }
            />
            <ChartTooltip content={ <ChartTooltipContent /> } />
            <ChartLegend content={ <ChartLegendContent /> } />
            <Line
              dataKey="revenue"
              type="monotone"
              stroke="var(--color-revenue)"
              strokeWidth={ 2 }
              dot={ false }
              activeDot={ { r: 5 } }
            />
            <Line
              dataKey="expenses"
              type="monotone"
              stroke="var(--color-expenses)"
              strokeWidth={ 2 }
              dot={ false }
              activeDot={ { r: 5 } }
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          ارتفاع بنسبة 12.5% هذا العام <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
