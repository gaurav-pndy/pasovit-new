export default function Background({ children }) {
  return (
    <div className="relative max-w-screen overflow-hidden">
      {/* Global background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-white via-[#f8fbff] to-white" />

      {/* Animated orbs */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 md:translate-0 md:top-0 md:left-1/4 w-80 md:w-160 lg:w-200 h-80 md:h-160 lg:h-200 bg-blue/20 rounded-full blur-[120px] animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute top-[35%] right-0 w-60 md:w-120 lg:w-150 h-60 md:h-120 lg:h-150 bg-red/15 rounded-full blur-[100px] animate-pulse"
        style={{ animationDuration: "10s", animationDelay: "2s" }}
      />
      <div
        className="absolute top-[70%] left-0 w-72 md:w-xl lg:w-175 h-72 md:h-144 lg:h-175 bg-blue/20 rounded-full blur-[120px] animate-pulse"
        style={{ animationDuration: "12s", animationDelay: "4s" }}
      />

      {/* Mesh overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(at 20% 20%, rgba(0, 72, 139, 0.3) 0%, transparent 50%),
            radial-gradient(at 80% 30%, rgba(184, 1, 1, 0.2) 0%, transparent 50%),
            radial-gradient(at 40% 60%, rgba(0, 72, 139, 0.2) 0%, transparent 50%),
            radial-gradient(at 90% 80%, rgba(0, 72, 139, 0.3) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
