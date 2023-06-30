import { Component } from "react";
import ReactGA from "react-ga";

export class AboutYurii extends Component {
  constructor() {
    super();
    this.screens = {};
    this.state = {
      screen: () => { },
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    };
  }

  componentDidMount() {
    this.screens = {
      about: <About />,
      history: <History />,
      education: <Education />,
      skills: <Skills />,
      projects: <Projects />,
      resume: <Resume />,
    };

    let lastVisitedScreen = localStorage.getItem("about-section");
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about";
    }

    // focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen));
  }

  changeScreen = (e) => {
    const screen = e.id || e.target.id;

    // store this state
    localStorage.setItem("about-section", screen);

    // google analytics
    ReactGA.pageview(`/${screen}`);

    this.setState({
      screen: this.screens[screen],
      active_screen: screen,
    });
  };

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar });
  };

  renderNavLinks = () => {
    return (
      <>
        <div
          id="about"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "about"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Yurii Sachok"
            src="./themes/Sachok/status/about.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
        </div>
        <div
          id="history"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "history"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Yurii Sachok"
            src="./themes/Sachok/status/work-history.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Experience</span>
        </div>
        <div
          id="education"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "education"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Yurii's education"
            src="./themes/Sachok/status/education.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
        </div>
        <div
          id="skills"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Yurii' skills"
            src="./themes/Sachok/status/skills.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div
          id="projects"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "projects"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Yurii' projects"
            src="./themes/Sachok/status/projects.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div>
        <div
          id="resume"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="yurii's resume"
            src="./themes/Sachok/status/download.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
          {this.renderNavLinks()}
        </div>
        <div
          onClick={this.showNavBar}
          className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
        >
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className=" w-3.5 border-t border-white"
            style={{ marginTop: "2pt", marginBottom: "2pt" }}
          ></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className={
              (this.state.navbar
                ? " visible animateShow z-30 "
                : " invisible ") +
              " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
            }
          >
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
          {this.state.screen}
        </div>
      </div>
    );
  }
}

export default AboutYurii;

export const displayAboutYurii = () => {
  return <AboutYurii />;
};

