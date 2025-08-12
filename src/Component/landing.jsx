import { Link } from "wouter";
import { 
  GraduationCap, 
  Brain, 
  BarChart3, 
  BookOpen, 
  Target, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Clock, 
  TrendingUp,
  Star,
  Shield,
  Lightbulb,
  Camera,
  Eye
} from "lucide-react";

export default function Landing() {
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
    <div className="min-h-screen bg-slate-900 font-sans">
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes pulseGradient {
            0% { opacity: 0.3; }
            50% { opacity: 0.5; }
            100% { opacity: 0.3; }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-pulseGradient {
            animation: pulseGradient 4s ease-in-out infinite;
          }
          .hover-scale {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-scale:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }
          .glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
        `}
      </style>

      {/* Navigation */}
      <nav className="bg-slate-800/90 backdrop-blur-lg border-b border-slate-700 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center hover-scale">
                <GraduationCap className="text-white h-5 w-5" />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">
                Siksha.ai
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white hover:text-primary transition-colors duration-300 hover-scale text-lg font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-white hover:text-primary transition-colors duration-300 hover-scale text-lg font-medium">
                How It Works
              </a>
              <Link href="/dashboard">
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 hover-scale text-lg font-medium">
                  Try Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-primary/30 to-slate-800 text-white overflow-hidden animate-fadeInUp">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20 animate-pulseGradient"></div>
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="inline-block mb-6 glass rounded-full px-4 py-2 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30 hover-scale">
              🚀 AI-Powered Educational Revolution
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                Transform Education
              </span>
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-3">
                With Smart AI
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Simply photograph handwritten test papers and get 
              <span className="text-primary font-semibold"> instant AI grading</span> with 
              <span className="text-secondary font-semibold"> 95% accuracy</span>. 
              Reduce teacher workload by 80% while providing personalized learning insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link href="/demo">
                <button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white text-lg px-10 py-4 rounded-full shadow-lg hover-scale transition-all duration-300">
                  <Zap className="mr-2 h-6 w-6" />
                  Try Image Upload Demo
                </button>
              </Link>
              <Link href="/dashboard">
                <button className="border-2 border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/20 text-white text-lg px-10 py-4 rounded-full glass hover-scale transition-all duration-300">
                  <BookOpen className="mr-2 h-6 w-6" />
                  View Dashboard
                </button>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="glass rounded-2xl p-6 border border-white/20 hover-scale animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold text-emerald-400 mb-2">95%</div>
                <p className="text-slate-200">AI Grading Accuracy</p>
              </div>
              <div className="glass rounded-2xl p-6 border border-white/20 hover-scale animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl font-bold text-blue-400 mb-2">80%</div>
                <p className="text-slate-200">Teacher Time Saved</p>
              </div>
              <div className="glass rounded-2xl p-6 border border-white/20 hover-scale animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <div className="text-4xl font-bold text-purple-400 mb-2">&lt;3s</div>
                <p className="text-slate-200">Processing Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white animate-fadeInUp">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 glass rounded-full px-4 py-2 text-red-300 hover:bg-red-500/30 border border-red-500/30 hover-scale">
              🚨 The Manual Assessment Crisis
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Why Traditional Exam Processing is Broken
            </h2>
            <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
              Manual exam checking creates insurmountable barriers to personalized education, making it impossible to identify learning gaps and provide timely intervention.
            </p>
          </div>

          {/* Major Problems Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Learning Gap Detection Problem */}
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

            {/* Personalization Problem */}
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

            {/* Teacher Workload Problem */}
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

            {/* Scalability Problem */}
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

          {/* Additional Problems List */}
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

          {/* Impact Summary */}
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

      {/* SaaS Model Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 animate-fadeInUp">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 glass rounded-full px-4 py-2 text-primary hover:bg-primary/20 border border-primary/30 hover-scale">
              📱 SaaS Platform for Schools & Coaching Centers
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Perfect for Offline Test Processing
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Designed specifically for schools and coaching institutes conducting offline tests. Simply photograph test papers with any smartphone and get instant AI-powered grading and analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 text-center glass rounded-2xl border border-transparent hover:border-primary/30 hover-scale transition-all duration-300 animate-fadeInUp">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Simple Photo Upload
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Use any smartphone to photograph handwritten test papers. Our advanced OCR technology reads and processes all types of handwriting.
              </p>
            </div>

            <div className="p-6 text-center glass rounded-2xl border border-transparent hover:border-secondary/30 hover-scale transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Built for Institutions
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Scalable SaaS solution perfect for schools, coaching centers, and educational institutions of any size. Process hundreds of tests instantly.
              </p>
            </div>

            <div className="p-6 text-center glass rounded-2xl border border-transparent hover:border-purple-500/30 hover-scale transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Reduce Teacher Workload
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Free up 80% of teachers' time from manual grading. Let them focus on teaching while AI handles the assessment burden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* How It Works */}
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

      {/* Coming Soon Section */}
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

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary animate-fadeInUp">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Education?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of educators who are already using AI to create better learning experiences and predict student success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-full glass hover-scale transition-all duration-300">
                <Star className="mr-2 h-5 w-5" />
                Try Image Upload Demo
              </button>
            </Link>
            <button className="border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full glass hover-scale transition-all duration-300">
              <Users className="mr-2 h-5 w-5" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 animate-fadeInUp">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center hover-scale">
                  <GraduationCap className="text-white h-5 w-5" />
                </div>
                <span className="font-bold text-2xl text-white tracking-tight">
                  Siksha.ai
                </span>
              </div>
              <p className="text-slate-300">
                Transforming education through intelligent automation and AI-powered insights.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Features</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="hover:text-primary transition-colors duration-300">Automated Grading</li>
                <li className="hover:text-primary transition-colors duration-300">Student Analytics</li>
                <li className="hover:text-primary transition-colors duration-300">Career Prediction</li>
                <li className="hover:text-primary transition-colors duration-300">Study Recommendations</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="hover:text-primary transition-colors duration-300">About Us</li>
                <li className="hover:text-primary transition-colors duration-300">Contact</li>
                <li className="hover:text-primary transition-colors duration-300">Privacy Policy</li>
                <li className="hover:text-primary transition-colors duration-300">Terms of Service</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="hover:text-primary transition-colors duration-300">Help Center</li>
                <li className="hover:text-primary transition-colors duration-300">Documentation</li>
                <li className="hover:text-primary transition-colors duration-300">API Reference</li>
                <li className="hover:text-primary transition-colors duration-300">Status Page</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-300">
            <p>&copy; 2025 Siksha.ai. All rights reserved. Built with AI for the future of education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}