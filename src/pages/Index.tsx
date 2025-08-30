import PhotoGallery from "@/components/PhotoGallery";
import ContactForm from "@/components/ContactForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Wifi, 
  Car, 
  Dumbbell, 
  Shield, 
  Waves, 
  Coffee,
  PawPrint,
  Snowflake,
  Zap,
  TreePine
} from "lucide-react";
import type { FacebookPixelParams } from "@/types/facebook-pixel";

// Gallery images from public folder

const galleryImages = [
  // New visualization images (featured first)
  { src: "/images/IMG_0277_new.webp", alt: "Interiér bytu - obývacia izba (vizualizácia)" },
  { src: "/images/IMG_0288_new.webp", alt: "Lodžia s výhľadom (vizualizácia)" },
  { src: "/images/IMG_0295_new.webp", alt: "Spálňa - detail (vizualizácia)" },
  { src: "/images/IMG_0298_new.webp", alt: "Kuchyňa - detail (vizualizácia)" },
  { src: "/images/IMG_0281_new.webp", alt: "Spálňa s veľkými oknami (vizualizácia)" },
  { src: "/images/IMG_0283_new.webp", alt: "Kúpeľňa s vaňou (vizualizácia)" },
  { src: "/images/IMG_0285_new.webp", alt: "Druhá izba (vizualizácia)" },
  { src: "/images/IMG_0291_new.webp", alt: "Druhá kúpeľňa (vizualizácia)" },
  { src: "/images/IMG_0293_new.webp", alt: "Kuchynské spotrebiče (vizualizácia)" },
  { src: "/images/IMG_0304_new.webp", alt: "Kúpeľňa - detail (vizualizácia)" },
  
  // Original apartment photos
  { src: "/images/IMG_0277.jpg", alt: "Interiér bytu - obývacia izba" },
  { src: "/images/IMG_0279.jpg", alt: "Kuchyňa s jedálenským kútom" },
  { src: "/images/IMG_0281.jpg", alt: "Spálňa s veľkými oknami" },
  { src: "/images/IMG_0283.jpg", alt: "Kúpeľňa s vaňou" },
  { src: "/images/IMG_0284.jpg", alt: "Vstupná chodba" },
  { src: "/images/IMG_0285.jpg", alt: "Druhá izba" },
  { src: "/images/IMG_0287.jpg", alt: "Samostatné WC" },
  { src: "/images/IMG_0288.jpg", alt: "Lodžia s výhľadom" },
  { src: "/images/IMG_0290.jpg", alt: "Treťa izba" },
  { src: "/images/IMG_0291.jpg", alt: "Druhá kúpeľňa" },
  { src: "/images/IMG_0293.jpg", alt: "Kuchynské spotrebiče" },
  { src: "/images/IMG_0294.jpg", alt: "Obývacia izba - detail" },
  { src: "/images/IMG_0295.jpg", alt: "Spálňa - detail" },
  { src: "/images/IMG_0296.jpg", alt: "Výhľad z okna" },
  { src: "/images/IMG_0298.jpg", alt: "Kuchyňa - detail" },
  { src: "/images/IMG_0300.jpg", alt: "Štvrtá izba" },
  { src: "/images/IMG_0304.jpg", alt: "Kúpeľňa - detail" },
  { src: "/images/IMG_0305.jpg", alt: "Chodba a dvere" },
  { src: "/images/IMG_4582.jpg", alt: "Celkový pohľad na byt" },
  { src: "/images/IMG_4583.jpg", alt: "Interiér - široký záber" },
  { src: "/images/IMG_4592.jpg", alt: "Lodžia a okolie" },
  { src: "/images/IMG_4611.jpg", alt: "Bytový dom - exteriér" },
  { src: "/images/IMG_4617.jpg", alt: "Okolie budovy" },
  { src: "/images/Miletičova_planik.png", alt: "Pôdorys bytu" }
];

const amenities = [
  { icon: Wifi, name: "Optický internet" },
  { icon: Car, name: "Bezplatné parkovanie" },
  { icon: Shield, name: "Monitorovaná bicykliareň" },
  { icon: Snowflake, name: "Východná lodžia 11m²" },
  { icon: Zap, name: "Centrálne vykurovanie" },
  { icon: TreePine, name: "Pochôdzna strecha" }
];

// Facebook Pixel tracking utility
const trackFacebookEvent = (eventName: string, parameters: FacebookPixelParams = {}) => {
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, parameters);
    }
  } catch (error) {
    console.error('Facebook Pixel tracking error:', error);
  }
};

