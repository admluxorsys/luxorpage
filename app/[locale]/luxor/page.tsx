'use client';

import { motion } from 'framer-motion';
import {
    Flame, ShieldCheck, ArrowRight, Activity,
    Zap, ExternalLink, PieChart, Info, Settings,
    Lock, RefreshCcw, Shield, BarChart3, Clock, Database, CheckCircle2
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function LuxorPage() {
    const t = useTranslations('LuxorPage');

    const tokenomicsData = [
        { label: t('vaults.reserve'), percent: "40%", amount: "810,000,000", color: "bg-blue-600", address: "CZN6WP6rpDQ2NdURc9txtTJJh2uYBa3E6K4iZTWqbegt", cond: t('vaults.reserve_desc') },
        { label: t('vaults.investors'), percent: "20%", amount: "405,000,000", color: "bg-purple-600", address: "BQEPJzJNpaUhxZiZYuqJG64oHaJykLoxMQGBfERVJCqc", cond: t('vaults.investors_desc') },
        { label: t('vaults.foundation'), percent: "10%", amount: "202,500,000", color: "bg-indigo-600", address: "FR6mPMN9NegBYkMGsZymuNEXxYQjesQDNsetVTFRh5JG", cond: t('vaults.foundation_desc') },
        { label: t('vaults.ops_marketing'), percent: "10%", amount: "202,500,000", color: "bg-pink-600", address: "HcYv3HVXi3Qd3B494QUhf7odX6JvABZwao1r7kMLDHXf", cond: t('vaults.ops_marketing_desc') },
        { label: t('vaults.founder_lock'), percent: "9%", amount: "182,250,000", color: "bg-yellow-600", address: "8YtDVK2qC7V8nM1GFqXnic4sANA5FoYBj5dtLePs3zpi", cond: t('vaults.founder_lock_desc') },
        { label: t('vaults.meteora'), percent: "5%", amount: "101,250,000", color: "bg-green-600", address: "FEARFtN9VueEFVDCahtoWGu1A8Xdsmr2et3iWqAVo6hg", cond: t('vaults.meteora_desc') },
        { label: t('vaults.airdrops'), percent: "5%", amount: "101,250,000", color: "bg-blue-400", address: "CziGTVvL8ZSph4xYsxoox52x1aDEX4UxT7HC2Y2TZCVs", cond: t('vaults.airdrops_desc') },
        { label: t('vaults.founder_ops'), percent: "1%", amount: "20,250,000", color: "bg-orange-600", address: "AcurPgkabibbSNPXCtaVZQZcQcAGptkoMzLBbdMzq76d", cond: t('vaults.founder_ops_desc') },
    ];

    const feeDistribution = [
        { label: t('fee_items.xls'), p: "30%", addr: "7rMZcFmPXoDYqVeWd4v9tRmC99R88EToS7U6aDADzYv8" },
        { label: t('fee_items.usdx'), p: "30%", addr: "F9k4xRUrNvb6qrhY2c72ytNuqokVQZUh1VXLNi5XzsAz" },
        { label: t('fee_items.founder'), p: "40%", addr: "ANXx5N1ZbA4FM9WbZsD9m3Cda11SMmxg8zkN85ZvqCbY" },
    ];

    return (
        <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] font-sans overflow-x-hidden selection:bg-blue-500/10">
            {/* Soft Ambient Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/[0.03] blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/[0.03] blur-[120px] rounded-full" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-8 pt-40 pb-32">

                {/* Header Section - Clean & Sophisticated */}
                <header className="mb-24 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-semibold uppercase tracking-widest mb-10"
                    >
                        <Activity size={12} /> {t('header_eyebrow')}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-6xl md:text-8xl font-medium tracking-tight mb-8 text-[#111111]"
                    >
                        {t('title')} <span className="text-[#A0A0A0]">$LXR</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-2xl text-[#666666] leading-relaxed max-w-2xl font-normal"
                    >
                        {t('subtitle')}
                    </motion.p>
                </header>

                {/* Dashboard Grid - Clean White Surfaces */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Distribution Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-8 group relative overflow-hidden rounded-[48px] bg-white border border-[#F0F0F0] p-10 md:p-14 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.04)]"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                            <div>
                                <h2 className="text-3xl font-semibold text-[#111111] mb-2">{t('distribution_title')}</h2>
                                <p className="text-[#999999] text-base">{t('distribution_subtitle')}</p>
                            </div>
                            <div className="flex items-center gap-10">
                                <div>
                                    <div className="text-[10px] uppercase font-bold text-[#CCCCCC] tracking-widest mb-1">{t('fixed_supply')}</div>
                                    <div className="text-3xl font-medium tracking-tight text-[#111111]">2.025B</div>
                                </div>
                                <div className="h-10 w-[1px] bg-[#EEEEEE]" />
                                <div>
                                    <div className="text-[10px] uppercase font-bold text-[#CCCCCC] tracking-widest mb-1">{t('genesis_price')}</div>
                                    <div className="text-3xl font-medium tracking-tight text-blue-600">$0.00025</div>
                                </div>
                            </div>
                        </div>

                        {/* Distribution List */}
                        <div className="space-y-4">
                            {tokenomicsData.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.08) }}
                                    className="group/item flex flex-col md:flex-row md:items-center justify-between p-7 rounded-3xl bg-[#FAFAFA] border border-transparent hover:border-blue-100 hover:bg-white transition-all duration-500"
                                >
                                    <div className="flex items-center gap-6 flex-1">
                                        <div className={`w-1.5 h-12 rounded-full ${item.color} opacity-40 group-hover/item:opacity-100 transition-opacity`} />
                                        <div className="flex-1">
                                            <div className="font-semibold text-lg text-[#111111] flex items-center gap-4">
                                                {item.label}
                                                <span className="text-[10px] font-mono text-[#BBBBBB] select-all hidden sm:inline">{item.address}</span>
                                            </div>
                                            <div className="text-sm text-[#888888] font-normal">{item.cond}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between md:justify-end gap-12 mt-6 md:mt-0">
                                        <div className="hidden lg:block text-xs font-mono text-[#AAAAAA]">{item.amount}</div>
                                        <div className="text-4xl font-semibold tracking-tighter text-[#111111] group-hover/item:text-blue-600 transition-colors w-24 text-right">{item.percent}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Sidebar Area */}
                    <div className="lg:col-span-4 space-y-10">

                        {/* Fees Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="rounded-[40px] bg-white border border-[#F0F0F0] p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.04)]"
                        >
                            <h3 className="text-sm font-bold text-[#BBBBBB] uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
                                <Flame className="text-orange-500" size={18} /> {t('stats_burn_title')}
                            </h3>

                            <div className="space-y-8">
                                {feeDistribution.map((fee, idx) => (
                                    <div key={idx} className="relative">
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="text-xs font-bold text-[#888888] uppercase">{fee.label}</span>
                                            <span className="text-4xl font-semibold text-blue-600 leading-none">{fee.p}</span>
                                        </div>
                                        <div className="text-[10px] font-mono text-[#CCCCCC] truncate select-all">{fee.addr}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-5 rounded-2xl bg-[#F8F9FF] border border-blue-50 text-[11px] text-[#6677AA] leading-relaxed">
                                {t('stats_fees_desc')}
                            </div>
                        </motion.div>

                        {/* Metrics Widget */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="rounded-[40px] bg-white border border-[#F0F0F0] p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.04)] group"
                        >
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 rounded-2xl bg-green-50 text-green-600">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#111111]">{t('stats_safety')}</h3>
                                    <p className="text-[10px] text-[#BBBBBB] uppercase font-bold tracking-widest leading-none mt-1">{t('stats_consensus')}</p>
                                </div>
                            </div>

                            <div className="space-y-5 mb-10">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-[#999999]">{t('stats_liquidity')}</span>
                                    <span className="text-[#111111] font-semibold">{t('stats_locked')}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-[#999999]">{t('stats_protocol')}</span>
                                    <span className="text-[#111111] font-semibold">{t('stats_audited')}</span>
                                </div>
                            </div>

                            <a href="https://solscan.io/token/7Qm6qUCXGZfGBYYFzq2kTbwTDah5r3d9DcPJHRT8Wdth" target="_blank" className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-[#111111] text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-black/10">
                                {t('stats_trace')} <ExternalLink size={14} />
                            </a>
                        </motion.div>

                        {/* Final CTA */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="w-full group px-10 py-8 rounded-[48px] bg-white border border-[#F0F0F0] hover:border-blue-200 transition-all shadow-[0_32px_64px_-16px_rgba(0,0,0,0.04)] text-left"
                        >
                            <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{t('stats_cta_eyebrow')}</div>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-semibold text-[#111111]">{t('stats_cta_title')}</span>
                                <div className="p-3 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* New Technical Specifications Section */}
                <div className="mt-32 space-y-24">
                    <header className="max-w-3xl">
                        <h2 className="text-5xl font-medium tracking-tight text-[#111111] mb-6">
                            {t('tech_specs.title')}
                        </h2>
                        <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Identity Card */}
                        <div className="p-10 rounded-[40px] bg-white border border-[#F0F0F0] shadow-sm hover:shadow-md transition-all">
                            <div className="p-3 w-fit rounded-2xl bg-blue-50 text-blue-600 mb-8">
                                <Info size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-6">{t('tech_specs.identity.title')}</h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between border-b border-[#F9F9F9] pb-2">
                                    <span className="text-[#999999]">Name</span>
                                    <span className="font-medium">LUXOR</span>
                                </div>
                                <div className="flex justify-between border-b border-[#F9F9F9] pb-2">
                                    <span className="text-[#999999]">Symbol</span>
                                    <span className="font-medium text-blue-600">$LXR</span>
                                </div>
                                <div className="flex justify-between border-b border-[#F9F9F9] pb-2">
                                    <span className="text-[#999999]">{t('tech_specs.identity.network')}</span>
                                    <span className="font-medium text-purple-600">Solana (Mainnet)</span>
                                </div>
                                <div className="flex justify-between border-b border-[#F9F9F9] pb-2">
                                    <span className="text-[#999999]">{t('tech_specs.identity.standard')}</span>
                                    <span className="font-medium">SPL Token 2022</span>
                                </div>
                                <div className="flex justify-between border-b border-[#F9F9F9] pb-2">
                                    <span className="text-[#999999]">{t('tech_specs.identity.decimals')}</span>
                                    <span className="font-medium">9 (nanosats)</span>
                                </div>
                                <div className="space-y-1 pt-2">
                                    <span className="text-[10px] uppercase font-bold text-[#CCCCCC] tracking-widest block mb-2">{t('tech_specs.identity.program_id')}</span>
                                    <span className="font-mono text-[10px] break-all select-all p-3 bg-[#F9F9F9] rounded-xl block border border-[#F0F0F0]">9d7SeR8Njzh32piG1HBxNR33VJJYVroubsQKKjkBjmfv</span>
                                </div>
                            </div>
                        </div>

                        {/* Excelsior Card */}
                        <div className="p-10 rounded-[40px] bg-white border border-[#F0F0F0] shadow-sm hover:shadow-md transition-all">
                            <div className="p-3 w-fit rounded-2xl bg-purple-50 text-purple-600 mb-8">
                                <Settings size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{t('tech_specs.excelsior.title')}</h3>
                            <div className="text-[10px] font-bold text-purple-600 uppercase tracking-widest mb-4">{t('tech_specs.excelsior.brain')}</div>
                            <p className="text-sm text-[#888888] mb-8 leading-relaxed">{t('tech_specs.excelsior.subtitle')}</p>
                            <div className="space-y-3">
                                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover/item:scale-150 transition-transform" />
                                        <span>{t(`tech_specs.excelsior.functions.${i}`)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Fees Card (Detailed) */}
                        <div className="p-10 rounded-[40px] bg-white border border-[#F0F0F0] shadow-sm hover:shadow-md transition-all">
                            <div className="p-3 w-fit rounded-2xl bg-orange-50 text-orange-600 mb-8">
                                <RefreshCcw size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-6">{t('tech_specs.fees.title')}</h3>
                            <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100 text-xs text-orange-800 mb-6 leading-relaxed flex gap-3">
                                <Info size={16} className="shrink-0 mt-0.5" />
                                {t('tech_specs.fees.rule1')}
                            </div>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between border-b border-[#F9F9F9] pb-2">
                                    <span className="text-[#999999]">{t('tech_specs.fees.variable')}</span>
                                    <span className="font-medium">0% - 3%</span>
                                </div>
                                <div className="flex justify-between border-b border-[#F9F9F9] pb-2">
                                    <span className="text-[#999999]">{t('tech_specs.fees.current')}</span>
                                    <span className="font-medium text-orange-600">Max 300 bps (3%)</span>
                                </div>
                                <div className="pt-2">
                                    <div className="text-[10px] uppercase font-bold text-[#CCCCCC] tracking-widest mb-3">{t('tech_specs.fees.rule2')}</div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="text-center p-3 rounded-2xl bg-white border border-[#F0F0F0] shadow-sm">
                                            <div className="font-bold text-blue-600 text-lg">30%</div>
                                            <div className="text-[8px] uppercase font-bold text-zinc-400">XLS</div>
                                        </div>
                                        <div className="text-center p-3 rounded-2xl bg-white border border-[#F0F0F0] shadow-sm">
                                            <div className="font-bold text-green-600 text-lg">30%</div>
                                            <div className="text-[8px] uppercase font-bold text-zinc-400">USDX</div>
                                        </div>
                                        <div className="text-center p-3 rounded-2xl bg-white border border-[#F0F0F0] shadow-sm">
                                            <div className="font-bold text-orange-600 text-lg">40%</div>
                                            <div className="text-[8px] uppercase font-bold text-zinc-400">Team</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Anti-Bot Detail Section */}
                        <div className="lg:col-span-3 p-12 md:p-16 rounded-[60px] bg-[#0A0A0A] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-colors" />
                            
                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
                                    <div>
                                        <h3 className="text-4xl md:text-5xl font-semibold mb-3 tracking-tight">{t('tech_specs.protections.title')}</h3>
                                        <p className="text-zinc-500 text-lg max-w-xl font-light">Multi-layered security engine active from Genesis.</p>
                                    </div>
                                    <div className="px-6 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                                        Level 5 Verified
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                    <div className="space-y-12">
                                        <div>
                                            <div className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Layer 1</div>
                                            <h4 className="text-xl font-medium mb-3">{t('tech_specs.protections.layer1')}</h4>
                                            <p className="text-zinc-400 text-sm leading-relaxed">{t('tech_specs.protections.layer1_desc')}</p>
                                        </div>

                                        <div>
                                            <div className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-6">Layer 2: Scaling Timeline</div>
                                            <div className="space-y-4">
                                                {/* @ts-ignore */}
                                                {(t.raw('tech_specs.protections.layer2_phases') as any[]).map((phase, i) => (
                                                    <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors">
                                                        <span className="text-sm font-medium text-zinc-300">{phase.name}</span>
                                                        <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">{phase.limit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-12">
                                        <div className="p-8 rounded-3xl bg-blue-600/5 border border-blue-500/10">
                                            <div className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Layer 3: Price Stability</div>
                                            <div className="space-y-6">
                                                <div className="flex gap-4">
                                                    <Flame size={20} className="text-orange-500 shrink-0" />
                                                    <p className="text-sm text-zinc-300 leading-relaxed">{t('tech_specs.protections.layer3_sniper')}</p>
                                                </div>
                                                <div className="flex gap-4">
                                                    <Shield size={20} className="text-blue-500 shrink-0" />
                                                    <p className="text-sm text-zinc-300 leading-relaxed">{t('tech_specs.protections.layer3_slippage')}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                                                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Layer 4</div>
                                                <h4 className="text-base font-medium mb-2">{t('tech_specs.protections.layer4')}</h4>
                                                <p className="text-xs text-zinc-500 leading-relaxed">{t('tech_specs.protections.layer4_desc')}</p>
                                            </div>
                                            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                                                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Layer 5</div>
                                                <h4 className="text-base font-medium mb-2">{t('tech_specs.protections.layer5')}</h4>
                                                <p className="text-xs text-zinc-500 leading-relaxed">{t('tech_specs.protections.layer5_desc')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Economy Card */}
                        <div className="p-10 rounded-[40px] bg-white border border-[#F0F0F0] shadow-sm hover:shadow-md transition-all lg:col-span-1">
                            <div className="p-3 w-fit rounded-2xl bg-green-50 text-green-600 mb-8">
                                <BarChart3 size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-6">{t('tech_specs.economy.title')}</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center gap-2 font-medium mb-1 text-sm text-[#111111]">
                                        <Clock size={14} className="text-green-500" /> {t('tech_specs.economy.inflation')}
                                    </div>
                                    <p className="text-xs text-[#999999] leading-relaxed">2.5% emission rate every 5 years fixed.</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 font-medium mb-1 text-sm text-[#111111]">
                                        <Flame size={14} className="text-orange-500" /> {t('tech_specs.economy.burning')}
                                    </div>
                                    <p className="text-xs text-[#999999] leading-relaxed">{t('tech_specs.economy.burning')}</p>
                                </div>
                                <div className="pt-2">
                                    <div className="flex items-center gap-2 font-medium mb-2 text-sm text-blue-600">
                                        <Lock size={14} /> Vesting Logic
                                    </div>
                                    <p className="text-xs text-[#999999] leading-relaxed mb-6">
                                        {t('tech_specs.economy.vesting_detail')}
                                    </p>
                                    
                                    <div className="p-5 rounded-3xl bg-blue-50 border border-blue-100">
                                        <div className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest text-blue-600 mb-2">
                                            <ShieldCheck size={14} /> {t('tech_specs.economy.multisig')}
                                        </div>
                                        <p className="text-[10px] text-blue-800 leading-relaxed font-medium">
                                            {t('tech_specs.economy.multisig_desc')}
                                        </p>
                                        <div className="mt-3 font-mono text-[9px] text-blue-400 break-all select-all">
                                            AcurPgkabibbSNPXCtaVZQZcQcAGptkoMzLBbdMzq76d
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Usage Card */}
                        <div className="p-10 rounded-[40px] bg-white border border-[#F0F0F0] lg:col-span-2 shadow-sm">
                            <h3 className="text-xl font-semibold mb-10">{t('tech_specs.usage.title')}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                {[
                                    { icon: <ExternalLink size={20} />, label: t('tech_specs.usage.buy_sell'), color: "text-blue-600", bg: "bg-blue-50" },
                                    { icon: <Activity size={20} />, label: t('tech_specs.usage.staking'), color: "text-purple-600", bg: "bg-purple-50" },
                                    { icon: <RefreshCcw size={20} />, label: t('tech_specs.usage.swap'), color: "text-zinc-400", bg: "bg-zinc-50" },
                                    { icon: <CheckCircle2 size={20} />, label: t('tech_specs.usage.rewards'), color: "text-green-600", bg: "bg-green-50" },
                                    { icon: <Database size={20} />, label: t('tech_specs.usage.governance'), color: "text-orange-600", bg: "bg-orange-50" },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-[#FAFAFA] border border-transparent hover:border-blue-100 hover:bg-white transition-all group cursor-default text-center">
                                        <div className={`p-4 rounded-2xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
                                            {item.icon}
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#111111]">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Refined Footer */}
                <footer className="mt-32 pt-12 border-t border-[#F0F0F0] flex flex-col md:flex-row items-center justify-between gap-10 text-[#CCCCCC] text-[10px] uppercase font-bold tracking-[0.3em]">
                    <div className="flex items-center gap-12">
                        <span className="flex items-center gap-2 transition-colors hover:text-[#999999]"><Zap size={14} /> Solana Architecture</span>
                        <span className="flex items-center gap-2 transition-colors hover:text-[#999999]"><PieChart size={14} /> Fixed Supply 1.0</span>
                    </div>
                    <div>
                        © 2026 Luxor Enterprise — Protocol v1.02
                    </div>
                </footer>
            </main>
        </div>
    );
}
