/* ================================================
   DATA — แก้ไขส่วนนี้เพื่ออัปเดต portfolio
================================================ */
const data = {
  name: "Mike Chaethong",
  role: "Web APP Developer",
  desc: "Full-stack developer เขียนได้ทั้ง frontend และ backend ชอบแก้ปัญหาและสร้างของที่ใช้งานได้จริง — บางทีก็เขียนบทความด้วย",

  skills: [
    { category: "Frontend", tags: ["HTML", "CSS", "JavaScript"] },
    { category: "Backend",  tags: ["PHP", "MySQL"] },
    { category: "Tools",    tags: ["VS Code", "GitHub", "Git"] }
  ],

  /* เพิ่มผลงานใหม่ตรงนี้
     category ใช้สำหรับ filter — ใส่ให้ตรงกันเพื่อให้ filter ทำงาน */
  projects: [
    {
      name: "Portfolio Website",
      desc: "เว็บ portfolio ส่วนตัว สร้างด้วย HTML/CSS/JS ล้วน ไม่พึ่ง framework",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "Web",
      url: "https://github.com/mikegonna/my-portfolio",
      year: "2026"
    },
    {
      name: "Computer Report",
      desc: "เว็บแอปเกี่ยวกับ แจ้งซ่อม computer",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "Web",
      url: "https://github.com/mikegonna/computer-report-system",
      year: "2026"
    },
    {
      name: "Checklist System",
      desc: "เว็บแอปเกี่ยวกับ ตรวจสอบความพร้อมใช้งานของห้อง Datacenter และ กล้อง CCTV แต่ละจุด",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "Web",
      url: "https://github.com/mikegonna/checklist-system",
      year: "2026"
    },
    {
      name: "meet-booking",
      desc: "เว็บแอปเกี่ยวกับ จองห้องประชุม สามารถเพิ่ม ลบ แก้ไขได้",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "Web",
      url: "https://github.com/mikegonna/meet-booking",
      year: "2026"
    },
    {
      name: "lotterry",
      desc: "เว็บไว้สำหรับส่มตัวเลขเพื่อรับของรางวัล ภายในองค์กร",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Web",
      url: "https://github.com/mikegonna/lotterry",
      year: "2026"
    }
  ]
};

/* ================================================
   RENDER
================================================ */
function init() {
  document.getElementById('navLogo').textContent = data.name.toLowerCase().replace(' ', '');
  document.getElementById('heroTag').textContent = `// ${data.role}`;
  document.getElementById('heroTitle').innerHTML = `Hi, I'm <em>${data.name}</em>`;
  document.getElementById('heroDesc').textContent = data.desc;
  document.getElementById('footer').textContent =
    `© ${new Date().getFullYear()} ${data.name}`;

  renderSkills();
  renderFilters();
  renderProjects('all');
}

function renderSkills() {
  document.getElementById('skillsGrid').innerHTML = data.skills.map(s => `
    <div class="skill-item">
      <p class="skill-category">${s.category}</p>
      <div class="skill-tags">${s.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

function renderFilters() {
  const cats = ['all', ...new Set(data.projects.map(p => p.category))];
  document.getElementById('filterBar').innerHTML = cats.map(c => `
    <button class="filter-btn ${c === 'all' ? 'active' : ''}"
      onclick="setFilter(this, '${c}')">
      ${c === 'all' ? 'ทั้งหมด' : c}
    </button>
  `).join('');
}

function renderProjects(filter) {
  document.getElementById('projectsGrid').innerHTML = data.projects.map(p => `
    <a class="project-card ${filter !== 'all' && p.category !== filter ? 'hidden' : ''}"
       href="${p.url}" target="_blank" rel="noopener" data-cat="${p.category}">
      <div class="project-header">
        <span class="project-name">${p.name}</span>
        <span class="project-arrow">↗</span>
      </div>
      <p class="project-desc">${p.desc}</p>
      <div class="project-footer">
        <div class="project-tech">${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div>
        <span class="project-year">${p.year}</span>
      </div>
    </a>
  `).join('');
}

function setFilter(btn, cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => {
    card.classList.toggle('hidden', cat !== 'all' && card.dataset.cat !== cat);
  });
}

function toggleMenu() { document.getElementById('mobileNav').classList.toggle('open'); }
function closeMenu()  { document.getElementById('mobileNav').classList.remove('open'); }

init();