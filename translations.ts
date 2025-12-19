
export type Locale = 'en' | 'ar' | 'ru' | 'es' | 'fr';

const commonEn = {
  nav: { home: 'Home', lifecycle: 'Lifecycle', tech: 'Tech', ecosystem: 'Ecosystem', anatomy: 'Anatomy', connect: 'Connect', start: 'Start Project' },
  hero: { 
    badge: 'Leading Innovation in New Cairo', 
    title: 'Digital Excellence by Design.', 
    subtitle: 'Smart Solutions is a premier app engineering studio. We don\'t just build apps; we engineer digital experiences that define industries.',
    ctaWork: 'See Our Work', ctaStory: 'Our Story', flagship: 'Flagship', downloads: '500k+ Downloads', appTitle: 'My Wonder Books',
    appDesc: 'The world\'s leading educational storytelling platform for kids.', partner: 'Global Partner', partnerDetail: 'Harvard Innovation Invite'
  },
  about: {
    identity: 'Our Identity',
    title: 'Engineering on Precision.',
    desc: 'Smart Solutions is a premier engineering studio in New Cairo. We specialize in high-performance digital infrastructure for the global education sector.',
    scale: 'Scale', scaleDesc: 'Millions of interactions handled daily.',
    trust: 'Trust', trustDesc: 'Bank-grade data privacy standards.'
  },
  values: {
    v1Title: 'Clean Architecture', v1Desc: 'We build structures. Our SOLID principles ensure that apps remain fast even as they scale.',
    v2Title: 'User-First Logic', v2Desc: 'Accessibility is baked into every pixel of our interfaces.',
    v3Title: 'Military-Grade Security', v3Desc: 'Protecting user data with advanced encryption for every platform.'
  },
  stats: {
    badge: 'The Digital Revolution', title: 'A Thriving Ecosystem.', desc: 'The app industry is redefining interaction. We are at the forefront.',
    s1: 'Global Revenue', s1V: '$600B+', s1D: 'Projected market size',
    s2: 'Daily Time', s2V: '4.8 Hours', s2D: 'Average user time in apps',
    s3: 'Downloads', s3V: '250B+', s3D: 'Apps downloaded per year',
    s4: 'Growth', s4V: '15% YoY', s4D: 'Expansion of digital economy',
    quote: '"The future belongs to those who build it."',
    insight: 'By 2030, apps will be the primary gateway for global education.'
  },
  innovation: {
    badge: 'Innovation Hub', title: 'Tools of the Future.',
    tabDev: 'Development', tabDes: 'Design', tabInt: 'Intelligence',
    devH4: 'High-Speed Frontend', devP: 'Engineered for native-level performance across all mobile devices using modular React architectures.',
    desH4: 'Experience Design', desP: 'Prototyping precision micro-interactions to ensure absolute user delight at every touchpoint.',
    intH4: 'AI Intelligence Engines', intP: 'Integrating Gemini to power adaptive learning paths that evolve with your users\' progress.',
    intQuote: '"Architecting the logic of tomorrow."'
  },
  anatomy: {
    badge: 'Educational Deep-Dive', title: 'The Anatomy of Performance.',
    l1T: 'The Interface', l1D: 'High-speed frontend using React.', l1L: ['UI Components', 'State', 'Animations'],
    l2T: 'The Brain', l2D: 'Secure logic and complex algorithms.', l2L: ['API Layer', 'Business Logic', 'Microservices'],
    l3T: 'The Memory', l3D: 'Distributed scalable storage.', l3L: ['Sync', 'Encryption', 'Storage']
  },
  portfolio: {
    badge: 'Case Studies', title: 'Engineering Excellence.', desc: 'Precision architecture in every product.',
    app1: { cat: 'Education', title: 'My Wonder Books', desc: 'Interactive library for children.', stat: '500K Users' },
    app2: { cat: 'Gaming', title: 'Engine Quest', desc: 'Cognitive logic engine.', stat: '4.9 Rating' },
    app3: { cat: 'Creativity', title: 'Canvas Pro', desc: 'Low-latency vector engine.', stat: 'Premium App' }
  },
  lifecycle: {
    badge: 'Engineering Flow', title: 'The App Lifecycle.',
    p1T: 'The Blueprint', p1D: 'Wireframes and technical architecture.',
    p2T: 'The Build', p2D: 'Sprint-based development.',
    p3T: 'The Polish', p3D: 'Rigorous QA and accessibility audits.',
    p4T: 'The Launch', p4D: 'ASO and production deployment.'
  },
  techComparison: {
    badge: 'Architectural Logic', title: 'Native vs. Cross-Platform.', desc: 'Choosing between Swift/Kotlin or React Native.',
    nativeT: 'When to go Native?', nativeD: 'Complex hardware, intensive graphics, and maximum performance.',
    crossT: 'When to go Cross?', crossD: 'Speed to market, unified codebase, and content-driven apps.'
  },
  monetization: {
    badge: 'Business Logic', title: 'Scaling & Monetization.', desc: 'Strategies for sustainable growth.',
    m1T: 'SaaS', m1D: 'Recurring value models.',
    m2T: 'Freemium', m2D: 'Premium features upsell.',
    m3T: 'In-App', m3D: 'Digital goods.',
    m4T: 'Ad-Based', m4D: 'Massive impressions.',
    dashTitle: 'Revenue Analytics', dashGrowth: '↑ 24% Growth', metric1: 'Active Yield', metric2: 'User Value', badgeLabel: 'SCALED', badgeSub: 'Revenue Architecture'
  },
  designThinking: {
    badge: 'Product Strategy', title: 'Design Thinking.', desc: 'Engineering rooted in human logic. We don\'t start with code, we start with people.',
    p1: 'Empathize', p1D: 'Observing real humans in their environment.',
    p2: 'Define', p2D: 'Synthesizing observations into a clear problem.',
    p3: 'Ideate', p3D: 'Generating wild ideas without judgment.',
    p4: 'Prototype', p4D: 'Building low-fidelity models to fail fast.'
  },
  performance: {
    badge: 'Optimization', title: 'Speed is a Feature.',
    s1: '100ms', s1D: 'Latency kills conversion.',
    s2: '60 FPS', s2D: 'Fluid animations build trust.',
    s3: '< 16ms', s3D: 'Instant interaction response.'
  },
  security: {
    badge: 'Security Protocol', title: 'Privacy by Architecture.', desc: 'We treat security as a foundational layer. In education, child data protection is our highest priority.',
    f1: 'AES-256 Data Encryption at Rest', f2: 'COPPA & GDPR Compliance Ready', f3: 'Biometric Auth Integration'
  },
  timeline: {
    badge: 'Our Context', title: 'Evolution of Progress.',
    e1T: 'WAP Genesis', e1D: 'Text-based simple utility.',
    e2T: 'The Big Bang', e2D: 'App Store launch power.',
    e3T: 'Cloud Shift', e3D: 'Real-time sync performance.',
    e4T: 'AI-Native', e4D: 'Generative AI adaptation.'
  },
  globalImpact: {
    badge: 'Our Footprint', title: 'Active Global Minds.', subtitle: 'Monthly active users reached.',
    s1: 'Countries', s1V: '45+', s2: 'Rating', s2V: '4.9/5', s3: 'Stories', s3V: '12M+', s4: 'Uptime', s4V: '99.9%'
  },
  futureTrends: {
    badge: 'Horizon Scan', title: 'Next-Gen Architectures.', quote: '"The screen is disappearing into the environment."',
    t1: 'Spatial Computing', t1D: 'The merge of apps with physical space.',
    t2: 'Edge AI', t2D: 'Complex neural networks running locally.',
    t3: 'Zero-UI', t3D: 'Apps driven by voice and gesture.'
  },
  process: {
    badge: 'The Journey', title: 'Bringing Ideas to Life.', desc: 'Balance of creativity and discipline.',
    ctaT: 'Need our workflow?', ctaD: 'Transparent documentation for every phase.', ctaB: 'Contact Us',
    s1T: 'Deep Discovery', s1D: 'Understanding user psychology.',
    s2T: 'UI/UX Architecture', s2D: 'Intuitive accessible interfaces.',
    s3T: 'Precision Coding', s3D: 'Zero latency optimized code.',
    s4T: 'Rigorous QA', s4D: 'Testing every single edge case.'
  },
  techStack: {
    badge: 'Our Technology', title: 'React & AI Power.', desc: 'Fast, intuitive, modular intelligence.',
    t1: 'React Native', t1D: 'Cross-platform native speed.',
    t2: 'TypeScript', t2D: 'Type-safe reliable engineering.',
    t3: 'AI Narratives', t3D: 'Generative AI in apps.',
    t4: 'Cloud Infra', t4D: 'Unlimited global scaling.',
    stat1: 'Stability KPI', stat2: 'Pattern'
  },
  ecosystem: {
    badge: 'Studio Tooling', title: 'The Ecosystem.', desc: 'Industry standard tools for 500k+ users.',
    tools: {
      figma: 'UI/UX design', vscode: 'Low-latency coding', github: 'CI/CD orchestration',
      jira: 'Agile sprints', slack: 'Real-time sync', firebase: 'Real-time databases'
    }
  },
  education: {
    badge: 'Engineering Insights', title: 'Successful App Anatomy.',
    h1: 'Invisible Core', p1: 'Soul is backend architecture.',
    h2: 'Experience Design', p2: 'UX is a psychological science.',
    h3: 'QA Assurance', p3: 'Handling unexpected inputs.',
    factTitle: 'Did you know?', factDesc: 'Typical apps have 10k+ lines of interaction code.'
  },
  contact: {
    portal: 'Engineering Portal', title: 'Initiate Project.', subtitle: 'Discuss vision with our Lead.',
    successTitle: 'Brief Logged', successDesc: 'Transmitted to our Google Sheets.',
    newSub: 'New Submission', fullName: 'Full Name', email: 'Email', mobile: 'Mobile', category: 'Category', brief: 'Brief',
    briefPlaceholder: 'Describe your vision...', submit: 'Initiate', transmitting: 'Sending...'
  },
  footer: {
    desc: 'Premier engineering studio in New Cairo.',
    engineering: 'Engineering', strategy: 'Strategy', hq: 'Studio HQ', hqLoc: 'New Cairo, Egypt', hqAddr: 'District 5, Marakez',
    inquiries: 'Inquiries', portalLink: 'Portal Contact', status: 'Online', devEnv: 'Dev Env',
    rights: 'Smart Solutions Ltd.', privacy: 'Privacy', terms: 'Terms', scroll: 'Summit',
    links: { security: 'Security', perf: 'Performance', monetization: 'Monetization', design: 'Design Thinking', industry: 'Industry' }
  }
};

