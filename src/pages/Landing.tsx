import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, FileText, BarChart3, Sparkles, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-resume.jpg";

const Landing = () => {
  const features = [
    {
      icon: BarChart3,
      title: "ATS Score Analysis",
      description: "Get an instant 0-100 ATS compatibility score with detailed breakdown of formatting, keywords, and structure.",
    },
    {
      icon: Target,
      title: "Keyword Matching",
      description: "Compare your resume against job descriptions to identify missing keywords and optimize for target roles.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Insights",
      description: "Receive intelligent suggestions to improve content, formatting, and overall resume effectiveness.",
    },
    {
      icon: FileText,
      title: "Skill Extraction",
      description: "Automatically identify and categorize technical skills, soft skills, and certifications from your resume.",
    },
    {
      icon: TrendingUp,
      title: "Improvement Priority",
      description: "Get prioritized action items with high/medium/low tags to focus your optimization efforts.",
    },
    {
      icon: CheckCircle2,
      title: "Industry Standards",
      description: "Ensure your resume meets modern hiring standards and passes through automated screening systems.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      content: "OptiResume helped me land 3x more interviews. The ATS score instantly showed what recruiters actually see.",
    },
    {
      name: "Michael Rodriguez",
      role: "Marketing Manager",
      content: "The keyword matching feature is a game-changer. I went from 2% to 35% response rate on applications.",
    },
    {
      name: "Emily Watson",
      role: "Product Designer",
      content: "Finally understand why my resume wasn't getting through. The AI suggestions were spot-on and actionable.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">OptiResume</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/analyze">
              <Button variant="ghost">Try Free</Button>
            </Link>
            <Link to="/analyze">
              <Button variant="hero">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                ✨ Powered by AI
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Get Your Resume{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">ATS-Ready</span> in Seconds
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Upload your resume and get instant AI-powered analysis with ATS scoring, keyword matching, and actionable
              improvement suggestions. Land more interviews with data-driven optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/analyze">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Analyze My Resume
                </Button>
              </Link>
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                View Sample Report
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Resumes Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">92%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-hero blur-3xl opacity-20 rounded-full"></div>
            <img
              src={heroImage}
              alt="Resume analysis interface"
              className="relative rounded-2xl shadow-medium w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">Everything You Need to Succeed</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive resume analysis powered by advanced AI to help you stand out in competitive job markets
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">Loved by Job Seekers</h2>
          <p className="text-xl text-muted-foreground">See how OptiResume helped professionals land their dream jobs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle2 key={i} className="h-4 w-4 text-success fill-success" />
                  ))}
                </div>
                <CardDescription className="text-base leading-relaxed italic">"{testimonial.content}"</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-hero border-0 text-primary-foreground">
          <CardContent className="text-center py-16 space-y-6">
            <h2 className="text-4xl font-bold">Ready to Optimize Your Resume?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of professionals who've improved their job search success with OptiResume
            </p>
            <Link to="/analyze">
              <Button variant="secondary" size="xl" className="mt-4">
                Start Free Analysis
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">OptiResume</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 OptiResume. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
