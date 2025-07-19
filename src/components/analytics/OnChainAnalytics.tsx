import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, ExternalLink, Zap, Database } from "lucide-react";

export const OnChainAnalytics = () => {
  const onChainData = [
    {
      protocol: "Uniswap V3",
      tvl: "$2.1M",
      volume24h: "$89.4K",
      fees: "$234.67",
      status: "active",
      transactions: 247
    },
    {
      protocol: "Aave V3", 
      tvl: "$1.8M",
      volume24h: "$45.2K",
      fees: "$127.89",
      status: "active",
      transactions: 89
    },
    {
      protocol: "Compound",
      tvl: "$890K",
      volume24h: "$23.1K", 
      fees: "$67.23",
      status: "warning",
      transactions: 34
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center">
          <Database className="w-5 h-5 mr-2" />
          On-Chain Analytics
        </CardTitle>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-success/10 text-success border-success/20">
            <Activity className="w-3 h-3 mr-1" />
            Real-time
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-lg font-bold">1,247</div>
            <div className="text-xs text-muted-foreground">Total Transactions</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-lg font-bold">$429.79</div>
            <div className="text-xs text-muted-foreground">Fees Earned 24h</div>
          </div>
        </div>

        <div className="space-y-3">
          {onChainData.map((protocol, index) => (
            <div key={index} className="border border-border rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-sm">{protocol.protocol}</span>
                  <Badge 
                    variant={protocol.status === 'active' ? 'default' : 'destructive'}
                    className={protocol.status === 'active' 
                      ? 'bg-success/10 text-success border-success/20' 
                      : 'bg-warning/10 text-warning border-warning/20'
                    }
                  >
                    {protocol.status}
                  </Badge>
                </div>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <div className="text-muted-foreground">TVL</div>
                  <div className="font-medium">{protocol.tvl}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Volume 24h</div>
                  <div className="font-medium">{protocol.volume24h}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Fees</div>
                  <div className="font-medium text-success">{protocol.fees}</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/50">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Zap className="w-3 h-3 mr-1" />
                  {protocol.transactions} transactions
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 border-t border-border">
          <Button variant="ghost" size="sm" className="w-full text-primary">
            Advanced On-Chain Analysis
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};