import { Check, Eye, MessageCircle, ShieldCheck, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { buildWhatsAppUrl, formatEur } from '../data/horologyData';
import { StrapOption, Timepiece } from '../types/horology';
import { WatchImageChamber } from './WatchImageChamber';

interface TimepieceDetailModalProps {
  watch: Timepiece | null;
  onClose: () => void;
  onAddToBag: (watch: Timepiece, strap: StrapOption, engraving: string) => void;
}

export function TimepieceDetailModal({
  watch,
  onClose,
  onAddToBag,
}: TimepieceDetailModalProps) {
  const [selectedStrapId, setSelectedStrapId] = useState<string>('');
  const [engraving, setEngraving] = useState<string>('');
  const [lumeMode, setLumeMode] = useState<boolean>(false);
  const [justAdded, setJustAdded] = useState<boolean>(false);

  useEffect(() => {
    if (watch) {
      setSelectedStrapId(watch.availableStraps[0]?.id ?? '');
      setEngraving('');
      setLumeMode(false);
      setJustAdded(false);
    }
  }, [watch]);

  useEffect(() => {
    if (!watch) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [watch, onClose]);

  if (!watch) return null;

  const activeStrap =
    watch.availableStraps.find((s) => s.id === selectedStrapId) ??
    watch.availableStraps[0];

  const finalPrice = watch.priceEur + (activeStrap?.priceDelta ?? 0);

  const whatsappUrl = buildWhatsAppUrl(
    `Hola Atención Privada Barrtime, deseo información de adquisición para el ${watch.name} (${watch.reference}) con correa "${activeStrap.name}"${
      engraving.trim() ? ` y grabado personalizado "${engraving.trim()}"` : ''
    }. Precio configurado: ${formatEur(finalPrice)}.`
  );

  const handleAdd = () => {
    onAddToBag(watch, activeStrap, engraving.trim());
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdp-watch-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-md md:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative max-h-[92vh] w-full max-w-[1120px] overflow-y-auto rounded-[4px] border border-white/[0.12] bg-[#0a0a0b]">
        {/* Cabecera del modal */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/[0.08] bg-[#0a0a0b]/95 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
            <span className="font-mono text-[#e2e8f0]">{watch.reference}</span>
            <span aria-hidden="true">·</span>
            <span>{watch.collection}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar configuración"
            className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/[0.12] text-[#e2e8f0] transition-colors hover:border-white/40 hover:text-white cursor-pointer"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Galería izquierda */}
          <div className="border-b border-white/[0.08] bg-[#121214] p-6 lg:col-span-6 lg:border-r lg:border-b-0">
            <div className="lg:sticky lg:top-20">
              <div className="overflow-hidden rounded-[4px] border border-white/[0.08]">
                <WatchImageChamber
                  src={watch.image}
                  alt={watch.name}
                  reference={watch.reference}
                  aspectClass="aspect-square"
                  lumeMode={lumeMode}
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setLumeMode((prev) => !prev)}
                  className={`inline-flex h-9 items-center gap-2 rounded-[4px] border px-3.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors cursor-pointer ${
                    lumeMode
                      ? 'border-[#e2e8f0] bg-white text-[#0a0a0b]'
                      : 'border-white/[0.12] bg-[#0a0a0b] text-[#e2e8f0] hover:border-white/30'
                  }`}
                >
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{lumeMode ? 'Vista Estudio' : 'Simular Baja Luz'}</span>
                </button>

                <span className="text-[12px] text-[#94a3b8]">
                  {watch.editionNote}
                </span>
              </div>

              {/* Vista previa del fondo de caja */}
              <div className="mt-5 rounded-[4px] border border-white/[0.08] bg-[#0a0a0b] p-4">
                <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                  <span>Vista Previa Fondo de Caja</span>
                  <span className="font-mono">Zafiro y Titanio</span>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-3 font-mono text-[12px] text-[#e2e8f0]">
                  <span className="text-[#94a3b8]">BARRTIME · SUIZA</span>
                  <span className="tracking-[0.2em] text-white">
                    {engraving.trim() ? engraving.trim().toUpperCase() : 'SIN GRABADO'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Módulo de configuración y adquisición */}
          <div className="flex flex-col justify-between p-6 md:p-8 lg:col-span-6">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                  {watch.category} · {watch.availability}
                </span>
              </div>

              <h2
                id="pdp-watch-title"
                className="mt-2 text-[26px] font-light leading-[1.2] tracking-[-0.02em] text-white md:text-[32px]"
              >
                {watch.name}
              </h2>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-mono text-[24px] font-normal text-white tabular-nums">
                  {formatEur(finalPrice)}
                </span>
                <span className="text-[12px] font-light text-[#94a3b8]">
                  IVA incluido · Envío blindado asegurado
                </span>
              </div>

              <p className="mt-4 text-[14px] font-light leading-[1.65] text-[#c4c7c8]">
                {watch.description}
              </p>

              {/* Selector de correa o brazalete */}
              <div className="mt-7">
                <label className="block text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                  Configuración de Correa o Brazalete
                </label>
                <div className="mt-3 space-y-2">
                  {watch.availableStraps.map((strap) => {
                    const selected = strap.id === activeStrap.id;
                    return (
                      <button
                        key={strap.id}
                        type="button"
                        onClick={() => setSelectedStrapId(strap.id)}
                        className={`flex w-full items-center justify-between rounded-[4px] border p-3.5 text-left transition-colors cursor-pointer ${
                          selected
                            ? 'border-white bg-white/[0.05]'
                            : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.22]'
                        }`}
                      >
                        <div className="pr-4">
                          <div className="text-[13px] font-medium text-white">
                            {strap.name}
                          </div>
                          <div className="mt-0.5 text-[12px] font-light text-[#94a3b8]">
                            {strap.material}
                          </div>
                        </div>
                        <span className="shrink-0 font-mono text-[12px] text-[#e2e8f0] tabular-nums">
                          {strap.priceDelta === 0
                            ? 'Incluida'
                            : `+ ${formatEur(strap.priceDelta)}`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Grabado de cortesía */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="caseback-engraving"
                    className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]"
                  >
                    Grabado en Fondo (Cortesía)
                  </label>
                  <span className="font-mono text-[11px] text-[#94a3b8] tabular-nums">
                    {engraving.length}/16
                  </span>
                </div>
                <input
                  id="caseback-engraving"
                  type="text"
                  maxLength={16}
                  value={engraving}
                  onChange={(e) => setEngraving(e.target.value)}
                  placeholder="Iniciales o fecha (opcional)"
                  className="mt-2 h-11 w-full rounded-[4px] border border-white/[0.08] bg-[#121214] px-3.5 font-mono text-[13px] uppercase tracking-[0.14em] text-white placeholder-[#94a3b8]/60 placeholder:normal-case placeholder:tracking-normal focus:border-[#e2e8f0] focus:outline-none"
                />
              </div>

              {/* Ficha técnica */}
              <div className="mt-7 border-t border-white/[0.08] pt-5">
                <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                  Ficha Técnica Horológica
                </h3>
                <dl className="mt-3 divide-y divide-white/[0.06] text-[13px]">
                  <div className="flex justify-between py-2.5">
                    <dt className="text-[#94a3b8]">Calibre</dt>
                    <dd className="font-mono text-[#e2e8f0]">{watch.specs.caliber}</dd>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <dt className="text-[#94a3b8]">Dimensiones</dt>
                    <dd className="font-mono text-[#e2e8f0] tabular-nums">
                      {watch.specs.diameter} × {watch.specs.thickness}
                    </dd>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <dt className="text-[#94a3b8]">Material de caja</dt>
                    <dd className="text-right text-[#e2e8f0]">
                      {watch.specs.caseMaterial}
                    </dd>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <dt className="text-[#94a3b8]">Frecuencia y Rubíes</dt>
                    <dd className="font-mono text-[#e2e8f0] tabular-nums">
                      {watch.specs.frequency} · {watch.specs.jewels} rubíes
                    </dd>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <dt className="text-[#94a3b8]">Reserva de marcha</dt>
                    <dd className="font-mono text-[#e2e8f0] tabular-nums">
                      {watch.specs.powerReserve}
                    </dd>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <dt className="text-[#94a3b8]">Hermeticidad</dt>
                    <dd className="font-mono text-[#e2e8f0] tabular-nums">
                      {watch.specs.waterResistance}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Acciones de adquisición */}
            <div className="mt-8 space-y-3 border-t border-white/[0.08] pt-6">
              <button
                type="button"
                onClick={handleAdd}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-[4px] bg-white px-6 text-[11px] font-medium uppercase tracking-[0.16em] text-[#0a0a0b] transition-colors hover:bg-[#e2e8f0] cursor-pointer"
              >
                {justAdded ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden="true" />
                    <span>Añadido a Bolsa de Adquisición</span>
                  </>
                ) : (
                  <span>Añadir a Bolsa · {formatEur(finalPrice)}</span>
                )}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-full items-center justify-center gap-2.5 rounded-[4px] border border-[#25d366]/35 bg-[#0f1712] px-6 text-[11px] font-medium uppercase tracking-[0.15em] text-[#25d366] transition-colors hover:border-[#25d366]/70 hover:bg-[#132017]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Adquisición Directa por WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-[#94a3b8]">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Certificado cronométrico individual incluido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
