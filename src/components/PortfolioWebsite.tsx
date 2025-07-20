import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, ExternalLink, Code, ShoppingCart, Palette, Globe, Users, TrendingUp, Mail, Phone, MapPin, Send, Check } from "lucide-react";

export const PortfolioWebsite = () => {
  const wordpressProjects = [
    {
      title: "E-commerce Fashion Store",
      description: "Complete WooCommerce store with custom theme, payment integration, and inventory management",
      technologies: ["WordPress", "WooCommerce", "Custom PHP", "Stripe Integration"],
      features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Admin Dashboard"],
      image: "photo-1460925895917-afdab827c52f",
      category: "WooCommerce"
    },
    {
      title: "Corporate Business Website",
      description: "Professional WordPress site with custom design, SEO optimization, and content management",
      technologies: ["WordPress", "Custom Theme", "ACF", "Yoast SEO"],
      features: ["Responsive Design", "SEO Optimized", "Contact Forms", "Blog System"],
      image: "photo-1486312338219-ce68d2c6f44d",
      category: "WordPress"
    },
    {
      title: "Multi-vendor Marketplace",
      description: "Advanced WooCommerce marketplace with vendor management and commission system",
      technologies: ["WordPress", "WooCommerce", "Multi-vendor", "Custom Dashboard"],
      features: ["Vendor Registration", "Commission System", "Order Management", "Reviews"],
      image: "photo-1498050108023-c5249f4df085",
      category: "WooCommerce"
    },
    {
      title: "Restaurant Booking System",
      description: "Custom WordPress solution with online ordering and table reservation system",
      technologies: ["WordPress", "Custom Plugin", "Payment Processing", "Booking System"],
      features: ["Online Ordering", "Table Booking", "Menu Management", "Customer Portal"],
      image: "photo-1483058712412-4245e9b90334",
      category: "WordPress"
    }
  ];

  const skills = [
    { name: "WordPress", level: "Expert", projects: 25 },
    { name: "WooCommerce", level: "Expert", projects: 15 },
    { name: "Web Design", level: "Advanced", projects: 30 },
    { name: "Web Development", level: "Expert", projects: 40 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">WebCraft Studio</div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-border">
                  <DropdownMenuItem>
                    <Code className="mr-2 h-4 w-4" />
                    WordPress Development
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    WooCommerce Stores
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Palette className="mr-2 h-4 w-4" />
                    Web Design
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Globe className="mr-2 h-4 w-4" />
                    Web Development
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            
            <Button>Get Quote</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            WordPress & WooCommerce Expert
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Creating powerful, scalable web solutions with WordPress and WooCommerce. 
            From custom themes to complete e-commerce platforms.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Projects
            </Button>
            <Button size="lg" variant="outline">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{skill.name}</div>
                  <Badge variant="secondary" className="mb-3">{skill.level}</Badge>
                  <p className="text-sm text-muted-foreground">{skill.projects}+ Projects</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              WordPress & WooCommerce Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing successful implementations of WordPress and WooCommerce solutions 
              for diverse business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {wordpressProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <img 
                    src={`https://images.unsplash.com/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant={project.category === "WooCommerce" ? "default" : "secondary"}>
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">WordPress Sites</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">WooCommerce Stores</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Professional Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive web solutions from concept to deployment, specializing in WordPress and WooCommerce development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-2xl">WordPress Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Expert WordPress development services including custom themes, plugins, and complete website solutions.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-success mr-3" />
                    Custom Theme Development
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-success mr-3" />
                    Plugin Development & Integration
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-success mr-3" />
                    WordPress Migration & Optimization
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-success mr-3" />
                    Maintenance & Security Updates
                  </li>
                </ul>
                <div className="text-sm text-muted-foreground">
                  <strong>Starting from $2,500</strong> for basic WordPress sites
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <ShoppingCart className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-2xl">WooCommerce Solutions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Complete e-commerce solutions with advanced features for online stores and marketplaces.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-success mr-3" />
                    E-commerce Store Setup
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-success mr-3" />
                    Payment Gateway Integration
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-success mr-3" />
                    Inventory Management Systems
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-success mr-3" />
                    Multi-vendor Marketplace
                  </li>
                </ul>
                <div className="text-sm text-muted-foreground">
                  <strong>Starting from $5,000</strong> for WooCommerce stores
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <Palette className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-2xl">Web Design</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Modern, responsive web designs that create engaging user experiences and drive business results.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-success mr-3" />
                    UI/UX Design & Wireframing
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-success mr-3" />
                    Responsive Mobile Design
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-success mr-3" />
                    Brand Identity & Logo Design
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-success mr-3" />
                    Conversion Optimization
                  </li>
                </ul>
                <div className="text-sm text-muted-foreground">
                  <strong>Starting from $1,500</strong> for design packages
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-2xl">Web Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Full-stack web development with focus on performance, scalability, and modern technologies.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-success mr-3" />
                    Custom Web Applications
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-success mr-3" />
                    API Development & Integration
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-success mr-3" />
                    Database Design & Optimization
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-success mr-3" />
                    Performance & SEO Optimization
                  </li>
                </ul>
                <div className="text-sm text-muted-foreground">
                  <strong>Starting from $3,000</strong> for web applications
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your web project to life? Let's discuss your requirements and create something amazing together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl flex items-center">
                    <Send className="h-6 w-6 text-primary mr-3" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input id="company" placeholder="Your Company" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full justify-between">
                            Select Project Type
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full">
                          <DropdownMenuItem>WordPress Website</DropdownMenuItem>
                          <DropdownMenuItem>WooCommerce Store</DropdownMenuItem>
                          <DropdownMenuItem>Web Design</DropdownMenuItem>
                          <DropdownMenuItem>Web Development</DropdownMenuItem>
                          <DropdownMenuItem>Maintenance & Support</DropdownMenuItem>
                          <DropdownMenuItem>Other</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="budget">Project Budget</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full justify-between">
                            Select Budget Range
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full">
                          <DropdownMenuItem>$1,000 - $5,000</DropdownMenuItem>
                          <DropdownMenuItem>$5,000 - $10,000</DropdownMenuItem>
                          <DropdownMenuItem>$10,000 - $25,000</DropdownMenuItem>
                          <DropdownMenuItem>$25,000+</DropdownMenuItem>
                          <DropdownMenuItem>Let's Discuss</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project requirements, goals, and timeline..."
                        rows={5}
                      />
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  Get in touch to discuss your project requirements. I'm here to help bring your vision to life 
                  with professional WordPress and WooCommerce solutions.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">hello@webcraftstudio.com</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">New York, NY</p>
                    <p className="text-sm text-muted-foreground">Serving clients worldwide</p>
                  </div>
                </div>
              </div>
              
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <h4 className="font-semibold mb-3">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  I understand that time is crucial for your business. That's why I guarantee:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-2" />
                    24-hour email response
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-2" />
                    Free initial consultation
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-2" />
                    Detailed project proposal within 48 hours
                  </li>
                </ul>
              </Card>
              
              <div className="flex gap-4">
                <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90">
                  <Users className="mr-2 h-5 w-5" />
                  Schedule Call
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};