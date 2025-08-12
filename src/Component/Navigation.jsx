import { Bell, GraduationCap } from "lucide-react";
import { Link } from "wouter";

export function Navigation({ user }) {
  return (
    <nav className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white h-4 w-4" />
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-slate-100">
                SikshaAI
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary font-medium transition-colors">
              Dashboard
            </Link>
            <Link href="/exams" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary font-medium transition-colors">
              Exams
            </Link>
            <Link href="/analytics" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary font-medium transition-colors">
              Analytics
            </Link>
            <Link href="/study-plans" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary font-medium transition-colors">
              Study Plans
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full"></span>
            </button>
            {user && (
              <div className="flex items-center space-x-3">
                <img 
                  src={user.avatar} 
                  alt="User Avatar" 
                  className="w-8 h-8 rounded-full"
                />
                <span className="hidden md:block font-medium text-slate-900 dark:text-slate-100">
                  {user.name}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
