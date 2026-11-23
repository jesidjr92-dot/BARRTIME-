import { Pause, Play } from 'lucide-react';
import { useState } from 'react';
import { CALIBERS } from '../data/horologyData';

export function CaliberSection() {
  const [selectedId, setSelectedId] = useState<string>(CALIBERS[0].id);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  const activeCaliber =
    CALIBERS.find((c) => c.id === selectedId) ?? CALIBERS[0];

  return (
    <section
      id="calibres"
      className="border-b border-white/[0.08] bg-[#0a0a0b] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
              Ingeniería de Manufactura
            </p>
            <h2 className="mt-2 text-[28px] font-light leading-[1.2] tracking-[-0.025em] text-white md:text-[40px]">
              Arquitectura de Calibres Propios
            </h2>
          </div>

          {/* Selector de calibres */}
          <div
            role="tablist"
            aria-label="Seleccionar calibre de manufactura"
            className="flex flex-wrap gap-2"
          >
            {CALIBERS.map((caliber) => {
              const active = caliber.id === activeCaliber.id;
              return (
                <button
                  key={caliber.id}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => setSelectedId(caliber.id)}
                  className={`h-10 rounded-[4px] px-4 font-mono text-[12px] tracking-[0.06em] whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    active
                      ? 'bg-white text-[#0a0a0b] font-medium'
                      : 'border border-white/[0.08] bg-[#121214] text-[#94a3b8] hover:border-white/[0.22] hover:text-white'
                  }`}
                >
                  {caliber.code}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mesa técnica del calibre */}
        <div
          id="taller"
          className="mt-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12"
        >
          {/* Izquierda: Esquema de escape */}
          <div className="flex flex-col justify-between rounded-[4px] border border-white/[0.08] bg-[#121214] p-6 md:p-8 lg:col-span-5">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-[#94a3b8]">
                  Oscilación Libre
                </span>
                <span className="mt-0.5 block font-mono text-[14px] text-white tabular-nums">
                  {activeCaliber.frequencyVph} · {activeCaliber.frequencyHz}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsRunning((prev) => !prev)}
                aria-label={
                  isRunning ? 'Pausar oscilación' : 'Reanudar oscilación'
                }
                className="inline-flex h-9 items-center gap-2 rounded-[4px] border border-white/[0.12] bg-[#0a0a0b] px-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#e2e8f0] hover:border-white/30 cursor-pointer"
              >
                {isRunning ? (
                  <>
                    <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Pausar</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Activar</span>
                  </>
                )}
              </button>
            </div>

            {/* Esquema animado del volante regulador */}
            <div className="relative my-8 flex items-center justify-center">
              <svg
                viewBox="0 0 320 320"
                className="h-64 w-64 md:h-72 md:w-72"
                aria-label={`Esquema mecánico del ${activeCaliber.code}`}
              >
                <circle
                  cx="160"
                  cy="160"
                  r="142"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />
                <circle
                  cx="160"
                  cy="160"
                  r="128"
                  fill="none"
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="1"
                  strokeDasharray="2 6"
                />
                <circle
                  cx="160"
                  cy="160"
                  r="96"
                  fill="rgba(10,10,11,0.65)"
                  stroke="rgba(226,232,240,0.22)"
                  strokeWidth="1"
                />

                <line
                  x1="160"
                  y1="14"
                  x2="160"
                  y2="306"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />
                <line
                  x1="14"
                  y1="160"
                  x2="306"
                  y2="160"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />

                <g
                  style={{
                    transformOrigin: '160px 160px',
                    animation: isRunning
                      ? `barrtime-oscillate ${activeCaliber.balanceWheelSpeedMs}ms ease-in-out infinite alternate`
                      : 'none',
                  }}
                >
                  <circle
                    cx="160"
                    cy="160"
                    r="72"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="2.5"
                  />
                  <line
                    x1="88"
                    y1="160"
                    x2="232"
                    y2="160"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="160"
                    y1="88"
                    x2="160"
                    y2="232"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                  <circle cx="160" cy="88" r="4" fill="#ffffff" />
                  <circle cx="160" cy="232" r="4" fill="#ffffff" />
                  <circle cx="88" cy="160" r="4" fill="#ffffff" />
                  <circle cx="232" cy="160" r="4" fill="#ffffff" />
                </g>

                <circle
                  cx="160"
                  cy="160"
                  r="38"
                  fill="none"
                  stroke="rgba(255,255,255,0.28)"
                  strokeWidth="1"
                />
                <circle
                  cx="160"
                  cy="160"
                  r="26"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                />

                <path
                  d="M 48 152 L 136 152 L 160 144 L 184 152 L 272 152 L 272 168 L 184 168 L 160 176 L 136 168 L 48 168 Z"
                  fill="rgba(24,24,27,0.88)"
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="1"
                />
                <circle
                  cx="160"
                  cy="160"
                  r="8"
                  fill="#4c1d24"
                  stroke="#e2e8f0"
                  strokeWidth="1.5"
                />
                <circle cx="160" cy="160" r="2.5" fill="#e2e8f0" />
              </svg>

              <style>{`
                @keyframes barrtime-oscillate {
                  0% { transform: rotate(-110deg); }
                  100% { transform: rotate(110deg); }
                }
              `}</style>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.08] pt-4 text-[12px] text-[#94a3b8]">
              <span>Tolerancia de marcha</span>
              <span className="font-mono text-[#e2e8f0] tabular-nums">
                {activeCaliber.precisionTolerance}
              </span>
            </div>
          </div>

          {/* Derecha: Arquitectura técnica */}
          <div className="flex flex-col justify-between rounded-[4px] border border-white/[0.08] bg-[#121214]/60 p-6 md:p-10 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                <span className="font-mono text-[#e2e8f0]">
                  {activeCaliber.code}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activeCaliber.type}</span>
              </div>

              <h3 className="mt-3 text-[24px] font-light tracking-[-0.015em] text-white md:text-[32px]">
                {activeCaliber.title}
              </h3>

              <p className="mt-4 max-w-[60ch] text-[15px] font-light leading-[1.7] text-[#c4c7c8]">
                {activeCaliber.summary}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-white/[0.08] py-6 sm:grid-cols-4">
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]">
                    Frecuencia
                  </dt>
                  <dd className="mt-1.5 font-mono text-[15px] text-white tabular-nums">
                    {activeCaliber.frequencyVph}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]">
                    Reserva
                  </dt>
                  <dd className="mt-1.5 font-mono text-[15px] text-white tabular-nums">
                    {activeCaliber.powerReserve}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]">
                    Rubíes
                  </dt>
                  <dd className="mt-1.5 font-mono text-[15px] text-white tabular-nums">
                    {activeCaliber.jewels}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]">
                    Componentes
                  </dt>
                  <dd className="mt-1.5 font-mono text-[15px] text-white tabular-nums">
                    {activeCaliber.components}
                  </dd>
                </div>
              </dl>

              <div className="mt-8">
                <h4 className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                  Acabados de Alta Relojería
                </h4>
                <ul className="mt-4 space-y-3">
                  {activeCaliber.finishing.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-3 text-[14px] font-light text-[#e2e8f0]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-px w-3 shrink-0 bg-white/40"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6 text-[12px] text-[#94a3b8]">
              <span>
                Ensamblado a mano en Calle del Ródano 42, Ginebra · Control térmico de 120 h
              </span>
              <a
                href="#atencion"
                className="font-medium uppercase tracking-[0.15em] text-white underline-offset-4 hover:underline"
              >
                Solicitar ficha técnica →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
