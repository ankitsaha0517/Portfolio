
let workContenter = document.querySelector(".work-container");

const data = [
    {
        name: "Duo <br> Studio",
        video: "./video/dustdio.mp4",
        dec: "Developed an interactive web experience with HTML, CSS, and JavaScript, implementing GSAP for seamless animations and enhanced visual appeal.",
        projectLink: "https://ankitsaha0517.github.io/Duo-Studio-clone/"
    },
    {
        name: "Sundown <br> Studio",
        video: "./video/sundown.mp4",
        dec: "Developed an interactive web experience with HTML, CSS, and JavaScript, implementing GSAP for seamless animations and enhanced visual appeal.",
        projectLink: "https://ankitsaha0517.github.io/sundown-studio-clone/"
    },
    {
        name: "Cynthia <br> Ugwu",
        video: "./video/cynthea.mp4",
        dec: "Developed an interactive web experience with HTML, CSS, and JavaScript, implementing GSAP for seamless animations and enhanced visual appeal.",
        projectLink: "https://ankitsaha0517.github.io/Cynthia-Ugwu-clone/"
    },
    {
        name: "work",
        video: "./video/work.mp4",
        dec: "Developed an interactive web experience with HTML, CSS, and JavaScript, implementing GSAP for seamless animations and enhanced visual appeal.",
        projectLink: "https://ankitsaha0517.github.io/WORKS-studio-clone/"
    }

];

data.forEach((item) => {
    workContenter.innerHTML += `
        <div class="work">
            <div class="work-name">
              <h3>${item.name}</h3>
            </div>
            <div class="project ">
              <video autoplay loop muted src="${item.video}"></video>
            </div>
            <div class="work-dec">
              <p>${item.dec}</p>
              <a class="btn" href="${item.projectLink}" target="_blank">View project</a>
            </div>
        </div>
    `;
});





let a = document.querySelectorAll(".work");

a.forEach((el) => {
  el.addEventListener("mouseenter", function () {
    let project = el.querySelector('.project')
    project.classList.add('active')

  });
  el.addEventListener("mouseleave", function () {
    let project = el.querySelector('.project')
    project.classList.remove('active')

  });
});
