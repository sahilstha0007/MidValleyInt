const careerPathData = {
  frontImage: "/image/Carrer.webp",
  title: "Credit Transfer and Pathways Program",
  subtitle: "Credit Transfer & Pathway Programs for Students",
  breadcrumbPath: "Home > Students > Credit Transfer and Pathways Program",
  
  description: [
    "At Mid-Valley International College, we offer the Credit Transfer Pathway Program, providing an exceptional opportunity for students to transfer credits to renowned Australian and UK Universities. Rest assured, we are constantly expanding our pathway program and anticipate adding more prestigious universities in the near future.",
    
    "Currently, our students enrolled in the Bachelor of Business (Finance) Hons program can seamlessly progress to Year 2 of BA (Hons) Banking & Finance at Bangor University in the UK. MVIC has successfully established a recognized pathway program with Southern Cross University in Australia. Students can initiate their journey by undertaking the Bachelor of Business (Finance) (Hons) program at MVIC and subsequently transfer to the Bachelor in Business and Enterprise (finance specialization) Program at Southern Cross University.",
    
    "In a similar vein, students can enroll in the Bachelor of Business Hospitality Management (Hons) program at Mid Valley International College and smoothly transition to the Bachelor of Business in Hotel Management Program at Southern Cross University.",
    
    "Furthermore, MVIC proudly offers the Bachelor of Hotel Management (Hons) program, enabling students to transfer to The Hotel School Australia to pursue their studies.",
    
    "Students must fulfill the minimum academic and English requirements specified by the respective universities to be eligible for these opportunities. Rest assured, we are constantly expanding our pathway program and anticipate adding more prestigious universities in the near future."
  ],
  
  universities: [
    {
      name: "Bangor University",
      transferFrom: "BBusFinance Credit Transfer To",
      program: "BA (Hons) Banking and Finance",
      details: [
        { label: "Credit Pathway", value: "2+1 years" },
        { label: "CGPA Requirement", value: "2.7 and above" },
        { label: "Tuition Fee", value: "GBP 15,500" },
        { label: "Estimated Annual Living Expenses", value: "GBP 9,207" }
      ],
      decorations: {
        circle1: "bg-blue-100",
        circle2: "bg-blue-600",
        shape: "bg-pink-200"
      },
      image: "/image/career/bangor.webp",
    },
    {
      name: "The Hotel School Australia",
      transferFrom: "BBusFinance Credit Transfer To",
      program: "Bachelor of Hotel Manager",
      details: [
        { label: "Credit Pathway", value: "1+2 years" },
        { label: "CGPA Requirement", value: "2.5 and above" }
      ],
      decorations: {
        circle1: "bg-yellow-100",
        circle2: "bg-orange-600",
        shape: "bg-green-200"
      },
      image: "/image/career/ths.webp",
    },
    {
      name: "Southern Cross University",
      transferFrom: "BBusFinance Credit Transfer To",
      program: "Bachelor of Business (Finance) (Hons)",
      altProgram: "Bachelor of Business Hospitality Management (Hons)",
      details: [
        { label: "Credit Pathway", value: "1+2 years" },
        { label: "CGPA Requirement", value: "2.5 and above" }
      ],
      decorations: {
        circle1: "bg-teal-100",
        circle2: "bg-teal-600",
        shape: "bg-purple-200"
      },
      image: "/image/career/scu.webp",
    }
  ],
  
  applicationSteps: [
    "Contact our admissions office to schedule a consultation",
    "Submit your academic transcripts and English proficiency test results",
    "Meet with our academic counselors to discuss your career goals",
    "Apply to your preferred program at Mid-Valley International College",
    "Complete the requirements for the credit transfer pathway"
  ]
};

export default careerPathData;
