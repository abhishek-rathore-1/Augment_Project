import BlogHero from "../Internal_Component_Files/Blog.png";
import SmartHomeImage from "../Internal_Component_Files/Blogs/smartHome.jpg";
import ArtIntelImage from "../Internal_Component_Files/Blogs/artIntel.webp";
import BlockChainImage from "../Internal_Component_Files/Blogs/blockChain.jpg";
import Web3Image from "../Internal_Component_Files/Blogs/web3.webp";
import CyberSecurityImage from "../Internal_Component_Files/Blogs/cyberSecurity.jpg";
import CloudVsEdgeImage from "../Internal_Component_Files/Blogs/cloudVsEdge.png";
import MetaVerseImage from "../Internal_Component_Files/Blogs/metaverse.webp";
import EthicsOfRoboticsImage from "../Internal_Component_Files/Blogs/ethicsOfRobotics.jpg";

export const blogHeroImage = BlogHero;

export const blogPosts = [
  {
    slug: "smart-home",
    aliases: ["smartHome"],
    category: "IoT",
    readTime: "6 min read",
    title: "Smarter Homes: How IoT Is Revolutionizing Daily Living",
    excerpt:
      "Connected devices are reshaping everyday routines by making homes more responsive, efficient, and secure.",
    image: SmartHomeImage,
    intro:
      "The idea of a smart home has moved well beyond novelty. Connected lighting, climate control, security, appliances, and entertainment systems now work together to create homes that adapt to real behaviour instead of waiting for manual input.",
    sections: [
      {
        heading: "Why smart homes matter now",
        paragraphs: [
          "IoT allows devices to exchange information in real time, which turns isolated appliances into a coordinated environment. That coordination improves convenience, comfort, and day-to-day operational efficiency inside the home.",
          "For households, the value is no longer just remote control. It is contextual automation, better visibility, and systems that respond intelligently to habits and routines.",
        ],
      },
      {
        heading: "Where the biggest gains show up",
        bullets: [
          "Automating lighting, climate, and daily routines",
          "Reducing energy waste through smarter monitoring",
          "Improving home security with connected locks and cameras",
          "Supporting accessibility with voice and remote control workflows",
        ],
      },
      {
        heading: "What businesses should watch",
        paragraphs: [
          "As adoption grows, security and device interoperability become more important. Users expect smart systems to be simple, private, and dependable.",
          "The next phase of IoT will likely focus on deeper personalisation, better predictive intelligence, and stronger trust around how data is handled.",
        ],
      },
    ],
  },
  {
    slug: "ai-in-2025",
    aliases: ["artIntel"],
    category: "Artificial Intelligence",
    readTime: "5 min read",
    title: "AI in 2025: Where Is Artificial Intelligence Headed?",
    excerpt:
      "AI is becoming infrastructure for modern business, affecting healthcare, operations, customer experience, and creative work.",
    image: ArtIntelImage,
    intro:
      "Artificial intelligence is no longer a side experiment for forward-looking teams. It is becoming part of core operating models, product experiences, and decision-making across industries.",
    sections: [
      {
        heading: "The shift from feature to foundation",
        paragraphs: [
          "AI tools are increasingly embedded into products, workflows, customer support, data analysis, and internal operations. That means the business question is changing from whether to use AI to where it creates legitimate value.",
          "Healthcare, logistics, finance, and creative industries are all seeing practical use cases move closer to production reality.",
        ],
      },
      {
        heading: "Where momentum is strongest",
        bullets: [
          "Process automation and operational efficiency",
          "Faster analysis of large datasets and decision support",
          "Generative systems that assist content and design workflows",
          "Better personalisation across digital customer experiences",
        ],
      },
      {
        heading: "The challenge is not just capability",
        paragraphs: [
          "Organisations also need governance, transparency, privacy protection, and training for teams using these systems. AI capability without operating discipline can create legal, technical, and reputational risk.",
          "The strongest adopters will be the ones who combine experimentation with clear rules, human oversight, and business accountability.",
        ],
      },
    ],
  },
  {
    slug: "blockchain-real-world-applications",
    aliases: ["blockChain"],
    category: "Blockchain",
    readTime: "5 min read",
    title: "Blockchain Beyond Crypto: Real-World Applications",
    excerpt:
      "Blockchain has broader value where transparency, trust, and traceability matter more than hype.",
    image: BlockChainImage,
    intro:
      "Cryptocurrency made blockchain famous, but the underlying technology has much wider relevance. In the right contexts, it can help create more transparent, verifiable, and tamper-resistant digital systems.",
    sections: [
      {
        heading: "Where blockchain creates real utility",
        paragraphs: [
          "Blockchain is especially useful where multiple parties need a shared record without relying on a single central authority. That matters in supply chains, digital identity, documentation, and automated transaction logic.",
        ],
      },
      {
        heading: "High-value use cases",
        bullets: [
          "Supply-chain tracking for authenticity and traceability",
          "Digital identity systems with stronger user control",
          "Smart contracts for automated execution of agreed logic",
          "Secure records in healthcare and regulated industries",
        ],
      },
      {
        heading: "Why adoption remains selective",
        paragraphs: [
          "Blockchain is not the right answer for every system. Scalability, regulation, cost, and integration complexity still matter.",
          "The best implementations are grounded in a clear operational need rather than treating decentralisation as a goal on its own.",
        ],
      },
    ],
  },
  {
    slug: "web3-explained",
    aliases: ["web3"],
    category: "Web3",
    readTime: "5 min read",
    title: "Web3 Explained: What It Means for the Future of the Internet",
    excerpt:
      "Web3 proposes an internet where ownership, identity, and value move closer to the user.",
    image: Web3Image,
    intro:
      "Web3 is often described as the next evolution of the internet, but the core idea is simpler: users should have more control over their identity, assets, and participation in digital ecosystems.",
    sections: [
      {
        heading: "From Web1 to Web3",
        bullets: [
          "Web1 focused on publishing and reading static information",
          "Web2 introduced interactive platforms controlled by central providers",
          "Web3 explores decentralised ownership, identity, and coordination",
        ],
      },
      {
        heading: "What makes the model different",
        paragraphs: [
          "In a Web3 model, users may hold digital assets directly, participate in governance, and move value without depending on a single platform owner.",
          "That changes how products are designed, monetised, and trusted.",
        ],
      },
      {
        heading: "What still needs work",
        paragraphs: [
          "Usability, regulation, scalability, and energy concerns all shape whether Web3 products can move from enthusiast communities into mainstream adoption.",
          "For businesses, the real question is whether decentralisation improves a product's economics or trust model in a meaningful way.",
        ],
      },
    ],
  },
  {
    slug: "cybersecurity-age-of-ai",
    aliases: ["cyberSecurity"],
    category: "Cybersecurity",
    readTime: "6 min read",
    title: "Cybersecurity in the Age of AI: Are We Really Safe?",
    excerpt:
      "AI is strengthening defence systems, but it is also raising the sophistication of attacks.",
    image: CyberSecurityImage,
    intro:
      "Cybersecurity has entered a new phase. Artificial intelligence is helping organisations detect threats faster and automate defence, but attackers are using the same advantages to scale phishing, fraud, and malware tactics.",
    sections: [
      {
        heading: "How AI improves defence",
        bullets: [
          "Faster anomaly detection across large datasets",
          "Automated incident triage and response workflows",
          "Stronger threat intelligence and pattern recognition",
          "Better prioritisation of vulnerabilities and alerts",
        ],
      },
      {
        heading: "Why risk is still rising",
        paragraphs: [
          "AI lowers the barrier to more convincing phishing, faster automation, and adaptive attack techniques. Deepfakes and synthetic content are also making trust verification harder.",
          "That means security teams need both stronger tooling and better operational habits.",
        ],
      },
      {
        heading: "What resilient organisations do next",
        paragraphs: [
          "Resilience now depends on layered security, access controls, human awareness, simulation exercises, and response planning. Technology alone is not enough.",
          "The goal is not perfect safety. It is stronger detection, faster response, and less exposure when something goes wrong.",
        ],
      },
    ],
  },
  {
    slug: "cloud-vs-edge",
    aliases: ["cloudVsEdge"],
    category: "Infrastructure",
    readTime: "5 min read",
    title: "Cloud vs Edge Computing: What Is Better for Your Business?",
    excerpt:
      "Cloud and edge each solve different problems, and many businesses will benefit most from a hybrid approach.",
    image: CloudVsEdgeImage,
    intro:
      "When businesses think about infrastructure strategy, the choice is rarely cloud or edge in isolation. Each model serves different performance, cost, and operational requirements.",
    sections: [
      {
        heading: "Where cloud still wins",
        bullets: [
          "Elastic scalability for changing workloads",
          "Centralised analytics and management",
          "Faster deployment across distributed teams",
          "Simpler disaster recovery and shared services",
        ],
      },
      {
        heading: "Where edge makes sense",
        paragraphs: [
          "Edge computing is valuable when latency, bandwidth, or local autonomy matter. That includes industrial monitoring, real-time processing, connected environments, and immersive experiences.",
          "It can also help where data residency or intermittent connectivity shapes architecture decisions.",
        ],
      },
      {
        heading: "Why hybrid strategies are common",
        paragraphs: [
          "Many businesses need centralised cloud systems for management and analysis, with edge nodes for immediate local decision-making.",
          "The right model depends on user experience expectations, compliance needs, operating conditions, and long-term maintenance capacity.",
        ],
      },
    ],
  },
  {
    slug: "metaverse-ar-vr",
    aliases: ["metaverse"],
    category: "AR / VR",
    readTime: "4 min read",
    title: "How AR and VR Are Reshaping the Metaverse",
    excerpt:
      "AR and VR are turning the metaverse from a concept into a more immersive set of practical experiences.",
    image: MetaVerseImage,
    intro:
      "The metaverse is often discussed as a broad digital future, but augmented reality and virtual reality are what make that future tangible. They create the immersive layer that allows people to experience digital space more directly.",
    sections: [
      {
        heading: "How immersion changes the experience",
        paragraphs: [
          "VR enables full digital environments for collaboration, entertainment, simulation, and training. AR overlays useful information onto the physical world, which expands how digital systems support retail, education, and operations.",
        ],
      },
      {
        heading: "Where practical value is emerging",
        bullets: [
          "Interactive learning and training environments",
          "Virtual collaboration and design review spaces",
          "Retail and product visualisation experiences",
          "Digital assets and immersive brand environments",
        ],
      },
      {
        heading: "The adoption barriers remain real",
        paragraphs: [
          "Hardware comfort, accessibility, affordability, and privacy still shape how quickly these experiences become mainstream.",
          "The most credible metaverse use cases will be the ones that solve clear business or user problems instead of relying on novelty alone.",
        ],
      },
    ],
  },
  {
    slug: "robotics-ethics",
    aliases: ["ethicsOfRobotics", "EthicsOfRobotics"],
    category: "Robotics",
    readTime: "5 min read",
    title: "The Ethics of Robotics: What Lines Should Not Be Crossed?",
    excerpt:
      "As robotics becomes more capable, ethical decisions about safety, responsibility, and human impact become harder to ignore.",
    image: EthicsOfRoboticsImage,
    intro:
      "Robotics is moving into spaces that directly affect everyday human experience, from healthcare and logistics to home environments and public infrastructure. That makes ethics a design concern, not an afterthought.",
    sections: [
      {
        heading: "The key ethical questions",
        bullets: [
          "How much autonomy is appropriate in high-risk contexts?",
          "Who is accountable when a robotic system causes harm?",
          "What data is collected, and how is it used or stored?",
          "How do we reduce bias and unfair outcomes in decision-making?",
        ],
      },
      {
        heading: "Why design choices matter",
        paragraphs: [
          "Safety protocols, fail-safes, transparency, and human override are essential when robots operate near people or in sensitive environments.",
          "Ethical issues also extend beyond hardware into software logic, training data, business incentives, and long-term social consequences.",
        ],
      },
      {
        heading: "What responsible innovation looks like",
        paragraphs: [
          "Responsible robotics requires engineering quality, legal awareness, interdisciplinary review, and continued public discussion.",
          "The strongest systems will be those designed with trust, accountability, and human well-being built into the product from the beginning.",
        ],
      },
    ],
  },
];

export const getBlogPostBySlug = (slug) =>
  blogPosts.find(
    (post) => post.slug === slug || post.aliases?.includes(slug),
  );
