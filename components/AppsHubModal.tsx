
import React from 'react';
import { 
    CloseIcon, 
    VideoIcon, 
    BlenderIcon, 
    RestoreIcon, 
    FusionIcon,
    HeadshotIcon,
    BuildIcon,
    GodModeIcon,
    BackgroundEditIcon,
    CutoutIcon,
    PanoramaIcon,
    NeuralNetworkIcon
} from './icons';

interface AppsHubModalProps {
    isOpen: boolean;
    onClose: () => void;
    t: (key: string) => string;
}

const apps = [
    // Row 1
    { name: 'Реставратор «Nano Banana Restorer»', url: 'https://ai.studio/apps/drive/1OLsyvLILIYyZmCMeBqoF-zxCcJ6kQSLj', icon: <RestoreIcon />, category: 'Image Restoration', gradient: 'from-sky-500 to-cyan-500' },
    { name: 'NanoFusion + Агент', url: 'https://ai.studio/apps/drive/1LilDAQaXbdV48aE8GLXWapb9b3NYmq-i', icon: <FusionIcon />, category: 'Image Generation', gradient: 'from-purple-600 to-indigo-600' },
    { name: 'AI Video Generation Studio', url: 'https://ai.studio/apps/drive/14JhPm7rit-f058wHlU-B0-KrM2b86mcy', icon: <VideoIcon />, category: 'Video Generation', gradient: 'from-rose-500 to-pink-600' },
    // Row 2
    { name: 'BG Magic Studio', url: 'https://ai.studio/apps/drive/1CSu1pzXtG8VhDoG1XtgZhkmH8ut4oHGw', icon: <BackgroundEditIcon />, category: 'Image Editing', gradient: 'from-emerald-500 to-green-600' },
    { name: 'AI редактор «Pixshop Cut»', url: 'https://ai.studio/apps/drive/1xwvoedSlrQZOWZ43ZkTLuTgORbmeXGjV', icon: <CutoutIcon />, category: 'Image Editing', gradient: 'from-orange-500 to-amber-500' },
    { name: 'Конструктор панорам «Nano Banana»', url: 'https://ai.studio/apps/drive/1dipXgHAn34RQCf_u6fzN4JmVW5zC04lc', icon: <PanoramaIcon />, category: 'Image Generation', gradient: 'from-teal-500 to-cyan-600' },
    // Row 3
    { name: 'Nano Banana "Режим бога"', url: 'https://ai.studio/apps/drive/1R-_-4SyAmRphYMog0DYWWPQhUTraoLRr', icon: <GodModeIcon />, category: 'Image Generation', gradient: 'from-red-600 to-yellow-500' },
    { name: 'Gооgle AI Studio | Build', url: 'https://aistudio.google.com/apps', icon: <BuildIcon />, category: 'Development', gradient: 'from-gray-700 to-gray-800' },
    { name: 'AI Headshot Photographer', url: 'https://ai.studio/apps/drive/15oj7szHjFmVXud42kzAZBy2BoKemlqtn', icon: <HeadshotIcon />, category: 'Photography', gradient: 'from-fuchsia-600 to-purple-600' },
    // Row 4
    { name: 'Конструктор нейросетей (Blender)', url: 'https://bit.ly/nnc_addon', icon: <NeuralNetworkIcon />, category: '3D & Rendering', gradient: 'from-blue-700 to-sky-500' },
    { name: 'NANO BANANA STUDIO (Blender)', url: 'https://superhivemarket.com/products/nano-banana-studio-ai-rendering-blender?ref=6551', icon: <BlenderIcon />, category: '3D & Rendering', gradient: 'from-orange-600 to-red-600' },
];


const AppCard: React.FC<{ app: typeof apps[0] }> = ({ app }) => (
    <a 
        href={app.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative block p-4 rounded-xl overflow-hidden text-white transition-all duration-300 group hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/30"
    >
        <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} transition-all duration-300 group-hover:brightness-110`}></div>
        <div className="relative flex items-center gap-4">
            <div className="bg-black/20 p-3 rounded-lg backdrop-blur-sm">
                {React.cloneElement(app.icon, { className: "w-8 h-8" })}
            </div>
            <div className="flex-1">
                <h3 className="font-bold text-white">{app.name}</h3>
                <p className="text-sm text-white/70">{app.category}</p>
            </div>
        </div>
    </a>
);


const AppsHubModal: React.FC<AppsHubModalProps> = ({ isOpen, onClose, t }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-background/90 backdrop-blur-lg z-50 flex flex-col p-4 sm:p-6" 
            role="dialog"
            aria-modal="true"
        >
            <header className="flex-shrink-0 flex items-center justify-between pb-4 border-b border-border">
                <h2 className="text-xl font-bold text-text-primary">{t('appsHubTitle')}</h2>
                <button 
                    onClick={onClose}
                    className="p-2 text-text-secondary hover:text-text-primary rounded-full transition-colors"
                    aria-label="Close apps hub"
                >
                    <CloseIcon />
                </button>
            </header>
            <main className="flex-grow overflow-y-auto py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {apps.map((app, index) => (
                        <AppCard key={index} app={app} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default AppsHubModal;