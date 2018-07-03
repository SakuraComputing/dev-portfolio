import React from 'react';
import OtherProjectItem from '../../components/projects/OtherProjectItem';

class OtherProjects extends React.Component {

    render() {

        const { otherprojects } = this.props;

        let otherProjectItems;

        if(otherprojects.length > 0) {
            otherProjectItems = otherprojects.map(otherproject => (
                <OtherProjectItem key={otherproject.id} otherproject={otherproject} />
            ));
        }

        return(
            <section className="projects section">
                <div className="section-inner">
                    <h2 className="heading">Other Projects</h2>
                    <div className="content">
                        {otherProjectItems}
                        <p></p>
                        <a className="btn btn-cta-secondary" href="#">More on CoderWall <i className="fa fa-chevron-right"></i></a>
                    </div>
                </div>
            </section>
        )
    }
}
export default OtherProjects;

