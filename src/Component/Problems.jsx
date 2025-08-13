import { Brain, Target, Clock, Users } from "lucide-react";

export default function Problems() {
  const problems = [
    "Teachers spend 60% of their time manually grading handwritten tests",
    "Students wait days or weeks for results and feedback",
    "Offline tests in schools and coaching centers create processing delays",
    "Manual grading leads to inconsistent scoring and human error",
    "Learning gaps go unnoticed until it's too late",
    "No real-time insights into student engagement during teaching",
    "Teachers can't track attention levels and participation in large classrooms"
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white animate-fadeInUp">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 glass rounded-full px-4 py-2 text-red-300 hover:bg-red-500/30 border border-red-500/30 hover-scale">
            The Manual Assessment Crisis
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Why Traditional Exam Processing is Broken
          </h2>
          <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
            Manual exam checking creates insurmountable barriers to personalized education, making it impossible to identify learning gaps and provide timely intervention.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="p-8 glass rounded-2xl border border-slate-600 hover:border-red-500/50 hover-scale transition-all duration-300 animate-fadeInUp">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Impossible to Detect Learning Gaps
                </h3>
                <p className="text-slate-200 leading-relaxed mb-4">
                  Manual checking takes weeks, by which time students have moved to new topics without mastering previous concepts. Teachers cannot identify who needs help with specific topics.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-red-400 font-bold">2-3 Weeks Delay</div>
                  <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                  <div className="text-red-400 font-bold">85% Gaps Missed</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 glass rounded-2xl border border-slate-600 hover:border-orange-500/50 hover-scale transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Zero Personalized Education
                </h3>
                <p className="text-slate-200 leading-relaxed mb-4">
                  Without instant analysis, it's impossible to create personalized study plans, recommend specific practice areas, or predict which students need intervention.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-orange-400 font-bold">One-Size-Fits-All</div>
                  <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                  <div className="text-orange-400 font-bold">No Individual Guidance</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 glass rounded-2xl border border-slate-600 hover:border-yellow-500/50 hover-scale transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Teachers Drowning in Paperwork
                </h3>
                <p className="text-slate-200 leading-relaxed mb-4">
                  Teachers spend 60% of their time on manual grading instead of teaching. This leads to teacher burnout and reduces time available for actual instruction and student mentoring.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-yellow-400 font-bold">60% Time Wasted</div>
                  <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                  <div className="text-yellow-400 font-bold">High Burnout Rate</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 glass rounded-2xl border border-slate-600 hover:border-purple-500/50 hover-scale transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Cannot Scale Quality Education
                </h3>
                <p className="text-slate-200 leading-relaxed mb-4">
                  Schools and coaching centers cannot provide detailed feedback to hundreds of students. Manual processes make quality assessment impossible at scale.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-purple-400 font-bold">Limited Reach</div>
                  <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                  <div className="text-purple-400 font-bold">Inconsistent Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-8 backdrop-blur-sm animate-fadeInUp">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            The Complete Problem Breakdown
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300">
                <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-3"></div>
                <p className="text-slate-200 leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 glass rounded-2xl border border-red-500/20 hover-scale animate-fadeInUp">
              <div className="text-4xl font-bold text-red-400 mb-2">85%</div>
              <p className="text-red-200">Learning gaps go undetected</p>
            </div>
            <div className="p-6 glass rounded-2xl border border-orange-500/20 hover-scale animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-orange-400 mb-2">60%</div>
              <p className="text-orange-200">Teacher time wasted on grading</p>
            </div>
            <div className="p-6 glass rounded-2xl border border-yellow-500/20 hover-scale animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-yellow-400 mb-2">3-5</div>
              <p className="text-yellow-200">Hours per test to grade manually</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}