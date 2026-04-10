export default function ProcessVideo() {
  return (
    <section className="py-24 lg:py-32 bg-forest-950 text-cream-50 relative overflow-hidden">
      {/* Mønster-aksent */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #dcedde 25%, transparent 25%, transparent 50%, #dcedde 50%, #dcedde 75%, transparent 75%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-amber-accent" />
              <span className="text-sm font-medium tracking-widest uppercase text-amber-accent">
                Se det med egne øyne
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Dette er hva som kommer ut av sofaen din
            </h2>
            <p className="text-lg text-cream-100/70 leading-relaxed mb-8">
              Ord er én ting. Å se det grå, skitne vannet som ekstraksjonen
              trekker ut er noe helt annet. Her er en kort film fra en vanlig
              rens.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="font-serif text-3xl font-bold text-amber-accent">10+</p>
                <p className="text-xs text-cream-100/60 mt-1">års erfaring</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-amber-accent">500+</p>
                <p className="text-xs text-cream-100/60 mt-1">fornøyde kunder</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-amber-accent">100%</p>
                <p className="text-xs text-cream-100/60 mt-1">fornøydhetsgaranti</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Video placeholder med glow og play-knapp */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-accent/30 via-forest-400/30 to-amber-accent/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-video bg-forest-900 rounded-2xl overflow-hidden border border-forest-700">
                {/* Bakgrunn av videoplaceholder — mønster til kunde leverer ekte video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 400 225" className="w-full h-full opacity-20">
                    <defs>
                      <linearGradient id="video-bg" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#3f8447" />
                        <stop offset="100%" stopColor="#0d2314" />
                      </linearGradient>
                    </defs>
                    <rect width="400" height="225" fill="url(#video-bg)" />
                  </svg>
                </div>

                {/* Play-knapp */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-accent rounded-full animate-ping opacity-30" />
                    <div className="relative w-20 h-20 rounded-full bg-amber-accent flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-forest-950 ml-1">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Label bunn venstre */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-cream-100/80 bg-forest-950/80 backdrop-blur px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-amber-accent" />
                  0:30 · Rens av sofa hos privatkunde
                </div>

                {/* Label bunn høyre */}
                <div className="absolute bottom-4 right-4 text-[10px] font-mono text-cream-100/50 bg-forest-950/80 backdrop-blur px-2 py-1 rounded">
                  HD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
