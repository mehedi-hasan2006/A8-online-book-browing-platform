const STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "Browse our curated library of thousands of titles",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Borrow",
    description: "One click borrow - no fees, no queues",
    icon: "📚",
  },
  {
    number: "03",
    title: "Read",
    description: "Read on any device seamlessly",
    icon: "📱",
  },
  {
    number: "04",
    title: "Return",
    description: "Auto-return when done",
    icon: "🔄",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-16 px-6 bg-linear-to-b from-amber-50/30 via-white to-white overflow-hidden">
      {/* Background  */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-rose-200/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-amber-100/10 to-rose-100/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-serif font-bold text-4xl text-gray-900 mb-4">
            How It{" "}
            <span className="relative inline-block">
              <span className="italic text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-rose-500">
                Works
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 100 15"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 7.5 Q 25 0, 50 7.5 T 100 7.5"
                  stroke="url(#header-underline)"
                  strokeWidth="2"
                  fill="none"
                />
                <defs>
                  <linearGradient
                    id="header-underline"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#f43f5e" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Step number */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-amber-400 to-rose-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-amber-200/50 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Connector line */}
              {index < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-px bg-linear-to-r from-amber-300 to-transparent" />
              )}

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