function About() {
  return (
    <>
      <div className="w-20 md:w-32 mt-4 bg-white rounded-full">
        <img
          className="w-full rounded-full"
          src="./images/logos/YuriiSachok.png"
          alt="Yurii Sachok Logo"
        />
      </div>
      <div className=" mt-2 text-lg md:text-2xl text-center px-1">
        <div>
          My name is <span className="font-bold">Yurii Sachok</span> ,
        </div>
        <div className="font-normal ml-1">
          I'm a{" "}
          <span className="text-pink-600 font-bold">
            Frontend and Blockchain Developer!
          </span>
        </div>
      </div>
      <div className=" mt-4 relative md:my-4 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className=" my-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className=" list-pc my-2 md:text-base">
          Detail oriented professional with great experience in{" "}
          <span className="font-medium">Website</span> development.
        </li>
        <li className=" list-pc my-2 md:text-base">
          Experience in <span className="font-medium">Leading a Team</span> of
          front-end, back-end and smart contract developers.
        </li>
        <li className=" list-pc my-2 md:text-base">
          Developed <span className="font-medium">DeFi</span>,{" "}
          <span className="font-medium">NFT marketplace</span>,{" "}
          <span className="font-medium">Tokens</span> and many{" "}
          <span className="font-medium">web3</span> projects including{" "}
          <span className="font-medium">games</span> on Ethereum, Polygon,
          Binance Smart Chain and so on.
        </li>
        <li className=" list-pc my-2 md:text-base">
          Advanced knowledge of multiple programming languages, frameworks and
          several database structures.
        </li>
        <li className=" list-pc my-2 md:text-base">
          Great team player, effective communicator with strong knowledge
        </li>
        <li className=" list-pc my-2 md:text-base">
          Love 3C - Create, Challenge, Collaborate
        </li>
      </ul>
    </>
  );
}
function History() {
  const project_list = [
    {
      name: (
        <p>
          SENIOR FRONT END DEVELOPER,{" "}
          <a
            className="border-b-2"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            INTUIT
          </a>
        </p>
      ),
      date: "Aug 2021 - May 2023",
      link: "",
      description: [
        <p>
          Developed Open CMS components.
        </p>,
        <p>
          Developed various reusable Svelte components. 
        </p>,
        <p>
         Build and deploy smart contract and nft tokens. 
        </p>,
        <p>
          Created Svelte front end for contacting with smart contract using ether.js and web3.js 
        </p>,
        <p>
          Worked closely with the design team to improve website consistency and style guide. 
        </p>,
        <p>
          Collaborating with other cross-functional teams to ensure high-performance of applications 
        </p>,
        <p>
          Technologies: Git, OpenCms, JSON API, XML, Apache Jackrabbit, Adobe Experience Manager, JavaScript, Sass, CSS3, HTML5, Svelte, Blockchain, Solidity, Netlify, AWS Lambda
        </p>,
      ],
    },
    {
      name: (
        <p>
          SENIOR FRONT END DEVELOPER,{" "}
          <a
            className="border-b-2"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            GOREHA
          </a>
        </p>
      ),
      date: "Sep 2019 - Jul 2021",
      link: "",
      description: [
        <p>
          Led the front-end development of a multi-lingual digital rehabilitation platform. 
        </p>,
        <p>
          Used Angular 5 and NgRx to make the Reactive front end. 
        </p>,
        <p>
          Built from scratch a product website with React and GatsbyJS.
        </p>,
        <p>
          Convert PHP and Bootstrap website to Svelte,Typescript and Node.js 
        </p>,
        <p>
          Technologies: Bootstrap, Angular Material, NgRx, Angular,Typescript, TailwindCSS, Svelte
        </p>,
      ],
    },
    {
      name: (
        <p>
          REACT DEVELOPER,{" "}
          <a
            className="border-b-2"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            BCG GAMMA
          </a>
        </p>
      ),
      date: "Jan 2018 - Sep 2019",
      link: "",
      description: [
        <p>
          Developed a prototype used to visualize transportation routes using React, Antd, and Deck.gl. 
        </p>,
        <p>
          Built a scheduling tool in the form of a Gantt chart using React and Material-UI. 
        </p>,
        <p>
          Balanced requirements, UX, and deadlines in order to get most of the business value in a limited timeframe. 
        </p>,
        <p>
          Designed APIs and manipulated big data. 
        </p>,
        <p>
          Composed scripts—with Python and Node.js—to parse complex data structures. 
        </p>,
        <p>
          Technologies: Node.js, Recharts, Python, Deck.gl, React
        </p>,
      ],
    },
    {
      name: (
        <p>
          FRONT END DEVELOPER,{" "}
          <a
            className="border-b-2"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            SUITSUPPLY
          </a>
        </p>
      ),
      date: "Jan 2016 - Dec 2017",
      link: "",
      description: [
        <p>
          Set up new front-end architecture and worked with the MVC model. 
        </p>,
        <p>
          Building and implementing top-notch user interfaces using JavaScript and the Angular framework. 
        </p>,
        <p>
          Supported integration of custom live chat for the customer support team. 
        </p>,
        <p>
          Set up and provision AWS services with AWS Cloud Formation and AWS CDK. 
        </p>,
        <p>
          Design and develop robust, scalable, extensible web frontend using React JS. 
        </p>,
        <p>
          Technologies: Jenkins, Bower, jQuery UI, jQuery, Git, Subversion (SVN), JavaScript, Compass, Sass, CSS3, HTML, ISML Templates, Demandware
        </p>,
      ],
    },
    {
      name: (
        <p>
          JAVASCRIPT DEVELOPER,{" "}
          <a
            className="border-b-2"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            LIBERTY GLOBAL 
          </a>
        </p>
      ),
      date: "Dec 2014 - Dec 2015",
      link: "",
      description: [
        <p>
          Developed and improved performance of TV setup box software running on JavaScript engine SpiderMonkey. 
        </p>,
        <p>
          Developed a TV box weather app.
        </p>,
        <p>
          Performing well in a remote setting with frequent communication 
        </p>,
        <p>
          Layout aesthetics and technical feasibility of UI/UX designs  
        </p>,
        <p>
          Writing maintainable code that considers accessibility. 
        </p>,
        <p>
          Technologies: SpiderMonkey, Shell, Linux, JavaScript, CSS, HTML
        </p>,
      ],
    },
  ];

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Work Experience
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {project_list.map((project, index) => (
        <div className="flex w-full flex-col px-4" key={index}>
          <div className="w-full py-4 px-4 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex justify-center items-center">
                <div className=" text-base font-semibold md:text-lg mr-2">
                  {project.name}
                </div>
              </div>
              <div className="text-gray-300 font-light text-sm">
                {project.date}
              </div>
            </div>
            <ul className=" tracking-normal leading-tight text-sm font-light ml-6 mt-2">
              {project.description.map((desc, index) => (
                <li
                  key={index}
                  className="list-disc mt-1 text-gray-100 md:text-base"
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
function Education() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Education
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            University of Toronto
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2009 - 2014, Faculty of Computer Engineering</div>
          <div className=" text-sm md:text-base">Bachelor of Computer Science</div>
          <div className=" text-sm md:text-base text:bold">GPA &nbsp;&nbsp;&nbsp; 4.0/5.0</div>
        </li>
      </ul>
    </>
  );
}
function Skills() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          I am working as a front-end developer.
        </li>
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            My areas of expertise are{" "}
            <strong className="text-ubt-gedit-orange">
              React, Next, Vue, Nuxt, Angular, Web3.js and Smart Contract, django, Java, dotnet, dotnet core etc
            </strong>{" "}
            development
          </div>
        </li>
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>Here are my most frequently used</div>
        </li>
      </ul>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Languages & Tools
        </div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Frameworks & Libraries
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A"
              alt="Yurii javascript"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Typescript-3178c6?style=flat&logo=typescript&logoColor=ffffff"
              alt="Yurii typescript"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Solidity-ffffff?style=flat&logo=solidity&logoColor=000000&labelColor=%000000"
              alt="Yurii solidity"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white"
              alt="Yurii c++"
            />
            <img
              className="m-1"
              src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff"
              alt="Yurii python"
            />
            <img
              className="m-1"
              src="http://img.shields.io/badge/-Java-5676AB?style=flat&logo=Spring&logoColor=white"
              alt="Yurii Java"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Rust-5676AB?style=flat&logo=Rust&logoColor=green"
              alt="Yurii Rust"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white"
              alt="Yurii dart"
            />
            <img
              src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff"
              alt="Yurii SASS"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff"
              alt="Yurii git"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff"
              alt="Yurii firebase"
              className="m-1"
            />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className=" m-1"
              src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff"
              alt="Yurii next"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff"
              alt="Yurii react"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Angular-dd0031?style=flat&logo=angular&logoColor=ffffff"
              alt="Yurii angular"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Django-bb5523?style=flat&logo=django&logoColor=green"
              alt="Yurii django"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Spring-dd0031?style=flat&logo=spring&logoColor=ffffff"
              alt="Yurii JavaSpring"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Dotnet-555555?style=flat&logo=dotnet&logoColor=22bb22"
              alt="Yurii dotnet"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Golang-777722?style=flat&logo=go&logoColor=22bb22"
              alt="Yurii golang"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Svelte-ff3e00?style=flat&logo=svelte&logoColor=ffffff"
              alt="Yurii svelte"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Remix-00ccbb?style=flat&logo=remix&logoColor=000000"
              alt="Yurii remix"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Web3JS-f16822?style=flat&logo=Web3.js&logoColor=ffffff"
              alt="Yurii web3"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Hardhat-c5d11700?style=flat&logo=ethereum&logoColor=ffffff"
              alt="Yurii hardhat"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/React Native-61DAFB?style=flat&logo=react&logoColor=white"
              alt="Yurii react native"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Ionic-3880ff?style=flat&logo=ionic&logoColor=white"
              alt="Yurii ionic framework"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white"
              alt="Yurii flutter"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"
              alt="Yurii tailwind css"
            />
            <img
              src="https://img.shields.io/badge/-NodeJS-339933?style=flat&logo=Node.js&logoColor=ffffff"
              alt="Yurii node.js"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-ExpressJS-339933?style=flat&logo=Node.js&logoColor=ffffff"
              alt="Yurii express.js"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white"
              alt="Yurii jquery"
              className="m-1"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white"
              alt="Yurii redux"
            />
          </div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          <span> And ofcourse,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="nikhil linux" /> <span>!</span>
        </li>
      </ul>
    </>
  );
}
function Projects() {
  const project_list = [
    {
      name: "Flexible Frontend",
      link: "#",
      imgUrl: "./images/projects/Screenshot_4.png",
      description: [
        <p>
          Build this comprehensive tourism platform using PHP for back-end and HTML, CSS, JS for frontend
        </p>,
        <p>
          Introduced external search engine for tourism called "Amadeus" and the data about the users,
          corporate clients and individual clients are managed by a web service connected to the ERP.
        </p>,
        <p>Worked with PM/IM to keep on track with the project plan, timeline and billing</p>,
        <p>Led bi-weekly stand-up to ensure team worked effectively, using coaching strategies to increase efficiency by 10%</p>,
        <p>Worked with Quality Assurance to get new pages/products tested, and addressed any issues within 48 hours</p>,
      ],
      domains: [
        "HTML",
        "Javascript",
        "Laravel",
        "Git",
      ],
    },
    {
      name: "Flexible Frontend",
      imgUrl: "./images/projects/Screenshot_5.png",
      link: "#",
      description: [
        <p>Lentz’en Chalet is a cabin situated in Luxembourg.</p>,
        <p>
          Its owners needed a website to promote it and encourage tourism to the cabin and they asked us to build it.
        </p>,
        <p>
          We developed the presentation site to feel just like the Chalet – warm, friendly and welcoming.
        </p>,
        <p>
          Plus, an online integrated booking sysytem built from scratch.
        </p>
      ],
      domains: [
        "UI/UX design",
        "Graphic design",
        "Laravel",
        "HTML5",
        "CSS3",
        "Javascript",
        "Git",
      ],
    },
    {
      name: "Flexible Frontend",
      link: "#",
      imgUrl: "./images/projects/Screenshot_6.png",
      description: [
        <p>
          Created a new site to match the gorgeous setting of Tamarind Springs and wrote SEO optimized content to match the new look of the brand.
        </p>,
        <p>
          Built a booking tool on the site, so that visitors could make their reservations as easy as possible.
        </p>,
        <p>
          Built this website using Joomla for back-end and HTML, CSS, JavaScript for the front-end.
        </p>
      ],
      domains: [
        "React.js",
        "Joomla",
        "SCSS",
        "Git",
      ],
    },
    {
      name: "Flexible Frontend",
      link: "#",
      imgUrl: "./images/projects/Screenshot_7.png",
      description: [
        <p>
          Food Service website made Next.js
        </p>,
        <p>
          Built a booking system on the site for customer-friendly service.
        </p>,
        <p>
          Use modern technologies like Gatsby.js, Next.js and deployed AWS.
        </p>
      ],
      domains: [
        "Next.js",
        "Gatsby.js",
        "AWS",
        "express",
        "Git",
        "Bootstrap",
      ],
    },
    {
      name: "Blockchain Development",
      link: "#",
      imgUrl: "./images/projects/Screenshot_9.png",
      description: [
        <p>
          This is a 'Fit2Earn' ecosystem that aims to revolutionize sports & fitntess through blockchain development.
        </p>,
        <p>
          Sense4FIT App, a Fit2Earn app build on the Elrond blockchain with NFT based access
        </p>,
        <p>
          Integration with hardward, fitness apps and Maiar
        </p>,
        <p>
          NFT infrastructure consulting & Tokenomics
        </p>,
        <p>
          Smart contract & staking and Vesting platform, 10K NFT collection sold out in just 7 mins, Over 40K followers across social media
        </p>
      ],
      domains: [
        "Fit2Earn",
        "Web3.js",
        "ether.js",
        "Elrond Network",
        "ERC721",
      ],
    },
    {
      name: "Blockchain Development",
      imgUrl: "./images/projects/emirate.webp",
      link: "#",
      description: [
        <p>Dex platform from Pancakeswap</p>,
        <p>
          Forked Pancakeswap and extend functionality
        </p>,
        <p>
          Strong understanding of smart contract and their role in Dex development
        </p>,
        <p>
          Implement farming, staking, swap and betting with various tokens
        </p>
      ],
      domains: [
        "Next.js", "typescript", "scss", "firebase", "web3.js", "solidity", "hardhat", "tailwindcss"
      ],
    },
    {
      name: "Fullstack Development",
      imgUrl: "./images/projects/Screenshot_10.png",
      link: "#",
      description: [
        <p>Real Estate Site & powerful google map search</p>,
        <p>
          Integrated Chart.js into React project Graphical process
        </p>,
        <p>
          Using kafka, redis, elasticsearch to improve performance
        </p>,
        <p>
          Collaborate with marketing team, engineering team for user & SEO friendly UI and fast Backend
        </p>
      ],
      domains: [
        "React.js", "typescript", "scss", "Kafka", "elasticsearch", "redis", "chart.js", "MySQL", "Express", "MongoDB"
      ],
    },
  ];

  const tag_colors = {
    "react.js": "blue-300",
    typescript: "yellow-300",
    javascript: "yellow-300",
    firebase: "red-600",
    firestore: "red-500",
    "firebase auth": "red-400",
    "chrome-extension": "yellow-400",
    flutter: "blue-400",
    dart: "blue-500",
    "react-native": "purple-500",
    firebase: "red-300",
    html5: "pink-600",
    sass: "pink-400",
    scss: "pink-300",
    tensorflow: "yellow-600",
    django: "green-600",
    unity3D: "green-400",
    hardhat: "green-300",
    python: "green-200",
    "codeforces-api": "gray-300",
    tailwindcss: "blue-300",
    "next.js": "purple-600",
    "web3.js": "purple-300",
    metaverse: "blue-400",
    "play to earn": "blue-500",
    webgl: "blue-600",
    "binance smart chain": "yellow-300",
  };

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {project_list.map((project, index) => (
        <div className="flex w-full flex-col px-4" key={index}>
          <div className="w-full flex flex-col gap-2 py-3 px-3 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 ">
            <a
              className="w-full cursor-pointer"
              href={project.link}
              rel="noreferrer"
            >
              <img
                src={project.imgUrl}
                className="rounded"
                alt={project.name}
              />
            </a>
            <div className="w-full">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-center items-center">
                  <div className=" text-base font-semibold md:text-lg mr-2">
                    {project.name}
                  </div>
                </div>
                {/* <div className="text-gray-300 font-light text-sm">
                  {project.date }
                </div> */}
              </div>
              <ul className=" tracking-normal leading-tight text-sm font-light ml-6 mt-2">
                {project.description.map((desc, index) => (
                  <li
                    key={index}
                    className="list-disc mt-2 text-gray-100 md:text-base"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-start justify-start text-xs py-4">
                {project.domains
                  ? project.domains.map((domain, index) => (
                    <span
                      key={index}
                      className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}
                    >
                      {domain}
                    </span>
                  ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
function Resume() {
  return (
    <iframe
      className="h-full w-full"
      src="./files/resume.pdf"
      title="Yurii Sachok resume"
      frameBorder="0"
    ></iframe>
  );
}
