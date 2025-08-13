
import { Camera, Users, Shield } from "lucide-react";

export default function SaaSModel() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 animate-fadeInUp">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 glass rounded-full px-4 py-2 text-primary hover:bg-primary/20 border border-primary/30 hover-scale">
            SaaS Platform for Schools & Coaching Centers
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
  );
}