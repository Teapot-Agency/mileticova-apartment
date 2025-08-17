import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PhotoGalleryProps {
  images: { src: string; alt: string }[];
}

const PhotoGallery = ({ images }: PhotoGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setShowLightbox(true);
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden group cursor-pointer">
          <img
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onClick={() => openLightbox(currentImage)}
          />
          
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm">
            {currentImage + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                index === currentImage 
                  ? 'ring-2 ring-primary shadow-lg scale-105' 
                  : 'hover:scale-105 hover:shadow-md'
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {index === currentImage && (
                <div className="absolute inset-0 bg-primary/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
              onClick={() => setShowLightbox(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation in Lightbox */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Counter in Lightbox */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
              {currentImage + 1} of {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;