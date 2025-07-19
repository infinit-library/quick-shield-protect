import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, AlertCircle, CheckCircle, Clock } from "lucide-react";

export const AIInsights = () => {
  const insights = [
    {
      id: 1,
      type: "opportunity",
      confidence: 92,
      title: "Yield Farming Opportunity",
      description: "AI detected 18.5% APY opportunity in USDC-ETH pool on Uniswap V3.",
      action: "Add Liquidity",
      timeframe: "Valid for 2h",
      icon: TrendingUp,
      variant: "success" as const
    },
    {
      id: 2,
      type: "warning",
      confidence: 87,
      title: "Gas Optimization",
      description: "Consolidate 3 small positions to save ~$45 in gas fees.",
      action: "Optimize",
      timeframe: "Low gas in 4h",
      icon: AlertCircle,
      variant: "warning" as const
    },
    {
      id: 3,
      type: "rebalance",
      confidence: 78,
      title: "Portfolio Rebalancing",
      description: "ETH allocation 12% above target. Consider taking profits.",
      action: "Rebalance",
      timeframe: "Target: 48h",
      icon: CheckCircle,
      variant: "default" as const
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center">
          <Brain className="w-5 h-5 mr-2" />
          AI-Powered Insights
        </CardTitle>
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
          Live Analysis
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight) => {
          const IconComponent = insight.icon;
          return (
            <div key={insight.id} className="border border-border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${
                    insight.variant === 'success' ? 'bg-success/10' :
                    insight.variant === 'warning' ? 'bg-warning/10' :
                    'bg-primary/10'
                  }`}>
                    <IconComponent className={`w-4 h-4 ${
                      insight.variant === 'success' ? 'text-success' :
                      insight.variant === 'warning' ? 'text-warning' :
                      'text-primary'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-sm">{insight.title}</h4>
                      <Badge variant="outline" className="text-xs px-1 py-0.5">
                        {insight.confidence}% confidence
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {insight.description}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {insight.timeframe}
                    </div>
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                {insight.action}
              </Button>
            </div>
          );
        })}
        
        <div className="pt-2 border-t border-border">
          <Button variant="ghost" size="sm" className="w-full text-primary">
            View All AI Recommendations
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};