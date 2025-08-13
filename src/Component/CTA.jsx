import { Link } from "wouter";
import { Star, Users } from "lucide-react";

export default function CTA() {
  return (
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
  );
}