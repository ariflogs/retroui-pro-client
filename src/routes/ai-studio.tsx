import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog } from "@/components/retroui/Dialog";
import { Input } from "@/components/retroui/Input";
import { RotateCcw, RotateCw, Maximize2, Zap, ChevronDown, Minus, Plus, GripVertical, Hammer } from "lucide-react";
import { Text } from "@/components/ui/text";

export const Route = createFileRoute("/ai-studio")({
    component: AIStudio,
});

interface ColorPalette {
    id: string;
    label: string;
    colors: string[];
    isCustom?: boolean;
}

function AIStudio() {
    const [activeTab, setActiveTab] = useState("workstation");
    const [selectedPalette, setSelectedPalette] = useState("ai-auto");
    const [isPaletteDialogOpen, setIsPaletteDialogOpen] = useState(false);
    const [isCustomPaletteDialogOpen, setIsCustomPaletteDialogOpen] = useState(false);
    const [customPaletteName, setCustomPaletteName] = useState("");
    const [customPaletteColors, setCustomPaletteColors] = useState(["#000000", "#FFFFFF", "#FFDB32"]);

    const [colorPalettes, setColorPalettes] = useState<ColorPalette[]>([
        { id: "ai-auto", label: "AI Auto", colors: ["#F59E0B", "#000000"] },
        { id: "cyber", label: "Cyber", colors: ["#3B82F6", "#EF4444", "#10B981", "#8B5CF6", "#F59E0B"] },
        { id: "neon", label: "Neon", colors: ["#06FFA5", "#FF006E", "#8338EC"] },
        { id: "acid", label: "Acid", colors: ["#BFFF00", "#FF1493", "#000000", "#F59E0B"] },
        { id: "sunset", label: "Sunset", colors: ["#FF6B6B", "#FFE66D", "#FF8E53", "#6BCF7F"] },
        { id: "ocean", label: "Ocean", colors: ["#006BA6", "#0496FF", "#FFBC42", "#D81159"] },
        { id: "forest", label: "Forest", colors: ["#2D5016", "#61A5C2", "#A9DEF9", "#FCF6BD"] },
        { id: "cosmic", label: "Cosmic", colors: ["#7209B7", "#F72585", "#4361EE", "#4CC9F0"] }
    ]);

    const selectedPaletteData = colorPalettes.find(p => p.id === selectedPalette);

    const handlePaletteSelect = (paletteId: string) => {
        setSelectedPalette(paletteId);
        setIsPaletteDialogOpen(false);
    };

    const handleOpenCustomPalette = () => {
        setIsPaletteDialogOpen(false);
        setIsCustomPaletteDialogOpen(true);
        setCustomPaletteName("");
        setCustomPaletteColors(["#000000", "#FFFFFF", "#FFDB32"]);
    };

    const handleAddColor = () => {
        if (customPaletteColors.length < 6) {
            setCustomPaletteColors([...customPaletteColors, "#FF0000"]);
        }
    };

    const handleRemoveColor = (index: number) => {
        if (customPaletteColors.length > 1) {
            setCustomPaletteColors(customPaletteColors.filter((_, i) => i !== index));
        }
    };

    const handleColorChange = (index: number, color: string) => {
        const newColors = [...customPaletteColors];
        newColors[index] = color;
        setCustomPaletteColors(newColors);
    };

    const handleSavePalette = () => {
        if (customPaletteName.trim() && customPaletteColors.length > 0) {
            const newPalette: ColorPalette = {
                id: `custom-${Date.now()}`,
                label: customPaletteName.trim(),
                colors: [...customPaletteColors],
                isCustom: true
            };
            setColorPalettes([...colorPalettes, newPalette]);
            setSelectedPalette(newPalette.id);
            setIsCustomPaletteDialogOpen(false);
            setCustomPaletteName("");
            setCustomPaletteColors(["#000000", "#FFFFFF", "#FFDB32"]);
        }
    };

    const handleCancelCustomPalette = () => {
        setIsCustomPaletteDialogOpen(false);
        setCustomPaletteName("");
        setCustomPaletteColors(["#000000", "#FFFFFF", "#FFDB32"]);
    };

    return (
        <div className="min-h-screen p-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}

                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <div className="flex justify-between items-center mb-4">
                        <TabsList className="bg-background w-80">
                            <TabsTrigger value="workstation">
                                Workstation
                            </TabsTrigger>
                            <TabsTrigger value="gallery">
                                Gallery
                            </TabsTrigger>
                        </TabsList>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon">
                                    <RotateCcw className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <RotateCw className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <TabsContent value="workstation">
                        <div className="flex gap-12">
                            <div className="w-84 max-h-[calc(100vh-168px)] space-y-6 relative">
                                {/* Source Input */}
                                <Card className="p-4 w-full shadow-none">
                                    <Text className="text-lg font-semibold mb-4">
                                        Source Input
                                    </Text>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                        <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                                            <img
                                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cg fill='%23F59E0B'%3E%3Cpath d='M100 40c-8 0-15 3-20 8s-8 12-8 20v64c0 8 3 15 8 20s12 8 20 8 15-3 20-8 8-12 8-20V68c0-8-3-15-8-20s-12-8-20-8z'/%3E%3Cpath d='M80 120c0 11 9 20 20 20s20-9 20-20v-20H80v20z'/%3E%3C/g%3E%3Cg fill='%23FFFFFF'%3E%3Cpath d='M85 65h30v10H85z'/%3E%3Cpath d='M90 80h20v5H90z'/%3E%3Cpath d='M85 90h30v5H85z'/%3E%3C/g%3E%3Cg fill='%23000'%3E%3Cpath d='M95 45c2-2 4-2 6 0l4 4c2 2 2 4 0 6l-4 4c-2 2-4 2-6 0l-4-4c-2-2-2-4 0-6l4-4z'/%3E%3Cpath d='M75 75c0-2 2-4 4-4h2c2 0 4 2 4 4v20c0 2-2 4-4 4h-2c-2 0-4-2-4-4V75z'/%3E%3Cpath d='M115 75c0-2 2-4 4-4h2c2 0 4 2 4 4v20c0 2-2 4-4 4h-2c-2 0-4-2-4-4V75z'/%3E%3C/g%3E%3C/svg%3E"
                                                alt="Cat"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                </Card>

                                {/* Color Palette */}
                                <Card className="p-4 w-full shadow-none">
                                    <Text className="text-lg font-semibold mb-4">
                                        Color Palette
                                    </Text>

                                    <Dialog open={isPaletteDialogOpen} onOpenChange={setIsPaletteDialogOpen}>
                                        <Dialog.Trigger asChild>
                                            <button className="border rounded-lg py-2 px-4 transition-all border-black shadow hover:shadow-sm w-full">
                                                <div className="flex items-center">
                                                    {selectedPaletteData?.colors.map((color, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="w-6 h-6 rounded-full border -ml-2"
                                                            style={{ backgroundColor: color }}
                                                        />
                                                    ))}
                                                    <div className="text-sm font-semibold ml-2">{selectedPaletteData?.label}</div>
                                                    <ChevronDown className="w-4 h-4" />
                                                </div>

                                            </button>
                                        </Dialog.Trigger>

                                        <Dialog.Content size="md">
                                            <Dialog.Header>
                                                <Text className="text-lg font-bold">Choose Color Palette</Text>
                                            </Dialog.Header>

                                            <div className="p-6">
                                                <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                                                    {colorPalettes.map((palette) => (
                                                        <button
                                                            key={palette.id}
                                                            onClick={() => handlePaletteSelect(palette.id)}
                                                            className={`border-2 rounded-lg p-4 transition-all hover:shadow-md ${selectedPalette === palette.id
                                                                    ? "border-primary bg-primary/10"
                                                                    : "border-gray-200 hover:border-gray-300"
                                                                }`}
                                                        >
                                                            <div className="flex gap-2 mb-3">
                                                                {palette.colors.map((color, idx) => (
                                                                    <div
                                                                        key={idx}
                                                                        className="w-7 h-7 rounded-full border-2 border-black"
                                                                        style={{ backgroundColor: color }}
                                                                    />
                                                                ))}
                                                            </div>
                                                            <div className="text-sm font-bold text-left">{palette.label}</div>
                                                        </button>
                                                    ))}

                                                    <button
                                                        onClick={handleOpenCustomPalette}
                                                        className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center hover:border-gray-400 transition-colors"
                                                    >
                                                        <div className="text-3xl text-gray-400 mb-2">+</div>
                                                        <div className="text-sm text-gray-600">Custom</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </Dialog.Content>
                                    </Dialog>

                                    {/* Custom Palette Creation Dialog */}
                                    <Dialog open={isCustomPaletteDialogOpen} onOpenChange={setIsCustomPaletteDialogOpen}>
                                        <Dialog.Content size="md">
                                            <Dialog.Header>
                                                <Text className="text-lg font-bold">Color Palette</Text>
                                                <ChevronDown className="w-5 h-5" />
                                            </Dialog.Header>

                                            <div className="p-6 space-y-6">
                                                {/* Palette Name */}
                                                <div>
                                                    <Text className="font-semibold text-base mb-3">Palette Name</Text>
                                                    <Input
                                                        value={customPaletteName}
                                                        onChange={(e) => setCustomPaletteName(e.target.value)}
                                                        placeholder="E.G. Neon Brand"
                                                        className="w-full"
                                                    />
                                                </div>

                                                {/* Colors Section */}
                                                <div>
                                                    <Text className="font-semibold text-base mb-3">
                                                        Colors ({customPaletteColors.length}/6)
                                                    </Text>
                                                    <div className="space-y-3">
                                                        {customPaletteColors.map((color, index) => (
                                                            <div key={index} className="flex items-center gap-3">
                                                                <GripVertical className="w-4 h-4 text-gray-400" />
                                                                <div
                                                                    className="w-10 h-10 rounded border-2 border-black cursor-pointer"
                                                                    style={{ backgroundColor: color }}
                                                                    onClick={() => {
                                                                        const input = document.createElement('input');
                                                                        input.type = 'color';
                                                                        input.value = color;
                                                                        input.onchange = (e) => handleColorChange(index, (e.target as HTMLInputElement).value);
                                                                        input.click();
                                                                    }}
                                                                />
                                                                <Text className="font-mono text-base flex-1">{color.toUpperCase()}</Text>
                                                                <Button
                                                                    variant="outline"
                                                                    size="sm"
                                                                    onClick={() => handleRemoveColor(index)}
                                                                    disabled={customPaletteColors.length <= 1}
                                                                    className="p-2"
                                                                >
                                                                    <Minus className="w-4 h-4" />
                                                                </Button>
                                                            </div>
                                                        ))}

                                                        {/* Add Color Button */}
                                                        {customPaletteColors.length < 6 && (
                                                            <button
                                                                onClick={handleAddColor}
                                                                className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center hover:border-gray-400 transition-colors"
                                                            >
                                                                <Plus className="w-5 h-5 text-gray-500 mr-2" />
                                                                <Text className="text-gray-600">ADD COLOR</Text>
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <Dialog.Footer className="flex gap-3 px-6 py-4">
                                                <Button
                                                    onClick={handleSavePalette}
                                                    disabled={!customPaletteName.trim() || customPaletteColors.length === 0}
                                                    className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black border-2 border-black"
                                                >
                                                    Save Palette
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    onClick={handleCancelCustomPalette}
                                                    className="px-8"
                                                >
                                                    Cancel
                                                </Button>
                                            </Dialog.Footer>
                                        </Dialog.Content>
                                    </Dialog>
                                </Card>

                                {/* Forge Button */}
                                <Button className="w-full absolute bottom-4">
                                    <Hammer className="w-4 h-4 mr-2" />
                                    Brutalise Asset
                                </Button>
                            </div>

                            <div className="flex-1 bg-background border-2 rounded-lg p-4">
                                <div className="grid grid-cols-2 gap-12">
                                    {[1, 2, 3, 4].map((item) => (
                                        <div key={item} className="flex items-center justify-center relative group">
                                            <img
                                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cg fill='%23F59E0B'%3E%3Cpath d='M100 40c-8 0-15 3-20 8s-8 12-8 20v64c0 8 3 15 8 20s12 8 20 8 15-3 20-8 8-12 8-20V68c0-8-3-15-8-20s-12-8-20-8z'/%3E%3Cpath d='M80 120c0 11 9 20 20 20s20-9 20-20v-20H80v20z'/%3E%3C/g%3E%3Cg fill='%23FFFFFF'%3E%3Cpath d='M85 65h30v10H85z'/%3E%3Cpath d='M90 80h20v5H90z'/%3E%3Cpath d='M85 90h30v5H85z'/%3E%3C/g%3E%3Cg fill='%23000'%3E%3Cpath d='M95 45c2-2 4-2 6 0l4 4c2 2 2 4 0 6l-4 4c-2 2-4 2-6 0l-4-4c-2-2-2-4 0-6l4-4z'/%3E%3Cpath d='M75 75c0-2 2-4 4-4h2c2 0 4 2 4 4v20c0 2-2 4-4 4h-2c-2 0-4-2-4-4V75z'/%3E%3Cpath d='M115 75c0-2 2-4 4-4h2c2 0 4 2 4 4v20c0 2-2 4-4 4h-2c-2 0-4-2-4-4V75z'/%3E%3C/g%3E%3C/svg%3E"
                                                alt="Generated cat"
                                                className="w-60 h-60 object-contain"
                                            />
                                            <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Maximize2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="gallery">
                        <div className="text-center py-12">
                            <h2 className="text-2xl font-bold mb-4">Gallery View</h2>
                            <p className="text-gray-600">Your generated assets will appear here</p>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}