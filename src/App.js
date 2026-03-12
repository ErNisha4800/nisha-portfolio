import { motion, AnimatePresence } from "framer-motion";

import { useState, useEffect } from "react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-animated-bg text-gray-900 min-h-screen font-sans overflow-x-hidden">

      {/* Navbar */}
     <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
  scrolled
    ? "bg-white/70 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] py-3"
    : "bg-transparent py-6"
}`}> 

        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* <div 
            className="text-3xl font-extrabold text-[#6b63ff] cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            &lt; Nisha /&gt;
          </div> */}
          <div className="hidden md:flex gap-8 font-medium text-gray-600">
            {["About", "Skills", "Projects", "Contact"].map(item => (
             <button
  onClick={() => scrollToSection(item.toLowerCase())}
  className="nav-underline text-gray-600 hover:text-[#6b63ff] transition"
>
  {item}
</button>

              
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 pt-28 max-w-6xl mx-auto">
          <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1}} className="flex-1 section-fade">
          <h1 className="h-pop text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi, I'm Nisha <span className="animate-bounce inline-block">👋</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Creative Developer | AR, 3D, Block-based Systems | React & Three.js Software Developer 🚀 <br />
            <span className="text-[#6b63ff] font-semibold">
              AR • 3D • Block-based Systems
            </span>
          </p>

          <div className="flex gap-4 mb-8">
            <SocialButton href="https://github.com/ErNisha4800" icon="🐙" className="social-btn" />
            <SocialButton href="mailto:nishchaudhari4800@gmail.com" icon="📧" className="social-btn" />
            <SocialButton href="#" icon="💼" className="social-btn" />
          </div>

          <div className="flex gap-4">
            <GlowButton onClick={() => scrollToSection("contact")} className="glow-btn">Contact Me</GlowButton>
            <OutlineButton onClick={() => scrollToSection("projects")} className="glow-btn">View Work</OutlineButton>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
       transition={{ type: "spring", stiffness: 80, damping: 15 }}

          className="flex-1 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-[#6b63ff] rounded-full blur-3xl opacity-30 animate-pulse" />
            <img
              src="/nishaa.png"
              className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white shadow-2xl"
              alt="Nisha"
            />
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <Section id="skills" title="What I Do" subtitle="Technologies I use to build AR, 3D & Web apps">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 section-fade">
          {["JavaScript","React","Three.js","AR.js","Node.js","WebGL","GCP","Blockly","AWS","github"].map(skill => (
            <motion.div
                key={skill}
                whileHover={{ y: -10, scale: 1.05 }}
                className="card-pop neon-border backdrop-blur-xl bg-white/70 p-6 rounded-2xl shadow-lg border font-bold text-lg"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </Section>
{/* Experience */}
<Section id="experience" title="Experience" subtitle="Products & Platforms I have built">

    <div className="max-w-4xl mx-auto space-y-8 text-left section-fade">
        <ExperienceCard
          role="Frontend & 3D Platform Engineer"
          company="Blockzie"
          period="2023 – Present"
          points={[
            "Built Scratch-like AI + 3D programming platform from core architecture",
            "Designed and implemented multi-editor GUI system (Code, Python, 3D, Design)",
            "Built full Three.js 3D editor and AR pipeline",
            "Integrated AI services: Vision, OCR, Face Detection, Speech",
            "Handled SB3 loading, VM integration, state management, performance optimization",
          ]}
        />
        <ExperienceCard
          role="AR / 3D Web Developer"
          company="R&D Projects"
          period="2022 – 2023"
          points={[
            "Built WebXR & AR.js experiences",
            "3D viewers, configurators, AR preview systems",
            "Optimized Three.js rendering and mobile performance",
          ]}
        />
      </div>

</Section>

{/* Achievements */}
<Section id="achievements" title="Achievements" subtitle="Impact & Scale of My Work">

    <div className="grid md:grid-cols-4 gap-6 section-fade">
            <StatCard number="3+" label="Major Platforms Built" />
            <StatCard number="50+" label="Features Shipped" />
            <StatCard number="10+" label="AI & 3D Systems Designed" />
            <StatCard number="1000+" label="Students / Users Impacted" />
          </div>

</Section>
{/* Resume */}
<Section id="resume" title="Resume" subtitle="My profile in a nutshell">

    <div className="max-w-3xl mx-auto text-center space-y-6 section-fade">
            <p className="text-gray-700 text-lg">
              3+ years building complex web platforms in AR, 3D, AI & block-based systems.
              Specialized in React, Three.js, platform architecture and product engineering.
            </p>
            <a
              href="/Nisha_Chaudhari_Resume.pdf"
              target="_blank"
              className="inline-block px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#6b63ff] to-pink-500 shadow-lg hover:scale-105 transition"
            >
              📄 Download Resume
            </a>
          </div>

</Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="Some cool things I have built" dark>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 <ProjectCard 
  title="Blockzie GUI – AI Block Programming Platform"
  desc="A Scratch-like AI-powered block programming platform with 3D, Python, and visual coding editors. Built a complex React + Redux GUI supporting multi-editor workflows, real-time 3D scenes, device integration, and AI features like face detection, object detection, speech-to-text, OCR, and robotics control."
  // img="/projects/blockzie.jpg"
  tech={["React", "Redux", "Three.js", "WebGL", "Blockly", "Node.js", "GCP AI"]}
  live="https://blockzie.info"
  // github="https://github.com/yourrepo"
  details={{
    role: "Frontend & Core Platform Developer",
    features: [
      "Designed and implemented the main GUI (gui.jsx) managing all editors (Code, Costumes, Sounds, Python, 3D)",
      "Built dynamic tab system with conditional rendering for 3D, Python, and Block projects",
      "Integrated Three.js 3D editor with live viewport, play/stop, resize & scene management",
      "Implemented screen system: Loader, New Project Screen, Main Editor",
      "Connected Redux state to control tabs, fullscreen, project state, and editor behavior",
      "Built responsive layout with dynamic resizing and mobile fixes",
      "Implemented AI extensions: Face Detection, Object Detection, OCR, Speech-to-Text, TTS",
      "Integrated hardware & robotics device workflow similar to OpenBlock",
      "Handled SB3 project loading, state reset, and multi-editor sync"
    ]
  }}
/>
<ProjectCard 
  title="Blockzie 3D Studio – Web-based 3D Editor with AR Preview"
  desc="A full-featured Three.js-based 3D editor with scene graph, object tools, live player, and AR preview via QR code. Supports GLB export, cloud upload, and instant mobile AR viewing."
  // img="/projects/blockzie-3d-editor.jpg"
  tech={["Three.js", "WebGL", "React", "GLTFExporter", "GCP", "Canvas"]}
  details={{
    role: "Lead 3D Editor & AR Integration Developer",
    longDesc: "A complete web-based 3D editor built on top of Three.js and a custom editor framework. The editor provides scene management, object tools, viewport, player, toolbar, sidebar, and advanced features like exporting models to GLB and generating QR codes for instant AR preview on mobile devices.",
    features: [
      "Built full Three.js-based 3D editor (viewport, player, toolbar, sidebar, outliner, inspector)",
      "Implemented object hierarchy (scene graph), object manager, and property panels",
      "Built GLB export pipeline using GLTFExporter",
      "Implemented cloud upload system using signed URLs to Google Cloud Storage",
      "Built AR Preview system: generate QR code for uploaded 3D model and open in mobile AR viewer",
      "Implemented QR + marker image composition using HTML Canvas",
      "Built floating QR popup UI with open, download, and close actions",
      "Implemented menu bar (File, Edit, View, Help) with dynamic dropdowns",
      "Built Play/Stop system and status buttons (Play, AR, Autosave)",
      "Implemented Add menus for objects, backgrounds, and effects",
      "Injected dynamic icons into scene outliner and sidebar",
      "Optimized editor initialization to reuse instance across mounts",
      "Integrated editor with main GUI (gui.jsx) tab system"
    ]
  }}
/>



<ProjectCard 
  title="AR QR Preview System – 3D to AR Pipeline"
  desc="Select any 3D object, export it as GLB, upload to cloud, generate a QR code, and instantly preview the model in AR on mobile using WebXR and AR.js."
  // img="/projects/ar.jpg"
  tech={["Three.js", "AR.js", "WebXR", "GLTFExporter", "GCP", "Canvas"]}
  details={{
    role: "AR & 3D Pipeline Developer",
    longDesc: "A complete AR preview pipeline integrated into the 3D editor. Users can select any 3D object, export it as GLB, upload it to cloud storage, generate a QR code, and open the model in a mobile AR viewer instantly.",
    features: [
      "Select any 3D object from the editor scene",
      "Export selected object to GLB using GLTFExporter",
      "Upload GLB to cloud storage using signed URL system",
      "Generate AR viewer URL dynamically",
      "Generate QR code for the uploaded 3D model",
      "Overlay QR code on AR marker image using HTML Canvas",
      "Show floating QR popup with Open, Download, and Close actions",
      "Open model in mobile AR using WebXR / AR.js",
      "Integrated fully with Blockzie 3D Editor"
    ]
  }}
/>


<ProjectCard 
  title="Cloud AI Vision Service (GCP)"
  desc="Scalable serverless AI backend built on Google Cloud Functions integrating Vision API, OCR, and Speech-to-Text for image understanding, document processing, and voice recognition."
  // img="/projects/ai.jpg"
  tech={["Node.js", "JavaScript", "Google Cloud Functions", "Vision API", "OCR", "Speech-to-Text"]}
  github="#"
/><ProjectCard 
  title="Blockzie AI Services Engine – Vision, OCR & Face Intelligence"
  desc="A Scratch-like AI blocks engine integrating Google Vision API and face-api.js to provide image analysis, OCR, face detection, emotion recognition, and vision intelligence inside a block-based programming environment."
  img="/projects/ai.jpg"
  tech={[
    "JavaScript",
    "Node.js",
    "Google Cloud Vision API",
    "face-api.js",
    "OCR",
    "Canvas",
    "Block-based VM"
  ]}
  details={{
    role: "AI Platform & VM Extension Developer",
    longDesc: "A full AI services extension for the Blockzie VM that adds visual programming blocks for image analysis, OCR, face detection, emotion recognition, and vision intelligence. The system integrates Google Cloud Vision API and local face-api.js models and exposes results through reporter and boolean blocks inside the block-based programming environment.",
    features: [
      "Designed and implemented AIServicesBlocks VM extension architecture",
      "Built block definitions system (COMMAND, REPORTER, BOOLEAN) with menus and options",
      "Implemented image analysis from camera, stage, costumes, and backdrops",
      "Integrated Google Vision API for object detection, brand detection, landmark detection, OCR, and image labeling",
      "Integrated face-api.js for face detection, landmarks, expressions, age, and gender",
      "Implemented handwritten text recognition and printed text OCR pipelines",
      "Built result storage system for faces, text, and image analysis",
      "Exposed results via reporter blocks (face count, emotions, age, gender, object names, positions, confidence)",
      "Implemented emotion detection and head pose (roll, yaw, pitch) blocks",
      "Built utility pipeline: base64 → blob conversion, HTTP request handler, error UI popup",
      "Implemented stage camera video feed toggle blocks",
      "Built scalable API request system with error handling and status polling",
      "Designed localization (i18n) support for all AI blocks"
    ]
  }}
/>


    </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact Me" subtitle="Let's build something awesome together">
        <p className="text-gray-600 text-lg mb-4">📍 Gandhinagar, India</p>
        <p className="text-gray-600 text-lg mb-8">📧 nishchaudhari4800@gmail.com</p>
        <div className="flex justify-center gap-4">
          <SocialButton href="mailto:nishchaudhari4800@gmail.com" icon="📧" />
          <SocialButton href="https://github.com/ErNisha4800" icon="🐙" />
        </div>
      </Section>

      <footer className="py-6 text-center text-gray-500 text-sm">
        Made with ❤️ by Nisha
      </footer>
    </div>
  );
}

/* ---------- Components ---------- */
function ExperienceCard({ role, company, period, points }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card-pop neon-border bg-white/60 backdrop-blur-2xl"
    >
      <div className="flex justify-between flex-wrap gap-2 mb-2">
        <h3 className="text-xl font-bold">{role}</h3>
        <span className="text-sm text-gray-500">{period}</span>
      </div>
      <p className="text-[#6b63ff] font-semibold mb-3">{company}</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </motion.div>
  );
}

function Section({ id, title, subtitle, children, dark = false }) {
  return (
    <motion.section
      id={id}
      className={`py-28 px-6 relative overflow-hidden ${
        dark ? "bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white" 
             : "bg-gradient-to-br from-[#f8f9ff] to-[#eef1ff]"
      }`}
      initial={{opacity:0,y:60}}
      whileInView={{opacity:1,y:0}}
      viewport={{ once: true }}
      transition={{duration:0.9}}
    >
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#6b63ff]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">{title}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-2xl mx-auto">{subtitle}</p>
        {children}
      </div>
    </motion.section>
  );
}

function SocialButton({ href, icon }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:bg-[#6b63ff] hover:text-white hover:-translate-y-1 transition text-2xl">
      {icon}
    </a>
  );
}

function GlowButton({ children, ...props }) {
  return (
    <button {...props} className="px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#6b63ff] to-pink-500 shadow-lg hover:scale-105 transition">
      {children}
    </button>
  );
}

function OutlineButton({ children, ...props }) {
  return (
    <button {...props} className="px-8 py-3 rounded-xl font-bold border bg-white shadow hover:scale-105 transition">
      {children}
    </button>
  );
}

function StatCard({ number, label }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card-pop neon-border bg-white/60 backdrop-blur-2xl"
    >
      <h3 className="text-4xl font-extrabold text-[#6b63ff] mb-2">{number}</h3>
      <p className="text-gray-600 font-semibold">{label}</p>
    </motion.div>
  );
}

function ProjectCard({ title, desc, img, tech = [], live, github, details }) {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
      <>
        <motion.div
          whileHover={{ y: -12, scale: 1.02 }}
          className="group relative card-pop neon-border bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden cursor-pointer"
        >
          {/* Image */}
          {/* <div className="h-44 overflow-hidden">
            <img 
              src={img} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div> */}

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map(t => (
                <span 
                  key={t}
                  className="text-xs px-3 py-1 bg-[#6b63ff]/10 text-[#6b63ff] rounded-full font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap">
              {live && (
                <a 
                  href={live} 
                  target="_blank"
                  className="text-sm font-semibold text-white bg-[#6b63ff] px-4 py-2 rounded-lg hover:scale-105 transition"
                >
                  Live
                </a>
              )}
              {github && (
                <a 
                  href={github} 
                  target="_blank"
                  className="text-sm font-semibold border px-4 py-2 rounded-lg hover:scale-105 transition"
                >
                  Code
                </a>
              )}
              {details && (
                <button
                  onClick={() => setOpen(true)}
                  className="text-sm font-semibold border px-4 py-2 rounded-lg hover:scale-105 transition"
                >
                  Details
                </button>
              )}
            </div>
          </div>

          {/* Modal */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
                onClick={() => setOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, y: 40 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 40, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative neon-border bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden"
                >
                  {/* Header */}
                  {/* Floating Close Icon */}
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute -top-4 right-6 z-20 bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg hover:scale-110 hover:bg-red-600 transition"
                  >
                    ✕
                  </button>

                  {/* Header */}
                  <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b">
                    <h2 className="text-2xl font-extrabold">{title}</h2>
                    {details?.role && (
                      <p className="text-sm text-gray-500">{details.role}</p>
                    )}
                  </div>

                  {/* Content */}
                  <div className="px-6 py-6 max-h-[70vh] overflow-y-auto space-y-6 text-left">
                    {details?.longDesc && (
                      <p className="text-gray-700 leading-relaxed">
                        {details.longDesc}
                      </p>
                    )}
                    {details?.features && (
                      <div>
                        <h3 className="text-lg font-bold text-[#6b63ff] mb-3">
                          Key Features & Work
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          {details.features.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </>
      );
    }
    