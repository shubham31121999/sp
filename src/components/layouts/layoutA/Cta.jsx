function Cta({ ctaSection }) {
  if (!ctaSection) return null;

  return (
    <div className="bg-white px-4 sm:px-12 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-2">
        {/* Text */}
        <div className="max-w-xl text-center sm:text-left text-sm sm:text-base text-primary font-medium">
          {ctaSection.text}
        </div>

        {/* Button */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end pr-4 gap-4">
              <a
                href={ctaSection.button.link}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-primary text-white font-semibold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2 rounded-full hover:bg-primary/90 transition"
              >
                {ctaSection.button.label}
                <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>

      </div>
    </div>
  );
}

export default Cta;
