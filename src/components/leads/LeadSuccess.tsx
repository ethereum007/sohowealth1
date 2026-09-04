type Props = { heading: string; copy: string; requestId: string };

export function LeadSuccess({ heading, copy, requestId }: Props) {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
  return (
    <div className="py-5 text-center text-white">
      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A84C] text-2xl text-[#0B1F3A]" aria-hidden="true">✓</div>
      <h3 className="font-display text-2xl font-semibold">{heading}</h3><p className="mx-auto mt-3 max-w-md leading-relaxed text-white/75">{copy}</p>
      <p className="mt-4 text-xs text-white/50">Reference: {requestId.slice(0, 8).toUpperCase()}</p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer" data-analytics-location="lead-success" className="rounded-lg border border-white/25 px-5 py-3 font-semibold">Continue on WhatsApp</a>{bookingUrl ? <a href={bookingUrl} target="_blank" rel="noopener noreferrer" data-analytics-booking="true" data-analytics-location="lead-success" className="rounded-lg bg-[#C9A84C] px-5 py-3 font-semibold text-[#0B1F3A]">Choose a call time</a> : null}</div>
    </div>
  );
}
