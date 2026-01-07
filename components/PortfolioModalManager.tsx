'use client';

import { useEffect, useState } from 'react';
import { PortfolioDownloadModal } from './PortfolioDownloadModal';

export function PortfolioModalManager() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };

    window.addEventListener('openPortfolioModal', handleOpenModal);

    return () => {
      window.removeEventListener('openPortfolioModal', handleOpenModal);
    };
  }, []);

  return (
    <PortfolioDownloadModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    />
  );
}
