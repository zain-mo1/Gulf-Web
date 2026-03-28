import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, BarChart3, TrendingUp, MousePointerClick, Calendar, ArrowLeft } from "lucide-react";
import { getAnalyticsData, AnalyticsEvent } from "@/lib/analytics";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from "recharts";

const PASSWORD = "admin"; // Using a simple password for the demo

const AnalyticsDashboard = ({ data }: { data: AnalyticsEvent[] }) => {
  // Aggregate data
  const pageViews = data.filter((e) => e.category === "Page" && e.action === "View").length;
  const totalClicks = data.filter((e) => e.action === "Click").length;
  const ctaClicks = data.filter((e) => e.category === "CTA").length;
  
  // Prepare chart data
  const clicksByLabel = data
    .filter((e) => e.action === "Click" && e.label)
    .reduce((acc: any, curr) => {
      acc[curr.label!] = (acc[curr.label!] || 0) + 1;
      return acc;
    }, {});
    
  const barChartData = Object.keys(clicksByLabel)
    .map(key => ({ name: key, count: clicksByLabel[key] }))
    .sort((a, b) => b.count - a.count);

  const sectionViews = data
    .filter((e) => e.category === "Section" && e.action === "View" && e.label)
    .reduce((acc: any, curr) => {
      acc[curr.label!] = (acc[curr.label!] || 0) + 1;
      return acc;
    }, {});

  const pieChartData = Object.keys(sectionViews).map(key => ({
    name: key,
    value: sectionViews[key]
  }));

  const COLORS = ['hsl(217, 91%, 60%)', 'hsl(200, 100%, 50%)', 'hsl(217, 91%, 40%)', 'hsl(200, 100%, 30%)'];

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 text-foreground" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-display-3 font-bold mb-2">لوحة التحكم والتحليلات 📊</h1>
            <p className="text-muted-foreground text-body-lg">احصائيات التفاعل المحلية (Demo)</p>
          </div>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-elevated border border-border hover:bg-secondary transition-colors"
          >
            العودة للموقع
            <ArrowLeft className="w-4 h-4" />
          </a>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-2xl bg-card border border-border shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary"><Calendar className="w-6 h-6" /></div>
            <div>
              <p className="text-muted-foreground mb-1">زيارات الصفحات</p>
              <h2 className="text-heading-2 font-bold">{pageViews}</h2>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-6 rounded-2xl bg-card border border-border shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary"><MousePointerClick className="w-6 h-6" /></div>
            <div>
              <p className="text-muted-foreground mb-1">إجمالي النقرات</p>
              <h2 className="text-heading-2 font-bold">{totalClicks}</h2>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-6 rounded-2xl bg-card border border-border shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-xl bg-green-500/10 text-green-500"><TrendingUp className="w-6 h-6" /></div>
            <div>
              <p className="text-muted-foreground mb-1">نقرات CTA</p>
              <h2 className="text-heading-2 font-bold">{ctaClicks}</h2>
            </div>
          </motion.div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="p-6 rounded-2xl bg-card border border-border shadow-sm">
            <h3 className="text-heading-3 mb-6 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary" /> أكثر الأزرار نقراً</h3>
            <div className="h-[300px]">
              {barChartData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barChartData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                    <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                    <YAxis dataKey="name" type="category" width={100} stroke="hsl(var(--foreground))" tick={{ fill: 'hsl(var(--foreground))' }} />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--foreground))' }} />
                    <Bar dataKey="count" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-muted-foreground">لا توجد بيانات كافية للنقرات</div>
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="p-6 rounded-2xl bg-card border border-border shadow-sm">
            <h3 className="text-heading-3 mb-6 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary" /> الأقسام الأكثر مشاهدة</h3>
            <div className="h-[300px]">
              {pieChartData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--foreground))' }} />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-muted-foreground">لا توجد بيانات كافية للمشاهدات</div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default function Analytics() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState<AnalyticsEvent[]>([]);

  useEffect(() => {
    // Check if previously auth'd this session
    if (sessionStorage.getItem('analytics_auth') === 'true') {
      setIsAuthenticated(true);
      setData(getAnalyticsData());
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('analytics_auth', 'true');
      setData(getAnalyticsData());
      setError("");
    } else {
      setError("كلمة المرور غير صحيحة");
    }
  };

  if (isAuthenticated) {
    return <AnalyticsDashboard data={data} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4" dir="rtl">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full p-8 rounded-3xl bg-card border border-border shadow-xl text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
          <Lock className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-heading-2 mb-2 text-foreground">الوصول مقيد</h1>
        <p className="text-muted-foreground mb-8">يرجى إدخال كلمة المرور للوصول إلى لوحة التحليلات.</p>
        
        <form onSubmit={handleLogin} className="space-y-4 text-right">
          <div>
            <input
              type="password"
              placeholder="كلمة المرور..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all text-left"
              dir="ltr"
            />
            {error && <p className="text-destructive text-sm mt-2">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-primary text-white font-medium hover:opacity-90 transition-opacity glow"
          >
            دخول
          </button>
        </form>
      </motion.div>
    </div>
  );
}
