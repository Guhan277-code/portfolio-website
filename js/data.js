/* ==========================================================================
   GK DATA LAYER
   Single source of truth for profile, projects, certificates and skills.
   Pages render from this file, and the AI assistant answers from it too.
   To add a new project or certificate later: just push a new object into
   the arrays below — no other file needs to change.
   ========================================================================== */

const GK_PROFILE = {
  name: "Guhan Kalaivanan",
  initials: "GK",
  role: "Information Technology Student",
  college: "Sri Manakula Vinayagar Engineering College (SMVEC)",
  location: "Puducherry, India",
  department: "Information Technology",
  year: "1st Year, B.Tech",
  goal: "Cybersecurity Specialist",
  email: "guhankalai277@gmail.com",
  phone: "+91 81226 97531",
  taglines: [
    "Information Technology Student",
    "SMVEC",
    "AI Assisted Learner",
    "Building Real World Projects",
    "Future Software Engineer"
  ],
  about: `I'm a first-year B.Tech Information Technology student at Sri Manakula
    Vinayagar Engineering College (SMVEC) in Puducherry. My engineering journey is built around
    three pillars: writing real, working software instead of toy exercises; learning cybersecurity
    fundamentals through structured webinars and bootcamps; and using AI tools deliberately to move
    faster while still understanding every line I ship. I've already shipped a full-stack
    admission-management system with a live database and email automation, alongside classic
    Java systems programming projects — and I'm now steering that same builder's habit toward
    security: reading up on web attack surfaces, Linux fundamentals and bug-bounty methodology.`,
  goals: `Short term, I'm deepening my cybersecurity fundamentals — Linux internals, web
    application security (the OWASP-style bugs covered in my bug-bounty training), and secure
    coding practice within the projects I already build. Long term, my goal is to work as a
    Cybersecurity Specialist: someone who can both build systems and break them safely to make
    them stronger.`
};

const GK_STATS = [
  { value: 6, suffix: "+", label: "Projects Completed" },
  { value: 2, suffix: "+", label: "Professional Certificates" },
  { value: 7, suffix: "+", label: "Programming Languages & Tools" },
  { value: 2026, suffix: "", label: "Engineering Journey" }
];

/* -------------------------------------------------------------------- */
/* SKILLS — programming languages only, per the brief                    */
/* -------------------------------------------------------------------- */
const GK_SKILLS = [
  { name: "HTML5", level: 100, logo: "images/logos/html5.jpg" },
  { name: "CSS3", level: 90, logo: "images/logos/css3.png" },
  { name: "JavaScript", level: 70, iconKey: "js" },
  { name: "Bootstrap", level: 65, iconKey: "bootstrap" },
  { name: "Python", level: 65, iconKey: "python" },
  { name: "Java", level: 72, iconKey: "java" },
  { name: "C", level: 80, iconKey: "c" }
];

/* -------------------------------------------------------------------- */
/* EDUCATION TIMELINE                                                    */
/* -------------------------------------------------------------------- */
const GK_EDUCATION = [
  {
    when: "2026 — Present",
    title: "B.Tech, Information Technology",
    org: "Sri Manakula Vinayagar Engineering College (SMVEC), Puducherry",
    desc: "I'm a first-year Information Technology student here. My coursework and self-study span programming fundamentals, web development and an early, deliberate focus on cybersecurity — reinforced by external webinars and bootcamps outside the classroom.",
    photos: ["images/education/smvec-1.jpg", "images/education/smvec-2.jpg"]
  },
  {
    when: "Higher Secondary",
    title: "Computer Science Group",
    org: "Petit Seminaire Higher Secondary School, Puducherry",
    desc: "I completed my higher secondary education in the Computer Science group at Petit Seminaire Higher Secondary School, building the programming foundation (logic, structured problem-solving) that led me into the B.Tech IT program.",
    photos: ["images/education/petit-1.jpg", "images/education/petit-2.jpg"]
  },
  {
    when: "Ongoing",
    title: "Independent Certifications",
    org: "Cappriciosec University",
    desc: "I completed the Cybersecurity Career Webinar 101 and the Linux & Web Bug-Bounty Bootcamp alongside my first-year coursework, to start building a security specialization early."
  }
];

