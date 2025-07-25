"use client";


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleOnHover = {
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  whileTap: { scale: 0.95 }
};

const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(142, 252, 195, 0.3)",
      "0 0 40px rgba(142, 252, 195, 0.6)",
      "0 0 20px rgba(142, 252, 195, 0.3)"
    ]
  },
  transition: {
    duration: 2,
    repeat: Infinity
  }
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-glow">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div className="space-y-4" variants={fadeInUp}>
                <motion.h1
                  className="text-6xl md:text-7xl font-bold text-white"
                  variants={fadeInUp}
                >
                  OmniLid<motion.span
                    className="glow-green"
                    animate={glowPulse.animate}
                    transition={glowPulse.transition}
                  >™</motion.span>
                </motion.h1>
                <motion.p
                  className="text-2xl md:text-3xl glow-green text-glow font-medium"
                  variants={fadeInUp}
                >
                  One Lid. All Cups.
                </motion.p>
                <motion.p
                  className="text-xl text-gray-300"
                  variants={fadeInUp}
                >
                  Reusable. Adjustable. Personalizable. Glow-in-the-dark.
                </motion.p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3"
                variants={fadeInUp}
              >
                <motion.div {...scaleOnHover}>
                  <Badge variant="secondary" className="bg-glow-green/20 text-glow-green border-glow-green/30">
                    Glow-in-the-Dark
                  </Badge>
                </motion.div>
                <motion.div {...scaleOnHover}>
                  <Badge variant="secondary" className="bg-lilac/20 text-lilac border-lilac/30">
                    Expandable
                  </Badge>
                </motion.div>
                <motion.div {...scaleOnHover}>
                  <Badge variant="secondary" className="bg-glow-green/20 text-glow-green border-glow-green/30">
                    Eco-Friendly
                  </Badge>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="relative z-10 glow-effect rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}

                {...glowPulse}
              >
                <img
                  src="/images/ChatGPT_Image_24_jul_2025,_09_32_37_p.m..png"
                  alt="OmniLid on beverage with folded lid beside it"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <motion.section
        className="py-20 gradient-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our innovative expansion system adjusts to multiple cup diameters with a perfect seal every time.
            </p>
          </motion.div>

          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/ChatGPT_Image_24_jul_2025,_09_32_40_p.m..png"
                alt="OmniLid GLOWS IN THE DARK and EXPANDS - One lid fits multiple cup sizes"
                className="w-full h-auto glow-effect rounded-2xl"
              />
            </motion.div>
          </motion.div>


          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="bg-gray-900/50 border-glow-green/30">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="w-16 h-16 bg-glow-green/20 rounded-full flex items-center justify-center mx-auto mb-4"
                    animate={glowPulse.animate}
                    transition={glowPulse.transition}
                  >
                    <span className="text-2xl glow-green">1</span>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">Unfold</h3>
                  <p className="text-gray-300">Start with the flat, foldable design</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="bg-gray-900/50 border-glow-green/30">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="w-16 h-16 bg-glow-green/20 rounded-full flex items-center justify-center mx-auto mb-4"
                    animate={glowPulse.animate}
                    transition={glowPulse.transition}
                  >
                    <span className="text-2xl glow-green">2</span>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">Expand</h3>
                  <p className="text-gray-300">Stretch to fit any cup diameter</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="bg-gray-900/50 border-glow-green/30">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="w-16 h-16 bg-glow-green/20 rounded-full flex items-center justify-center mx-auto mb-4"
                    animate={glowPulse.animate}
                    transition={glowPulse.transition}
                  >
                    <span className="text-2xl glow-green">3</span>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">Seal</h3>
                  <p className="text-gray-300">Perfect seal every time</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Personalization Gallery */}
      <motion.section
        className="py-20 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Made to be Yours</h2>
            <motion.p
              className="text-xl glow-green text-glow mb-4"
              {...glowPulse}
            >
              Label it, decorate it, or keep it clean and sleek.
            </motion.p>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Express yourself with markers, stickers, or keep it minimalist.
              The choice is yours.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <img
                  src="/images/ChatGPT_Image_24_jul_2025,_09_32_42_p.m..png"
                  alt="Personalized OmniLid with Good Vibes decorations"
                  className="w-full h-[400px] object-cover rounded-2xl glow-effect"
                />
              </div>
            </motion.div>

            <motion.div
              className="relative"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <img
                  src="/images/ChatGPT_Image_24_jul_2025,_09_32_44_p.m..png"
                  alt="Personalized OmniLid with GR8 Vibes and colorful markers"
                  className="w-full h-[400px] object-cover rounded-2xl glow-effect"
                />
              </div>
            </motion.div>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <Card className="bg-gray-900/30 border-lilac/30">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-white mb-2">School</h4>
                <p className="text-sm text-gray-300">Perfect for water bottles and lunch drinks</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-lilac/30">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-white mb-2">Gym</h4>
                <p className="text-sm text-gray-300">Secure lid for protein shakes and smoothies</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-lilac/30">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-white mb-2">Office</h4>
                <p className="text-sm text-gray-300">Professional look for coffee and tea</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-lilac/30">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-white mb-2">On-the-Go</h4>
                <p className="text-sm text-gray-300">Travel-friendly and foldable design</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Materials & Sustainability */}
      <section className="py-20 gradient-glow">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-white mb-6">
                  Glow-in-the-Dark Magic
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Made from recycled TPE with luminescent properties that charge in any light
                  and glow beautifully in the dark.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-glow-green rounded-full glow-effect"></div>
                  <span className="text-white font-medium">Glow-in-the-dark recycled TPE</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-glow-green rounded-full glow-effect"></div>
                  <span className="text-white font-medium">BPA-free / Food-grade / Non-toxic</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-glow-green rounded-full glow-effect"></div>
                  <span className="text-white font-medium">Heat resistant and foldable</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-glow-green rounded-full glow-effect"></div>
                  <span className="text-white font-medium">Dishwasher safe</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl glow-effect flex items-center justify-center">
                <div className="flex space-x-8 items-end">
                  {/* Small cup */}
                  <div className="text-center">
                    <div className="w-16 h-20 bg-gray-600 rounded-b-lg border-t-6 border-glow-green/80 shadow-lg">
                      <div className="absolute mt-[-4px] ml-[-2px]">
                        <div className="w-20 h-3 bg-glow-green/90 rounded-full glow-effect"></div>
                      </div>
                    </div>
                    <div className="text-xs text-glow-green mt-2">Small</div>
                  </div>

                  {/* Medium cup */}
                  <div className="text-center">
                    <div className="w-20 h-24 bg-gray-600 rounded-b-lg border-t-6 border-glow-green/80 shadow-lg">
                      <div className="absolute mt-[-4px] ml-[-2px]">
                        <div className="w-24 h-3 bg-glow-green/90 rounded-full glow-effect"></div>
                      </div>
                    </div>
                    <div className="text-xs text-glow-green mt-2">Medium</div>
                  </div>

                  {/* Large cup */}
                  <div className="text-center">
                    <div className="w-24 h-28 bg-gray-600 rounded-b-lg border-t-6 border-glow-green/80 shadow-lg">
                      <div className="absolute mt-[-4px] ml-[-2px]">
                        <div className="w-28 h-3 bg-glow-green/90 rounded-full glow-effect"></div>
                      </div>
                    </div>
                    <div className="text-xs text-glow-green mt-2">Large</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-On Modules */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Omni Ecosystem</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete your sustainable drinking experience with our ecosystem of
              interchangeable accessories made from the same premium materials.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/30 border-glow-green/30">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-glow-green/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🥤</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Foldable Straw</h3>
                <p className="text-gray-300 mb-4">
                  Collapsible reusable straw that fits perfectly with your OmniLid.
                  Same glow-in-the-dark material, easy to clean and store.
                </p>
                <Badge variant="secondary" className="bg-lilac/20 text-lilac border-lilac/30">
                  Coming Soon
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-glow-green/30">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-glow-green/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Straw Case</h3>
                <p className="text-gray-300 mb-4">
                  Hygienic storage case for your foldable straw. Clips easily to
                  bags, keychains, or stores inside the lid insert slot.
                </p>
                <Badge variant="secondary" className="bg-lilac/20 text-lilac border-lilac/30">
                  Coming Soon
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-glow-green/30">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-glow-green/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Insert Modules</h3>
                <p className="text-gray-300 mb-4">
                  Customizable insert slots for straws, stirrers, or personal accessories.
                  Mix and match to create your perfect drinking setup.
                </p>
                <Badge variant="secondary" className="bg-lilac/20 text-lilac border-lilac/30">
                  Coming Soon
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About OmniLid */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-8">About OmniLid™</h2>

            <div className="space-y-8 text-lg text-gray-300">
              <p>
                Born from a simple frustration: why do we need different lids for different cups?
                OmniLid™ represents a nostalgic return to smart, purposeful design combined with
                modern eco-consciousness.
              </p>

              <p>
                Our mission is to reduce single-use plastic waste while bringing back the joy
                of personalization. Remember decorating your school supplies? OmniLid™ brings
                that creative spirit to your daily hydration routine.
              </p>

              <p className="glow-green text-glow font-medium">
                One lid. Endless possibilities. Zero waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Download Media Kit</h2>
            <p className="text-xl text-gray-300 mb-8">
              High-resolution images, brand guidelines, and press materials for
              partners, press, and social sharing.
            </p>

            <Button
              size="lg"
              className="bg-glow-green text-black hover:bg-glow-green/90 text-lg px-8 py-4 glow-effect"
            >
              Download Press Kit
            </Button>

            <div className="mt-8 flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold glow-green">4K</div>
                <div className="text-sm text-gray-400">Product Images</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold glow-green">Logo</div>
                <div className="text-sm text-gray-400">Brand Assets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold glow-green">Guide</div>
                <div className="text-sm text-gray-400">Brand Guidelines</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">
              OmniLid<span className="glow-green">™</span>
            </h3>
            <p className="text-gray-400 mt-2">One Lid. All Cups.</p>
          </div>

          <div className="text-sm text-gray-500">
            <p>&copy; 2024 OmniLid™. All rights reserved.</p>
            <p className="mt-2">Designed for sustainability. Built for personalization.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
