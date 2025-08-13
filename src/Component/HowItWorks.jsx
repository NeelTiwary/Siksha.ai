export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 animate-fadeInUp">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            How Siksha.ai Works
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Simple 3-step process that transforms traditional education into intelligent, personalized learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center glass rounded-2xl p-6 hover-scale transition-all duration-300 animate-fadeInUp">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Upload & Process
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Teachers simply take photos of handwritten test papers using any smartphone and upload them. Our advanced OCR and AI instantly reads, processes, and grades them with 95% accuracy.
            </p>
          </div>

          <div className="text-center glass rounded-2xl p-6 hover-scale transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-r from-secondary to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Analyze & Insights
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Advanced analytics identify learning patterns, knowledge gaps, and strengths across subjects and individual students.
            </p>
          </div>

          <div className="text-center glass rounded-2xl p-6 hover-scale transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Predict & Guide
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              AI predicts optimal career paths and creates personalized study recommendations to maximize each student's potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}