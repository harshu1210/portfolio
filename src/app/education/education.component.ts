import { Component } from '@angular/core';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  events: any[];
  constructor() {
    this.events = [
      {
        id: 0,
        schoolName: "PCET's Nutan Maharashtra Institute of Enginnering and Technology",
        address:"Talegaon, Pune",
        schoolLogo: "../../assets/images/nutan.jpeg",
        startDate: "Jul 2018",
        endDate: "Jun 2022",
        icon: 'pi pi-check-circle',
        color: 'white',
        stream: "Computer & Science Engineering",
        board: null,
        university: "Savitribai Phule Pune University",
        cgpa: 9.4,
        percentage: 85.6,
        collegeMapLink: "https://maps.app.goo.gl/WhKJF3t9fmiFsN2j9",
        universityMapLink: "https://maps.app.goo.gl/WfuC44xsxVMJxADy9",
        collegeSite: "https://www.nmiet.edu.in/",
        universitySite: "http://www.unipune.ac.in/",
        activitiesAndSocities: [
          {
            name: "Football",
            logo: "../../assets/images/activitiesSocities/football.png"
          }, {
            name: "Volleyball",
            logo: "../../assets/images/activitiesSocities/volleyball.png"
          }, {
            name: "Chess",
            logo: "../../assets/images/activitiesSocities/chess.png"
          }, {
            name: "Team Technothon",
            logo: "../../assets/images/activitiesSocities/team.png"
          }
        ],
        description: "Computer engineering combines electrical engineering, computer science, and mathematics to design and develop computer systems, hardware, and software. Computer engineers design hardware components, such as processors, memory systems, and input/output devices, and develop software applications for a variety of platforms and systems. They conduct research and testing to evaluate the performance and efficiency of computer systems, work collaboratively with others to develop new products and technologies and troubleshoot and debug computer systems. Computer engineers must also ensure that computer systems are secure and meet regulatory standards.",
        skill: [
          {
            name: "Machine Learning",
            logo: "../../assets/images/skills/machineLearning.png"
          }, {
            name: "Databases",
            logo: "../../assets/images/skills/database.png"
          }, {
            name: "Cloud Computing",
            logo: "../../assets/images/skills/cloudComputing.png"
          }, {
            name: "Data Structures",
            logo: "../../assets/images/skills/dataStructure.png"
          }, {
            name: "Python (Programming Language)",
            logo: "../../assets/images/skills/python.png"
          }, {
            name: "TensorFlow",
            logo: "../../assets/images/skills/tensorflow.png"
          }, {
            name: "MySQL",
            logo: "../../assets/images/skills/mysql.jpeg"
          }, {
            name: "HTML5",
            logo: "../../assets/images/skills/html.png"
          }, {
            name: "Cascading Style Sheets (CSS)",
            logo: "../../assets/images/skills/css.png"
          }, {
            name: "JavaScript",
            logo: "../../assets/images/skills/javaScript.png"
          }, {
            name: "Web Development",
            logo: "../../assets/images/skills/webDevelopment.png"
          }, {
            name: "C (Programming Language)",
            logo: "../../assets/images/skills/c.png"
          }, {
            name: "C++",
            logo: "../../assets/images/skills/c++.png"
          }, {
            name: "Engineering",
            logo: "../../assets/images/skills/engineering.png"
          }, {
            name: "Java",
            logo: "../../assets/images/skills/java.png"
          }, {
            name: "Database Management System (DBMS)",
            logo: "../../assets/images/skills/dbms.png"
          }, {
            name: "PHP",
            logo: "../../assets/images/skills/php.png"
          }
        ],
        moreSkills:false,
        moreActivities:true
      },
      {
        id: 1,
        schoolName: "Kendriya Vidyalaya No 1",
        address:"Dehuroad, Pune",
        schoolLogo: "../../assets/images/kendriyaVidyalaya.png",
        startDate: "Apr 2017",
        endDate: "May 2018",
        icon: 'pi pi-check-circle',
        color: 'white',
        stream: "Science",
        board: "CBSE",
        university: null,
        cgpa: 8.8,
        percentage: 79.2,
        collegeMapLink: "https://maps.app.goo.gl/e32fYYTDjWhDQmmF6",
        universityMapLink: null,
        collegeSite: "https://no1dehuroad.kvs.ac.in/",
        universitySite: null,
        activitiesAndSocities: [
          {
            name: "Football",
            logo: "../../assets/images/activitiesSocities/football.png"
          }, {
            name: "Volleyball",
            logo: "../../assets/images/activitiesSocities/volleyball.png"
          }, {
            name: "Chess",
            logo: "../../assets/images/activitiesSocities/chess.png"
          }
        ],
        description: "I was from PCM Group i.e, Physics, Chemistry and Mathematics, along with that I was having Computer Science which was consisting of C++ and MySQL, and English.I was from PCM Group i.e, Physics, Chemistry and Mathematics, along with that I was having Computer Science which was consisting of C++ and MySQL, and English.",
        skill: [
          {
            name: "MySQL",
            logo: "../../assets/images/skills/mysql.jpeg"
          }, {
            name: "C (Programming Language)",
            logo: "../../assets/images/skills/c.png"
          }, {
            name: "C++",
            logo: "../../assets/images/skills/c++.png"
          }
        ],
        moreSkills:false,
        moreActivities:true
      }, {
        id: 2,
        schoolName: "Kendriya Vidyalaya No 1",
        address:"Dehuroad, Pune",
        schoolLogo: "../../assets/images/kendriyaVidyalaya.png",
        startDate: "Apr 2015",
        endDate: "May 2016",
        icon: 'pi pi-check-circle',
        color: 'white',
        stream: null,
        board: "CBSE",
        university: null,
        cgpa: 8.8,
        percentage: 80.6,
        collegeMapLink: "https://maps.app.goo.gl/e32fYYTDjWhDQmmF6",
        universityMapLink: null,
        collegeSite: "https://no1dehuroad.kvs.ac.in/",
        universitySite: null,
        activitiesAndSocities: [
          {
            name: "Football",
            logo: "../../assets/images/activitiesSocities/football.png"
          }, {
            name: "Volleyball",
            logo: "../../assets/images/activitiesSocities/volleyball.png"
          }, {
            name: "Chess",
            logo: "../../assets/images/activitiesSocities/chess.png"
          }
        ],
        description: null,
        skill: [],
        moreSkills:false,
        moreActivities:true
      }
    ];
  }

  toggleMore(event: any, type: string): void {
    event[`more${type.charAt(0).toUpperCase() + type.slice(1)}`] = !event[`more${type.charAt(0).toUpperCase() + type.slice(1)}`];
  }

}
