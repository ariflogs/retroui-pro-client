import { Monitor, Tablet, Smartphone } from "lucide-react";
import { useState } from "react";

type DeviceType = "desktop" | "tablet" | "mobile";

interface DevicePreviewProps {
  children: React.ReactNode;
  defaultDevice?: DeviceType;
  onDeviceChange?: (device: DeviceType) => void;
}

interface DeviceButtonsProps {
  currentDevice: DeviceType;
  onDeviceChange: (device: DeviceType) => void;
}

function DeviceButtons({ currentDevice, onDeviceChange }: DeviceButtonsProps) {
  return (
    <div className="flex items-center gap-1 rounded-md border-2 border-black p-1 bg-white shadow-sm">
      <button
        onClick={() => onDeviceChange("desktop")}
        className={`p-2 rounded-sm transition-all ${
          currentDevice === "desktop"
            ? "bg-primary border-2 border-black shadow-sm"
            : "hover:bg-gray-100"
        }`}
        title="Desktop"
      >
        <Monitor className="w-4 h-4" />
      </button>
      <button
        onClick={() => onDeviceChange("tablet")}
        className={`p-2 rounded-sm transition-all ${
          currentDevice === "tablet"
            ? "bg-primary border-2 border-black shadow-sm"
            : "hover:bg-gray-100"
        }`}
        title="Tablet"
      >
        <Tablet className="w-4 h-4" />
      </button>
      <button
        onClick={() => onDeviceChange("mobile")}
        className={`p-2 rounded-sm transition-all ${
          currentDevice === "mobile"
            ? "bg-primary border-2 border-black shadow-sm"
            : "hover:bg-gray-100"
        }`}
        title="Mobile"
      >
        <Smartphone className="w-4 h-4" />
      </button>
    </div>
  );
}

export function DevicePreview({ 
  children, 
  defaultDevice = "desktop",
  onDeviceChange
}: DevicePreviewProps) {
  const [currentDevice, setCurrentDevice] = useState<DeviceType>(defaultDevice);

  const handleDeviceChange = (device: DeviceType) => {
    setCurrentDevice(device);
    onDeviceChange?.(device);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <DeviceButtons 
          currentDevice={currentDevice} 
          onDeviceChange={handleDeviceChange}
        />
      </div>
      
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg border-2 border-black overflow-hidden min-h-[500px]">
        <div className="absolute inset-0 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
        
        <div className="relative flex justify-center items-center h-full">
          <div
            className={`transition-all duration-300 ease-in-out bg-white relative ${
              currentDevice === "mobile"
                ? "w-[375px] max-w-[375px] rounded-[20px] shadow-2xl border border-gray-300 min-h-[667px]"
                : currentDevice === "tablet"
                ? "w-[768px] max-w-[768px] rounded-[16px] shadow-xl border border-gray-200 min-h-[600px]"
                : "w-full max-w-none min-h-[400px]"
            }`}
          >
            {currentDevice !== "desktop" && (
              <div className="absolute inset-0 bg-white/50 rounded-[inherit] z-0"></div>
            )}
            
            <div className="relative z-10 overflow-hidden rounded-[inherit] h-full">
              <div className="w-full h-full">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { DeviceButtons };