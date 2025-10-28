import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatusBar } from "@/components/StatusBar";
import { MarketCommandCenter } from "@/components/tabs/MarketCommandCenter";
import { PredictiveIntelligence } from "@/components/tabs/PredictiveIntelligence";
import { WhatIfCommand } from "@/components/tabs/WhatIfCommand";
import { ProcurementCommand } from "@/components/tabs/ProcurementCommand";
import { TopPriorityActions } from "@/components/TopPriorityActions";

const Index = () => {
  const [activeTab, setActiveTab] = useState("market");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            CSR Procurement Dashboard
          </h1>
          <p className="mt-2 text-muted-foreground">
            Complete procurement decision cycle - from market intelligence to execution
          </p>
        </div>

        {/* Status bar moved below the main heading as requested */}
        <StatusBar />

        <div className="my-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-4 grid w-full grid-cols-4 gap-4 bg-transparent p-0">
            <TabsTrigger
              value="market"
              className="rounded-lg border-2 border-transparent bg-card px-6 py-4 text-base font-semibold transition-all data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg"
            >
              Market Command Center
            </TabsTrigger>
            <TabsTrigger
              value="predictive"
              className="rounded-lg border-2 border-transparent bg-card px-6 py-4 text-base font-semibold transition-all data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg"
            >
              Predictive Intelligence
            </TabsTrigger>
            <TabsTrigger
              value="whatif"
              className="rounded-lg border-2 border-transparent bg-card px-6 py-4 text-base font-semibold transition-all data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg"
            >
              What-If Command Center
            </TabsTrigger>
            <TabsTrigger
              value="procurement"
              className="rounded-lg border-2 border-transparent bg-card px-6 py-4 text-base font-semibold transition-all data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg"
            >
              Procurement Command & Control
            </TabsTrigger>
          </TabsList>

          <TabsContent value="market" className="mt-6">
            <div className="space-y-6">
              <TopPriorityActions />
              <MarketCommandCenter />
            </div>
          </TabsContent>

          <TabsContent value="predictive" className="mt-6">
            <PredictiveIntelligence />
          </TabsContent>

          <TabsContent value="whatif" className="mt-6">
            <WhatIfCommand />
          </TabsContent>

          <TabsContent value="procurement" className="mt-6">
            <ProcurementCommand />
          </TabsContent>
        </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Index;
