const colors = ["#F472B6", "#38BDF8", "#FBBF24", "#A78BFA", "#34D399", "#FB7185", "#FDBA74", "#2DD4BF"];

export function DiwaliLights() {
  return (
    <div className="relative mx-auto mt-5 max-w-3xl">
      <div aria-hidden="true" className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="diwali-lights flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 gap-5 pr-5 sm:gap-9 sm:pr-9">
              {colors.map((color) => (
                <svg key={color} viewBox="0 0 52 52" className="h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                  <path d="M26 25C17 24 20 14 27 5c-1 7 6 10 6 15 0 3-3 5-7 5Z" fill="#FBBF24" />
                  <path d="M26 24c-4-1-2-6 1-9 0 4 3 5 3 7 0 1-2 2-4 2Z" fill="#FFF4BC" />
                  <path d="M5 30h42c-3 11-10 16-21 16S8 41 5 30Z" fill={color} />
                  <ellipse cx="26" cy="30" rx="21" ry="3.5" fill="#FDE68A" />
                  <path d="M12 35q14 9 28 0" fill="none" stroke="white" strokeOpacity=".65" strokeWidth="1.5" />
                </svg>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
