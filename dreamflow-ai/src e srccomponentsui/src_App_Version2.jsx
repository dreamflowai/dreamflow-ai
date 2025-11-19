import React, { useState, useEffect } from 'react';
import Button from './components/ui/button';
import Card from './components/ui/card';
import Input from './components/ui/input';
import Textarea from './components/ui/textarea';
import { 
  Menu, X, ArrowRight, Sparkles, MessageSquare, Calendar, RefreshCw, 
  XCircle, Zap, Clock, CheckCircle, Bot, User, TrendingUp, Users, 
  DollarSign, Heart, Stethoscope, Scissors, Dumbbell, Scale, Globe,
  Target, Mail, Instagram, Send, Crown, Check, ChevronDown, Bell, Shield, 
  BarChart3, Smartphone, Phone
} from 'lucide-react';

export default function DreamFlowAI() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigationItems = [
    { name: "Home", page: "home" },
    { name: "Funzionalità", page: "features" },
    { name: "Settori", page: "industries" },
    { name: "Chi siamo", page: "about" },
    { name: "Contatti", page: "contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">DreamFlow AI</span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => setCurrentPage(item.page)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === item.page ? "text-purple-400" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button
                onClick={() => setCurrentPage('contact')}
                className="rounded-full"
              >
                Richiedi Preventivo
              </Button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="h-6 w-6 text-slate-300" /> : <Menu className="h-6 w-6 text-slate-300" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="flex flex-col gap-4 p-6">
              {navigationItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => { setCurrentPage(item.page); setMobileMenuOpen(false); }}
                  className={`text-lg font-medium text-left transition-colors ${
                    currentPage === item.page ? "text-purple-400" : "text-slate-300"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }}
                className="w-full"
              >
                Richiedi Preventivo
              </Button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {currentPage === 'home' && <HomePage setPage={setCurrentPage} scrollY={scrollY} />}
        {currentPage === 'features' && <FeaturesPage setPage={setCurrentPage} />}
        {currentPage === 'industries' && <IndustriesPage setPage={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage setPage={setCurrentPage} />}
        {currentPage === 'contact' && <ContactPage setPage={setCurrentPage} />}
      </main>
    </div>
  );
}

/* --- Le pagine sono molto lunghe; qui includo le sezioni principali in versione funzionante (semplificata) --- */

function HomePage({ setPage, scrollY }) {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl mx-auto flex items-center justify-center text-4xl">✨</div>
          </div>
          <h1 className="text-5xl font-black mb-6">Automatizza i tuoi<br/>appuntamenti con AI</h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">DreamFlow AI risponde ai messaggi, prenota, sposta e cancella appuntamenti in automatico. <span className="text-purple-400 font-semibold">24/7</span></p>
          <div className="flex gap-4 justify-center mb-8">
            <Button onClick={() => setPage('contact')} size="lg">Richiedi Preventivo</Button>
            <Button onClick={() => setPage('features')} variant="outline">Scopri le Funzionalità</Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">🤖</div>
                <div>
                  <div className="font-bold">DreamFlow AI Assistant</div>
                  <div className="text-green-400 text-sm">Online</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-800/60 rounded-2xl p-4 text-left">Ciao! Vorrei prenotare un appuntamento per domani alle 15:00</div>
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-4">Perfetto! L'appuntamento è confermato per domani alle 15:00.</div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

function FeaturesPage({ setPage }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-6">Tutto ciò di cui hai bisogno</h2>
        <p className="text-slate-400 mb-8 max-w-3xl mx-auto">Un assistente AI completo che trasforma la gestione degli appuntamenti.</p>
      </div>
    </section>
  );
}

function IndustriesPage({ setPage }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-6">Perfetto per ogni settore</h2>
      </div>
    </section>
  );
}

function AboutPage({ setPage }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-6">La nostra missione</h2>
        <p className="text-slate-300 max-w-3xl mx-auto">Rendere l'intelligenza artificiale accessibile a ogni professionista.</p>
      </div>
    </section>
  );
}

function ContactPage({ setPage }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-6">Contattaci per un preventivo personalizzato</h2>
        <p className="text-slate-300 mb-6">Scrivici: <a className="text-purple-400" href="mailto:dreamflowai@gmail.com">dreamflowai@gmail.com</a></p>
        <div className="flex gap-4 justify-center">
          <a className="btn inline-block" href="mailto:dreamflowai@gmail.com">Invia Email</a>
        </div>
      </div>
    </section>
  );
}