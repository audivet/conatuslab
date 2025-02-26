// curriculum.ts

interface Assessment {
    type: 'quiz' | 'project' | 'exercise' | 'coding';
    title: string;
    description: string;
    criteria: string[];
    rubric?: {
      excellent: string;
      good: string;
      needsImprovement: string;
    };
    codeStarter?: string; // For coding exercises
    expectedOutput?: string; // For coding exercises
    testCases?: Array<{input: string, output: string}>; // For coding exercises
  }
  
  interface Topic {
    title: string;
    duration: string;
    type: 'video' | 'reading' | 'exercise' | 'discussion' | 'coding' | 'interactive';
    description: string;
    keyPoints: string[];
    resources?: string[];
    assessment?: Assessment;
    videoUrl?: string; // For video content
    interactiveElements?: Array<{
      type: 'code-editor' | 'quiz' | 'drag-drop' | 'simulation';
      config: any;
    }>;
  }
  
  interface Module {
    title: string;
    duration: string;
    description: string;
    topics: Topic[];
    project: {
      title: string;
      description: string;
      objectives: string[];
      deliverables: string[];
      assessmentCriteria: string[];
    };
  }
  
  interface Course {
    id: string;
    title: string;
    description: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    prerequisites: string[];
    learningObjectives: string[];
    modules: Module[];
    certification: {
      requirements: string[];
      skills: string[];
    };
  }
  
  export const courses: Course[] = [
    {
      id: 'legal-tech-foundations',
      title: 'Legal Tech Foundations',
      description: 'Master the fundamentals of legal technology and its practical applications in modern legal practice',
      duration: '6 weeks',
      level: 'Beginner',
      prerequisites: [],
      learningObjectives: [
        'Understand the current legal technology landscape',
        'Master basic document automation principles',
        'Learn fundamental data analysis concepts',
        'Develop technology assessment skills',
        'Implement basic legal tech solutions'
      ],
      modules: [
        {
          title: 'The Digital Legal Landscape',
          duration: '1 week',
          description: 'Understand how technology is transforming legal practice and service delivery',
          topics: [
            {
              title: 'Evolution of Legal Technology',
              duration: '45 min',
              type: 'video',
              description: 'Overview of how technology has transformed legal practice over the past decade',
              keyPoints: [
                'Historical evolution of legal practice',
                'Key technological innovations in law',
                'Impact on legal service delivery',
                'Future trends and predictions',
                'Ethical considerations'
              ],
              videoUrl: '/videos/legal-tech-evolution.mp4',
              assessment: {
                type: 'quiz',
                title: 'Legal Tech Evolution Assessment',
                description: 'Test your understanding of legal technology development',
                criteria: [
                  'Understanding of historical context',
                  'Knowledge of key innovations',
                  'Awareness of current trends'
                ]
              }
            },
            {
              title: 'Legal Tech Tools Overview',
              duration: '1 hour',
              type: 'reading',
              description: 'Comprehensive survey of current legal technology tools and their applications',
              keyPoints: [
                'Document automation tools',
                'Practice management software',
                'Legal research platforms',
                'E-discovery solutions',
                'Contract analysis tools',
                'Time and billing systems'
              ],
              resources: [
                'Legal Technology Survey Report',
                'Tool Comparison Guide',
                'Implementation Case Studies'
              ]
            },
            {
              title: 'Technology Needs Assessment',
              duration: '2 hours',
              type: 'exercise',
              description: 'Learn to evaluate technology needs and solutions for legal practice',
              keyPoints: [
                'Needs assessment methodology',
                'Technology evaluation frameworks',
                'Cost-benefit analysis',
                'Implementation planning',
                'Risk assessment'
              ],
              assessment: {
                type: 'exercise',
                title: 'Practice Technology Assessment',
                description: 'Conduct a technology needs assessment for a sample law firm',
                criteria: [
                  'Thoroughness of analysis',
                  'Practical recommendations',
                  'Cost considerations',
                  'Implementation planning'
                ]
              }
            }
          ],
          project: {
            title: 'Legal Tech Landscape Analysis',
            description: 'Research and analyze the current state of legal technology in your jurisdiction',
            objectives: [
              'Map the current legal tech ecosystem',
              'Identify key trends and innovations',
              'Analyze adoption challenges',
              'Develop implementation strategies'
            ],
            deliverables: [
              'Written report (2000 words)',
              'Technology adoption roadmap',
              'Presentation slides',
              'Budget considerations'
            ],
            assessmentCriteria: [
              'Research depth and accuracy',
              'Analysis quality',
              'Practical recommendations',
              'Presentation clarity'
            ]
          }
        },
        {
          title: 'Document Automation Fundamentals',
          duration: '2 weeks',
          description: 'Learn the principles and practices of legal document automation',
          topics: [
            {
              title: 'Document Automation Principles',
              duration: '1 hour',
              type: 'video',
              description: 'Understanding the fundamentals of document automation',
              keyPoints: [
                'Document structure analysis',
                'Variable identification',
                'Template design principles',
                'Logic and conditions',
                'Quality control measures'
              ],
              videoUrl: '/videos/doc-automation-principles.mp4'
            },
            {
              title: 'Template Creation Workshop',
              duration: '3 hours',
              type: 'exercise',
              description: 'Hands-on experience creating automated document templates',
              keyPoints: [
                'Template structure setup',
                'Variable definition',
                'Conditional logic implementation',
                'Testing and validation',
                'Error handling'
              ]
            },
            {
              title: 'Advanced Automation Features',
              duration: '2 hours',
              type: 'reading',
              description: 'Explore advanced features of document automation systems',
              keyPoints: [
                'Complex logic handling',
                'Database integration',
                'API connections',
                'Workflow automation',
                'Collaboration features'
              ]
            }
          ],
          project: {
            title: 'Automated Document Suite',
            description: 'Create a suite of automated legal documents',
            objectives: [
              'Design template structure',
              'Implement variable system',
              'Create conditional logic',
              'Develop testing protocol'
            ],
            deliverables: [
              'Three automated templates',
              'Documentation guide',
              'Testing results',
              'User manual'
            ],
            assessmentCriteria: [
              'Template functionality',
              'Logic implementation',
              'Error handling',
              'Documentation quality'
            ]
          }
        },
        {
          title: 'Legal Data Management',
          duration: '1.5 weeks',
          description: 'Master the fundamentals of legal data organization and management',
          topics: [
            {
              title: 'Data Organization Principles',
              duration: '1 hour',
              type: 'video',
              description: 'Learn how to effectively organize and structure legal data',
              keyPoints: [
                'Data classification methods',
                'Metadata management',
                'File naming conventions',
                'Version control',
                'Data security basics'
              ],
              videoUrl: '/videos/data-organization.mp4'
            },
            {
              title: 'Document Management Systems',
              duration: '2 hours',
              type: 'reading',
              description: 'Understanding modern document management systems for law practices',
              keyPoints: [
                'DMS features and capabilities',
                'Implementation strategies',
                'Best practices',
                'Common pitfalls',
                'Integration considerations'
              ]
            },
            {
              title: 'Data Organization Workshop',
              duration: '3 hours',
              type: 'exercise',
              description: 'Hands-on practice organizing and managing legal documents',
              keyPoints: [
                'Creating folder structures',
                'Implementing naming conventions',
                'Setting up metadata',
                'Establishing workflows',
                'Security implementation'
              ]
            }
          ],
          project: {
            title: 'Legal Data Management System',
            description: 'Design and implement a data management system for a small law practice',
            objectives: [
              'Create organizational structure',
              'Develop metadata schema',
              'Establish workflows',
              'Implement security measures'
            ],
            deliverables: [
              'System design documentation',
              'Implementation guide',
              'Training materials',
              'Security protocol'
            ],
            assessmentCriteria: [
              'Organization efficiency',
              'Workflow design',
              'Security implementation',
              'Documentation quality'
            ]
          }
        },
        {
          title: 'Digital Security and Ethics',
          duration: '1.5 weeks',
          description: 'Understand crucial aspects of cybersecurity and ethical considerations in legal tech',
          topics: [
            {
              title: 'Cybersecurity Fundamentals',
              duration: '2 hours',
              type: 'video',
              description: 'Essential cybersecurity concepts for legal professionals',
              keyPoints: [
                'Common security threats',
                'Protection measures',
                'Data encryption',
                'Secure communication',
                'Incident response'
              ],
              videoUrl: '/videos/cybersecurity-fundamentals.mp4'
            },
            {
              title: 'Ethical Considerations',
              duration: '1.5 hours',
              type: 'reading',
              description: 'Exploring ethical implications of legal technology adoption',
              keyPoints: [
                'Professional responsibility',
                'Client confidentiality',
                'Data privacy requirements',
                'Ethical guidelines',
                'Compliance considerations'
              ]
            },
            {
              title: 'Security Assessment Exercise',
              duration: '2 hours',
              type: 'exercise',
              description: 'Conduct a security assessment of legal tech tools',
              keyPoints: [
                'Risk assessment',
                'Security audit',
                'Compliance checking',
                'Mitigation planning',
                'Documentation'
              ]
            }
          ],
          project: {
            title: 'Security and Ethics Framework',
            description: 'Develop a comprehensive security and ethics framework for legal tech implementation',
            objectives: [
              'Create security protocols',
              'Develop ethical guidelines',
              'Establish compliance procedures',
              'Design training materials'
            ],
            deliverables: [
              'Security framework document',
              'Ethical guidelines manual',
              'Training presentation',
              'Implementation checklist'
            ],
            assessmentCriteria: [
              'Comprehensiveness',
              'Practical applicability',
              'Compliance adherence',
              'Documentation clarity'
            ]
          }
        }
      ],
      certification: {
        requirements: [
          'Complete all module assessments',
          'Submit all projects',
          'Achieve minimum 70% score overall',
          'Complete practical exercises'
        ],
        skills: [
          'Legal technology assessment',
          'Basic document automation',
          'Technology implementation planning',
          'Digital transformation strategy',
          'Data management',
          'Security awareness'
        ]
      }
    },
    {
      id: 'python-legal-analysis',
      title: 'Python for Legal Analysis',
      description: 'Learn Python programming with focus on legal document analysis and data processing',
      duration: '8 weeks',
      level: 'Intermediate',
      prerequisites: ['legal-tech-foundations'],
      learningObjectives: [
        'Master Python fundamentals in legal context',
        'Develop document analysis skills with Python',
        'Build data extraction and analysis tools',
        'Create automation scripts for legal workflows',
        'Implement practical legal tech solutions'
      ],
      modules: [
        {
          title: 'Python Fundamentals for Legal Professionals',
          duration: '2 weeks',
          description: 'Learn the basics of Python programming with examples relevant to legal work',
          topics: [
            {
              title: 'Introduction to Python',
              duration: '3 hours',
              type: 'video',
              description: 'A gentle introduction to Python programming for legal professionals',
              keyPoints: [
                'Why Python for legal work',
                'Setting up your development environment',
                'Basic syntax and data types',
                'Variables and operations',
                'Control structures'
              ],
              videoUrl: '/videos/intro-python-legal.mp4'
            },
            {
              title: 'Working with Legal Text in Python',
              duration: '4 hours',
              type: 'coding',
              description: 'Learn to manipulate and analyze legal text using Python',
              keyPoints: [
                'String operations',
                'Text processing',
                'Regular expressions for legal patterns',
                'Basic text analysis',
                'Extracting information from legal documents'
              ],
              interactiveElements: [
                {
                  type: 'code-editor',
                  config: {
                    initialCode: "# Extract all case citations from the text\nimport re\n\nlegal_text = \"\"\"The court in Smith v. Jones, 123 F.3d 456 (7th Cir. 1997),\nheld that... Later, in Thompson v. Garcia, 456 F.2d 789 (9th Cir. 2001), the court expanded...\"\"\"\n\n# Write code to extract all case citations\ndef extract_citations(text):\n    # Your code here\n    pass\n\ncitations = extract_citations(legal_text)\nprint(citations)",
                    solution: "import re\n\ndef extract_citations(text):\n    pattern = r'[A-Za-z]+ v\\. [A-Za-z]+, \\d+ F\\.\\d+ \\d+ \\(\\d+[a-z]+ Cir\\. \\d+\\)'\n    citations = re.findall(pattern, text)\n    return citations\n\ncitations = extract_citations(legal_text)\nprint(citations)"
                  }
                }
              ],
              assessment: {
                type: 'coding',
                title: 'Legal Text Analysis Exercise',
                description: 'Write a Python script to analyze patterns in legal documents',
                criteria: [
                  'Correct implementation of text processing',
                  'Efficient use of regular expressions',
                  'Accuracy of information extraction',
                  'Code readability and organization'
                ],
                codeStarter: "import re\n\ndef analyze_document(text):\n    # Extract defined terms (terms in quotes followed by definitions)\n    # Count frequency of legal terms\n    # Identify sections and subsections\n    pass",
                testCases: [
                  {
                    input: 'Sample legal document with "Defined Term" meaning something important...',
                    output: '{"defined_terms": 1, "sections": 0}'
                  }
                ]
              }
            },
            {
              title: 'Data Structures for Legal Information',
              duration: '4 hours',
              type: 'interactive',
              description: 'Learn how to structure and organize legal data in Python',
              keyPoints: [
                'Lists, dictionaries, and sets',
                'JSON and structured data',
                'Data models for legal information',
                'Nested data structures',
                'Manipulating complex data'
              ],
              interactiveElements: [
                {
                  type: 'code-editor',
                  config: {
                    initialCode: "# Create a data structure for case information\n\n# Your code here - create a structure to represent:\n# - Case name\n# - Citation\n# - Court\n# - Date\n# - Judges\n# - Summary\n# - Key holdings (multiple)\n\n# Then create an example case",
                    solution: "case = {\n    'name': 'Smith v. Jones',\n    'citation': '123 F.3d 456 (7th Cir. 1997)',\n    'court': 'United States Court of Appeals for the Seventh Circuit',\n    'date': '1997-05-12',\n    'judges': ['Johnson', 'Williams', 'Davis'],\n    'summary': 'This case addresses copyright infringement in legal databases...',\n    'holdings': [\n        'Fair use doctrine applies to limited extraction of legal documents',\n        'Commercial purpose does not automatically disqualify fair use defense',\n        'Systematic extraction of entire databases exceeds fair use'\n    ]\n}"
                  }
                }
              ]
            }
          ],
          project: {
            title: 'Legal Document Analyzer',
            description: 'Build a Python tool to analyze and extract information from legal documents',
            objectives: [
              'Create a document parser',
              'Implement pattern recognition',
              'Extract key information',
              'Generate structured output'
            ],
            deliverables: [
              'Python script for document analysis',
              'Documentation',
              'Test cases',
              'Sample output report'
            ],
            assessmentCriteria: [
              'Functionality',
              'Code quality',
              'Documentation',
              'Handling of edge cases'
            ]
          }
        },
        {
          title: 'Legal Document Processing',
          duration: '2 weeks',
          description: 'Advanced techniques for processing legal documents with Python',
          topics: [
            {
              title: 'Working with Document Formats',
              duration: '3 hours',
              type: 'video',
              description: 'Learn to extract and process text from various document formats',
              keyPoints: [
                'PDF extraction',
                'Working with Word documents',
                'HTML parsing',
                'OCR for scanned documents',
                'Handling different encodings'
              ],
              videoUrl: '/videos/doc-format-processing.mp4'
            },
            {
              title: 'Document Structure Analysis',
              duration: '3 hours',
              type: 'coding',
              description: 'Techniques for identifying and extracting document structure',
              keyPoints: [
                'Section identification',
                'Table of contents extraction',
                'Heading hierarchy',
                'Footnote and citation linking',
                'Cross-reference resolution'
              ],
              interactiveElements: [
                {
                  type: 'code-editor',
                  config: {
                    initialCode: "# Extract sections from a legal document\n\nlegal_document = \"\"\"\nI. INTRODUCTION\n\nThis case concerns...\n\nII. BACKGROUND\n\nThe parties entered into...\n\nA. Procedural History\n\nThe plaintiff filed...\n\nIII. LEGAL STANDARD\n\nSummary judgment is...\n\"\"\"\n\n# Write a function to extract the section structure\ndef extract_sections(document):\n    # Your code here\n    pass\n\nsections = extract_sections(legal_document)\nprint(sections)",
                    solution: "import re\n\ndef extract_sections(document):\n    # Pattern for main sections (Roman numerals)\n    main_section_pattern = r'([I|V|X]+)\\. ([A-Z ]+)\\n'\n    main_sections = re.findall(main_section_pattern, document)\n    \n    # Pattern for subsections\n    subsection_pattern = r'([A-Z])\\. ([A-Za-z ]+)\\n'\n    subsections = re.findall(subsection_pattern, document)\n    \n    # Create structured output\n    structure = {}\n    current_section = None\n    \n    # Process the document line by line\n    lines = document.split('\\n')\n    for line in lines:\n        main_match = re.match(main_section_pattern, line+'\\n')\n        if main_match:\n            current_section = main_match.group(2).strip()\n            structure[current_section] = []\n            continue\n            \n        sub_match = re.match(subsection_pattern, line+'\\n')\n        if sub_match and current_section:\n            structure[current_section].append(sub_match.group(2).strip())\n    \n    return structure"
                  }
                }
              ]
            },
            {
              title: 'Information Extraction Techniques',
              duration: '4 hours',
              type: 'interactive',
              description: 'Advanced methods for extracting specific information from legal documents',
              keyPoints: [
                'Named entity recognition',
                'Relationship extraction',
                'Pattern matching strategies',
                'Machine learning approaches',
                'Rule-based systems'
              ],
              interactiveElements: [
                {
                  type: 'code-editor',
                  config: {
                    initialCode: "# Extract entities from legal text\nimport re\n\ncontract_text = \"\"\"\nThis Agreement is made on January 15, 2023, between ABC Corporation,\na Delaware corporation with offices at 123 Main St, New York, NY 10001\n(\"Seller\"), and XYZ LLC, a California limited liability company with offices\nat 456 Market St, San Francisco, CA 94105 (\"Buyer\").\n\nThe total purchase price is $1,500,000.00 (One Million Five Hundred Thousand Dollars).\nPayment shall be made within 30 days of delivery.\n\"\"\"\n\n# Write functions to extract: \n# 1. Parties (names and addresses)\n# 2. Date\n# 3. Purchase price\n# 4. Payment terms\n\ndef extract_entities(text):\n    # Your code here\n    pass\n\nentities = extract_entities(contract_text)\nprint(entities)",
                    solution: "import re\n\ndef extract_entities(text):\n    entities = {}\n    \n    # Extract date\n    date_pattern = r'made on ([A-Za-z]+ \\d+, \\d{4})'\n    date_match = re.search(date_pattern, text)\n    if date_match:\n        entities['date'] = date_match.group(1)\n    \n    # Extract parties\n    party_pattern = r'([A-Za-z]+ [A-Za-z]+),\\s+a ([A-Za-z]+) [a-z]+ with offices at ([^\\(]+)\\(\"([^\"]+)\"\\)'\n    parties = re.findall(party_pattern, text)\n    entities['parties'] = []\n    for party in parties:\n        entities['parties'].append({\n            'name': party[0],\n            'type': party[1],\n            'address': party[2].strip(),\n            'designation': party[3]\n        })\n    \n    # Extract purchase price\n    price_pattern = r'\\$(\\d{1,3}(?:,\\d{3})*\\.\\d{2}) \\(([^\\)]+)\\)'\n    price_match = re.search(price_pattern, text)\n    if price_match:\n        entities['purchase_price'] = {\n            'amount': price_match.group(1),\n            'text': price_match.group(2)\n        }\n    \n    # Extract payment terms\n    payment_pattern = r'Payment shall be made within (\\d+) ([A-Za-z]+) of ([A-Za-z]+)'\n    payment_match = re.search(payment_pattern, text)\n    if payment_match:\n        entities['payment_terms'] = {\n            'timeframe': f\"{payment_match.group(1)} {payment_match.group(2)}\",\n            'condition': payment_match.group(3)\n        }\n    \n    return entities"
                  }
                }
              ]
            }
          ],
          project: {
            title: 'Contract Analysis Tool',
            description: 'Build a tool to analyze and extract key information from contracts',
            objectives: [
              'Build a document parser',
              'Implement entity extraction',
              'Create structured contract data',
              'Generate summary reports'
            ],
            deliverables: [
              'Python application',
              'Documentation',
              'User guide',
              'Sample analysis reports'
            ],
            assessmentCriteria: [
              'Extraction accuracy',
              'Handling of different contract formats',
              'Report quality',
              'Code organization'
            ]
          }
        },
        {
          title: 'Legal Data Analysis with Python',
          duration: '2 weeks',
          description: 'Analyze legal data sets using Python libraries',
          topics: [
            {
              title: 'Data Analysis Fundamentals',
              duration: '3 hours',
              type: 'video',
              description: 'Introduction to data analysis with Python for legal applications',
              keyPoints: [
                'Working with pandas',
                'Data cleaning techniques',
                'Exploratory data analysis',
                'Statistical analysis basics',
                'Working with legal datasets'
              ],
              videoUrl: '/videos/legal-data-analysis-intro.mp4'
            },
            {
              title: 'Case Law Analysis',
              duration: '4 hours',
              type: 'coding',
              description: 'Techniques for analyzing collections of cases',
              keyPoints: [
                'Building case databases',
                'Citation network analysis',
                'Trend identification',
                'Court decision patterns',
                'Legal topic modeling'
              ],
              interactiveElements: [
                {
                  type: 'code-editor',
                  config: {
                    initialCode: "# Analyze citation patterns in case data\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Sample case citation data\ncase_data = [\n    {\"case\": \"Smith v. Jones\", \"year\": 2010, \"citations\": 45},\n    {\"case\": \"Brown v. Board\", \"year\": 1954, \"citations\": 212},\n    {\"case\": \"Roe v. Wade\", \"year\": 1973, \"citations\": 189},\n    {\"case\": \"Miranda v. Arizona\", \"year\": 1966, \"citations\": 178},\n    {\"case\": \"Gideon v. Wainwright\", \"year\": 1963, \"citations\": 132},\n    {\"case\": \"Mapp v. Ohio\", \"year\": 1961, \"citations\": 98},\n    {\"case\": \"Baker v. Carr\", \"year\": 1962, \"citations\": 76},\n    {\"case\": \"New York v. Sullivan\", \"year\": 2015, \"citations\": 23},\n    {\"case\": \"Jackson v. Metro\", \"year\": 2018, \"citations\": 12},\n    {\"case\": \"Wilson v. State\", \"year\": 2019, \"citations\": 8}\n]\n\n# Create a pandas DataFrame and analyze citation patterns over time\n# Your code here",
                    solution: "import pandas as pd\nimport matplotlib.pyplot as plt\n\n# Create DataFrame\ndf = pd.DataFrame(case_data)\n\n# Basic statistics\nprint(\"Citation Statistics:\")\nprint(df['citations'].describe())\n\n# Sort by most cited\nmost_cited = df.sort_values('citations', ascending=False).head(5)\nprint(\"\\nTop 5 Most Cited Cases:\")\nprint(most_cited[['case', 'citations']])\n\n# Analyze by decade\ndf['decade'] = (df['year'] // 10) * 10\ndecade_stats = df.groupby('decade').agg({\n    'citations': ['mean', 'sum', 'count']\n})\nprint(\"\\nCitation Patterns by Decade:\")\nprint(decade_stats)\n\n# Visualize citation counts\nplt.figure(figsize=(10, 6))\nplt.scatter(df['year'], df['citations'], s=df['citations'], alpha=0.7)\n\n# Add annotations for major cases\nfor i, row in df.iterrows():\n    if row['citations'] > 100:\n        plt.annotate(row['case'], (row['year'], row['citations']), \n                    xytext=(5, 5), textcoords='offset points')\n\nplt.xlabel('Year')\nplt.ylabel('Citation Count')\nplt.title('Case Citation Analysis')\nplt.grid(True, alpha=0.3)\n\n# Fit a trend line\nz = np.polyfit(df['year'], df['citations'], 1)\np = np.poly1d(z)\nplt.plot(df['year'], p(df['year']), \"r--\", alpha=0.7)\n\nplt.tight_layout()"
                  }
                }
              ]
            },
            {
              title: 'Visualization for Legal Data',
              duration: '3 hours',
              type: 'interactive',
              description: 'Creating effective visualizations for legal data',
              keyPoints: [
                'Chart types for legal data',
                'Network visualizations',
                'Time series analysis',
                'Geographic visualizations',
                'Interactive dashboards'
              ],
              interactiveElements: [
                {
                  type: 'code-editor',
                  config: {
                    initialCode: "# Create visualizations of case outcomes by court\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Sample court decision data\ncourt_data = {\n    'court': ['Supreme Court', 'Supreme Court', 'Supreme Court', 'Supreme Court',\n              '9th Circuit', '9th Circuit', '9th Circuit', '9th Circuit',\n              '2nd Circuit', '2nd Circuit', '2nd Circuit', '2nd Circuit',\n              '5th Circuit', '5th Circuit', '5th Circuit', '5th Circuit'],\n    'year': [2018, 2019, 2020, 2021, 2018, 2019, 2020, 2021, 2018, 2019, 2020, 2021, 2018, 2019, 2020, 2021],\n    'outcome': ['Affirmed', 'Reversed', 'Affirmed', 'Reversed', 'Affirmed', 'Affirmed', 'Reversed', 'Affirmed',\n                'Reversed', 'Reversed', 'Affirmed', 'Affirmed', 'Affirmed', 'Reversed', 'Reversed', 'Affirmed'],\n    'count': [23, 17, 19, 22, 45, 51, 38, 42, 31, 29, 36, 34, 28, 26, 33, 30]\n}\n\n# Create at least two different visualizations that show patterns in case outcomes\n# Your code here",
                    solution: "import pandas as pd\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# Create DataFrame\ndf = pd.DataFrame(court_data)\n\n# 1. Stacked bar chart of outcomes by court\nplt.figure(figsize=(12, 6))\n\n# Pivot data for stacked bar chart\ncourt_outcomes = df.pivot_table(\n    index='court',\n    columns='outcome',\n    values='count',\n    aggfunc='sum'\n)\n\ncourt_outcomes.plot(kind='bar', stacked=True, ax=plt.gca())\nplt.title('Case Outcomes by Court (2018-// Continuing the 'Case Law Analysis' solution
                  solution: "import pandas as pd\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# Create DataFrame\ndf = pd.DataFrame(case_data)\n\n# Basic statistics\nprint(\"Citation Statistics:\")\nprint(df['citations'].describe())\n\n# Sort by most cited\nmost_cited = df.sort_values('citations', ascending=False).head(5)\nprint(\"\\nTop 5 Most Cited Cases:\")\nprint(most_cited[['case', 'citations']])\n\n# Analyze by decade\ndf['decade'] = (df['year'] // 10) * 10\ndecade_stats = df.groupby('decade').agg({\n    'citations': ['mean', 'sum', 'count']\n})\nprint(\"\\nCitation Patterns by Decade:\")\nprint(decade_stats)\n\n# Visualize citation counts\nplt.figure(figsize=(10, 6))\nplt.scatter(df['year'], df['citations'], s=df['citations'], alpha=0.7)\n\n# Add annotations for major cases\nfor i, row in df.iterrows():\n    if row['citations'] > 100:\n        plt.annotate(row['case'], (row['year'], row['citations']), \n                    xytext=(5, 5), textcoords='offset points')\n\nplt.xlabel('Year')\nplt.ylabel('Citation Count')\nplt.title('Case Citation Analysis')\nplt.grid(True, alpha=0.3)\n\n# Fit a trend line\nz = np.polyfit(df['year'], df['citations'], 1)\np = np.poly1d(z)\nplt.plot(df['year'], p(df['year']), \"r--\", alpha=0.7)\n\nplt.tight_layout()"
                }
              }
            ]
          },
          {
            title: 'Visualization for Legal Data',
            duration: '3 hours',
            type: 'interactive',
            description: 'Creating effective visualizations for legal data',
            keyPoints: [
              'Chart types for legal data',
              'Network visualizations',
              'Time series analysis',
              'Geographic visualizations',
              'Interactive dashboards'
            ],
            interactiveElements: [
              {
                type: 'code-editor',
                config: {
                  initialCode: "# Create visualizations of case outcomes by court\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Sample court decision data\ncourt_data = {\n    'court': ['Supreme Court', 'Supreme Court', 'Supreme Court', 'Supreme Court',\n              '9th Circuit', '9th Circuit', '9th Circuit', '9th Circuit',\n              '2nd Circuit', '2nd Circuit', '2nd Circuit', '2nd Circuit',\n              '5th Circuit', '5th Circuit', '5th Circuit', '5th Circuit'],\n    'year': [2018, 2019, 2020, 2021, 2018, 2019, 2020, 2021, 2018, 2019, 2020, 2021, 2018, 2019, 2020, 2021],\n    'outcome': ['Affirmed', 'Reversed', 'Affirmed', 'Reversed', 'Affirmed', 'Affirmed', 'Reversed', 'Affirmed',\n                'Reversed', 'Reversed', 'Affirmed', 'Affirmed', 'Affirmed', 'Reversed', 'Reversed', 'Affirmed'],\n    'count': [23, 17, 19, 22, 45, 51, 38, 42, 31, 29, 36, 34, 28, 26, 33, 30]\n}\n\n# Create at least two different visualizations that show patterns in case outcomes\n# Your code here",
                  solution: "import pandas as pd\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# Create DataFrame\ndf = pd.DataFrame(court_data)\n\n# 1. Stacked bar chart of outcomes by court\nplt.figure(figsize=(12, 6))\n\n# Pivot data for stacked bar chart\ncourt_outcomes = df.pivot_table(\n    index='court',\n    columns='outcome',\n    values='count',\n    aggfunc='sum'\n)\n\ncourt_outcomes.plot(kind='bar', stacked=True, ax=plt.gca())\nplt.title('Case Outcomes by Court (2018-2021)')\nplt.xlabel('Court')\nplt.ylabel('Number of Cases')\nplt.legend(title='Outcome')\nplt.xticks(rotation=45)\n\n# Calculate percentages for annotations\nfor i, court in enumerate(court_outcomes.index):\n    total = court_outcomes.loc[court].sum()\n    y_offset = 0\n    for outcome in court_outcomes.columns:\n        count = court_outcomes.loc[court, outcome]\n        percentage = (count / total) * 100\n        plt.annotate(\n            f'{percentage:.1f}%',\n            xy=(i, y_offset + count/2),\n            ha='center',\n            va='center',\n            color='white' if outcome == 'Reversed' else 'black'\n        )\n        y_offset += count\n\nplt.tight_layout()\n\n# 2. Time series analysis by court\nplt.figure(figsize=(14, 8))\n\n# Group by court and year, calculate affirmed percentage\ntime_series = df.pivot_table(\n    index=['year', 'court'],\n    columns='outcome',\n    values='count',\n    aggfunc='sum'\n).reset_index()\n\n# Calculate affirmed percentage\ntime_series['total'] = time_series['Affirmed'] + time_series['Reversed']\ntime_series['affirmed_pct'] = (time_series['Affirmed'] / time_series['total']) * 100\n\n# Plot time series for each court\nfor court in df['court'].unique():\n    court_data = time_series[time_series['court'] == court]\n    plt.plot(\n        court_data['year'],\n        court_data['affirmed_pct'],\n        'o-',\n        linewidth=2,\n        label=court\n    )\n\nplt.title('Affirmance Rate by Court (2018-2021)')\nplt.xlabel('Year')\nplt.ylabel('Affirmance Rate (%)')\nplt.legend()\nplt.grid(alpha=0.3)\nplt.xticks(df['year'].unique())\nplt.ylim(0, 100)\n\n# Add reference line for 50%\nplt.axhline(y=50, color='gray', linestyle='--', alpha=0.7)\nplt.annotate('50% Threshold', xy=(2018, 51), xytext=(2018, 55),\n            arrowprops=dict(arrowstyle='->', color='gray'))\n\nplt.tight_layout()"
                }
              }
            ]
          },
          {
            title: 'Legal NLP Applications',
            duration: '4 hours',
            type: 'coding',
            description: 'Introduction to natural language processing for legal applications',
            keyPoints: [
              'Basic NLP concepts',
              'Text classification',
              'Sentiment analysis',
              'Topic modeling',
              'Document similarity'
            ],
            interactiveElements: [
              {
                type: 'code-editor',
                config: {
                  initialCode: "# Perform topic modeling on legal opinions\nimport re\nimport numpy as np\nfrom sklearn.feature_extraction.text import CountVectorizer\nfrom sklearn.decomposition import LatentDirichletAllocation\n\n# Sample legal opinions (simplified)\nopinions = [\n    \"The court finds that the patent is valid and enforceable. The defendant's products clearly infringe on claims 1-5.\",\n    \"The trademark registration is granted. The mark is sufficiently distinctive and not confusingly similar to existing marks.\",\n    \"Summary judgment is denied. There are genuine issues of material fact regarding whether the defendant had knowledge of the defect.\",\n    \"The class certification is granted. The plaintiffs have demonstrated numerosity, commonality, typicality, and adequacy of representation.\",\n    \"The motion to dismiss is granted. The plaintiff has failed to state a claim upon which relief can be granted.\",\n    \"The preliminary injunction is granted. The plaintiff has demonstrated a likelihood of success on the merits and irreparable harm.\",\n    \"The patent is invalid due to obviousness. The combination of prior art references would have been obvious to a person of ordinary skill.\",\n    \"The court lacks subject matter jurisdiction. This case must be dismissed without prejudice.\",\n    \"The evidence is inadmissible as hearsay. No exception to the hearsay rule applies in this situation.\",\n    \"Defendant's motion for summary judgment is granted. The statute of limitations has expired on all claims.\"\n]\n\n# Implement topic modeling on these opinions\n# 1. Preprocess the text\n# 2. Create a document-term matrix\n# 3. Apply LDA\n# 4. Print the top terms for each topic\n\n# Your code here",
                  solution: "import re\nimport numpy as np\nfrom sklearn.feature_extraction.text import CountVectorizer\nfrom sklearn.decomposition import LatentDirichletAllocation\n\n# Preprocess the text\ndef preprocess(text):\n    # Convert to lowercase\n    text = text.lower()\n    # Remove punctuation\n    text = re.sub(r'[^\\w\\s]', '', text)\n    return text\n\nprocessed_opinions = [preprocess(opinion) for opinion in opinions]\n\n# Create a document-term matrix\nn_features = 1000\nvectorizer = CountVectorizer(\n    max_features=n_features,\n    stop_words='english'\n)\nX = vectorizer.fit_transform(processed_opinions)\n\n# Get feature names\nfeature_names = vectorizer.get_feature_names_out()\n\n# Apply LDA\nn_topics = 3\nlda = LatentDirichletAllocation(\n    n_components=n_topics,\n    max_iter=10,\n    learning_method='online',\n    random_state=42\n)\nlda.fit(X)\n\n# Print top terms for each topic\ndef print_top_words(model, feature_names, n_top_words):\n    print(\"\\nTop terms per topic:\")\n    for topic_idx, topic in enumerate(model.components_):\n        topic_terms = [feature_names[i] for i in topic.argsort()[:-n_top_words - 1:-1]]\n        print(f\"Topic #{topic_idx + 1}: {', '.join(topic_terms)}\")\n    print()\n\nprint_top_words(lda, feature_names, 8)\n\n# Classify documents into topics\ntopic_distributions = lda.transform(X)\n\n# Assign each document to its dominant topic\ndominant_topics = np.argmax(topic_distributions, axis=1)\n\n# Group documents by topic\nfor topic_idx in range(n_topics):\n    print(f\"\\nDocuments in Topic #{topic_idx + 1}:\")\n    doc_indices = np.where(dominant_topics == topic_idx)[0]\n    for i in doc_indices:\n        # Print first 50 characters of the document\n        print(f\"  - {opinions[i][:50]}...\")"
                }
              }
            ]
          }
        ],
        project: {
          title: 'Legal Data Analytics Dashboard',
          description: 'Create a comprehensive analysis and visualization tool for legal data',
          objectives: [
            'Develop data processing pipeline',
            'Implement multiple analysis methods',
            'Create interactive visualizations',
            'Generate automated insights'
          ],
          deliverables: [
            'Python application',
            'Data processing modules',
            'Visualization dashboard',
            'Documentation',
            'Example datasets and analysis'
          ],
          assessmentCriteria: [
            'Code quality and organization',
            'Analysis depth and accuracy',
            'Visualization effectiveness',
            'User experience and interface',
            'Documentation completeness'
          ]
        }
      },
      {
        title: 'Legal Automation with Python',
        duration: '2 weeks',
        description: 'Building practical automation tools for legal workflows',
        topics: [
          {
            title: 'Workflow Automation Fundamentals',
            duration: '3 hours',
            type: 'video',
            description: 'Understanding how to identify and automate legal workflows',
            keyPoints: [
              'Workflow analysis',
              'Process mapping',
              'Automation opportunities',
              'ROI calculation',
              'Implementation strategies'
            ],
            videoUrl: '/videos/legal-workflow-automation.mp4'
          },
          {
            title: 'Building Document Generation Tools',
            duration: '5 hours',
            type: 'interactive',
            description: 'Create Python tools for automated document generation',
            keyPoints: [
              'Template creation',
              'Variable substitution',
              'Conditional logic',
              'Document assembly',
              'Format conversion'
            ],
            interactiveElements: [
              {
                type: 'code-editor',
                config: {
                  initialCode: "# Create a document generator for legal notices\nimport os\nfrom datetime import datetime\n\n# Template with placeholder variables (indicated by {variable_name})\nnotice_template = \"\"\"\n{sender_name}\n{sender_address}\n{sender_city}, {sender_state} {sender_zip}\n\n{date}\n\n{recipient_name}\n{recipient_address}\n{recipient_city}, {recipient_state} {recipient_zip}\n\nRe: {matter_reference}\n\nDear {recipient_name},\n\nPlease be advised that {notice_type} is hereby given regarding {subject_matter}.\n\n{custom_paragraph}\n\nThe deadline for response is {response_deadline}.\n\n{closing_paragraph}\n\nSincerely,\n\n{sender_name}\n{sender_title}\n{sender_firm}\n\"\"\"\n\n# Write a function that generates a completed notice document\n# based on input variables\ndef generate_notice(template, variables):\n    # Your code here\n    pass\n\n# Test data\nvariables = {\n    'sender_name': 'Jane Smith',\n    'sender_address': '123 Legal Avenue',\n    'sender_city': 'New York',\n    'sender_state': 'NY',\n    'sender_zip': '10001',\n    'date': datetime.now().strftime('%B %d, %Y'),\n    'recipient_name': 'ABC Corporation',\n    'recipient_address': '456 Business Plaza',\n    'recipient_city': 'Los Angeles',\n    'recipient_state': 'CA',\n    'recipient_zip': '90001',\n    'matter_reference': 'Contract Termination - Agreement #12345',\n    'notice_type': 'formal notice of termination',\n    'subject_matter': 'the Service Agreement dated January 15, 2023',\n    'custom_paragraph': 'As per Section 14.2 of the Agreement, we are exercising our right to terminate for convenience with the required 30-day notice period.',\n    'response_deadline': 'June 15, 2023',\n    'closing_paragraph': 'If you have any questions regarding this matter, please contact our office at (212) 555-1234.',\n    'sender_title': 'Attorney at Law',\n    'sender_firm': 'Smith Legal Services'\n}\n\n# Generate and print the notice\ncompleted_notice = generate_notice(notice_template, variables)\nprint(completed_notice)",
                  solution: "import os\nfrom datetime import datetime\n\ndef generate_notice(template, variables):\n    # Simple template rendering engine\n    completed_document = template\n    \n    # Replace each placeholder with its value\n    for key, value in variables.items():\n        placeholder = '{' + key + '}'\n        completed_document = completed_document.replace(placeholder, value)\n    \n    # Check for any remaining placeholders\n    remaining_placeholders = []\n    i = 0\n    while i < len(completed_document):\n        start = completed_document.find('{', i)\n        if start == -1:\n            break\n        end = completed_document.find('}', start)\n        if end == -1:\n            break\n        placeholder = completed_document[start:end+1]\n        remaining_placeholders.append(placeholder)\n        i = end + 1\n    \n    # Warn about any missing variables\n    if remaining_placeholders:\n        print(f\"Warning: The following placeholders were not replaced: {remaining_placeholders}\")\n    \n    return completed_document\n\n# Generate the notice\ncompleted_notice = generate_notice(notice_template, variables)\nprint(completed_notice)\n\n# Save the document to a file\ndef save_document(content, filename):\n    with open(filename, 'w') as file:\n        file.write(content)\n    print(f\"Document saved as {filename}\")\n\n# Create a filename based on the matter and date\nfilename = f\"Notice_{variables['matter_reference'].replace(' ', '_').replace('#', '')}_{datetime.now().strftime('%Y%m%d')}.txt\"\nsave_document(completed_notice, filename)"
                }
              }
            ],
            assessment: {
              type: 'coding',
              title: 'Advanced Document Generator',
              description: 'Extend the document generator with conditional logic and formatting',
              criteria: [
                'Implementation of conditional sections',
                'Handling of nested variables',
                'Format conversion capabilities',
                'Error handling and validation',
                'Code organization and reusability'
              ],
              codeStarter: "import os\nfrom datetime import datetime\nfrom typing import Dict, Any, List\n\ndef generate_document_with_conditions(template: str, variables: Dict[str, Any],\n                                conditional_sections: List[Dict[str, Any]] = None):\n    # Implement conditional logic for document generation\n    # Handle section inclusion/exclusion based on conditions\n    # Support formatting options\n    pass\n\n# Test the implementation with multiple conditions",
              expectedOutput: "A complete document with properly applied conditional formatting"
            }
          },
          {
            title: 'API Integration for Legal Services',
            duration: '6 hours',
            type: 'coding',
            description: 'Connect to and utilize legal APIs for automation',
            keyPoints: [
              'RESTful API concepts',
              'Authentication and security',
              'Data retrieval and processing',
              'Error handling',
              'Building wrappers and clients'
            ],
            interactiveElements: [
              {
                type: 'code-editor',
                config: {
                  initialCode: "# Create a client for a hypothetical court records API\nimport requests\nimport json\nfrom datetime import datetime, timedelta\n\nclass CourtRecordsClient:\n    \"\"\"Client for accessing court records through a REST API\"\"\"\n    \n    BASE_URL = \"https://api.courtrecords.example.com/v1\"\n    \n    def __init__(self, api_key):\n        \"\"\"Initialize with API key\"\"\"\n        self.api_key = api_key\n        self.session = requests.Session()\n        # Set up authorization header\n        self.session.headers.update({\n            \"Authorization\": f\"Bearer {api_key}\",\n            \"Content-Type\": \"application/json\",\n            \"Accept\": \"application/json\"\n        })\n    \n    # Implement the following methods:\n    # 1. search_cases - Search for cases by criteria\n    # 2. get_case_details - Get details for a specific case\n    # 3. get_case_documents - Get documents for a specific case\n    # 4. download_document - Download a specific document\n\n    def search_cases(self, params):\n        # Your code here\n        pass\n    \n    def get_case_details(self, case_id):\n        # Your code here\n        pass\n    \n    def get_case_documents(self, case_id):\n        # Your code here\n        pass\n    \n    def download_document(self, document_id, destination):\n        # Your code here\n        pass\n\n# Test the client with example usage\n# (This is a simulation, as we don't have a real API to connect to)\ndef simulate_api_response(endpoint, params=None):\n    \"\"\"Simulate API responses for testing\"\"\"\n    if endpoint == \"/cases/search\":\n        return {\n            \"status\": \"success\",\n            \"total_results\": 3,\n            \"page\": 1,\n            \"results\": [\n                {\"id\": \"CA123456\", \"court\": \"Northern District\", \"filing_date\": \"2023-01-15\", \"title\": \"Smith v. Johnson\"},\n                {\"id\": \"CA123457\", \"court\": \"Eastern District\", \"filing_date\": \"2023-01-20\", \"title\": \"Garcia v. Thompson\"},\n                {\"id\": \"CA123458\", \"court\": \"Central District\", \"filing_date\": \"2023-02-01\", \"title\": \"Wilson v. Harris\"}\n            ]\n        }\n    elif endpoint.startswith(\"/cases/\") and endpoint.endswith(\"/details\"):\n        case_id = endpoint.split(\"/\")[2]\n        return {\n            \"status\": \"success\",\n            \"case\": {\n                \"id\": case_id,\n                \"court\": \"Northern District\",\n                \"judge\": \"Hon. James Wilson\",\n                \"filing_date\": \"2023-01-15\",\n                \"status\": \"Active\",\n                \"parties\": [\n                    {\"name\": \"John Smith\", \"type\": \"Plaintiff\"},\n                    {\"name\": \"Robert Johnson\", \"type\": \"Defendant\"}\n                ],\n                \"cause_of_action\": \"Breach of Contract\",\n                \"last_updated\": \"2023-03-15\"\n            }\n        }\n    elif endpoint.startswith(\"/cases/\") and endpoint.endswith(\"/documents\"):\n        case_id = endpoint.split(\"/\")[2]\n        return {\n            \"status\": \"success\",\n            \"documents\": [\n                {\"id\": \"DOC123\", \"title\": \"Complaint\", \"filed_by\": \"Plaintiff\", \"date\": \"2023-01-15\", \"pages\": 25},\n                {\"id\": \"DOC124\", \"title\": \"Answer\", \"filed_by\": \"Defendant\", \"date\": \"2023-02-10\", \"pages\": 15},\n                {\"id\": \"DOC125\", \"title\": \"Motion to Dismiss\", \"filed_by\": \"Defendant\", \"date\": \"2023-02-15\", \"pages\": 10}\n            ]\n        }\n    elif endpoint.startswith(\"/documents/\") and endpoint.endswith(\"/download\"):\n        return {\"status\": \"success\", \"message\": \"Document successfully downloaded\"}\n    else:\n        return {\"status\": \"error\", \"message\": \"Invalid endpoint\"}\n\n# Mock the requests module for testing\nclass MockResponse:\n    def __init__(self, json_data, status_code):\n        self.json_data = json_data\n        self.status_code = status_code\n        self.content = b\"Mock document content\"\n    \n    def json(self):\n        return self.json_data\n\ndef mock_get(url, *args, **kwargs):\n    endpoint = url.replace(CourtRecordsClient.BASE_URL, \"\")\n    params = kwargs.get('params', {})\n    return MockResponse(simulate_api_response(endpoint, params), 200)\n\ndef mock_post(url, *args, **kwargs):\n    endpoint = url.replace(CourtRecordsClient.BASE_URL, \"\")\n    data = kwargs.get('json', {})\n    return MockResponse(simulate_api_response(endpoint, data), 200)\n\n# Monkey patch requests for testing\nrequests.get = mock_get\nrequests.post = mock_post\n\n# Now complete the client implementation",
                  solution: "import requests\nimport json\nfrom datetime import datetime, timedelta\nimport os\n\nclass CourtRecordsClient:\n    \"\"\"Client for accessing court records through a REST API\"\"\"\n    \n    BASE_URL = \"https://api.courtrecords.example.com/v1\"\n    \n    def __init__(self, api_key):\n        \"\"\"Initialize with API key\"\"\"\n        self.api_key = api_key\n        self.session = requests.Session()\n        # Set up authorization header\n        self.session.headers.update({\n            \"Authorization\": f\"Bearer {api_key}\",\n            \"Content-Type\": \"application/json\",\n            \"Accept\": \"application/json\"\n        })\n    \n    def search_cases(self, params):\n        \"\"\"Search for cases using various criteria\n        \n        Args:\n            params (dict): Search parameters, may include:\n                - court: Court name\n                - start_date: Starting filing date (YYYY-MM-DD)\n                - end_date: Ending filing date (YYYY-MM-DD)\n                - party_name: Name of a party\n                - case_type: Type of case\n                - status: Case status\n                - page: Page number for pagination\n                - limit: Results per page (max 100)\n                \n        Returns:\n            dict: Search results with case summaries\n        \"\"\"\n        url = f\"{self.BASE_URL}/cases/search\"\n        try:\n            response = self.session.get(url, params=params)\n            response.raise_for_status()\n            return response.json()\n        except requests.exceptions.RequestException as e:\n            return {\"status\": \"error\", \"message\": str(e)}\n    \n    def get_case_details(self, case_id):\n        \"\"\"Get detailed information for a specific case\n        \n        Args:\n            case_id (str): Unique identifier for the case\n            \n        Returns:\n            dict: Detailed case information\n        \"\"\"\n        url = f\"{self.BASE_URL}/cases/{case_id}/details\"\n        try:\n            response = self.session.get(url)\n            response.raise_for_status()\n            return response.json()\n        except requests.exceptions.RequestException as e:\n            return {\"status\": \"error\", \"message\": str(e)}\n    \n    def get_case_documents(self, case_id):\n        \"\"\"Get list of documents for a specific case\n        \n        Args:\n            case_id (str): Unique identifier for the case\n            \n        Returns:\n            dict: List of documents associated with the case\n        \"\"\"\n        url = f\"{self.BASE_URL}/cases/{case_id}/documents\"\n        try:\n            response = self.session.get(url)\n            response.raise_for_status()\n            return response.json()\n        except requests.exceptions.RequestException as e:\n            return {\"status\": \"error\", \"message\": str(e)}\n    \n    def download_document(self, document_id, destination):\n        \"\"\"Download a specific document\n        \n        Args:\n            document_id (str): Unique identifier for the document\n            destination (str): File path where document should be saved\n            \n        Returns:\n            dict: Status of download operation\n        \"\"\"\n        url = f\"{self.BASE_URL}/documents/{document_id}/download\"\n        try:\n            response = self.session.get(url, stream=True)\n            response.raise_for_status()\n            \n            # Ensure the destination directory exists\n            os.makedirs(os.path.dirname(os.path.abspath(destination)), exist_ok=True)\n            \n            # Write the file in binary mode\n            with open(destination, 'wb') as f:\n                for chunk in response.iter_content(chunk_size=8192):\n                    f.write(chunk)\n                    \n            return {\"status\": \"success\", \"message\": f\"Document saved to {destination}\"}\n        except requests.exceptions.RequestException as e:\n            return {\"status\": \"error\", \"message\": str(e)}\n        except IOError as e:\n            return {\"status\": \"error\", \"message\": f\"File error: {str(e)}\"}\n\n# Test the client\napi_key = \"test_api_key_12345\"\nclient = CourtRecordsClient(api_key)\n\n# Search for recent cases\nsearch_params = {\n    \"court\": \"Northern District\",\n    \"start_date\": (datetime.now() - timedelta(days=90)).strftime(\"%Y-%m-%d\"),\n    \"end_date\": datetime.now().strftime(\"%Y-%m-%d\"),\n    \"page\": 1,\n    \"limit\": 10\n}\n\nprint(\"\\nSearching for cases...\")\nsearch_results = client.search_cases(search_params)\nprint(json.dumps(search_results, indent=2))\n\n# Get case details\nif search_results[\"status\"] == \"success\" and search_results[\"total_results\"] > 0:\n    case_id = search_results[\"results\"][0][\"id\"]\n    print(f\"\\nGetting details for case {case_id}...\")\n    case_details = client.get_case_details(case_id)\n    print(json.dumps(case_details, indent=2))\n    \n    # Get case documents\n    print(f\"\\nGetting documents for case {case_id}...\")\n    documents = client.get_case_documents(case_id)\n    print(json.dumps(documents, indent=2))\n    \n    # Download a document\n    if documents[\"status\"] == \"success\" and len(documents[\"documents\"]) > 0:\n        doc_id = documents[\"documents\"][0][\"id\"]\n        doc_title = documents[\"documents\"][0][\"title\"]\n        destination = f\"./{doc_id}_{doc_title.replace(' ', '_')}.pdf\"\n        print(f\"\\nDownloading document {doc_id} to {destination}...\")\n        download_result = client.download_document(doc_id, destination)\n        print(json.dumps(download_result, indent=2// Continuing the API Integration solution
                solution: "import requests\nimport json\nfrom datetime import datetime, timedelta\nimport os\n\nclass CourtRecordsClient:\n    \"\"\"Client for accessing court records through a REST API\"\"\"\n    \n    BASE_URL = \"https://api.courtrecords.example.com/v1\"\n    \n    def __init__(self, api_key):\n        \"\"\"Initialize with API key\"\"\"\n        self.api_key = api_key\n        self.session = requests.Session()\n        # Set up authorization header\n        self.session.headers.update({\n            \"Authorization\": f\"Bearer {api_key}\",\n            \"Content-Type\": \"application/json\",\n            \"Accept\": \"application/json\"\n        })\n    \n    def search_cases(self, params):\n        \"\"\"Search for cases using various criteria\n        \n        Args:\n            params (dict): Search parameters, may include:\n                - court: Court name\n                - start_date: Starting filing date (YYYY-MM-DD)\n                - end_date: Ending filing date (YYYY-MM-DD)\n                - party_name: Name of a party\n                - case_type: Type of case\n                - status: Case status\n                - page: Page number for pagination\n                - limit: Results per page (max 100)\n                \n        Returns:\n            dict: Search results with case summaries\n        \"\"\"\n        url = f\"{self.BASE_URL}/cases/search\"\n        try:\n            response = self.session.get(url, params=params)\n            response.raise_for_status()\n            return response.json()\n        except requests.exceptions.RequestException as e:\n            return {\"status\": \"error\", \"message\": str(e)}\n    \n    def get_case_details(self, case_id):\n        \"\"\"Get detailed information for a specific case\n        \n        Args:\n            case_id (str): Unique identifier for the case\n            \n        Returns:\n            dict: Detailed case information\n        \"\"\"\n        url = f\"{self.BASE_URL}/cases/{case_id}/details\"\n        try:\n            response = self.session.get(url)\n            response.raise_for_status()\n            return response.json()\n        except requests.exceptions.RequestException as e:\n            return {\"status\": \"error\", \"message\": str(e)}\n    \n    def get_case_documents(self, case_id):\n        \"\"\"Get list of documents for a specific case\n        \n        Args:\n            case_id (str): Unique identifier for the case\n            \n        Returns:\n            dict: List of documents associated with the case\n        \"\"\"\n        url = f\"{self.BASE_URL}/cases/{case_id}/documents\"\n        try:\n            response = self.session.get(url)\n            response.raise_for_status()\n            return response.json()\n        except requests.exceptions.RequestException as e:\n            return {\"status\": \"error\", \"message\": str(e)}\n    \n    def download_document(self, document_id, destination):\n        \"\"\"Download a specific document\n        \n        Args:\n            document_id (str): Unique identifier for the document\n            destination (str): File path where document should be saved\n            \n        Returns:\n            dict: Status of download operation\n        \"\"\"\n        url = f\"{self.BASE_URL}/documents/{document_id}/download\"\n        try:\n            response = self.session.get(url, stream=True)\n            response.raise_for_status()\n            \n            # Ensure the destination directory exists\n            os.makedirs(os.path.dirname(os.path.abspath(destination)), exist_ok=True)\n            \n            # Write the file in binary mode\n            with open(destination, 'wb') as f:\n                for chunk in response.iter_content(chunk_size=8192):\n                    f.write(chunk)\n                    \n            return {\"status\": \"success\", \"message\": f\"Document saved to {destination}\"}\n        except requests.exceptions.RequestException as e:\n            return {\"status\": \"error\", \"message\": str(e)}\n        except IOError as e:\n            return {\"status\": \"error\", \"message\": f\"File error: {str(e)}\"}\n\n# Test the client\napi_key = \"test_api_key_12345\"\nclient = CourtRecordsClient(api_key)\n\n# Search for recent cases\nsearch_params = {\n    \"court\": \"Northern District\",\n    \"start_date\": (datetime.now() - timedelta(days=90)).strftime(\"%Y-%m-%d\"),\n    \"end_date\": datetime.now().strftime(\"%Y-%m-%d\"),\n    \"page\": 1,\n    \"limit\": 10\n}\n\nprint(\"\\nSearching for cases...\")\nsearch_results = client.search_cases(search_params)\nprint(json.dumps(search_results, indent=2))\n\n# Get case details\nif search_results[\"status\"] == \"success\" and search_results[\"total_results\"] > 0:\n    case_id = search_results[\"results\"][0][\"id\"]\n    print(f\"\\nGetting details for case {case_id}...\")\n    case_details = client.get_case_details(case_id)\n    print(json.dumps(case_details, indent=2))\n    \n    # Get case documents\n    print(f\"\\nGetting documents for case {case_id}...\")\n    documents = client.get_case_documents(case_id)\n    print(json.dumps(documents, indent=2))\n    \n    # Download a document\n    if documents[\"status\"] == \"success\" and len(documents[\"documents\"]) > 0:\n        doc_id = documents[\"documents\"][0][\"id\"]\n        doc_title = documents[\"documents\"][0][\"title\"]\n        destination = f\"./{doc_id}_{doc_title.replace(' ', '_')}.pdf\"\n        print(f\"\\nDownloading document {doc_id} to {destination}...\")\n        download_result = client.download_document(doc_id, destination)\n        print(json.dumps(download_result, indent=2))"
                }
              }
            ]
          }
        ],
        project: {
          title: 'Legal Workflow Automation Suite',
          description: 'Build a comprehensive suite of Python tools to automate common legal workflows',
          objectives: [
            'Automate document generation',
            'Develop API integration with legal services',
            'Create data extraction and processing tools',
            'Implement automated reporting',
            'Build workflow automation pipelines'
          ],
          deliverables: [
            'Python package with modular components',
            'Documentation and usage guide',
            'Test suite with sample data',
            'Implementation case studies',
            'Performance analysis report'
          ],
          assessmentCriteria: [
            'Functionality and completeness',
            'Code quality and organization',
            'Documentation quality',
            'Error handling and edge cases',
            'Automation efficiency metrics'
          ]
        }
      }
    ],
    certification: {
      requirements: [
        'Complete all module assessments',
        'Pass all coding exercises with minimum 70% score',
        'Submit all projects with passing grades',
        'Complete at least one integration project',
        'Pass final comprehensive assessment'
      ],
      skills: [
        'Python programming',
        'Legal data analysis',
        'Document automation',
        'Legal API integration',
        'Text processing and NLP',
        'Data visualization',
        'Workflow automation'
      ]
    }
  },
  {
    id: 'regtech-compliance',
    title: 'RegTech & Compliance',
    description: 'Master regulatory technology and compliance automation for modern legal and financial environments',
    duration: '7 weeks',
    level: 'Intermediate',
    prerequisites: ['legal-tech-foundations'],
    learningObjectives: [
      'Understand the regulatory technology landscape',
      'Master compliance automation principles',
      'Develop risk monitoring systems',
      'Implement regulatory reporting solutions',
      'Create compliance workflows and controls'
    ],
    modules: [
      {
        title: 'Introduction to RegTech',
        duration: '1.5 weeks',
        description: 'Understand the regulatory technology ecosystem and its applications',
        topics: [
          {
            title: 'The RegTech Revolution',
            duration: '2 hours',
            type: 'video',
            description: 'Overview of how technology is transforming regulatory compliance',
            keyPoints: [
              'Evolution of regulatory compliance',
              'Key regulatory frameworks',
              'RegTech market overview',
              'Core technologies driving RegTech',
              'Benefits and challenges'
            ],
            videoUrl: '/videos/regtech-revolution.mp4'
          },
          {
            title: 'RegTech Ecosystem Survey',
            duration: '3 hours',
            type: 'reading',
            description: 'Comprehensive overview of RegTech solutions and providers',
            keyPoints: [
              'RegTech solution categories',
              'Key market players',
              'Technology trends',
              'Implementation approaches',
              'Integration considerations'
            ],
            resources: [
              'RegTech Market Report 2023',
              'Compliance Technology Comparison Guide',
              'Implementation Case Studies'
            ]
          },
          {
            title: 'Interactive RegTech Tools Exploration',
            duration: '4 hours',
            type: 'interactive',
            description: 'Hands-on exploration of RegTech tools and capabilities',
            keyPoints: [
              'Exploring demo environments',
              'Comparing tool capabilities',
              'Evaluating user interfaces',
              'Understanding feature sets',
              'Integration capabilities assessment'
            ],
            interactiveElements: [
              {
                type: 'simulation',
                config: {
                  simulationType: 'tool-exploration',
                  tools: [
                    {
                      name: 'ComplianceGuard',
                      category: 'Risk Monitoring',
                      features: ['Real-time monitoring', 'Alert system', 'Reporting']
                    },
                    {
                      name: 'RegulationTracker',
                      category: 'Regulatory Change Management',
                      features: ['Update notifications', 'Impact assessment', 'Implementation tracking']
                    },
                    {
                      name: 'DataVerifier',
                      category: 'Identity Verification',
                      features: ['KYC automation', 'Document verification', 'Risk scoring']
                    }
                  ]
                }
              }
            ],
            assessment: {
              type: 'exercise',
              title: 'RegTech Tool Evaluation',
              description: 'Conduct an evaluation of RegTech tools for a specific compliance scenario',
              criteria: [
                'Thoroughness of analysis',
                'Methodology application',
                'Feature comparison',
                'Implementation recommendations',
                'Cost-benefit analysis'
              ]
            }
          }
        ],
        project: {
          title: 'RegTech Landscape Analysis',
          description: 'Research and analyze the current RegTech landscape for a specific regulatory domain',
          objectives: [
            'Map the RegTech ecosystem',
            'Evaluate solution categories',
            'Analyze implementation challenges',
            'Develop selection criteria',
            'Create evaluation framework'
          ],
          deliverables: [
            'RegTech landscape report',
            'Solution comparison matrix',
            'Implementation considerations guide',
            'Presentation slides',
            'Selection methodology documentation'
          ],
          assessmentCriteria: [
            'Research depth and accuracy',
            'Analysis quality',
            'Framework practicality',
            'Presentation clarity',
            'Critical thinking demonstrated'
          ]
        }
      },
      {
        title: 'Compliance Automation Fundamentals',
        duration: '2 weeks',
        description: 'Learn the principles and practices of automating compliance processes',
        topics: [
          {
            title: 'Compliance Process Mapping',
            duration: '3 hours',
            type: 'exercise',
            description: 'Learn to map and analyze compliance processes for automation',
            keyPoints: [
              'Process identification',
              'Workflow mapping techniques',
              'Inefficiency identification',
              'Automation opportunity assessment',
              'ROI calculation'
            ],
            assessment: {
              type: 'exercise',
              title: 'Compliance Process Mapping Exercise',
              description: 'Map a complex compliance process and identify automation opportunities',
              criteria: [
                'Process documentation completeness',
                'Identification of inefficiencies',
                'Automation opportunity analysis',
                'ROI calculation',
                'Implementation roadmap'
              ]
            }
          },
          {
            title: 'Compliance Rule Engines',
            duration: '4 hours',
            type: 'coding',
            description: 'Learn to implement rule-based compliance systems',
            keyPoints: [
              'Rule engine architecture',
              'Rules definition and management',
              'Decision tree implementation',
              'Rule execution and tracking',
              'Version control for rules'
            ],
            interactiveElements: [
              {
                type: 'code-editor',
                config: {
                  initialCode: "# Implement a simple compliance rule engine\nimport json\nimport datetime\nfrom typing import Dict, List, Any, Callable\n\nclass Rule:\n    \"\"\"Represents a compliance rule that can be evaluated\"\"\"\n    \n    def __init__(self, rule_id: str, name: str, description: str,\n                 rule_func: Callable[[Dict[str, Any]], bool], severity: str = 'medium'):\n        self.rule_id = rule_id\n        self.name = name\n        self.description = description\n        self.severity = severity  # 'low', 'medium', 'high', 'critical'\n        self.rule_func = rule_func\n        \n    def evaluate(self, data: Dict[str, Any]) -> Dict[str, Any]:\n        \"\"\"Evaluate the rule against provided data\"\"\"\n        try:\n            result = self.rule_func(data)\n            return {\n                'rule_id': self.rule_id,\n                'name': self.name,\n                'passed': result,\n                'timestamp': datetime.datetime.now().isoformat(),\n                'severity': self.severity\n            }\n        except Exception as e:\n            return {\n                'rule_id': self.rule_id,\n                'name': self.name,\n                'passed': False,\n                'error': str(e),\n                'timestamp': datetime.datetime.now().isoformat(),\n                'severity': self.severity\n            }\n\nclass ComplianceRuleEngine:\n    \"\"\"Engine for managing and executing compliance rules\"\"\"\n    \n    def __init__(self):\n        self.rules = {}\n        \n    # Implement the following methods:\n    # 1. add_rule - Add a rule to the engine\n    # 2. remove_rule - Remove a rule from the engine\n    # 3. evaluate_all - Evaluate all rules against data\n    # 4. evaluate_by_id - Evaluate a specific rule\n    # 5. get_failed_rules - Get all failed rules from results\n    \n    def add_rule(self, rule: Rule) -> None:\n        # Your code here\n        pass\n    \n    def remove_rule(self, rule_id: str) -> bool:\n        # Your code here\n        pass\n    \n    def evaluate_all(self, data: Dict[str, Any]) -> List[Dict[str, Any]]:\n        # Your code here\n        pass\n    \n    def evaluate_by_id(self, rule_id: str, data: Dict[str, Any]) -> Dict[str, Any]:\n        # Your code here\n        pass\n    \n    def get_failed_rules(self, results: List[Dict[str, Any]]) -> List[Dict[str, Any]]:\n        # Your code here\n        pass\n\n# Test the rule engine with AML (Anti-Money Laundering) rules\n\n# Sample transaction data\ntransaction = {\n    'id': 'TX123456',\n    'date': '2023-05-15',\n    'amount': 9800.00,  # Just under reporting threshold\n    'sender': {\n        'name': 'John Smith',\n        'account': '123456789',\n        'country': 'US'\n    },\n    'recipient': {\n        'name': 'Jane Doe',\n        'account': '987654321',\n        'country': 'US'\n    },\n    'notes': 'Investment return',\n    'frequency': {\n        'count': 5,  # Number of similar transactions in past month\n        'total_amount': 45000.00\n    },\n    'risk_score': 65\n}\n\n# Define some example AML rules\ndef threshold_rule(tx):\n    \"\"\"Flag transactions just below reporting threshold\"\"\"\n    # Reporting threshold is typically $10,000\n    return not (9000 <= tx['amount'] < 10000)\n\ndef structured_transactions_rule(tx):\n    \"\"\"Flag potential structuring (multiple transactions below threshold)\"\"\"\n    if 'frequency' not in tx:\n        return True\n    \n    # Flag if 3+ transactions totaling over $20,000 in past month\n    if tx['frequency']['count'] >= 3 and tx['frequency']['total_amount'] > 20000:\n        return False\n    return True\n\ndef high_risk_country_rule(tx):\n    \"\"\"Flag transactions involving high-risk countries\"\"\"\n    high_risk_countries = ['AF', 'KP', 'IR', 'SY']  # Example list\n    sender_country = tx['sender']['country']\n    recipient_country = tx['recipient']['country']\n    \n    return sender_country not in high_risk_countries and recipient_country not in high_risk_countries\n\n# Now implement the rule engine and test with these rules",
                  solution: "import json\nimport datetime\nfrom typing import Dict, List, Any, Callable\n\nclass Rule:\n    \"\"\"Represents a compliance rule that can be evaluated\"\"\"\n    \n    def __init__(self, rule_id: str, name: str, description: str,\n                 rule_func: Callable[[Dict[str, Any]], bool], severity: str = 'medium'):\n        self.rule_id = rule_id\n        self.name = name\n        self.description = description\n        self.severity = severity  # 'low', 'medium', 'high', 'critical'\n        self.rule_func = rule_func\n        \n    def evaluate(self, data: Dict[str, Any]) -> Dict[str, Any]:\n        \"\"\"Evaluate the rule against provided data\"\"\"\n        try:\n            result = self.rule_func(data)\n            return {\n                'rule_id': self.rule_id,\n                'name': self.name,\n                'passed': result,\n                'timestamp': datetime.datetime.now().isoformat(),\n                'severity': self.severity\n            }\n        except Exception as e:\n            return {\n                'rule_id': self.rule_id,\n                'name': self.name,\n                'passed': False,\n                'error': str(e),\n                'timestamp': datetime.datetime.now().isoformat(),\n                'severity': self.severity\n            }\n\nclass ComplianceRuleEngine:\n    \"\"\"Engine for managing and executing compliance rules\"\"\"\n    \n    def __init__(self):\n        self.rules = {}\n        \n    def add_rule(self, rule: Rule) -> None:\n        \"\"\"Add a rule to the engine\n        \n        Args:\n            rule (Rule): Rule object to add\n        \"\"\"\n        self.rules[rule.rule_id] = rule\n    \n    def remove_rule(self, rule_id: str) -> bool:\n        \"\"\"Remove a rule from the engine\n        \n        Args:\n            rule_id (str): ID of rule to remove\n            \n        Returns:\n            bool: True if rule was removed, False if not found\n        \"\"\"\n        if rule_id in self.rules:\n            del self.rules[rule_id]\n            return True\n        return False\n    \n    def evaluate_all(self, data: Dict[str, Any]) -> List[Dict[str, Any]]:\n        \"\"\"Evaluate all rules against provided data\n        \n        Args:\n            data (Dict[str, Any]): Data to evaluate rules against\n            \n        Returns:\n            List[Dict[str, Any]]: Results of all rule evaluations\n        \"\"\"\n        results = []\n        for rule in self.rules.values():\n            results.append(rule.evaluate(data))\n        return results\n    \n    def evaluate_by_id(self, rule_id: str, data: Dict[str, Any]) -> Dict[str, Any]:\n        \"\"\"Evaluate a specific rule against provided data\n        \n        Args:\n            rule_id (str): ID of rule to evaluate\n            data (Dict[str, Any]): Data to evaluate rule against\n            \n        Returns:\n            Dict[str, Any]: Result of rule evaluation or error if rule not found\n        \"\"\"\n        if rule_id in self.rules:\n            return self.rules[rule_id].evaluate(data)\n        return {\n            'rule_id': rule_id,\n            'passed': False,\n            'error': 'Rule not found',\n            'timestamp': datetime.datetime.now().isoformat()\n        }\n    \n    def get_failed_rules(self, results: List[Dict[str, Any]]) -> List[Dict[str, Any]]:\n        \"\"\"Get all failed rules from evaluation results\n        \n        Args:\n            results (List[Dict[str, Any]]): Results from rule evaluations\n            \n        Returns:\n            List[Dict[str, Any]]: List of failed rule results\n        \"\"\"\n        failed_rules = []\n        for result in results:\n            if not result.get('passed', False) or 'error' in result:\n                failed_rules.append(result)\n        return failed_rules\n\n# Create rule engine and add AML rules\nengine = ComplianceRuleEngine()\n\n# Add rules to engine\nengine.add_rule(Rule(\n    rule_id='AML001',\n    name='Threshold Avoidance Detection',\n    description='Detects transactions just below reporting threshold that may indicate avoidance',\n    rule_func=threshold_rule,\n    severity='high'\n))\n\nengine.add_rule(Rule(\n    rule_id='AML002',\n    name='Structured Transactions Detection',\n    description='Detects patterns of multiple smaller transactions that may indicate structuring',\n    rule_func=structured_transactions_rule,\n    severity='critical'\n))\n\nengine.add_rule(Rule(\n    rule_id='AML003',\n    name='High-Risk Country Check',\n    description='Flags transactions involving countries with high money laundering risk',\n    rule_func=high_risk_country_rule,\n    severity='medium'\n))\n\n# Evaluate all rules against the transaction\nprint(\"Evaluating AML rules against transaction TX123456...\\n\")\nresults = engine.evaluate_all(transaction)\n\n# Pretty print results\nprint(json.dumps(results, indent=2))\n\n# Get and display failed rules\nfailed_rules = engine.get_failed_rules(results)\nprint(f\"\\nDetected {len(failed_rules)} compliance violations:\")\nfor rule in failed_rules:\n    print(f\"- {rule['name']} (Severity: {rule['severity']})\")\n\n# Test removing and adding rules\nprint(\"\\nRemoving rule AML003...\")\nengine.remove_rule('AML003')\nprint(f\"Rules after removal: {list(engine.rules.keys())}\")\n\n# Add a new rule\ndef large_amount_rule(tx):\n    \"\"\"Flag unusually large transactions\"\"\"\n    return tx['amount'] <= 50000\n\nengine.add_rule(Rule(\n    rule_id='AML004',\n    name='Large Amount Detection',\n    description='Flags unusually large transactions that may require enhanced due diligence',\n    rule_func=large_amount_rule,\n    severity='medium'\n))\n\nprint(f\"Rules after addition: {list(engine.rules.keys())}\")\n\n# Evaluate specific rule\nprint(\"\\nEvaluating only Large Amount rule (AML004):\")\nresult = engine.evaluate_by_id('AML004', transaction)\nprint(json.dumps(result, indent=2))"
                }
              }
            ]
          },
          {
            title: 'Automated Regulatory Reporting',
            duration: '5 hours',
            type: 'interactive',
            description: 'Building automated reporting systems for regulatory compliance',
            keyPoints: [
              'Reporting requirements analysis',
              'Data aggregation techniques',
              'Validation and verification',
              'Report generation automation',
              'Submission workflow'
            ],
            interactiveElements: [
              {
                type: 'code-editor',
                config: {
                  initialCode: "# Create a financial regulatory reporting system\nimport pandas as pd\nimport json\nimport datetime\nimport os\nfrom typing import Dict, List, Any, Optional\n\nclass RegulatoryReport:\n    \"\"\"Base class for regulatory reports\"\"\"\n    \n    def __init__(self, report_id: str, report_type: str, reporting_period: str,\n                entity_id: str, submission_deadline: str):\n        self.report_id = report_id\n        self.report_type = report_type\n        self.reporting_period = reporting_period\n        self.entity_id = entity_id\n        self.submission_deadline = submission_deadline\n        self.data: Dict[str, Any] = {}\n        self.validation_errors: List[str] = []\n        self.status = 'draft'  # draft, validated, submitted, accepted, rejected\n        self.created_at = datetime.datetime.now().isoformat()\n        self.submitted_at: Optional[str] = None\n    \n    def add_data(self, data: Dict[str, Any]) -> None:\n        \"\"\"Add or update report data\"\"\"\n        self.data.update(data)\n        self.status = 'draft'\n    \n    def validate(self) -> bool:\n        \"\"\"Validate report data - to be implemented by subclasses\"\"\"\n        raise NotImplementedError(\"Subclasses must implement validate()\")\n    \n    def generate_report(self) -> Dict[str, Any]:\n        \"\"\"Generate report in standard format\"\"\"\n        if self.status == 'draft':\n            self.validate()\n            \n        return {\n            'report_id': self.report_id,\n            'report_type': self.report_type,\n            'reporting_period': self.reporting_period,\n            'entity_id': self.entity_id,\n            'submission_deadline': self.submission_deadline,\n            'status': self.status,\n            'created_at': self.created_at,\n            'submitted_at': self.submitted_at,\n            'data': self.data,\n            'validation_errors': self.validation_errors\n        }\n    \n    def submit(self) -> Dict[str, Any]:\n        \"\"\"Submit report if validated\"\"\"\n        if not self.validate():\n            return {\n                'success': False,\n                'errors': self.validation_errors,\n                'message': 'Validation failed, cannot submit report'\n            }\n        \n        self.status = 'submitted'\n        self.submitted_at = datetime.datetime.now().isoformat()\n        \n        return {\n            'success': True,\n            'report_id': self.report_id,\n            'submitted_at': self.submitted_at,\n            'message': f'Report {self.report_id} submitted successfully'\n        }\n\n# Implement a specific report type - Anti-Money Laundering Suspicious Activity Report (SAR)\nclass SuspiciousActivityReport(RegulatoryReport):\n    \"\"\"SAR for reporting suspicious financial activities\"\"\"\n    \n    def __init__(self, report_id: str, entity_id: str, reporting_period: str):\n        super().__init__(\n            report_id=report_id,\n            report_type='SAR',\n            reporting_period=reporting_period,\n            entity_id=entity_id,\n            submission_deadline=(datetime.datetime.now() + datetime.timedelta(days=30)).isoformat()\n        )\n    \n    def validate(self) -> bool:\n        \"\"\"Validate SAR data requirements\"\"\"\n        self.validation_errors = []\n        \n        # Check required fields\n        required_fields = [\n            'subject_information',\n            'suspicious_activity',\n            'activity_date_range',\n            'suspicious_amount',\n            'filing_institution'\n        ]\n        \n        for field in required_fields:\n            if field not in self.data:\n                self.validation_errors.append(f\"Missing required field: {field}\")\n        \n        # If missing required fields, fail validation\n        if self.validation_errors:\n            self.status = 'draft'\n            return False\n        \n        # Check subject information completeness\n        if 'subject_information' in self.data:\n            subject = self.data['subject_information']\n            subject_required = ['name', 'identification_type', 'identification_number']\n            for field in subject_required:\n                if field not in subject:\n                    self.validation_errors.append(f\"Missing required subject field: {field}\")\n        \n        # Validate date range\n        if 'activity_date_range' in self.data:\n            date_range = self.data['activity_date_range']\n            if 'start_date' not in date_range or 'end_date' not in date_range:\n                self.validation_errors.append(\"Activity date range must include start_date and end_date\")\n            else:\n                try:\n                    start = datetime.datetime.fromisoformat(date_range['start_date'])\n                    end = datetime.datetime.fromisoformat(date_range['end_date'])\n                    if start > end:\n                        self.validation_errors.append(\"Activity start date must be before end date\")\n                except ValueError:\n                    self.validation_errors.append(\"Invalid date format in activity_date_range\")\n        \n        # If all validation passed\n        if not self.validation_errors:\n            self.status = 'validated'\n            return True\n        \n        self.status = 'draft'\n        return
                  // Continuing the Automated Regulatory Reporting solution
        return False
        
        # Validate suspicious amount
        if 'suspicious_amount' in self.data:
            amount = self.data['suspicious_amount']
            if not isinstance(amount, (int, float)) or amount <= 0:
                self.validation_errors.append("Suspicious amount must be a positive number")
        
        # Validate filing institution
        if 'filing_institution' in self.data:
            institution = self.data['filing_institution']
            if 'identifier' not in institution or 'name' not in institution:
                self.validation_errors.append("Filing institution must include identifier and name")
        
        # If all validation passed
        if not self.validation_errors:
            self.status = 'validated'
            return True
        
        self.status = 'draft'
        return False

# Implement a report repository to store and manage reports
class ReportRepository:
    """Repository for managing regulatory reports"""
    
    def __init__(self, storage_dir: str = './reports'):
        self.storage_dir = storage_dir
        os.makedirs(storage_dir, exist_ok=True)
    
    def save_report(self, report: RegulatoryReport) -> bool:
        """Save report to storage"""
        try:
            report_data = report.generate_report()
            filename = os.path.join(
                self.storage_dir,
                f"{report.report_type}_{report.report_id}_{report.status}.json"
            )
            
            with open(filename, 'w') as f:
                json.dump(report_data, f, indent=2)
            
            return True
        except Exception as e:
            print(f"Error saving report: {e}")
            return False
    
    def load_report(self, report_type: str, report_id: str) -> Optional[Dict[str, Any]]:
        """Load report from storage"""
        try:
            # Find the latest version of the report
            pattern = os.path.join(self.storage_dir, f"{report_type}_{report_id}_*.json")
            matching_files = []
            
            for filename in os.listdir(self.storage_dir):
                if filename.startswith(f"{report_type}_{report_id}_") and filename.endswith(".json"):
                    matching_files.append(filename)
            
            if not matching_files:
                return None
            
            # Sort by modification time, newest first
            latest_file = sorted(
                matching_files,
                key=lambda f: os.path.getmtime(os.path.join(self.storage_dir, f)),
                reverse=True
            )[0]
            
            with open(os.path.join(self.storage_dir, latest_file), 'r') as f:
                return json.load(f)
        except Exception as e:
            print(f"Error loading report: {e}")
            return None
    
    def list_reports(self, filters: Dict[str, Any] = None) -> List[Dict[str, Any]]:
        """List reports with optional filtering"""
        try:
            reports = []
            
            for filename in os.listdir(self.storage_dir):
                if not filename.endswith('.json'):
                    continue
                    
                try:
                    with open(os.path.join(self.storage_dir, filename), 'r') as f:
                        report_data = json.load(f)
                        
                    # Apply filters if provided
                    if filters:
                        matches = True
                        for key, value in filters.items():
                            # Handle nested keys with dot notation (e.g., 'data.subject_information.name')
                            keys = key.split('.')
                            current = report_data
                            
                            for k in keys:
                                if k not in current:
                                    matches = False
                                    break
                                current = current[k]
                            
                            if not matches or current != value:
                                matches = False
                                break
                                
                        if matches:
                            reports.append(report_data)
                    else:
                        reports.append(report_data)
                except Exception as e:
                    print(f"Error reading report {filename}: {e}")
                    continue
            
            return reports
        except Exception as e:
            print(f"Error listing reports: {e}")
            return []

# Test the reporting system
# Create a repository
repo = ReportRepository()

# Create a new SAR
sar = SuspiciousActivityReport(
    report_id="SAR20230001",
    entity_id="BANK123",
    reporting_period="2023-Q2"
)

# Add data to the report
sar.add_data({
    'subject_information': {
        'name': 'ABC Trading LLC',
        'identification_type': 'EIN',
        'identification_number': '12-3456789',
        'address': '123 Business Ave, New York, NY 10001',
        'business_type': 'Trading Company'
    },
    'suspicious_activity': {
        'type': 'Structuring',
        'description': 'Series of transactions just below reporting threshold',
        'indicator_codes': ['ML04', 'ML12', 'ML21']
    },
    'activity_date_range': {
        'start_date': '2023-04-01',
        'end_date': '2023-06-15'
    },
    'suspicious_amount': 47500.00,
    'filing_institution': {
        'identifier': 'RSSD9999',
        'name': 'Example Bank',
        'branch': 'Main Office'
    }
})

# Validate the report
print("Validating SAR...")
validation_result = sar.validate()
print(f"Validation result: {validation_result}")
if not validation_result:
    print(f"Validation errors: {sar.validation_errors}")

# Save the report to the repository
print("Saving report to repository...")
save_result = repo.save_report(sar)
print(f"Save result: {save_result}")

# Submit the report
if validation_result:
    print("Submitting report...")
    submission_result = sar.submit()
    print(json.dumps(submission_result, indent=2))
    
    # Save the updated report after submission
    repo.save_report(sar)

# List all reports
print("Listing all reports in repository:")
all_reports = repo.list_reports()
print(f"Found {len(all_reports)} reports")

# Filter reports by type
sar_reports = repo.list_reports({'report_type': 'SAR'})
print(f"Found {len(sar_reports)} SAR reports")"
                }
              }
            ],
            assessment: {
              type: 'coding',
              title: 'Regulatory Reporting System Enhancement',
              description: 'Extend the regulatory reporting system with additional features',
              criteria: [
                'Implementation of report versioning',
                'Support for multiple report types',
                'Data validation comprehensiveness',
                'Error handling',
                'Documentation quality'
              ],
              codeStarter: "# Enhance the regulatory reporting system with:\n# 1. Support for report versions\n# 2. Report comparison functionality\n# 3. Audit trail for changes\n# 4. Export to multiple formats (JSON, CSV, PDF)\n# 5. Scheduled reporting\n\n# Your code here"
            }
          }
        ],
        project: {
          title: 'Compliance Automation Framework',
          description: 'Design and implement a modular framework for compliance process automation',
          objectives: [
            'Create a flexible rule engine',
            'Implement automated data collection',
            'Develop validation and verification components',
            'Build reporting and visualization modules',
            'Design an alert and notification system'
          ],
          deliverables: [
            'Framework architecture documentation',
            'Core modules implementation',
            'Integration examples',
            'Testing and validation results',
            'Deployment guide'
          ],
          assessmentCriteria: [
            'Architectural design quality',
            'Module functionality and completeness',
            'Code quality and organization',
            'Testing thoroughness',
            'Documentation clarity'
          ]
        }
      },
      {
        title: 'Regulatory Monitoring Systems',
        duration: '1.5 weeks',
        description: 'Learn to design and implement systems for monitoring regulatory compliance',
        topics: [
          {
            title: 'Real-time Monitoring Principles',
            duration: '3 hours',
            type: 'video',
            description: 'Understanding the design and implementation of real-time compliance monitoring systems',
            keyPoints: [
              'Real-time vs. batch monitoring',
              'Event stream processing',
              'Alert thresholds and configurations',
              'False positive management',
              'Performance considerations'
            ],
            videoUrl: '/videos/realtime-monitoring.mp4'
          },
          {
            title: 'Building Monitoring Dashboards',
            duration: '4 hours',
            type: 'interactive',
            description: 'Design and implement compliance monitoring dashboards',
            keyPoints: [
              'KPI selection and design',
              'Visualization techniques',
              'Alert integration',
              'Drill-down capabilities',
              'User experience design'
            ],
            interactiveElements: [
              {
                type: 'code-editor',
                config: {
                  initialCode: "# Create a simple compliance monitoring dashboard using Dash\nimport dash\nimport dash_core_components as dcc\nimport dash_html_components as html\nimport plotly.express as px\nimport plotly.graph_objects as go\nimport pandas as pd\nfrom dash.dependencies import Input, Output\nfrom datetime import datetime, timedelta\nimport numpy as np\n\n# Generate sample compliance monitoring data\ndef generate_sample_data(days=30):\n    \"\"\"Generate sample compliance data for dashboard\"\"\"\n    np.random.seed(42)  # For reproducibility\n    \n    # Generate dates\n    end_date = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)\n    start_date = end_date - timedelta(days=days)\n    dates = [start_date + timedelta(days=i) for i in range(days)]\n    \n    # Generate metrics\n    data = []\n    \n    # Risk categories\n    categories = ['AML', 'KYC', 'Fraud', 'Market Abuse', 'Data Privacy']\n    \n    # Generate daily metrics for each category\n    for date in dates:\n        date_str = date.strftime('%Y-%m-%d')\n        \n        # Base alert counts with weekly pattern (more on weekdays)\n        weekday = date.weekday()\n        is_weekday = weekday < 5\n        base_count = np.random.normal(100 if is_weekday else 50, 20)\n        \n        for category in categories:\n            # Category-specific multipliers\n            if category == 'AML':\n                multiplier = 1.2\n            elif category == 'KYC':\n                multiplier = 0.8\n            elif category == 'Fraud':\n                multiplier = 1.5\n            elif category == 'Market Abuse':\n                multiplier = 0.7 * (1.3 if is_weekday else 1.0)  # Market abuse more common on trading days\n            else:  # Data Privacy\n                multiplier = 0.9\n            \n            # Calculate metrics\n            alert_count = int(max(0, np.random.normal(base_count * multiplier, base_count * 0.15)))\n            \n            # False positive rate between 60-90%\n            false_positive_rate = np.random.uniform(0.6, 0.9)\n            false_positives = int(alert_count * false_positive_rate)\n            true_positives = alert_count - false_positives\n            \n            # Resolution metrics\n            resolved_count = int(np.random.uniform(0.7, 0.95) * alert_count)\n            \n            # Average resolution time (in hours)\n            avg_resolution_time = np.random.normal(8, 2) if category != 'AML' else np.random.normal(12, 3)\n            \n            # Risk score (0-100)\n            risk_score = int(np.clip(\n                (alert_count / (base_count * multiplier * 1.5)) * 100 + np.random.normal(0, 10),\n                0, 100\n            ))\n            \n            data.append({\n                'date': date_str,\n                'category': category,\n                'alert_count': alert_count,\n                'false_positives': false_positives,\n                'true_positives': true_positives,\n                'resolved_count': resolved_count,\n                'pending_count': alert_count - resolved_count,\n                'avg_resolution_time': avg_resolution_time,\n                'risk_score': risk_score\n            })\n    \n    return pd.DataFrame(data)\n\n# Generate sample data\ndf = generate_sample_data()\n\n# Create a Dash application\napp = dash.Dash(__name__, title='Compliance Monitoring Dashboard')\n\n# Define the layout with header, filters, and placeholder for charts\n# Implement the complete dashboard layout here\n\n# Define callbacks for interactivity\n# Implement callbacks here\n\n# Run the server\nif __name__ == '__main__':\n    app.run_server(debug=True)",
                  solution: "import dash\nimport dash_core_components as dcc\nimport dash_html_components as html\nimport plotly.express as px\nimport plotly.graph_objects as go\nimport pandas as pd\nfrom dash.dependencies import Input, Output\nfrom datetime import datetime, timedelta\nimport numpy as np\n\n# Generate sample compliance monitoring data\ndef generate_sample_data(days=30):\n    \"\"\"Generate sample compliance data for dashboard\"\"\"\n    np.random.seed(42)  # For reproducibility\n    \n    # Generate dates\n    end_date = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)\n    start_date = end_date - timedelta(days=days)\n    dates = [start_date + timedelta(days=i) for i in range(days)]\n    \n    # Generate metrics\n    data = []\n    \n    # Risk categories\n    categories = ['AML', 'KYC', 'Fraud', 'Market Abuse', 'Data Privacy']\n    \n    # Generate daily metrics for each category\n    for date in dates:\n        date_str = date.strftime('%Y-%m-%d')\n        \n        # Base alert counts with weekly pattern (more on weekdays)\n        weekday = date.weekday()\n        is_weekday = weekday < 5\n        base_count = np.random.normal(100 if is_weekday else 50, 20)\n        \n        for category in categories:\n            # Category-specific multipliers\n            if category == 'AML':\n                multiplier = 1.2\n            elif category == 'KYC':\n                multiplier = 0.8\n            elif category == 'Fraud':\n                multiplier = 1.5\n            elif category == 'Market Abuse':\n                multiplier = 0.7 * (1.3 if is_weekday else 1.0)  # Market abuse more common on trading days\n            else:  # Data Privacy\n                multiplier = 0.9\n            \n            # Calculate metrics\n            alert_count = int(max(0, np.random.normal(base_count * multiplier, base_count * 0.15)))\n            \n            # False positive rate between 60-90%\n            false_positive_rate = np.random.uniform(0.6, 0.9)\n            false_positives = int(alert_count * false_positive_rate)\n            true_positives = alert_count - false_positives\n            \n            # Resolution metrics\n            resolved_count = int(np.random.uniform(0.7, 0.95) * alert_count)\n            \n            # Average resolution time (in hours)\n            avg_resolution_time = np.random.normal(8, 2) if category != 'AML' else np.random.normal(12, 3)\n            \n            # Risk score (0-100)\n            risk_score = int(np.clip(\n                (alert_count / (base_count * multiplier * 1.5)) * 100 + np.random.normal(0, 10),\n                0, 100\n            ))\n            \n            data.append({\n                'date': date_str,\n                'category': category,\n                'alert_count': alert_count,\n                'false_positives': false_positives,\n                'true_positives': true_positives,\n                'resolved_count': resolved_count,\n                'pending_count': alert_count - resolved_count,\n                'avg_resolution_time': avg_resolution_time,\n                'risk_score': risk_score\n            })\n    \n    return pd.DataFrame(data)\n\n# Generate sample data\ndf = generate_sample_data()\n\n# Calculate current metrics for the summary cards\nlatest_date = df['date'].max()\nlatest_df = df[df['date'] == latest_date]\ntotal_alerts = latest_df['alert_count'].sum()\ntotal_pending = latest_df['pending_count'].sum()\navg_risk_score = latest_df['risk_score'].mean()\nhighest_risk_category = latest_df.loc[latest_df['risk_score'].idxmax()]['category']\n\n# Create a Dash application\napp = dash.Dash(__name__, title='Compliance Monitoring Dashboard')\n\n# Define the layout of the dashboard\napp.layout = html.Div([\n    # Header\n    html.Div([\n        html.H1('Compliance Monitoring Dashboard', style={'textAlign': 'center'}),\n        html.P(f'Last updated: {datetime.now().strftime(\"%Y-%m-%d %H:%M:%S\")}', \n               style={'textAlign': 'center', 'color': '#666'})\n    ], style={'padding': '20px 0', 'backgroundColor': '#f8f9fa', 'marginBottom': '20px'}),\n    \n    # Filters row\n    html.Div([\n        html.Div([\n            html.Label('Time Range:'),\n            dcc.Dropdown(\n                id='time-range-dropdown',\n                options=[\n                    {'label': 'Last 7 Days', 'value': '7'},\n                    {'label': 'Last 14 Days', 'value': '14'},\n                    {'label': 'Last 30 Days', 'value': '30'}\n                ],\n                value='30',\n                clearable=False\n            )\n        ], style={'width': '30%', 'display': 'inline-block', 'marginRight': '2%'}),\n        \n        html.Div([\n            html.Label('Risk Categories:'),\n            dcc.Dropdown(\n                id='category-dropdown',\n                options=[{'label': cat, 'value': cat} for cat in df['category'].unique()],\n                value=df['category'].unique().tolist(),\n                multi=True\n            )\n        ], style={'width': '30%', 'display': 'inline-block', 'marginRight': '2%'}),\n        \n        html.Div([\n            html.Label('Metric:'),\n            dcc.Dropdown(\n                id='metric-dropdown',\n                options=[\n                    {'label': 'Alert Count', 'value': 'alert_count'},\n                    {'label': 'False Positives', 'value': 'false_positives'},\n                    {'label': 'True Positives', 'value': 'true_positives'},\n                    {'label': 'Pending Alerts', 'value': 'pending_count'},\n                    {'label': 'Risk Score', 'value': 'risk_score'}\n                ],\n                value='alert_count',\n                clearable=False\n            )\n        ], style={'width': '30%', 'display': 'inline-block'})\n    ], style={'marginBottom': '20px'}),\n    \n    # Summary Cards row\n    html.Div([\n        html.Div([\n            html.Div([\n                html.H3(f\"{total_alerts:,}\"),\n                html.P(\"Total Alerts Today\")\n            ], className='summary-card')\n        ], style={'width': '23%', 'display': 'inline-block', 'margin': '0 1%', \n                  'padding': '15px', 'boxShadow': '0 4px 8px rgba(0,0,0,0.1)', 'backgroundColor': '#fff', 'borderRadius': '4px'}),\n        \n        html.Div([\n            html.Div([\n                html.H3(f\"{total_pending:,}\"),\n                html.P(\"Pending Alerts\")\n            ], className='summary-card')\n        ], style={'width': '23%', 'display': 'inline-block', 'margin': '0 1%', \n                  'padding': '15px', 'boxShadow': '0 4px 8px rgba(0,0,0,0.1)', 'backgroundColor': '#fff', 'borderRadius': '4px'}),\n        \n        html.Div([\n            html.Div([\n                html.H3(f\"{avg_risk_score:.1f}/100\"),\n                html.P(\"Average Risk Score\")\n            ], className='summary-card')\n        ], style={'width': '23%', 'display': 'inline-block', 'margin': '0 1%', \n                  'padding': '15px', 'boxShadow': '0 4px 8px rgba(0,0,0,0.1)', 'backgroundColor': '#fff', 'borderRadius': '4px'}),\n        \n        html.Div([\n            html.Div([\n                html.H3(highest_risk_category),\n                html.P(\"Highest Risk Category\")\n            ], className='summary-card')\n        ], style={'width': '23%', 'display': 'inline-block', 'margin': '0 1%', \n                  'padding': '15px', 'boxShadow': '0 4px 8px rgba(0,0,0,0.1)', 'backgroundColor': '#fff', 'borderRadius': '4px'})\n    ], style={'marginBottom': '30px'}),\n    \n    # Charts row 1\n    html.Div([\n        # Time series chart\n        html.Div([\n            html.H2('Alert Trends', style={'textAlign': 'center'}),\n            dcc.Graph(id='time-series-chart')\n        ], style={'width': '100%', 'display': 'inline-block', 'backgroundColor': '#fff', \n                  'padding': '15px', 'boxShadow': '0 4px 8px rgba(0,0,0,0.1)', 'borderRadius': '4px'}),\n    ], style={'marginBottom': '20px'}),\n    \n    # Charts row 2\n    html.Div([\n        # Category comparison chart\n        html.Div([\n            html.H2('Category Comparison', style={'textAlign': 'center'}),\n            dcc.Graph(id='category-comparison-chart')\n        ], style={'width': '48%', 'display': 'inline-block', 'backgroundColor': '#fff', \n                  'padding': '15px', 'boxShadow': '0 4px 8px rgba(0,0,0,0.1)', 'borderRadius': '4px', 'marginRight': '2%'}),\n        \n        # Risk score gauge chart\n        html.Div([\n            html.H2('Risk Assessment', style={'textAlign': 'center'}),\n            dcc.Graph(id='risk-gauge-chart')\n        ], style={'width': '48%', 'display': 'inline-block', 'backgroundColor': '#fff', \n                  'padding': '15px', 'boxShadow': '0 4px 8px rgba(0,0,0,0.1)', 'borderRadius': '4px'}),\n    ], style={'marginBottom': '20px'}),\n    \n    # Data table for detailed view\n    html.Div([\n        html.H2('Detailed Metrics by Category', style={'textAlign': 'center'}),\n        html.Div(id='metrics-table')\n    ], style={'width': '100%', 'display': 'inline-block', 'backgroundColor': '#fff', \n              'padding': '15px', 'boxShadow': '0 4px 8px rgba(0,0,0,0.1)', 'borderRadius': '4px'})\n], style={'padding': '0 40px 40px 40px', 'backgroundColor': '#f0f2f5', 'fontFamily': 'Arial'})\n\n\n# Define callbacks to update charts based on filter selections\n@app.callback(\n    [Output('time-series-chart', 'figure'),\n     Output('category-comparison-chart', 'figure'),\n     Output('risk-gauge-chart', 'figure'),\n     Output('metrics-table', 'children')],\n    [Input('time-range-dropdown', 'value'),\n     Input('category-dropdown', 'value'),\n     Input('metric-dropdown', 'value')]\n)\ndef update_charts(time_range, categories, metric):\n    # Filter data based on selection\n    days = int(time_range)\n    cutoff_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')\n    filtered_df = df[df['date'] >= cutoff_date]\n    \n    if categories and not isinstance(categories, list):\n        categories = [categories]\n    \n    if categories:\n        filtered_df = filtered_df[filtered_df['category'].isin(categories)]\n    \n    # 1. Create time series chart\n    time_series_df = filtered_df.groupby(['date', 'category'])[metric].sum().reset_index()\n    time_series_fig = px.line(time_series_df, x='date', y=metric, color='category',\n                             title=f'{metric.replace(\"_\", \" \").title()} Over Time',\n                             labels={'date': 'Date', metric: metric.replace('_', ' ').title()})\n    time_series_fig.update_layout(legend_title='Category', hovermode='closest')\n    \n    # 2. Create category comparison chart\n    comparison_df = filtered_df.groupby('category')[metric].mean().reset_index()\n    comparison_fig = px.bar(comparison_df, x='category', y=metric,\n                           title=f'Average {metric.replace(\"_\", \" \").title()} by Category',\n                           labels={'category': 'Risk Category', metric: f'Avg {metric.replace(\"_\", \" \").title()}'},\n                           color='category')\n    comparison_fig.update_layout(showlegend=False)\n    \n    # 3. Create risk gauge chart for latest data\n    latest_date = filtered_df['date'].max()\n    latest_df = filtered_df[filtered_df['date'] == latest_date]\n    avg_risk = latest_df['risk_score'].mean()\n    \n    gauge_fig = go.Figure(go.Indicator(\n        mode=\"gauge+number\",\n        value=avg_risk,\n        domain={'x': [0, 1], 'y': [0, 1]},\n        title={'text': \"Current Risk Score\"},\n        gauge={\n            'axis': {'range': [0, 100], 'tickwidth': 1},\n            'bar': {'color': \"darkblue\"},\n            'steps': [\n                {'range': [0, 40], 'color': \"green\"},\n                {'range': [40, 70], 'color': \"yellow\"},\n                {'range': [70, 100], 'color': \"red\"}\n            ],\n            'threshold': {\n                'line': {'color': \"red\", 'width': 4},\n                'thickness': 0.75,\n                'value': 90\n            }\n        }\n    ))\n    \n    # 4. Create metrics table\n    summary_df = latest_df.groupby('category').agg({\n        'alert_count': 'sum',\n        'false_positives': 'sum',\n        'true_positives': 'sum',\n        'pending_count': 'sum',\n        'avg_resolution_time': 'mean',\n        'risk_score': 'mean'\n    }).reset_index()\n    \n    # Format the summary dataframe for display\n    summary_df['avg_resolution_time'] = summary_df['avg_resolution_time'].round(1)\n    summary_df['risk_score'] = summary_df['risk_score'].round(1)\n    \n    # Create a styled HTML table\n    table_header = [\n        html.Thead(html.Tr([\n            html.Th('Category'),\n            html.Th('Total Alerts'),\n            html.Th('False Positives'),\n            html.Th('True Positives'),\n            html.Th('Pending Alerts'),\n            html.Th('Avg Resolution Time (hrs)'),\n            html.Th('Risk Score')\n        ]))\n    ]\n    \n    rows = []\n    for i, row in summary_df.iterrows():\n        # Determine row color based on risk score\n        if row['risk_score'] >= 70:\n            color = '#ffebee'  # Light red\n        elif row['risk_score'] >= 40:\n            color = '#fff8e1'  # Light yellow\n        else:\n            color = '#e8f5e9'  # Light green\n            \n        rows.append(html.Tr([\n            html.Td(row['category']),\n            html.Td(f\"{int(row['alert_count']):,}\"),\n            html.Td(f\"{int(row['false_positives']):,}\"),\n            html.Td(f\"{int(row['true_positives']):,}\"),\n            html.Td(f\"{int(row['pending_count']):,}\"),\n            html.Td(f\"{row['avg_resolution_time']:.1f}\"),\n            html.Td(f\"{row['risk_score']:.1f}/100\")\n        ], style={'backgroundColor': color}))\n    \n    table_body = [html.Tbody(rows)]\n    table = html.Table(table_header + table_body, style={\n        'width':
                  {
                    title: 'Anomaly Detection for Compliance',
                    duration: '4 hours',
                    type: 'coding',
                    description: 'Implementing machine learning-based anomaly detection for compliance monitoring',
                    keyPoints: [
                      'Anomaly detection techniques',
                      'Feature engineering for compliance data',
                      'ML model selection and tuning',
                      'Threshold configuration',
                      'Performance evaluation'
                    ],
                    interactiveElements: [
                      {
                        type: 'code-editor',
                        config: {
                          initialCode: "# Implement anomaly detection for transaction monitoring\nimport numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfrom sklearn.ensemble import IsolationForest\nfrom sklearn.preprocessing import StandardScaler\nfrom datetime import datetime, timedelta\n\n# Generate synthetic transaction data\ndef generate_transactions(num_transactions=10000, anomaly_percentage=2):\n    \"\"\"Generate synthetic transaction data with anomalies\"\"\"\n    # Set random seed for reproducibility\n    np.random.seed(42)\n    \n    # Create date range for the last 90 days\n    end_date = datetime.now()\n    start_date = end_date - timedelta(days=90)\n    date_range = pd.date_range(start=start_date, end=end_date, periods=num_transactions)\n    \n    # Customer IDs (100 different customers)\n    customer_ids = np.random.randint(1000, 2000, size=num_transactions)\n    \n    # Normal transaction amounts - log-normal distribution\n    normal_amounts = np.random.lognormal(mean=6, sigma=1.2, size=num_transactions)\n    \n    # Transaction types\n    transaction_types = np.random.choice(\n        ['PURCHASE', 'TRANSFER', 'PAYMENT', 'DEPOSIT', 'WITHDRAWAL'],\n        size=num_transactions,\n        p=[0.4, 0.2, 0.2, 0.1, 0.1]\n    )\n    \n    # Create merchants with categories\n    merchants = [\n        'GROCERY_1', 'GROCERY_2', 'GROCERY_3',\n        'RETAIL_1', 'RETAIL_2', 'RETAIL_3', 'RETAIL_4',\n        'DINING_1', 'DINING_2', 'DINING_3',\n        'TRAVEL_1', 'TRAVEL_2',\n        'ENTERTAINMENT_1', 'ENTERTAINMENT_2',\n        'UTILITY_1', 'UTILITY_2', 'UTILITY_3',\n        'OTHER_1', 'OTHER_2', 'OTHER_3'\n    ]\n    merchant_list = np.random.choice(merchants, size=num_transactions)\n    \n    # Country codes - mostly domestic with some international\n    country_codes = np.random.choice(\n        ['US', 'US', 'US', 'US', 'US', 'CA', 'MX', 'GB', 'FR', 'DE', 'JP', 'CN', 'RU', 'BR'],\n        size=num_transactions,\n        p=[0.8, 0.04, 0.04, 0.02, 0.02, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01]\n    )\n    \n    # Hour of day - follows typical pattern\n    hour_weights = np.concatenate([\n        np.linspace(0.5, 0.2, 6),     # 0-5 AM (low activity)\n        np.linspace(0.4, 1.5, 6),     # 6-11 AM (increasing)\n        np.linspace(2.0, 2.5, 6),     # 12-5 PM (high activity)\n        np.linspace(2.0, 1.0, 6),     # 6-11 PM (decreasing)\n    ])\n    hour_weights = hour_weights / hour_weights.sum()\n    hours = np.random.choice(range(24), size=num_transactions, p=hour_weights)\n    \n    # Customer age and account age in days\n    customer_age = np.random.normal(40, 15, size=num_transactions)\n    customer_age = np.clip(customer_age, 18, 85).astype(int)\n    account_age = np.random.gamma(shape=2, scale=500, size=num_transactions).astype(int)\n    \n    # Combine into DataFrame\n    df = pd.DataFrame({\n        'transaction_date': date_range,\n        'customer_id': customer_ids,\n        'amount': normal_amounts,\n        'transaction_type': transaction_types,\n        'merchant': merchant_list,\n        'country_code': country_codes,\n        'hour': hours,\n        'customer_age': customer_age,\n        'account_age': account_age\n    })\n    \n    # Introduce anomalies\n    anomaly_count = int(num_transactions * anomaly_percentage / 100)\n    anomaly_indices = np.random.choice(num_transactions, size=anomaly_count, replace=False)\n    \n    # Anomaly 1: Unusually large transactions\n    large_amount_indices = anomaly_indices[:anomaly_count//4]\n    df.loc[large_amount_indices, 'amount'] = df.loc[large_amount_indices, 'amount'] * np.random.uniform(10, 20, size=len(large_amount_indices))\n    \n    # Anomaly 2: Unusual countries\n    unusual_country_indices = anomaly_indices[anomaly_count//4:anomaly_count//2]\n    df.loc[unusual_country_indices, 'country_code'] = np.random.choice(['KP', 'IR', 'CU', 'SY', 'VE'], size=len(unusual_country_indices))\n    \n    # Anomaly 3: Unusual hours for customer\n    unusual_hour_indices = anomaly_indices[anomaly_count//2:3*anomaly_count//4]\n    df.loc[unusual_hour_indices, 'hour'] = np.random.choice([1, 2, 3, 4], size=len(unusual_hour_indices))\n    \n    # Anomaly 4: Multiple transactions in short time\n    for i in range(3*anomaly_count//4, anomaly_count):\n        customer = df.loc[anomaly_indices[i], 'customer_id']\n        df.loc[anomaly_indices[i], 'duplicate_flag'] = True\n        \n        # Add a duplicate transaction with slight variations\n        if i < len(df) - 1:\n            df.loc[anomaly_indices[i]+1, 'customer_id'] = customer\n            df.loc[anomaly_indices[i]+1, 'transaction_date'] = df.loc[anomaly_indices[i], 'transaction_date'] + pd.Timedelta(minutes=5)\n            df.loc[anomaly_indices[i]+1, 'duplicate_flag'] = True\n    \n    # Fill NaN values in duplicate_flag with False\n    df['duplicate_flag'] = df['duplicate_flag'].fillna(False)\n    \n    # Add known_fraud column for training/evaluation (True for anomalies)\n    df['known_fraud'] = False\n    df.loc[anomaly_indices, 'known_fraud'] = True\n    \n    return df\n\n# Generate transaction data\ntransactions = generate_transactions()\n\n# Implement anomaly detection using Isolation Forest\n# Your code here\n\n# Evaluate the model performance\n# Your code here\n\n# Visualize the results\n# Your code here",
                          solution: "# Implement anomaly detection for transaction monitoring\nimport numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfrom sklearn.ensemble import IsolationForest\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.metrics import confusion_matrix, classification_report, roc_curve, auc\nimport seaborn as sns\nfrom datetime import datetime, timedelta\n\n# Generate synthetic transaction data\ndef generate_transactions(num_transactions=10000, anomaly_percentage=2):\n    \"\"\"Generate synthetic transaction data with anomalies\"\"\"\n    # Set random seed for reproducibility\n    np.random.seed(42)\n    \n    # Create date range for the last 90 days\n    end_date = datetime.now()\n    start_date = end_date - timedelta(days=90)\n    date_range = pd.date_range(start=start_date, end=end_date, periods=num_transactions)\n    \n    # Customer IDs (100 different customers)\n    customer_ids = np.random.randint(1000, 2000, size=num_transactions)\n    \n    # Normal transaction amounts - log-normal distribution\n    normal_amounts = np.random.lognormal(mean=6, sigma=1.2, size=num_transactions)\n    \n    # Transaction types\n    transaction_types = np.random.choice(\n        ['PURCHASE', 'TRANSFER', 'PAYMENT', 'DEPOSIT', 'WITHDRAWAL'],\n        size=num_transactions,\n        p=[0.4, 0.2, 0.2, 0.1, 0.1]\n    )\n    \n    # Create merchants with categories\n    merchants = [\n        'GROCERY_1', 'GROCERY_2', 'GROCERY_3',\n        'RETAIL_1', 'RETAIL_2', 'RETAIL_3', 'RETAIL_4',\n        'DINING_1', 'DINING_2', 'DINING_3',\n        'TRAVEL_1', 'TRAVEL_2',\n        'ENTERTAINMENT_1', 'ENTERTAINMENT_2',\n        'UTILITY_1', 'UTILITY_2', 'UTILITY_3',\n        'OTHER_1', 'OTHER_2', 'OTHER_3'\n    ]\n    merchant_list = np.random.choice(merchants, size=num_transactions)\n    \n    # Country codes - mostly domestic with some international\n    country_codes = np.random.choice(\n        ['US', 'US', 'US', 'US', 'US', 'CA', 'MX', 'GB', 'FR', 'DE', 'JP', 'CN', 'RU', 'BR'],\n        size=num_transactions,\n        p=[0.8, 0.04, 0.04, 0.02, 0.02, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01]\n    )\n    \n    # Hour of day - follows typical pattern\n    hour_weights = np.concatenate([\n        np.linspace(0.5, 0.2, 6),     # 0-5 AM (low activity)\n        np.linspace(0.4, 1.5, 6),     # 6-11 AM (increasing)\n        np.linspace(2.0, 2.5, 6),     # 12-5 PM (high activity)\n        np.linspace(2.0, 1.0, 6),     # 6-11 PM (decreasing)\n    ])\n    hour_weights = hour_weights / hour_weights.sum()\n    hours = np.random.choice(range(24), size=num_transactions, p=hour_weights)\n    \n    # Customer age and account age in days\n    customer_age = np.random.normal(40, 15, size=num_transactions)\n    customer_age = np.clip(customer_age, 18, 85).astype(int)\n    account_age = np.random.gamma(shape=2, scale=500, size=num_transactions).astype(int)\n    \n    # Combine into DataFrame\n    df = pd.DataFrame({\n        'transaction_date': date_range,\n        'customer_id': customer_ids,\n        'amount': normal_amounts,\n        'transaction_type': transaction_types,\n        'merchant': merchant_list,\n        'country_code': country_codes,\n        'hour': hours,\n        'customer_age': customer_age,\n        'account_age': account_age\n    })\n    \n    # Introduce anomalies\n    anomaly_count = int(num_transactions * anomaly_percentage / 100)\n    anomaly_indices = np.random.choice(num_transactions, size=anomaly_count, replace=False)\n    \n    # Anomaly 1: Unusually large transactions\n    large_amount_indices = anomaly_indices[:anomaly_count//4]\n    df.loc[large_amount_indices, 'amount'] = df.loc[large_amount_indices, 'amount'] * np.random.uniform(10, 20, size=len(large_amount_indices))\n    \n    # Anomaly 2: Unusual countries\n    unusual_country_indices = anomaly_indices[anomaly_count//4:anomaly_count//2]\n    df.loc[unusual_country_indices, 'country_code'] = np.random.choice(['KP', 'IR', 'CU', 'SY', 'VE'], size=len(unusual_country_indices))\n    \n    # Anomaly 3: Unusual hours for customer\n    unusual_hour_indices = anomaly_indices[anomaly_count//2:3*anomaly_count//4]\n    df.loc[unusual_hour_indices, 'hour'] = np.random.choice([1, 2, 3, 4], size=len(unusual_hour_indices))\n    \n    # Anomaly 4: Multiple transactions in short time\n    df['duplicate_flag'] = False\n    for i in range(3*anomaly_count//4, anomaly_count):\n        customer = df.loc[anomaly_indices[i], 'customer_id']\n        df.loc[anomaly_indices[i], 'duplicate_flag'] = True\n        \n        # Add a duplicate transaction with slight variations\n        if i < len(df) - 1:\n            df.loc[anomaly_indices[i]+1, 'customer_id'] = customer\n            df.loc[anomaly_indices[i]+1, 'transaction_date'] = df.loc[anomaly_indices[i], 'transaction_date'] + pd.Timedelta(minutes=5)\n            df.loc[anomaly_indices[i]+1, 'duplicate_flag'] = True\n    \n    # Add known_fraud column for training/evaluation (True for anomalies)\n    df['known_fraud'] = False\n    df.loc[anomaly_indices, 'known_fraud'] = True\n    \n    return df\n\n# Generate transaction data\ntransactions = generate_transactions()\n\n# Feature engineering\ndef engineer_features(df):\n    \"\"\"Create features for anomaly detection\"\"\"\n    # Extract time-based features\n    df['dayofweek'] = df['transaction_date'].dt.dayofweek  # 0=Monday, 6=Sunday\n    df['is_weekend'] = df['dayofweek'] >= 5\n    df['month'] = df['transaction_date'].dt.month\n    df['day'] = df['transaction_date'].dt.day\n    \n    # Create merchant category\n    df['merchant_category'] = df['merchant'].apply(lambda x: x.split('_')[0])\n    \n    # Flag for high-risk countries\n    high_risk_countries = ['KP', 'IR', 'CU', 'SY', 'VE']\n    df['high_risk_country'] = df['country_code'].isin(high_risk_countries)\n    \n    # Normalize amount by customer\n    customer_avg = df.groupby('customer_id')['amount'].transform('mean')\n    customer_std = df.groupby('customer_id')['amount'].transform('std')\n    df['amount_zscore'] = (df['amount'] - customer_avg) / customer_std.fillna(1)\n    \n    # Flag for unusual hour\n    df['unusual_hour'] = (df['hour'] >= 0) & (df['hour'] <= 4)\n    \n    # Transaction recency for customer\n    df = df.sort_values(['customer_id', 'transaction_date'])\n    df['prev_tx_time'] = df.groupby('customer_id')['transaction_date'].shift(1)\n    df['minutes_since_last_tx'] = (df['transaction_date'] - df['prev_tx_time']).dt.total_seconds() / 60\n    df['minutes_since_last_tx'] = df['minutes_since_last_tx'].fillna(10000)  # New customers\n    \n    # Transaction velocity features\n    for window in [1, 3, 7]:\n        # Count transactions in last x days\n        df[f'tx_count_{window}d'] = df.groupby('customer_id')['transaction_date'].transform(\n            lambda x: x.rolling(f'{window}d').count().shift(1)\n        ).fillna(0)\n        \n        # Sum amount in last x days\n        df[f'tx_amount_{window}d'] = df.groupby('customer_id').apply(\n            lambda x: x['amount'].rolling(f'{window}d', on=x['transaction_date']).sum().shift(1)\n        ).reset_index(level=0, drop=True).fillna(0)\n    \n    return df\n\n# Engineer features\ntransactions_enriched = engineer_features(transactions)\n\n# Prepare data for modeling\ndef prepare_model_data(df):\n    \"\"\"Prepare data for anomaly detection model\"\"\"\n    # Select features for modeling\n    model_features = [\n        'amount', 'hour', 'dayofweek', 'is_weekend', 'month',\n        'customer_age', 'account_age', 'amount_zscore',\n        'unusual_hour', 'minutes_since_last_tx', 'high_risk_country',\n        'tx_count_1d', 'tx_count_3d', 'tx_count_7d',\n        'tx_amount_1d', 'tx_amount_3d', 'tx_amount_7d',\n        'duplicate_flag'\n    ]\n    \n    categorical_features = ['month', 'dayofweek']\n    numerical_features = [f for f in model_features if f not in categorical_features]\n    \n    # Define preprocessing steps\n    preprocessor = ColumnTransformer(\n        transformers=[\n            ('num', StandardScaler(), numerical_features),\n            ('cat', OneHotEncoder(drop='first'), categorical_features)\n        ])\n    \n    # Create pipeline with preprocessing and model\n    pipeline = Pipeline([\n        ('preprocessor', preprocessor),\n        ('model', IsolationForest(n_estimators=100, contamination=0.02, random_state=42))\n    ])\n    \n    return df[model_features], pipeline\n\n# Prepare model data\nX, pipeline = prepare_model_data(transactions_enriched)\n\n# Fit model and predict anomalies\npipeline.fit(X)\nscores = pipeline.decision_function(X)  # Higher scores = more normal\npredictions = pipeline.predict(X)  # 1 = normal, -1 = anomaly\n\n# Convert predictions to binary (1 = anomaly, 0 = normal) for easier comparison\nbinary_predictions = np.where(predictions == -1, 1, 0)\n\n# Add predictions back to original data\ntransactions_enriched['anomaly_score'] = scores\ntransactions_enriched['predicted_anomaly'] = binary_predictions\n\n# Evaluate model performance\ny_true = transactions_enriched['known_fraud'].astype(int)\ny_pred = transactions_enriched['predicted_anomaly']\n\n# Create confusion matrix\ncm = confusion_matrix(y_true, y_pred)\n\n# Classification report\nprint(\"Classification Report:\")\nprint(classification_report(y_true, y_pred))\n\n# Calculate false positive rate\nfp = cm[0, 1]\ntn = cm[0, 0]\nfalse_positive_rate = fp / (fp + tn)\nprint(f\"False Positive Rate: {false_positive_rate:.2%}\")\n\n# Calculate ROC curve and AUC\nfpr, tpr, thresholds = roc_curve(y_true, -scores)  # Negate scores because lower is more anomalous\nroc_auc = auc(fpr, tpr)\n\n# Visualizations\nplt.figure(figsize=(18, 12))\n\n# 1. Confusion Matrix\nplt.subplot(2, 3, 1)\nsns.heatmap(cm, annot=True, fmt='d', cmap='Blues', cbar=False,\n            xticklabels=['Normal', 'Anomaly'],\n            yticklabels=['Normal', 'Anomaly'])\nplt.title('Confusion Matrix')\nplt.xlabel('Predicted')\nplt.ylabel('Actual')\n\n# 2. ROC Curve\nplt.subplot(2, 3, 2)\nplt.plot(fpr, tpr, color='blue', lw=2, label=f'ROC curve (AUC = {roc_auc:.3f})')\nplt.plot([0, 1], [0, 1], color='gray', linestyle='--')\nplt.xlim([0.0, 1.0])\nplt.ylim([0.0, 1.05])\nplt.xlabel('False Positive Rate')\nplt.ylabel('True Positive Rate')\nplt.title('Receiver Operating Characteristic (ROC)')\nplt.legend(loc='lower right')\n\n# 3. Score Distribution\nplt.subplot(2, 3, 3)\nsns.histplot(data=transactions_enriched, x='anomaly_score', hue='known_fraud', \n             bins=50, palette=['green', 'red'], kde=True, alpha=0.6)\nplt.title('Anomaly Score Distribution')\nplt.xlabel('Anomaly Score (higher = more normal)')\nplt.ylabel('Count')\n\n# 4. Amount vs. Score scatter plot\nplt.subplot(2, 3, 4)\nsns.scatterplot(data=transactions_enriched, x='amount', y='anomaly_score', \n                hue='known_fraud', alpha=0.6, palette=['green', 'red'])\nplt.title('Transaction Amount vs Anomaly Score')\nplt.xlabel('Transaction Amount')\nplt.ylabel('Anomaly Score')\n\n# 5. Feature Importance (approximated by random shuffling)\ndef calculate_feature_importance(model, X, baseline_scores):\n    importance = {}\n    X_copy = X.copy()\n    \n    for feature in X.columns:\n        # Save original column\n        orig_values = X_copy[feature].copy()\n        \n        # Shuffle the column\n        X_copy[feature] = X_copy[feature].sample(frac=1).values\n        \n        # Get new scores\n        if isinstance(feature, (list, tuple)):\n            new_scores = model.decision_function(X_copy)\n        else:\n            new_scores = model.decision_function(X_copy)\n        \n        # Calculate importance as mean decrease in anomaly scores of anomalies\n        orig_anomaly_scores = baseline_scores[y_true == 1]\n        new_anomaly_scores = new_scores[y_true == 1]\n        importance[feature] = np.mean(orig_anomaly_scores) - np.mean(new_anomaly_scores)\n        \n        # Restore original values\n        X_copy[feature] = orig_values\n        \n    return importance\n\n# Get feature importance\nbest_features = X.columns[:10]  # Limit to top 10 for visualization\nmodel = pipeline.named_steps['model']\nbaseline_scores = model.decision_function(pipeline.named_steps['preprocessor'].transform(X))\nimportance = calculate_feature_importance(model, X[best_features], baseline_scores)\n\n# Sort and plot feature importance\nplt.subplot(2, 3, 5)\nfeature_importance = pd.Series(importance).sort_values(ascending=False)\nfeature_importance.plot(kind='bar', color='teal')\nplt.title('Feature Importance (approximate)')\nplt.xlabel('Feature')\nplt.ylabel('Importance')\nplt.xticks(rotation=45, ha='right')\n\n# 6. Time-based analysis\nplt.subplot(2, 3, 6)\ntransactions_enriched['date'] = transactions_enriched['transaction_date'].dt.date\ndaily_anomalies = transactions_enriched.groupby('date')['predicted_anomaly'].mean()\ndaily_anomalies.plot()\nplt.title('Daily Anomaly Rate')\nplt.xlabel('Date')\nplt.ylabel('Anomaly Rate')\n\nplt.tight_layout()\nplt.show()\n\n# Display top anomalies\ntop_anomalies = transactions_enriched[\n    transactions_enriched['predicted_anomaly'] == 1\n].sort_values('anomaly_score').head(10)\n\nprint(\"\\nTop 10 Detected Anomalies:\")\ndisplay_cols = ['transaction_date', 'customer_id', 'amount', 'country_code', \n                'hour', 'anomaly_score', 'known_fraud']\nprint(top_anomalies[display_cols])\n\n# Create summary of findings\ntp = cm[1, 1]  # True positives\nfn = cm[1, 0]  # False negatives\nfp = cm[0, 1]  # False positives\ntn = cm[0, 0]  # True negatives\n\ntotal_transactions = len(transactions_enriched)\ntotal_anomalies = y_true.sum()\ndetected_anomalies = y_pred.sum()\n\nprint(\"\\nSummary Report:\")\nprint(f\"Total Transactions Analyzed: {total_transactions:,}\")\nprint(f\"Known Fraudulent Transactions: {total_anomalies:,} ({total_anomalies/total_transactions:.2%})\")\nprint(f\"Detected Anomalies: {detected_anomalies:,} ({detected_anomalies/total_transactions:.2%})\")\nprint(f\"True Positive Rate (Recall): {tp/(tp+fn):.2%}\")\nprint(f\"False Positive Rate: {fp/(fp+tn):.2%}\")\nprint(f\"Precision: {tp/(tp+fp):.2%}\")\nprint(f\"F1 Score: {2*tp/(2*tp+fp+fn):.2%}\")"
                        }
                      }
                    ]
                  }
                ],
                project: {
                  title: 'Regulatory Monitoring System',
                  description: 'Design and implement a regulatory compliance monitoring system',
                  objectives: [
                    'Create real-time monitoring capabilities',
                    'Implement risk-based alert system',
                    'Design interactive dashboards',
                    'Build anomaly detection components',
                    'Create reporting and audit trails'
                  ],
                  deliverables: [
                    'System architecture documentation',
                    'Monitoring backend implementation',
                    'Interactive dashboard frontend',
                    'Alert management system',
                    'Implementation guide',
                    'Performance evaluation report'
                  ],
                  assessmentCriteria: [
                    'System architecture quality',
                    'Monitoring effectiveness',
                    'Dashboard usability',
                    'Code quality',
                    'Documentation thoroughness',
                    'Alert accuracy and relevance'
                  ]
                }
              },
              {
                title: 'Regulatory Reporting Automation',
                duration: '2 weeks',
                description: 'Design and implement automated systems for regulatory reporting',
                topics: [
                  {
                    title: 'Regulatory Reporting Fundamentals',
                    duration: '3 hours',
                    type: 'video',
                    description: 'Understanding regulatory reporting requirements and automation opportunities',
                    keyPoints: [
                      'Regulatory reporting landscape',
                      'Common reporting challenges',
                      'Data governance considerations',
                      'Reporting workflows',
                      'Automation opportunities'
                    ],
                    videoUrl: '/videos/regulatory-reporting-intro.mp4'
                  },
                  {
                    title: 'Data Integration for Reporting',
                    duration: '4 hours',
                    type: 'coding',
                    description: 'Building data integration pipelines for regulatory reporting',
                    keyPoints: [
                      'Data source identification',
                      'ETL process design',
                      'Data normalization',
                      'Quality control measures',
                      'Error handling strategies'
                    ],
                    interactiveElements: [
                      {
                        type: 'code-editor',
                        config: {
                          initialCode: "# Implement a data integration pipeline for regulatory reporting\nimport pandas as pd\nimport numpy as np\nimport sqlite3\nimport logging\nfrom datetime import datetime, timedelta\nfrom typing import Dict, List, Optional, Tuple, Any\n\n# Set up logging\nlogging.basicConfig(level=logging.INFO,\n                   format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')\nlogger = logging.getLogger('regulatory_reporting')\n\nclass DataIntegrationPipeline:\n    \"\"\"Pipeline for integrating data from multiple sources for regulatory reporting\"\"\"\n    \n    def __init__(self, config: Dict[str, Any]):\n        \"\"\"Initialize the pipeline with configuration\n        \n        Args:\n            config: Dictionary with pipeline configuration\n        \"\"\"\n        self.config = config\n        self.data_sources = config.get('data_sources', {})\n        self.output_path = config.get('output_path', './output')\n        self.report_date = config.get('report_date', datetime.now().strftime('%Y-%