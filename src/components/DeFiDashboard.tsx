import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Activity, DollarSign, PieChart, BarChart3, Brain, Zap } from "lucide-react";
import { PortfolioChart } from "./charts/PortfolioChart";
import { RiskMeter } from "./analytics/RiskMeter";
import { AIInsights } from "./analytics/AIInsights";
import { OnChainAnalytics } from "./analytics/OnChainAnalytics";
import { SmartAllocator } from "./analytics/SmartAllocator";

export const DeFiDashboard = () => {
  const portfolioValue = 847253.67;
  const dailyChange = 12.34;
  const dailyChangePercent = 1.47;

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">DeFi Analytics Hub</h1>
          <p className="text-muted-foreground">AI-powered crypto wealth management platform</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            <Brain className="w-3 h-3 mr-1" />
            AI Active
          </Badge>
          <Badge variant="outline" className="bg-success/10 text-success border-success/20">
            <Activity className="w-3 h-3 mr-1" />
            Real-time
          </Badge>
        </div>
      </div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${portfolioValue.toLocaleString()}</div>
            <div className="flex items-center text-sm mt-1">
              {dailyChangePercent > 0 ? (
                <TrendingUp className="h-4 w-4 text-success mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 text-destructive mr-1" />
              )}
              <span className={dailyChangePercent > 0 ? "text-success" : "text-destructive"}>
                ${Math.abs(dailyChange).toFixed(2)} ({Math.abs(dailyChangePercent).toFixed(2)}%)
              </span>
              <span className="text-muted-foreground ml-1">today</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Positions</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Across 6 protocols</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Confidence</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">87%</div>
            <p className="text-xs text-muted-foreground">High confidence</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PortfolioChart />
        </div>
        <div className="space-y-6">
          <RiskMeter />
          <SmartAllocator />
        </div>
      </div>

      {/* AI Insights and On-Chain Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AIInsights />
        <OnChainAnalytics />
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm">
              Rebalance Portfolio
            </Button>
            <Button variant="outline" size="sm">
              Export Analytics
            </Button>
            <Button variant="outline" size="sm">
              View Risk Report
            </Button>
            <Button variant="outline" size="sm">
              Optimize Gas
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              AI Recommendations
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};