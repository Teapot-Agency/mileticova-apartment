import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Meno musí mať aspoň 2 znaky"),
  phone: z.string()
    .regex(
      /^(\+421\s?9\d{2}\s?\d{3}\s?\d{3}|\+4219\d{8}|09\d{8}|09\d{2}\s?\d{3}\s?\d{3})$/,
      "Zadajte platné slovenské telefónne číslo"
    ),
  email: z.string().email("Zadajte platnú email adresu"),
  date: z.string().optional().refine((date) => {
    if (!date) return true; // Optional field, so empty is valid
    const selectedDate = new Date(date);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return selectedDate >= tomorrow;
  }, "Dátum musí byť najmenej 1 deň v budúcnosti"),
  time: z.string().optional(),
  message: z.string().optional(),
  website: z.string().max(0, "Bot detected"), // Honeypot field
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formLoadTime] = useState(Date.now());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  // Get tomorrow's date for min date validation
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Bot protection: Check minimum time spent on form (3 seconds)
    const timeSpent = Date.now() - formLoadTime;
    if (timeSpent < 3000) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      console.log("Bot detected: Form submitted too quickly");
      return;
    }

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        preferred_date: data.date || "Neuvedené",
        preferred_time: data.time || "Neuvedené",
        message: data.message || "Žiadna správa",
        property: "Byt na Miletičovej - 4 izby, 91m²",
        to_name: "Patrik Magoš",
        to_email: "patrikmko@gmail.com",
        reply_to: data.email,
        sent_date: new Date().toLocaleDateString('sk-SK'),
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus("error");
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
      <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
        Kontaktujte nás
      </h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Success Message */}
        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center text-green-800">
            <CheckCircle className="h-5 w-5 mr-2" />
            <span>Vaša správa bola úspešne odoslaná! Budeme vás kontaktovať čoskoro.</span>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center text-red-800">
            <AlertCircle className="h-5 w-5 mr-2" />
            <span>Chyba pri odosielaní správy. Skúste to prosím znovu alebo nás kontaktujte priamo.</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground flex items-center">
              <User className="h-4 w-4 mr-2" />
              Meno a priezvisko *
            </label>
            <Input 
              {...register("name")}
              placeholder="Zadajte vaše meno" 
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              Telefónne číslo *
            </label>
            <Input 
              {...register("phone")}
              placeholder="+421 xxx xxx xxx" 
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-card-foreground flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            Email adresa *
          </label>
          <Input 
            {...register("email")}
            type="email" 
            placeholder="vas.email@priklad.sk" 
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Preferovaný dátum
            </label>
            <Input 
              {...register("date")}
              type="date" 
              min={getTomorrowDate()}
              className={errors.date ? "border-red-500" : ""}
            />
            {errors.date && (
              <p className="text-sm text-red-500">{errors.date.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Preferovaný čas
            </label>
            <Input 
              {...register("time")}
              type="time" 
              className={errors.time ? "border-red-500" : ""}
            />
            {errors.time && (
              <p className="text-sm text-red-500">{errors.time.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-card-foreground flex items-center">
            <MessageSquare className="h-4 w-4 mr-2" />
            Správa (voliteľné)
          </label>
          <Textarea 
            {...register("message")}
            placeholder="Napíšte nám vaše požiadavky alebo otázky..." 
            rows={4}
          />
        </div>

        {/* Honeypot field - invisible to humans */}
        <div className="absolute left-[-9999px] opacity-0" aria-hidden="true">
          <Input 
            {...register("website")}
            placeholder="Leave this field empty"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="space-y-4">
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Odosielam...
              </>
            ) : (
              "Mám záujem"
            )}
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Alebo nás kontaktujte priamo:
            </p>
            <div className="space-y-2">
              <p className="font-semibold text-card-foreground">Patrik Magoš</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
                <a 
                  href="tel:+421948994733" 
                  className="flex items-center justify-center text-primary hover:text-primary/80"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +421 948 994 733
                </a>
                <a 
                  href="mailto:patrikmko@gmail.com" 
                  className="flex items-center justify-center text-primary hover:text-primary/80"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  patrikmko@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;