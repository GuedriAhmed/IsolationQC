import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, DollarSign, TrendingUp, CheckCircle, Info, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import useFacebookPixel from '../hooks/useFacebookPixel';

const EnergyCalculator = () => {
  const { t } = useLanguage();
  const { track } = useFacebookPixel();

  const [atticSize, setAtticSize] = useState(1200);
  const [insulationLevel, setInsulationLevel] = useState('none');
  const [region, setRegion] = useState('montreal');
  const [annualBill, setAnnualBill] = useState(2500);
  const [results, setResults] = useState({
    annualSavings: 0,
    tenYearSavings: 0,
    paybackYears: 0,
    grant: 1500,
    netCost: 0
  });

  // Track view on mount
  useEffect(() => {
    track('ViewContent', { 
        content_name: 'Energy Calculator',
        content_category: 'Tools'
    });
  }, []);

  // Track calculation with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only track if values differ from defaults to avoid initial load tracking
      if (atticSize !== 1200 || insulationLevel !== 'none' || annualBill !== 2500) {
        track('AddToCart', {
            content_name: 'Energy Savings Calculation',
            value: results.annualSavings,
            currency: 'CAD',
            content_ids: [`region_${region}`],
            content_type: 'product',
            contents: [
                { id: 'attic_size', quantity: atticSize },
                { id: 'insulation_level', quantity: 1 } // Using quantity loosely
            ]
        });
      }
    }, 2000); // Debounce for 2 seconds after last change

    return () => clearTimeout(timer);
  }, [atticSize, insulationLevel, region, annualBill, results.annualSavings]);

  useEffect(() => {
    let savingsRate = 0;
    if (insulationLevel === 'none') savingsRate = 0.30;
    if (insulationLevel === 'poor') savingsRate = 0.20;
    if (insulationLevel === 'average') savingsRate = 0.10;
    if (insulationLevel === 'good') savingsRate = 0.05;

    if (region === 'north') savingsRate += 0.05;

    const yearlySave = annualBill * savingsRate;
    const tenYearSave = yearlySave * 10 * 1.03; 
    
    const estimatedCost = atticSize * 4;
    const netCostCalc = Math.max(0, estimatedCost - 1500); 
    const payback = yearlySave > 0 ? (netCostCalc / yearlySave) : 0;

    setResults({
        annualSavings: Math.round(yearlySave),
        tenYearSavings: Math.round(tenYearSave),
        paybackYears: payback.toFixed(1),
        grant: 1500,
        netCost: Math.round(netCostCalc)
    });
  }, [atticSize, insulationLevel, region, annualBill]);

  const Slider = ({ label, value, min, max, step, onChange, unit }) => (
    <div className="mb-8">
        <div className="flex justify-between mb-4">
            <label className="font-medium text-slate-300">{label}</label>
            <span className="text-primary-400 font-bold font-mono bg-primary-900/50 px-3 py-1 rounded-lg border border-primary-500/30">
                {value} <span className="text-xs text-primary-300/70">{unit}</span>
            </span>
        </div>
        <div className="relative h-2 bg-slate-700 rounded-full">
            <div 
                className="absolute h-full bg-gradient-to-r from-primary-600 to-accent-500 rounded-full"
                style={{ width: `${((value - min) / (max - min)) * 100}%` }}
            />
            <input 
                type="range" 
                min={min} 
                max={max} 
                step={step} 
                value={value}
                onChange={onChange}
                className="absolute w-full h-full opacity-0 cursor-pointer"
            />
            <div 
                className="absolute w-6 h-6 bg-white rounded-full shadow-lg border-2 border-primary-500 top-1/2 transform -translate-y-1/2 -ml-3 pointer-events-none transition-transform"
                style={{ left: `${((value - min) / (max - min)) * 100}%` }}
            />
        </div>
    </div>
  );

  return (
    <section id="calculator" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-12">
           <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mb-6 shadow-glow">
                <Calculator className="w-8 h-8 text-white" />
           </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">{t('calculator.title')}</h2>
          <p className="text-slate-400 text-lg">{t('calculator.subtitle')}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Inputs Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-slate-800/50 p-8 rounded-3xl backdrop-blur-md border border-white/5"
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary-500 rounded-full"></span>
                Paramètres de votre maison
            </h3>

            <Slider 
                label={t('calculator.atticSize')} 
                value={atticSize} 
                min={500} 
                max={5000} 
                step={100} 
                onChange={(e) => setAtticSize(Number(e.target.value))}
                unit="pi²"
            />

             <Slider 
                label={t('calculator.bill')} 
                value={annualBill} 
                min={500} 
                max={8000} 
                step={100} 
                onChange={(e) => setAnnualBill(Number(e.target.value))}
                unit="$"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                    <label className="block mb-3 font-medium text-slate-300">{t('calculator.currentInsulation')}</label>
                    <div className="relative">
                        <select 
                            value={insulationLevel}
                            onChange={(e) => setInsulationLevel(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl p-4 focus:ring-2 focus:ring-primary-500 outline-none appearance-none cursor-pointer hover:border-slate-600 transition-colors"
                        >
                            <option value="none">{t('calculator.none')}</option>
                            <option value="poor">{t('calculator.poor')}</option>
                            <option value="average">{t('calculator.average')}</option>
                            <option value="good">{t('calculator.good')}</option>
                        </select>
                        <Info className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 pointer-events-none" />
                    </div>
                </div>

                 <div>
                    <label className="block mb-3 font-medium text-slate-300">{t('calculator.region')}</label>
                    <div className="relative">
                        <select 
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl p-4 focus:ring-2 focus:ring-primary-500 outline-none appearance-none cursor-pointer hover:border-slate-600 transition-colors"
                        >
                            <option value="montreal">{t('calculator.montreal')}</option>
                            <option value="quebec">{t('calculator.quebec')}</option>
                            <option value="north">{t('calculator.north')}</option>
                        </select>
                        <MapPinIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 pointer-events-none" />
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
             <div className="bg-gradient-to-br from-primary-900/50 to-primary-800/30 border border-primary-500/30 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity transform group-hover:scale-110 duration-700">
                    <TrendingUp size={120} />
                </div>
                
                <p className="text-primary-300 font-medium mb-2 uppercase tracking-wider text-sm">{t('calculator.annualSavings')}</p>
                <div className="flex items-baseline gap-1">
                    <AnimatePresence mode="wait">
                        <motion.span 
                            key={results.annualSavings}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-6xl font-bold text-white font-heading"
                        >
                            {results.annualSavings}
                        </motion.span>
                    </AnimatePresence>
                    <span className="text-2xl text-primary-200">$</span>
                </div>
                <p className="text-slate-400 mt-2 text-sm">par année sur votre facture</p>
             </div>

             <div className="grid grid-cols-2 gap-4">
                 <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 hover:bg-slate-800 transition-colors">
                    <p className="text-slate-400 text-xs uppercase mb-2">Sur 10 ans</p>
                    <p className="text-2xl font-bold text-accent-400 font-heading">${results.tenYearSavings}</p>
                 </div>
                 <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 hover:bg-slate-800 transition-colors">
                    <p className="text-slate-400 text-xs uppercase mb-2">Retour Inv.</p>
                    <p className="text-2xl font-bold text-accent-400 font-heading">{results.paybackYears} ans</p>
                 </div>
             </div>

             <div className="bg-slate-800/30 p-6 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300">Subvention Logis Vert</span>
                    <span className="text-green-400 font-bold bg-green-900/30 px-2 py-1 rounded">-${results.grant}</span>
                </div>
                <div className="h-px bg-white/10 my-4"></div>
                <div className="flex items-center gap-3 text-green-400">
                    <CheckCircle size={20} className="fill-green-900/50" />
                    <span className="text-sm font-medium">Eligibilité confirmée</span>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MapPinIcon = (props) => (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
)

export default EnergyCalculator;