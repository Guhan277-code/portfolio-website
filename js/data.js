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
    org: "Cappriciosec University · MongoDB, Inc.",
    desc: "I completed the Cybersecurity Career Webinar 101 and the Linux & Web Bug-Bounty Bootcamp through Cappriciosec University, and MongoDB Basics for Students through MongoDB, Inc. — stacking both security fundamentals and database fundamentals alongside my first-year coursework."
  }
];

const GK_ABOUT_TIMELINE = [
  { when: "2026", title: "Started B.Tech IT at SMVEC", desc: "I began the Information Technology program, picking up HTML, CSS, JavaScript, Bootstrap, Java, Python and C." },
  { when: "May 2026", title: "Completed two Cappriciosec University programs", desc: "I completed the Cybersecurity Career Webinar 101 and the Linux & Web Bug-Bounty Bootcamp — my first formal steps into security." },
  { when: "2026", title: "Shipped the College Admission Registration System", desc: "I shipped a full production-style project: Supabase database, EmailJS automated notifications, and a live admin dashboard." },
  { when: "2026", title: "Built Moon Garden", desc: "A small, self-contained creative front-end project — an animated moonlit garden scene with vanilla JavaScript interactivity — built to explore atmosphere and polish with zero frameworks or backend." },
  { when: "Aug 2026", title: "Completed MongoDB Basics for Students", desc: "I earned a certificate from MongoDB, Inc. covering NoSQL fundamentals, rounding out my database skillset alongside the SQL/relational work in my other projects." },
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
    id: "library-management-system",
    featured: false,
    title: "Library Management System",
    tagline: "A console-based Java + JDBC application with login, full CRUD, and MySQL-backed book issue/return tracking.",
    cover: null,
    codeLang: "Java · JDBC · MySQL",
    tech: ["Java", "JDBC", "MySQL"],
    purpose: `A step up from my earlier OOP-only library project — this is a full console-based Library
      Management System that logs a librarian in, then drives every operation (add, update, delete,
      search, issue and return books) straight against a live MySQL database over JDBC, with real
      transaction handling for the issue/return workflow instead of just reading data back out.`,
    features: [
      "Hardcoded login screen gating access to the dashboard",
      "9-option console dashboard: Add, Update, Delete, Search, Issue, Return, View All Books, View Issued Books, Exit",
      "Add / Update / Delete Book — full CRUD against the \"books\" table",
      "Search Book — partial-match search by title or author using SQL LIKE",
      "Issue Book — checks available copies, decrements available_quantity and logs a row in \"issued_books\", wrapped in a manual commit/rollback transaction",
      "Return Book — marks an issue record RETURNED and increments available_quantity back, also transactional",
      "View All Books and View Issued Books — live-formatted table output straight from MySQL",
      "Every query goes through PreparedStatement — no raw string-concatenated SQL, so it's SQL-injection safe by construction",
      "Layered structure: model / dao / database / service / util packages, not one giant class"
    ],
    workflow: [
      "Program starts, DBConnection opens a JDBC connection to the local library_db MySQL database.",
      "Menu.java shows the login screen; hardcoded admin credentials gate entry to the dashboard.",
      "LibraryService prints the 9-option dashboard and reads the librarian's menu choice in a loop.",
      "Each option delegates to BookDAO, which builds a PreparedStatement and executes it against MySQL.",
      "Issue Book and Return Book run as explicit transactions: check state, update books, insert/update issued_books, then commit — or rollback on any failure.",
      "Results are formatted and printed straight back to the console; the loop continues until the librarian chooses Exit."
    ],
    technologies: {
      "Language": "Java (JDK)",
      "IDE": "Visual Studio Code, with the Extension Pack for Java",
      "Database": "MySQL — a library_db schema with books and issued_books tables",
      "Driver": "MySQL Connector/J (mysql-connector-j-9.7.0.jar), loaded via JDBC",
      "Pattern": "Layered architecture (model / dao / database / service / util) with PreparedStatement everywhere and manual commit/rollback transactions for issue & return"
    },
    code_snippet: `public boolean issueBook(int bookId, String borrowerName) {
    String checkSql  = "SELECT available_quantity FROM books WHERE id = ?";
    String updateSql = "UPDATE books SET available_quantity = available_quantity - 1 WHERE id = ?";
    String insertSql = "INSERT INTO issued_books (book_id, borrower_name, issue_date, status) " +
                        "VALUES (?, ?, CURDATE(), 'ISSUED')";

    Connection con = DBConnection.getConnection();
    con.setAutoCommit(false);
    try {
        int available = 0;
        try (PreparedStatement checkPs = con.prepareStatement(checkSql)) {
            checkPs.setInt(1, bookId);
            ResultSet rs = checkPs.executeQuery();
            if (rs.next()) available = rs.getInt("available_quantity");
        }
        if (available <= 0) { con.rollback(); return false; }

        try (PreparedStatement updatePs = con.prepareStatement(updateSql)) {
            updatePs.setInt(1, bookId);
            updatePs.executeUpdate();
        }
        try (PreparedStatement insertPs = con.prepareStatement(insertSql)) {
            insertPs.setInt(1, bookId);
            insertPs.setString(2, borrowerName);
            insertPs.executeUpdate();
        }
        con.commit();
        return true;
    } catch (SQLException e) {
        con.rollback();
        return false;
    } finally {
        con.setAutoCommit(true);
    }
}`,
    gallery: ["images/outputs/library-management-collage.jpg"],
    links: { demo: null, details: "project-detail.html?id=library-management-system" }
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
    code_snippet: `<div style="text-align:left;color:tomato;margin:40px;">
  Description:
</div>
<div style="text-align:justify;width:1200px;">
  <b>Hypertext Markup Language (HTML)</b> is the foundational backbone of
  the World Wide Web, serving as the standard markup language used to
  structure and display content online. <b>Originally developed by
  Sir Tim Berners-Lee in 1990</b>, HTML acts as a web page's
  architectural blueprint...
</div>

<address style="text-align:left;">
  NAME: GUHAN<br>
  ADDRESS: PONDICHERRY<br>
  DATE: 09.06.2026<br>
</address>`,
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
    code_snippet: `<table border="2">
  <tr>
    <th>Day/Hour</th><th>8:30-9:00</th><th>9:00-9:45</th><th>9:45-10:30</th>
    <th>10:30-10:45</th><th>10:45-11:30</th><th>11:30-12:15</th><th>12:15-1:10</th>
    <th>1:10-1:55</th><th>1:55-2:45</th><th>2:45-2:55</th><th>2:55-3:40</th><th>3:40-4:20</th>
  </tr>
  <tr>
    <td><b>Monday</b></td>
    <td>Moral/Catechism</td>
    <td>Physics</td>
    <td>Chemistry</td>
    <td>Break</td>
    <td>Computer Science</td>
    <td>English</td>
    <td>Lunch</td>
    <td colspan="2">Computer Science Lab</td>
    <td>Break</td>
    <td>Maths</td>
    <td>Physics</td>
  </tr>
  <!-- Tuesday–Friday rows follow the same pattern, each with its own subject order -->
</table>`,
    gallery: ["images/projects/timetable-screenshot.png"],
    links: { demo: null, details: "project-detail.html?id=school-timetable" }
  },
  {
    id: "moon-garden",
    featured: false,
    title: "Moon Garden",
    tagline: "A moonlit-garden scene where a glowing moon hands out a random uplifting quote and flowers bloom on click.",
    cover: "images/outputs/moon-garden-cover.jpg",
    codeLang: "HTML5 · CSS3 · JavaScript",
    tech: ["HTML5", "CSS3", "JavaScript"],
    purpose: `Moon Garden is a creative web project designed with a visually appealing moonlit garden theme,
      focusing on interactive elements, modern styling, and a smooth user experience. It's a small, self-contained
      piece of front-end storytelling rather than a data-driven system — the whole point was to see how much
      atmosphere and personality a page can have with nothing but a gradient sky, a handful of DOM listeners
      and a bit of CSS animation, no frameworks or backend involved.`,
    features: [
      "Clickable moon that glows brighter (bigger box-shadow) and reveals a random uplifting quote on every click",
      "Six-quote pool cycled with Math.random(), so the moon's message keeps changing across clicks",
      "Hand-placed starfield with a looping CSS keyframe twinkle animation (scale + opacity pulsing)",
      "Row of flower emojis that \"bloom\" — scale up and rotate — when clicked, toggled on and off via classList",
      "Two-band scene layout: a gradient night sky on top, a solid green ground strip below, for a clean illustrative split",
      "Zero dependencies — pure HTML, CSS and vanilla JavaScript"
    ],
    workflow: [
      "Page loads showing the gradient night sky, the moon, six twinkling stars and a \"Click the moon\" prompt over the flower bed.",
      "The stars run an independent CSS keyframe animation on a loop the entire time, giving the sky constant subtle motion.",
      "Clicking the moon fires a click listener that boosts its box-shadow glow and swaps in a random quote from a fixed array.",
      "Clicking any flower toggles a \"bloom\" class on just that flower, scaling and rotating it — clicking again reverses it."
    ],
    technologies: {
      "Structure": "Semantic-ish HTML5 laid out as two full-width scene bands (sky and ground)",
      "Styling": "CSS3 — linear-gradient sky background, @keyframes twinkle animation, transform-based bloom transitions on the flowers",
      "Interactivity": "Vanilla JavaScript — document.querySelector(All), addEventListener, classList.toggle, Math.random() for the quote picker"
    },
    future: [
      "Add a gentle ambient-sound toggle to match the night-garden mood",
      "Make the flower row wrap responsively on small screens instead of a fixed gap row",
      "Let visitors submit their own quotes for the moon to hand out"
    ],
    code_snippet: `const moon = document.getElementById("moon");
const quote = document.getElementById("quote");
const quotes = [
  "Believe in yourself ✨",
  "Dream Big 🌙",
  "Keep Growing 🌸",
  "Stay Positive 💙",
  "Every Star Shines ⭐",
  "Smile, Tomorrow is Beautiful 😊"
];

moon.addEventListener("click", function () {
  moon.style.boxShadow = "0 0 80px white";
  quote.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
});

document.querySelectorAll(".flower").forEach(function (flower) {
  flower.addEventListener("click", function () {
    flower.classList.toggle("bloom");
  });
});`,
    gallery: ["images/outputs/moon-garden-screenshot.jpg"],
    links: { demo: null, details: "project-detail.html?id=moon-garden" }
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
  },
  {
    id: "mongodb-basics",
    title: "MongoDB Basics for Students",
    subtitle: "NoSQL Fundamentals — Documents, Collections & Queries",
    issuer: "MongoDB, Inc.",
    date: "12 Aug 2026",
    credentialId: "MDB9wejwwinip",
    image: "images/certificates/cert3-mongodb.jpg",
    description: `Covers the fundamentals of MongoDB and NoSQL document databases —
      collections, documents, CRUD operations and basic querying, taught through
      MongoDB's official student program. This isn't a cybersecurity certificate — it's a
      database one, and it rounds out my growing data skillset alongside the relational,
      SQL-based work I'd already done (MySQL in my Bank Management System, Supabase/Postgres
      in my admission system). Having hands-on grounding in both SQL and NoSQL approaches to
      data matters for the security path I'm on too: understanding how a database is actually
      structured and queried is exactly what's needed to recognise and prevent
      injection-style vulnerabilities later on.`
  }
];
