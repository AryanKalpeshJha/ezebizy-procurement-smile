
import { ArrowRight, CheckCircle, Users, Globe, Truck, Shield, Star, Phone, Mail, MapPin, Package, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const services = [
    "Product Adaptation & Design",
    "Printing & Customization", 
    "Kitting & Packaging",
    "Domestic & International Shipping",
    "Bulk Order Management",
    "Quality Assurance"
  ];

  const industries = [
    "Software & IT Companies", "Banking & Finance", "Airlines & Aviation", "Hotels & Hospitality",
    "Healthcare & Pharma", "Manufacturing", "BPOs & IT Services", "Insurance", "Logistics",
    "Government Agencies", "Educational Institutions", "Startups & SMEs"
  ];

  const products = [
    "Electronics & Gadgets",
    "Premium Handicrafts", 
    "Corporate Stationery",
    "Branded Merchandise",
    "Home Appliances",
    "Customized Gifts",
    "Safety Products",
    "Office Supplies"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/94051434-c059-4726-9669-ccac65281114.png" 
                alt="Bizenia Enterprise Solutions" 
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About Us</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
              <a href="#smile" className="text-foreground hover:text-primary transition-colors">SMILE Initiative</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
            <Button className="bg-brand-gradient text-white hover:opacity-90">
              Get Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-red-light/20 via-white to-brand-orange-light/20 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-brand-gradient text-white">
                25+ Years of Excellence
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Worklife Solutions
                <span className="block text-gradient">
                  for All
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We inspire what could be, and help make it a reality. Your trusted partner for promotional products and indirect procurement solutions, serving businesses from solopreneurs to Fortune 100 companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-gradient text-white hover:opacity-90">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary hover:text-primary-foreground">
                  Explore SMILE Initiative
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Quality Assured</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-brand-red-light/30 to-brand-orange-light/30 rounded-3xl p-8 transform rotate-3 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                  alt="Professional workspace"
                  className="rounded-2xl shadow-lg transform -rotate-3 w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">About Bizenia</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bizenia Enterprise Solutions is your new-age, professional, and innovative supplier of promotional products and indirect procurement solutions. With over 25 years of industry expertise, we deliver end-to-end services that make gifting and procurement seamless, efficient, and delightful.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="bg-brand-red-light/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-muted-foreground">Highly qualified professionals with decades of combined experience in procurement and promotional solutions.</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:border-secondary/20">
              <CardContent className="p-8 text-center">
                <div className="bg-brand-orange-light/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-brand-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Multi-Channel Reach</h3>
                <p className="text-muted-foreground">Accessibility through direct sales, eCommerce, mobile, conversational commerce, and retail channels.</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="bg-brand-yellow-light/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-brand-yellow" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trust & Quality</h3>
                <p className="text-muted-foreground">Commitment to quality, timely delivery, and innovative solutions backed by robust technology-driven processes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SMILE Initiative Section */}
      <section id="smile" className="py-20 bg-gradient-to-br from-brand-yellow-light/10 to-brand-red-light/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">The SMILE Initiative</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bizenia is transforming the way businesses in India buy and procure through our robust, technology-driven ecosystem for Small Medium Individual Local Entrepreneurs (S.M.I.L.E.). We bring a smile to our customers' faces with quality products and foster productivity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="space-y-4">
                <div className="bg-brand-red-light/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Package className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-lg font-semibold">Small</h3>
                <p className="text-sm text-muted-foreground">Supporting small businesses with tailored procurement solutions</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="space-y-4">
                <div className="bg-brand-orange-light/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-brand-orange" />
                </div>
                <h3 className="text-lg font-semibold">Medium</h3>
                <p className="text-sm text-muted-foreground">Empowering medium enterprises with scalable solutions</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="space-y-4">
                <div className="bg-brand-yellow-light/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-brand-yellow" />
                </div>
                <h3 className="text-lg font-semibold">Individual</h3>
                <p className="text-sm text-muted-foreground">Serving individual entrepreneurs and freelancers</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="space-y-4">
                <div className="bg-brand-red-light/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-lg font-semibold">Local</h3>
                <p className="text-sm text-muted-foreground">Supporting local entrepreneurs and communities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our End-to-End Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From design to delivery, we provide comprehensive solutions for all your procurement and promotional needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gradient-to-r from-white to-gray-50 p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-brand-orange-light/10 to-brand-yellow-light/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Product Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our extensive catalog of high-quality products designed to meet all your business and promotional needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-brand-red-light/20 to-brand-orange-light/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{product}</h3>
                  <p className="text-sm text-muted-foreground">Premium quality products tailored to your specifications</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by diverse industries across the spectrum, from startups to Fortune 100 companies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow hover:from-brand-red-light/10 hover:to-brand-orange-light/10">
                <span className="font-medium text-sm">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-brand-red-light/10 to-brand-orange-light/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Bizenia?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-brand-red-light/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-10 w-10 text-brand-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
              <p className="text-muted-foreground">Fast and reliable delivery across domestic and international markets</p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-orange-light/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-brand-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">Rigorous quality control and premium product standards</p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-yellow-light/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-brand-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-muted-foreground">Dedicated team of qualified professionals</p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-red-light/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-brand-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">Technology-driven solutions with forward-thinking approach</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Procurement Experience?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Bizenia for their promotional and procurement needs. Let's bring a SMILE to your business together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Explore SMILE Initiative
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Ready to start your procurement journey? We're here to help bring solutions to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="bg-brand-red-light/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Phone className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="text-muted-foreground">Speak with our procurement experts</p>
                <Button variant="outline" className="w-full border-primary hover:bg-primary hover:text-primary-foreground">Contact Now</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="bg-brand-orange-light/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-brand-orange" />
                </div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p className="text-muted-foreground">Send us your requirements</p>
                <Button variant="outline" className="w-full border-secondary hover:bg-secondary hover:text-secondary-foreground">Send Email</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="bg-brand-yellow-light/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <MapPin className="h-8 w-8 text-brand-yellow" />
                </div>
                <h3 className="text-xl font-semibold">Visit Us</h3>
                <p className="text-muted-foreground">Meet our team in person</p>
                <Button variant="outline" className="w-full border-accent hover:bg-accent hover:text-accent-foreground">Get Directions</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/94051434-c059-4726-9669-ccac65281114.png" 
                alt="Bizenia Enterprise Solutions" 
                className="h-10 w-auto brightness-0 invert"
              />
              <p className="text-sm opacity-80">
                Your trusted partner for promotional products and indirect procurement solutions. Bringing SMILE to businesses across India with innovative, technology-driven solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Product Design</li>
                <li>Customization</li>
                <li>Bulk Orders</li>
                <li>Global Shipping</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">SMILE Initiative</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Small Business Solutions</li>
                <li>Medium Enterprise Support</li>
                <li>Individual Entrepreneurs</li>
                <li>Local Community Focus</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Contact Us</li>
                <li>Request Quote</li>
                <li>Support</li>
                <li>Newsletter</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 Bizenia Enterprise Solutions Pvt. Ltd. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