const GK_ABOUT_TIMELINE = [
  { when: "2026", title: "Started B.Tech IT at SMVEC", desc: "I began the Information Technology program, picking up HTML, CSS, JavaScript, Bootstrap, Java, Python and C." },
  { when: "May 2026", title: "Completed two Cappriciosec University programs", desc: "I completed the Cybersecurity Career Webinar 101 and the Linux & Web Bug-Bounty Bootcamp — my first formal steps into security." },
  { when: "2026", title: "Shipped the College Admission Registration System", desc: "I shipped a full production-style project: Supabase database, EmailJS automated notifications, and a live admin dashboard." },
  { when: "Now", title: "Bridging web development with security", desc: "I'm applying secure-coding thinking to my existing projects and exploring my next build with a security-first lens." }
];

/* -------------------------------------------------------------------- */
/* PROJECTS                                                              */
/* -------------------------------------------------------------------- */
const GK_PROJECTS = [
  {
    id: "admission-system",
    featured: true,
    title: "College Admission Registration System",
    tagline: "A production-style admissions pipeline — public application form, live Supabase database, automatic email confirmations and a real-time admin dashboard.",
    cover: "images/projects/admission-form-screenshot.png",
    tech: ["HTML5", "CSS3", "JavaScript", "Supabase", "EmailJS"],
    liveNote: "Runs entirely client-side against a live Supabase project — no backend server required.",
    purpose: `Most student "admission form" projects stop at collecting form data on a page. I wanted
      mine to go further: it's a genuine two-sided system. Applicants fill out a full admission form —
      personal details, parent/guardian details, academic marks and course preference — and the data
      is written straight into a live Postgres database via Supabase. The moment a student submits,
      an automated confirmation email fires through EmailJS, and the college's staff can review every
      application in real time through a dedicated admin dashboard.`,
    features: [
      "Multi-section form: personal info, academic details, contact & guardian info",
      "Live age auto-calculation from date of birth",
      "Automatic engineering cut-off calculation (Maths + Physics⁄2 + Chemistry⁄2)",
      "Client-side mark validation (rejects values outside 0–100)",
      "Passport photo upload straight to Supabase Storage",
      "Unique auto-generated Application ID on every submission",
      "Automated confirmation email via EmailJS on successful submission",
      "Dedicated success page showing application ID, date and time",
      "Admin dashboard that reads the live \"students\" table and renders every applicant",
      "Fully responsive layout with animated form entry and validation states"
    ],
    workflow: [
      "Applicant opens the registration form and fills in personal, family and academic sections.",
      "JavaScript validates required fields, mark ranges (0–100) and auto-calculates age and cut-off live as the applicant types.",
      "On submit, the passport photo is uploaded to Supabase Storage and a public URL is generated.",
      "The full application record (including the photo URL) is inserted into the Supabase \"students\" table.",
      "EmailJS sends an automatic confirmation email with the applicant's name, course and cut-off.",
      "The applicant is redirected to a success page showing a generated Application ID, submission date and time.",
      "Admin staff open the dashboard, which queries Supabase directly and renders every application — photo, contact details, marks and calculated cut-off — into a live table."
    ],
    technologies: {
      "Frontend": "Semantic HTML5 form structure, custom CSS3 (card layout, gradient background, focus states, responsive grid), vanilla JavaScript for all validation and logic — no frameworks.",
      "Database": "Supabase (hosted Postgres) — a \"students\" table stores every field submitted through the form.",
      "File storage": "Supabase Storage holds applicant photos; the public URL is saved back onto the student record.",
      "Email automation": "EmailJS triggers a templated confirmation email directly from the browser on successful submission — no backend mail server needed.",
      "Admin panel": "A second page (admin.html / admin.js) queries the same Supabase table with the Supabase JS client and renders every applicant into a live table, including their photo."
    },
    security: `A deliberate security choice — and a good habit I'm trying to build early as a future
      security specialist: Supabase's client-side key here is a *publishable* key, meant to be exposed
      in the browser — it's not a secret. Real protection comes from Supabase Row Level Security (RLS)
      policies on the database, which is the correct place to enforce who can insert, read or update
      student records, rather than trying to hide the key.`,
    future: [
      "Add Supabase Auth so only authenticated staff can view the admin dashboard",
      "Enforce Row Level Security policies restricting writes to the form flow only",
      "Add search, sorting and CSV export to the admin dashboard",
      "Move the engineering cut-off formula server-side (via a Supabase Edge Function) to prevent client-side tampering",
      "Add SMS/WhatsApp confirmation alongside email"
    ],
    gallery: [
      "images/projects/admission-form-screenshot.png",
      "images/projects/admission-success-screenshot.png",
      "images/projects/admin-dashboard-screenshot.png"
    ],
    code_snippet: `// script.js — live engineering cut-off calculation
function calculateCutoff(){
  const m = parseFloat(maths.value) || 0;
  const p = parseFloat(physics.value) || 0;
  const c = parseFloat(chemistry.value) || 0;
  const total = m + (p / 2) + (c / 2);
  cutoff.value = total.toFixed(2);
}`,
    links: { demo: "live-demo/admission-system/index.html", details: "project-detail.html?id=admission-system" }
  },
  {
    id: "bank-management",
    featured: false,
    title: "Bank Management System",
    tagline: "A Java + JDBC console application that connects to a live MySQL database to manage bank account records.",
    cover: null,
    codeLang: "Java · JDBC",
    tech: ["Java", "JDBC", "MySQL"],
    purpose: `A systems-programming project I built to go past printing to the console — it connects
      Java directly to a MySQL database using JDBC, and reads real bank account records back out
      of a live table.`,
    features: [
      "JDBC connection to a local MySQL database (com.mysql.cj.jdbc.Driver)",
      "SQL SELECT query executed against a \"bank\" table",
      "Iterates and prints every account: bank name, account number, holder name, phone, date opened, balance",
      "Clean try/catch exception handling around the connection lifecycle",
      "Properly closes ResultSet, Statement and Connection after use"
    ],
    workflow: [
      "Load the MySQL JDBC driver class.",
      "Open a connection to the local \"guhan\" database using DriverManager.",
      "Execute a SELECT * query against the bank table.",
      "Iterate the ResultSet, printing each account's details in a formatted block.",
      "Close the ResultSet, Statement and Connection cleanly."
    ],
    technologies: {
      "Language": "Java (JDK)",
      "Database": "MySQL, accessed via the JDBC driver (com.mysql.cj.jdbc.Driver)",
      "Pattern": "Direct DriverManager connection + Statement/ResultSet — no ORM, for a first-principles understanding of JDBC"
    },
    future: [
      "Move the DB URL, user and password out of source code into a config/.env file",
      "Add PreparedStatement usage to prevent SQL injection on any future user-supplied queries",
      "Add CRUD operations (create/update/delete accounts), not just read"
    ],
    code_snippet: `Connection conn = DriverManager.getConnection(url, user, password);
String query = "SELECT * FROM bank";
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery(query);
while (rs.next()) {
  System.out.println("Bank Name : " + rs.getString("bank_name"));
  System.out.println("Balance   : " + rs.getLong("balance"));
}`,
    gallery: ["images/outputs/bank-output.png"],
    links: { demo: null, details: "project-detail.html?id=bank-management" }
  },
  {
    id: "library-details",
    featured: false,
    title: "Library Details Management System",
    tagline: "A core-Java OOP console program that captures and displays details for a catalogue of library books.",
    cover: null,
    codeLang: "Java · OOP",
    tech: ["Java", "OOP"],
    purpose: `A foundational object-oriented programming project I wrote: a dedicated "values" class
      encapsulates book data (ID, name, author, category) for five books, with clean separation
      between data-capture and data-display responsibilities.`,
    features: [
      "Custom \"values\" class modeling book records as object fields",
      "Scanner-based interactive data entry for 5 books",
      "Dedicated getDetails() method for input, separate from showDetails() for output",
      "Formatted console output with clear section dividers",
      "Demonstrates core OOP principles: encapsulation and single-responsibility methods"
    ],
    workflow: [
      "Program starts and instantiates a \"values\" object.",
      "getDetails() walks the user through entering ID, name, author and category for 5 books via Scanner.",
      "showDetails() then prints every book back out in a clean, bordered format under a library header."
    ],
    technologies: {
      "Language": "Core Java",
      "Concepts": "Object-oriented design (a dedicated data class), java.util.Scanner for interactive I/O"
    },
    future: [
      "Replace the fixed 5-book limit with a dynamic ArrayList<Book>",
      "Persist records to a file or database instead of holding them only in memory",
      "Add search and borrow/return tracking"
    ],
    code_snippet: `class values {
  int bid1; String b1, a1, c1;
  void getDetails(Scanner sc) {
    System.out.println("Enter First book ID:");
    bid1 = sc.nextInt();
    ...
  }
  void showDetails() {
    System.out.println("BOOK ID\\t:" + bid1);
    ...
  }
}`,
    gallery: ["images/outputs/library-output.png"],
    links: { demo: null, details: "project-detail.html?id=library-details" }
  },
  {
    id: "hospital-management",
    featured: false,
    title: "Hospital Management System",
    tagline: "A C console application with full CRUD patient records, persisted to disk with binary file I/O.",
    cover: null,
    codeLang: "C · File I/O",
    tech: ["C", "File Handling"],
    purpose: `A systems-programming project I built entirely in C: a menu-driven hospital records system
      that adds, views, searches, updates and deletes patient records, with every change written to a
      binary file so records survive between runs — a step up from console-only, in-memory demos.`,
    features: [
      "Struct-based Patient record: ID, name, age, disease",
      "Auto-incrementing Patient ID generated on every new entry",
      "Full CRUD menu: Add, View, Search, Update, Delete patients",
      "Binary file persistence (patients.dat) via fwrite/fread — data survives program restarts",
      "Formatted, aligned table view of all patient records",
      "Linear search by Patient ID with a clear found/not-found result",
      "In-place record deletion that shifts the array to close the gap",
      "Clean exit flow with a formatted closing screen"
    ],
    workflow: [
      "On launch, loadFromFile() reads any existing patient count, next ID and records from patients.dat.",
      "The main menu loop offers Add, View, Search, Update, Delete or Exit.",
      "Adding a patient assigns the next auto-incrementing ID, captures name/age/disease, and immediately calls saveToFile().",
      "Viewing prints every record in an aligned ID / Name / Age / Disease table with a running total.",
      "Searching and updating locate a record by ID with a simple linear scan.",
      "Deleting a record shifts every later record back by one position to close the gap, then saves.",
      "Every write path calls saveToFile(), so the on-disk file is always in sync with memory."
    ],
    technologies: {
      "Language": "C (compiled with GCC)",
      "Data model": "A fixed-size array of struct Patient (id, name, age, disease), capped at 100 records",
      "Persistence": "Binary file I/O — fwrite/fread against patients.dat, storing the count, next ID and the full record array in one shot"
    },
    future: [
      "Replace the fixed 100-record array with dynamic memory allocation (malloc/realloc)",
      "Move from a flat binary file to a proper embedded database (e.g. SQLite) for safer concurrent access",
      "Add input validation so age and IDs can't be entered as garbage values",
      "Add a doctor/ward assignment field alongside each patient record"
    ],
    code_snippet: `void saveToFile(){
  FILE *fp = fopen("patients.dat", "wb");
  fwrite(&count, sizeof(int), 1, fp);
  fwrite(&nextID, sizeof(int), 1, fp);
  fwrite(patients, sizeof(struct Patient), count, fp);
  fclose(fp);
}`,
    gallery: ["images/outputs/hospital-output.png"],
    links: { demo: null, details: "project-detail.html?id=hospital-management" }
  },
  {
    id: "article-website",
    featured: false,
    title: "Online Article Website",
    tagline: "A styled HTML article page explaining HTML5 itself — semantic structure, custom styling and clean information hierarchy.",
    cover: "images/projects/article-screenshot.png",
    tech: ["HTML5", "CSS (inline)"],
    purpose: `A focused front-end exercise I did in content structure and readability: a single, well laid
      out article page explaining what HTML is, its origin and its role on the web — practicing
      typography hierarchy, image placement and centered, readable layout.`,
    features: [
      "Centered article layout with a themed background",
      "Featured HTML5 logo image as the visual anchor",
      "Clear description section with bold emphasis on key terms",
      "Two-paragraph structure: technical definition, then a plain-language explanation",
      "Author byline and address block for attribution"
    ],
    workflow: [
      "Page loads with a themed background and centered heading.",
      "The HTML5 logo renders as the visual anchor for the article.",
      "Two description paragraphs explain HTML — first formally, then in plain language.",
      "A byline and address block close out the page."
    ],
    technologies: {
      "Structure": "Semantic HTML5 elements (address, center-based layout)",
      "Styling": "Inline CSS — background color, typography color accents, image sizing"
    },
    future: [
      "Move all inline styles into an external stylesheet",
      "Replace <center> tags with modern flexbox/grid centering",
      "Make the layout responsive for mobile screens"
    ],
    gallery: ["images/projects/article-screenshot.png"],
    links: { demo: null, details: "project-detail.html?id=article-website" }
  },
  {
    id: "school-timetable",
    featured: false,
    title: "School Timetable Website",
    tagline: "A structured HTML timetable for Petit Seminaire Higher Secondary School's Computer Science group, plus a subject/staff reference table.",
    cover: "images/projects/timetable-screenshot.png",
    tech: ["HTML5", "CSS (inline)"],
    purpose: `A data-presentation project: I took a real school timetable — day-by-day periods,
      breaks and lab sessions for the 12-A3 Computer Science batch — and laid it out as a clean,
      readable HTML table alongside a subject/staff-load reference table.`,
    features: [
      "Full Monday–Friday timetable grid with exact period timings",
      "Correctly handles merged lab-session cells (colspan) for double periods",
      "Separate subject/staff/weekly-periods reference table",
      "School header, class identifier and address footer",
      "Alternating header shading for readability"
    ],
    workflow: [
      "Page renders the school name, group and class (12-A3) as a header.",
      "The main timetable table lays out every day against fixed time slots, with lab periods spanning two columns.",
      "A second table lists each subject with its staff member and weekly period count.",
      "An address block anchors the page footer."
    ],
    technologies: {
      "Structure": "Semantic HTML tables with colspan for merged lab periods",
      "Styling": "Inline CSS for header shading and centered layout"
    },
    future: [
      "Convert the static table into data-driven rows generated from a JS array/JSON",
      "Add a responsive/mobile view (card-based day view instead of a wide table)",
      "Add a print-friendly stylesheet"
    ],
    gallery: ["images/projects/timetable-screenshot.png"],
    links: { demo: null, details: "project-detail.html?id=school-timetable" }
  }
];

