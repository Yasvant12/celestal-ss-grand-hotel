"use client";

import { useState } from "react";
import {
  Building2,
  Layers,
  Compass,
  CalendarDays,
  Info,
  CheckCircle,
  X,
} from "lucide-react";

type VenueType = "astor" | "crystal";
type ViewMode = "2d" | "3d";
type LayoutPreset = "banquet" | "theater" | "classroom" | "reception";

interface HotspotDetail {
  id: string;
  number: number;
  title: string;
  desc: string;
}

const HOTSPOTS: Record<string, HotspotDetail> = {
  stage: {
    id: "stage",
    number: 1,
    title: "Zone 1: Main Stage & Scenography Rigging",
    desc: "32 ft. × 16 ft. modular performance stage with integrated line-array audio and HD LED backdrop wall.",
  },
  foyer: {
    id: "foyer",
    number: 2,
    title: "Zone 2: Pre-Function Foyer & Arrival Lobby",
    desc: "1,200 sq. ft. welcoming foyer with high-speed elevator arrivals and dedicated guest registration desk.",
  },
  bridal: {
    id: "bridal",
    number: 3,
    title: "Zone 3: Bridal & VIP Green Room",
    desc: "Private air-conditioned green room with full-length vanity mirrors, secure wardrobes, and direct stage access.",
  },
  culinary: {
    id: "culinary",
    number: 4,
    title: "Zone 4: Live Gourmet & Artisanal Buffet Line",
    desc: "80 ft. linear presentation bay featuring live chef counters, induction heating wells, and acoustic dampening.",
  },
  av: {
    id: "av",
    number: 5,
    title: "Zone 5: Master AV & Lighting Console Booth",
    desc: "Centralized control for acoustic line-arrays, dynamic ambient mood presets, and stage follow-spots.",
  },
};

