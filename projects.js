/**
 * ABIVERSE — Project Data Structure
 * Centralized project information for dynamic rendering and filtering
 * Each project can be extended with additional fields as needed
 */

const PROJECTS = [
  {
    id: 'ar-alphabets',
    index: 0,
    number: '01',
    title: 'AR ALPHABETS',
    slug: 'ar-alphabets',
    category: ['AR', 'EDUCATION'],
    categories: 'ar education',
    description: 'Interactive AR alphabet learning application using Unity and Vuforia image-target tracking.',
    year: '2024',
    role: 'Developer',
    duration: '3 months',
    technologies: ['Unity', 'Vuforia', 'C#', 'AR Foundation'],
    technologies_display: 'Unity + Vuforia',

    // Visual assets
    thumbnail: 'assets/projects/ar-alphabets.jpg',
    heroImage: 'assets/projects/ar-alphabets-hero.jpg',
    gallery: [
      'assets/projects/ar-alphabets-1.jpg',
      'assets/projects/ar-alphabets-2.jpg',
      'assets/projects/ar-alphabets-3.jpg'
    ],

    // Video URL (Google Drive)
    // Format: https://drive.google.com/file/d/FILE_ID/view
    // Will be converted to preview URL for embedding
    videoUrl: 'https://drive.google.com/file/d/1Gr7kwLjAqOPFLP6XTCTjX9gXIcq_X3_7/view?usp=sharing',

    // Case study content
    problem: 'Traditional alphabet learning for young children lacks interactivity and visual engagement.',
    goal: 'Create an immersive AR experience that makes learning the alphabet engaging, interactive, and memorable.',
    process: 'Designed custom AR targets, implemented image-based tracking with Vuforia, created intuitive gesture controls, and optimized for mobile devices.',
    challenges: 'Achieving accurate image recognition across varied lighting conditions while maintaining smooth performance on mid-range devices.',
    solution: 'Implemented multiple tracking targets with fallback mechanisms and optimized model complexity for consistent 60fps performance.',
    result: 'Successfully deployed interactive AR learning tool that increases engagement by providing real-time visual feedback and interactive animations.',
    learnings: 'Deep understanding of Vuforia\'s image target optimization, mobile AR performance constraints, and user interaction design for educational content.',

    // Additional metadata
    featured: true,
    status: 'completed'
  },

  {
    id: 'ar-indoor-navigation',
    index: 1,
    number: '02',
    title: 'AR INDOOR NAVIGATION',
    slug: 'ar-indoor-navigation',
    category: ['AR', 'SPATIAL COMPUTING'],
    categories: 'ar spatial',
    description: 'AR indoor navigation application using Multiset VPS for spatial localization and indoor navigation.',
    year: '2024',
    role: 'Developer',
    duration: '4 months',
    technologies: ['Unity', 'Multiset VPS', 'C#', 'AR Foundation', 'Spatial Computing'],
    technologies_display: 'Unity + Multiset VPS',

    // Visual assets
    thumbnail: 'assets/projects/ar-navigation.jpg',
    heroImage: 'assets/projects/ar-navigation-hero.jpg',
    gallery: [
      'assets/projects/ar-navigation-1.jpg',
      'assets/projects/ar-navigation-2.jpg',
      'assets/projects/ar-navigation-3.jpg'
    ],

    // Video URL (Google Drive)
    videoUrl: 'https://drive.google.com/file/d/1Gr7kwLjAqOPFLP6XTCTjX9gXIcq_X3_7/view?usp=sharing',

    // Case study content
    problem: 'Indoor navigation systems rely on GPS which is unreliable indoors, leading to poor wayfinding experiences in large buildings.',
    goal: 'Develop an AR-based indoor navigation solution using advanced spatial computing for accurate indoor positioning.',
    process: 'Integrated Multiset VPS for indoor localization, created AR wayfinding overlay, implemented route optimization, and designed intuitive UI.',
    challenges: 'Achieving centimeter-level accuracy in complex indoor environments with variable lighting and dense infrastructure.',
    solution: 'Leveraged Multiset VPS visual markers and combined with sensor fusion for reliable positioning and smooth navigation experiences.',
    result: 'Delivered production-ready indoor navigation system enabling seamless wayfinding in complex indoor spaces.',
    learnings: 'Gained expertise in visual positioning systems, indoor spatial computing architecture, and sensor fusion algorithms.',

    featured: true,
    status: 'completed'
  },

  {
    id: 'vr-stroke-rehabilitation',
    index: 2,
    number: '03',
    title: 'VR STROKE REHABILITATION',
    slug: 'vr-stroke-rehabilitation',
    category: ['VR', 'HEALTHCARE'],
    categories: 'vr healthcare training',
    description: 'Immersive VR application for interactive stroke rehabilitation exercises.',
    year: '2024',
    role: 'Developer',
    duration: '5 months',
    technologies: ['Unity', 'Meta Quest', 'C#', 'XR Interaction Toolkit', 'Motion Tracking'],
    technologies_display: 'Unity + Meta Quest',

    // Visual assets
    thumbnail: 'assets/projects/vr-stroke.jpg',
    heroImage: 'assets/projects/vr-stroke-hero.jpg',
    gallery: [
      'assets/projects/vr-stroke-1.jpg',
      'assets/projects/vr-stroke-2.jpg',
      'assets/projects/vr-stroke-3.jpg'
    ],

    // Video URL (Google Drive)
    videoUrl: 'https://drive.google.com/file/d/1CuJ20FPt574LumyzawlK4slEuW8dr31H/view?usp=drive_link',

    // Case study content
    problem: 'Traditional physical therapy for stroke patients can be monotonous, lacks engagement, and progress tracking is manual.',
    goal: 'Create an immersive VR rehabilitation platform that motivates patients through gamification while providing therapists with quantifiable metrics.',
    process: 'Designed therapeutic exercises with progressive difficulty, implemented motion tracking and performance analytics, created engaging visual feedback systems.',
    challenges: 'Ensuring exercises remain therapeutically accurate while being engaging; handling diverse patient capabilities and limitations.',
    solution: 'Implemented adaptive difficulty systems, real-time performance metrics, and motivational visual/audio feedback loops.',
    result: 'Delivered clinical-grade VR rehabilitation platform used in healthcare facilities with improved patient compliance and measurable recovery metrics.',
    learnings: 'Deep knowledge of healthcare VR applications, patient interaction design, clinical requirements, and therapeutic efficacy validation.',

    featured: true,
    status: 'completed'
  },

  {
    id: 'vr-biosafety-cabinet',
    index: 3,
    number: '04',
    title: 'VR BIOSAFETY CABINET',
    slug: 'vr-biosafety-cabinet',
    category: ['VR', 'TRAINING SIMULATION'],
    categories: 'vr training',
    description: 'VR training simulation for learning Biosafety Cabinet operation and laboratory safety procedures.',
    year: '2024',
    role: 'Developer',
    duration: '3 months',
    technologies: ['Unity', 'Meta Quest', 'C#', 'XR Interaction Toolkit', 'Safety Protocols'],
    technologies_display: 'Unity + Meta Quest',

    // Visual assets
    thumbnail: 'assets/projects/vr-biosafety.jpg',
    heroImage: 'assets/projects/vr-biosafety-hero.jpg',
    gallery: [
      'assets/projects/vr-biosafety-1.jpg',
      'assets/projects/vr-biosafety-2.jpg',
      'assets/projects/vr-biosafety-3.jpg'
    ],

    // Video URL (Google Drive)
    videoUrl: 'https://drive.google.com/file/d/1CuJ20FPt574LumyzawlK4slEuW8dr31H/view?usp=drive_link',

    // Case study content
    problem: 'Laboratory safety training for biosafety procedures requires expensive equipment access and carries inherent safety risks during training.',
    goal: 'Create a safe, scalable VR training environment for learning biosafety cabinet operation and laboratory protocols.',
    process: 'Modeled accurate biosafety cabinet hardware, implemented interactive procedures with haptic feedback, created assessment checkpoints.',
    challenges: 'Maintaining safety accuracy while creating intuitive controls; balancing realism with usability.',
    solution: 'Implemented hands-on procedural training with real-time feedback, violation detection, and certification-ready assessment modules.',
    result: 'Deployed VR training solution reducing lab safety incidents and enabling remote training for geographically dispersed teams.',
    learnings: 'Expertise in safety-critical VR training design, compliance requirements, and hands-on simulation methodologies.',

    featured: false,
    status: 'completed'
  },

  {
    id: 'vr-bird-anatomy',
    index: 4,
    number: '05',
    title: 'VR BIRD ANATOMY',
    slug: 'vr-bird-anatomy',
    category: ['VR', 'EDUCATION', '3D'],
    categories: 'vr education 3d',
    description: 'Interactive VR application for exploring and learning bird anatomy in 3D.',
    year: '2024',
    role: 'Developer & 3D Artist',
    duration: '4 months',
    technologies: ['Unity', 'Meta Quest', 'C#', '3D Modeling', 'Interactive Visualization'],
    technologies_display: 'Unity + Meta Quest',

    // Visual assets
    thumbnail: 'assets/projects/vr-bird-anatomy.jpg',
    heroImage: 'assets/projects/vr-bird-anatomy-hero.jpg',
    gallery: [
      'assets/projects/vr-bird-anatomy-1.jpg',
      'assets/projects/vr-bird-anatomy-2.jpg',
      'assets/projects/vr-bird-anatomy-3.jpg'
    ],

    // Video URL (Google Drive)
    videoUrl: 'https://drive.google.com/file/d/1hzbbucprN9nFbFwtncpTih9w-3F0pXAU/view?usp=drive_link',

    // Case study content
    problem: '2D textbooks and videos fail to convey complex 3D biological structures, limiting student comprehension of avian anatomy.',
    goal: 'Develop an immersive 3D educational experience that allows students to explore bird anatomy from every angle with interactive learning.',
    process: 'Created detailed 3D bird models, implemented interactive layer system for anatomical components, designed guided tours and quizzes.',
    challenges: 'Achieving scientific accuracy while maintaining optimized polygon counts; balancing educational depth with user engagement.',
    solution: 'Implemented layered anatomical model system with interactive annotations, guided learning paths, and hands-on manipulation.',
    result: 'Delivered educational VR tool used in biology courses improving student understanding of complex anatomical structures.',
    learnings: 'Expertise in educational VR design, scientific visualization, 3D modeling optimization, and interactive learning methodology.',

    featured: false,
    status: 'completed'
  }
];

/**
 * Helper function to get project by ID
 */
function getProjectById(id) {
  return PROJECTS.find(p => p.id === id);
}

/**
 * Helper function to get project by index
 */
function getProjectByIndex(index) {
  return PROJECTS[index];
}

/**
 * Helper function to get all unique categories
 */
function getAllCategories() {
  const categories = new Set();
  PROJECTS.forEach(project => {
    project.category.forEach(cat => {
      categories.add(cat.toLowerCase());
    });
  });
  return Array.from(categories).sort();
}

/**
 * Helper function to filter projects by category
 */
function filterProjectsByCategory(category) {
  if (category === 'all') return PROJECTS;
  return PROJECTS.filter(project =>
    project.categories.includes(category.toLowerCase())
  );
}

/**
 * Helper function to get next/previous project
 */
function getAdjacentProject(currentIndex, direction = 'next') {
  if (direction === 'next') {
    return PROJECTS[(currentIndex + 1) % PROJECTS.length];
  } else if (direction === 'prev') {
    return PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  }
  return null;
}
