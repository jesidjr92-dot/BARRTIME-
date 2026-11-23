import { CalendarCheck2, MessageCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { ATELIER_SALONS, buildWhatsAppUrl } from '../data/horologyData';
import { AppointmentConfirmation, Timepiece } from '../types/horology';

interface ConciergeFooterProps {
  timepieces: Timepiece[];
}

export function ConciergeFooter({ timepieces }: ConciergeFooterProps) {
  const [salon, setSalon] = useState(ATELIER_SALONS[0].label);
  const [date, setDate] = useState('2026-12-04');
  const [time, setTime] = useState('11:00');
  const [watchReference, setWatchReference] = useState(timepieces[0]?.reference ?? '');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [confirmation, setConfirmation] = useState<AppointmentConfirmation | null>(
    null
  );

  const handleBookAppointment = (e: FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim()) return;
    setConfirmation({
      bookingCode: `SAL-${Math.floor(1000 + Math.random() * 9000)}`,
      salon,
      date,
      time,
      clientName: clientName.trim(),
      watchReference,
    });
  };

  const directConciergeUrl = buildWhatsAppUrl(
    `Hola Atención Privada Barrtime, deseo coordinar una presentación privada para la referencia ${watchReference}.`
  );

  return (
    <footer
      id="atencion"
      className="bg-[#0a0a0b] pt-16 pb-12 md:pt-24 md:pb-16"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Izquierda: Información de Salones Privados */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                Atención Privada
              </p>
              <h2 className="mt-2 text-[28px] font-light leading-[1.2] tracking-[-0.025em] text-white md:text-[38px]">
                Asesoría y Salones Privados
              </h2>
              <p className="mt-4 max-w-md text-[14px] font-light leading-[1.7] text-[#c4c7c8]">
                Nuestros maestros relojeros y asesores de colección están disponibles para inspecciones privadas, ajustes de brazalete o solicitudes de asignación en Ginebra, Madrid y Ciudad de México.
              </p>

              <div className="mt-8 space-y-4 border-t border-white/[0.08] pt-6">
                {ATELIER_SALONS.map((s) => (
                  <div
                    key={s.id}
                    className="flex items-center justify-between text-[13px]"
                  >
                    <span className="font-medium text-white">{s.city}</span>
                    <span className="font-light text-[#94a3b8]">
                      {s.label.split('—')[1]?.trim()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <a
                href={directConciergeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2.5 rounded-[4px] border border-[#25d366]/35 bg-[#0f1712] px-6 text-[11px] font-medium uppercase tracking-[0.15em] text-[#25d366] transition-colors hover:border-[#25d366]/70"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Contacto Directo por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Derecha: Formulario de cita privada */}
          <div className="rounded-[4px] border border-white/[0.08] bg-[#121214] p-6 md:p-8 lg:col-span-7">
            {confirmation ? (
              <div className="flex h-full flex-col justify-between py-4">
                <div>
                  <div className="flex items-center gap-2.5 text-white">
                    <CalendarCheck2
                      className="h-5 w-5 text-[#25d366]"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[12px] uppercase tracking-[0.16em]">
                      Invitación Confirmada · {confirmation.bookingCode}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[24px] font-light text-white">
                    Le esperamos en nuestro salón privado.
                  </h3>
                  <dl className="mt-6 divide-y divide-white/[0.08] border-y border-white/[0.08] text-[13px]">
                    <div className="flex justify-between py-3">
                      <dt className="text-[#94a3b8]">Titular</dt>
                      <dd className="text-white">{confirmation.clientName}</dd>
                    </div>
                    <div className="flex justify-between py-3">
                      <dt className="text-[#94a3b8]">Salón</dt>
                      <dd className="text-right text-[#e2e8f0]">
                        {confirmation.salon}
                      </dd>
                    </div>
                    <div className="flex justify-between py-3">
                      <dt className="text-[#94a3b8]">Fecha y Hora</dt>
                      <dd className="font-mono text-[#e2e8f0] tabular-nums">
                        {confirmation.date} · {confirmation.time} h
                      </dd>
                    </div>
                    <div className="flex justify-between py-3">
                      <dt className="text-[#94a3b8]">Pieza Preparada</dt>
                      <dd className="font-mono text-white">
                        {confirmation.watchReference}
                      </dd>
                    </div>
                  </dl>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setConfirmation(null);
                    setClientName('');
                    setClientEmail('');
                  }}
                  className="mt-8 h-10 self-start rounded-[4px] border border-white/[0.15] px-5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#e2e8f0] hover:border-white/40 cursor-pointer"
                >
                  Programar Otra Cita
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookAppointment} className="space-y-5">
                <div className="border-b border-white/[0.08] pb-4">
                  <h3 className="text-[16px] font-medium text-white">
                    Reservar Presentación Privada
                  </h3>
                  <p className="mt-1 text-[13px] font-light text-[#94a3b8]">
                    Preparamos las referencias solicitadas para inspección bajo lupa y ajuste personalizado.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="salon-select"
                      className="block text-[11px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]"
                    >
                      Salón
                    </label>
                    <select
                      id="salon-select"
                      value={salon}
                      onChange={(e) => setSalon(e.target.value)}
                      className="mt-2 h-11 w-full rounded-[4px] border border-white/[0.08] bg-[#0a0a0b] px-3.5 text-[13px] text-white focus:border-[#e2e8f0] focus:outline-none"
                    >
                      {ATELIER_SALONS.map((s) => (
                        <option key={s.id} value={s.label}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="watch-interest"
                      className="block text-[11px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]"
                    >
                      Referencia de Interés
                    </label>
                    <select
                      id="watch-interest"
                      value={watchReference}
                      onChange={(e) => setWatchReference(e.target.value)}
                      className="mt-2 h-11 w-full rounded-[4px] border border-white/[0.08] bg-[#0a0a0b] px-3.5 text-[13px] text-white focus:border-[#e2e8f0] focus:outline-none"
                    >
                      {timepieces.map((w) => (
                        <option key={w.id} value={w.reference}>
                          {w.reference} — {w.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="appointment-date"
                      className="block text-[11px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]"
                    >
                      Fecha Preferida
                    </label>
                    <input
                      id="appointment-date"
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="mt-2 h-11 w-full rounded-[4px] border border-white/[0.08] bg-[#0a0a0b] px-3.5 font-mono text-[13px] text-white focus:border-[#e2e8f0] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="appointment-time"
                      className="block text-[11px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]"
                    >
                      Horario
                    </label>
                    <select
                      id="appointment-time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="mt-2 h-11 w-full rounded-[4px] border border-white/[0.08] bg-[#0a0a0b] px-3.5 font-mono text-[13px] text-white focus:border-[#e2e8f0] focus:outline-none"
                    >
                      <option value="10:30">10:30 h</option>
                      <option value="11:00">11:00 h</option>
                      <option value="13:00">13:00 h</option>
                      <option value="16:30">16:30 h</option>
                      <option value="18:00">18:00 h</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-[11px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]"
                    >
                      Nombre Completo
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Sofía Mendoza"
                      className="mt-2 h-11 w-full rounded-[4px] border border-white/[0.08] bg-[#0a0a0b] px-3.5 text-[14px] text-white placeholder-[#94a3b8]/60 focus:border-[#e2e8f0] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="block text-[11px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="sofia@coleccion.es"
                      className="mt-2 h-11 w-full rounded-[4px] border border-white/[0.08] bg-[#0a0a0b] px-3.5 text-[14px] text-white placeholder-[#94a3b8]/60 focus:border-[#e2e8f0] focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="h-11 w-full rounded-[4px] bg-white px-6 text-[11px] font-medium uppercase tracking-[0.16em] text-[#0a0a0b] transition-colors hover:bg-[#e2e8f0] cursor-pointer"
                >
                  Solicitar Cita Privada
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Pie de página */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/[0.08] pt-8 text-[12px] font-light text-[#94a3b8] sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <span className="font-medium tracking-[0.18em] text-white uppercase">
              BARRTIME
            </span>
            <span aria-hidden="true">·</span>
            <span>Manufactura Relojera Suiza</span>
          </div>
          <div>© {new Date().getFullYear()} Barrtime. Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  );
}