export function BanquetFloorPlanViewer() {
  const [activeVenue, setActiveVenue] = useState<VenueType>("astor");
  const [viewMode, setViewMode] = useState<ViewMode>("2d");
  const [activeLayout, setActiveLayout] = useState<LayoutPreset>("banquet");
  const [activeHotspot, setActiveHotspot] = useState<HotspotDetail | null>(null);

  const getMetrics = () => {
    switch (activeLayout) {
      case "theater":
        return {
          capacity: "450 Guests",
          type: "Theater / Auditorium Setup",
        };
      case "classroom":
        return {
          capacity: "200 Delegates",
          type: "Classroom / Conference Setup",
        };
      case "reception":
        return {
          capacity: "500 Floating",
          type: "Cocktail Lounge & Standing Reception",
        };
      case "banquet":
      default:
        return {
          capacity: "280 Seated",
          type: "Banquet Round Tables (Cluster)",
        };
    }
  };

  const metrics = getMetrics();

  return (
    <section
      className="w-full bg-noir-charcoal text-on-primary py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      id="floorplan-viewer-section"
    >
      {/* Ambient background bloom */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-primary blur-[150px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-gold-metallic blur-[140px]" />
      </div>

      <div className="relative z-10 site-container flex flex-col gap-8 sm:gap-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-2">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-primary-fixed-dim" />
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-[0.26em] text-primary-fixed-dim">
              Architectural Spatial Planning
            </span>
            <span className="w-6 h-[2px] bg-primary-fixed-dim" />
          </div>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-on-primary">
            Interactive Banquet Floor Plan &amp; Layout Viewer
          </h2>
          <p className="font-body-md text-body-md text-secondary-fixed max-w-2xl pt-1">
            Explore spatial flows, seating capacities, and custom configurations for both grand halls in dynamic 2D Architectural Blueprint and isometric 3D Perspective views.
          </p>
        </div>

        {/* Floor & Mode Selectors Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-surface-container/10 p-3 sm:p-4 rounded-2xl backdrop-blur-md border border-white/10">
          {/* Hall Selection */}
          <div className="flex flex-wrap items-center gap-2 bg-noir-charcoal/80 p-1.5 rounded-xl border border-white/5">
            <button
              type="button"
              onClick={() => setActiveVenue("astor")}
              className={`font-label-button text-xs sm:text-label-button uppercase px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 font-semibold ${
                activeVenue === "astor"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "text-secondary-fixed hover:text-on-primary"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>1st Floor Banquet Space (5,250 sq. ft.)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveVenue("crystal")}
              className={`font-label-button text-xs sm:text-label-button uppercase px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 font-semibold ${
                activeVenue === "crystal"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "text-secondary-fixed hover:text-on-primary"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>2nd Floor Banquet Space (5,250 sq. ft.)</span>
            </button>
          </div>

          {/* 2D vs 3D Mode */}
          <div className="flex items-center gap-3 justify-between lg:justify-end flex-wrap">
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-secondary-fixed text-xs font-bold">
              View Mode:
            </span>
            <div className="inline-flex p-1 bg-noir-charcoal/90 rounded-xl border border-white/5">
              <button
                type="button"
                onClick={() => setViewMode("2d")}
                className={`font-label-compact text-xs uppercase px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 font-semibold ${
                  viewMode === "2d"
                    ? "bg-primary text-on-primary"
                    : "text-secondary-fixed hover:text-on-primary"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>2D Blueprint</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("3d")}
                className={`font-label-compact text-xs uppercase px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 font-semibold ${
                  viewMode === "3d"
                    ? "bg-primary text-on-primary"
                    : "text-secondary-fixed hover:text-on-primary"
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>3D Isometric</span>
              </button>
            </div>
          </div>
        </div>

        {/* Seating Presets Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-primary-fixed-dim tracking-wider mr-1 text-xs font-bold">
            Seating Preset:
          </span>
          <button
            type="button"
            onClick={() => setActiveLayout("banquet")}
            className={`font-label-compact text-xs px-4 py-2 rounded-xl transition-all font-semibold ${
              activeLayout === "banquet"
                ? "bg-primary text-on-primary shadow-md"
                : "bg-surface-container/20 text-secondary-fixed hover:bg-surface-container/30 hover:text-on-primary"
            }`}
          >
            Banquet Round Tables (280 Guests)
          </button>
          <button
            type="button"
            onClick={() => setActiveLayout("theater")}
            className={`font-label-compact text-xs px-4 py-2 rounded-xl transition-all font-semibold ${
              activeLayout === "theater"
                ? "bg-primary text-on-primary shadow-md"
                : "bg-surface-container/20 text-secondary-fixed hover:bg-surface-container/30 hover:text-on-primary"
            }`}
          >
            Theater / Auditorium (450 Guests)
          </button>
          <button
            type="button"
            onClick={() => setActiveLayout("classroom")}
            className={`font-label-compact text-xs px-4 py-2 rounded-xl transition-all font-semibold ${
              activeLayout === "classroom"
                ? "bg-primary text-on-primary shadow-md"
                : "bg-surface-container/20 text-secondary-fixed hover:bg-surface-container/30 hover:text-on-primary"
            }`}
          >
            Classroom / Conference (200 Delegates)
          </button>
          <button
            type="button"
            onClick={() => setActiveLayout("reception")}
            className={`font-label-compact text-xs px-4 py-2 rounded-xl transition-all font-semibold ${
              activeLayout === "reception"
                ? "bg-primary text-on-primary shadow-md"
                : "bg-surface-container/20 text-secondary-fixed hover:bg-surface-container/30 hover:text-on-primary"
            }`}
          >
            Reception &amp; Cocktail Lounge (500 Floating)
          </button>
        </div>

        {/* CAD Blueprint Frame */}
        <div className="relative bg-[#0b101b] rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 lg:p-8 border border-surface-container/20">
          {/* Metadata Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-surface-container/20">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <span className="font-label-compact text-label-compact font-semibold text-on-primary">
                  {activeVenue === "astor"
                    ? "Banquet Space • 1st Floor"
                    : "Banquet Space • 2nd Floor"}
                </span>
              </div>
              <span className="text-surface-container/40 hidden sm:inline">|</span>
              <span className="font-label-compact text-label-compact text-primary-fixed-dim hidden sm:inline">
                Preset: {metrics.type}
              </span>
            </div>

            <div className="flex items-center gap-4 text-[12px] font-label-compact text-secondary-fixed">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-metallic" />
                <span>Selected Zone</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                <span>Primary Egress / Fire Safe</span>
              </div>
            </div>
          </div>

          {/* SVG CAD Canvas Viewport */}
          <div className="relative w-full h-[460px] lg:h-[520px] my-4 bg-[#070c14] rounded-xl overflow-hidden flex items-center justify-center p-3 border border-stone-800">
            {/* Engineering Grid Background */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(179,135,40,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(179,135,40,0.15) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Architectural Badges */}
            <div className="absolute top-3 left-4 bg-noir-charcoal/90 px-3 py-1 rounded-md font-eyebrow-luxury text-[10px] tracking-widest text-primary-fixed-dim pointer-events-none z-20 border border-white/5">
              SPAN: 105 FT. (L) × 50 FT. (W) • {activeVenue === "astor" ? "18 FT." : "16.5 FT."} CLEAR HEIGHT • PILLARLESS
            </div>
            <div className="absolute top-3 right-4 bg-noir-charcoal/90 px-3 py-1 rounded-md font-eyebrow-luxury text-[10px] tracking-widest text-secondary-fixed pointer-events-none z-20 border border-white/5">
              SCALE: 1:120 ARCHITECTURAL CAD
            </div>

            {/* SVG Renderer with optional 3D Isometric Transform */}
            <div
              className="w-full h-full flex items-center justify-center transition-all duration-700 ease-out"
              style={{
                transform:
                  viewMode === "3d"
                    ? "perspective(900px) rotateX(24deg) scale(0.92)"
                    : "none",
                transformOrigin: "center center",
              }}
            >
              <svg
                viewBox="0 0 960 480"
                className="w-full h-full max-h-[460px] select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="stageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B38728" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#7A5508" stopOpacity="0.95" />
                  </linearGradient>
                  <linearGradient id="foyerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1f293d" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#111827" stopOpacity="0.95" />
                  </linearGradient>
                  <pattern id="cadGrid" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="rgba(232, 211, 162, 0.12)" />
                  </pattern>
                </defs>

                {/* Outer Room Boundaries */}
                <rect
                  x="20"
                  y="20"
                  width="920"
                  height="440"
                  rx="8"
                  fill="#070c14"
                  stroke="rgba(179,135,40,0.4)"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />
                <rect x="22" y="22" width="916" height="436" fill="url(#cadGrid)" />

                {/* Left: Pre-Function Foyer */}
                <rect
                  x="22"
                  y="22"
                  width="150"
                  height="436"
                  rx="6"
                  fill="url(#foyerGrad)"
                  stroke="#374151"
                  strokeWidth="1.5"
                />
                <text
                  x="97"
                  y="60"
                  textAnchor="middle"
                  fill="#E8D3A2"
                  fontSize="11"
                  fontFamily="Plus Jakarta Sans"
                  fontWeight="600"
                  letterSpacing="1.5"
                >
                  PRE-FUNCTION
                </text>
                <text
                  x="97"
                  y="78"
                  textAnchor="middle"
                  fill="#9CA3AF"
                  fontSize="10"
                  fontFamily="Plus Jakarta Sans"
                >
                  FOYER (1,200 SQ FT)
                </text>

                {/* Elevator Bay */}
                <rect
                  x="37"
                  y="100"
                  width="120"
                  height="70"
                  rx="4"
                  fill="#111827"
                  stroke="#4B5563"
                  strokeDasharray="2 2"
                />
                <text
                  x="97"
                  y="132"
                  textAnchor="middle"
                  fill="#D1D5DB"
                  fontSize="10"
                  fontFamily="Plus Jakarta Sans"
                  fontWeight="600"
                >
                  ELEVATOR BAY
                </text>
                <text
                  x="97"
                  y="148"
                  textAnchor="middle"
                  fill="#9CA3AF"
                  fontSize="9"
                  fontFamily="Plus Jakarta Sans"
                >
                  3× High Speed Cars
                </text>

                {/* Bridal Green Room */}
                <rect
                  x="37"
                  y="185"
                  width="120"
                  height="60"
                  rx="4"
                  fill="#1e293b"
                  stroke="rgba(179,135,40,0.5)"
                />
                <text
                  x="97"
                  y="212"
                  textAnchor="middle"
                  fill="#F0BE6C"
                  fontSize="10"
                  fontFamily="Plus Jakarta Sans"
                  fontWeight="600"
                >
                  BRIDAL GREEN ROOM
                </text>
                <text
                  x="97"
                  y="228"
                  textAnchor="middle"
                  fill="#9CA3AF"
                  fontSize="9"
                  fontFamily="Plus Jakarta Sans"
                >
                  Direct Green Room
                </text>

                {/* Welcome Desk */}
                <rect
                  x="37"
                  y="260"
                  width="120"
                  height="90"
                  rx="4"
                  fill="#111827"
                  stroke="#374151"
                />
                <text
                  x="97"
                  y="295"
                  textAnchor="middle"
                  fill="#E8D3A2"
                  fontSize="10"
                  fontFamily="Plus Jakarta Sans"
                  fontWeight="600"
                >
                  WELCOME RECEPTION
                </text>
                <text
                  x="97"
                  y="312"
                  textAnchor="middle"
                  fill="#9CA3AF"
                  fontSize="9"
                  fontFamily="Plus Jakarta Sans"
                >
                  &amp; Registration Desk
                </text>

                {/* Main Guest Entry */}
                <g className="cursor-pointer">
                  <rect
                    x="37"
                    y="370"
                    width="120"
                    height="28"
                    rx="3"
                    fill="rgba(37,211,102,0.15)"
                    stroke="#25D366"
                    strokeWidth="1.5"
                  />
                  <text
                    x="97"
                    y="388"
                    textAnchor="middle"
                    fill="#25D366"
                    fontSize="10"
                    fontWeight="600"
                    fontFamily="Plus Jakarta Sans"
                  >
                    MAIN GUEST ENTRY ➔
                  </text>
                </g>

                {/* Right: Stage & Rigging */}
                <rect
                  x="825"
                  y="110"
                  width="100"
                  height="260"
                  rx="6"
                  fill="url(#stageGrad)"
                  stroke="#E8D3A2"
                  strokeWidth="1.5"
                />
                <text
                  x="875"
                  y="220"
                  textAnchor="middle"
                  transform="rotate(90 875 220)"
                  fill="#FFFFFF"
                  fontSize="13"
                  fontWeight="600"
                  fontFamily="Playfair Display"
                  letterSpacing="1"
                >
                  MAIN STAGE &amp; RIGGING
                </text>
                <text
                  x="892"
                  y="220"
                  textAnchor="middle"
                  transform="rotate(90 892 220)"
                  fill="#FFE8B3"
                  fontSize="9"
                  fontFamily="Plus Jakarta Sans"
                >
                  32 FT × 16 FT • HD LED BACKDROP
                </text>

                {/* Dance Aisle / VIP Runway */}
                <rect
                  x="775"
                  y="110"
                  width="40"
                  height="260"
                  rx="3"
                  fill="rgba(122,85,8,0.3)"
                  stroke="rgba(240,190,108,0.5)"
                  strokeDasharray="3 3"
                />
                <text
                  x="795"
                  y="240"
                  textAnchor="middle"
                  transform="rotate(90 795 240)"
                  fill="#F0BE6C"
                  fontSize="9"
                  fontFamily="Plus Jakarta Sans"
                  fontWeight="600"
                >
                  DANCE AISLE / VIP RUNWAY
                </text>

                {/* AV Console Booth */}
                <rect
                  x="815"
                  y="35"
                  width="120"
                  height="35"
                  rx="4"
                  fill="#1e293b"
                  stroke="#3b82f6"
                  strokeWidth="1"
                />
                <text
                  x="875"
                  y="56"
                  textAnchor="middle"
                  fill="#93c5fd"
                  fontSize="9"
                  fontWeight="600"
                  fontFamily="Plus Jakarta Sans"
                >
                  AV &amp; CONSOLE BOOTH
                </text>

                {/* Emergency Exit */}
                <rect
                  x="830"
                  y="390"
                  width="90"
                  height="30"
                  rx="3"
                  fill="rgba(37,211,102,0.15)"
                  stroke="#25D366"
                />
                <text
                  x="875"
                  y="410"
                  textAnchor="middle"
                  fill="#25D366"
                  fontSize="9"
                  fontWeight="600"
                  fontFamily="Plus Jakarta Sans"
                >
                  EMERGENCY EXIT
                </text>

                {/* Culinary Buffet Line (Top) */}
                <rect
                  x="190"
                  y="32"
                  width="560"
                  height="32"
                  rx="4"
                  fill="#1c1917"
                  stroke="rgba(179,135,40,0.5)"
                />
                <text
                  x="470"
                  y="52"
                  textAnchor="middle"
                  fill="#F0BE6C"
                  fontSize="10"
                  fontWeight="600"
                  letterSpacing="1"
                  fontFamily="Plus Jakarta Sans"
                >
                  LIVE GOURMET COUNTERS &amp; ARTISANAL BUFFET LINE (80 FT)
                </text>

                {/* Acoustic Array (Bottom) */}
                <rect
                  x="190"
                  y="422"
                  width="560"
                  height="26"
                  rx="3"
                  fill="rgba(179,135,40,0.1)"
                  stroke="rgba(179,135,40,0.3)"
                />
                <text
                  x="470"
                  y="439"
                  textAnchor="middle"
                  fill="#D1D5DB"
                  fontSize="9"
                  fontFamily="Plus Jakarta Sans"
                >
                  ACOUSTIC ABSORPTION CURTAIN ARRAY &amp; AMBIENT SCONCES
                </text>

                {/* DYNAMIC SEATING CONFIGURATIONS */}
                {/* 1. Banquet Round Tables */}
                {activeLayout === "banquet" && (
                  <g id="layout-banquet">
                    {[
                      [240, 130], [330, 130], [420, 130], [510, 130], [600, 130], [690, 130],
                      [240, 210], [330, 210], [420, 210], [510, 210], [600, 210], [690, 210],
                      [240, 290], [330, 290], [420, 290], [510, 290], [600, 290], [690, 290],
                      [240, 370], [330, 370], [420, 370], [510, 370], [600, 370], [690, 370],
                    ].map(([cx, cy], i) => (
                      <g key={i}>
                        {/* Table */}
                        <circle cx={cx} cy={cy} r="18" fill="#2d2417" stroke="#DEC384" strokeWidth="1.5" />
                        <text
                          x={cx}
                          y={cy + 3}
                          textAnchor="middle"
                          fill="#DEC384"
                          fontSize="8"
                          fontFamily="Plus Jakarta Sans"
                          fontWeight="600"
                        >
                          T{i + 1}
                        </text>
                        {/* 8 Chairs */}
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, k) => {
                          const rad = (angle * Math.PI) / 180;
                          const chairX = cx + Math.cos(rad) * 25;
                          const chairY = cy + Math.sin(rad) * 25;
                          return (
                            <circle
                              key={k}
                              cx={chairX}
                              cy={chairY}
                              r="3.5"
                              fill="#CFA854"
                              opacity="0.85"
                            />
                          );
                        })}
                      </g>
                    ))}
                  </g>
                )}

                {/* 2. Theater / Auditorium Rows */}
                {activeLayout === "theater" && (
                  <g id="layout-theater">
                    {[110, 140, 170, 200, 230, 260, 290, 320, 350, 380].map((y, rowIdx) => (
                      <g key={rowIdx}>
                        {/* Left block of seats */}
                        <rect
                          x="220"
                          y={y}
                          width="220"
                          height="14"
                          rx="2"
                          fill="#1e293b"
                          stroke="#CFA854"
                          strokeWidth="0.8"
                        />
                        {/* Center walkway: 440 to 480 */}
                        {/* Right block of seats */}
                        <rect
                          x="480"
                          y={y}
                          width="240"
                          height="14"
                          rx="2"
                          fill="#1e293b"
                          stroke="#CFA854"
                          strokeWidth="0.8"
                        />
                      </g>
                    ))}
                    <text
                      x="460"
                      y="250"
                      textAnchor="middle"
                      fill="#DEC384"
                      fontSize="9"
                      fontFamily="Plus Jakarta Sans"
                      letterSpacing="2"
                      transform="rotate(90 460 250)"
                    >
                      CENTRAL AISLE
                    </text>
                  </g>
                )}

                {/* 3. Classroom Desks */}
                {activeLayout === "classroom" && (
                  <g id="layout-classroom">
                    {[120, 170, 220, 270, 320, 370].map((y, rowIdx) => (
                      <g key={rowIdx}>
                        <rect
                          x="220"
                          y={y}
                          width="210"
                          height="20"
                          rx="3"
                          fill="#2d2417"
                          stroke="#CFA854"
                          strokeWidth="1"
                        />
                        <rect
                          x="490"
                          y={y}
                          width="210"
                          height="20"
                          rx="3"
                          fill="#2d2417"
                          stroke="#CFA854"
                          strokeWidth="1"
                        />
                        <text
                          x="325"
                          y={y + 13}
                          textAnchor="middle"
                          fill="#FFE8B3"
                          fontSize="8"
                          fontFamily="Plus Jakarta Sans"
                        >
                          DELEGATE DESK ROW {rowIdx + 1}A
                        </text>
                        <text
                          x="595"
                          y={y + 13}
                          textAnchor="middle"
                          fill="#FFE8B3"
                          fontSize="8"
                          fontFamily="Plus Jakarta Sans"
                        >
                          DELEGATE DESK ROW {rowIdx + 1}B
                        </text>
                      </g>
                    ))}
                  </g>
                )}

                {/* 4. Reception & Cocktail Lounge */}
                {activeLayout === "reception" && (
                  <g id="layout-reception">
                    {/* High-top cocktail tables */}
                    {[
                      [250, 130], [370, 130], [500, 130], [630, 130],
                      [310, 200], [440, 200], [570, 200],
                      [250, 270], [370, 270], [500, 270], [630, 270],
                      [310, 340], [440, 340], [570, 340],
                    ].map(([cx, cy], i) => (
                      <g key={i}>
                        <circle cx={cx} cy={cy} r="12" fill="#B38728" opacity="0.9" />
                        <circle cx={cx} cy={cy} r="18" fill="none" stroke="#E8D3A2" strokeWidth="0.8" strokeDasharray="2 2" />
                      </g>
                    ))}
                    {/* Lounge seating pods */}
                    <rect x="220" y="380" width="160" height="30" rx="8" fill="#1e293b" stroke="#DEC384" />
                    <text x="300" y="398" textAnchor="middle" fill="#DEC384" fontSize="8" fontFamily="Plus Jakarta Sans">
                      VIP LOUNGE POD A
                    </text>
                    <rect x="520" y="380" width="160" height="30" rx="8" fill="#1e293b" stroke="#DEC384" />
                    <text x="600" y="398" textAnchor="middle" fill="#DEC384" fontSize="8" fontFamily="Plus Jakarta Sans">
                      VIP LOUNGE POD B
                    </text>
                  </g>
                )}

                {/* Numbered Hotspot Markers (1-5) */}
                {/* 1: Stage */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setActiveHotspot(HOTSPOTS.stage)}
                  transform="translate(875, 140)"
                >
                  <circle r="12" fill="#F0BE6C" opacity="0.4" className="animate-ping" />
                  <circle r="9" fill="#B38728" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text y="3" textAnchor="middle" fill="#111827" fontSize="9" fontWeight="bold" fontFamily="Plus Jakarta Sans">
                    1
                  </text>
                </g>

                {/* 2: Foyer */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setActiveHotspot(HOTSPOTS.foyer)}
                  transform="translate(97, 85)"
                >
                  <circle r="9" fill="#B38728" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text y="3" textAnchor="middle" fill="#111827" fontSize="9" fontWeight="bold" fontFamily="Plus Jakarta Sans">
                    2
                  </text>
                </g>

                {/* 3: Bridal */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setActiveHotspot(HOTSPOTS.bridal)}
                  transform="translate(97, 195)"
                >
                  <circle r="9" fill="#B38728" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text y="3" textAnchor="middle" fill="#111827" fontSize="9" fontWeight="bold" fontFamily="Plus Jakarta Sans">
                    3
                  </text>
                </g>

                {/* 4: Culinary */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setActiveHotspot(HOTSPOTS.culinary)}
                  transform="translate(470, 48)"
                >
                  <circle r="9" fill="#B38728" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text y="3" textAnchor="middle" fill="#111827" fontSize="9" fontWeight="bold" fontFamily="Plus Jakarta Sans">
                    4
                  </text>
                </g>

                {/* 5: AV Booth */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setActiveHotspot(HOTSPOTS.av)}
                  transform="translate(875, 52)"
                >
                  <circle r="9" fill="#3b82f6" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text y="3" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="Plus Jakarta Sans">
                    5
                  </text>
                </g>
              </svg>
            </div>

            {/* Hotspot Floating Information Bar */}
            <div className="absolute bottom-3 left-4 right-4 bg-noir-charcoal/95 border border-primary/40 p-3 sm:p-4 rounded-xl backdrop-blur-md flex items-center justify-between gap-3 text-xs text-secondary-fixed shadow-lg">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-primary-fixed-dim shrink-0" />
                {activeHotspot ? (
                  <div>
                    <span className="text-on-primary font-bold mr-2">{activeHotspot.title}:</span>
                    <span>{activeHotspot.desc}</span>
                  </div>
                ) : (
                  <div>
                    <span className="text-on-primary font-bold mr-2">Interactive Hotspots:</span>
                    <span>Click any numbered circle (1-5) on the layout to inspect zone details.</span>
                  </div>
                )}
              </div>
              {activeHotspot && (
                <button
                  type="button"
                  onClick={() => setActiveHotspot(null)}
                  className="text-primary-fixed-dim hover:text-on-primary text-[11px] uppercase font-bold shrink-0 p-1"
                  aria-label="Dismiss hotspot detail"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Metric Badges Grid Below Blueprint */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="bg-surface-container/10 p-4 rounded-xl border border-white/5 flex flex-col gap-1">
              <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-secondary-fixed text-[10px]">
                Total Clear Space
              </span>
              <span className="font-headline-sm text-lg sm:text-headline-sm text-primary-fixed-dim font-bold">
                5,250 sq. ft.
              </span>
              <span className="font-label-compact text-[11px] text-secondary-fixed">
                100% Pillarless
              </span>
            </div>

            <div className="bg-surface-container/10 p-4 rounded-xl border border-white/5 flex flex-col gap-1">
              <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-secondary-fixed text-[10px]">
                Seating Capacity
              </span>
              <span className="font-headline-sm text-lg sm:text-headline-sm text-primary-fixed-dim font-bold">
                {metrics.capacity}
              </span>
              <span className="font-label-compact text-[11px] text-secondary-fixed">
                {metrics.type}
              </span>
            </div>

            <div className="bg-surface-container/10 p-4 rounded-xl border border-white/5 flex flex-col gap-1">
              <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-secondary-fixed text-[10px]">
                Main Stage Spec
              </span>
              <span className="font-headline-sm text-lg sm:text-headline-sm text-primary-fixed-dim font-bold">
                32 ft × 16 ft
              </span>
              <span className="font-label-compact text-[11px] text-secondary-fixed">
                Modular Rigging Ready
              </span>
            </div>

            <div className="bg-surface-container/10 p-4 rounded-xl border border-white/5 flex flex-col gap-1">
              <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-secondary-fixed text-[10px]">
                Clearance Height
              </span>
              <span className="font-headline-sm text-lg sm:text-headline-sm text-primary-fixed-dim font-bold">
                {activeVenue === "astor" ? "18.0 ft." : "16.5 ft."}
              </span>
              <span className="font-label-compact text-[11px] text-secondary-fixed">
                Crystal Chandelier Truss
              </span>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-secondary-fixed font-body-sm text-body-sm">
            <CheckCircle className="w-5 h-5 text-primary-fixed-dim shrink-0" />
            <span>Need custom spatial zoning? Our CAD architect customizes floor layouts within 24 hours.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#enquiry-section"
              className="font-label-button text-label-button uppercase px-6 py-3 bg-primary text-on-primary hover:bg-gold-deep rounded-xl transition-all tracking-widest inline-flex items-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Book Layout Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
