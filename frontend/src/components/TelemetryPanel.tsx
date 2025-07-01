import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gauge, MapPin, Battery, Thermometer, Wind } from 'lucide-react';

export const TelemetryPanel = () => {
  const [telemetry, setTelemetry] = useState({
    altitude: 125.5,
    speed: 15.2,
    battery: 87,
    temperature: 22,
    windSpeed: 8.5,
    coordinates: { lat: 37.7749, lng: -122.4194 },
    mode: 'AUTO',
    status: 'FLYING'
  });

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => ({
        ...prev,
        altitude: prev.altitude + (Math.random() - 0.5) * 2,
        speed: Math.max(0, prev.speed + (Math.random() - 0.5) * 3),
        battery: Math.max(0, prev.battery - 0.01),
        temperature: prev.temperature + (Math.random() - 0.5) * 0.5,
        windSpeed: Math.max(0, prev.windSpeed + (Math.random() - 0.5) * 2),
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-cyan-400 flex items-center space-x-2">
          <Gauge className="w-5 h-5" />
          <span>Live Telemetry</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-300">Status</span>
          <Badge variant={telemetry.status === 'FLYING' ? 'default' : 'secondary'} 
                 className="bg-green-600 hover:bg-green-700">
            {telemetry.status}
          </Badge>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-slate-300">Mode</span>
          <Badge variant="outline" className="border-cyan-400 text-cyan-400">
            {telemetry.mode}
          </Badge>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span className="text-slate-300">Altitude</span>
            </div>
            <span className="font-mono text-white">{telemetry.altitude.toFixed(1)}m</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gauge className="w-4 h-4 text-slate-400" />
              <span className="text-slate-300">Speed</span>
            </div>
            <span className="font-mono text-white">{telemetry.speed.toFixed(1)} m/s</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Battery className="w-4 h-4 text-slate-400" />
              <span className="text-slate-300">Battery</span>
            </div>
            <span className="font-mono text-white">{telemetry.battery.toFixed(0)}%</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Thermometer className="w-4 h-4 text-slate-400" />
              <span className="text-slate-300">Temperature</span>
            </div>
            <span className="font-mono text-white">{telemetry.temperature.toFixed(1)}°C</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wind className="w-4 h-4 text-slate-400" />
              <span className="text-slate-300">Wind Speed</span>
            </div>
            <span className="font-mono text-white">{telemetry.windSpeed.toFixed(1)} m/s</span>
          </div>
        </div>
        
        <div className="pt-3 border-t border-slate-700">
          <div className="text-xs text-slate-400 space-y-1">
            <div>Lat: {telemetry.coordinates.lat.toFixed(6)}</div>
            <div>Lng: {telemetry.coordinates.lng.toFixed(6)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
