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
        schoolName: "PCET's Nutan Maharashtra Institute of Enginnering and Technology",
        schoolLogo: "../../assets/images/nutan.jpeg",
        startDate: "Jul 2018",
        endDate: "Jun 2022",
        icon: 'pi pi-check-circle',
        color: 'white',
        stream: "Computer & Science Engineering",
        university: "Savitribai Phule Pune University",
        cgpa: 9.34,
        collegeMapLink: "https://maps.app.goo.gl/WhKJF3t9fmiFsN2j9",
        universityMapLink: "https://maps.app.goo.gl/WfuC44xsxVMJxADy9",
        collegeSite: "https://www.nmiet.edu.in/",
        universitySite: "http://www.unipune.ac.in/",
        activitesAndSocities: ["Football", "Volleyball", "Team Technothon"],
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
        ]
      },
    ];
  }
}
