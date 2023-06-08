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
  {
    name: "Task Management Application",
    about:
      "Task Management Application is designed to help users organize and track their tasks efficiently. It offers various features like Add a task card to the list, Update/Delete task, Move card to another list & Export the entire list to Excel",
    img: "./images/tasklist.png",
    gitrepo: "https://github.com/Divya-Konala/Task-List",
    tech_stack: "React | xlsx | CSS",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/48/000000/react-native.png"/>`,
      `<img src="https://img.icons8.com/color/48/000000/microsoft-excel-2019"/>`,
      `<img src="https://img.icons8.com/color/48/000000/css3"/>`,
    ],
    project_link: "https://task-list-divyakonala.netlify.app/",
    project_type: "Individual Project",
  },
  {
    name: "Book Search Application",
    about: "A responsive book search application to search all the books using google API. It also saves the list of all previous searches.",
    img: "./images/bookworm.png",
    gitrepo: "https://github.com/Divya-Konala/BookSearch",
    tech_stack: "HTML | CSS | JS | Bootstrap | API",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/48/000000/html-5"/>`,
      `<img src="https://img.icons8.com/color/48/000000/css3"/>`,
      `<img src="https://img.icons8.com/color/48/000000/javascript--v2.png"/>`,
      `<img src="https://img.icons8.com/color/48/000000/bootstrap"/>`,
      `<img src="https://img.icons8.com/color/48/000000/api-settings.png"/>`,
    ],
    project_link: "https://bookworm-divyakonala.netlify.app/",
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
