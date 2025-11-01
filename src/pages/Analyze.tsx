import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Upload, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Analyze = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isJobDescExpanded, setIsJobDescExpanded] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStage, setAnalysisStage] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      const validTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      
      if (!validTypes.includes(fileType)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF or DOCX file.",
          variant: "destructive",
        });
        return;
      }
      
      setFile(selectedFile);
      toast({
        title: "File Uploaded",
        description: `${selectedFile.name} is ready for analysis.`,
      });
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      const fileType = droppedFile.type;
      const validTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      
      if (!validTypes.includes(fileType)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF or DOCX file.",
          variant: "destructive",
        });
        return;
      }
      
      setFile(droppedFile);
      toast({
        title: "File Uploaded",
        description: `${droppedFile.name} is ready for analysis.`,
      });
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      toast({
        title: "No File Selected",
        description: "Please upload a resume file first.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate analysis stages
    setAnalysisStage("Parsing resume...");
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setAnalysisStage("Running AI analysis...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setAnalysisStage("Generating insights...");
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsAnalyzing(false);
    navigate("/results");
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
          <Link to="/">
            <Button variant="ghost">Back to Home</Button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <div className="inline-block">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="inline h-4 w-4 mr-2" />
              AI-Powered Analysis
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">Get Your Resume ATS-Ready in Seconds</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your resume and optionally add a job description for tailored insights
          </p>
        </div>

        <div className="space-y-6 animate-scale-in">
          {/* File Upload Card */}
          <Card className="border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-8">
              <div
                className="space-y-4"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                <input
                  type="file"
                  id="resume-upload"
                  className="hidden"
                  accept=".pdf,.docx"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="resume-upload"
                  className="flex flex-col items-center justify-center cursor-pointer space-y-4 py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-foreground">
                      {file ? file.name : "Drop your resume here or click to browse"}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Supports PDF and DOCX files (max 10MB)
                    </p>
                  </div>
                  {!file && (
                    <Button variant="outline" type="button">
                      Choose File
                    </Button>
                  )}
                </label>
                {file && (
                  <div className="flex items-center justify-between bg-secondary/50 p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-medium">{file.name}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setFile(null)}
                    >
                      Remove
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Job Description Card */}
          <Card className="border-border">
            <CardContent className="p-6">
              <button
                onClick={() => setIsJobDescExpanded(!isJobDescExpanded)}
                className="w-full flex items-center justify-between text-left"
              >
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Job Description (Optional)</h3>
                  <p className="text-sm text-muted-foreground">
                    Add a job description to get keyword matching and role-specific insights
                  </p>
                </div>
                {isJobDescExpanded ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
              {isJobDescExpanded && (
                <div className="mt-4">
                  <Textarea
                    placeholder="Paste the job description here to get tailored keyword matching and optimization suggestions..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="min-h-[200px] resize-y"
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Analyze Button */}
          <div className="flex flex-col items-center gap-4">
            <Button
              variant="hero"
              size="xl"
              onClick={handleAnalyze}
              disabled={!file || isAnalyzing}
              className="w-full max-w-md"
            >
              {isAnalyzing ? (
                <>
                  <Sparkles className="animate-spin" />
                  {analysisStage}
                </>
              ) : (
                <>
                  <Sparkles />
                  Analyze Resume
                </>
              )}
            </Button>
            {isAnalyzing && (
              <div className="w-full max-w-md">
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-hero animate-pulse" style={{ width: "60%" }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Info Card */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">What You'll Get</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• ATS compatibility score (0-100) with detailed breakdown</li>
                    <li>• Skill extraction and categorization</li>
                    <li>• Keyword matching analysis (if job description provided)</li>
                    <li>• Prioritized improvement suggestions</li>
                    <li>• Downloadable PDF report</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analyze;
