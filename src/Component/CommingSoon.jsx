import { Eye, BarChart3, CheckCircle } from "lucide-react";

export default function ComingSoon() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800 animate-fadeInUp">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 glass rounded-full px-4 py-2 text-primary border border-primary/30 hover-scale">
            Coming Soon
          </div>
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            Next Generation Features
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We're building the future of education with advanced classroom monitoring and real-time engagement analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4 glass rounded-2xl p-6 hover-scale transition-all duration-300 animate-fadeInUp">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-100 mb-2">
                    Live Classroom Analytics
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Camera-based AI monitoring that tracks student attention, engagement levels, and participation during live teaching sessions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 glass rounded-2xl p-6 hover-scale transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-100 mb-2">
                    Real-time Engagement Metrics
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Instant feedback on student focus, comprehension signals, and classroom dynamics to help teachers adapt their teaching style.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 border border-slate-600 hover-scale animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">
              Revolutionary Insights Include:
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Student attention span tracking</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Confusion detection and alerts</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Interactive participation levels</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Optimal teaching moment identification</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Class-wide engagement heatmaps</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}