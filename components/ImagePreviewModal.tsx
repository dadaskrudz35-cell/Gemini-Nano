
import React from 'react';
import { CloseIcon } from './icons';

interface ImagePreviewModalProps {
    imageSrc: string | null;
    onClose: () => void;
}

const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({ imageSrc, onClose }) => {
    if (!imageSrc) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" 
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div 
                className="relative max-w-full max-h-full" 
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
            >
                <img 
                    src={imageSrc} 
                    alt="Image Preview" 
                    className="block max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" 
                />
                <button 
                    onClick={onClose}
                    className="absolute -top-3 -right-3 z-10 bg-surface text-text-primary rounded-full p-2 hover:bg-border transition-colors"
                    aria-label="Close image preview"
                >
                    <CloseIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

export default ImagePreviewModal;
