import React from "react";
import "./Projects.css";
import project1 from "./img/deployedapp.png";
import budget from "./img/budget.png";
import workschedule from "./img/workplanner.png";
import weatherdashboard from "./img/dashboard.png"
import fitnesstracker from "./img/fitness.png";
import bandwich from "./img/workstation.png";

const Project = () => {
  return (
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h2 class="text-center">Projects</h2>
            </div>
            <hr />
            <div class="card-body">
            <figure class="row">
              <div class="col-lg-6">
                <a
                  href="https://patrickhannan.github.io/05-daily-planner/"
                  target="_blank"
                >
                  <img
                    class="img-fluid port-image projectimg"
                    src={workschedule}
                    alt="work day schedule"
                  />
                </a>
                <a
                  class="btn btn-dark text-center"
                  href="https://github.com/patrickhannan/05-daily-planner/"
                >
                  GitHub
                </a>
                <a
                  class="btn btn-dark text-center"
                  href="https://patrickhannan.github.io/05-daily-planner/"
                >
                  Application
                </a>
              </div>
            
            
              <div class="col-lg-6">
                <a
                  href="https://patrickhannan.github.io/server-side-apis-HW/"
                  target="_blank"
                >
                  <img
                     class="img-fluid port-image projectimg"
                    src={weatherdashboard}
                    alt="weather dashboard"
                  />
                </a>
                <a
                  class="btn btn-dark text-center"
                  href="https://github.com/patrickhannan/server-side-apis-HW"
                >
                  GitHub
                </a>
                <a
                  class="btn btn-dark text-center"
                  href="https://patrickhannan.github.io/server-side-apis-HW/"
                >
                  Application
                </a>
              </div>
            </figure>
            <figure class="row">
              <div class="col-lg-6">
                <a
                  href="https://immense-bastion-96583.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    class="img-fluid port-image projectimg"
                    src={fitnesstracker}
                    alt="fitness tracker"
                  />
                </a>
                <a
                  class="btn btn-dark text-center"
                  href="https://github.com/patrickhannan/fitness-tracker"
                >
                  GitHub
                </a>
                <a
                  class="btn btn-dark text-center"
                  href="https://immense-bastion-96583.herokuapp.com/"
                >
                  Application
                </a>
              </div>
            
              <div class="col-lg-6">
                <a
                  href="https://bandwich-app.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    class="img-fluid port-image projectimg"
                    src={bandwich}
                    alt="bandwich"
                  />
                </a>
                <a
                  class="btn btn-dark text-center"
                  href="https://github.com/patrickhannan/bandwich"
                >
                  GitHub
                </a>
                <a
                  class="btn btn-dark text-center"
                  href="https://bandwich-app.herokuapp.com/"
                >
                  Application
                </a>
              </div>
            </figure>
            <figure class="row">
              <div class="col-lg-6">
                <a
                  href="https://patrickhannan.github.io/project-1/"
                  target="_blank"
                >
                  <img
                    class="img-fluid port-image projectimg"
                    src={project1}
                    alt="project1"
                  />
                </a>
                <a
                  class="btn btn-dark text-center"
                  href="https://github.com/patrickhannan/project-1"
                >
                  GitHub
                </a>
                <a
                  class="btn btn-dark text-center"
                  href="https://patrickhannan.github.io/project-1/"
                >
                  Application
                </a>
              </div>
            
              <div class="col-lg-6">
                <a
                  href="https://safe-springs-30942.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    class="img-fluid port-image projectimg"
                    src={budget}
                    alt="budget tracker"
                  />
                </a>
                <a
                  class="btn btn-dark text-center"
                  href="https://github.com/patrickhannan/budget-tracker"
                >
                  GitHub
                </a>
                <a
                  class="btn btn-dark text-center"
                  href="https://safe-springs-30942.herokuapp.com/"
                >
                  Application
                </a>
              </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Project;