"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* ================= HEADER ================= */}
      <header className="flex items-center justify-between px-10 py-5 border-b">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-slate-900">
            Civora Nexus
          </span>
          <span className="text-xs text-blue-600 font-semibold">
            PVT LTD
          </span>
        </div>

        <nav className="flex gap-6 text-sm text-gray-700">
          <a className="font-semibold">Home</a>
          <a>About & Company</a>
          <a>Services & Innovation</a>
          <a>Careers & Projects</a>
          <a>Support & Policies</a>
        </nav>

        <button className="bg-slate-900 text-white px-5 py-2 rounded-lg">
          Support
        </button>
      </header>

      {/* INFO BAR */}
      <div className="text-center py-3 text-gray-600 text-sm border-b">
        No upcoming events at the moment. Check back soon for exciting opportunities!
      </div>

      {/* ================= HERO ================= */}
      <section className="text-center px-6 py-24">

        <p className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm mb-6">
          🌱 AI-powered Agriculture
        </p>

        <h1 className="text-5xl font-extrabold text-slate-900">
          Civora Nexus
        </h1>

        <h2 className="text-3xl font-bold text-green-600 mt-2">
          CropGuard
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-gray-600">
          Intelligent crop disease detection using AI and computer vision.
          Helping farmers protect crops, increase yield, and reduce loss.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-slate-900 text-white px-6 py-3 rounded-lg">
            See Results →
          </button>
          <button className="bg-slate-800 text-white px-6 py-3 rounded-lg">
            Talk to Us
          </button>
        </div>

        {/* CropGuard Images */}
        <div className="flex justify-center gap-12 mt-20">
          <Image src="/cropguard/leaf.png" alt="Healthy Crop" width={120} height={120} />
          <Image src="/cropguard/disease.png" alt="Disease Detection" width={120} height={120} />
          <Image src="/cropguard/ai.png" alt="AI Analysis" width={120} height={120} />
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center py-16 bg-gray-50">
        <div>
          <h3 className="text-3xl font-bold">10+</h3>
          <p className="text-gray-600">Projects Delivered</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">25+</h3>
          <p className="text-gray-600">Happy Clients</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">98%</h3>
          <p className="text-gray-600">Success Rate</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">24/7</h3>
          <p className="text-gray-600">Support</p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gradient-to-br from-slate-950 to-slate-900 text-gray-300 px-10 pt-20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Civora Nexus
            </h3>
            <p className="text-sm mb-6">
              Empowering communities through innovative civic and healthcare
              technology solutions.
            </p>

            <ul className="space-y-3 text-sm">
              <li>📧 contact@civoranexus.com</li>
              <li>📞 +91 7350675192</li>
              <li>📍 422605, Sangamner, Maharashtra</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>AI Solutions</li>
              <li>Automation</li>
              <li>SaaS Development</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Let&apos;s Connect</h4>
            <p className="text-sm mb-4">
              Stay updated with our latest innovations and community impact stories.
            </p>

            <div className="flex gap-3">
              <span className="bg-slate-800 p-3 rounded-full">✉️</span>
              <span className="bg-slate-800 p-3 rounded-full">in</span>
              <span className="bg-slate-800 p-3 rounded-full">📷</span>
              <span className="bg-slate-800 p-3 rounded-full">🐦</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-16 py-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>© 2026 Civora Nexus Pvt. Ltd. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Refund Policy</span>
            <span>Shipping Policy</span>
          </div>
        </div>

      </footer>

    </main>
  );
}
