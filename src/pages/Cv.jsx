import React from "react";
import Header from "./../components/cv/Header";
import User from "./../datas/user.json";
import Left from "../components/cv/Left";
import FormationFrontEnd from "../components/cv/FormationFrontEnd";
import Entreprise from "../components/cv/Entreprise";
import "./../scss/cv/cv.scss";
import Competences from "../components/cv/Competences";
import competencesData from "./../datas/competences.json";
import frontEndFormations from "./../datas/front-end-formations.json";
import Hobbies from "../components/cv/Hobbies";
import FreelanceOldContent from "../components/cv/FreelanceOldContent";
import freelanceOld from "./../datas/freelance-old.json";
import jobsOld from "./../datas/jobs-old.json";

function Cv() {
  return (
    <React.StrictMode>
      <div className="a4">
        <Header user={User} />
        <div className="container">
          <Left user={User} />
          <div className="container_content">
            <FormationFrontEnd formations={frontEndFormations} />
            <FreelanceOldContent freelanceOld={freelanceOld} />
            <Entreprise jobsOld={jobsOld} />
          </div>
          <div className="container_competences">
            <Competences competences={competencesData} />
            <Hobbies userHobbies={User.hobbies} />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Cv;
