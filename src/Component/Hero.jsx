import { Link } from "wouter";
import { Zap, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-primary/25 to-slate-800 text-white overflow-hidden animate-fadeInUp">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:30px_30px] opacity-20 animate-pulseGradient"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-slowFloat"></div>
      <div className="absolute bottom-20 -right-24 w-[30rem] h-[30rem] bg-secondary/30 rounded-full blur-3xl animate-slowFloatReverse"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-particle" style={{ top: '20%', left: '15%' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full animate-particle-delay" style={{ top: '70%', left: '45%' }}></div>
        <div className="absolute w-2 h-2 bg-secondary/40 rounded-full animate-particle-delay" style={{ top: '50%', left: '80%' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="inline-block mb-8 glass rounded-full px-5 py-2 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30 hover-scale shadow-lg shadow-emerald-500/10 transition-all duration-300">
            AI-Powered Educational Revolution
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent animate-textShimmer">
              Transform Education
            </span>
            <span className="block bg-gradient-to-r from-primary via-pink-400 to-secondary bg-clip-text text-transparent mt-3 animate-textShimmer delay-200">
              With Smart AI
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-200 mb-14 max-w-4xl mx-auto leading-relaxed">
            Simply photograph handwritten test papers and get
            <span className="text-primary font-semibold"> instant AI grading</span> with
            <span className="text-secondary font-semibold"> 95% accuracy</span>.
            Reduce teacher workload by 80% while providing personalized learning insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-14">
            <Link href="/demo">
              <button className="flex items-center bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-primary/40 hover-scale transition-all duration-300">
                <Zap className="mr-2 h-6 w-6" />
                Try Image Upload Demo
              </button>
            </Link>
            <Link href="/dashboard">
              <button className="flex items-center border-2 border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/20 text-white text-lg px-10 py-4 rounded-full glass hover-scale shadow-md transition-all duration-300">
                <BookOpen className="mr-2 h-6 w-6" />
                View Dashboard
              </button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: '95%', label: 'AI Grading Accuracy', color: 'text-emerald-400' },
              { value: '80%', label: 'Teacher Time Saved', color: 'text-blue-400' },
              { value: '<3s', label: 'Processing Time', color: 'text-purple-400' },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 border border-white/20 hover-scale animate-fadeInUp shadow-lg shadow-white/5 hover:shadow-primary/20 transition-all duration-300"
                style={{ animationDelay: `${0.2 * (i + 1)}s` }}
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <p className="text-slate-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slowFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes slowFloatReverse {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(20px) translateX(-10px); }
        }
        @keyframes particle {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(-20px); opacity: 0.3; }
        }
        @keyframes particleDelay {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(-15px); opacity: 0.3; }
        }
        @keyframes textShimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-slowFloat { animation: slowFloat 8s ease-in-out infinite; }
        .animate-slowFloatReverse { animation: slowFloatReverse 9s ease-in-out infinite; }
        .animate-particle { animation: particle 6s ease-in-out infinite; }
        .animate-particle-delay { animation: particleDelay 7s ease-in-out infinite; }
        .animate-textShimmer { background-size: 200% 200%; animation: textShimmer 5s linear infinite; }
      `}</style>
    </section>
  );
}