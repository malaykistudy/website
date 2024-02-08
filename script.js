const project = document.getElementById("project");
const projectBtn = document.getElementById("project-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");

projectBtn.addEventListener("click", (event) => {
    skills.style.display = "none";
    project.style.display = "flex";
    skillsBtn.classList.remove("active-btn");
    portfolioBtn.classList.add("active-btn")
});

skillsBtn.addEventListener("click", (event) => {
    skills.style.display = "flex";
    project.style.display = "none";
    projectBtn.classList.remove("active-btn");
    skillsBtn.classList.add("active-btn")
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeButton = document.getElementById("toggleTheme");
    const themeIcon = document.querySelector('img[alt="theme icon"]');
    const githubIcon = document.querySelector('img[alt="github icon"]');
    const LinkedinIcon = document.querySelector('img[alt="linkedin icon"]');
    const MailIcon = document.querySelector('img[alt="mail icon"]');

    

    loadTheme();
});