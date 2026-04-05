"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Hyderabad, Telangana, India",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 90329 99466",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "invest@sohowealth.in",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="line-accent mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Start Your{" "}
            <span className="text-gradient-gold">Wealth Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Schedule a complimentary consultation to discuss your financial goals.
            No obligations, just honest advice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 lg:p-10 rounded-2xl bg-card border border-border">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Request a Callback
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-muted border-border h-12"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-muted border-border h-12"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-muted border-border h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your financial goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-muted border-border min-h-[120px] resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold h-14"
                >
                  Schedule Free Consultation
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting, you agree to our privacy policy. We never share your data.
              </p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground mb-1">{info.title}</h4>
                  <p className="text-sm text-muted-foreground">{info.content}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Prefer a Quick Chat?
              </h3>
              <p className="text-muted-foreground mb-5">
                Call us directly for an immediate conversation with our advisors.
              </p>
              <a
                href="tel:+919032999466"
                className="inline-flex items-center gap-2 text-primary font-semibold group"
              >
                <Phone className="w-5 h-5" />
                +91 90329 99466
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="aspect-video rounded-2xl bg-muted overflow-hidden relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-3" />
                  <p className="text-muted-foreground">Interactive map coming soon</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
