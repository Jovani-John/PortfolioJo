import React, { useState, useEffect } from "react";

// Custom icon components using SVG
const GithubIcon = ({ className = "", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalLinkIcon = ({ className = "", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15,3 21,3 21,9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const EyeIcon = ({ className = "", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const StarIcon = ({ className = "", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);

const SparkleIcon = ({ className = "", size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0l2.39 7.61L22 12l-7.61 2.39L12 22l-2.39-7.61L2 12l7.61-2.39L12 0z"/>
  </svg>
);

export default function Card({ 
  title, 
  img, 
  liveDemo, 
  repo, 
  description,
  tags = [],
  stats = { stars: 0, views: 0 }
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate floating sparkles on mount
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        size: 8 + Math.random() * 4
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      className="group relative flex flex-col h-full rounded-3xl border border-white/10 
                 bg-gradient-to-br from-white/10 via-white/5 to-white/5
                 backdrop-blur-xl overflow-hidden 
                 shadow-[0_8px_32px_rgba(0,0,0,0.12)] 
                 transition-all duration-700 ease-out
                 hover:-translate-y-3 hover:scale-[1.03]
                 hover:shadow-[0_25px_80px_rgba(59,130,246,0.25)]
                 hover:border-white/30
                 hover:rotate-1
                 before:absolute before:inset-0 before:rounded-3xl 
                 before:bg-gradient-to-br before:from-blue-500/20 before:via-purple-500/10 before:to-pink-500/20
                 before:opacity-0 before:transition-all before:duration-700
                 hover:before:opacity-100 hover:before:animate-pulse
                 after:absolute after:inset-0 after:rounded-3xl
                 after:bg-gradient-to-br after:from-transparent after:via-white/5 after:to-transparent
                 after:opacity-0 after:transition-opacity after:duration-500
                 hover:after:opacity-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        transform: isHovered ? `perspective(1000px) rotateX(${(mousePosition.y - 50) * 0.1}deg) rotateY(${(mousePosition.x - 50) * 0.1}deg)` : 'none'
      }}
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Dynamic light following mouse */}
      <div 
        className="absolute w-32 h-32 rounded-full bg-gradient-radial from-blue-400/20 via-purple-400/10 to-transparent 
                   opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none blur-xl"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Floating sparkles */}
      {isHovered && sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute pointer-events-none animate-bounce"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`
          }}
        >
          <SparkleIcon 
            size={sparkle.size} 
            className="text-blue-300/60 animate-spin" 
            style={{ animationDuration: '4s' }}
          />
        </div>
      ))}

      {/* Image container with advanced effects */}
      <div className="relative overflow-hidden rounded-t-3xl">
        <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900">
          <img
            src={img}
            alt={`${title} preview`}
            className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 
                       ${imageLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}
                       group-hover:brightness-110 group-hover:contrast-110`}
            onLoad={() => setImageLoaded(true)}
            style={{
              filter: isHovered ? `hue-rotate(${mousePosition.x * 0.5}deg) saturate(1.2)` : 'none'
            }}
          />
          
          {/* Loading shimmer effect */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                             animate-pulse transform translate-x-[-100%] group-hover:translate-x-[300%] 
                             transition-transform duration-2000 ease-in-out" />
            </div>
          )}
          
          {/* Multi-layered gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-pink-900/20 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Animated scan line effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent 
                           opacity-0 group-hover:opacity-100 animate-pulse
                           transform -translate-y-2 group-hover:translate-y-48 
                           transition-transform duration-3000 ease-linear" />
          </div>
          
          {/* Stats overlay with enhanced animations */}
          <div className="absolute top-3 right-3 flex gap-2">
            {stats.stars > 0 && (
              <div className="flex items-center gap-1 px-3 py-1.5 bg-black/60 backdrop-blur-lg rounded-full 
                             text-xs text-white/90 border border-yellow-400/20
                             transform transition-all duration-500 hover:scale-110
                             group-hover:animate-pulse group-hover:bg-yellow-400/10">
                <StarIcon size={12} className="text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
                <span className="font-medium">{stats.stars}</span>
              </div>
            )}
            {stats.views > 0 && (
              <div className="flex items-center gap-1 px-3 py-1.5 bg-black/60 backdrop-blur-lg rounded-full 
                             text-xs text-white/90 border border-blue-400/20
                             transform transition-all duration-500 hover:scale-110
                             group-hover:animate-pulse group-hover:bg-blue-400/10">
                <EyeIcon size={12} className="text-blue-400 animate-pulse" />
                <span className="font-medium">{stats.views}</span>
              </div>
            )}
          </div>
          
          {/* Enhanced hover action buttons */}
          <div className={`absolute inset-0 flex items-center justify-center gap-4 
                          transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn p-4 bg-white/20 backdrop-blur-lg rounded-full text-white 
                         hover:bg-white/30 hover:scale-125 transition-all duration-300
                         shadow-2xl hover:shadow-blue-500/25 border border-white/20
                         hover:rotate-12 active:scale-95"
            >
              <GithubIcon size={24} className="transition-transform duration-300 group-hover/btn:rotate-180" />
            </a>
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn p-4 bg-gradient-to-r from-blue-500/80 to-purple-500/80 backdrop-blur-lg 
                         rounded-full text-white hover:from-blue-500 hover:to-purple-500 
                         hover:scale-125 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 
                         border border-blue-400/30 hover:-rotate-12 active:scale-95"
            >
              <ExternalLinkIcon size={24} className="transition-transform duration-300 group-hover/btn:rotate-45" />
            </a>
          </div>
        </div>
      </div>

      {/* Content section with enhanced animations */}
      <div className="relative flex flex-col flex-1 p-6 z-10">
        {/* Title with advanced gradient animation */}
        <h3 className="text-xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 
                       bg-clip-text text-transparent mb-3 transition-all duration-700
                       group-hover:from-blue-300 group-hover:via-white group-hover:to-pink-300
                       group-hover:animate-pulse group-hover:text-2xl">
          {title}
        </h3>
        
        {/* Description with typewriter effect simulation */}
        <p className="text-sm text-white/70 leading-relaxed mb-4 flex-grow transition-all duration-500
                      group-hover:text-white/90 group-hover:tracking-wide">
          {description}
        </p>

        {/* Tags with staggered animations */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs bg-white/10 text-white/80 rounded-full
                           backdrop-blur-lg border border-white/20 
                           transition-all duration-500 hover:bg-white/20 hover:scale-110
                           hover:rotate-2 hover:shadow-lg group-hover:animate-bounce"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: isHovered ? `translateY(-${index * 2}px)` : 'none'
                }}
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-3 py-1.5 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                              text-white/60 rounded-full backdrop-blur-lg border border-white/10
                              transition-all duration-500 hover:scale-110 group-hover:animate-pulse">
                +{tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Enhanced action buttons */}
        <div className="flex items-center gap-4 mt-auto">
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-2 px-5 py-2.5 text-sm text-white/80 
                       hover:text-white transition-all duration-500 rounded-xl
                       hover:bg-gradient-to-r hover:from-white/10 hover:to-white/20 
                       backdrop-blur-lg border border-white/10 hover:border-white/30
                       hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <GithubIcon className="transition-all duration-300 group-hover/btn:scale-125 group-hover/btn:rotate-12" />
            <span className="font-medium">Code</span>
          </a>
          
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-2 px-5 py-2.5 text-sm 
                       bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white 
                       rounded-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600
                       transition-all duration-500 hover:shadow-2xl hover:scale-110
                       backdrop-blur-lg border border-white/20 hover:border-white/40
                       hover:animate-pulse active:scale-95 relative overflow-hidden
                       before:absolute before:inset-0 before:bg-gradient-to-r 
                       before:from-white/0 before:via-white/20 before:to-white/0
                       before:translate-x-[-100%] hover:before:translate-x-[100%]
                       before:transition-transform before:duration-700"
          >
            <ExternalLinkIcon className="transition-all duration-300 group-hover/btn:scale-125 group-hover/btn:rotate-45 relative z-10" />
            <span className="font-medium relative z-10">Demo</span>
          </a>
        </div>
      </div>

      {/* Enhanced animated border effects */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] animate-spin" style={{ animationDuration: '8s' }}>
          <div className="w-full h-full rounded-3xl bg-slate-900/95 backdrop-blur-xl" />
        </div>
      </div>

      {/* Corner accent lights */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-radial from-blue-400/30 to-transparent rounded-full 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-radial from-purple-400/30 to-transparent rounded-full 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
    </div>
  );
}

// Enhanced demo component
function Demo() {
  const sampleCard = {
    title: "AI Dashboard Pro",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    liveDemo: "#",
    repo: "#",
    description: "A cutting-edge AI-powered dashboard with real-time analytics, beautiful visualizations, and seamless user experience. Built with modern technologies.",
    tags: ["React", "TypeScript", "Tailwind CSS", "AI/ML", "Real-time", "Analytics"],
    stats: { stars: 128, views: 3400 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                       bg-clip-text mb-8 text-center animate-pulse">
          Ultra Modern Card Component
        </h1>
        <Card {...sampleCard} />
      </div>
    </div>
  );
}