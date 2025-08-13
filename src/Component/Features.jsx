import {
  Brain,
  BarChart3,
  Target,
  Lightbulb,
  Eye
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "Image-Based Auto Grading",
      description: "Upload photos of handwritten tests from any smartphone. Our AI reads and grades papers instantly with 95% accuracy.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Smart Student Analytics",
      description: "Deep performance analysis that identifies learning gaps and tracks progress across all subjects.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      title: "Personalized Study Plans",
      description: "Custom recommendations based on individual performance patterns and learning objectives.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Lightbulb,
      title: "Future Career Prediction",
      description: "AI algorithms analyze student strengths to suggest optimal career paths and educational directions.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Eye,
      title: "Live Classroom Analytics",
      description: "Real-time student engagement monitoring through camera-based AI to track attention and interaction levels during teaching.",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 animate-fadeInUp">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Complete AI-Powered Solution
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            From image processing to career prediction - everything you need to transform education in your institution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 glass rounded-2xl border border-transparent hover:border-primary/30 hover-scale transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
              <div>
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}