import React from "react";
import project1 from "./img/deployedapp.png";
import budget from "./img/budget.png";
import workschedule from "./img/workplanner.png";
import weatherdashboard from "./img/dashboard.png"
import fitnesstracker from "./img/fitness.png";
import bandwich from "./img/workstation.png";

const Portfolio = () => {
  return (
    <div className="container">
      <main className="row">
        <div className="col-md-8">
          <article className="block">
            <h1 className="block-header">Portfolio</h1>
            <hr />
            <div id="repo1" className="project row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <a
                  href="https://patrickhannan.github.io/05-daily-planner/"
                  target="_blank"
                >
                  <img
                    className="img-fluid port-image"
                    src={workschedule}
                    alt="work day schedule"
                  />
                </a>
                <a
                  className="btn btn-dark text-center"
                  href="Github Repo"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div id="repo2" className="project row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <a
                  href="https://patrickhannan.github.io/server-side-apis-HW/"
                  target="_blank"
                >
                  <img
                    className="img-fluid port-image"
                    src={weatherdashboard}
                    alt="weather dashboard"
                  />
                </a>
                <a
                  className="btn btn-dark text-center"
                  href="https://github.com/patrickhannan/server-side-apis-HW"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div id="repo3" className="project row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <a
                  href="https://immense-bastion-96583.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    className="img-fluid port-image"
                    src={fitnesstracker}
                    alt="fitness tracker"
                  />
                </a>
                <a
                  className="btn btn-dark text-center"
                  href="https://github.com/patrickhannan/fitness-tracker"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div id="repo4" className="project row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <a
                  href="https://bandwich-app.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    className="img-fluid port-image"
                    src={bandwich}
                    alt="bandwich"
                  />
                </a>
                <a
                  className="btn btn-dark text-center"
                  href="https://github.com/patrickhannan/bandwich"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div id="repo5" className="project row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <a
                  href="https://kreid333.github.io/project-1/"
                  target="_blank"
                >
                  <img
                    className="img-fluid port-image"
                    src={project1}
                    alt="project1"
                  />
                </a>
                <a
                  className="btn btn-dark text-center"
                  href="https://github.com/patrickhannan/project-1"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div id="repo6" className="project row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <a
                  href="https://safe-springs-30942.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    className="img-fluid port-image"
                    src={budget}
                    alt="budget tracker"
                  />
                </a>
                <a
                  className="btn btn-dark text-center"
                  href="https://github.com/patrickhannan/budget-tracker"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;