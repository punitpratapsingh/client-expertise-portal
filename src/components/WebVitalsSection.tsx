
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Clock, Zap } from "lucide-react";

const WebVitalsSection = () => {
  return (
    <section id="web-vitals" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Core Web Vitals <span className="gradient-text">Pain Points</span></h2>
          <p className="text-lg text-gray-600">
            Poor web performance directly impacts your bottom line. Slow websites frustrate users,
            reduce conversions, and hurt your search rankings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 bg-brand-purple/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Clock className="text-brand-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Largest Contentful Paint (LCP)</h3>
              <p className="text-gray-600 mb-4">
                Slow LCP frustrates users waiting for content to appear, leading to high bounce rates and lost revenue.
              </p>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="text-red-600 text-sm font-medium">Impact on Business:</p>
                <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
                  <li>25% increase in bounce rate</li>
                  <li>18% decrease in conversions</li>
                  <li>Lower search ranking position</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 bg-brand-purple/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Zap className="text-brand-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">First Input Delay (FID)</h3>
              <p className="text-gray-600 mb-4">
                Long input delays prevent user interactions, creating a frustrating experience that drives customers away.
              </p>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="text-red-600 text-sm font-medium">Impact on Business:</p>
                <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
                  <li>38% lower session duration</li>
                  <li>23% fewer page views per session</li>
                  <li>Higher customer acquisition costs</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 bg-brand-purple/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <BarChart className="text-brand-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cumulative Layout Shift (CLS)</h3>
              <p className="text-gray-600 mb-4">
                Unexpected layout shifts cause misclicks and frustration, driving users away from your site.
              </p>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="text-red-600 text-sm font-medium">Impact on Business:</p>
                <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
                  <li>24% abandonment on checkout pages</li>
                  <li>15% decrease in form submissions</li>
                  <li>Damaged brand perception</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">How We <span className="gradient-text">Solve</span> These Problems</h3>
              <p className="text-gray-600 mb-6">
                Our comprehensive approach tackles all Core Web Vitals issues to maximize your site's performance, user experience, and conversions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Asset Optimization</span>
                    <p className="text-sm text-gray-600">Compress images, optimize JavaScript, and minimize CSS to speed up loading times.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Code Splitting & Lazy Loading</span>
                    <p className="text-sm text-gray-600">Load only what's needed, when it's needed to improve LCP and FID.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Layout Stabilization</span>
                    <p className="text-sm text-gray-600">Reserve space for dynamic content to eliminate layout shifts.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-3">Average Improvements Our Clients See</h4>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-brand-purple">52%</div>
                    <p className="text-sm text-gray-600">Faster LCP</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-brand-purple">68%</div>
                    <p className="text-sm text-gray-600">Reduced CLS</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-brand-purple">43%</div>
                    <p className="text-sm text-gray-600">Better FID</p>
                  </div>
                </div>
                <div className="mt-6 bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-medium">Business Impact</p>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="text-left">
                      <div className="text-2xl font-bold text-green-600">+27%</div>
                      <p className="text-xs text-gray-600">Conversion Rate</p>
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold text-green-600">-32%</div>
                      <p className="text-xs text-gray-600">Bounce Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebVitalsSection;
