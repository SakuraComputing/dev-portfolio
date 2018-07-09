import React from 'react';
import { shallow } from 'enzyme';
import OtherProjects from '../../../components/projects/OtherProjects';

describe('Other Projects Section', () => {
    it('should render correctly', () => {
        const otherprojects = [
            {
                "id": 1,
                "title": "Kanban Board",
                "description": "Drag and Drop kanban board framework with tests",
                "github": "https://github.com/SakuraComputing/kanban_board"
            },
            {
                "id": 2,
                "title": "Accommodation UI",
                "description": "Basic Booking.com mock up rendering JSON data using Redux. Tested using Jest",
                "github": "https://github.com/SakuraComputing/accom-ui"
            }
        ];
        const wrapper = shallow(<OtherProjects otherprojects={otherprojects}/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render nothing if no projects are passed in', () => {
        const otherprojects = [];
        const wrapper = shallow(<OtherProjects otherprojects={otherprojects}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
