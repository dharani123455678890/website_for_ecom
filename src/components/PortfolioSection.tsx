import { Card } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import sareeCollection from "@/assets/sarees-collection.jpg";
import FoldingPreview from "@/components/FoldingPreview";
import { useLanguage } from "@/contexts/useLanguage";

const p1 = new URL("../../assets/white_saree_p1.jpg", import.meta.url).href;
const p2 = new URL("../../assets/white_saree_p2.jpg", import.meta.url).href;
const p3 = new URL("../../assets/white_saree_p3.jpg", import.meta.url).href;

const PortfolioSection = () => {
  const { isTamil, toggleLanguage } = useLanguage();

  const ytChannelUrl = "https://youtube.com/@handloomweavingsarees?si=e-gInNvEO8qI7wpi";

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {isTamil ? "எங்கள் கைவினை திறமை" : "Our Craftsmanship"}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {isTamil
              ? "நூல் இருந்து கலைப் படை வரை நிகழ்கதை காணுங்கள்"
              : "Witness the journey from thread to masterpiece"}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {/* Weaving Phase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4 hover:shadow-xl transition-shadow">
              <h3 className="text-xl sm:text-2xl font-bold text-primary">
                {isTamil ? "நெய்தல் நிலை" : "Weaving Phase"}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {isTamil
                  ? "பாரம்பரியத் தைத்திறன் கைத்தறி நெய்தல் செயல்முறையைப் பாருங்கள், எங்கு திறமையான நெசவாளர்கள் வடிவங்களை நூல் நூலாக உயிரூட்டுகிறார்கள்."
                  : "Watch the intricate process of hand loom weaving, where skilled artisans bring designs to life, thread by thread, on traditional looms."}
              </p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <a href={ytChannelUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <FoldingPreview videoFile="white_weaving_v.mp4" previewSeconds={3} alt="weaving video" />
                </a>
              </div>
            </Card>

            {/* Folding Phase */}
            <Card className="p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4 hover:shadow-xl transition-shadow">
              <h3 className="text-xl sm:text-2xl font-bold text-primary">
                {isTamil ? "மடிப்பு நிலை" : "Folding Phase"}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {isTamil
                  ? "நெசவினை முடித்த சேலைகளை மெதுவாக மடித்து கையாளும் நுணுக்கமான கலை, பொருளின் தூய்மை மற்றும் அழகான வடிவத்தை பாதுகாக்கும்."
                  : "The delicate art of folding and handling completed sarees, ensuring the fabric maintains its pristine quality and beautiful drape."}
              </p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <a href={ytChannelUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <FoldingPreview previewSeconds={3} />
                </a>
              </div>
            </Card>
          </div>

          {/* Final Masterpieces */}
          <Card className="p-5 sm:p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">
                {isTamil ? "இறுதி கைவினை உருவாக்கங்கள்" : "Final Masterpieces"}
              </h3>
              <p className="text-sm text-muted-foreground max-w-lg">
                {isTamil
                  ? ""
                  : ""}
              </p>
            </div>

            <Showcase images={[p1, p2, p3]} autoInterval={5000} />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

function Showcase({ images, autoInterval = 5000 }: { images: string[]; autoInterval?: number }) {
  const [index, setIndex] = useState(0);
  const next = (index + 1) % images.length;
  const [mix, setMix] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), autoInterval);
    return () => clearInterval(id);
  }, [images.length, autoInterval]);

  return (
    <div className="space-y-4">
      <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}>
        <img src={images[next]} alt={`masterpiece ${next + 1}`} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" style={{ opacity: mix / 100 }} />
        <img src={images[index]} alt={`masterpiece ${index + 1}`} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" style={{ opacity: (100 - mix) / 100 }} />

        <button
          onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
          aria-label="Previous masterpiece"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => setIndex((i) => (i + 1) % images.length)}
          aria-label="Next masterpiece"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
