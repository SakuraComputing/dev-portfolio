import React from 'react';
import { shallow } from 'enzyme';
import Project from '../../../components/projects/Project';

describe('Latest Project Section', () => {
    it('should render correctly', () => {
        const projects = [
            {
                "id": 1,
                "title": "Developer Connector",
                "synopsis": "A Facebook for Developers",
                "imagePath": "assets/images/projects/devconnector.png",
                "description1": "A platform that allows developers to connect with one another.",
                "description2": "Written in ReactJS, Express, Mongo Database (mLab), NodeJS (API layer)",
                "exampleURL": "http://devconnector-app.herokuapp.com/"
            }
        ];
        const latestproject = {
            "title": "Developer Connector",
                "synopsis": "A Facebook for Developers",
                "imagePath": "assets/images/projects/project-main.png",
                "description1": "A platform that allows developers to connect with one another.",
                "description2": "Written in ReactJS, Express, Mongo Database (mLab), NodeJS (API layer)",
                "exampleURL": "http://devconnector-app.herokuapp.com/"
        };

        const wrapper = shallow(<Project projects={projects} latestproject={latestproject}/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render nothing if no projects are passed in', ()=> {
        const projects = [];
        const latestproject = {};
        const wrapper = shallow(<Project projects={projects} latestproject={latestproject}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
