
import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ConfirmationModal = ({ isOpen, onClose, title, message, autoCloseDelay = 4000 }) => {
  useEffect(() => {
    if (isOpen && autoCloseDelay > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [isOpen, autoCloseDelay, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fermer"
              >
                <X size={24} />
              </button>

              {/* Success icon */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {title || 'Demande envoyée avec succès!'}
                </h3>

                {/* Message */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {message || 'Merci pour votre demande! Nous avons bien reçu votre message et vous contacterons dans les 24 heures. Un email de confirmation a été envoyé à votre adresse.'}
                </p>

                {/* Action button */}
                <button
                  onClick={onClose}
                  className="bg-[hsl(var(--accent))] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#ea580c] transition-colors"
                >
                  Parfait, merci!
                </button>

                {/* Auto-close indicator */}
                {autoCloseDelay > 0 && (
                  <p className="text-sm text-gray-500 mt-4">
                    Cette fenêtre se fermera automatiquement dans quelques secondes...
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConfirmationModal;
