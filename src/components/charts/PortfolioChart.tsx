import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { TrendingUp, Calendar } from "lucide-react";

const portfolioData = [
  { date: "Jan", value: 650000, aiPrediction: 645000 },
  { date: "Feb", value: 725000, aiPrediction: 720000 },
  { date: "Mar", value: 680000, aiPrediction: 685000 },
  { date: "Apr", value: 790000, aiPrediction: 795000 },
  { date: "May", value: 820000, aiPrediction: 825000 },
  { date: "Jun", value: 847254, aiPrediction: 850000 },
];

export const PortfolioChart = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Portfolio Performance
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Real-time vs AI predictions
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-1" />
            6M
          </Button>
          <Button variant="outline" size="sm">1Y</Button>
          <Button variant="outline" size="sm">All</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={portfolioData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                className="text-muted-foreground"
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                className="text-muted-foreground"
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
                formatter={(value: any, name: string) => [
                  `$${Number(value).toLocaleString()}`,
                  name === 'value' ? 'Portfolio Value' : 'AI Prediction'
                ]}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--chart-1))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--chart-1))', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'hsl(var(--chart-1))', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="aiPrediction" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: 'hsl(var(--chart-2))', strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-chart-1 rounded-full mr-2"></div>
            <span className="text-muted-foreground">Actual Performance</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-chart-2 rounded-full mr-2"></div>
            <span className="text-muted-foreground">AI Prediction</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};