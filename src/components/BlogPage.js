import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./blogPage.css";
import blog1img from "../assets/images/con1.jpg";
import blog2img from "../assets/images/con2.jpg";
import blog3img from "../assets/images/con3.jpg";
import blog4img from "../assets/images/con4.jpg";
import blog5img from "../assets/images/con5.jpg";

const blogs = [
  {
    id: 1,
    title: "Microservices Performance Optimization: Advanced Techniques",
    author: "Alex Johnson",
    date: "May 15, 2023",
    readTime: "8 min read",
    summary: "Learn advanced techniques for scaling microservices architecture to handle millions of requests with minimal latency and maximum efficiency.",
    image: blog1img,
    category: "Backend Development",
    tags: ["Backend", "Microservices", "Performance"],
    seoDescription: "Discover expert strategies for optimizing microservices performance including distributed tracing, service mesh implementation, and database optimization techniques.",
    content: `
      <h2>Optimizing Microservices Performance in Distributed Systems</h2>
      <p>In today's cloud-native ecosystem, microservices architecture has become the de facto standard for building scalable, maintainable applications. However, the distributed nature of microservices introduces unique performance challenges that require specialized optimization strategies.</p>
      
      <div class="content-highlight">
        <h3>Key Performance Indicators for Microservices</h3>
        <p>Effective monitoring begins with tracking the right metrics:</p>
        <ul>
          <li><strong>Latency Distribution:</strong> Focus on P99 and P95 percentiles rather than averages</li>
          <li><strong>Error Budgets:</strong> Implementing SLOs for reliability across service boundaries</li>
          <li><strong>Resource Efficiency:</strong> CPU, memory, and network utilization patterns</li>
          <li><strong>Throughput:</strong> Requests per second with correlation to resource usage</li>
        </ul>
      </div>
      
      <h3>Comprehensive Optimization Strategies</h3>
      <p>Our research at Tech Insights reveals a multi-layered approach yields the best results:</p>
      
      <div class="strategy-card">
        <h4>1. Distributed Tracing Implementation</h4>
        <p>Adopt OpenTelemetry for end-to-end visibility across services. Key benefits:</p>
        <ul>
          <li>Identify latency bottlenecks in complex call chains</li>
          <li>Correlate errors across service boundaries</li>
          <li>Understand service dependencies visually</li>
        </ul>
      </div>
      
      <div class="strategy-card">
        <h4>2. Service Mesh Architecture</h4>
        <p>Implementing Istio or Linkerd provides:</p>
        <ul>
          <li>Intelligent routing with circuit breaking</li>
          <li>Automatic retries with exponential backoff</li>
          <li>Fine-grained traffic control for canary deployments</li>
        </ul>
      </div>
      
      <h3>Database Optimization Techniques</h3>
      <p>Database access patterns often become the primary bottleneck:</p>
      <ol>
        <li>Implement read replicas for scaling query throughput</li>
        <li>Use connection pooling with proper sizing</li>
        <li>Adopt caching strategies with Redis or Memcached</li>
        <li>Implement database sharding for write scalability</li>
      </ol>
    `
  },
  {
    id: 2,
    title: "AI Integration in Modern Web Applications: A Practical Guide",
    author: "Sarah Chen",
    date: "June 2, 2023",
    readTime: "12 min read",
    summary: "Comprehensive guide to integrating machine learning models directly into frontend development workflows with React and TensorFlow.js.",
    image: blog2img,
    category: "Artificial Intelligence",
    tags: ["AI", "Frontend", "Machine Learning"],
    seoDescription: "Step-by-step guide to implementing AI features in web applications including model optimization for the browser and real-time inference techniques.",
    content: `
      <h2>Bringing AI to the Browser</h2>
      <p>The evolution of web technologies has made it possible to run sophisticated machine learning models directly in the browser, opening new possibilities for interactive applications.</p>
      
      <h3>Core Technologies</h3>
      <ul>
        <li>TensorFlow.js for model execution</li>
        <li>ONNX runtime for cross-framework compatibility</li>
        <li>WebAssembly for performance-critical operations</li>
      </ul>
      
      <h3>Implementation Patterns</h3>
      <p>We've identified three effective patterns for AI integration:</p>
      <ol>
        <li>Client-side only inference</li>
        <li>Hybrid client-server processing</li>
        <li>Progressive enhancement with fallbacks</li>
      </ol>
      
      <div class="content-highlight">
        <h4>Model Optimization Techniques</h4>
        <p>To achieve acceptable performance in the browser:</p>
        <ul>
          <li>Quantize models to 8-bit integers</li>
          <li>Prune unnecessary network nodes</li>
          <li>Use model distillation to create smaller versions</li>
        </ul>
      </div>
    `
  },
  {
    id: 3,
    title: "The Future of Cloud Computing: Serverless and Beyond",
    author: "Michael Rodriguez",
    date: "April 18, 2023",
    readTime: "10 min read",
    summary: "Exploring serverless architecture and edge computing in modern cloud infrastructure and their impact on application development.",
    image: blog3img,
    category: "Cloud Computing",
    tags: ["Cloud", "Serverless", "DevOps"],
    seoDescription: "In-depth analysis of emerging cloud computing trends including serverless architectures, edge computing, and their practical applications.",
    content: `
      <h2>Cloud Computing Evolution</h2>
      <p>The cloud computing landscape is undergoing rapid transformation, with serverless architectures and edge computing leading the charge in innovation.</p>
      
      <h3>Serverless Benefits</h3>
      <ul>
        <li>Automatic scaling based on demand</li>
        <li>Pay-per-use billing model</li>
        <li>Reduced operational overhead</li>
      </ul>
      
      <h3>Edge Computing Advantages</h3>
      <ul>
        <li>Reduced latency for global applications</li>
        <li>Bandwidth optimization</li>
        <li>Improved privacy controls</li>
      </ul>
      
      <div class="strategy-card">
        <h4>Implementation Considerations</h4>
        <p>When adopting these technologies:</p>
        <ol>
          <li>Evaluate cold start performance</li>
          <li>Design for stateless execution</li>
          <li>Implement proper monitoring</li>
        </ol>
      </div>
    `
  },
  {
    id: 4,
    title: "UX Design Principles for Modern Web Applications",
    author: "Emma Wilson",
    date: "March 5, 2023",
    readTime: "7 min read",
    summary: "Creating intuitive user experiences in complex applications with cognitive load reduction techniques and accessibility best practices.",
    image: blog4img,
    category: "User Experience",
    tags: ["Design", "UX", "Accessibility"],
    seoDescription: "Comprehensive guide to modern UX design principles focusing on cognitive load reduction, accessibility, and user-centered design patterns.",
    content: `
      <h2>Modern UX Design Paradigms</h2>
      <p>In today's feature-rich applications, maintaining excellent user experience requires deliberate design strategies and constant validation.</p>
      
      <h3>Core Principles</h3>
      <ul>
        <li>Cognitive load reduction</li>
        <li>Progressive disclosure</li>
        <li>Consistent interaction patterns</li>
      </ul>
      
      <div class="content-highlight">
        <h4>Accessibility Must-Haves</h4>
        <p>Essential accessibility considerations:</p>
        <ul>
          <li>Proper color contrast ratios</li>
          <li>Keyboard navigation support</li>
          <li>ARIA attributes for complex widgets</li>
          <li>Screen reader compatibility</li>
        </ul>
      </div>
      
      <h3>Validation Techniques</h3>
      <ol>
        <li>Usability testing with real users</li>
        <li>A/B testing of key flows</li>
        <li>Analytics-driven improvements</li>
      </ol>
    `
  },
  {
    id: 5,
    title: "Blockchain for Enterprise Solutions: Beyond Cryptocurrency",
    author: "David Kim",
    date: "February 20, 2023",
    readTime: "9 min read",
    summary: "Practical applications of blockchain technology beyond cryptocurrency in enterprise systems including supply chain and identity management.",
    image: blog5img,
    category: "Blockchain",
    tags: ["Blockchain", "Enterprise", "Security"],
    seoDescription: "Exploring real-world enterprise applications of blockchain technology including supply chain tracking, digital identity, and smart contracts.",
    content: `
      <h2>Enterprise Blockchain Applications</h2>
      <p>While cryptocurrency dominates headlines, blockchain technology offers numerous valuable applications for enterprise systems.</p>
      
      <h3>Key Use Cases</h3>
      <ul>
        <li>Supply chain provenance tracking</li>
        <li>Digital identity management</li>
        <li>Smart contract automation</li>
        <li>Document notarization</li>
      </ul>
      
      <div class="strategy-card">
        <h4>Implementation Challenges</h4>
        <p>Common hurdles to address:</p>
        <ol>
          <li>Scalability limitations</li>
          <li>Regulatory compliance</li>
          <li>Key management</li>
          <li>Integration with legacy systems</li>
        </ol>
      </div>
      
      <h3>Technology Selection</h3>
      <p>Popular enterprise blockchain platforms:</p>
      <ul>
        <li>Hyperledger Fabric</li>
        <li>Ethereum Enterprise</li>
        <li>Corda</li>
      </ul>
    `
  }
];

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="not-found-container">
        <div className="not-found-content">
          <h2>Article Not Found</h2>
          <p>The requested blog post doesn't exist or has been removed.</p>
          <button className="back-to-blogs" onClick={() => navigate('/blogs')}>
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page-container">
      <Helmet>
        <title>{blog.title} | Tech Insights Blog</title>
        <meta name="description" content={blog.seoDescription} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.seoDescription} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content={blog.tags.join(', ')} />
      </Helmet>

      <article className="blog-article">
        <header className="article-header">
          <div className="breadcrumb">
            <button onClick={() => navigate('/')}>Home</button>
            <span> / </span>
            <span>{blog.category}</span>
          </div>
          
          <div className="author-info">
            <div className="author-avatar">
              {blog.author.split(' ').map(name => name[0]).join('')}
            </div>
            <div>
              <span className="author-name">{blog.author}</span>
              <span className="article-meta">{blog.date} · {blog.readTime}</span>
            </div>
          </div>
          
          <h1 className="article-title">{blog.title}</h1>
          <p className="article-summary">{blog.summary}</p>
          
          <div className="article-tags">
            {blog.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </header>
        
        <div className="article-content-wrapper">
          <figure className="featured-image-container">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="featured-image" 
              loading="lazy"
            />
            <figcaption>Illustration for {blog.title}</figcaption>
          </figure>
          
          <div 
            className="article-content" 
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />
        </div>
      </article>
      
      <section className="related-articles">
        <h2>You Might Also Like</h2>
        <div className="related-grid">
          {blogs
            .filter(b => b.id !== blog.id)
            .slice(0, 3)
            .map(related => (
              <div 
                key={related.id} 
                className="related-card"
                onClick={() => navigate(`/blogs/${related.id}`)}
              >
                <img 
                  src={related.image} 
                  alt={related.title} 
                  loading="lazy"
                />
                <div className="related-content">
                  <span className="related-category">{related.category}</span>
                  <h3>{related.title}</h3>
                  <p>{related.summary}</p>
                </div>
              </div>
            ))}
        </div>
      </section>
      
      <div className="article-footer">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default BlogPage;