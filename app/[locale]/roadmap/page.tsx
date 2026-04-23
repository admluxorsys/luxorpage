'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { LocateFixed } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const roadmapData = [
    {
        era: "Foundation",
        phases: [
            { id: 1, title: "Luxor Origin" },
            { id: 2, title: "Republic Core" },
            { id: 3, title: "Temple Horizon" },
            { id: 4, title: "Prominence Point" },
        ]
    },
    {
        era: "Construction",
        phases: [
            { id: 5, title: "Liberty Forge" },
            { id: 6, title: "Manhattan Engine" },
            { id: 7, title: "Gantry Prime" },
            { id: 8, title: "Ironclad Protocol" },
        ]
    },
    {
        era: "Activation",
        phases: [
            { id: 9, title: "Kinetic Flow" },
            { id: 10, title: "Potomac Pulse" },
            { id: 11, title: "Liberty Prime" },
            { id: 12, title: "Excelsior Rise" },
        ]
    },
    {
        era: "Expansion",
        phases: [
            { id: 13, title: "Vantage" },
            { id: 14, title: "Gran Colombia Axis" },
            { id: 15, title: "Tokyo Neon" },
            { id: 16, title: "Citadel Berlin" },
        ]
    },
    {
        era: "Dominance",
        phases: [
            { id: 17, title: "Turing Point" },
            { id: 18, title: "Olympus Protocol" },
            { id: 19, title: "Deep Space Network" },
            { id: 20, title: "Luxor Zenith" },
        ]
    },
    {
        era: "Future",
        phases: [
            { id: 21, title: "Tranquility Base" },
            { id: 22, title: "Meridian Unity" },
            { id: 23, title: "Event Horizon" },
        ]
    }
];

const eraDetails = [
    {
        tabLabel: "Era I",
        title: "The Birth and Foundation",
        subtitle: "The Idea",
        description: "This phase represents the origin in Salt Lake City and the establishment of legal and technical foundations.",
        phases: [
            { id: 1, name: "Luxor Origin", desc: "The starting point, the spark of the ecosystem." },
            { id: 2, name: "Republic Core", desc: "The creation of the fundamental structure and system values." },
            { id: 3, name: "Temple Horizon", desc: "The long-term vision from Utah, setting a lasting standard." },
            { id: 4, name: "Prominence Point", desc: "The connection point (like the railroad); where all ideas merge into a single execution plan." }
        ]
    },
    {
        tabLabel: "Era II",
        title: "The Forge and Materialization",
        subtitle: "The Construction",
        description: "This is where the code is written and hardware takes physical shape.",
        phases: [
            { id: 5, name: "Liberty Forge", desc: "The creation of tools and active software development." },
            { id: 6, name: "Manhattan Engine", desc: "Intensive development of power engineering (the engine of the Autonomous Administrator)." },
            { id: 7, name: "Gantry Prime", desc: "The support structure; having everything ready on the launch pad." },
            { id: 8, name: "Ironclad Protocol", desc: "System armor; impenetrable Rust security for the token and payments." }
        ]
    },
    {
        tabLabel: "Era III",
        title: "Traction and Vital Flow",
        subtitle: "The Financial Activation",
        description: "The system starts moving, USDX circulates, and the market feels the impact.",
        phases: [
            { id: 9, name: "Kinetic Flow", desc: "The beginning of real capital movement and automatic transactions." },
            { id: 10, name: "Potomac Pulse", desc: "The system acquires a steady rhythm of power and economic influence." },
            { id: 11, name: "Liberty Prime", desc: "The manifestation of user financial and operational freedom." },
            { id: 12, name: "Excelsior Rise", desc: "The unstoppable ascent; the project begins to stand out above any competition." }
        ]
    },
    {
        tabLabel: "Era IV",
        title: "Global Expansion and Connectivity",
        subtitle: "The Dominance",
        description: "The project steps out of its initial borders to connect global nodes.",
        phases: [
            { id: 13, name: "Vantage", desc: "A strategic vantage point where you dominate the entire landscape." },
            { id: 14, name: "Gran Colombia Axis", desc: "The union of markets and the strength of regional identity integrated into the world." },
            { id: 15, name: "Tokyo Neon", desc: "Aesthetic and cutting-edge technological integration (ideal for smart glasses deployment)." },
            { id: 16, name: "Citadel Berlin", desc: "The establishment of a resistance and cutting-edge tech node in the global heart." }
        ]
    },
    {
        tabLabel: "Era V",
        title: "The Technological Leap",
        subtitle: "The Singularity",
        description: "The phase where AI takes control of processes and the system becomes \"superhuman\".",
        phases: [
            { id: 17, name: "Turing Point", desc: "The moment when Business Manager autonomy is total and perfect." },
            { id: 18, name: "Olympus Protocol", desc: "The system operates at a higher level, setting its own rules of efficiency." },
            { id: 19, name: "Deep Space Network", desc: "Total and remote connectivity; the system works everywhere, frictionless." },
            { id: 20, name: "Luxor Zenith", desc: "The climax of the ecosystem; the highest point of brand light and value." }
        ]
    },
    {
        tabLabel: "Era VI",
        title: "The Unexplored Future",
        subtitle: "The Horizon",
        description: "Beyond commercial success, towards permanent historical impact.",
        phases: [
            { id: 21, name: "Tranquility Base", desc: "Landing on new territory; absolute peace and stability in the market." },
            { id: 22, name: "Meridian Unity", desc: "The entire world aligned under the same standard of efficiency and unity." },
            { id: 23, name: "Event Horizon", desc: "The future. The point where Luxor technology crosses the limits of the known to create a new business reality." }
        ]
    }
];