const commonAr = {
  ...commonEn,
  nav: { home: 'الرئيسية', lifecycle: 'دورة الحياة', tech: 'التقنية', ecosystem: 'النظام البيئي', anatomy: 'التشريح', connect: 'اتصل بنا', start: 'ابدأ مشروعك' },
  hero: { 
    badge: 'ريادة الابتكار في القاهرة الجديدة', 
    title: 'التميز الرقمي بالتصميم.', 
    subtitle: 'سمارت سوليوشنز هو استوديو رائد لهندسة التطبيقات. نحن لا نبني تطبيقات فحسب؛ بل نصمم تجارب رقمية تحدد معالم الصناعات.',
    ctaWork: 'أعمالنا', ctaStory: 'قصتنا', flagship: 'المنتج الرائد', downloads: 'أكثر من 500 ألف تحميل', appTitle: 'كتبي العجيبة',
    appDesc: 'المنصة العالمية الرائدة لرواية القصص التعليمية للأطفال.', partner: 'شريك عالمي', partnerDetail: 'دعوة هارفارد للابتكار'
  },
  about: {
    identity: 'هويتنا',
    title: 'الهندسة بدقة.',
    desc: 'سمارت سوليوشنز هو استوديو هندسي متميز في القاهرة الجديدة. نحن متخصصون في البنية التحتية الرقمية عالية الأداء لقطاع التعليم العالمي.',
    scale: 'النطاق', scaleDesc: 'التعامل مع ملايين التفاعلات يومياً.',
    trust: 'الثقة', trustDesc: 'معايير خصوصية بيانات بمستوى بنكي.'
  },
  footer: {
    ...commonEn.footer,
    desc: 'استوديو هندسي رائد مقره القاهرة الجديدة، متخصص في البنية التحتية الرقمية عالية الأداء.',
    engineering: 'الهندسة', strategy: 'الاستراتيجية', hq: 'المقر الرئيسي', hqLoc: 'القاهرة الجديدة، مصر', hqAddr: 'ديستريكت 5، مراكز',
    inquiries: 'الاستفسارات', portalLink: 'اتصل عبر بوابة الهندسة', status: 'متصل', devEnv: 'بيئة التطوير',
    rights: 'سمارت سوليوشنز المحدودة.', privacy: 'الخصوصية', terms: 'الشروط', scroll: 'العودة للقمة',
    links: { security: 'الأمان', perf: 'الأداء', monetization: 'الربح', design: 'التفكير التصميمي', industry: 'الصناعة' }
  }
};

const commonRu = {
  ...commonEn,
  about: { ...commonEn.about, title: 'Инженерия точности.' },
  hero: { ...commonEn.hero, title: 'Цифровое совершенство через дизайн.' }
};

const commonEs = {
  ...commonEn,
  about: { ...commonEn.about, title: 'Ingeniería de precisión.' },
  hero: { ...commonEn.hero, title: 'Excelencia digital por diseño.' }
};

const commonFr = {
  ...commonEn,
  about: { ...commonEn.about, title: 'Ingénierie de précision.' },
  hero: { ...commonEn.hero, title: 'Excellence numérique par design.' }
};

export const translations = {
  en: commonEn,
  ar: commonAr,
  ru: commonRu,
  es: commonEs,
  fr: commonFr
};
