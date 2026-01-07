'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PresentationViewerProps {
  pdfUrl: string;
  title: string;
}

export function PresentationViewer({ pdfUrl, title }: PresentationViewerProps) {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pdfDocRef = useRef<any>(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        // Load PDF.js from CDN
        const pdfjsLib = (window as any).pdfjsLib;
        
        if (!pdfjsLib) {
          // Wait for script to load
          await new Promise((resolve) => setTimeout(resolve, 100));
          return loadPdf();
        }

        pdfjsLib.GlobalWorkerOptions.workerSrc = 
          'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        
        pdfDocRef.current = pdf;
        setNumPages(pdf.numPages);
        setLoading(false);
        
        renderPage(1, pdf);
      } catch (error) {
        console.error('Error loading PDF:', error);
        setLoading(false);
      }
    };

    loadPdf();
  }, [pdfUrl]);

  useEffect(() => {
    if (pdfDocRef.current && !loading) {
      renderPage(pageNumber, pdfDocRef.current);
    }
  }, [pageNumber, loading]);

  const renderPage = async (pageNum: number, pdf: any) => {
    try {
      const page = await pdf.getPage(pageNum);
      const canvas = canvasRef.current;
      
      if (!canvas) return;

      const context = canvas.getContext('2d');
      
      // Get container width
      const containerWidth = canvas.parentElement?.offsetWidth || 1000;
      
      // Use higher base scale for better quality
      const baseViewport = page.getViewport({ scale: 1 });
      const scale = (containerWidth / baseViewport.width) * (window.devicePixelRatio || 1);
      const viewport = page.getViewport({ scale });

      // Set canvas size accounting for device pixel ratio
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      canvas.style.width = `${containerWidth}px`;
      canvas.style.height = `${viewport.height / (window.devicePixelRatio || 1)}px`;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext).promise;
    } catch (error) {
      console.error('Error rendering page:', error);
    }
  };

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(1, prev - 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(numPages, prev + 1));
  };

  return (
    <div className="w-full">
      {/* PDF Container */}
      <div className="relative w-full bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-lg">
        <div className="relative w-full flex items-center justify-center">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center min-h-[300px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-light dark:border-accent-dark"></div>
            </div>
          )}
          
          <canvas 
            ref={canvasRef}
            className="w-full h-auto"
          />
        </div>

        {/* Navigation Controls */}
        {!loading && numPages > 0 && (
          <>
            {/* Previous Button */}
            <button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Page Counter */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm z-10">
              <span className="text-xs font-medium text-white">
                {pageNumber} / {numPages}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
