import { Link } from "wouter";
import { GraduationCap } from "lucide-react";

export default function Nav() {
  return (
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
  );
}