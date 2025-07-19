import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const RiskMeter = () => {
  const riskScore = 34; // Out of 100, lower is better
  const riskLevel = riskScore <= 30 ? "Low" : riskScore <= 60 ? "Medium" : "High";
  const riskColor = riskScore <= 30 ? "success" : riskScore <= 60 ? "warning" : "destructive";

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg flex items-center">
          <Shield className="w-5 h-5 mr-2" />
          Risk Assessment
        </CardTitle>
        <Badge variant={riskColor === "success" ? "default" : "destructive"} className={`bg-${riskColor}/10 text-${riskColor} border-${riskColor}/20`}>
          {riskLevel} Risk
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Overall Risk Score</span>
            <span className="font-medium">{riskScore}/100</span>
          </div>
          <Progress value={riskScore} className="h-2" />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Smart Contract Risk</span>
            <Badge variant="outline" className="bg-success/10 text-success border-success/20">
              Low
            </Badge>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Liquidity Risk</span>
            <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
              Medium
            </Badge>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Impermanent Loss</span>
            <Badge variant="outline" className="bg-success/10 text-success border-success/20">
              Low
            </Badge>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Market Correlation</span>
            <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
              0.73
            </Badge>
          </div>
        </div>

        <div className="pt-2 border-t border-border">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
            <div className="text-xs text-muted-foreground">
              AI suggests reducing exposure to high-correlation assets for better diversification.
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};