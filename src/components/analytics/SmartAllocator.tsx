import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Target, Zap } from "lucide-react";

const allocationData = [
  { name: "ETH", value: 35, target: 30, color: "hsl(var(--chart-1))" },
  { name: "BTC", value: 25, target: 25, color: "hsl(var(--chart-2))" },
  { name: "Stablecoins", value: 20, target: 25, color: "hsl(var(--chart-3))" },
  { name: "DeFi Tokens", value: 15, target: 15, color: "hsl(var(--chart-4))" },
  { name: "Other", value: 5, target: 5, color: "hsl(var(--chart-5))" },
];

export const SmartAllocator = () => {
  const needsRebalancing = allocationData.some(item => Math.abs(item.value - item.target) > 2);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg flex items-center">
          <Target className="w-5 h-5 mr-2" />
          Smart Allocation
        </CardTitle>
        {needsRebalancing && (
          <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
            <Zap className="w-3 h-3 mr-1" />
            Rebalance
          </Badge>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={allocationData}
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={50}
                paddingAngle={2}
                dataKey="value"
              >
                {allocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: any) => [`${value}%`, 'Current']}
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2">
          {allocationData.map((item, index) => {
            const deviation = item.value - item.target;
            const isOffTarget = Math.abs(deviation) > 2;
            
            return (
              <div key={index} className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-medium">{item.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={isOffTarget ? "text-warning" : "text-muted-foreground"}>
                    {item.value}%
                  </span>
                  <span className="text-muted-foreground">
                    (target: {item.target}%)
                  </span>
                  {isOffTarget && (
                    <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20 text-xs px-1 py-0.5">
                      {deviation > 0 ? '+' : ''}{deviation.toFixed(1)}%
                    </Badge>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {needsRebalancing && (
          <div className="pt-3 border-t border-border">
            <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
              Auto-Rebalance Portfolio
            </Button>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              AI will optimize allocations while minimizing gas costs
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};