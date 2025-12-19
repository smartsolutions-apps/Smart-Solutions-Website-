
export type Locale = 'en' | 'ar' | 'ru' | 'es' | 'fr';

const en = {
  nav: { home: 'Home', lifecycle: 'Lifecycle', tech: 'Tech', ecosystem: 'Ecosystem', anatomy: 'Anatomy', connect: 'Connect', start: 'Start Project' },
  hero: { 
    badge: 'Leading Innovation in New Cairo', 
    title: 'Digital Excellence by Design.', 
    subtitle: 'Smart Solutions is a premier app engineering studio. We don\'t just build apps; we engineer digital experiences that define industries.',
    ctaWork: 'See Our Work', ctaStory: 'Our Story', flagship: 'Flagship', downloads: '500k+ Downloads', appTitle: 'My Wonder Books',
    appDesc: 'The world\'s leading educational storytelling platform for kids.', partner: 'Global Partner', partnerDetail: 'Harvard Innovation Invite'
  },
  about: {
    identity: 'Our Identity', title: 'Engineering on Precision.',
    desc: 'Smart Solutions is a premier engineering studio in New Cairo. We specialize in high-performance digital infrastructure for the global education sector.',
    scale: 'Scale', scaleDesc: 'Millions of interactions handled daily.',
    trust: 'Trust', trustDesc: 'Bank-grade data privacy standards.'
  },
  values: {
    v1Title: 'Clean Architecture', v1Desc: 'We build structures. Our SOLID principles ensure that apps remain fast even as they scale.',
    v2Title: 'User-First Logic', v2Desc: 'Accessibility is baked into every pixel of our interfaces for a seamless experience.',
    v3Title: 'Military-Grade Security', v3Desc: 'Protecting user data with advanced encryption for every platform we build.'
  },
  stats: {
    badge: 'The Digital Revolution', title: 'A Thriving Ecosystem', desc: 'The app industry is redefining interaction. We are at the forefront of this digital shift.',
    s1: 'Growth', s1V: 'YoY 15%', s1D: 'Expansion of digital economy',
    s2: 'Downloads', s2V: '+250B', s2D: 'Apps downloaded per year',
    s3: 'Daily Time', s3V: 'Hours 4.8', s3D: 'Average user time in apps',
    s4: 'Global Revenue', s4V: '+$600B', s4D: 'Projected market size',
    quote: '"The future belongs to those who build it."',
    insight: 'By 2030, apps will be the primary gateway for global education and commerce.'
  },
  innovation: {
    badge: 'Innovation Hub', title: 'Tools of the Future',
    tabDev: 'Development', tabDes: 'Design', tabInt: 'Intelligence',
    devH4: 'High-Speed Frontend', devP: 'Engineered for native-level performance across all mobile devices using modular React architectures',
    desH4: 'Experience Design', desP: 'Prototyping precision micro-interactions to ensure absolute user delight at every touchpoint',
    intH4: 'AI Intelligence Engines', intP: 'Integrating Gemini to power adaptive learning paths that evolve with your users\' progress',
    intQuote: '"Architecting the logic of tomorrow."'
  },
  lifecycle: {
    badge: 'Engineering Flow', title: 'The App Lifecycle',
    p1T: 'The Blueprint', p1D: 'Wireframes and technical architecture mapping',
    p2T: 'The Build', p2D: 'Sprint-based agile development cycles',
    p3T: 'The Polish', p3D: 'Rigorous QA and accessibility audits',
    p4T: 'The Launch', p4D: 'ASO and production deployment strategy',
    phase: 'PHASE'
  },
  techComparison: {
    badge: 'Architectural Logic', title: 'Native vs. Cross-Platform', desc: 'Choosing between Swift/Kotlin or React Native depends on your specific goals',
    nativeT: 'When to go Native?', nativeD: 'Complex hardware access, intensive graphics, and maximum device-specific performance',
    crossT: 'When to go Cross?', crossD: 'Speed to market, unified codebase across iOS/Android, and content-driven apps'
  },
  anatomy: {
    badge: 'Educational Deep-Dive', title: 'The Anatomy of Performance.',
    l1T: 'The Interface', l1D: 'High-speed frontend using React to ensure instant responsiveness.', l1L: ['UI Components', 'State Management', 'Fluid Animations'],
    l2T: 'The Brain', l2D: 'Secure logic and complex algorithms handling business rules.', l2L: ['API Layer', 'Business Logic', 'Microservices'],
    l3T: 'The Memory', l3D: 'Distributed scalable storage with real-time synchronization.', l3L: ['Real-time Sync', 'Data Encryption', 'Cloud Storage']
  },
  portfolio: {
    badge: 'Case Studies', title: 'Engineering Excellence.', desc: 'Precision architecture in every product we deliver to the market.',
    app1: { cat: 'Education', title: 'My Wonder Books', desc: 'Interactive library for children with dynamic narration.', stat: '500K Users' },
    app2: { cat: 'Gaming', title: 'Engine Quest', desc: 'Cognitive logic engine for developing young minds.', stat: '4.9 Rating' },
    app3: { cat: 'Creativity', title: 'Canvas Pro', desc: 'Low-latency vector engine for digital illustration.', stat: 'Premium App' }
  },
  monetization: {
    badge: 'Business Logic', title: 'Scaling & Monetization.', desc: 'Strategies for sustainable growth and long-term user retention.',
    m1T: 'SaaS', m1D: 'Recurring value models for stability.',
    m2T: 'Freemium', m2D: 'Premium features upsell strategy.',
    m3T: 'In-App', m3D: 'Digital goods and microtransactions.',
    m4T: 'Ad-Based', m4D: 'Massive reach through impressions.',
    dashTitle: 'Revenue Analytics', dashGrowth: '↑ 24% Growth', metric1: 'Active Yield', metric2: 'User Value', badgeLabel: 'SCALED', badgeSub: 'Revenue Architecture'
  },
  designThinking: {
    badge: 'Product Strategy', title: 'Design Thinking.', desc: 'Engineering rooted in human logic. We start with people, not code.',
    p1: 'Empathize', p1D: 'Observing real humans in their environment.',
    p2: 'Define', p2D: 'Synthesizing observations into a clear problem.',
    p3: 'Ideate', p3D: 'Generating wild ideas without judgment.',
    p4: 'Prototype', p4D: 'Building models to fail fast and learn.'
  },
  performance: {
    badge: 'Optimization', title: 'Speed is a Feature.',
    s1: '100ms', s1D: 'Latency kills user conversion.',
    s2: '60 FPS', s2D: 'Fluid animations build user trust.',
    s3: '< 16ms', s3D: 'Instant interaction response time.',
    encrypted: 'Encrypted'
  },
  security: {
    badge: 'Security Protocol', title: 'Privacy by Architecture.', desc: 'In education, child data protection is our highest priority. We build it in from day one.',
    f1: 'AES-256 Data Encryption at Rest', f2: 'COPPA & GDPR Compliance Ready', f3: 'Biometric Auth Integration'
  },
  timeline: {
    badge: 'Our Context', title: 'Evolution of Progress.',
    e1T: 'WAP Genesis', e1D: 'Text-based simple utility interfaces.',
    e2T: 'The Big Bang', e2D: 'App Store launch software power.',
    e3T: 'Cloud Shift', e3D: 'Real-time sync performance engines.',
    e4T: 'AI-Native', e4D: 'Generative AI adaptive systems.'
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
    badge: 'The Journey', title: 'Bringing Ideas to Life.', desc: 'A perfect balance of creativity and engineering discipline.',
    ctaT: 'Need our workflow?', ctaD: 'Transparent documentation for every phase.', ctaB: 'Contact Us',
    s1T: 'Deep Discovery', s1D: 'Understanding user psychology.',
    s2T: 'UI/UX Architecture', s2D: 'Intuitive accessible interfaces.',
    s3T: 'Precision Coding', s3D: 'Zero latency optimized code.',
    s4T: 'Rigorous QA', s4D: 'Testing every single edge case.'
  },
  techStack: {
    badge: 'Our Technology', title: 'React & AI Power.', desc: 'Fast, intuitive, modular intelligence for modern users.',
    t1: 'React Native', t1D: 'Cross-platform native speed.',
    t2: 'TypeScript', t2D: 'Type-safe reliable engineering.',
    t3: 'AI Narratives', t3D: 'Generative AI in education.',
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

const ar = {
  nav: { home: 'الرئيسية', lifecycle: 'دورة الحياة', tech: 'التقنية', ecosystem: 'النظام البيئي', anatomy: 'التشريح', connect: 'اتصل بنا', start: 'ابدأ مشروعك' },
  hero: { 
    badge: 'ريادة الابتكار في القاهرة الجديدة', 
    title: 'التميز الرقمي بالتصميم.', 
    subtitle: 'سمارت سوليوشنز هو استوديو رائد لهندسة التطبيقات. نحن لا نبني تطبيقات فحسب؛ بل نصمم تجارب رقمية تحدد معالم الصناعات.',
    ctaWork: 'أعمالنا', ctaStory: 'قصتنا', flagship: 'المنتج الرائد', downloads: 'أكثر من 500 ألف تحميل', appTitle: 'كتبي العجيبة',
    appDesc: 'المنصة العالمية الرائدة لرواية القصص التعليمية للأطفال.', partner: 'شريك عالمي', partnerDetail: 'دعوة هارفارد للابتكار'
  },
  about: {
    identity: 'هويتنا', title: 'الهندسة بدقة',
    desc: 'سمارت سوليوشنز هو استوديو هندسي متميز في القاهرة الجديدة. نحن متخصصون في البنية التحتية الرقمية عالية الأداء لقطاع التعليم العالمي.',
    scale: 'النطاق', scaleDesc: 'التعامل مع ملايين التفاعلات يومياً.',
    trust: 'الثقة', trustDesc: 'معايير خصوصية بيانات بمستوى بنكي.'
  },
  values: {
    v1Title: 'بنية برمجية نظيفة', v1Desc: 'نحن لا نكتب الكود فحسب، بل نبني هياكل متكاملة. تضمن مبادئنا التقنية بقاء التطبيقات سريعة حتى مع التوسع.',
    v2Title: 'منطق يركز على المستخدم', v2Desc: 'الوصول السهل مدمج في كل بكسل من واجهاتنا لتجربة سلسة.',
    v3Title: 'أمان بمستوى عسكري', v3Desc: 'حماية بيانات المستخدم هي قاعدتنا الأساسية. نستخدم تشفيراً متقدماً لكل منصة نبنيها.'
  },
  stats: {
    badge: 'الثورة الرقمية', title: 'نظام بيئي مزدهر', desc: 'تعيد صناعة التطبيقات تعريف كيفية تفاعل البشر. نحن نضع عملنا في طليعة هذه التوجهات.',
    s1: 'النمو', s1V: 'سنوياً 15%', s1D: 'التوسع المستمر في الاقتصاد الرقمي',
    s2: 'التحميلات', s2V: '+$250 مليار', s2D: 'عدد التطبيقات المحملة سنوياً حول العالم',
    s3: 'الوقت اليومي', s3V: 'ساعات 4.8', s3D: 'متوسط الوقت الذي يقضيه المستخدمون في التطبيقات',
    s4: 'الإيرادات العالمية', s4V: '+$600 مليار', s4D: 'حجم السوق السنوي المتوقع',
    quote: '"المستقبل ملك لأولئك الذين يبنونه."',
    insight: 'بحلول عام 2030، ستكون تطبيقات الهاتف المحمول هي البوابة الرئيسية لجميع المحتويات التعليمية والتجارية.'
  },
  innovation: {
    badge: 'مركز الابتكار', title: 'أدوات المستقبل',
    tabDev: 'التطوير', tabDes: 'التصميم', tabInt: 'الذكاء',
    devH4: 'تطوير أمامي فائق السرعة', devP: 'مصمم لأداء يضاهي التطبيقات الأصلية على جميع الأجهزة المحمولة باستخدام بنيات React النمطية',
    desH4: 'تصميم التجربة', desP: 'نمذجة تفاعلات دقيقة لضمان رضا المستخدم المطلق عند كل لمسة',
    intH4: 'محركات الذكاء الاصطناعي', intP: 'دمج تقنيات Gemini لتشغيل مسارات تعلم تكيفية تتطور مع تقدم مستخدميك',
    intQuote: '"نصمم منطق الغد."'
  },
  lifecycle: {
    badge: 'تدفق الهندسة', title: 'دورة حياة التطبيق',
    p1T: 'المخطط الأساسي', p1D: 'تخطيط النماذج والهيكلية التقنية',
    p2T: 'البناء', p2D: 'دورات تطوير رشيقة تعتمد على نظام الـ Sprints',
    p3T: 'الصقل', p3D: 'اختبارات جودة صارمة وتدقيق للوصول الشامل',
    p4T: 'الإطلاق', p4D: 'استراتيجية تحسين متجر التطبيقات والنشر الإنتاجي',
    phase: 'المرحلة'
  },
  techComparison: {
    badge: 'المنطق الهيكلي', title: 'الأصلي vs متعدد المنصات', desc: 'الاختيار بين Swift/Kotlin أو React Native يعتمد على أهدافك المحددة.',
    nativeT: 'متى نختار الأصلي؟', nativeD: 'الوصول المعقد للأجهزة، الرسوميات المكثفة، والأداء الأقصى المخصص للجهاز',
    crossT: 'متى نختار المتعدد؟', crossD: 'سرعة الوصول للسوق، كود موحد لأنظمة iOS/Android، والتطبيقات المعتمدة على المحتوى'
  },
  anatomy: {
    badge: 'تعمق تعليمي', title: 'تشريح الأداء',
    l1T: 'الواجهة', l1D: 'تطوير أمامي فائق السرعة باستخدام React لضمان استجابة فورية.', l1L: ['مكونات واجهة المستخدم', 'إدارة الحالة', 'رسوم متحركة انسيابية'],
    l2T: 'العقل', l2D: 'منطق آمن وخوارزميات معقدة تعالج قواعد العمل.', l2L: ['طبقة الـ API', 'منطق العمل', 'الخدمات المصغرة'],
    l3T: 'الذاكرة', l3D: 'تخزين موزع قابل للتوسع مع مزامنة لحظية للبيانات.', l3L: ['مزامنة لحظية', 'تشفير البيانات', 'تخزين سحابي']
  },
  portfolio: {
    badge: 'دراسات الحالة', title: 'التميز الهندسي', desc: 'هندسة دقيقة في كل منتج نقدمه للسوق العالمي.',
    app1: { cat: 'التعليم', title: 'كتبي العجيبة', desc: 'مكتبة تفاعلية للأطفال مع سرد قصصي ديناميكي.', stat: '500 ألف مستخدم' },
    app2: { cat: 'الألعاب', title: 'إنجن كويست', desc: 'محرك منطق معرفي لتطوير عقول الأطفال الصغار.', stat: 'تقييم 4.9' },
    app3: { cat: 'الإبداع', title: 'كانفاس برو', desc: 'محرك رسومات منخفض التأخير للرسم الرقمي.', stat: 'تطبيق متميز' }
  },
  monetization: {
    badge: 'منطق الأعمال', title: 'التوسع وتحقيق الدخل', desc: 'استراتيجيات للنمو المستدام والاحتفاظ بالمستخدمين لفترات طويلة.',
    m1T: 'SaaS', m1D: 'نماذج قيمة متكررة لتحقيق الاستقرار.',
    m2T: 'Freemium', m2D: 'استراتيجية ترقية الميزات الممتازة.',
    m3T: 'In-App', m3D: 'السلع الرقمية والمعاملات الصغيرة.',
    m4T: 'إعلاني', m4D: 'وصول ضخم من خلال مرات الظهور.',
    dashTitle: 'تحليلات الإيرادات', dashGrowth: '↑ نمو بنسبة 24%', metric1: 'العائد النشط', metric2: 'قيمة المستخدم', badgeLabel: 'تم التوسع', badgeSub: 'هندسة الإيرادات'
  },
  designThinking: {
    badge: 'استراتيجية المنتج', title: 'التفكير التصميمي', desc: 'هندسة متجذرة في المنطق البشري. نبدأ بالناس، وليس بالكود.',
    p1: 'التعاطف', p1D: 'مراقبة البشر الحقيقيين في بيئتهم.',
    p2: 'التحديد', p2D: 'توليف الملاحظات في مشكلة واضحة.',
    p3: 'التفكير', p3D: 'توليد أفكار جامحة دون إصدار أحكام.',
    p4: 'النمذجة', p4D: 'بناء نماذج للفشل السريع والتعلم.'
  },
  performance: {
    badge: 'التحسين', title: 'السرعة هي ميزة أساسية',
    s1: '100ms', s1D: 'التأخير يقتل معدل تحويل المستخدمين.',
    s2: '60 FPS', s2D: 'الرسوم المتحركة الانسيابية تبني ثقة المستخدم.',
    s3: '< 16ms', s3D: 'استجابة فورية للتفاعلات واللمس.',
    encrypted: 'مشفر'
  },
  security: {
    badge: 'بروتوكول الأمان', title: 'الخصوصية عبر الهيكلية', desc: 'في التعليم، حماية بيانات الأطفال هي أولويتنا القصوى. نبنيها من اليوم الأول.',
    f1: 'تشفير بيانات AES-256 عند السكون', f2: 'جاهز لامتثال COPPA و GDPR', f3: 'دمج المصادقة البيومترية'
  },
  timeline: {
    badge: 'سياقنا', title: 'تطور التقدم',
    e1T: 'نشأة الـ WAP', e1D: 'واجهات أدوات بسيطة معتمدة على النصوص.',
    e2T: 'الانفجار العظيم', e2D: 'قوة برمجيات إطلاق متجر التطبيقات.',
    e3T: 'التحول السحابي', e3D: 'محركات أداء المزامنة اللحظية.',
    e4T: 'أصل الذكاء الاصطناعي', e4D: 'أنظمة تكيفية تعتمد على الذكاء الاصطناعي التوليدي.'
  },
  globalImpact: {
    badge: 'بصمتنا', title: 'عقول عالمية نشطة', subtitle: 'عدد المستخدمين النشطين شهرياً.',
    s1: 'الدول', s1V: '45+', s2: 'التقييم', s2V: '4.9/5', s3: 'القصص', s3V: '12M+', s4: 'وقت التشغيل', s4V: '99.9%'
  },
  futureTrends: {
    badge: 'مسح الأفق', title: 'بنيات الجيل القادم', quote: '"الشاشة تختفي لتصبح جزءاً من البيئة المحيطة."',
    t1: 'الحوسبة المكانية', t1D: 'دمج التطبيقات مع المساحة الفيزيائية.',
    t2: 'Edge AI', t2D: 'شبكات عصبية معقدة تعمل محلياً على الجهاز.',
    t3: 'Zero-UI', t3D: 'تطبيقات تعمل عبر الصوت والإيماءات.'
  },
  process: {
    badge: 'الرحلة', title: 'تجسيد الأفكار', desc: 'توازن مثالي بين الإبداع والانضباط الهندسي.',
    ctaT: 'هل تحتاج لسير عملنا؟', ctaD: 'توثيق شفاف لكل مرحلة من مراحل المشروع.', ctaB: 'اتصل بنا',
    s1T: 'اكتشاف عميق', s1D: 'فهم سيكولوجية المستخدم وتفضيلاته.',
    s2T: 'هندسة UI/UX', s2D: 'واجهات بديهية وسهلة الوصول للجميع.',
    s3T: 'برمجة دقيقة', s3D: 'كود محسن بدون أي تأخير في الاستجابة.',
    s4T: 'جودة صارمة', s4D: 'اختبار كل حالة استخدام ممكنة بدقة.'
  },
  techStack: {
    badge: 'تقنيتنا', title: 'قوة React والذكاء الاصطناعي', desc: 'ذكاء نمطي بديهي وسريع للمستخدمين العصريين.',
    t1: 'React Native', t1D: 'سرعة التطبيقات الأصلية مع كود موحد.',
    t2: 'TypeScript', t2D: 'هندسة موثوقة وآمنة برمجياً.',
    t3: 'سرد الذكاء الاصطناعي', t3D: 'ذكاء اصطناعي توليدي في التعليم.',
    t4: 'Cloud Infra', t4D: 'توسع عالمي غير محدود عبر السحابة.',
    stat1: 'مؤشر الاستقرار', stat2: 'نمط التصميم'
  },
  ecosystem: {
    badge: 'أدوات الاستوديو', title: 'النظام البيئي', desc: 'أدوات بمعايير الصناعة لخدمة أكثر من 500 ألف مستخدم.',
    tools: {
      figma: 'تصميم واجهة المستخدم', vscode: 'برمجة سريعة', github: 'تنسيق CI/CD',
      jira: 'سباقات رشيقة', slack: 'مزامنة لحظية', firebase: 'قواعد بيانات لحظية'
    }
  },
  education: {
    badge: 'رؤى هندسية', title: 'تشريح التطبيق الناجح',
    h1: 'الجوهر الخفي', p1: 'الروح تكمن في البنية الخلفية وليس فقط الواجهة.',
    h2: 'تصميم التجربة', p2: 'تجربة المستخدم هي علم نفسي مطبق.',
    h3: 'ضمان الجودة', p3: 'التعامل مع المدخلات غير المتوقعة بمرونة.',
    factTitle: 'هل تعلم؟', factDesc: 'يحتوي التطبيق العادي على أكثر من 10,000 سطر برمجي فقط للتفاعلات.'
  },
  contact: {
    portal: 'بوابة الهندسة', title: 'ابدأ مشروعك', subtitle: 'ناقش رؤيتك مع قائد الاستوديو لدينا.',
    successTitle: 'تم تسجيل الملخص', successDesc: 'تم إرسال البيانات بنجاح إلى جداول بيانات جوجل.',
    newSub: 'إرسال جديد', fullName: 'الاسم بالكامل', email: 'البريد الإلكتروني', mobile: 'رقم الهاتف', category: 'الفئة', brief: 'الملخص',
    briefPlaceholder: 'صف رؤيتك للمشروع...', submit: 'بدء المشروع', transmitting: 'جاري الإرسال...'
  },
  footer: {
    desc: 'استوديو هندسي رائد مقره القاهرة الجديدة، متخصص في البنية التحتية الرقمية.',
    engineering: 'الهندسة', strategy: 'الاستراتيجية', hq: 'المقر الرئيسي', hqLoc: 'القاهرة الجديدة، مصر', hqAddr: 'ديستريكت 5، مراكز',
    inquiries: 'الاستفسارات', portalLink: 'اتصل عبر البوابة', status: 'متصل', devEnv: 'بيئة التطوير',
    rights: 'سمارت سوليوشنز المحدودة.', privacy: 'الخصوصية', terms: 'الشروط', scroll: 'القمة',
    links: { security: 'الأمان', perf: 'الأداء', monetization: 'تحقيق الربح', design: 'التفكير التصميمي', industry: 'رؤى الصناعة' }
  }
};

const ru = {
  nav: { home: 'Главная', lifecycle: 'Цикл', tech: 'Технологии', ecosystem: 'Экосистема', anatomy: 'Анатомия', connect: 'Связь', start: 'Начать проект' },
  hero: { 
    badge: 'Инновации в Новом Каире', title: 'Цифровое Совершенство.', 
    subtitle: 'Smart Solutions — ведущая студия мобильной разработки. Мы создаем цифровой опыт, который определяет целые отрасли.',
    ctaWork: 'Наши работы', ctaStory: 'Наша история', flagship: 'Флагман', downloads: '500k+ Загрузок', appTitle: 'My Wonder Books',
    appDesc: 'Ведущая мировая платформа образовательного сторителлинга для детей.', partner: 'Глобальный партнер', partnerDetail: 'Harvard Innovation Invite'
  },
  about: {
    identity: 'Наша Идентичность', title: 'Инженерия Точности.',
    desc: 'Smart Solutions — премиальная инженерная студия в Новом Каире. Мы специализируемся на высокопроизводительной инфраструктуре для глобального образования.',
    scale: 'Масштаб', scaleDesc: 'Миллионы взаимодействий обрабатываются ежедневно.',
    trust: 'Доверие', trustDesc: 'Стандарты защиты данных банковского уровня.'
  },
  values: {
    v1Title: 'Чистая Архитектура', v1Desc: 'Мы строим структуры. Принципы SOLID гарантируют скорость приложений даже при их масштабировании.',
    v2Title: 'Логика для Пользователя', v2Desc: 'Доступность вшита в каждый пиксель наших интерфейсов для безупречного опыта.',
    v3Title: 'Безопасность', v3Desc: 'Защита пользовательских данных с использованием продвинутого шифрования для каждой платформы.'
  },
  stats: {
    badge: 'Цифровая Революция', title: 'Процветающая Экосистема', desc: 'Индустрия приложений меняет мир. Мы находимся в авангарде этого сдвига.',
    s1: 'Рост', s1V: '15% в год', s1D: 'Расширение цифровой экономики',
    s2: 'Загрузки', s2V: '+250 млрд', s2D: 'Приложений скачивается ежегодно',
    s3: 'Время в день', s3V: '4.8 Часа', s3D: 'Среднее время пользователя в приложениях',
    s4: 'Мировой доход', s4V: '+$600 млрд', s4D: 'Прогнозируемый объем рынка',
    quote: '"Будущее принадлежит тем, кто его создает."',
    insight: 'К 2030 году приложения станут основным каналом для глобального образования и коммерции.'
  },
  innovation: {
    badge: 'Инновационный Хаб', title: 'Инструменты Будущего',
    tabDev: 'Разработка', tabDes: 'Дизайн', tabInt: 'Интеллект',
    devH4: 'Высокоскоростной Фронтенд', devP: 'Спроектирован для нативной производительности на всех мобильных устройствах с использованием архитектур React.',
    desH4: 'Дизайн Опыта', desP: 'Проектирование точных микро-взаимодействий для обеспечения абсолютного восторга пользователя.',
    intH4: 'Движки Искусственного Интеллекта', intP: 'Интеграция Gemini для адаптивного обучения, которое развивается вместе с пользователем.',
    intQuote: '"Проектируем логику завтрашнего дня."'
  },
  lifecycle: {
    badge: 'Инженерный Поток', title: 'Жизненный Цикл Приложения',
    p1T: 'Чертеж', p1D: 'Вайрфреймы и проектирование технической архитектуры.',
    p2T: 'Сборка', p2D: 'Спринты и гибкие циклы разработки.',
    p3T: 'Полировка', p3D: 'Строгий контроль качества и аудит доступности.',
    p4T: 'Запуск', p4D: 'ASO и стратегия развертывания в продакшн.',
    phase: 'ФАЗА'
  },
  techComparison: {
    badge: 'Архитектурная Логика', title: 'Нативная vs. Кроссплатформа', desc: 'Выбор между Swift/Kotlin или React Native зависит от ваших конкретных целей.',
    nativeT: 'Когда выбирать натив?', nativeD: 'Сложный доступ к оборудованию, интенсивная графика и максимальная производительность устройства.',
    crossT: 'Когда выбирать кросс?', crossD: 'Скорость выхода на рынок, единая кодовая база для iOS/Android и приложения с контентом.',
    questionNative: 'Когда выбирать натив?', questionCross: 'Когда выбирать кросс?'
  },
  anatomy: {
    badge: 'Образовательный Анализ', title: 'Анатомия Производительности',
    l1T: 'Интерфейс', l1D: 'Фронтенд на React для мгновенного отклика.', l1L: ['UI Компоненты', 'Управление стейтом', 'Анимации'],
    l2T: 'Мозг', l2D: 'Безопасная логика и сложные алгоритмы.', l2L: ['Слой API', 'Бизнес-логика', 'Микросервисы'],
    l3T: 'Память', l3D: 'Распределенное масштабируемое хранилище.', l3L: ['Синхронизация', 'Шифрование', 'Облако']
  },
  portfolio: {
    badge: 'Кейсы', title: 'Инженерное Совершенство.', desc: 'Точная архитектура в каждом продукте.',
    app1: { cat: 'Образование', title: 'My Wonder Books', desc: 'Интерактивная библиотека для детей.', stat: '500K Пользователей' },
    app2: { cat: 'Игры', title: 'Engine Quest', desc: 'Когнитивный движок для развития ума.', stat: 'Рейтинг 4.9' },
    app3: { cat: 'Творчество', title: 'Canvas Pro', desc: 'Векторный движок для рисования.', stat: 'Премиум-приложение' }
  },
  monetization: {
    badge: 'Бизнес-логика', title: 'Масштабирование и Доход.', desc: 'Стратегии устойчивого роста.',
    m1T: 'SaaS', m1D: 'Модели регулярной ценности для стабильности.',
    m2T: 'Freemium', m2D: 'Стратегия продажи премиум-функций.',
    m3T: 'In-App', m3D: 'Цифровые товары и микротранзакции.',
    m4T: 'Реклама', m4D: 'Огромный охват через показы.',
    dashTitle: 'Аналитика доходов', dashGrowth: '↑ Рост 24%', metric1: 'Активный доход', metric2: 'Ценность пользователя', badgeLabel: 'МАСШТАБ', badgeSub: 'Архитектура доходов'
  },
  designThinking: {
    badge: 'Продуктовая Стратегия', title: 'Дизайн-мышление.', desc: 'Инженерия, основанная на человеческой логике.',
    p1: 'Эмпатия', p1D: 'Наблюдение за реальными людьми.',
    p2: 'Определение', p2D: 'Синтез наблюдений в четкую задачу.',
    p3: 'Идея', p3D: 'Генерация смелых идей без критики.',
    p4: 'Прототип', p4D: 'Создание моделей для быстрого обучения.'
  },
  performance: {
    badge: 'Оптимизация', title: 'Скорость — это фича.',
    s1: '100мс', s1D: 'Задержка убивает конверсию.',
    s2: '60 FPS', s2D: 'Плавные анимации строят доверие.',
    s3: '< 16мс', s3D: 'Мгновенный отклик на взаимодействие.',
    encrypted: 'Зашифровано'
  },
  security: {
    badge: 'Протокол Безопасности', title: 'Приватность в Архитектуре.', desc: 'В образовании защита детских данных — наш главный приоритет.',
    f1: 'Шифрование AES-256', f2: 'Соответствие COPPA и GDPR', f3: 'Биометрическая аутентификация'
  },
  timeline: {
    badge: 'Наш Контекст', title: 'Эволюция Прогресса.',
    e1T: 'Эра WAP', e1D: 'Текстовые простые интерфейсы.',
    e2T: 'Большой Взрыв', e2D: 'Запуск App Store и мощь ПО.',
    e3T: 'Облачный Сдвиг', e3D: 'Движки синхронизации в реальном времени.',
    e4T: 'AI-Native', e4D: 'Адаптивные системы на базе ИИ.'
  },
  globalImpact: {
    badge: 'Наш След', title: 'Активные Глобальные Умы.', subtitle: 'Ежемесячный охват пользователей.',
    s1: 'Страны', s1V: '45+', s2: 'Рейтинг', s2V: '4.9/5', s3: 'Истории', s3V: '12M+', s4: 'Аптайм', s4V: '99.9%'
  },
  futureTrends: {
    badge: 'Горизонт', title: 'Архитектуры Будущего.', quote: '"Экран исчезает в окружающей среде."',
    t1: 'Пространственные Вычисления', t1D: 'Слияние приложений с физическим пространством.',
    t2: 'Edge AI', t2D: 'Сложные нейросети, работающие локально.',
    t3: 'Zero-UI', t3D: 'Управление голосом и жестами.'
  },
  process: {
    badge: 'Путь', title: 'Воплощение Идей.', desc: 'Баланс творчества и инженерной дисциплины.',
    ctaT: 'Нужен наш воркфлоу?', ctaD: 'Прозрачная документация на каждом этапе.', ctaB: 'Связаться',
    s1T: 'Глубокое Исследование', s1D: 'Понимание психологии пользователя.',
    s2T: 'UI/UX Архитектура', s2D: 'Интуитивные доступные интерфейсы.',
    s3T: 'Точное Программирование', s3D: 'Оптимизированный код с нулевой задержкой.',
    s4T: 'Строгий QA', s4D: 'Тестирование каждого случая.'
  },
  techStack: {
    badge: 'Наши Технологии', title: 'React и Сила ИИ.', desc: 'Быстрый, модульный интеллект.',
    t1: 'React Native', t1D: 'Нативная скорость на кроссплатформе.',
    t2: 'TypeScript', t2D: 'Типизированная надежная инженерия.',
    t3: 'AI Сторителлинг', t3D: 'Генеративный ИИ в образовании.',
    t4: 'Облако', t4D: 'Неограниченное глобальное масштабирование.',
    stat1: 'Стабильность KPI', stat2: 'Паттерн'
  },
  ecosystem: {
    badge: 'Инструментарий', title: 'Экосистема.', desc: 'Инструменты индустриального стандарта.',
    tools: {
      figma: 'UI/UX дизайн', vscode: 'Кодинг', github: 'CI/CD оркестрация',
      jira: 'Agile спринты', slack: 'Синхронизация', firebase: 'Базы данных'
    }
  },
  education: {
    badge: 'Инсайты', title: 'Анатомия Успеха.',
    h1: 'Невидимое Ядро', p1: 'Душа — в бэкенд-архитектуре.',
    h2: 'Дизайн Опыта', p2: 'UX — это психологическая наука.',
    h3: 'Гарантия Качества', p3: 'Обработка любых входных данных.',
    factTitle: 'Знаете ли вы?', factDesc: 'Обычное приложение содержит более 10 000 строк кода только для взаимодействий.'
  },
  contact: {
    portal: 'Инженерный Портал', title: 'Запустить Проект.', subtitle: 'Обсудите видение с нашим лидом.',
    successTitle: 'Бриф Записан', successDesc: 'Данные переданы в Google Таблицы.',
    newSub: 'Новая Заявка', fullName: 'ФИО', email: 'Email', mobile: 'Телефон', category: 'Категория', brief: 'Бриф',
    briefPlaceholder: 'Опишите ваше видение...', submit: 'Запустить', transmitting: 'Отправка...'
  },
  footer: {
    desc: 'Ведущая инженерная студия в Новом Каире.',
    engineering: 'Инженерия', strategy: 'Стратегия', hq: 'Штаб-квартира', hqLoc: 'Египет, Новый Каир', hqAddr: 'District 5, Marakez',
    inquiries: 'Запросы', portalLink: 'Связаться через портал', status: 'В сети', devEnv: 'Среда разработки',
    rights: 'Smart Solutions Ltd.', privacy: 'Приватность', terms: 'Условия', scroll: 'Наверх',
    links: { security: 'Безопасность', perf: 'Скорость', monetization: 'Монетизация', design: 'Дизайн-мышление', industry: 'Обзор индустрии' }
  }
};

const es = {
  nav: { home: 'Inicio', lifecycle: 'Ciclo de vida', tech: 'Tecnología', ecosystem: 'Ecosistema', anatomy: 'Anatomía', connect: 'Contacto', start: 'Empezar Proyecto' },
  hero: { 
    badge: 'Líderes en Innovación en Nuevo Cairo', title: 'Excelencia Digital por Diseño.', 
    subtitle: 'Smart Solutions es un estudio de ingeniería de primer nivel. Diseñamos experiencias digitales que definen industrias.',
    ctaWork: 'Ver Trabajos', ctaStory: 'Nuestra Historia', flagship: 'Insignia', downloads: '500k+ Descargas', appTitle: 'My Wonder Books',
    appDesc: 'La plataforma líder mundial de cuentos educativos para niños.', partner: 'Socio Global', partnerDetail: 'Harvard Innovation Invite'
  },
  about: {
    identity: 'Nuestra Identidad', title: 'Ingeniería de Precisión.',
    desc: 'Smart Solutions es un estudio de ingeniería de élite en Nuevo Cairo. Especializados en infraestructura digital de alto rendimiento para educación global.',
    scale: 'Escala', scaleDesc: 'Millones de interacciones procesadas diariamente.',
    trust: 'Confianza', trustDesc: 'Estándares de privacidad de nivel bancario.'
  },
  values: {
    v1Title: 'Arquitectura Limpia', v1Desc: 'Construimos estructuras. Los principios SOLID garantizan que las apps sigan siendo rápidas al escalar.',
    v2Title: 'Lógica centrada en el Usuario', v2Desc: 'La accesibilidad está integrada en cada píxel para una experiencia fluida.',
    v3Title: 'Seguridad Militar', v3Desc: 'Protegemos los datos con cifrado avanzado para cada plataforma que construimos.'
  },
  stats: {
    badge: 'La Revolución Digital', title: 'Un Ecosistema Próspero', desc: 'La industria de las apps redefine la interacción. Estamos al frente de este cambio.',
    s1: 'Crecimiento', s1V: '15% Anual', s1D: 'Expansión de la economía digital',
    s2: 'Descargas', s2V: '+250 mil millones', s2D: 'Apps descargadas por año',
    s3: 'Tiempo Diario', s3V: '4.8 Horas', s3D: 'Promedio de tiempo en apps',
    s4: 'Ingresos Globales', s4V: '+$600 mil millones', s4D: 'Tamaño de mercado proyectado',
    quote: '"El futuro pertenece a quienes lo construyen."',
    insight: 'Para 2030, las apps serán la puerta principal a la educación y el comercio global.'
  },
  innovation: {
    badge: 'Centro de Innovación', title: 'Herramientas del Futuro',
    tabDev: 'Desarrollo', tabDes: 'Diseño', tabInt: 'Inteligencia',
    devH4: 'Frontend de Alta Velocidad', devP: 'Ingeniería para rendimiento nativo usando arquitecturas modulares de React.',
    desH4: 'Diseño de Experiencia', desP: 'Prototipado de micro-interacciones para asegurar el deleite absoluto del usuario.',
    intH4: 'Motores de Inteligencia Artificial', intP: 'Integración de Gemini para potenciar rutas de aprendizaje adaptativas.',
    intQuote: '"Arquitecturando la lógica del mañana."'
  },
  lifecycle: {
    badge: 'Flujo de Ingeniería', title: 'El Ciclo de Vida de la App',
    p1T: 'El Plano', p1D: 'Wireframes y mapeo de arquitectura técnica.',
    p2T: 'La Construcción', p2D: 'Ciclos ágiles de desarrollo basados en sprints.',
    p3T: 'El Pulido', p3D: 'Auditorías rigurosas de QA y accesibilidad.',
    p4T: 'El Lanzamiento', p4D: 'ASO y estrategia de despliegue en producción.',
    phase: 'FASE'
  },
  techComparison: {
    badge: 'Lógica Arquitectónica', title: 'Nativo vs. Multiplataforma', desc: 'Elegir entre Swift/Kotlin o React Native depende de tus objetivos.',
    nativeT: '¿Cuándo ir por Nativo?', nativeD: 'Acceso complejo al hardware, gráficos intensivos y máximo rendimiento específico.',
    crossT: '¿Cuándo ir por Multi?', crossD: 'Velocidad de mercado, código unificado para iOS/Android y apps basadas en contenido.',
    questionNative: '¿Cuándo ir por Nativo?', questionCross: '¿Cuándo ir por Multi?'
  },
  anatomy: {
    badge: 'Inmersión Educativa', title: 'La Anatomía del Rendimiento',
    l1T: 'La Interfaz', l1D: 'Frontend de alta velocidad usando React.', l1L: ['Componentes UI', 'Gestión de Estado', 'Animaciones'],
    l2T: 'El Cerebro', l2D: 'Lógica segura y algoritmos complejos.', l2L: ['Capa API', 'Lógica de Negocio', 'Microservicios'],
    l3T: 'La Memoria', l3D: 'Almacenamiento escalable distribuido.', l3L: ['Sincronización', 'Cifrado', 'Nube']
  },
  portfolio: {
    badge: 'Casos de Estudio', title: 'Excelencia en Ingeniería.', desc: 'Arquitectura de precisión en cada producto.',
    app1: { cat: 'Educación', title: 'My Wonder Books', desc: 'Librería interactiva para niños.', stat: '500K Usuarios' },
    app2: { cat: 'Juegos', title: 'Engine Quest', desc: 'Motor cognitivo para mentes jóvenes.', stat: '4.9 Calificación' },
    app3: { cat: 'Creatividad', title: 'Canvas Pro', desc: 'Motor vectorial de baja latencia.', stat: 'App Premium' }
  },
  monetization: {
    badge: 'Lógica de Negocio', title: 'Escalado y Monetización.', desc: 'Estrategias para el crecimiento sostenible.',
    m1T: 'SaaS', m1D: 'Modelos de valor recurrente.',
    m2T: 'Freemium', m2D: 'Estrategia de venta de funciones premium.',
    m3T: 'In-App', m3D: 'Bienes digitales y microtransacciones.',
    m4T: 'Anuncios', m4D: 'Alcance masivo a través de impresiones.',
    dashTitle: 'Analítica de Ingresos', dashGrowth: '↑ 24% Crecimiento', metric1: 'Rendimiento Activo', metric2: 'Valor de Usuario', badgeLabel: 'ESCALADO', badgeSub: 'Arquitectura de Ingresos'
  },
  designThinking: {
    badge: 'Estrategia de Producto', title: 'Pensamiento de Diseño.', desc: 'Ingeniería basada en la lógica humana.',
    p1: 'Empatizar', p1D: 'Observar a humanos reales.',
    p2: 'Definir', p2D: 'Sintetizar en un problema claro.',
    p3: 'Idear', p3D: 'Generar ideas salvajes sin juzgar.',
    p4: 'Prototipar', p4D: 'Modelos para fallar rápido y aprender.'
  },
  performance: {
    badge: 'Optimización', title: 'La Velocidad es una Función.',
    s1: '100ms', s1D: 'La latencia mata la conversión.',
    s2: '60 FPS', s2D: 'Animaciones fluidas generan confianza.',
    s3: '< 16ms', s3D: 'Respuesta instantánea a la interacción.',
    encrypted: 'Cifrado'
  },
  security: {
    badge: 'Protocolo de Seguridad', title: 'Privacidad por Arquitectura.', desc: 'En educación, la protección de los niños es prioridad.',
    f1: 'Cifrado AES-256', f2: 'Cumplimiento COPPA y GDPR', f3: 'Autenticación Biométrica'
  },
  timeline: {
    badge: 'Nuestro Contexto', title: 'Evolución del Progreso.',
    e1T: 'Génesis WAP', e1D: 'Interfaces de texto simples.',
    e2T: 'Big Bang', e2D: 'Lanzamiento de la App Store.',
    e3T: 'Cambio a la Nube', e3D: 'Sincronización en tiempo real.',
    e4T: 'Nativo en IA', e4D: 'Sistemas adaptativos de IA.'
  },
  globalImpact: {
    badge: 'Huella Global', title: 'Mentes Activas Globales.', subtitle: 'Alcance mensual de usuarios.',
    s1: 'Países', s1V: '45+', s2: 'Rating', s2V: '4.9/5', s3: 'Historias', s3V: '12M+', s4: 'Uptime', s4V: '99.9%'
  },
  futureTrends: {
    badge: 'Horizonte', title: 'Arquitecturas Próximas.', quote: '"La pantalla desaparece en el entorno."',
    t1: 'Computación Espacial', t1D: 'Fusión de apps con espacio físico.',
    t2: 'IA en el Borde', t2D: 'Redes neuronales locales.',
    t3: 'Zero-UI', t3D: 'Apps guiadas por voz y gestos.'
  },
  process: {
    badge: 'El Viaje', title: 'Dando Vida a las Ideas.', desc: 'Equilibrio entre creatividad y disciplina.',
    ctaT: '¿Necesitas nuestro flujo?', ctaD: 'Documentación transparente en cada fase.', ctaB: 'Contactar',
    s1T: 'Descubrimiento', s1D: 'Entendiendo la psicología del usuario.',
    s2T: 'Arquitectura UI/UX', s2D: 'Interfaces intuitivas y accesibles.',
    s3T: 'Código de Precisión', s3D: 'Cero latencia optimizado.',
    s4T: 'QA Riguroso', s4D: 'Probando cada caso posible.'
  },
  techStack: {
    badge: 'Tecnología', title: 'Poder de React e IA.', desc: 'Inteligencia rápida y modular.',
    t1: 'React Native', t1D: 'Velocidad nativa multiplataforma.',
    t2: 'TypeScript', t2D: 'Ingeniería confiable y tipada.',
    t3: 'Narrativa IA', t3D: 'IA Generativa en educación.',
    t4: 'Cloud Infra', t4D: 'Escalado global ilimitado.',
    stat1: 'KPI Estabilidad', stat2: 'Patrón'
  },
  ecosystem: {
    badge: 'Herramientas', title: 'El Ecosistema.', desc: 'Estándares de la industria.',
    tools: {
      figma: 'Diseño UI/UX', vscode: 'Codificación', github: 'Orquestación CI/CD',
      jira: 'Sprints ágiles', slack: 'Sincronización', firebase: 'Bases de datos'
    }
  },
  education: {
    badge: 'Insights de Ingeniería', title: 'Anatomía del Éxito.',
    h1: 'Núcleo Invisible', p1: 'El alma está en la arquitectura backend.',
    h2: 'Diseño de Experiencia', p2: 'UX es una ciencia psicológica.',
    h3: 'Garantía de Calidad', p3: 'Manejo de entradas inesperadas.',
    factTitle: '¿Sabías que?', factDesc: 'Una app típica tiene más de 10,000 líneas de código solo para interacciones.'
  },
  contact: {
    portal: 'Portal de Ingeniería', title: 'Iniciar Proyecto.', subtitle: 'Habla con nuestro líder.',
    successTitle: 'Brief Registrado', successDesc: 'Datos enviados con éxito.',
    newSub: 'Nueva Solicitud', fullName: 'Nombre Completo', email: 'Correo', mobile: 'Móvil', category: 'Categoría', brief: 'Brief',
    briefPlaceholder: 'Describe tu visión...', submit: 'Iniciar', transmitting: 'Enviando...'
  },
  footer: {
    desc: 'Estudio de ingeniería líder en Nuevo Cairo.',
    engineering: 'Ingeniería', strategy: 'Estrategia', hq: 'Sede Central', hqLoc: 'Egipto, Nuevo Cairo', hqAddr: 'District 5, Marakez',
    inquiries: 'Consultas', portalLink: 'Contactar vía Portal', status: 'En línea', devEnv: 'Entorno Dev',
    rights: 'Smart Solutions Ltd.', privacy: 'Privacidad', terms: 'Términos', scroll: 'Inicio',
    links: { security: 'Seguridad', perf: 'Rendimiento', monetization: 'Monetización', design: 'Pensamiento de Diseño', industry: 'Perspectivas' }
  }
};

const fr = {
  nav: { home: 'Accueil', lifecycle: 'Cycle de vie', tech: 'Tech', ecosystem: 'Écosystème', anatomy: 'Anatomie', connect: 'Contact', start: 'Démarrer Projet' },
  hero: { 
    badge: 'Innovation au Nouveau Caire', title: 'Excellence Numérique par Design.', 
    subtitle: 'Smart Solutions est un studio d\'ingénierie d\'applications. Nous concevons des expériences qui définissent des industries.',
    ctaWork: 'Nos Projets', ctaStory: 'Notre Histoire', flagship: 'Phare', downloads: '500k+ Téléchargements', appTitle: 'My Wonder Books',
    appDesc: 'La plateforme de narration éducative pour enfants n°1 au monde.', partner: 'Partenaire Global', partnerDetail: 'Harvard Innovation Invite'
  },
  about: {
    identity: 'Notre Identité', title: 'Ingénierie de Précision.',
    desc: 'Smart Solutions est un studio d\'ingénierie de pointe au Nouveau Caire. Spécialistes en infrastructure numérique haute performance.',
    scale: 'Échelle', scaleDesc: 'Millions d\'interactions traitées quotidiennement.',
    trust: 'Confiance', trustDesc: 'Normes de confidentialité de niveau bancaire.'
  },
  values: {
    v1Title: 'Architecture Propre', v1Desc: 'Nous bâtissons des structures. Nos principes SOLID garantissent la vitesse au fil de la croissance.',
    v2Title: 'Logique Utilisateur', v2Desc: 'L\'accessibilité est au cœur de chaque pixel de nos interfaces.',
    v3Title: 'Sécurité Militaire', v3Desc: 'Protection des données avec cryptage avancé pour chaque plateforme.'
  },
  stats: {
    badge: 'La Révolution Numérique', title: 'Un Écosystème Prospère', desc: 'L\'industrie des apps redéfinit l\'interaction. Nous sommes en tête de ce virage.',
    s1: 'Croissance', s1V: '15% par an', s1D: 'Expansion de l\'économie numérique',
    s2: 'Téléchargements', s2V: '+250 Milliards', s2D: 'Apps téléchargées par an',
    s3: 'Temps Quotidien', s3V: '4.8 Heures', s3D: 'Moyenne de temps sur les apps',
    s4: 'Revenu Global', s4V: '+$600 Milliards', s4D: 'Taille de marché projetée',
    quote: '"L\'avenir appartient à ceux qui le construisent."',
    insight: 'D\'ici 2030, les apps seront le canal principal pour l\'éducation et le commerce mondial.'
  },
  innovation: {
    badge: 'Hub d\'Innovation', title: 'Outils du Futur',
    tabDev: 'Développement', tabDes: 'Design', tabInt: 'Intelligence',
    devH4: 'Frontend Haute Vitesse', devP: 'Ingénierie pour performance native via architectures React modulaires.',
    desH4: 'Design d\'Expérience', desP: 'Prototypage de micro-interactions pour assurer le plaisir de l\'utilisateur.',
    intH4: 'Moteurs d\'IA', intP: 'Intégration de Gemini pour des parcours d\'apprentissage adaptatifs.',
    intQuote: '"Architecturer la logique de demain."'
  },
  lifecycle: {
    badge: 'Flux d\'Ingénierie', title: 'Le Cycle de Vie de l\'App',
    p1T: 'Le Plan', p1D: 'Wireframes et cartographie d\'architecture technique.',
    p2T: 'La Construction', p2D: 'Cycles agiles basés sur des sprints.',
    p3T: 'Le Polissage', p3D: 'QA rigoureux et audits d\'accessibilité.',
    p4T: 'Le Lancement', p4D: 'ASO et stratégie de déploiement en production.',
    phase: 'PHASE'
  },
  techComparison: {
    badge: 'Logique Architecturale', title: 'Natif vs. Multiplateforme', desc: 'Choisir entre Swift/Kotlin ou React Native selon vos objectifs.',
    nativeT: 'Pourquoi le Natif ?', nativeD: 'Accès hardware complexe, graphismes intensifs et performance maximale.',
    crossT: 'Pourquoi le Multi ?', crossD: 'Vitesse de mise sur marché, code unifié iOS/Android et apps de contenu.',
    questionNative: 'Pourquoi le Natif ?', questionCross: 'Pourquoi le Multi ?'
  },
  anatomy: {
    badge: 'Immersion Éducative', title: 'L\'Anatomie de la Performance',
    l1T: 'L\'Interface', l1D: 'Frontend haute vitesse avec React.', l1L: ['Composants UI', 'Gestion d\'État', 'Animations Fluides'],
    l2T: 'Le Cerveau', l2D: 'Logique sécurisée et algorithmes complexes.', l2L: ['Couche API', 'Logique Métier', 'Microservices'],
    l3T: 'La Mémoire', l3D: 'Stockage scalable distribué.', l3L: ['Sync Temps Réel', 'Cryptage', 'Cloud']
  },
  portfolio: {
    badge: 'Études de Cas', title: 'Excellence Ingénierie.', desc: 'Architecture de précision pour chaque produit.',
    app1: { cat: 'Éducation', title: 'My Wonder Books', desc: 'Bibliothèque interactive pour enfants.', stat: '500K Utilisateurs' },
    app2: { cat: 'Jeux', title: 'Engine Quest', desc: 'Moteur cognitif pour jeunes esprits.', stat: 'Note 4.9' },
    app3: { cat: 'Créativité', title: 'Canvas Pro', desc: 'Moteur vectoriel haute performance.', stat: 'App Premium' }
  },
  monetization: {
    badge: 'Business Logic', title: 'Croissance et Monétisation.', desc: 'Stratégies pour un succès durable.',
    m1T: 'SaaS', m1D: 'Modèles de valeur récurrente.',
    m2T: 'Freemium', m2D: 'Stratégie premium upsell.',
    m3T: 'In-App', m3D: 'Biens numériques et microtransactions.',
    m4T: 'Ads', m4D: 'Portée massive via impressions.',
    dashTitle: 'Analytique de Revenu', dashGrowth: '↑ 24% Croissance', metric1: 'Rendement Actif', metric2: 'Valeur Utilisateur', badgeLabel: 'ÉCHELLE', badgeSub: 'Architecture de Revenu'
  },
  designThinking: {
    badge: 'Stratégie Produit', title: 'Design Thinking.', desc: 'Ingénierie ancrée dans la logique humaine.',
    p1: 'Empathie', p1D: 'Observer les humains en environnement.',
    p2: 'Définir', p2D: 'Synthétiser en un problème clair.',
    p3: 'Idéation', p3D: 'Générer des idées sans jugement.',
    p4: 'Prototypage', p4D: 'Modèles pour échouer vite et apprendre.'
  },
  performance: {
    badge: 'Optimisation', title: 'La Vitesse est une Feature.',
    s1: '100ms', s1D: 'La latence tue la conversion.',
    s2: '60 FPS', s2D: 'Animations fluides créent la confiance.',
    s3: '< 16ms', s3D: 'Réponse instantanée à l\'interaction.',
    encrypted: 'Chiffré'
  },
  security: {
    badge: 'Protocole Sécurité', title: 'Confidentialité par Architecture.', desc: 'En éducation, la protection des enfants est la priorité.',
    f1: 'Cryptage AES-256', f2: 'Prêt COPPA & RGPD', f3: 'Auth Biométrique'
  },
  timeline: {
    badge: 'Notre Contexte', title: 'Évolution du Progrès.',
    e1T: 'Genèse WAP', e1D: 'Interfaces texte simples.',
    e2T: 'Big Bang', e2D: 'Lancement de l\'App Store.',
    e3T: 'Shift Cloud', e3D: 'Moteurs de sync temps réel.',
    e4T: 'IA Native', e4D: 'Systèmes adaptatifs IA.'
  },
  globalImpact: {
    badge: 'Notre Empreinte', title: 'Esprits Actifs Globaux.', subtitle: 'Portée mensuelle des utilisateurs.',
    s1: 'Pays', s1V: '45+', s2: 'Note', s2V: '4.9/5', s3: 'Histoires', s3V: '12M+', s4: 'Uptime', s4V: '99.9%'
  },
  futureTrends: {
    badge: 'Horizon', title: 'Architectures Futures.', quote: '"L\'écran disparaît dans l\'environnement."',
    t1: 'Computing Spatial', t1D: 'Fusion apps et espace physique.',
    t2: 'Edge IA', t2D: 'Réseaux neuronaux locaux.',
    t3: 'Zero-UI', t3D: 'Apps pilotées par voix et gestes.'
  },
  process: {
    badge: 'Le Voyage', title: 'Donner Vie aux Idées.', desc: 'Équilibre créativité et discipline.',
    ctaT: 'Besoin de notre workflow ?', ctaD: 'Documentation transparente à chaque phase.', ctaB: 'Contact',
    s1T: 'Découverte', s1D: 'Comprendre la psychologie utilisateur.',
    s2T: 'Architecture UI/UX', s2D: 'Interfaces intuitives.',
    s3T: 'Code Précis', s3D: 'Zéro latence optimisé.',
    s4T: 'QA Rigoureux', s4D: 'Tester chaque cas d\'usage.'
  },
  techStack: {
    badge: 'Technologie', title: 'Poids de React et IA.', desc: 'Intelligence rapide et modulaire.',
    t1: 'React Native', t1D: 'Vitesse native multiplateforme.',
    t2: 'TypeScript', t2D: 'Ingénierie fiable et typée.',
    t3: 'Récits IA', t3D: 'IA Générative en éducation.',
    t4: 'Cloud Infra', t4D: 'Scaling global illimité.',
    stat1: 'KPI Stabilité', stat2: 'Pattern'
  },
  ecosystem: {
    badge: 'Outils', title: 'L\'Écosystème.', desc: 'Standards de l\'industrie.',
    tools: {
      figma: 'Design UI/UX', vscode: 'Codage', github: 'Orchestration CI/CD',
      jira: 'Sprints agiles', slack: 'Synchronisation', firebase: 'Bases de données'
    }
  },
  education: {
    badge: 'Insights', title: 'Anatomie du Succès.',
    h1: 'Cœur Invisible', p1: 'L\'âme est dans l\'architecture backend.',
    h2: 'Design d\'Expérience', p2: 'UX est une science psychologique.',
    h3: 'Assurance Qualité', p3: 'Gérer les entrées inattendues.',
    factTitle: 'Le saviez-vous ?', factDesc: 'Une app typique contient plus de 10 000 lignes de code rien que pour les interactions.'
  },
  contact: {
    portal: 'Portail Ingénierie', title: 'Lancer Projet.', subtitle: 'Discutez avec notre responsable.',
    successTitle: 'Brief Enregistré', successDesc: 'Données transmises avec succès.',
    newSub: 'Nouveau Brief', fullName: 'Nom Complet', email: 'Email', mobile: 'Mobile', category: 'Catégorie', brief: 'Brief',
    briefPlaceholder: 'Décrivez votre vision...', submit: 'Lancer', transmitting: 'Envoi...'
  },
  footer: {
    desc: 'Studio d\'ingénierie leader au Nouveau Caire.',
    engineering: 'Ingénierie', strategy: 'Stratégie', hq: 'Siège Social', hqLoc: 'Égypte, Nouveau Caire', hqAddr: 'District 5, Marakez',
    inquiries: 'Demandes', portalLink: 'Contact via Portail', status: 'En ligne', devEnv: 'Environnement Dev',
    rights: 'Smart Solutions Ltd.', privacy: 'Confidentialité', terms: 'Conditions', scroll: 'Sommet',
    links: { security: 'Sécurité', perf: 'Performance', monetization: 'Monétisation', design: 'Design Thinking', industry: 'Aperçus' }
  }
};

export const translations = {
  en,
  ar,
  ru,
  es,
  fr
};
