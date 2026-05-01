"use client";

const TESTIMONIALS = [
  {
    quote:
      "I've read more books in the past 3 months than in the last 3 years. eBookBorrow changed my reading life.",
    name: "Sarah K.",
    role: "Educator",
    initials: "SK",
  },
  {
    quote:
      "The curation is impeccable. Every recommendation feels like it was made just for me.",
    name: "Marcus T.",
    role: "Software Engineer",
    initials: "MT",
  },
  {
    quote:
      "Finally a digital library that actually feels like a library — warm, welcoming, and full of gems.",
    name: "Priya R.",
    role: "Writer",
    initials: "PR",
    // gradient: "from-emerald-600 to-teal-700",
    // bgGlow: "bg-emerald-500/10",
  },
];

export default function Feature() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-linear-to-b from-amber-50/50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-amber-300" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-700">
              Reader Stories
            </span>
            <div className="h-px w-8 bg-amber-300" />
          </div>

          <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
            Loved by{" "}
            <span className="relative inline-block">
              <span className="italic text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-rose-600">
                Readers
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 100 20"
                fill="none"
              >
                <path
                  d="M0 10 Q 25 0, 50 10 T 100 10"
                  stroke="url(#underline-gradient)"
                  strokeWidth="2"
                  fill="none"
                />
                <defs>
                  <linearGradient
                    id="underline-gradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#d97706" />
                    <stop offset="100%" stopColor="#e11d48" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Join thousands of happy readers who discovered their next favorite
            book
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-amber-200/30 transition-all duration-500 hover:-translate-y-2">
                {/* Quote mark */}
                <div className="absolute top-6 right-8 text-8xl font-serif text-gray-100 leading-none select-none">
                  "
                </div>

                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-gray-700 text-base leading-relaxed mb-8 relative z-10">
                  "{testimonial.quote}"
                </blockquote>

                {/* Divider */}
                <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mb-6" />

                {/* Author info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div
                    className={`relative w-12 h-12 rounded-2xl bg-linear-to-br ring-2 ring-amber-600 p-[2px] group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                      <span
                        className={`text-lg font-bold bg-linear-to-br from-amber-400 to-rose-600 bg-clip-text text-transparent`}
                      >
                        {testimonial.initials}
                      </span>
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-amber-600 group-hover:to-rose-600 transition-all duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
