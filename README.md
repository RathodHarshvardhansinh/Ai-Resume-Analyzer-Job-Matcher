# 🎓 ResumeAI — Resume Analyzer & Job Matcher
## College Project by Rathod Harshvardhansinh

---

## 📁 Files List (Saare Files)
```
resume-project/
├── login.html              ← Login Page
├── register.html           ← Registration Page  
├── dashboard.html          ← Job Seeker Dashboard
├── upload-resume.html      ← Resume Upload + Analysis
├── ats-score.html          ← ATS Score Details
├── job-match.html          ← Job Recommendations
├── recruiter-dashboard.html ← Recruiter Portal (Job Post)
└── README.md               ← This file
```

---

## 🚀 VS Code mein kaise chalayein (How to Run)

### Step 1: VS Code Install karo
- Download: https://code.visualstudio.com/

### Step 2: Live Server Extension Install karo
- VS Code kholo
- Left side mein Extensions icon (square) pe click karo
- "Live Server" search karo
- Install karo (by Ritwick Dey)

### Step 3: Project Folder Kholo
- VS Code mein File → Open Folder
- Resume-project folder select karo

### Step 4: Live Server Start Karo
- `login.html` file pe right-click karo
- "Open with Live Server" pe click karo
- Browser mein automatically khulega! 🎉

---

## 📖 Project Features (Teacher ko samjhao)

### 👤 1. Login Page (login.html)
- **Job Seeker** ya **Recruiter** select karo
- Email + Password se login karo
- Click karo "Login" → Dashboard pe redirect hoga

### 📝 2. Registration Page (register.html)
- New account banao
- Role choose karo (Job Seeker / Recruiter)
- Password strength indicator dikhata hai
- Form fill karo → Account ban jayega

### 🏠 3. Dashboard (dashboard.html)
- ATS Score, Job Matches, Applications dikhaata hai
- Skills section — konsi skills hain, konsi missing hain
- Education section
- Recent activity
- Top job matches

### 📄 4. Resume Upload (upload-resume.html)
- PDF/DOC file drag & drop ya browse karke upload karo
- "Analyze Resume" button dabao
- 4 steps animation dikhega: Upload → Extract → AI Analysis → Job Matching
- Parsed data dikhega — Name, Email, Skills, Education

### 📊 5. ATS Score (ats-score.html)
- **ATS = Applicant Tracking System** 
- Companies ka software jo resume ko automatically filter karta hai
- Score 0-100% mein milta hai
- Categories: Formatting, Keywords, Summary, Experience, Education, Skills
- Improvement suggestions milte hain

### 🎯 6. Job Matches (job-match.html)
- Resume ke basis pe jobs suggest karta hai
- Match % dikhata hai (95%, 88%, etc.)
- Skills jo aapke paas hain wo green mein highlight
- "Apply Now" button se apply kar sakte ho
- Job details modal mein open hoti hai

### 🏢 7. Recruiter Dashboard (recruiter-dashboard.html)
- Recruiter login pe automatically aata hai
- **Post New Job** — Job posting ka form
- Active job listings
- Candidate list with match scores
- Analytics: Views, Applications, Shortlisted, Hired

---

## 🎨 Design Features
- Dark theme with purple/pink gradients
- Animated blobs in background
- Smooth hover effects on all cards
- Progress bar animation while analyzing
- Mobile responsive

---

## 🔑 Test Login Credentials
- **Any email + any password** kaam karega (college demo)
- Job Seeker: Select "Job Seeker" role → Dashboard pe jayega
- Recruiter: Select "Recruiter" role → Recruiter Dashboard pe jayega

---

## 💡 Teacher ko Hindi mein kaise explain karein:

**"Sir/Ma'am, yeh ek AI-based Resume Analyzer hai. Isme 2 types ke users hain — Job Seeker aur Recruiter."**

**"Job Seeker apna resume upload karta hai, system uska ATS Score check karta hai jo batata hai ki resume kitna job-ready hai. Phir system automatically best matching jobs suggest karta hai."**

**"Recruiter portal se companies naukri post kar sakti hain, aur best candidates dekhne mein help milti hai."**

**"Frontend pure HTML, CSS, JavaScript se banaya hai — koi framework nahi. LocalStorage se data save hota hai."**
