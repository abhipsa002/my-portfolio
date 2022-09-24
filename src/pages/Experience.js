import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School"
import BusinessIcon from '@material-ui/icons/Business';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 August - Present"
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<BusinessIcon/>}
        >
          <h3 className="vertical-timeline-element-title">Anuta Networks,Bangalore</h3>
          <p>Software Engineer</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--title"
          date="2020 July- 2021 July"
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<BusinessIcon/>}
        >
          <h3 className="vertical-timeline-element-title">Spikewell LLC</h3>
          <p>Software Developer Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--title"
          date="2019 - 2 months(June-July)"
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<BusinessIcon/>}
        >
          <h3 className="vertical-timeline-element-title">CRIS , Hyderabad</h3>
          <p>Internship</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--title"
          date="2017 - 2021"
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">IIIT Bhubaneswar</h3>
          <p>CGPA - 7.87</p>
          <p>Graduation , BTech</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--title"
          date=""
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">Carmel Convent High School</h3>
          <p>92.3 %</p>
          <p>ISC</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>
  );
}

export default Experience;
