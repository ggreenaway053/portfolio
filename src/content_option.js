import cnaz from "./assets/images/portfolio/cnaz-portfolio-img.jpg";
import lb from "./assets/images/portfolio/lb-portfolio-img.jpg";
import wni from "./assets/images/portfolio/wni-portfolio-img.jpg";
import krw from "./assets/images/portfolio/krw-portfolio-img.jpg";

const logotext = "GARETH";
const meta = {
  title: "Gareth Greenaway",
  description: "Hi! I'm Gareth, a full stack devloper from NI.",
};

const introdata = {
  title: "Hello! 👋",
  animated: {
    first: "I'm Gareth"
  },
  description: "I specialise in custom Wordpress & Shopify development."
};

const services = [
  {
    title: "UI & UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Apps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Wordpress Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

const dataportfolio = [
  {
    img: cnaz,
    title: "Carrick Nazarene",
    type: "Volunteer Freelance Project",
    who: "Carrick Nazarene is a local church where I am a member & volunteer in a few different ministries. We are a Christian church, with the overarching Nazarene church being founded back in 1908.",
    tech: "WordPress, HTML, SCSS, Bootstrap 5, Javascript / jQuery, Figma, Google APIs, Magnific Popups",
    link: "https://carricknazarene.co.uk",
  },
  {
    img: lb,
    title: "Linenbundle",
    type: "Sole Web Developer | Current full time role",
    description: "",
    link: "https://www.linenbundle.com",
  },
  {
    img: wni,
    title: "WebsiteNI",
    type: "Front End Developer",
    description: "",
    link: "https://websiteni.com",
  },
  {
    img: krw,
    title: "Keylite Roof Windows",
    type: "Web Designer/Developer",
    description: "",
    link: "https://www.keyliteroofwindows.com",
  }
];

const contactConfig = {
  YOUR_EMAIL: "hi@garethgreenaway.co.uk",
  description: "I'd love to hear from you, whether it's just for a chat or to talk work!",
  // creat an emailjs.com account 
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_y93lhhf",
  YOUR_TEMPLATE_ID: "template_kryxvqt",
  YOUR_USER_ID: "PusWyu9H2PzG1p2Dt",
};

const socials = {
  github: "https://github.com/ggreenaway053",
  youtube: "https://www.youtube.com/channel/UCWxtdcPeLmvSku67D6FT_wA",
  linkedin: "https://www.linkedin.com/in/gareth-greenaway-6a5389141/"
};
export {
  meta,
  dataportfolio,
  services,
  introdata,
  contactConfig,
  socials,
  logotext,
};