import pf_img from "../assets/portfolio_profile.png"
import Netflix from "../assets/Netflix.png"
import grocery_img from "../assets/Grocery.png"
import weather from "../assets/weather.png"
import Hr from "../assets/intern.png"
import dice_game_img from "../assets/dice_game.png"
import music_pl from "../assets/m_p.png"
import ent from "../assets/enterprise.png"
import news from "../assets/news_api.png"

const MyWork_Data = [
    {
      id: 1,
      projectName: "Personal Portfolio Website",
      imageUrl: pf_img,
      description: "A personal portfolio website to showcase my skills, projects, and contact information. Built with React and Bootstrap."
    },
    {
      id: 2,
      projectName: "Grocery Store App",
      imageUrl: grocery_img,
      description: "An online grocery store app where users can browse and purchase groceries. Features include product listings, a shopping cart, and order management. ",
      Url_project:"https://niteshnkk.github.io/Grocery_store/"
    },
    {
      id: 3,
      projectName: "Netflix Clone",
      imageUrl: Netflix,
      description: "A clone of the Netflix streaming service, featuring a catalog of movies and TV shows, user authentication. ",
     Url_project:"https://niteshnkk.github.io/Netflix_clone/"
    },
    {
      id: 4,
      projectName: "Car Accesories Website",
      imageUrl: ent,
      description: "In this website a customer can see various type of product and they can buy from our website .and they can easily know seller details.",
     Url_project:"https://niteshnkk.github.io/Enterprise_webpage/"
    },
    {
      id: 5,
      projectName: "Internshala Internship Hiring Task",
      imageUrl: Hr,
      description: "A front-end design task given during an internship hiring process at Internshala, showcasing skills in HTML, CSS, and JavaScript to create a user-friendly interface.",
      Url_project:"https://internshala-project-onm2gnz8g-niteshs-projects-034cc7c9.vercel.app/"
    },
 
    {
      id: 6,
      projectName: "Weather App",
      imageUrl: weather,
      description: "A weather forecasting app that provides real-time weather data and forecasts. Integrated with the OpenWeatherMap API .",
      Url_project:"https://niteshnkk.github.io/weather_app-/"
    },
    {
      id: 7,
      projectName: "Simple Dice Game",
      imageUrl: dice_game_img,
      description: "A simple dice game where you select a number and roll the dice. If the numbers match, you gain 2 points; otherwise, you lose 2 points. Built with React."
    },
    {
      id: 8,
      projectName: "Music Player",
      imageUrl: music_pl,
      description: "A music player app that allows you to play, pause, and skip tracks. Features include a seek bar for music rotation and playlist management. Developed using  HTML5 ,Css and Js."
   
    },
    {
      id: 9,
      projectName: "News-Maagazine",
      imageUrl: news,
      description: "A news application that fetches articles from the News API. Users can switch between different categories to view news articles. Built with React and Axios."
    }
 
  
  ];
  
  export default MyWork_Data;
  