import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amir Hossein Ahmadi",
  initials: "AA",
  url: "https://github.com/amir7d0",
  location: "Isfahan, Iran",
  locationLink: "https://www.google.com/maps/place/Isfahan,+Isfahan+Province,+Iran",
  description:
    "AI Engineer and Data Scientist. I am passionate about developing real-world, scalable AI solutions and continuously exploring state-of-the-art research.",
  summary:
    "I am a Machine Learning Engineer experienced in deep learning, computer vision, NLP, and data-driven systems. I graduated from [Isfahan University of Technology](/#education) with a focus on Generative Models and have a strong background in building end-to-end ML pipelines and training transformer-based models. I have published research on offensive language detection and contributed to open-source datasets like LAION-20M-Fa.",
  avatarUrl: "/me.png",
  skills: [
    {
      category: "Languages",
      items: ["Python", "C/C++", "SQL", "Bash", "JavaScript"],
    },
    {
      category: "Tools & Frameworks",
      items: [
        "Git",
        "CI/CD",
        "Docker",
        "Django",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "MongoDB",
      ],
    },
    {
      category: "Applications",
      items: [
        "ML/DL",
        "Data Mining",
        "NLP",
        "Generative AI",
        "LLMs",
        "Transformers",
        "Model Training & Fine-Tuning",
        "Prompt Engineering",
        "Data Preprocessing",
        "Feature Engineering",
      ],
    },
    {
      category: "AI Tools & Frameworks",
      items: [
        "TensorFlow",
        "Keras",
        "PyTorch",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "HuggingFace",
        "Wandb",
      ],
    },
    {
      category: "LLM Frameworks",
      items: [
        "Agentic AI",
        "RAG",
        "Multi-Agent Systems",
        "LLM Tooling",
        "LangChain",
        "CrewAI",
        "n8n",
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "amirahmadi7d0@gmail.com",
    tel: "+989933448796",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/amir7d0",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/amir7d0",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:amirahmadi7d0@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Directam",
      href: "https://directam.ir",
      badges: [],
      location: "Isfahan, Iran",
      title: "Machine Learning Engineer",
      logoUrl: "/directam.png",
      start: "Dec 2025",
      end: "Present",
      description:
        "Prompt Engineering for chatbot applications using GPT-4 and other LLMs. Developed and optimized prompts to enhance chatbot performance for customer support on Instagram ...",
    },
    {
      company: "Isfahan University of Technology",
      href: "https://iut.ac.ir/en",
      badges: [],
      location: "Isfahan, Iran",
      title: "Machine Learning Engineer",
      logoUrl: "/iut.png",
      start: "Jul 2023",
      end: "Apr 2024",
      description:
        "Researched and implemented state-of-the-art image-to-image translation models using GANs and diffusion-based approaches. Built and curated training datasets and optimized preprocessing pipelines to improve training stability. Fine-tuned existing architectures for domain-specific applications.",
    },
    {
      company: "BorsYar",
      href: "#",
      badges: [],
      location: "Isfahan, Iran",
      title: "Machine Learning Engineer",
      logoUrl: "/borsyar.png",
      start: "Oct 2022",
      end: "Apr 2024",
      description:
        "Designed end-to-end data pipelines for stock market time-series, including ingestion, cleaning, and feature engineering. Developed labeling algorithms based on percentage-change thresholds. Trained and optimized Transformer-based and LSTM models using TensorFlow/Keras for multi-interval forecasting.",
    },
    {
      company: "HamTech",
      href: "#",
      badges: [],
      location: "Iran",
      title: "Machine Learning Intern",
      logoUrl: "/hamtech.png",
      start: "Aug 2022",
      end: "Nov 2022",
      description:
        "Collected and processed large-scale Farsi image-text pairs, contributing to the LAION-20M-Fa dataset. Fine-tuned the CLIP model on the curated dataset and published the resulting CLIP-Fa model. Automated large-scale data crawling scripts, reducing manual validation time.",
    },
    {
      company: "Isfahan University of Technology",
      href: "https://iut.ac.ir/en",
      badges: [],
      location: "Isfahan, Iran",
      title: "NLP Engineer",
      logoUrl: "/iut.png",
      start: "Dec 2021",
      end: "Sep 2022",
      description:
        "Developed a Persian offensive-language detection system using BERT, RoBERTa, and XLM-RoBERTa architectures. Collected and labeled thousands of social-media comments. Deployed the final model as an API for real-time inference.",
    },
  ],
  education: [
    {
      school: "Isfahan University of Technology",
      href: "https://iut.ac.ir/en",
      degree: "Bachelor of Science in Computer Engineering",
      logoUrl: "/iut.png",
      start: "Sep 2018",
      end: "Feb 2023",
      gpa: "3.89/4.0",
      thesis: "Generative Models (InfoGAN) for Image Generation and Genomic Data Representation",
    },
  ],
  projects: [
    {
      title: "OPSD: Offensive Persian Social Media Dataset",
      href: "https://arxiv.org/abs/2404.05540",
      dates: "Published 2024",
      active: true,
      description:
        "Co-authored a paper presenting OPSD, a dataset for offensive language detection in Persian. [cite_start]Benchmarked various transformer models and baseline evaluations. [cite: 102, 103]",
      technologies: [
        "NLP",
        "BERT",
        "Research",
        "Python"
      ],
      links: [
        {
          type: "Paper",
          href: "https://arxiv.org/abs/2404.05540",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Generative Models (InfoGAN)",
      href: "https://github.com/amir7d0",
      dates: "Nov 2021 - Sep 2022",
      active: false,
      description:
        "Bachelor Thesis: Implemented InfoGAN for generating images conditioned on categorical and continuous latent variables. [cite_start]Converted SNP genomic data into image representations using DeepInsight. [cite: 42, 45, 46]",
      technologies: [
        "GANs",
        "DeepInsight",
        "Bioinformatics",
        "Python",
        "PyTorch"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/amir7d0",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Sentiment Analysis",
      href: "https://github.com/amir7d0",
      dates: "Apr 2022",
      active: false,
      description:
        "Examined Persian textual data (user comments) and applied pre-processing and EDA phases. [cite_start]Developed BERT-based classification models for sentiment analysis of customer comments. [cite: 115, 119]",
      technologies: [
        "BERT",
        "NLP",
        "Python",
        "HuggingFace"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/amir7d0",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Handwritten Digits Recognition",
      href: "https://github.com/amir7d0",
      dates: "Apr 2021",
      active: false,
      description:
        "Developed a Machine Learning model to detect handwritten digits using artificial neural networks. [cite_start]Implemented vectorized forward and backward propagation from scratch using NumPy. [cite: 121, 124]",
      technologies: [
        "Neural Networks",
        "NumPy",
        "Python",
        "Computer Vision"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/amir7d0",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "N-Queen Problem Solver",
      href: "https://github.com/amir7d0",
      dates: "Mar 2021",
      active: false,
      description:
        "Designed a genetically-evolving method to solve the N-Queen problem, performing highly up to 1000-Queens. [cite_start]Implemented chromosome permutation, cross-over, and mutation logic. [cite: 128, 132]",
      technologies: [
        "Genetic Algorithms",
        "AI",
        "Python"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/amir7d0",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;