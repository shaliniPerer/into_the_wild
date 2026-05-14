export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        {/* Animated brand mark */}
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border border-brand/20 animate-ping" />
          <div className="absolute inset-2 rounded-full border border-brand/40 animate-[spin_3s_linear_infinite]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-brand" />
          </div>
        </div>
        <span className="text-[9px] uppercase tracking-[0.5em] text-charcoal/30 font-medium">
          Into the Wild
        </span>
      </div>
    </div>
  );
}
