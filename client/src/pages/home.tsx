import Typewriter from '@/components/typewriter';
import FloatingParticles from '@/components/floating-particles';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function Home() {
  useScrollAnimation();

  const projects = [
    {
      title: "Climate Data Visualization",
      description: "Interactive dashboard analyzing global temperature trends and their correlation with economic indicators across developing nations.",
    },
    {
      title: "Healthcare Access Study", 
      description: "Machine learning analysis identifying barriers to healthcare access in underserved communities using demographic and geographic data.",
    },
    {
      title: "Education Equity Dashboard",
      description: "Real-time monitoring system tracking educational resource distribution and student outcomes across different socioeconomic backgrounds.",
    },
    {
      title: "Urban Mobility Analysis",
      description: "Comprehensive study of public transportation efficiency and its impact on community connectivity and economic opportunity.",
    },
    {
      title: "Food Security Mapping",
      description: "Geographic analysis of food deserts and their correlation with health outcomes, informing policy recommendations for local governments.",
    },
    {
      title: "Social Media Sentiment",
      description: "Natural language processing project analyzing public sentiment around social justice issues to understand community concerns and priorities.",
    },
  ];

  const articles = [
    {
      title: "The Ethics of Data: Why Every Analyst Should Care",
      description: "Exploring the moral responsibilities that come with data analysis and how our choices in methodology and presentation can impact real lives and communities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "Beyond Numbers: The Art of Data Storytelling",
      description: "How to transform complex datasets into compelling narratives that drive action and create meaningful change in organizations and communities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "The Non-Linear Path: My Journey into Data",
      description: "A personal reflection on transitioning careers, the challenges of learning data science, and why diverse backgrounds make stronger analysts.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    },
  ];

  return (
    <div className="min-h-screen font-inter overflow-x-hidden" style={{ backgroundColor: '#0e0e12', color: '#EAEAEA' }}>
      <FloatingParticles />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-white/10" style={{ backgroundColor: 'rgba(14, 14, 18, 0.8)' }}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-semibold text-lavender text-glow">
              Aadira
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-lavender transition-colors">
                About
              </a>
              <a href="#projects" className="hover:text-lavender transition-colors">
                Projects
              </a>
              <a href="#writing" className="hover:text-lavender transition-colors">
                Writing
              </a>
              <a href="#contact" className="hover:text-lavender transition-colors">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
              Hi, I'm <span className="text-lavender font-semibold">Aadira</span>
            </h1>
          </div>
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 font-light">
              <Typewriter words={['Analyst', 'Writer', 'Explorer']} />
            </p>
          </div>
          <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button className="bg-lavender px-8 py-3 rounded-full font-medium text-lg button-glow transition-all duration-300" style={{ color: '#0e0e12' }}>
              Explore more
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center fade-in-up">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <p className="text-lg leading-relaxed mb-6">
                I'm passionate about using data to create meaningful change in the world. My work sits at the intersection of analytics, storytelling, and social impact.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                When I'm not diving deep into datasets, you'll find me crafting thoughtful pieces about technology, society, and the stories that numbers tell us about our world.
              </p>
              <p className="text-lg leading-relaxed">
                I believe in the power of curiosity and continuous learning. Every project is an opportunity to explore, understand, and make a difference.
              </p>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://pixabay.com/get/gad2a9fbaff50a2821b2c4e2eac05d3f4d19f6d0b019af12dc89792fdf06c9b733f86d62d91fe66dc2d7cf76bb02c180a1ba551e0b6c96bce6dd4a8aad3aefd4e_1280.jpg"
                alt="Professional portrait"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center fade-in-up">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card border rounded-2xl p-6 transition-all duration-300 scale-in"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                  borderColor: 'rgba(201, 167, 243, 0.2)',
                  animationDelay: `${index * 0.1}s` 
                }}
              >
                <h3 className="text-xl font-semibold mb-3 text-lavender">
                  {project.title}
                </h3>
                <p className="mb-6 leading-relaxed" style={{ color: 'rgba(234, 234, 234, 0.8)' }}>
                  {project.description}
                </p>
                <button className="bg-lavender px-6 py-2 rounded-full text-sm font-medium button-glow transition-all duration-300" style={{ color: '#0e0e12' }}>
                  Explore more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center fade-in-up">
            Writing
          </h2>
          <div className="space-y-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className={`${index < articles.length - 1 ? 'border-b pb-8' : ''} fade-in-up`}
                style={{ 
                  borderColor: 'rgba(201, 167, 243, 0.2)',
                  animationDelay: `${index * 0.1}s` 
                }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="rounded-xl w-full md:w-48 h-48 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-lavender">
                      {article.title}
                    </h3>
                    <p className="mb-4 leading-relaxed" style={{ color: 'rgba(234, 234, 234, 0.8)' }}>
                      {article.description}
                    </p>
                    <button className="bg-lavender px-6 py-2 rounded-full text-sm font-medium button-glow transition-all duration-300" style={{ color: '#0e0e12' }}>
                      Explore more
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 fade-in-up">
            Let's Connect
          </h2>
          <p className="text-lg mb-12 fade-in-up" style={{ color: 'rgba(234, 234, 234, 0.8)', animationDelay: '0.1s' }}>
            I'm always interested in discussing new projects, collaborating on meaningful work, or just having a conversation about data and its impact on our world.
          </p>
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <button className="bg-lavender px-8 py-3 rounded-full font-medium text-lg button-glow transition-all duration-300" style={{ color: '#0e0e12' }}>
              Explore more
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t" style={{ borderColor: 'rgba(201, 167, 243, 0.2)' }}>
        <div className="container mx-auto text-center">
          <p style={{ color: 'rgba(234, 234, 234, 0.6)' }}>
            © 2024 Aadira. Still figuring things out – and that's okay.
          </p>
        </div>
      </footer>
    </div>
  );
}