/* -------------------------------------------------------------------- */
/* CERTIFICATES                                                          */
/* -------------------------------------------------------------------- */
const GK_CERTIFICATES = [
  {
    id: "cybersecurity-webinar-101",
    title: "Cybersecurity Career Webinar 101",
    subtitle: "Job Roles, Skills & Industry Requirements",
    issuer: "Cappriciosec University",
    date: "30 May 2026",
    credentialId: "ab81e8e172b4525d5c73",
    image: "images/certificates/cert1-1.png",
    description: `Covers cybersecurity job roles, responsibilities, industry certifications and the
      essential technical vocabulary of the field — a foundational, career-oriented introduction
      to what working in cybersecurity actually involves.`
  },
  {
    id: "linux-bugbounty-bootcamp",
    title: "Linux and Web Bug-Bounty Bootcamp",
    subtitle: "Burp Suite, Linux Commands, Web Recon, Injection Bugs, SSRF",
    issuer: "Cappriciosec University",
    date: "30 May 2026",
    credentialId: "d738b922b9ce5d879438",
    image: "images/certificates/cert2-1.png",
    description: `A hands-on bootcamp covering Linux command-line fundamentals and core web
      attack techniques — Burp Suite usage, reconnaissance, injection vulnerabilities and
      Server-Side Request Forgery (SSRF) — spanning both practical and theoretical sides of
      web application security.`
  }
];
