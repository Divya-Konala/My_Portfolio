// import coschedule from "../images/coschedule.png";
const Projects = [
  {
    name: "Typing Playground",
    about:
      "A multi-mode typing test website with the ability to save results for best analysis.",
    img: "./images/swiftkeys.png",
    gitrepo: "https://github.com/Divya-Konala/Typing-Speed-Test",
    tech_stack: "React | Firebase | MUI",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/48/000000/react-native.png"/>`,
      `<img src="https://img.icons8.com/color/48/000000/google-firebase-console"/>`,
      `<img src="https://img.icons8.com/color/48/000000/material-ui"/>`,
    ],
    project_link: "https://swift-keys.netlify.app/",
    project_type: "Individual Project",
  },
  
];

let projects__container = document.getElementById("projects--container");

Projects.forEach((pro) => {
  let main = document.createElement("div");
  main.setAttribute("class", "portfolio-item padd-15");
  main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="photo" class="pro-i">
      <div class="project-desc"> <h1 class="project-name"><b>${
        pro.name
      }</b></h1> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <div class="navigate_ar">
      <button> <a href=${
        pro.project_link
      } target="_blank" class="see-project">LIVE</a></button>
      <button> <a href=${
        pro.gitrepo
      } target="_blank" class="github-repo">GitHub💻</a> </button>
      
     
      </div>
    
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span >${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : ""}
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ""}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ""}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ""}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ""}
      </span> </div>
     
      
    </div>
  </div>
    `;
  projects__container.append(main);
});
