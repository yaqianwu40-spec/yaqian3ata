import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layout,
  BrainCircuit,
  TrendingUp,
  Code2,
  ClipboardCheck,
  ChevronRight,
  Download,
  Mail,
  ArrowRight,
  ExternalLink,
  Github,
  Award,
  Zap,
  Menu,
  X,
  FileText,
  User,
  Coffee,
  Lightbulb
} from 'lucide-react';
import { cn } from './lib/utils';
import { Project, Achievement, Capability, TimelineItem } from './types';
import {
  PERSONAL_INFO,
  ACHIEVEMENTS,
  CAPABILITIES,
  TIMELINE,
  PROJECTS
} from './constants';

const NavItems = [
  { id: 'home', label: '首页', icon: Layout },
  { id: 'projects', label: '项目案例', icon: Zap },
  { id: 'about', label: '关于我', icon: User },
  { id: 'methodology', label: '方法论', icon: Lightbulb },
  { id: 'resume', label: '简历', icon: FileText },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary-blue selection:text-white">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-bold text-white text-lg">
              W
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block">吴亚倩 / PM</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 glass p-1 rounded-full">
            {NavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                  activeTab === item.id 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                    : "text-gray-400 hover:text-white"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
               onClick={() => setActiveTab('resume')}
               className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
            >
              <Download className="w-4 h-4" />
              下载简历
            </button>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {NavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "text-2xl font-bold transition-colors",
                  activeTab === item.id ? "text-blue-500" : "text-gray-400 hover:text-white"
                )}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'home' && <HomeView setActiveTab={setActiveTab} />}
            {activeTab === 'projects' && <ProjectsView />}
            {activeTab === 'about' && <AboutView />}
            {activeTab === 'methodology' && <MethodologyView />}
            {activeTab === 'resume' && <ResumeView />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display font-bold text-2xl mb-2">准备好开启新篇章？</h3>
            <p className="text-gray-400">期待与您的团队共创价值。</p>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>{PERSONAL_INFO.email}</span>
            </div>
            <p className="text-xs text-gray-500 mt-4">© 2026 吴亚倩. Designed with focus on AI & Education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomeView({ setActiveTab }: { setActiveTab: (t: string) => void }) {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-20 space-y-8">
        <div className="space-y-8 flex flex-col items-center">
          <div className="space-y-4">
            <motion.div 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-blue-400 text-xs font-semibold tracking-wider uppercase mx-auto"
            >
              <Zap className="w-3 h-3 fill-current" />
              AI 产品经理
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-tight">
              用产品思维，<br />
              把 <span className="blue-gradient">AI 能力</span><br />
              变成可持续增长。
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mx-auto">
              {PERSONAL_INFO.subtitle}。4年产品经验，专注从 0 到 1 搭建与 AIGC 商业化落地。
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => setActiveTab('projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2 group"
            >
              查看案例经历
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
               onClick={() => setActiveTab('resume')}
               className="px-8 py-3 glass text-white rounded-full font-bold hover:bg-white/10 transition-all"
            >
              下载简历
            </button>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {["AI产品经理", "教育科技", "数据产品", "AIGC商业化", "B/C端产品", "产品增长"].map(tag => (
              <span key={tag} className="text-xs text-gray-500 font-mono border border-white/5 px-2 py-1 rounded lowercase">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-display font-bold">核心能力展示</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            跨越业务、技术与商业，为数字化转型提供全链路产品解决方案。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = {
              Layout,
              BrainCircuit,
              TrendingUp,
              Code2,
              ClipboardCheck
            }[cap.iconName] || Layout;

            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-2xl hover:border-blue-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{cap.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="glass rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 -z-10" />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 text-center">
          {ACHIEVEMENTS.map((stat, idx) => (
            <motion.div 
               key={stat.label}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="space-y-1"
            >
              <h4 className="text-4xl md:text-5xl font-display font-extrabold text-gradient">{stat.value}</h4>
              <p className="font-bold text-blue-500 text-sm whitespace-nowrap">{stat.label}</p>
              <p className="text-xs text-gray-500 mt-2">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Brief */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-bold">精选项目案例</h2>
            <p className="text-gray-400 max-w-xl">
              深度复盘核心项目，从业务背景到商业化结果的全闭环沉淀。
            </p>
          </div>
          <button 
            onClick={() => setActiveTab('projects')}
            className="text-blue-500 font-bold flex items-center gap-2 hover:underline"
          >
            查看全部案例 <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setActiveTab('projects')} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void; key?: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group cursor-pointer glass rounded-2xl overflow-hidden hover:border-white/20 transition-all"
      onClick={onClick}
    >
      <div className="aspect-video p-8 flex items-end relative overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
        )}
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
        
        <div className="absolute top-8 right-8 w-20 h-20 bg-blue-600/20 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700" />
        <div className="relative z-10 space-y-2">
          <span className="px-2 py-1 text-[10px] font-mono tracking-tighter bg-blue-500/20 text-blue-400 rounded border border-blue-500/20 uppercase">
            {project.category}
          </span>
          <h3 className="text-2xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-1">{project.tagline}</p>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex gap-4">
           {project.results.slice(0, 2).map((res: string, i: number) => (
             <div key={i} className="flex-1 p-3 rounded-xl bg-white/5 border border-white/5">
                <p className="text-[10px] text-gray-500 uppercase font-bold">Key Result</p>
                <p className="text-xs font-semibold text-gray-300 line-clamp-1 truncate">{res}</p>
             </div>
           ))}
        </div>
        <div className="flex items-center justify-between">
           <span className="text-xs text-gray-500 font-mono">{project.period}</span>
           <button className="p-2 rounded-full glass hover:bg-blue-600 hover:text-white transition-colors">
              <ArrowRight className="w-4 h-4" />
           </button>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectsView() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-5xl font-display font-bold">项目经历回顾</h2>
        <p className="text-gray-400 max-w-2xl">
          不是做过项目，而是通过完整的产品方法论去定义、解决并验证价值。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} onClick={() => setSelectedProject(project)}>
            <ProjectCard project={project} onClick={() => {}} />
          </div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0A0A0A]/90 backdrop-blur-md overflow-y-auto pt-20 px-6 pb-20"
          >
            <div className="max-w-4xl mx-auto glass rounded-3xl overflow-hidden relative">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-12 space-y-12">
                <header className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="glass px-3 py-1 rounded-full text-xs text-blue-400 font-mono">{selectedProject.category}</span>
                    <span className="glass px-3 py-1 rounded-full text-xs text-gray-400 font-mono">{selectedProject.period}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">{selectedProject.title}</h3>
                  <p className="text-xl text-blue-500 font-medium italic">“{selectedProject.tagline}”</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <section className="space-y-3">
                      <h4 className="flex items-center gap-2 text-lg font-bold">
                        <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                        项目背景
                      </h4>
                      <p className="text-gray-400 leading-relaxed">{selectedProject.background}</p>
                    </section>
                    <section className="space-y-3">
                      <h4 className="flex items-center gap-2 text-lg font-bold uppercase tracking-tight text-red-400">
                        核心痛点
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.painPoints.map((p: string, i: number) => (
                           <li key={i} className="flex gap-3 text-sm text-gray-400">
                             <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/50 shrink-0" />
                             {p}
                           </li>
                        ))}
                      </ul>
                    </section>
                    <section className="space-y-3">
                      <h4 className="flex items-center gap-2 text-lg font-bold text-green-400">
                        产品方案
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.solutions.map((s: string, i: number) => (
                           <li key={i} className="flex gap-3 text-sm text-gray-400">
                             <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400/50 shrink-0" />
                             {s}
                           </li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  <div className="space-y-10">
                    <section className="glass p-6 rounded-2xl border-blue-500/20 space-y-3">
                      <h4 className="flex items-center gap-2 text-lg font-bold text-blue-400">
                         <BrainCircuit className="w-5 h-5" />
                         AI 能力体现
                      </h4>
                      <p className="text-sm text-gray-300 font-medium leading-relaxed">{selectedProject.aiCapability}</p>
                    </section>

                    <section className="space-y-4">
                      <h4 className="text-lg font-bold border-b border-white/5 pb-2">商业化结果</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {selectedProject.results.map((r: string, i: number) => (
                          <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-blue-600/5 border border-blue-600/10 hover:bg-blue-600/10 transition-colors">
                            <TrendingUp className="w-6 h-6 text-blue-500 shrink-0" />
                            <span className="text-sm font-bold text-gray-200">{r}</span>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="p-6 rounded-2xl bg-white/5 italic text-gray-400 text-sm border-l-2 border-white/20">
                      <p className="font-bold text-white mb-2 not-italic text-xs uppercase tracking-widest opacity-50">我的复盘</p>
                       “{selectedProject.reflection}”
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AboutView() {
  return (
    <div className="space-y-24">
      {/* Intro */}
      <section className="max-w-3xl space-y-8">
        <h2 className="text-5xl font-display font-bold">关于我</h2>
        <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
          <p>
            我是吴亚倩，一名拥有 4 年经验的 AI 产品经理。我坚信产品的本质是解决问题，而 AI 是将解决问题的效率提升至量级的核心引擎。
          </p>
          <p>
            从软件工程的工科逻辑出发，到 MBA 与 PMP 的系统化思考，我致力于在教育科技、大数据与 AIGC 领域寻找“技术-产品-商业”的最优解。
          </p>
        </div>
      </section>

      {/* Grid: Education & Certification & Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-12">
          <section className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Award className="text-blue-500" />
              专业背景
            </h3>
            <div className="space-y-4">
              <div className="glass p-6 rounded-2xl">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">教育经历</p>
                <p className="font-bold text-xl">{PERSONAL_INFO.education.school}</p>
                <p className="text-gray-400">{PERSONAL_INFO.education.degree}</p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {PERSONAL_INFO.certifications.map(cert => (
                  <div key={cert} className="glass p-4 rounded-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <Coffee className="text-blue-500" />
            产品观
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {PERSONAL_INFO.productPhilosophy.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-2xl border-l-[4px] border-blue-600/50"
              >
                <p className="text-gray-200 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Timeline */}
      <section className="space-y-12">
        <h3 className="text-2xl font-bold text-center">职业发展路径</h3>
        <div className="max-w-4xl mx-auto relative px-6 md:px-0">
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="space-y-12">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className={cn(
                "relative flex items-center gap-8 md:gap-0",
                idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              )}>
                <div className="absolute left-[31px] md:left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#0A0A0A] -translate-x-1/2 z-10" />
                
                <div className="w-full md:w-[45%]">
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-2xl space-y-2 hover:border-gray-500 transition-colors"
                  >
                    <span className="text-xs text-blue-500 font-mono font-bold tracking-tighter">{item.period}</span>
                    <h4 className="text-lg font-bold leading-tight">{item.company}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{item.role}</p>
                    <p className="text-sm text-gray-400 mt-2">{item.description}</p>
                  </motion.div>
                </div>
                <div className="hidden md:block w-[10%]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function MethodologyView() {
  const content = [
    {
      title: "如何做 AI 产品从 0 到 1",
      desc: "从底层算法逻辑到工程落地，定义 AI 产品的边界与能力栈。",
      tags: ["AI Infra", "SOP"]
    },
    {
      title: "如何让 AIGC 真正实现商业化",
      desc: "利用 AIGC 解决非标咨询的自动化，实现人效 4 倍提升的闭环逻辑。",
      tags: ["Commercialization", "AIGC"]
    },
    {
      title: "如何设计可复制的数据产品",
      desc: "标准化交付体系的构建：从模块化组件到可持续复用的产品模型。",
      tags: ["Data Product", "SaaS"]
    },
    {
      title: "产品经理的商业化思维训练",
      desc: "不仅仅是功能堆砌，而是寻找业务增长、成本优化与商业闭环的最优解。",
      tags: ["Mindset", "Growth"]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-5xl font-display font-bold">方法论专区</h2>
        <p className="text-gray-400 max-w-2xl">
          体现思维的深度，而不仅仅是执行的力度。这里我分享对 AI、商业化与产品本质的系统性思考。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {content.map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="glass p-8 rounded-[2rem] flex flex-col justify-between overflow-hidden group relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <Lightbulb className="w-32 h-32 rotate-12" />
            </div>
            <div className="space-y-4 relative z-10">
              <div className="flex gap-2">
                {item.tags.map(t => (
                   <span key={t} className="text-[10px] font-mono border border-white/10 px-2 py-0.5 rounded-full text-gray-500">{t}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold font-display group-hover:text-blue-400 transition-colors">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
            <button className="mt-8 flex items-center gap-2 text-sm font-bold text-gray-200 group-hover:text-white">
              阅读专栏 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>
      
      <div className="glass p-12 rounded-[2.5rem] bg-gradient-to-br from-blue-900/10 to-transparent text-center space-y-6">
        <h4 className="text-2xl font-bold">更多思考深度沉淀中...</h4>
        <p className="text-gray-400">我也常在小红书/即刻分享最新的 AI 产品化心得，欢迎交流。</p>
        <div className="flex justify-center gap-4">
           {/* Simple placeholders for social links */}
           <div className="p-3 glass rounded-full hover:bg-white/10 cursor-pointer"><Mail size={20} /></div>
           <div className="p-3 glass rounded-full hover:bg-white/10 cursor-pointer"><Github size={20} /></div>
        </div>
      </div>
    </div>
  );
}

function ResumeView() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="flex justify-between items-end">
        <div className="space-y-4">
          <h2 className="text-5xl font-display font-bold">在线简历</h2>
          <p className="text-gray-400">
            结构化展示核心经历。
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all">
          <Download className="w-5 h-5" />
          PDF 版本下载
        </button>
      </div>

      <div className="glass rounded-3xl p-8 md:p-12 space-y-12">
        <header className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 pb-12 border-b border-white/5">
           <div className="space-y-4 text-center md:text-left">
              <h3 className="text-4xl font-display font-black text-gradient">{PERSONAL_INFO.name} / PM</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-gray-400">
                <span className="flex items-center gap-2"><User size={14}/> 4年产品经验 ｜ ENTJ</span>
                <span className="flex items-center gap-2"><Mail size={14}/> {PERSONAL_INFO.email}</span>
                <span className="flex items-center gap-2"><Code2 size={14}/> 软件工程背景 ｜ 27岁</span>
              </div>
           </div>
           <div className="w-24 h-24 rounded-2xl overflow-hidden glass p-1 shrink-0 bg-white/5">
              <img 
                src={PERSONAL_INFO.avatar}
                alt="Profile" 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
           </div>
        </header>

        <section className="space-y-8">
           <h4 className="text-xl font-bold tracking-widest text-blue-500 flex items-center gap-4">
              <div className="h-0.5 flex-1 bg-blue-500/20" />
              工作经历
              <div className="h-0.5 flex-1 bg-blue-500/20" />
           </h4>
           
           <div className="space-y-12">
             {TIMELINE.map((exp, i) => (
               <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-1 space-y-1">
                    <p className="text-sm font-mono font-bold text-gray-500">{exp.period}</p>
                  </div>
                  <div className="md:col-span-3 space-y-3">
                    <div className="flex justify-between items-start">
                       <h5 className="text-xl font-bold text-gray-100">{exp.company}</h5>
                       <span className="px-2 py-0.5 bg-blue-600/10 text-blue-500 text-[10px] font-bold rounded uppercase">{exp.role}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                    {/* Add snippets of projects related to that role */}
                    <div className="flex gap-2">
                       {PROJECTS.filter(p => p.period.includes(exp.period.slice(0, 4))).map(pj => (
                         <span key={pj.id} className="text-[10px] glass px-2 py-1 rounded text-gray-400">#{pj.title}</span>
                       ))}
                    </div>
                  </div>
               </div>
             ))}
           </div>
        </section>

        <section className="space-y-8">
           <h4 className="text-xl font-bold tracking-widest text-blue-500 flex items-center gap-4">
              <div className="h-0.5 flex-1 bg-blue-500/20" />
              专业认证
              <div className="h-0.5 flex-1 bg-blue-500/20" />
           </h4>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {PERSONAL_INFO.certifications.map(c => (
                <div key={c} className="p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                  <p className="text-sm font-bold text-gray-300">{c}</p>
                </div>
              ))}
           </div>
        </section>

        <div className="text-center pt-12 border-t border-white/5">
           <p className="text-xl font-display font-bold mb-4 italic text-gray-400">“把 AI 能力变成可持续增长。”</p>
           <button className="text-blue-500 font-bold hover:underline">返回顶部阅读详细案例</button>
        </div>
      </div>
    </div>
  );
}
