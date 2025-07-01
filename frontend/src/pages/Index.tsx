import React from 'react';
import { DroneHeader } from '@/components/DroneHeader';
import { TelemetryPanel } from '@/components/TelemetryPanel';
import { MissionPlanner } from '@/components/MissionPlanner';
import { CommandCenter } from '@/components/CommandCenter';
import { LiveMap } from '@/components/LiveMap';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <DroneHeader />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Live Map - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2">
            <LiveMap />
          </div>
          
          {/* Telemetry Panel */}
          <div className="space-y-6">
            <TelemetryPanel />
            <CommandCenter />
          </div>
        </div>
        
        {/* Mission Planner - Full width at bottom */}
        <div className="mt-6">
          <MissionPlanner />
        </div>
      </div>
    </div>
  );
};

export default Index;
