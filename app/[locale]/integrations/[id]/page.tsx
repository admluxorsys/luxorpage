import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

const staticIntegrations = [
    {
        id: 'luxor-pay-pos',
        title: 'Luxor Pay POS',
        description: 'Next-generation point of sale system integrated with Solana Pay.',
        imageUrl: '/images/token-dark.png'
    },
    {
        id: 'intelligent-glasses-v1',
        title: 'Intelligent Glasses',
        description: 'Augmented reality glasses with real-time blockchain tracking.',
        imageUrl: '/images/token-dark.png'
    }
];

interface Props {
    params: Promise<{ id: string; locale: string }>;
}

async function getIntegration(id: string) {
    return staticIntegrations.find(item => item.id === id) || null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const data = await getIntegration(id);

    if (!data) return { title: 'Integration Not Found - By Luxor' };

    const title = `${data.title} - By Luxor`;
    const description = data.description;
    const imageUrl = data.imageUrl;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: imageUrl }],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [imageUrl],
        },
    };
}

export default async function Page({ params }: Props) {
    const { id, locale } = await params;
    const data = await getIntegration(id);

    if (!data) notFound();

    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": data.title,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": data.description
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden font-sans pt-32 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(165,189,224,0.15)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-4xl w-full text-center relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#a5bde0]/10 border border-[#a5bde0]/20 text-[#a5bde0] font-bold uppercase tracking-[0.3em] text-[10px] mb-8">
                    Integration Detail
                </span>
                
                <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] mb-8">
                    {data.title}
                </h1>
                
                <div className="relative group max-w-2xl mx-auto mb-12">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#a5bde0] to-white/20 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                         <img 
                            src={data.imageUrl} 
                            alt={data.title} 
                            className="w-full h-auto object-cover transform transition duration-1000 group-hover:scale-105"
                         />
                    </div>
                </div>

                <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12 uppercase tracking-widest italic">
                    {data.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href={`/${locale}/integrations`} className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 rounded-full text-white/50 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all font-bold text-[11px] tracking-[0.4em] uppercase">
                        Back to List
                    </a>
                    <button className="w-full sm:w-auto px-12 py-4 bg-white text-black rounded-full hover:bg-[#a5bde0] transition-all font-bold text-[11px] tracking-[0.4em] uppercase shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                        Initialize Connection
                    </button>
                </div>
            </div>
        </div>
    );
}
