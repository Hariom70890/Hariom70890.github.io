import React from "react";
import css from "../images/css.jpg";
import express from "../images/express.jpg";
import github from "../images/github.jpg";
import html from "../images/html.jpg";
import JavaScript from "../images/JavaScript.jpg";
import mongodb from "../images/mongodb.jpg";
import nodeJs from "../images/nodeJs.jpg";
import react from "../images/react.jpg";

const Skills = () => {
   return (
      <div id="skills">
         <h3 style={{ color: "white" }}>Skills</h3>

         <div>
            <div class="skills-card">
               <img src={html} alt="img" class="skills-card-img" />
               <h4 class="skills-card-name">HTML</h4>
            </div>
            <div class="skills-card">
               <img src={css} alt="img" class="skills-card-img" />
               <h4 class="skills-card-name">CSS</h4>
            </div>
            <div class="skills-card">
               <img src={JavaScript} alt="img" class="skills-card-img" />
               <h4 class="skills-card-name">JavaScript</h4>
            </div>
         </div>
         <div>
            <div class="skills-card">
               <img src={react} alt="img" class="skills-card-img" />
               <h4 class="skills-card-name">React</h4>
            </div>
            <div class="skills-card">
               <img src={express} alt="img" class="skills-card-img" />
               <h4 class="skills-card-name">Express</h4>
            </div>
            <div class="skills-card">
               <img src={mongodb} alt="img" class="skills-card-img" />
               <h4 class="skills-card-name">Mongodb</h4>
            </div>
         </div>
         <div>
            <div class="skills-card">
               <img src={nodeJs} alt="img" class="skills-card-img" />
               <h4 class="skills-card-name">nodeJS</h4>
            </div>
            <div class="skills-card">
               <img src={github} alt="img" class="skills-card-img" />
               <h4 class="skills-card-name">GitHub</h4>
            </div>
         </div>
         <div>
            <div>
               <h1>GitHub Stats:</h1>
               <img
                  id="github-stats-card"
                  src="https://github-readme-stats.vercel.app/api?username=hariom70890&theme=highcontrast&hide_border=false&include_all_commits=true&count_private=true"
                  width="100%"
                  alt=""
               />
               <img
                  id="github-streak-stats"
                  src="https://github-readme-streak-stats.herokuapp.com/?user=hariom70890&theme=highcontrast&hide_border=false"
                  alt=""
               />
               <img id="github-top-langs"
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=hariom70890&theme=highcontrast&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
                  alt=""
               />

               <h1>GitHub Trophies</h1>
               <img
                  src="https://github-profile-trophy.vercel.app/?username=hariom70890&theme=tokyonight&no-frame=true&no-bg=true&margin-w=60"
                  alt=""
               />

               <hr />
               <h3 align="center">
                  Show some ❤️ by starring some of the repositories!
               </h3>
               <br />
               <h3 align="center">
                  Visitor count <br></br>
                  <img src="https://profile-counter.glitch.me/hariom70890/count.svg" />
               </h3>

               <div align="center">
                  <a href="https://1999azzar.github.io/1999AZZAR/">
                     <img
                        className="react-activity-calendar"
                        src="https://github.com/1999AZZAR/1999AZZAR/blob/main/resources/img/grid-snake.svg"
                        alt="snake"
                     />
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Skills;
