import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, ExternalLink, Code, ShoppingCart, Palette, Globe, Users, TrendingUp } from "lucide-react";

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
          <h2 className="text-3xl font-bold text-center mb-12">Services Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>WordPress Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Custom themes, plugins, and WordPress solutions tailored to your needs.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>WooCommerce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Complete e-commerce solutions with payment integration and inventory management.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Web Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Modern, responsive designs that engage users and drive conversions.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Full-stack development with focus on performance and scalability.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how WordPress and WooCommerce can power your business growth.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Users className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};