import { GraduationCap } from "lucide-react";

export default function Footer() {
  return (
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
          <p>&copy; 2025 Siksha.ai. All rights reserved. Built for the future of education.</p>
        </div>
      </div>
    </footer>
  );
}