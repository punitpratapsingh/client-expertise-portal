
import { ArrowRight, BarChart2, FileCheck, Gauge, LineChart, PieChart, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PerformanceAuditing = () => {
  const auditProcessSteps = [
    {
      icon: <Gauge className="h-8 w-8 text-brand-purple" />,
      title: "Initial Assessment",
      description: "We analyze your current Core Web Vitals metrics and identify the most critical performance bottlenecks."
    },
    {
      icon: <LineChart className="h-8 w-8 text-brand-purple" />,
      title: "Comprehensive Analysis",
      description: "Our team performs in-depth analysis of your site's performance across various devices and network conditions."
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-brand-purple" />,
      title: "Competitive Benchmarking",
      description: "We compare your site against industry leaders and direct competitors to establish meaningful targets."
    },
    {
      icon: <FileCheck className="h-8 w-8 text-brand-purple" />,
      title: "Detailed Reporting",
      description: "You receive a comprehensive report with actionable recommendations and prioritized optimization strategies."
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-brand-purple" />,
      title: "Implementation Planning",
      description: "We create a roadmap for implementing improvements, with clear timelines and expected outcomes."
    }
  ];

  const auditMetricsTable = [
    { metric: "Largest Contentful Paint (LCP)", goal: "< 2.5 seconds", impact: "High", complexity: "Medium" },
    { metric: "First Input Delay (FID)", goal: "< 100ms", impact: "High", complexity: "Medium" },
    { metric: "Cumulative Layout Shift (CLS)", goal: "< 0.1", impact: "High", complexity: "Low" },
    { metric: "Time to First Byte (TTFB)", goal: "< 500ms", impact: "Medium", complexity: "High" },
    { metric: "Total Blocking Time (TBT)", goal: "< 300ms", impact: "Medium", complexity: "Medium" },
    { metric: "Speed Index", goal: "< 3.4 seconds", impact: "Medium", complexity: "Low" }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-brand-purple/5 to-brand-blue/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">
              <span className="gradient-text">Performance Auditing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Unlock the full potential of your website with our comprehensive performance audits.
              We identify all bottlenecks and provide actionable recommendations to improve user experience and conversion rates.
            </p>
            <Button className="bg-brand-purple hover:bg-brand-purple_light text-lg h-12 px-8">
              Request an Audit
            </Button>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our <span className="gradient-text">Audit Process</span></h2>
            <p className="text-lg text-gray-600">
              We follow a structured approach to identify performance issues and provide actionable recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {auditProcessSteps.map((step, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                <CardContent className="p-6">
                  <div className="bg-brand-purple/10 rounded-lg w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-brand-purple/20 transition-colors">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Key <span className="gradient-text">Performance Metrics</span></h2>
            <p className="text-lg text-gray-600">
              We track and optimize these critical metrics to ensure your website delivers the best possible user experience.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm mb-12 bg-white">
            <Table>
              <TableCaption>Core Web Vitals and performance metrics we analyze</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Target Goal</TableHead>
                  <TableHead>Business Impact</TableHead>
                  <TableHead>Implementation Complexity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditMetricsTable.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.metric}</TableCell>
                    <TableCell>{item.goal}</TableCell>
                    <TableCell>{item.impact}</TableCell>
                    <TableCell>{item.complexity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6 text-white">Ready to <span className="text-brand-blue">Optimize</span> Your Website?</h2>
            <p className="text-lg mb-8">
              Our performance audits provide actionable insights that lead to measurable improvements in user experience, 
              conversion rates, and search engine rankings. Get started today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-brand-purple hover:bg-brand-purple_light text-lg h-12 px-8">
                Request an Audit
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg h-12 px-8">
                View Sample Report <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PerformanceAuditing;
