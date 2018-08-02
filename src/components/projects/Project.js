import React from 'react';
import ProjectItem from '../../components/projects/ProjectItem';

class Project extends React.Component {



    render() {

        const { projects, latestproject } = this.props;

        let projectItems;

        if(projects.length > 0) {
            projectItems = projects.map(project => (
                    <ProjectItem key={project.id} project={project}/>
                )
            );
        }

        return (
            <section className="latest section">
                <div className="section-inner">
                    <h2 className="heading">Latest Projects</h2>
                    <div className="content">

                        <div className="item featured text-center">
                            <h3 className="title"><a
                                href={latestproject.exampleURL}
                                target="_blank">{latestproject.title}</a></h3>
                            <p className="summary">{latestproject.synopsis}</p>
                            <div className="featured-image">
                                <a href={latestproject.exampleURL}
                                   target="_blank">
                                    <img className="img-responsive project-image"
                                         src={latestproject.imagePath} alt="project name"/>
                                </a>
                                <div className="ribbon">
                                    <div className="text">New</div>
                                </div>
                            </div>

                            <div className="desc text-left">
                                <p>{latestproject.description1}</p>
                                <p>{latestproject.description2}</p>
                            </div>
                            <a className="btn btn-cta-secondary"
                               href={latestproject.exampleURL}
                               target="_blank"><i className="fa fa-thumbs-o-up"></i> Demo</a>
                        </div>
                        <hr className="divider"/>

                        {projectItems}
                    </div>

                </div>
            </section>

        )
    }
}

export default Project;
