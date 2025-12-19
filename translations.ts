
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
    badge: 'The Digital Revolution', title: 'A Thriving Ecosystem.', desc: 'The app industry is redefining interaction. We are at the forefront of this digital shift.',
    s1: 'Growth', s1V: '15% YoY', s1D: 'Expansion of digital economy',
    s2: 'Downloads', s2V: '250B+', s2D: 'Apps downloaded per year',
    s3: 'Daily Time', s3V: '4.8 Hours', s3D: 'Average user time in apps',
    s4: 'Global Revenue', s4V: '$600B+', s4D: 'Projected market size',
    quote: '"The future belongs to those who build it."',
    insight: 'By 2030, apps will be the primary gateway for global education and commerce.'
  },
  innovation: {
    badge: 'Innovation Hub', title: 'Tools of the Future.',
    tabDev: 'Development', tabDes: 'Design', tabInt: 'Intelligence',
    devH4: 'High-Speed Frontend', devP: 'Engineered for native-level performance across all mobile devices using modular React architectures.',
    desH4: 'Experience Design', desP: 'Prototyping precision micro-interactions to ensure absolute user delight at every touchpoint.',
    intH4: 'AI Intelligence Engines', intP: 'Integrating Gemini to power adaptive learning paths that evolve with your users\' progress.',
    intQuote: '"Architecting the logic of tomorrow."'
  },
  lifecycle: {
    badge: 'Engineering Flow', title: 'The App Lifecycle.',
    p1T: 'The Blueprint', p1D: 'Wireframes and technical architecture mapping.',
    p2T: 'The Build', p2D: 'Sprint-based agile development cycles.',
    p3T: 'The Polish', p3D: 'Rigorous QA and accessibility audits.',
    p4T: 'The Launch', p4D: 'ASO and production deployment strategy.'
  },
  techComparison: {
    badge: 'Architectural Logic', title: 'Native vs. Cross-Platform.', desc: 'Choosing between Swift/Kotlin or React Native depends on your specific goals.',
    nativeT: 'When to go Native?', nativeD: 'Complex hardware access, intensive graphics, and maximum device-specific performance.',
    crossT: 'When to go Cross?', crossD: 'Speed to market, unified codebase across iOS/Android, and content-driven apps.',
    questionNative: 'When to go Native?', questionCross: 'When to go Cross?'
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
    s3: '< 16ms', s3D: 'Instant interaction response time.'
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
    identity: 'هويتنا', title: 'الهندسة بدقة.',
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
    badge: 'الثورة الرقمية', title: 'نظام بيئي مزدهر.', desc: 'تعيد صناعة التطبيقات تعريف كيفية تفاعل البشر. نحن نضع عملنا في طليعة هذه التوجهات.',
    s1: 'النمو', s1V: '15% سنوياً', s1D: 'التوسع المستمر في الاقتصاد الرقمي',
    s2: 'التحميلات', s2V: '+$250 مليار', s2D: 'عدد التطبيقات المحملة سنوياً حول العالم',
    s3: 'الوقت اليومي', s3V: '4.8 ساعات', s3D: 'متوسط الوقت الذي يقضيه المستخدمون في التطبيقات',
    s4: 'الإيرادات العالمية', s4V: '+$600 مليار', s4D: 'حجم السوق السنوي المتوقع',
    quote: '"المستقبل ملك لأولئك الذين يبنونه."',
    insight: 'بحلول عام 2030، ستكون تطبيقات الهاتف المحمول هي البوابة الرئيسية لجميع المحتويات التعليمية والتجارية.'
  },
  innovation: {
    badge: 'مركز الابتكار', title: 'أدوات المستقبل.',
    tabDev: 'التطوير', tabDes: 'التصميم', tabInt: 'الذكاء',
    devH4: 'تطوير أمامي فائق السرعة', devP: 'مصمم لأداء يضاهي التطبيقات الأصلية على جميع الأجهزة المحمولة باستخدام بنيات React النمطية.',
    desH4: 'تصميم التجربة', desP: 'نمذجة تفاعلات دقيقة لضمان رضا المستخدم المطلق عند كل لمسة.',
    intH4: 'محركات الذكاء الاصطناعي', intP: 'دمج تقنيات Gemini لتشغيل مسارات تعلم تكيفية تتطور مع تقدم مستخدميك.',
    intQuote: '"نصمم منطق الغد."'
  },
  lifecycle: {
    badge: 'تدفق الهندسة', title: 'دورة حياة التطبيق.',
    p1T: 'المخطط الأساسي', p1D: 'تخطيط النماذج والهيكلية التقنية.',
    p2T: 'البناء', p2D: 'دورات تطوير رشيقة تعتمد على نظام الـ Sprints.',
    p3T: 'الصقل', p3D: 'اختبارات جودة صارمة وتدقيق للوصول الشامل.',
    p4T: 'الإطلاق', p4D: 'استراتيجية تحسين متجر التطبيقات والنشر الإنتاجي.'
  },
  techComparison: {
    badge: 'المنطق الهيكلي', title: 'الأصلي vs متعدد المنصات.', desc: 'الاختيار بين Swift/Kotlin أو React Native يعتمد على أهدافك المحددة.',
    nativeT: 'متى نختار الأصلي؟', nativeD: 'الوصول المعقد للأجهزة، الرسوميات المكثفة، والأداء الأقصى المخصص للجهاز.',
    crossT: 'متى نختار المتعدد؟', crossD: 'سرعة الوصول للسوق، كود موحد لأنظمة iOS/Android، والتطبيقات المعتمدة على المحتوى.',
    questionNative: 'متى نختار الأصلي؟', questionCross: 'متى نختار المتعدد؟'
  },
  anatomy: {
    badge: 'تعمق تعليمي', title: 'تشريح الأداء.',
    l1T: 'الواجهة', l1D: 'تطوير أمامي فائق السرعة باستخدام React لضمان استجابة فورية.', l1L: ['مكونات واجهة المستخدم', 'إدارة الحالة', 'رسوم متحركة انسيابية'],
    l2T: 'العقل', l2D: 'منطق آمن وخوارزميات معقدة تعالج قواعد العمل.', l2L: ['طبقة الـ API', 'منطق العمل', 'الخدمات المصغرة'],
    l3T: 'الذاكرة', l3D: 'تخزين موزع قابل للتوسع مع مزامنة لحظية للبيانات.', l3L: ['مزامنة لحظية', 'تشفير البيانات', 'تخزين سحابي']
  },
  portfolio: {
    badge: 'دراسات الحالة', title: 'التميز الهندسي.', desc: 'هندسة دقيقة في كل منتج نقدمه للسوق العالمي.',
    app1: { cat: 'التعليم', title: 'كتبي العجيبة', desc: 'مكتبة تفاعلية للأطفال مع سرد قصصي ديناميكي.', stat: '500 ألف مستخدم' },
    app2: { cat: 'الألعاب', title: 'إنجن كويست', desc: 'محرك منطق معرفي لتطوير عقول الأطفال الصغار.', stat: 'تقييم 4.9' },
    app3: { cat: 'الإبداع', title: 'كانفاس برو', desc: 'محرك رسومات منخفض التأخير للرسم الرقمي.', stat: 'تطبيق متميز' }
  },
  monetization: {
    badge: 'منطق الأعمال', title: 'التوسع وتحقيق الدخل.', desc: 'استراتيجيات للنمو المستدام والاحتفاظ بالمستخدمين لفترات طويلة.',
    m1T: 'SaaS', m1D: 'نماذج قيمة متكررة لتحقيق الاستقرار.',
    m2T: 'Freemium', m2D: 'استراتيجية ترقية الميزات الممتازة.',
    m3T: 'In-App', m3D: 'السلع الرقمية والمعاملات الصغيرة.',
    m4T: 'إعلاني', m4D: 'وصول ضخم من خلال مرات الظهور.',
    dashTitle: 'تحليلات الإيرادات', dashGrowth: '↑ نمو بنسبة 24%', metric1: 'العائد النشط', metric2: 'قيمة المستخدم', badgeLabel: 'تم التوسع', badgeSub: 'هندسة الإيرادات'
  },
  designThinking: {
    badge: 'استراتيجية المنتج', title: 'التفكير التصميمي.', desc: 'هندسة متجذرة في المنطق البشري. نبدأ بالناس، وليس بالكود.',
    p1: 'التعاطف', p1D: 'مراقبة البشر الحقيقيين في بيئتهم.',
    p2: 'التحديد', p2D: 'توليف الملاحظات في مشكلة واضحة.',
    p3: 'التفكير', p3D: 'توليد أفكار جامحة دون إصدار أحكام.',
    p4: 'النمذجة', p4D: 'بناء نماذج للفشل السريع والتعلم.'
  },
  performance: {
    badge: 'التحسين', title: 'السرعة هي ميزة أساسية.',
    s1: '100ms', s1D: 'التأخير يقتل معدل تحويل المستخدمين.',
    s2: '60 FPS', s2D: 'الرسوم المتحركة الانسيابية تبني ثقة المستخدم.',
    s3: '< 16ms', s3D: 'استجابة فورية للتفاعلات واللمس.'
  },
  security: {
    badge: 'بروتوكول الأمان', title: 'الخصوصية عبر الهيكلية.', desc: 'في التعليم، حماية بيانات الأطفال هي أولويتنا القصوى. نبنيها من اليوم الأول.',
    f1: 'تشفير بيانات AES-256 عند السكون', f2: 'جاهز لامتثال COPPA و GDPR', f3: 'دمج المصادقة البيومترية'
  },
  timeline: {
    badge: 'سياقنا', title: 'تطور التقدم.',
    e1T: 'نشأة الـ WAP', e1D: 'واجهات أدوات بسيطة معتمدة على النصوص.',
    e2T: 'الانفجار العظيم', e2D: 'قوة برمجيات إطلاق متجر التطبيقات.',
    e3T: 'التحول السحابي', e3D: 'محركات أداء المزامنة اللحظية.',
    e4T: 'أصل الذكاء الاصطناعي', e4D: 'أنظمة تكيفية تعتمد على الذكاء الاصطناعي التوليدي.'
  },
  globalImpact: {
    badge: 'بصمتنا', title: 'عقول عالمية نشطة.', subtitle: 'عدد المستخدمين النشطين شهرياً.',
    s1: 'الدول', s1V: '45+', s2: 'التقييم', s2V: '4.9/5', s3: 'القصص', s3V: '12M+', s4: 'وقت التشغيل', s4V: '99.9%'
  },
  futureTrends: {
    badge: 'مسح الأفق', title: 'بنيات الجيل القادم.', quote: '"الشاشة تختفي لتصبح جزءاً من البيئة المحيطة."',
    t1: 'الحوسبة المكانية', t1D: 'دمج التطبيقات مع المساحة الفيزيائية.',
    t2: 'Edge AI', t2D: 'شبكات عصبية معقدة تعمل محلياً على الجهاز.',
    t3: 'Zero-UI', t3D: 'تطبيقات تعمل عبر الصوت والإيماءات.'
  },
  process: {
    badge: 'الرحلة', title: 'تجسيد الأفكار.', desc: 'توازن مثالي بين الإبداع والانضباط الهندسي.',
    ctaT: 'هل تحتاج لسير عملنا؟', ctaD: 'توثيق شفاف لكل مرحلة من مراحل المشروع.', ctaB: 'اتصل بنا',
    s1T: 'اكتشاف عميق', s1D: 'فهم سيكولوجية المستخدم وتفضيلاته.',
    s2T: 'هندسة UI/UX', s2D: 'واجهات بديهية وسهلة الوصول للجميع.',
    s3T: 'برمجة دقيقة', s3D: 'كود محسن بدون أي تأخير في الاستجابة.',
    s4T: 'جودة صارمة', s4D: 'اختبار كل حالة استخدام ممكنة بدقة.'
  },
  techStack: {
    badge: 'تقنيتنا', title: 'قوة React والذكاء الاصطناعي.', desc: 'ذكاء نمطي بديهي وسريع للمستخدمين العصريين.',
    t1: 'React Native', t1D: 'سرعة التطبيقات الأصلية مع كود موحد.',
    t2: 'TypeScript', t2D: 'هندسة موثوقة وآمنة برمجياً.',
    t3: 'سرد الذكاء الاصطناعي', t3D: 'ذكاء اصطناعي توليدي في التعليم.',
    t4: 'Cloud Infra', t4D: 'توسع عالمي غير محدود عبر السحابة.',
    stat1: 'مؤشر الاستقرار', stat2: 'نمط التصميم'
  },
  ecosystem: {
    badge: 'أدوات الاستوديو', title: 'النظام البيئي.', desc: 'أدوات بمعايير الصناعة لخدمة أكثر من 500 ألف مستخدم.',
    tools: {
      figma: 'تصميم واجهة المستخدم', vscode: 'برمجة سريعة', github: 'تنسيق CI/CD',
      jira: 'سباقات رشيقة', slack: 'مزامنة لحظية', firebase: 'قواعد بيانات لحظية'
    }
  },
  education: {
    badge: 'رؤى هندسية', title: 'تشريح التطبيق الناجح.',
    h1: 'الجوهر الخفي', p1: 'الروح تكمن في البنية الخلفية وليس فقط الواجهة.',
    h2: 'تصميم التجربة', p2: 'تجربة المستخدم هي علم نفسي مطبق.',
    h3: 'ضمان الجودة', p3: 'التعامل مع المدخلات غير المتوقعة بمرونة.',
    factTitle: 'هل تعلم؟', factDesc: 'يحتوي التطبيق العادي على أكثر من 10,000 سطر برمجي فقط للتفاعلات.'
  },
  contact: {
    portal: 'بوابة الهندسة', title: 'ابدأ مشروعك.', subtitle: 'ناقش رؤيتك مع قائد الاستوديو لدينا.',
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
  ...en,
  nav: { home: 'Главная', lifecycle: 'Цикл', tech: 'Технологии', ecosystem: 'Экосистема', anatomy: 'Анатомия', connect: 'Связь', start: 'Начать проект' },
  hero: { 
    ...en.hero,
    title: 'Цифровое совершенство через дизайн.',
    subtitle: 'Smart Solutions — ведущая инженерная студия. Мы проектируем цифровой опыт, определяющий будущее отраслей.'
  },
  about: { ...en.about, identity: 'Наша идентичность', title: 'Инженерия точности.' }
};

const es = {
  ...en,
  nav: { home: 'Inicio', lifecycle: 'Ciclo', tech: 'Tech', ecosystem: 'Ecosistema', anatomy: 'Anatomía', connect: 'Contacto', start: 'Proyecto' },
  hero: { 
    ...en.hero,
    title: 'Excelencia Digital por Diseño.',
    subtitle: 'Smart Solutions es un estudio de ingeniería de primer nivel. Diseñamos experiencias digitales que definen industrias.'
  },
  about: { ...en.about, identity: 'Nuestra identidad', title: 'Ingeniería de precisión.' }
};

const fr = {
  ...en,
  nav: { home: 'Accueil', lifecycle: 'Cycle', tech: 'Tech', ecosystem: 'Écosystème', anatomy: 'Anatomie', connect: 'Contact', start: 'Projet' },
  hero: { 
    ...en.hero,
    title: 'Excellence Numérique par Design.',
    subtitle: 'Smart Solutions est un studio d\'ingénierie d\'applications. Nous créons des expériences marquantes.'
  },
  about: { ...en.about, identity: 'Notre identité', title: 'Ingénierie de précision.' }
};

export const translations = {
  en,
  ar,
  ru,
  es,
  fr
};
