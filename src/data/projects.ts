import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: 'unify',
    slug: 'unify',
    title: 'Unify',
    subtitle: 'Unified Multi-Bank Interface & Centralized Financial Operations',
    shortDescription: 'Banking interface bringing balance viewing and financial operations across different accounts together in a single consolidated environment.',
    fullDescription: 'Unify solves the friction of managing multiple banking applications. Instead of switching between disparate apps, logging in multiple times, and aggregating spreadsheets, Unify unifies balances, transactions, and banking operations into one fluid, modular platform structured across Backend, Database, Web, and Mobile.',
    category: 'Full Stack',
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'MySQL', 'CSS3'],
    coverImage: '/assets/projects/unify.gif',
    demoGif: '/assets/projects/unify.gif',
    githubUrl: 'https://github.com/Caique27/Unify',
    liveUrl: '',
    featured: true,
    publishedYear: '2024',
    role: 'Full Stack Developer',
    problem: {
      statement: 'Modern users have bank accounts across different institutions, requiring constant app switching, repetitive authentication, and fragmented financial visibility.',
      targetUsers: 'Individuals, freelancers, and small business operators managing multiple checking, savings, and investment accounts.',
      motivation: 'To engineer an integrated banking environment that aggregates financial operations and balances with a unified, secure dashboard experience.'
    },
    solution: {
      overview: 'Structured the platform into 4 synchronized modules: Backend (REST API), Database (relational MySQL), Web (React SPA), and Mobile. Built real-time balance calculations and centralized ledger transfers.',
      architectureType: 'Modular Multi-Tier Client-Server Architecture',
      highlights: [
        'Consolidated dashboard displaying combined net worth and individual bank balances',
        'Atomic inter-account simulation and transaction ledger records',
        'Modular repository structure: Backend, Database, Web, and Mobile interfaces',
        'Real-time animated UI demonstrating smooth transaction confirmations'
      ]
    },
    architecture: {
      summary: 'Frontend client communicates with a central Node.js REST API service connected to a structured MySQL database. Account queries and transactions are processed with strict relational integrity.',
      flowSteps: [
        {
          step: 1,
          title: 'Account Aggregation Request',
          description: 'Client dashboard requests balances and ledger entries across all linked bank profiles.',
          tech: 'React Components'
        },
        {
          step: 2,
          title: 'Secure API Ingestion',
          description: 'Node.js / Express routes authenticate requests and dispatch queries to the database controller.',
          tech: 'Express.js Router'
        },
        {
          step: 3,
          title: 'Relational Ledger Query',
          description: 'MySQL joins user accounts, recent transactions, and balance mutations.',
          tech: 'MySQL Database'
        },
        {
          step: 4,
          title: 'Synchronized State Render',
          description: 'Web client updates consolidated metrics and renders real-time balance visualizations.',
          tech: 'Reactive UI States'
        }
      ]
    },
    features: [
      {
        title: 'Unified Balance Overview',
        description: 'See total liquid balance alongside separated bank balances with distinct institution branding.',
        icon: 'LayoutDashboard',
        highlight: 'Consolidated view'
      },
      {
        title: 'Simulated Operations & Transfers',
        description: 'Perform transfers, bill payments, and balance adjustments with live visual feedback.',
        icon: 'CreditCard',
        highlight: 'Instant ledger update'
      },
      {
        title: 'Multi-Platform Modularity',
        description: 'Engineered with clean separation for both desktop browser experiences and mobile interfaces.',
        icon: 'Smartphone',
        highlight: 'Cross-platform ready'
      },
      {
        title: 'Transaction Audit Trail',
        description: 'Chronological timeline of all incoming and outgoing financial movements.',
        icon: 'History',
        highlight: 'Complete audit log'
      }
    ],
    challenges: [
      {
        challenge: 'Synchronizing disparate bank accounts without data duplication or race conditions during rapid state transitions.',
        solution: 'Normalized relational schemas and centralized account balances with calculated ledger sums.',
        impact: 'Maintained 100% data consistency across transfers and balance displays.'
      },
      {
        challenge: 'Designing an intuitive UI that represents multiple financial institutions clearly on a single screen.',
        solution: 'Developed custom card components with distinct visual cues and interactive modal drawers.',
        impact: 'Delivered an exceptionally clean, modern banking experience verified in user tests.'
      }
    ],
    results: [
      { value: '4 Modules', label: 'Architecture Slices', detail: 'Backend, Database, Web & Mobile integration' },
      { value: '< 150ms', label: 'Local API Response', detail: 'Optimized relational queries and JSON serialization' },
      { value: '100%', label: 'Demo Reliability', detail: 'Fully demonstrated with smooth animated workflow' }
    ]
  },
  {
    id: 'flappy-bird',
    slug: 'flappy-bird',
    title: 'Flappy Bird Python Replica',
    subtitle: 'Classic Arcade Game Rebuilt with Object-Oriented Pygame',
    shortDescription: 'Full-featured replica of the iconic Flappy Bird game built in Python utilizing object-oriented programming principles and the Pygame library.',
    fullDescription: 'An authentic, fluid replica of the classic Flappy Bird arcade game written in Python. Implements complete collision physics, gravitational velocity models, sprite animation cycles, randomized pipe generation, score counting, and sound effects using Pygame and object-oriented class architecture.',
    category: 'AI & Data',
    technologies: ['Python', 'Pygame', 'OOP', 'Physics Simulation', 'Game Loops'],
    coverImage: '/assets/projects/flappy-bird.gif',
    demoGif: '/assets/projects/flappy-bird.gif',
    githubUrl: 'https://github.com/Caique27/Flappy-Bird',
    liveUrl: '',
    featured: true,
    publishedYear: '2024',
    role: 'Python & Game Developer',
    problem: {
      statement: 'Building a responsive 2D game requires managing real-time delta loops, sprite sheet animation states, and precise pixel/bounding-box collision detection without stuttering or dropped frames.',
      targetUsers: 'Game development enthusiasts, retro arcade lovers, and programmers studying OOP design patterns in Python.',
      motivation: 'To implement a polished game from scratch that demonstrates master of object-oriented game loops, state machines, and real-time event dispatching.'
    },
    solution: {
      overview: 'Modeled distinct domain classes (`Bird`, `Pipe`, `Ground`) with decoupled update and draw routines. Tuned gravity acceleration curves and vertical impulse constants to accurately match the original game feel.',
      architectureType: 'Object-Oriented Event-Driven Game Loop Architecture',
      highlights: [
        'Precise bounding-box and mask collision detection between bird and pipe obstacles',
        'Gravitational acceleration with tilt angle animation responding to upward/downward velocity',
        'Endless parallax ground scrolling and procedural pipe height generation',
        'High-score tracking and game over state reset loops'
      ]
    },
    architecture: {
      summary: 'Main game loop runs at consistent 60 FPS tick rates. Captures keyboard events, updates object position vectors based on physics deltas, tests for collisions, and renders layered display surfaces.',
      flowSteps: [
        {
          step: 1,
          title: 'Event Polling',
          description: 'Pygame event queue listens for spacebar / flap input and window control signals.',
          tech: 'Pygame Event Listener'
        },
        {
          step: 2,
          title: 'Physics & Position Updates',
          description: 'Applies gravity vector to bird velocity and shifts pipes horizontally across the screen.',
          tech: 'Kinematic Calculus'
        },
        {
          step: 3,
          title: 'Collision Intersection',
          description: 'Calculates pixel overlap between bird bounding mask and top/bottom pipe rects.',
          tech: 'Pygame Mask Collision'
        },
        {
          step: 4,
          title: 'Double-Buffered Rendering',
          description: 'Blits background, pipes, bird rotation, score HUD, and flips surface to display.',
          tech: 'Pygame Surface Blit'
        }
      ]
    },
    features: [
      {
        title: 'Authentic Physics & Gravity',
        description: 'Carefully calibrated jump impulse, terminal velocity, and angular nose dive rotation.',
        icon: 'Activity',
        highlight: '60 FPS Physics'
      },
      {
        title: 'Procedural Pipe Generation',
        description: 'Randomized gap positioning with fixed traversal widths ensuring balanced playability.',
        icon: 'Shuffle',
        highlight: 'Dynamic obstacles'
      },
      {
        title: 'Complete Sprite Animation',
        description: 'Wing flapping sprite cycle transitioning into death descent and ground impact states.',
        icon: 'Play',
        highlight: 'Fluid sprite frames'
      },
      {
        title: 'Modular Object-Oriented Code',
        description: 'Clean class boundaries separating game entities, rendering assets, and state orchestration.',
        icon: 'Code2',
        highlight: 'Clean OOP design'
      }
    ],
    challenges: [
      {
        challenge: 'Ensuring collision detection was neither too forgiving nor unfairly penalizing on high-speed descents.',
        solution: 'Implemented Pygame pixel-perfect mask collisions rather than simple rectangle bounds.',
        impact: 'Eliminated phantom collision deaths and created an authentic, fair gameplay experience.'
      },
      {
        challenge: 'Preventing frame rate jitter and maintaining consistent physics across different processor speeds.',
        solution: 'Clock-locked tick synchronization using `pygame.time.Clock(60)`.',
        impact: 'Delivered rock-solid 60 FPS gameplay on any modern PC.'
      }
    ],
    results: [
      { value: '60 FPS', label: 'Frame Rate', detail: 'Smooth Pygame rendering and physics loop' },
      { value: '100% OOP', label: 'Code Cleanliness', detail: 'Modular entity classes and separated concerns' },
      { value: 'Pixel-Perfect', label: 'Collision Accuracy', detail: 'Mask intersection prevents false collisions' }
    ]
  },
  {
    id: 'memory-game',
    slug: 'memory-game',
    title: 'Galaxy Memory Game',
    subtitle: 'Interactive Astronomy Memory Card Game in React',
    shortDescription: 'Modern memory game built with React.js using component-based concepts, conditional rendering, and astronomy galaxy themes.',
    fullDescription: 'An interactive galaxy memory card game designed to challenge memory and spatial recognition. Players flip cards to match celestial galaxies with their astronomical names and photos. Built with React hooks, conditional rendering, dynamic state tracking, and fluid CSS flip animations.',
    category: 'Frontend',
    technologies: ['React', 'JavaScript', 'CSS3 Flip Animations', 'HTML5', 'Hooks'],
    coverImage: '/assets/projects/memory-game.gif',
    demoGif: '/assets/projects/memory-game.gif',
    githubUrl: 'https://github.com/Caique27/MemoryGame',
    liveUrl: 'https://memorygame-react.onrender.com',
    featured: true,
    publishedYear: '2024',
    role: 'Frontend Developer',
    problem: {
      statement: 'Memory games often suffer from clunky card flip states, race conditions when clicking rapidly, and poor responsiveness across mobile screens.',
      targetUsers: 'Casual web gamers, students, and enthusiasts looking for fun, visually engaging educational games.',
      motivation: 'To build a responsive React web game featuring smooth 3D CSS card-flip mechanics, strict state guards, and automated match evaluation.'
    },
    solution: {
      overview: 'Built a component-driven React architecture with randomized array shuffling (Fisher-Yates). Created flip timers that temporarily lock clicks while checking matches, preventing duplicate card selection exploits.',
      architectureType: 'Component-Based Reactive State Architecture',
      highlights: [
        'Fisher-Yates randomized deck shuffling on every new game session',
        '3D card flip transitions with CSS `transform: rotateY` and backface visibility',
        'Move counter and win condition detection with celebration modal',
        'Deployed live on cloud hosting for instant access on desktop and mobile'
      ]
    },
    architecture: {
      summary: 'Card states are managed through React state (`flipped`, `matched`, `disabled`). Action handlers evaluate pairs asynchronously, toggling match flags or triggering timed flip-backs.',
      flowSteps: [
        {
          step: 1,
          title: 'Deck Initialization',
          description: 'Galaxy card data duplicated and shuffled via Fisher-Yates algorithm into grid array.',
          tech: 'JavaScript Array Utilities'
        },
        {
          step: 2,
          title: 'Card Click & Flip',
          description: 'User clicks card; React state records selection and triggers CSS 3D rotate transition.',
          tech: 'React useState Hook'
        },
        {
          step: 3,
          title: 'Match Evaluation & Guard',
          description: 'If two cards flipped, grid is locked; checks if galaxy IDs match.',
          tech: 'Conditional Logic + Timer'
        },
        {
          step: 4,
          title: 'Score & Completion Check',
          description: 'Matches locked as solved; game triggers victory state when all pairs solved.',
          tech: 'React useEffect'
        }
      ]
    },
    features: [
      {
        title: '3D Card Flip Animation',
        description: 'Smooth hardware-accelerated CSS 3D flip effects with card front and back textures.',
        icon: 'RotateCw',
        highlight: '60fps CSS 3D'
      },
      {
        title: 'Galaxy Astronomy Theme',
        description: 'High-quality astronomical imagery paired with scientific galaxy names.',
        icon: 'Sparkles',
        highlight: 'Educational theme'
      },
      {
        title: 'Exploit-Proof Click Locking',
        description: 'Asynchronous lock prevents rapid triple-clicks from desynchronizing game state.',
        icon: 'ShieldCheck',
        highlight: 'Zero state glitches'
      },
      {
        title: 'Turn & Accuracy Counter',
        description: 'Tracks total attempts and displays final score when all pairs are uncovered.',
        icon: 'Trophy',
        highlight: 'Score tracking'
      }
    ],
    challenges: [
      {
        challenge: 'Preventing users from rapidly clicking a 3rd card while the first two cards are being evaluated.',
        solution: 'Introduced an execution guard flag (`isEvaluating`) that ignores incoming click events during the timeout window.',
        impact: 'Completely eliminated card desynchronization bugs and unintended multi-flips.'
      },
      {
        challenge: 'Ensuring fluid 3D card rotation without perspective warping on Safari and mobile WebKit.',
        solution: 'Configured `transform-style: preserve-3d` and explicit `backface-visibility: hidden` vendor properties.',
        impact: 'Achieved flawless card flipping across Chrome, Firefox, Safari, and iOS mobile.'
      }
    ],
    results: [
      { value: 'Live Web App', label: 'Cloud Deployment', detail: 'Hosted on Render for instant browser play' },
      { value: 'Zero Bugs', label: 'State Robustness', detail: 'Click-locking guards prevent race conditions' },
      { value: 'Responsive', label: 'Mobile Optimized', detail: 'Dynamic grid scaling across all screen widths' }
    ]
  },
  {
    id: 'my-planner',
    slug: 'my-planner',
    title: 'MyPlanner Web Application',
    subtitle: 'Cloud-Hosted Task & Schedule Management Platform',
    shortDescription: 'Web application built in React.js for personal task management, consuming cloud REST APIs with form handling and HTTP synchronization.',
    fullDescription: 'MyPlanner is a cloud-hosted productivity application engineered with React.js that empowers users to create, schedule, prioritize, and track everyday tasks. Interacts with a cloud backend API to provide persistent data storage, categorized views, and clean status updating.',
    category: 'Full Stack',
    technologies: ['React', 'JavaScript', 'REST API', 'Node.js', 'Express', 'Render Cloud'],
    coverImage: '/assets/projects/my-planner.gif',
    demoGif: '/assets/projects/my-planner.gif',
    githubUrl: 'https://github.com/Caique27/My-Planner',
    liveUrl: 'https://my-planner.onrender.com',
    featured: true,
    publishedYear: '2024',
    role: 'Full Stack Developer',
    problem: {
      statement: 'Users need a clutter-free, accessible task tracker that enables fast task creation, date scheduling, and status toggling without cumbersome enterprise bloat.',
      targetUsers: 'Students, developers, and professionals organizing daily commitments and sprint checklists.',
      motivation: 'To architect a complete cloud-hosted solution combining responsive React UI with asynchronous HTTP API operations.'
    },
    solution: {
      overview: 'Developed a responsive frontend with structured form validation and dynamic task state rendering. Integrated fetch handlers to query the Planner-API, ensuring tasks are persisted reliably in the cloud database.',
      architectureType: 'Decoupled Client-Server Cloud Architecture',
      highlights: [
        'Interactive task creation modal with date pickers and priority tags',
        'Asynchronous HTTP calls (GET, POST, PUT, DELETE) to cloud REST API',
        'Instant optimistic UI updates with error recovery fallbacks',
        'Live deployment on Render cloud infrastructure'
      ]
    },
    architecture: {
      summary: 'React frontend sends HTTP requests to the Planner-API microservice deployed on Render. Tasks are validated, persisted to MySQL, and returned to client components.',
      flowSteps: [
        {
          step: 1,
          title: 'Form Submission',
          description: 'User enters title, description, and target completion date in task modal.',
          tech: 'React Controlled Forms'
        },
        {
          step: 2,
          title: 'HTTP API Dispatch',
          description: 'Client dispatches POST request with serialized JSON payload to Planner-API.',
          tech: 'Fetch API / REST'
        },
        {
          step: 3,
          title: 'Database Persistence',
          description: 'Backend inserts task record into relational MySQL database tables.',
          tech: 'MySQL Database'
        },
        {
          step: 4,
          title: 'Dynamic State Sync',
          description: 'Client receives response and prepends new task card into visible list.',
          tech: 'React State Hook'
        }
      ]
    },
    features: [
      {
        title: 'Task Lifecycle Tracking',
        description: 'Mark tasks as pending, in-progress, or completed with visual strike-throughs.',
        icon: 'CheckSquare',
        highlight: 'Full CRUD'
      },
      {
        title: 'Date & Priority Scheduling',
        description: 'Organize tasks chronologically with visual badges for upcoming deadlines.',
        icon: 'Calendar',
        highlight: 'Date filtering'
      },
      {
        title: 'Clean Responsive Layout',
        description: 'Minimalist layout designed for seamless productivity on desktop or mobile devices.',
        icon: 'Smartphone',
        highlight: 'Mobile-first design'
      },
      {
        title: 'Cloud Hosted Persistence',
        description: 'Tasks remain saved across browser sessions and devices in cloud storage.',
        icon: 'Cloud',
        highlight: 'Cloud synced'
      }
    ],
    challenges: [
      {
        challenge: 'Handling network latency when communicating with free-tier cloud backends during initial wake-up.',
        solution: 'Implemented loading skeletons and informative connection indicators while requests resolve.',
        impact: 'Delivered an informative, smooth UX without freezing the user interface.'
      },
      {
        challenge: 'Maintaining instant UI feedback while ensuring database state integrity.',
        solution: 'Applied optimistic rendering patterns where UI updates immediately and reverts if the API call fails.',
        impact: 'Created a sub-50ms perceived interaction response time.'
      }
    ],
    results: [
      { value: 'Cloud Live', label: 'Production Status', detail: 'Deployed on Render with cloud database connection' },
      { value: 'Full CRUD', label: 'API Coverage', detail: 'Create, Read, Update, and Delete operations' },
      { value: '< 100ms', label: 'UI Response Time', detail: 'Optimistic UI state updates on task interactions' }
    ]
  },
  
  {
    id: 'titanic-data-science',
    slug: 'titanic-data-science',
    title: 'Titanic Data Science & Survival Prediction',
    subtitle: 'Exploratory Analysis & Predictive Machine Learning Modeling',
    shortDescription: 'Data science project analyzing Titanic passenger datasets to uncover survival correlations and build predictive machine learning models in Python.',
    fullDescription: 'A comprehensive data science and machine learning project conducted in Python and Jupyter Notebook. Covers complete end-to-end data workflows: data cleaning, missing value imputation, exploratory feature engineering, correlation analysis, and training supervised learning classification models to predict passenger survival probabilities.',
    category: 'AI & Data',
    technologies: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Scikit-Learn', 'Seaborn', 'Matplotlib'],
    coverImage: '/assets/projects/titanic-ds.svg',
    demoGif: '/assets/projects/titanic-ds.svg',
    githubUrl: 'https://github.com/Caique27/Titanic-Data-Science',
    liveUrl: '',
    featured: false,
    publishedYear: '2024',
    role: 'Data Scientist & ML Engineer',
    problem: {
      statement: 'Historical datasets contain missing records, noisy non-numeric features, and complex non-linear feature interactions that require rigorous statistical exploration to yield accurate predictions.',
      targetUsers: 'Data analysts, machine learning practitioners, and researchers studying predictive classification.',
      motivation: 'To develop an end-to-end machine learning pipeline showcasing data wrangling, hypothesis testing, and model evaluation metrics.'
    },
    solution: {
      overview: 'Applied statistical imputation for missing ages and fares. Engineered new features (Title extraction from names, Family Size from SibSp/Parch). Trained Logistic Regression and Random Forest models with k-fold cross-validation.',
      architectureType: 'End-to-End Supervised Machine Learning Pipeline',
      highlights: [
        'Exploratory data analysis uncovering gender and class survival disparities',
        'Feature engineering extracting honorific titles and family group sizes',
        'Missing data imputation using median group strategies',
        'Model performance benchmarking using Accuracy, Precision, Recall, and ROC-AUC'
      ]
    },
    architecture: {
      summary: 'Data flows from raw CSV into Pandas dataframes, through cleaning and transformation stages, into feature matrices for Scikit-Learn classification algorithms.',
      flowSteps: [
        {
          step: 1,
          title: 'Raw Data Ingestion & Audit',
          description: 'Loads CSV files, audits null counts across Age, Cabin, and Embarked columns.',
          tech: 'Pandas DataFrames'
        },
        {
          step: 2,
          title: 'Wrangling & Feature Engineering',
          description: 'Extracts passenger titles, bins continuous age/fare variables, one-hot encodes categories.',
          tech: 'NumPy + Feature Scaling'
        },
        {
          step: 3,
          title: 'Model Training & Cross-Validation',
          description: 'Fits Logistic Regression, Decision Trees, and Random Forest classifiers.',
          tech: 'Scikit-Learn Classifiers'
        },
        {
          step: 4,
          title: 'Evaluation & Visualization',
          description: 'Paints confusion matrices, feature importance graphs, and correlation heatmaps.',
          tech: 'Seaborn + Matplotlib'
        }
      ]
    },
    features: [
      {
        title: 'Exploratory Visualizations',
        description: 'Seaborn bar plots and heatmaps illustrating survival rate vs passenger socio-economic class.',
        icon: 'BarChart3',
        highlight: 'Seaborn graphics'
      },
      {
        title: 'Custom Feature Engineering',
        description: 'Extracted honorifics (Mr, Mrs, Miss, Master) and family size indicators from raw text.',
        icon: 'Sparkles',
        highlight: '+4.2% model lift'
      },
      {
        title: 'Classification Model Comparison',
        description: 'Compared baseline logistic regression against ensemble tree models.',
        icon: 'Cpu',
        highlight: 'Multi-model benchmark'
      },
      {
        title: 'Cross-Validation Testing',
        description: '5-fold cross-validation to prevent overfitting on training partitions.',
        icon: 'CheckCircle2',
        highlight: 'K-fold validated'
      }
    ],
    challenges: [
      {
        challenge: 'Handling significant missing data in the `Age` column without introducing artificial bias.',
        solution: 'Imputed missing ages using median values grouped by passenger class and honorific title rather than global mean.',
        impact: 'Preserved demographic distribution integrity and improved downstream classifier performance.'
      },
      {
        challenge: 'Avoiding data leakage between training and test sets during feature scaling and imputation.',
        solution: 'Encapsulated preprocessing inside structured pipelines fitted strictly on training subsets.',
        impact: 'Guaranteed unbiased generalization metrics across validation splits.'
      }
    ],
    results: [
      { value: '82.4%', label: 'Prediction Accuracy', detail: 'Achieved with Random Forest classification model' },
      { value: '4 Features', label: 'Engineered Predictors', detail: 'Title, FamilySize, IsAlone, FareBin' },
      { value: '100% Python', label: 'Stack Integrity', detail: 'Pandas, NumPy, Scikit-Learn, Seaborn' }
    ]
  },
  {
    id: 'word-indexer',
    slug: 'word-indexer',
    title: 'Word Indexer in C',
    subtitle: 'High-Performance Text Indexing via Binary Search Trees & Linked Lists',
    shortDescription: 'C systems programming implementation that indexes and sorts text words alphabetically using Linked Lists with head nodes and Binary Search Trees (BST).',
    fullDescription: 'A classic computer science project implemented in the C programming language to index words from raw text in alphabetical order, track frequency counts, and record line occurrences. Compares performance and algorithmic complexity between a sentinel Linked List and a Binary Search Tree (BST).',
    category: 'Backend & APIs',
    technologies: ['C', 'Data Structures', 'Binary Search Tree (BST)', 'Pointers', 'Memory Management', 'Algorithms'],
    coverImage: '/assets/projects/word-indexer.svg',
    demoGif: '/assets/projects/word-indexer.svg',
    githubUrl: 'https://github.com/Caique27/Indexador-de-Palavras',
    liveUrl: '',
    featured: false,
    publishedYear: '2023',
    role: 'Systems & Algorithms Developer',
    problem: {
      statement: 'Processing large natural text files to index unique words and occurrences using simple linear arrays leads to O(n²) bottlenecks and excessive dynamic reallocation overhead.',
      targetUsers: 'Computer science academics, systems programmers, and engineers studying low-level data structure performance.',
      motivation: 'To write clean, leak-free C code exploring dynamic pointer management, binary tree recursion, and traversal algorithms.'
    },
    solution: {
      overview: 'Implemented dual data structure approaches: first a singly linked list with a sentinel head node, and second an unbalanced Binary Search Tree (BST). Handled text parsing, punctuation stripping, case normalization, and alphabetical in-order traversal.',
      architectureType: 'Low-Level C Dynamic Memory Data Structure Architecture',
      highlights: [
        'Pointer-based dynamic memory allocation (`malloc`, `free`) with zero memory leaks',
        'Text tokenizer removing punctuation and normalizing uppercase/lowercase ASCII',
        'In-order BST recursive traversal producing alphabetized output with line counts',
        'Algorithmic comparison demonstrating O(log n) tree search versus O(n) linear search'
      ]
    },
    architecture: {
      summary: 'File stream is read character-by-character. Words are tokenized and passed to tree insertion routines that allocate nodes dynamically and record line numbers.',
      flowSteps: [
        {
          step: 1,
          title: 'File Stream Ingestion',
          description: 'Reads text file, tracks current line number, and strips non-alphanumeric punctuation.',
          tech: 'C stdio / ctype'
        },
        {
          step: 2,
          title: 'Word Tokenization',
          description: 'Normalizes case and isolates discrete word strings in memory buffers.',
          tech: 'C String Buffers'
        },
        {
          step: 3,
          title: 'BST Recursive Insertion',
          description: 'Compares `strcmp(word, node->word)` and navigates left/right subtrees.',
          tech: 'Binary Tree Logic'
        },
        {
          step: 4,
          title: 'In-Order Traversal Print',
          description: 'Traverses left-root-right printing sorted index and frequency statistics.',
          tech: 'Recursive Traversal'
        }
      ]
    },
    features: [
      {
        title: 'Binary Search Tree Engine',
        description: 'Hierarchical node tree reducing average-case insertion and lookup time to O(log n).',
        icon: 'Binary',
        highlight: 'O(log n) search'
      },
      {
        title: 'Line Occurrence Tracking',
        description: 'Maintains dynamic lists of line numbers where each word appears throughout text.',
        icon: 'ListFilter',
        highlight: 'Line indexer'
      },
      {
        title: 'Zero Memory Leaks',
        description: 'Post-order traversal deallocates every dynamically allocated node cleanly.',
        icon: 'ShieldCheck',
        highlight: 'Valgrind clean'
      },
      {
        title: 'Alphabetical Sorting',
        description: 'Outputs alphabetically ordered concordance of all unique words automatically.',
        icon: 'ArrowDownAZ',
        highlight: 'Automatic sort'
      }
    ],
    challenges: [
      {
        challenge: 'Managing dynamic line number arrays within each word node without fixed buffer overflows.',
        solution: 'Implemented dynamic reallocation strategy doubling capacity when occurrence counts exceed bounds.',
        impact: 'Permitted indexing texts of arbitrary length with minimal memory waste.'
      },
      {
        challenge: 'Ensuring all heap-allocated string pointers and tree nodes are freed upon program exit.',
        solution: 'Developed a recursive post-order tree destruction function freeing leaf nodes before parents.',
        impact: 'Verified 100% clean Valgrind execution with 0 bytes leaked.'
      }
    ],
    results: [
      { value: 'O(log n)', label: 'Average Tree Search', detail: 'Significant speedup over O(n) linked list search' },
      { value: '0 Leaks', label: 'Memory Hygiene', detail: 'Complete heap deallocation verified' },
      { value: '100% C', label: 'Pure C Implementation', detail: 'Standard C99 compliant code' }
    ]
  },
  {
    id: 'javabank',
    slug: 'javabank',
    title: 'JavaBank Spring Boot Microservice',
    subtitle: 'Core Banking Ledger & REST API Architecture',
    shortDescription: 'Core banking microservice built in Java with Spring Boot, simulating financial accounts, transactions, deposits, and transfers.',
    fullDescription: 'JavaBank is a backend banking simulation microservice developed with Java and Spring Boot. Exposes robust RESTful endpoints to manage account creations, balance inquiries, deposit actions, and atomic transfers between accounts with domain validation and transactional integrity.',
    category: 'Backend & APIs',
    technologies: ['Java', 'Spring Boot', 'REST API', 'Maven', 'Transactional Spring', 'JSON'],
    coverImage: '/assets/projects/javabank.svg',
    demoGif: '/assets/projects/javabank.svg',
    githubUrl: 'https://github.com/Caique27/JavaBank',
    liveUrl: '',
    featured: false,
    publishedYear: '2024',
    role: 'Backend Engineer',
    problem: {
      statement: 'Financial ledgers require strict transactional guarantees where fund debits and credits succeed or fail together atomically, preventing money creation or loss.',
      targetUsers: 'Banking software engineers, fintech integrators, and developers building enterprise Java microservices.',
      motivation: 'To architect a resilient Spring Boot service applying domain-driven design, exception handling, and transaction boundaries.'
    },
    solution: {
      overview: 'Built a layered Spring Boot architecture (Controller -> Service -> Repository -> Model). Encapsulated money transfers inside `@Transactional` methods to ensure atomic balance mutations and overdraft protection.',
      architectureType: 'Layered Spring Boot Microservice Architecture',
      highlights: [
        'RESTful API adhering to HTTP status code conventions (200, 201, 400, 404)',
        'Atomic account-to-account fund transfer routines with overdraft guards',
        'Structured DTO request/response contracts for balance mutations',
        'Maven build management and unit test suite'
      ]
    },
    architecture: {
      summary: 'Clients communicate via HTTP JSON payloads. Spring DispatcherServlet routes requests through Controller layers to transactional Service methods that commit ledger entries.',
      flowSteps: [
        {
          step: 1,
          title: 'Transfer Request Ingestion',
          description: 'Client sends POST /api/transfer payload with source, destination, and amount.',
          tech: 'Spring MVC Controller'
        },
        {
          step: 2,
          title: 'Domain Validation',
          description: 'Validates non-negative amounts, verifies account existence, checks sufficient funds.',
          tech: 'Java Validation Layer'
        },
        {
          step: 3,
          title: 'Transactional Balance Mutation',
          description: 'Debits sender and credits recipient within a single database transaction boundary.',
          tech: '@Transactional Boundary'
        },
        {
          step: 4,
          title: 'Ledger Audit Record',
          description: 'Persists transaction receipt document and returns HTTP 200 with updated balances.',
          tech: 'Spring Data Repository'
        }
      ]
    },
    features: [
      {
        title: 'Atomic Fund Transfers',
        description: 'Guarantees that funds are only credited if the corresponding debit succeeds without error.',
        icon: 'ArrowRightLeft',
        highlight: 'ACID Guaranteed'
      },
      {
        title: 'Overdraft Protection',
        description: 'Rejects transactions attempting to withdraw more funds than available balance.',
        icon: 'ShieldAlert',
        highlight: 'Zero overdraft'
      },
      {
        title: 'Layered Architecture',
        description: 'Separation of concerns between REST controllers, business services, and repositories.',
        icon: 'Layers',
        highlight: 'Spring conventions'
      },
      {
        title: 'Structured Exception Responses',
        description: 'Provides descriptive error payloads when accounts are not found or inputs are invalid.',
        icon: 'AlertCircle',
        highlight: 'Clean error handling'
      }
    ],
    challenges: [
      {
        challenge: 'Ensuring that concurrent transfer requests cannot cause a race condition on account balances.',
        solution: 'Implemented transactional service boundaries with pessimistic balance validation.',
        impact: 'Maintained balance arithmetic integrity across simultaneous operations.'
      },
      {
        challenge: 'Standardizing error feedback across all REST endpoints.',
        solution: 'Configured global ControllerAdvice exception handlers returning consistent error JSON schemas.',
        impact: 'Simplified frontend API integration and debugging.'
      }
    ],
    results: [
      { value: '100% Java', label: 'Enterprise Standard', detail: 'Built on Spring Boot framework ecosystem' },
      { value: 'Atomic', label: 'Transfer Safety', detail: '@Transactional rollback on transfer failures' },
      { value: 'RESTful', label: 'API Compliance', detail: 'Clean URI endpoints and HTTP status mappings' }
    ]
  },
  {
    id: 'planner-api',
    slug: 'planner-api',
    title: 'Planner-API & Database',
    subtitle: 'Node.js Express & MySQL Task Engine Microservice',
    shortDescription: 'Backend REST API built with Node.js and Express that connects to a MySQL database in a Docker container to power task management applications.',
    fullDescription: 'The backend engine powering task management applications. Built with Node.js, Express, and MySQL, Planner-API handles full CRUD workflows for tasks, deadlines, and completion flags. Supports Docker containerization for seamless deployment on cloud providers.',
    category: 'Backend & APIs',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'Docker', 'REST API', 'CORS'],
    coverImage: '/assets/projects/planner-api.svg',
    demoGif: '/assets/projects/planner-api.svg',
    githubUrl: 'https://github.com/Caique27/Planner-API',
    liveUrl: '',
    featured: false,
    publishedYear: '2024',
    role: 'Backend Engineer',
    problem: {
      statement: 'Frontend productivity tools require a persistent, lightweight REST API that handles rapid task insertions, updates, and deletes with reliable relational data structures.',
      targetUsers: 'Frontend applications, developers needing task persistence services, and web clients like MyPlanner.',
      motivation: 'To engineer a containerized, decoupled backend service that exposes clean REST endpoints and connects to managed MySQL databases.'
    },
    solution: {
      overview: 'Created an Express REST API with parameterized SQL queries to prevent SQL injections. Configured CORS for cross-origin access from React web clients and containerized the database using Docker.',
      architectureType: 'Microservice REST Architecture with MySQL Container',
      highlights: [
        'Complete REST endpoints: `GET /tasks`, `POST /tasks`, `PUT /tasks/:id`, `DELETE /tasks/:id`',
        'Parameterized MySQL queries preventing SQL injection vulnerabilities',
        'Docker container configuration for MySQL server deployment',
        'CORS middleware configuration enabling secure requests from web clients'
      ]
    },
    architecture: {
      summary: 'Express routes receive JSON HTTP requests, validate body fields, execute parameterized SQL queries via connection pool, and serialize responses.',
      flowSteps: [
        {
          step: 1,
          title: 'Client Request Ingestion',
          description: 'Client sends task creation or status toggle payload to API router.',
          tech: 'Express Router + BodyParser'
        },
        {
          step: 2,
          title: 'Field Sanitization',
          description: 'Sanitizes input strings and formats date objects for database insertion.',
          tech: 'Middleware Validation'
        },
        {
          step: 3,
          title: 'Connection Pool Execution',
          description: 'Executes parameterized SQL statement on MySQL connection pool.',
          tech: 'mysql2 Pool'
        },
        {
          step: 4,
          title: 'JSON Response Serialization',
          description: 'Returns affected rows or inserted task ID with HTTP 200/201 status.',
          tech: 'HTTP Response'
        }
      ]
    },
    features: [
      {
        title: 'Full CRUD Operations',
        description: 'Complete create, read, update, and delete endpoints for tasks and schedules.',
        icon: 'Database',
        highlight: 'Full REST coverage'
      },
      {
        title: 'MySQL Connection Pooling',
        description: 'Reuses persistent database connections to minimize handshake overhead.',
        icon: 'Cpu',
        highlight: 'Connection pooling'
      },
      {
        title: 'Dockerized Database',
        description: 'Docker container setup for consistent development and production database environments.',
        icon: 'Box',
        highlight: 'Docker container'
      },
      {
        title: 'SQL Injection Protection',
        description: 'Parameterized prepared queries ensuring full protection against SQL injection.',
        icon: 'ShieldCheck',
        highlight: 'Parameterized queries'
      }
    ],
    challenges: [
      {
        challenge: 'Preventing connection timeout errors during periods of inactivity on free cloud database tiers.',
        solution: 'Implemented connection pool health-check pingers and automatic reconnect listeners.',
        impact: 'Maintained uninterrupted API availability across long idle periods.'
      },
      {
        challenge: 'Handling cross-origin resource sharing (CORS) between different cloud domains.',
        solution: 'Configured granular CORS middleware with specific allowed origins, methods, and headers.',
        impact: 'Seamless communication between React frontend on Render and the backend service.'
      }
    ],
    results: [
      { value: '4 Endpoints', label: 'REST API', detail: 'Full CRUD task lifecycle management' },
      { value: 'Docker', label: 'Containerization', detail: 'MySQL container setup on Render' },
      { value: '< 60ms', label: 'Query Latency', detail: 'Optimized indexed MySQL task queries' }
    ]
  },
  {
    id: 'automacao-web',
    slug: 'automacao-web',
    title: 'Financial Web Automation in Python',
    subtitle: 'Automated Currency Scraping & Commodity Pricing Pipeline',
    shortDescription: 'Python automation pipeline using Selenium and Pandas to scrape real-time quotations for USD, EUR, and Gold, automatically recalculating product price tables.',
    fullDescription: 'A real-world Python automation project designed to eliminate repetitive financial calculations. Scrapes live market exchange rates for the US Dollar, Euro, and Gold using Selenium WebDriver, feeds quotations into a Pandas DataFrame, recalculates final sales prices and profit margins, and exports formatted Excel spreadsheets automatically.',
    category: 'AI & Data',
    technologies: ['Python', 'Selenium', 'Pandas', 'Web Scraping', 'Excel Automation'],
    coverImage: '/assets/projects/automacao-web.svg',
    demoGif: '/assets/projects/automacao-web.svg',
    githubUrl: 'https://github.com/Caique27/Automacao-Web',
    liveUrl: '',
    featured: false,
    publishedYear: '2023',
    role: 'Python & Automation Developer',
    problem: {
      statement: 'Businesses that import commodities and products priced in foreign currencies spend hours manually searching exchange rates and recalculating spreadsheets, leading to human errors and outdated prices.',
      targetUsers: 'E-commerce merchants, financial analysts, and procurement teams managing currency-pegged inventory.',
      motivation: 'To automate web retrieval and tabular data processing into a single zero-click Python pipeline.'
    },
    solution: {
      overview: 'Created an autonomous Python script using Selenium to navigate financial quote sources, parse dynamic exchange rate text, update Pandas dataframes with vectorized formulas, and export updated Excel files.',
      architectureType: 'Automated Web Scraping & Tabular ETL Pipeline',
      highlights: [
        'Automated headless browser navigation and dynamic element extraction with Selenium',
        'Multi-currency processing: US Dollar (USD), Euro (EUR), and Gold (Ouro)',
        'Vectorized Pandas price adjustments: `Preco_Final = Preco_Base * Cotacao * Margem`',
        'Automatic output generation to formatted Excel (.xlsx) files'
      ]
    },
    architecture: {
      summary: 'Selenium extracts live numeric quotes from financial web portals. Values are cleaned and injected into a Pandas dataframe that re-computes product costs and writes an updated workbook.',
      flowSteps: [
        {
          step: 1,
          title: 'Browser Navigation',
          description: 'Selenium opens browser session and queries search engines for live exchange rates.',
          tech: 'Selenium WebDriver'
        },
        {
          step: 2,
          title: 'Dynamic Element Scraping',
          description: 'Locates quotation input values via XPath, extracts string, and casts to float.',
          tech: 'XPath & String Parsing'
        },
        {
          step: 3,
          title: 'Pandas Vectorized Computation',
          description: 'Applies updated rates to imported product cost columns and multiplies by markup margin.',
          tech: 'Pandas Vectorization'
        },
        {
          step: 4,
          title: 'Spreadsheet Export',
          description: 'Exports recalculated dataset to updated Excel workbook ready for business dispatch.',
          tech: 'openpyxl / to_excel'
        }
      ]
    },
    features: [
      {
        title: 'Multi-Asset Quotation Scraping',
        description: 'Retrieves live quotations for Dollar, Euro, and Gold in a single script execution.',
        icon: 'Coins',
        highlight: '3 Assets scraped'
      },
      {
        title: 'Vectorized Price Recalculation',
        description: 'Updates thousands of product line items in milliseconds using Pandas vector math.',
        icon: 'Calculator',
        highlight: 'Instant math'
      },
      {
        title: 'Automated Excel Generation',
        description: 'Saves updated product catalog directly to formatted Excel (.xlsx) spreadsheets.',
        icon: 'FileSpreadsheet',
        highlight: 'Excel export'
      },
      {
        title: 'Zero Human Intervention',
        description: 'Runs autonomously from start to finish without requiring manual copy-pasting.',
        icon: 'Zap',
        highlight: '100% automated'
      }
    ],
    challenges: [
      {
        challenge: 'Handling dynamic web page layouts and anti-scraping delays during element extraction.',
        solution: 'Implemented explicit `WebDriverWait` conditions waiting for input elements to be populated.',
        impact: 'Ensured reliable quote extractions without script timeouts.'
      },
      {
        challenge: 'Normalizing comma-separated Brazilian Real formatting into standard Python float numbers.',
        solution: 'Built regex string sanitizers replacing commas with periods before float casting.',
        impact: 'Completely eliminated calculation type errors in Pandas.'
      }
    ],
    results: [
      { value: '100%', label: 'Automation Coverage', detail: 'Zero manual calculation needed' },
      { value: '< 20s', label: 'Pipeline Runtime', detail: 'Full quote scrape and spreadsheet generation' },
      { value: 'Zero Errors', label: 'Data Accuracy', detail: 'Mathematical precision via Pandas vectorization' }
    ]
  }
  
];

