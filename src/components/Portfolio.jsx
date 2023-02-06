import React from "react";
import EachProject from "./EachProject";
import projectInfo from "../projectInfo";

function Portfolio() {

    function listProjectInfo(eachInfo) {
        return (
            <EachProject
                key={eachInfo.id}
                projectTitle={eachInfo.projectTitle}
                projectImg={eachInfo.projectImg}
                description={eachInfo.description}
                githubrepo={eachInfo.githubrepo}
                websiteUrl={eachInfo.websiteUrl}
            />
        );
    }

    return (
        <section className="row" id="project-section">
            {projectInfo.map(listProjectInfo)}
        </section >
    )
}

export default Portfolio;