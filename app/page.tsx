"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Menu,
  Upload,
  Wand2,
  Eye,
  Download,
  Share2,
  Sparkles,
  Settings,
  Palette,
  Plus,
  Library,
  TrendingUp,
  Shuffle,
  Compass,
  User,
  HelpCircle,
  Home,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Video,
  Camera,
  Sun,
  Contrast,
  Sliders,
  RotateCcw,
  Zap,
  ImageIcon,
} from "lucide-react"

export default function ColorGradeDashboard() {
  const [showOriginal, setShowOriginal] = useState(false)
  const [prompt, setPrompt] = useState("")
  const [lutStrength, setLutStrength] = useState([75])
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasMedia, setHasMedia] = useState(true) // Set to true to show the editing interface

  const sidebarItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Plus, label: "New Project" },
    { icon: Upload, label: "Upload Media" },
    { icon: Library, label: "Library" },
    { icon: Shuffle, label: "Prompt vs Result" },
    { icon: Palette, label: "LUT Presets" },
    { icon: Compass, label: "Explore" },
    { icon: User, label: "Account" },
    { icon: HelpCircle, label: "Support" },
  ]

  const trendingPrompts = [
    "Warm cinematic sunset",
    "Cyberpunk neon vibes",
    "Vintage film grain",
    "Moody noir aesthetic",
  ]

  const lutPresets = [
    { name: "Cinematic Gold", strength: 85, color: "from-yellow-500 to-orange-600" },
    { name: "Cyberpunk Neon", strength: 90, color: "from-purple-500 to-pink-500" },
    { name: "Vintage Film", strength: 70, color: "from-orange-500 to-red-500" },
    { name: "Moody Blue", strength: 80, color: "from-blue-500 to-indigo-600" },
  ]

  const colorAdjustments = [
    { label: "Exposure", value: 0, min: -100, max: 100 },
    { label: "Contrast", value: 25, min: -100, max: 100 },
    { label: "Highlights", value: -15, min: -100, max: 100 },
    { label: "Shadows", value: 10, min: -100, max: 100 },
    { label: "Saturation", value: 20, min: -100, max: 100 },
    { label: "Temperature", value: 5, min: -100, max: 100 },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white lg:hidden">
            <Menu className="h-4 w-4" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-purple-500 to-emerald-400" />
            <span className="font-bold text-lg">ColorGrade.io</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hidden sm:flex">
            Install App
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hidden sm:flex">
            Go Pro
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback className="bg-gray-700">CG</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-gray-900 border-gray-700" align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Left Sidebar */}
        <aside className="w-64 border-r border-gray-800 bg-gray-900/20 hidden lg:block">
          <div className="p-4">
            <nav className="space-y-2">
              {sidebarItems.map((item, index) => (
                <Button
                  key={index}
                  variant={item.active ? "secondary" : "ghost"}
                  className={`w-full justify-start ${
                    item.active
                      ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col bg-gray-950">
          {hasMedia ? (
            <>
              {/* Image Display Area */}
              <div className="flex-1 flex items-center justify-center p-8">
                <div className="relative max-w-4xl w-full">
                  <div className="aspect-[4/5] bg-gray-900 rounded-lg overflow-hidden relative">
                    {/* Sample portrait image */}
                    <img
                      src="/placeholder.svg?height=600&width=480"
                      alt="Portrait"
                      className="w-full h-full object-cover"
                    />
                    {showOriginal && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-black/80 text-white border-gray-600">Original</Badge>
                      </div>
                    )}
                  </div>

                  {/* Bottom controls */}
                  <div className="flex items-center justify-center mt-4 space-x-2">
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <span className="text-sm text-gray-500">40%</span>
                  </div>
                </div>
              </div>

              {/* AI Prompt Section - Centered below image */}
              <div className="border-t border-gray-800 p-6 bg-gray-900/30">
                <div className="max-w-2xl mx-auto">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardContent className="p-4 space-y-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Wand2 className="h-4 w-4 text-purple-400" />
                        <span className="text-sm font-medium text-purple-400">AI Color Grading</span>
                      </div>

                      <Textarea
                        placeholder="Describe your desired look... e.g., 'Warm cinematic portrait with golden highlights'"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="bg-gray-900/50 border-gray-600 resize-none text-sm"
                        rows={2}
                      />

                      <div className="flex space-x-2">
                        <Button className="flex-1 bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-700 hover:to-emerald-600 h-9">
                          <Sparkles className="h-4 w-4 mr-2" />
                          Generate Look
                        </Button>
                        <Button variant="outline" className="border-gray-600 h-9">
                          <TrendingUp className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Trending prompts */}
                      <div className="flex flex-wrap gap-1">
                        {trendingPrompts.map((trendingPrompt, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            size="sm"
                            className="text-xs h-6 px-2 text-gray-400 hover:text-white hover:bg-gray-700"
                            onClick={() => setPrompt(trendingPrompt)}
                          >
                            {trendingPrompt}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Bottom Timeline */}
              <div className="border-t border-gray-800 p-4 bg-gray-900/20">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <SkipBack className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-gray-400 hover:text-white"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <SkipForward className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex-1 h-1 bg-gray-700 rounded-full relative">
                    <div className="h-full w-1/3 bg-gradient-to-r from-purple-500 to-emerald-400 rounded-full" />
                  </div>

                  <span className="text-xs text-gray-500">0:15 / 0:45</span>

                  <div className="flex space-x-1">
                    <Button size="sm" variant="outline" className="border-gray-600 h-7 px-2 text-xs">
                      <Video className="h-3 w-3 mr-1" />
                      9:16
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-600 h-7 px-2 text-xs">
                      <Camera className="h-3 w-3 mr-1" />
                      1:1
                    </Button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Empty State */
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="h-24 w-24 mx-auto rounded-full bg-gray-800 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-gray-500" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-medium text-gray-300">No project open</h2>
                  <p className="text-gray-500">Upload an image or video to start creating</p>
                </div>
                <div className="flex space-x-3 justify-center">
                  <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setHasMedia(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Project
                  </Button>
                  <Button variant="outline" className="border-gray-600 hover:bg-gray-800">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Media
                  </Button>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Right Sidebar - Advanced Controls */}
        <aside className="w-80 border-l border-gray-800 bg-gray-900/20 hidden xl:block">
          <div className="p-4 h-full overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Settings className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">Presets</span>
              </div>
              <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                sRGB
              </Badge>
            </div>

            {/* Tools */}
            <div className="space-y-1 mb-6">
              <Button
                variant="ghost"
                className="w-full justify-start h-8 bg-purple-500/20 text-purple-400 border border-purple-500/30"
              >
                <Wand2 className="h-4 w-4 mr-3" />
                AI Prompt
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-8 text-gray-400 hover:text-white hover:bg-gray-800/50"
              >
                <Palette className="h-4 w-4 mr-3" />
                Color Match
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-8 text-gray-400 hover:text-white hover:bg-gray-800/50"
              >
                <Sliders className="h-4 w-4 mr-3" />
                Balance
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-8 text-gray-400 hover:text-white hover:bg-gray-800/50"
              >
                <Sun className="h-4 w-4 mr-3" />
                Exposure Curve
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-8 text-gray-400 hover:text-white hover:bg-gray-800/50"
              >
                <Contrast className="h-4 w-4 mr-3" />
                Contrast Curve
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-8 text-gray-400 hover:text-white hover:bg-gray-800/50"
              >
                <Zap className="h-4 w-4 mr-3" />
                Scattering
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-8 text-gray-400 hover:text-white hover:bg-gray-800/50"
              >
                <RotateCcw className="h-4 w-4 mr-3" />
                Refraction
              </Button>
            </div>

            {/* LUT Strength */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">LUT Strength</span>
                <span className="text-white">{lutStrength[0]}%</span>
              </div>
              <Slider value={lutStrength} onValueChange={setLutStrength} max={100} step={1} className="w-full" />
            </div>

            {/* Color Wheels */}
            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                {/* Color Wheel 1 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>C</span>
                    <span>H: 0°</span>
                    <span>S: 100%</span>
                  </div>
                  <div className="relative h-24 w-24 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-conic from-red-500 via-yellow-500 via-green-500 via-cyan-500 via-blue-500 via-purple-500 to-red-500" />
                    <div className="absolute inset-2 rounded-full bg-black" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full border border-gray-800" />
                  </div>
                </div>

                {/* Color Wheel 2 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>H</span>
                    <span>H: 0°</span>
                    <span>S: 100%</span>
                  </div>
                  <div className="relative h-24 w-24 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-conic from-red-500 via-yellow-500 via-green-500 via-cyan-500 via-blue-500 via-purple-500 to-red-500" />
                    <div className="absolute inset-2 rounded-full bg-black" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full border border-gray-800" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant={showOriginal ? "secondary" : "outline"}
                onClick={() => setShowOriginal(!showOriginal)}
                className="flex-1 border-gray-600 h-8"
              >
                <Eye className="h-3 w-3 mr-1" />
                {showOriginal ? "Hide" : "Show"}
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 h-8">
                <Share2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