const Index = () => {
  const scrollToContactForm = () => {
    // Track interest button click
    trackFacebookEvent('InitiateCheckout', {
      content_category: 'Real Estate',
      content_name: 'Interest Button Click',
      property: 'Miletičova 4-room apartment',
      property_type: '4-room apartment', 
      location: 'Miletičova, Bratislava',
      value: 386000,
      currency: 'EUR'
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Property Header */}
      <div className="bg-warm-neutral py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-accent text-accent-foreground">Širšie centrum</Badge>
                <Badge variant="outline">Zdieľaj kým nezmažú!</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Priestranný 4‑izbový byt na Miletičovej
              </h1>
              
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <a 
                  href="https://maps.app.goo.gl/v2AYHZsYJdwHvEHu8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg hover:text-primary transition-colors"
                >
                  Miletičova, Ružinov, Bratislava
                </a>
              </div>

              <div className="flex items-center gap-8 text-lg">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 mr-2 text-primary" />
                  <span>4 izby</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 mr-2 text-primary" />
                  <span>2 kúpeľne</span>
                </div>
                <div className="flex items-center">
                  <Square className="h-5 w-5 mr-2 text-primary" />
                  <span>92 m² + 11 m² lodžia</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-4xl font-bold text-primary mb-2">386 000 €</div>
              <div className="text-muted-foreground text-lg">Na predaj</div>
              <Button 
                size="lg" 
                className="mt-4 bg-primary hover:bg-primary/90"
                onClick={scrollToContactForm}
              >
                Mám záujem
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Gallery and Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Photo Gallery */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Tvoja budúca nehnuteľnosť</h2>
              <PhotoGallery images={galleryImages} />
            </section>

            {/* Property Description */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">O nehnuteľnosti</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Hľadáte komfortné mestské bývanie s dostatkom priestoru? Ponúkame na predaj 4-izbový holobyt o rozlohe 92 m² na Miletičovej ulici v bratislavskom Ružinove oblasť Nivy. Byt disponuje dvoma kúpeľňami a dvoma toaletami – rarita v tejto kategórii. Priestranná 11 m² lodžia orientovaná na východ poskytuje dostatok miesta na relax a umožňuje osadenie klimatizácie. K bytu patrí pivničná kobka 1 m².
                </p>
                <p>
                  <strong>Dispozícia:</strong><br />
                  Veľká vstupná hala, z nej vstup do dvoch samostatných izieb, do obývacej izby spojenej s kuchynským priestorom a jedálňou a do hlavnej spálne so súkromnou kúpeľňou. Druhá kúpeľňa a samostatné WC sú prístupné z chodby. Byt má plastové okná a PVC podlahy, pod ktorými sa nachádzajú pôvodné drevené parkety. Všetky vnútorné steny sú priečky (nenosné) – dispozíciu je možné prispôsobiť podľa potrieb. Vykurovanie je centrálne z domovej kotolne, ohrev teplej vody zabezpečuje vlastný plynový kotol; v kuchyni je plynový sporák. Internet: optický kábel.
                </p>
                <p>
                  <strong>Bytový dom a lokalita:</strong><br />
                  Tehlová konštrukcia s hrúbkou stien až 50 cm zaručuje výbornú tepelnú aj akustickú izoláciu. Budova je zateplená, má novú strechu (s možnosťou využívať pochôdznu strechu), zrekonštruované spoločné priestory a 2 výťahy. Rezidenti majú k dispozícii bezplatné parkovanie vo vnútrobloku; v okolí platí rezidenčné parkovanie. V suteréne je špeciálna miestnosť na bicykle monitorovaná kamerovým systémom. V pešej dostupnosti je kompletná občianska vybavenosť: nákupné centrá Central a Nivy, zastávky električiek, trolejbusov a autobusov, školy všetkých stupňov, športoviská (Tehelné pole, Jama, NTC) a množstvo parkov. Milovníci gastronómie ocenia tržnicu Miletičova s legendárnym stánkom Phong Nam priamo pred domom. Lokalita ponúka rýchle napojenie do centra aj na obchvat.
                </p>
                <p>
                  <strong>Prečo práve tento byt?</strong><br />
                  • 91 m² úžitkovej plochy + 11 m² lodžia + 1 m² pivnica, 4 izby – pohodlné bývanie aj pre rodinu<br />
                  • 2 kúpeľne + 2 WC – komfort a súkromie pre všetkých<br />
                  • Východne orientovaná 11 m² lodžia; možnosť umiestniť klimatizáciu<br />
                  • Tehlový dom po rekonštrukcii, zateplený, nová strecha; hrubé múry pre ticho a príjemnú klímu<br />
                  • Všetky vnútorné steny priečkové – ľahká zmena dispozície podľa potrieb<br />
                  • Optický internet; monitorovaná bicykliareň v suteréne; 2 výťahy; pochôdzna strecha<br />
                  • Kompletná občianska vybavenosť na pešo, výborné spojenie MHD a rýchly prístup do centra<br />
                  • Bezplatné rezidenčné parkovanie priamo vo vnútrobloku
                </p>
                <p>
                  Byt je kúpou voľný a pripravený na dokončenie podľa vlastných predstáv. Pre bližšie informácie alebo dohodnutie obhliadky nás neváhajte kontaktovať.
                </p>
              </div>
            </section>

            {/* Amenities */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Vlastnosti a benefity</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
                    <amenity.icon className="h-8 w-8 text-primary mb-3" />
                    <span className="text-sm font-medium text-card-foreground">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <div id="contact-form" className="sticky top-24">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
