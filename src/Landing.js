
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { TrendingUp, BarChart3, Zap, Shield, Users, Smartphone } from "lucide-react";

function Landing() {
  const isLoggedIn = localStorage.getItem("userId");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="scroll-smooth font-sans bg-white text-black">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
            🚀 CryptoTrack Pro
          </h1>
          <div className="flex items-center gap-4">
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition">How It Works</a>
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition">Features</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition">About</a>
            <Link to="/login" className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold hover:shadow-lg transition">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* 1️⃣ HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute right-0 top-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <motion.div className="text-center max-w-4xl relative z-10" initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
              <TypeAnimation
                sequence={[
                  "Smart Crypto Tracking 📊",
                  2000,
                  "Real-Time Portfolio 💼",
                  2000,
                  "Instant Analytics ⚡",
                  2000,
                  "Maximize Your Gains 🚀",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8">
            Track cryptocurrency prices, manage your portfolio, analyze profits, and make smarter investment decisions — all in one powerful platform.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            <Link
              to={isLoggedIn ? "/home" : "/login"}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition transform hover:scale-105"
            >
              {isLoggedIn ? "Go to Dashboard" : "Get Started Free"}
            </Link>
            <a href="#how-it-works" className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition">
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 2️⃣ HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true }}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-pink-600 text-white text-4xl shadow-xl mb-6">
              📋
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-slate-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to master your crypto portfolio in minutes
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-4 gap-8" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true }}>
            {[
              { num: 1, title: "Sign Up", desc: "Create a free account in seconds", icon: "👤" },
              { num: 2, title: "Add Coins", desc: "Search and add cryptocurrencies you own", icon: "🪙" },
              { num: 3, title: "Track Portfolio", desc: "Monitor prices, gains, and losses in real-time", icon: "📈" },
              { num: 4, title: "Analyze & Export", desc: "Get detailed reports and export your data", icon: "📊" }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition text-center border border-gray-100"
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">Step {step.num}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ FEATURES */}
      <section id="features" className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true }}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-pink-600 text-white text-4xl shadow-xl mb-6">
              ⚡
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-slate-900 mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to track and grow your crypto wealth
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true }}>
            {[
              { icon: <TrendingUp size={40} />, title: "Live Price Tracking", desc: "Real-time cryptocurrency prices from CoinGecko" },
              { icon: <BarChart3 size={40} />, title: "Portfolio Analysis", desc: "Track investments, profits, and performance metrics" },
              { icon: <Zap size={40} />, title: "Fast & Responsive", desc: "Lightning-fast interface optimized for all devices" },
              { icon: <Shield size={40} />, title: "Secure & Private", desc: "Encrypted login system to protect your data" },
              { icon: <Users size={40} />, title: "Watchlist", desc: "Save your favorite coins and track them easily" },
              { icon: <Smartphone size={40} />, title: "Mobile Ready", desc: "Works perfectly on desktop, tablet, and mobile" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition border border-gray-100"
              >
                <div className="text-indigo-600 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4️⃣ UNIQUE SELLING POINTS */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 to-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">Why Choose CryptoTrack Pro?</h2>
            <p className="text-xl text-gray-300">Built for serious crypto investors</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true }}>
            {[
              { title: "🌍 Global Coverage", desc: "Track 10,000+ cryptocurrencies with real-time data from CoinGecko" },
              { title: "💰 Portfolio Management", desc: "Record investments, calculate P&L, and analyze your portfolio performance" },
              { title: "📥 Export & Reports", desc: "Download detailed reports in CSV and PDF formats for tax/accounting" },
              { title: "🎯 Smart Filters", desc: "Sort and filter coins by market cap, volume, and price changes" },
              { title: "🌙 Dark Mode", desc: "Easy on the eyes with beautiful dark and light themes" },
              { title: "⚡ No Fees", desc: "100% free forever — no hidden charges or premium subscriptions" }
            ].map((point, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-3">{point.title}</h3>
                <p className="text-gray-300">{point.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>


      </section>

      {/* 5️⃣ ABOUT ME */}
      <section id="about" className="relative py-24 bg-gray-50 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-20 w-72 h-72 rounded-full bg-indigo-300/30 blur-3xl"></div>
        <div className="pointer-events-none absolute right-0 -bottom-10 w-80 h-80 rounded-full bg-pink-300/25 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Hi, I'm <span className="text-indigo-600">Sadiya</span> — I build crypto tools people actually enjoy.
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-5 max-w-4xl mx-auto">
              <div className="text-2xl md:text-3xl font-semibold text-slate-700">
                <TypeAnimation
                  sequence={[
                    'Smooth, simple crypto tracking for every investor.',
                    2400,
                    'Clear portfolio insights without the overwhelm.',
                    2400,
                    'Fast UI, real-time data, and friendly design.',
                    2400,
                  ]}
                  speed={45}
                  repeat={Infinity}
                  wrapper="p"
                />
              </div>
              <p className="mx-auto max-w-3xl text-lg text-slate-600">
                I create crypto dashboards with clean visuals, useful summaries, and fast performance — so your next trade feels easy and confident.
              </p>
            </motion.div>
          </motion.div>

          <motion.div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 mb-16" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true }}>
            {[
              { title: 'Smart Interface', desc: 'Minimal screens, clear actions, and instant feedback.', icon: '✨' },
              { title: 'Real Insights', desc: 'Portfolio health, top gainers, and watchlist alerts.', icon: '📈' },
              { title: 'Fast & Friendly', desc: 'Responsive design built for desktop and mobile alike.', icon: '⚡' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 hover:border-indigo-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-indigo-600">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true }}>
              <motion.div variants={itemVariants} className="mx-auto inline-block rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 p-1 shadow-2xl">
                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-indigo-700 text-5xl font-black">
                  S
                </div>
              </motion.div>
              <motion.h3 variants={itemVariants} className="text-4xl font-bold text-slate-900 mt-8 mb-3">Sadiya</motion.h3>
              <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-xl mx-auto">
                I build fast, modern crypto apps with React, Node.js, and MongoDB — and I make sure every screen feels clear, calm, and useful.
              </motion.p>
            </motion.div>

            <motion.div className="grid gap-8 lg:grid-cols-3" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true }}>
              <motion.div variants={itemVariants} whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
                <h4 className="text-2xl font-semibold text-slate-900 mb-3">Design focus</h4>
                <p className="text-slate-600 leading-relaxed">
                  Crafted for clarity so users can understand their portfolio at a glance.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
                <h4 className="text-2xl font-semibold text-slate-900 mb-3">Built for speed</h4>
                <p className="text-slate-600 leading-relaxed">
                  Every interaction is fast and smooth, with live market updates and quick actions.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
                <h4 className="text-2xl font-semibold text-slate-900 mb-3">User-first</h4>
                <p className="text-slate-600 leading-relaxed">
                  I design around real people, not just data — so crypto becomes less stressful and more confident.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6️⃣ CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-6">
        <motion.div className="max-w-4xl mx-auto text-center" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true }}>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Master Your Crypto Portfolio?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl mb-8 text-white/90">
            Join thousands of crypto enthusiasts tracking their investments with CryptoTrack Pro
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to={isLoggedIn ? "/home" : "/login"}
              className="px-10 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:shadow-2xl transition transform hover:scale-105 inline-block"
            >
              {isLoggedIn ? "Go to App" : "Start For Free"}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 7️⃣ FOOTER */}
      <footer className="bg-slate-900 text-gray-400 px-6 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">CryptoTrack Pro</h3>
              <p className="text-sm">Professional crypto portfolio tracker built for modern investors</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Get Started</h4>
              <Link to="/login" className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition inline-block">
                Login
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 CryptoTrack Pro | All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
