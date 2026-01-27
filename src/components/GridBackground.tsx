const GridBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Main grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(210 100% 15% / 0.4) 1px, transparent 1px),
            linear-gradient(90deg, hsl(210 100% 15% / 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Secondary finer grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(210 100% 15% / 0.15) 1px, transparent 1px),
            linear-gradient(90deg, hsl(210 100% 15% / 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Vignette overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, hsl(0 0% 0% / 0.8) 100%)',
        }}
      />

      {/* Subtle center glow */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, hsl(195 100% 50% / 0.03) 0%, transparent 50%)',
        }}
      />
    </div>
  );
};

export default GridBackground;