export default function RoadmapPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    // Valores iniciales exactos
    const initialScale = 0.7;
    const initialX = 8500;
    const initialY = 140;

    // Físicas puras, sin librerías externas que rompan las coordenadas
    const scale = useMotionValue(initialScale);
    const x = useMotionValue(initialX);
    const y = useMotionValue(initialY);

    const [zoomDisplay, setZoomDisplay] = useState(initialScale);
    const [activeEraTab, setActiveEraTab] = useState(0);
    const [activePhase, setActivePhase] = useState<number | null>(null);
    const miniMapDotX = useTransform(x, [-10000, 20000], ["100%", "0%"]);

    useEffect(() => {
        setIsMounted(true);
        // Suscripción de UI ligera para el display del porcentaje de zoom
        const unsubscribe = scale.onChange((s) => setZoomDisplay(s));
        return () => unsubscribe();
    }, [scale]);

    // Lógica principal de Pan & Zoom construida desde cero (Bulletproof)
    useEffect(() => {
        if (!isMounted) return;
        const container = containerRef.current;
        if (!container) return;

        let isDragging = false;
        let startClientX = 0;
        let startClientY = 0;
        let startX = 0;
        let startY = 0;

        // Soporte para Multi-touch (Pinch Zoom)
        let activePointers: { [id: number]: { x: number, y: number } } = {};
        let initialPinchDistance = 0;
        let initialPinchScale = 1;

        const onPointerDown = (e: PointerEvent) => {
            if ((e.target as HTMLElement).closest('button')) return;

            activePointers[e.pointerId] = { x: e.clientX, y: e.clientY };
            const pointerCount = Object.keys(activePointers).length;

            if (pointerCount === 1) {
                isDragging = true;
                startClientX = e.clientX;
                startClientY = e.clientY;
                startX = x.get();
                startY = y.get();
                container.style.cursor = 'grabbing';
            } else if (pointerCount === 2) {
                isDragging = false;
                const points = Object.values(activePointers);
                initialPinchDistance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
                initialPinchScale = scale.get();
            }
            
            container.setPointerCapture(e.pointerId);
        };

        const onPointerMove = (e: PointerEvent) => {
            activePointers[e.pointerId] = { x: e.clientX, y: e.clientY };
            const pointerCount = Object.keys(activePointers).length;

            if (pointerCount === 1 && isDragging) {
                const dx = e.clientX - startClientX;
                const dy = e.clientY - startClientY;
                x.set(startX + dx);
                y.set(startY + dy);
            } else if (pointerCount === 2) {
                const points = Object.values(activePointers);
                const currentDistance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
                
                if (initialPinchDistance > 0) {
                    const ratio = currentDistance / initialPinchDistance;
                    const newScale = Math.max(0.05, Math.min(3.0, initialPinchScale * ratio));
                    scale.set(newScale);
                }
            }
        };

        const onPointerUp = (e: PointerEvent) => {
            delete activePointers[e.pointerId];
            const pointerCount = Object.keys(activePointers).length;

            if (pointerCount < 2) {
                initialPinchDistance = 0;
            }

            if (pointerCount === 0) {
                isDragging = false;
                container.style.cursor = 'grab';
            }
            container.releasePointerCapture(e.pointerId);
        };

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            const rect = container.getBoundingClientRect();
            
            // Mouse relativo al centro
            const mouseX = e.clientX - rect.left - rect.width / 2;
            const mouseY = e.clientY - rect.top - rect.height / 2;

            const currentScale = scale.get();
            const zoomFactor = 1 + (-e.deltaY * 0.001); // Suavizado para trackpads/ratones
            const newScale = Math.max(0.05, Math.min(3.0, currentScale * zoomFactor));

            if (newScale !== currentScale) {
                const ratio = newScale / currentScale;
                // Compensa el origen del zoom para proyectar sobre el ratón sin "saltos"
                x.set(mouseX - (mouseX - x.get()) * ratio);
                y.set(mouseY - (mouseY - y.get()) * ratio);
                scale.set(newScale);
            }
        };

        container.addEventListener('pointerdown', onPointerDown, { passive: false });
        container.addEventListener('pointermove', onPointerMove, { passive: false });
        container.addEventListener('pointerup', onPointerUp, { passive: false });
        container.addEventListener('pointercancel', onPointerUp, { passive: false });
        container.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            container.removeEventListener('pointerdown', onPointerDown);
            container.removeEventListener('pointermove', onPointerMove);
            container.removeEventListener('pointerup', onPointerUp);
            container.removeEventListener('pointercancel', onPointerUp);
            container.removeEventListener('wheel', onWheel);
        };
    }, [isMounted, scale, x, y]);

    const handleRecenter = () => {
        x.set(initialX);
        y.set(initialY);
        scale.set(initialScale);
    };

    const phaseWidth = 1200;
    const totalPhases = roadmapData.reduce((acc, era) => acc + era.phases.length, 0);

    if (!isMounted) {
        return <div className="min-h-screen bg-[#050505]" />;
    }

    return (
        <div className="relative min-h-screen bg-[#050505] font-sans flex flex-col pt-0 pb-0 shadow-inner">
            <div className="w-full px-6 md:px-12 mx-auto relative z-20 flex-shrink-0 pt-24 pb-32 text-center max-w-[2000px] flex flex-col items-center justify-center pointer-events-none">
                <div className="flex flex-col items-center max-w-3xl pointer-events-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                        className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-4 text-white"
                    >
                        Our Roadmap
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="text-white/60 text-sm md:text-base font-medium tracking-wide mb-2 leading-relaxed"
                    >
                        Charting the strategic path we envision for our ecosystem, guiding the future of our Utility Tokens, Asset Tokens, Real World Assets, and Stablecoin.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                        className="text-blue-400/80 text-[9px] md:text-[10px] font-medium tracking-wide mt-4"
                    >
                        Drag anywhere to navigate • Scroll on a point to zoom into it
                    </motion.p>
                </div>
            </div>

            <div className="w-full px-4 md:px-10 mb-20 relative z-10">
                <div
                    ref={containerRef}
                    className="relative w-full h-[600px] md:h-[1100px] bg-[#020202] overflow-hidden cursor-grab rounded-[30px] md:rounded-[40px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] touch-none select-none"
                    style={{ WebkitUserSelect: 'none' }}
                >
                    {/* Contenedor que agrupa TODO nuestro diagrama. Aplicar variables X,Y y Scale aquí directamente */}
                    <motion.div
                        style={{ x, y, scale }}
                        className="absolute inset-0 flex items-center justify-center transform-gpu origin-center pointer-events-none z-10"
                    >
                        {/* La tira ancha con todas las fases */}
                        <div
                            className="relative h-full flex items-center justify-start origin-center px-[20vw] pointer-events-auto"
                            style={{ width: `${totalPhases * phaseWidth}px` }}
                        >
                            {/* Barra base (camino vacío) */}
                            <div className="absolute top-[90%] left-0 right-0 h-[6px] bg-blue-900/40 -translate-y-1/2 z-0 rounded-full" />
                            
                            {/* Barra LED de progreso (llena avanzando hacia Phase 5) */}
                            <div className="absolute top-[90%] left-0 w-[5000px] h-[12px] bg-blue-500 -translate-y-1/2 z-0 rounded-r-full shadow-[0_0_30px_8px_rgba(59,130,246,0.8),0_0_60px_rgba(59,130,246,0.5)] flex items-center justify-end">
                                {/* Cabezal de energía (punta brillante) */}
                                <div className="w-[160px] h-[16px] bg-cyan-200 rounded-full shadow-[0_0_40px_15px_rgba(34,211,238,0.9),0_0_80px_30px_rgba(59,130,246,0.8)] translate-x-1/2" />
                            </div>
                            <div className="w-full h-full flex items-center relative z-10">
                                {roadmapData.map((era, eraIndex) => (
                                    <div key={eraIndex} className="relative h-full flex flex-row" style={{ width: `${era.phases.length * phaseWidth}px` }}>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[1600px] pointer-events-none z-0">
                                            <span className="text-[80px] md:text-[140px] font-black tracking-[0.3em] uppercase text-white/5 whitespace-nowrap">
                                                {era.era}
                                            </span>
                                        </div>
                                        {era.phases.map((phase) => (
                                            <div key={phase.id} className="relative flex flex-col items-center justify-center h-full shrink-0 group pointer-events-none" style={{ width: `${phaseWidth}px` }}>

                                                {/* BLOQUES VISUALES EXACTAMENTE COMO LOS PEDISTE - MISMOS HEIGHTS, WIDTHS Y ASSETS */}

                                                {phase.id === 1 && (
                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[840px] pointer-events-none z-10 w-[800px] h-[800px] flex justify-center items-center">
                                                        <img
                                                            src="https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Energy%20Particles.gif?alt=media&token=8ada02f3-a24e-4fbb-8577-77be02dd6aa0"
                                                            alt="Energy Particles Luxor Origin"
                                                            className="w-full h-full object-contain mix-blend-screen opacity-90"
                                                        />
                                                    </div>
                                                )}

                                                {phase.id === 2 && (
                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[840px] pointer-events-none z-10 w-[750px] h-[750px] flex justify-center items-center">
                                                        <img
                                                            src="https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/numeros.gif?alt=media&token=ab5353ff-febd-4c63-b1aa-d341eaf4608a"
                                                            alt="Numbers Animation Republic Core"
                                                            className="w-full h-full object-contain mix-blend-screen opacity-90 rotate-[30deg] -scale-x-100"
                                                        />
                                                    </div>
                                                )}

                                                {phase.id === 3 && (
                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[840px] pointer-events-none z-10 w-[800px] h-[800px] flex justify-center items-center">
                                                        <img
                                                            src="https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Luxor%201.JPG?alt=media&token=4b0399e5-99df-4a33-9a51-db2818cf2ef2"
                                                            alt="Temple Horizon Stage New"
                                                            className="w-full h-full object-contain mix-blend-screen opacity-90"
                                                        />
                                                    </div>
                                                )}

                                                {phase.id === 4 && (
                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[850px] pointer-events-none z-10 flex flex-col items-center gap-12">
                                                        <div className="flex flex-col items-center gap-2">
                                                            <div className="w-[300px] h-[300px] shrink-0">
                                                                <img
                                                                    src="https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/12e8a6a547e317524121f7a5d6084036.gif?alt=media&token=e439d6d5-aec8-4d23-9b7b-28e61662abb1"
                                                                    className="w-full h-full object-contain mix-blend-screen opacity-90"
                                                                />
                                                            </div>
                                                            <span className="text-base md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 whitespace-nowrap">
                                                                Roosevelt
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-row gap-20 items-start">
                                                            <div className="flex flex-col items-center gap-2">
                                                                <div className="w-[300px] h-[300px] shrink-0">
                                                                    <img
                                                                        src="https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/lxr_logo%20(1).png?alt=media&token=0b476957-bdc9-49fd-9e0b-c3d9021a5bb8"
                                                                        className="w-full h-full object-contain mix-blend-screen opacity-90"
                                                                    />
                                                                </div>
                                                                <span className="text-sm md:text-base font-medium text-white/40 whitespace-nowrap">
                                                                    Utility token
                                                                </span>
                                                            </div>
                                                            <div className="flex flex-col items-center gap-2">
                                                                <div className="w-[300px] h-[300px] shrink-0">
                                                                    <img
                                                                        src="https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/IMG_5588.jpg?alt=media&token=03109bf0-f83e-4306-8b5f-433a8a50d3d5"
                                                                        className="w-full h-full object-contain mix-blend-screen opacity-90"
                                                                    />
                                                                </div>
                                                                <span className="text-sm md:text-base font-medium text-white/40 whitespace-nowrap">
                                                                    Luxor Pay
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {phase.id === 5 && (
                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[830px] pointer-events-none z-10 flex flex-col items-center gap-12">
                                                        <div className="flex flex-col items-center gap-8">
                                                            <div className="flex flex-col items-center">
                                                                <div className="w-[300px] h-[300px] shrink-0">
                                                                    <img
                                                                        src="https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/12e8a6a547e317524121f7a5d6084036.gif?alt=media&token=e439d6d5-aec8-4d23-9b7b-28e61662abb1"
                                                                        className="w-full h-full object-contain mix-blend-screen opacity-90"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-row gap-12">
                                                                <div className="w-[300px] h-[300px] shrink-0">
                                                                    <img
                                                                        src="https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/lxr_logo%20(1).png?alt=media&token=0b476957-bdc9-49fd-9e0b-c3d9021a5bb8"
                                                                        className="w-full h-full object-contain mix-blend-screen opacity-90"
                                                                    />
                                                                </div>
                                                                <div className="w-[300px] h-[300px] shrink-0">
                                                                    <img
                                                                        src="https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/IMG_5588.jpg?alt=media&token=03109bf0-f83e-4306-8b5f-433a8a50d3d5"
                                                                        className="w-full h-full object-contain mix-blend-screen opacity-90"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col justify-center gap-1 items-center text-center">
                                                            <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 whitespace-nowrap">
                                                                05/01/2026 - 05/30/2026
                                                            </span>
                                                            <span className="text-xs md:text-sm font-medium text-blue-400/60 tracking-wider whitespace-nowrap">
                                                                Launching and Deployment
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}

                                                {phase.id >= 6 && (
                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[1010px] pointer-events-none z-10 flex items-center justify-center">
                                                        <div className="relative w-[1100px] h-[1100px] flex items-center justify-center">
                                                            <img
                                                                src="https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/789d76cc056a142ddb518246972dc62c.gif?alt=media&token=200f5cbc-4e88-4acc-9c24-daef60bf69c1"
                                                                className="w-full h-full object-contain mix-blend-screen opacity-90"
                                                            />
                                                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-8xl font-normal text-cyan-200 drop-shadow-[0_0_30px_rgba(59,130,246,0.8)] whitespace-nowrap tracking-wider z-20">
                                                                Coming soon
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}

                                                <div className={`pointer-events-auto absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-4 rounded-full border-2 z-20 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap ${
                                                    phase.id <= 4 
                                                    ? 'bg-[#06142e] border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.8),inset_0_0_15px_rgba(59,130,246,0.5)] hover:border-cyan-300' 
                                                    : 'bg-black border-white/20 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]'
                                                }`}>
                                                    <span className={`text-sm md:text-base font-normal tracking-wide transition-colors ${
                                                        phase.id <= 4 ? 'text-cyan-50 font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-white/80'
                                                    }`}>
                                                        Phase {phase.title}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <div className="absolute left-0 top-0 bottom-0 w-[15vw] bg-gradient-to-r from-[#050505] to-transparent pointer-events-none z-20 opacity-80" />
                    <div className="absolute right-0 top-0 bottom-0 w-[15vw] bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-20 opacity-80" />

                    <div className="absolute right-8 bottom-8 flex gap-3 z-30 pointer-events-auto">
                        <button
                            onClick={handleRecenter}
                            className="w-[40px] h-[40px] flex items-center justify-center bg-black/80 hover:bg-blue-600/20 border border-white/10 hover:border-blue-400/50 rounded-full backdrop-blur-xl transition-all shadow-2xl group cursor-pointer"
                        >
                            <LocateFixed className="w-4 h-4 text-white/50 group-hover:text-blue-400 transition-colors" />
                        </button>
                        <div className="w-[160px] h-[40px] bg-black/80 border border-white/10 rounded-full backdrop-blur-xl pointer-events-none shadow-2xl flex items-center justify-center px-4 overflow-hidden">
                            <div className="w-full h-[2px] bg-white/10 rounded-full relative">
                                <motion.div
                                    style={{ left: miniMapDotX }}
                                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-8 bottom-8 px-4 py-2 bg-black/80 border border-white/10 rounded-full backdrop-blur-xl z-30 pointer-events-none shadow-2xl">
                        <span className="text-white/50 text-[10px] font-bold font-mono tracking-widest">{Math.round(zoomDisplay * 100)}% ZOOM</span>
                    </div>
                </div>
            </div>

            {/* Detalles de Eras y Fases (Sección Blanca Inferior) */}
            <div className="w-full bg-white text-black py-32 px-6 md:px-12 relative z-20 rounded-t-[60px] shadow-[0_-20px_50px_rgba(255,255,255,0.05)] mt-40">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
                    {/* Tabs de Eras */}
                    <div className="flex flex-wrap gap-4 justify-center">
                        {eraDetails.map((era, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setActiveEraTab(index);
                                    setActivePhase(null); // Resetea la selección de fase al cambiar de Era
                                }}
                                className={`px-6 py-3 rounded-full text-sm md:text-base font-normal transition-all duration-300 ${
                                    activeEraTab === index 
                                    ? 'bg-blue-600 text-white shadow-[0_10px_30px_rgba(37,99,235,0.4)] scale-105' 
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                }`}
                            >
                                {era.tabLabel}
                            </button>
                        ))}
                    </div>

                    {/* Contenido de la Era Seleccionada */}
                    <div className="flex flex-col items-center text-center gap-8 min-h-[400px]">
                        <motion.div 
                            key={activeEraTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full flex flex-col items-center gap-8"
                        >
                            <div className="max-w-4xl flex flex-col gap-4">
                                <span className="text-blue-500 font-medium tracking-widest uppercase text-sm md:text-base">
                                    {eraDetails[activeEraTab].subtitle}
                                </span>
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
                                    {eraDetails[activeEraTab].title}
                                </h2>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
                                    {eraDetails[activeEraTab].description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-10">
                                {eraDetails[activeEraTab].phases.map((phase) => (
                                    <div 
                                        key={phase.id} 
                                        onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
                                        className={`bg-gray-50 rounded-[30px] p-8 text-left border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer ${
                                            activePhase === phase.id ? 'border-blue-500 ring-4 ring-blue-500/20 scale-[1.02]' : 'border-gray-100'
                                        }`}
                                    >
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-normal text-xl mb-6 transition-colors ${
                                            activePhase === phase.id ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                                        }`}>
                                            {phase.id}
                                        </div>
                                        <h3 className="text-lg xl:text-xl font-normal text-gray-900 mb-3">
                                            Phase {phase.name}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm font-normal">
                                            {phase.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Panel Gigante de Detalles para la Fase Seleccionada */}
                            {activePhase && eraDetails[activeEraTab].phases.some(p => p.id === activePhase) && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="w-full mt-12 md:mt-16 p-6 md:p-16 bg-white rounded-[30px] md:rounded-[40px] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex flex-col items-center min-h-[600px] md:min-h-[800px] relative overflow-hidden"
                                >
                                    {/* Decoración sutil de fondo */}
                                    <div className="absolute top-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full pointer-events-none opacity-50" />
                                    
                                    <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">
                                        <span className="text-blue-500 text-xs md:text-sm font-bold tracking-widest uppercase mb-4">Phase {activePhase} Detail</span>
                                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 md:mb-12 tracking-tight">
                                            {eraDetails[activeEraTab].phases.find(p => p.id === activePhase)?.name}
                                        </h3>
                                        
                                        {/* Espacio reservado para el contenido */}
                                        <div className="w-full h-[300px] md:h-[500px] border-2 border-dashed border-gray-200 rounded-[24px] md:rounded-[30px] flex flex-col items-center justify-center text-gray-400 bg-gray-50/50 gap-4 p-6">
                                            <p className="text-lg md:text-xl font-medium">Contenido Extendido de la Fase</p>
                                            <p className="text-xs md:text-sm">Aquí insertaremos los párrafos largos, imágenes de demostración, renders o mockups.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                body {
                    overscroll-behavior-y: none;
                }
            `}</style>
        </div>
    );
}
