import React from "react";

function EachProject(props) {
    return (
        <div className="card col-lg-3 col-md-5 col-sm-6">
            <img id="personal-web-img" src={props.projectImg} alt="" />
            <div className="card-header">
                <h5 className="card-title">{props.projectTitle}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer">
                <a className="personal-website" href={props.githubrepo}><button type="button" class="btn btn-outline-primary" >Github Repo</button></a>
                <a className="navigate-to-project" href={props.websiteUrl}><button type="button" class="btn btn-outline-primary" >Navigate to Project</button></a>
            </div>
        </div>
    );
}

export default EachProject;