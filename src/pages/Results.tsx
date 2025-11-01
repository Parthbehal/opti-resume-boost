import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText, Download, RotateCcw, CheckCircle2, AlertCircle, Info } from "lucide-react";
import { Link } from "react-router-dom";

const Results = () => {
  // Mock data - will be replaced with actual analysis results
  const atsScore = 78;
  const scoreBreakdown = {
    formatting: 85,
    keywords: 72,
    structure: 80,
  };

  const skills = {
    technical: ["React", "TypeScript", "Node.js", "Python", "SQL", "AWS", "Docker"],
    soft: ["Leadership", "Communication", "Problem Solving", "Team Collaboration"],
    certifications: ["AWS Certified", "PMP", "Agile Scrum Master"],
  };

  const keywordMatching = {
    matched: ["React", "TypeScript", "Leadership", "Agile"],
    missing: ["Kubernetes", "CI/CD", "Microservices"],
    additional: ["Docker", "AWS", "SQL"],
  };

  const improvements = [
    {
      priority: "high",
      title: "Add missing keywords",
      description: "Include 'Kubernetes', 'CI/CD', and 'Microservices' to better match the job description.",
    },
    {
      priority: "high",
      title: "Optimize work experience section",
      description: "Use more action verbs and quantify your achievements with specific metrics.",
    },
    {
      priority: "medium",
      title: "Improve formatting consistency",
      description: "Standardize date formats and bullet point styles throughout the document.",
    },
    {
      priority: "medium",
      title: "Add measurable outcomes",
      description: "Include specific numbers, percentages, or metrics to demonstrate impact.",
    },
    {
      priority: "low",
      title: "Update skills section",
      description: "Group skills by category and prioritize those relevant to the target role.",
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return "bg-success/10";
    if (score >= 60) return "bg-warning/10";
    return "bg-destructive/10";
  };

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <FileText className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">OptiResume</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
            <Link to="/analyze">
              <Button variant="hero" size="sm">
                <RotateCcw className="mr-2 h-4 w-4" />
                Analyze Another
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2 animate-fade-in">
            <h1 className="text-3xl lg:text-4xl font-bold">Resume Analysis Results</h1>
            <p className="text-muted-foreground">Your comprehensive ATS compatibility report</p>
          </div>

          {/* ATS Score Card */}
          <Card className="border-border shadow-medium animate-scale-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className={`relative w-48 h-48 rounded-full ${getScoreBgColor(atsScore)} flex items-center justify-center`}>
                    <div className="text-center">
                      <div className={`text-6xl font-bold ${getScoreColor(atsScore)}`}>{atsScore}</div>
                      <div className="text-sm text-muted-foreground mt-1">ATS Score</div>
                    </div>
                  </div>
                  <Badge variant={atsScore >= 80 ? "default" : atsScore >= 60 ? "secondary" : "destructive"} className="text-sm">
                    {atsScore >= 80 ? "Excellent" : atsScore >= 60 ? "Good" : "Needs Improvement"}
                  </Badge>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Formatting</span>
                      <span className="text-sm font-semibold">{scoreBreakdown.formatting}%</span>
                    </div>
                    <Progress value={scoreBreakdown.formatting} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Keywords</span>
                      <span className="text-sm font-semibold">{scoreBreakdown.keywords}%</span>
                    </div>
                    <Progress value={scoreBreakdown.keywords} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Structure</span>
                      <span className="text-sm font-semibold">{scoreBreakdown.structure}%</span>
                    </div>
                    <Progress value={scoreBreakdown.structure} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Skills Section */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Extracted Skills</CardTitle>
                <CardDescription>Skills identified from your resume</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.certifications.map((skill) => (
                      <Badge key={skill} className="bg-success/10 text-success border-success/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Keyword Matching */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Keyword Matching</CardTitle>
                <CardDescription>Comparison with job description</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    <h4 className="text-sm font-semibold text-muted-foreground">Matched Keywords</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {keywordMatching.matched.map((keyword) => (
                      <Badge key={keyword} className="bg-success/10 text-success border-success/20">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-4 w-4 text-destructive" />
                    <h4 className="text-sm font-semibold text-muted-foreground">Missing Keywords</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {keywordMatching.missing.map((keyword) => (
                      <Badge key={keyword} variant="destructive">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-semibold text-muted-foreground">Additional Skills</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {keywordMatching.additional.map((keyword) => (
                      <Badge key={keyword} variant="outline">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Improvement Suggestions */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Improvement Suggestions</CardTitle>
              <CardDescription>Prioritized action items to optimize your resume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {improvements.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <div className="pt-1">
                      <Badge variant={getPriorityVariant(item.priority)} className="uppercase text-xs">
                        {item.priority}
                      </Badge>
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Executive Summary */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle>Executive Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Your resume scores <strong className={getScoreColor(atsScore)}>{atsScore}/100</strong> on ATS compatibility, which is
                considered <strong>Good</strong>. The formatting and structure are strong, but there's room for improvement in keyword
                optimization. Focus on adding the missing keywords identified above and quantifying your achievements with specific
                metrics. These changes should significantly improve your resume's performance in automated screening systems.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="flex justify-center pt-6">
            <Link to="/analyze">
              <Button variant="hero" size="xl">
                <RotateCcw className="mr-2" />
                Analyze Another Resume
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