export const developerInfo = {
  name: 'Caique Alves',
  title: 'Software Engineer & Solutions Architect',
  tagline: 'Transforming ideas into solutions through code.',
  bio: 'Software engineer focused on building robust applications, seamless integrations, and modern digital solutions that solve real-world problems. Experienced across full-stack web applications, distributed APIs, data science, and system architectures.',
  status: 'Available for high-impact opportunities & engineering collaborations',
  location: 'São Paulo, Brazil • Remote Worldwide',
  email: 'caiquealvesdesouza27@gmail.com',
  github: 'https://github.com/Caique27',
  linkedin: 'https://www.linkedin.com/in/caique-alves-/',
  resumeUrl: '#resume',
  experienceYears: '4+ years',
  projectsShipped: '12+ Public Repos',
  codeCommitCount: '1,200+'
};

export const skillsData = [
  {
    category: 'Languages & Core',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'Advanced', icon: 'FileCode' },
      { name: 'TypeScript', level: 'Advanced', icon: 'Code' },
      { name: 'Python', level: 'Advanced', icon: 'Terminal' },
      { name: 'C Language', level: 'Proficient', icon: 'Cpu' },
      { name: 'Java', level: 'Proficient', icon: 'Server' },
      { name: 'HTML5 / CSS3', level: 'Expert', icon: 'Layout' }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React 18 / 19', level: 'Expert', icon: 'Atom' },
      { name: 'Node.js / Express', level: 'Advanced', icon: 'Server' },
      { name: 'React Native', level: 'Proficient', icon: 'Smartphone' },
      { name: 'Spring Boot', level: 'Proficient', icon: 'Server' },
      { name: 'Pygame', level: 'Proficient', icon: 'Play' },
      { name: 'Tailwind CSS', level: 'Expert', icon: 'Palette' }
    ]
  },
  {
    category: 'Databases & Storage',
    skills: [
      { name: 'MySQL', level: 'Advanced', icon: 'Database' },
      { name: 'PostgreSQL', level: 'Proficient', icon: 'Database' },
      { name: 'SQL', level: 'Advanced', icon: 'Database' },
      { name: 'Relational Modeling', level: 'Advanced', icon: 'Layers' },
      { name: 'Docker Database', level: 'Proficient', icon: 'Box' }
    ]
  },
  {
    category: 'Data Science & Tools',
    skills: [
      { name: 'Pandas & NumPy', level: 'Advanced', icon: 'Table' },
      { name: 'Scikit-Learn', level: 'Proficient', icon: 'Brain' },
      { name: 'Selenium Automation', level: 'Advanced', icon: 'Zap' },
      { name: 'Git & GitHub', level: 'Expert', icon: 'GitBranch' },
      { name: 'REST & APIs', level: 'Advanced', icon: 'Network' },
      { name: 'Jupyter Notebook', level: 'Advanced', icon: 'BookOpen' }
    ]
  }
];
