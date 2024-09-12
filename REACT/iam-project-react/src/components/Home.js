import '../css/home.css';
import Navbar from './Navbar';

const Home = () => {
    return ( 
        <div className="main-container">
            <Navbar />
            <div className="resume-container">
                <div className="header resume-section">
                    <section className="header-name">
                        <h1>SEBASTIAN PUERTA HINCAPIE</h1>
                    </section>
                    <section className="header-role">
                    <h4>SENIOR SOFTWARE ENGINEER</h4> 
                    </section>
                    <section className="header-contact-details">
                        <p>New York • 914-564-7937 • puertahincapie.sebastian@gmail.com • linkedin.com/in/sebastianph/ </p>
                    </section>
                </div><br />
                <div className="summary resume-section">
                    <p>As a senior software engineer at LTIMindtree, I enhance, maintain, and support development for multiple 
                    client business insurance applications in the insurance domain. I primarily work with technologies, such 
                    as .NET Framework / Core and JavaScript (React, Angular, Vue, Ext.js) to deliver high-quality and scalable solutions.
                    I am passionate about learning new technologies and applying them to solve real-world problems. 
                    My goal is to become a leader and an expert practitioner in the software industry.</p>
                </div><br />
                <div class="qualifications resume-section">
                    <h3 class="section-name">QUALIFICATIONS</h3>
                    <p><b>Backend Frameworks:</b> ASP.NET Framework, ASP.NET MVC, .NET Core, Spring Boot</p>
                    <p><b>Frontend Frameworks:</b> Asp.Net Views, React.js, Angular.js, Vue.js, Ext.js</p>
                    <p><b>Database:</b> MySQL, SQL Server, MongoDB</p>
                    <p><b>Testing:</b> Postman, SoapUI, Fiddler, XUnit, NUnit, Selenium, Canopy, SpecFlow, Cucumber, Gherkin</p>
                    <p><b>Development Tracking Platforms:</b> Rally, Jira, Trello</p>
                    <p><b>Deploy Management Platforms:</b> Jenkins, UrbanCode Deploy, TeamCity, Octopus, Bitbucket Pipelines</p>
                    <p><b>Repositories:</b> Gitlab, Bitbucket, GitHub</p>
                    <p><b>Cloud Services:</b> AWS, Azure</p>
                    <p><b>Operating System:</b> Windows</p>
                    <p><b>Version Control:</b> Git, SVN</p>	
                    <p><b>AI Tools:</b> ChatGPT, GitHub CoPilot</p>
                </div><br />
                <div class="experience resume-section">
                    <h3 class="section-name"> EXPERIENCE </h3>
                    <section class="experience1">
                        <div class="block-w-3">
                            <p class="col-company"><b>LTIMindtree (Full-Time)</b></p>
                            <p class="col-location">Hartford, CT</p>
                            <p class="col-date">09/2022 - Current</p>
                            Senior Software Engineer, Insurance<br/>
                        </div>
                        Client: Travelers – Office/Remote<br/>
                        Domain: Insurance (Business Insurance)<br/>
                        Role: Full Stack Engineer<br/>
                        <ul>
                            <li>Enhanced, maintained, and supported development for 4-6 .NET Framework/MVC (C#, VB.NET) and JavaScript 
                                (Node.js, Ext.js. React) client insurance applications. As a result, making sure that customer/agent applications 
                                are always available.</li>
                            <li>Worked closely with cross functional onshore and offshore teams (QA/QE, Cyber Security, Network, Okta, DevOps, 
                                Business Domain Experts, System Architects) </li>
                            <li>Supported migration from SiteMinder to Okta, migration from Ext.js to React, implementation of new Web Services (SOAP),
                                implementation of REST and GraphQL APIs, and maintenance of SQL Stored Procedures using Microsoft SQL Server.</li>
                            <li>Supported automation/testing efforts by implementing unit test using XUnit, implementing integration tests using NUnit, 
                                updating automation suite, and creating REST/SOAP API service collections using Postman and SoapUI.</li>
                            <li>Supported development efforts for a microservice/microviews JavaScript application with multiple dependent components deployed
                                using Gitlab pipelines to docker containers. Monitored container instance logs through portainer.</li>
                            <li>Supported DevOps efforts by creating CloudBees (Jenkins Core) build and deploy scripts to deploy project files to Urban Code Deploy 
                                (UCD) to then deploy to IIS servers.</li>
                            <li>Participated in training/development sessions, project requirement meetings, standups, debug sessions, KT sessions, deployments to 
                                production, worked on task estimations, updated Rally user stories, and updated documentation.</li>
                        </ul>
                    </section>
                    <section class="experience2">
                        <div class="block-w-3">
                            <p class="col-company"><b>Incedo Inc. (Full-Time)</b></p>
                            <p class="col-location">Iselin, NJ</p>
                            <p class="col-date">08/2019 - 08/2022</p>
                            Client: Cambridge Associates – Office/Remote<br/>
                            Domain: Wealth Management<br/>
                        </div><br/>
                        Senior Software Engineer, Financial Services<br/>
                        Role: Senior Automation Engineer<br/>
                        <ul>
                            <li>Brooklyn Project - automation developer for a wealth management application that automates financial processes: Implemented new 
                                UI/API tests, maintained existing tests, performed manual testing, and test code refactoring. Performed stress testing, performance 
                                testing, regression testing, and smoke testing. Involved in 2-3 sprints per month following agile + kanban board. As a result, 
                                helping the team to detect defects in the existing and new functionalities of the application to provide a more stable and optimized 
                                experience for application end users.</li>
                            <li>Developed a prototype using AWS Device Farm, Bitbucket Pipelines, and AWS CodePipeline integration for the purpose of reducing automation
                                testing time and UI parallel execution.</li>
                            <li>Provided training of onboarded engineers, automation support, and client application insight. Moreover, supported the interview process of new automation candidates.  </li>
                        </ul>
                        
                        Software Engineer, Financial Services<br/>
                        Role: Automation Engineer<br/>
                        <ul>
                            <li>Brooklyn Project - automation developer for a wealth management application that automates financial processes: Implemented new UI/API tests, maintained existing tests, performed manual testing, and test code refactoring. Performed stress testing, performance testing, regression testing, and smoke testing. Involved in 2-3 sprints per month following agile + kanban board.</li>
                            <li>BAR + BMC Projects - Supported the inception of BDD Specflow framework set up, API test setup, implemented automated reporting capabilities, and other general programming/automation support.</li>
                            <li>T3 Universal Dashboard - Supported backend development for analytics/report dashboard in .NET and MongoDB.</li>
                        </ul>
                        
                        Associate Engineer, Financial Services<br/>
                        Role: Automation Engineer<br/>
                        <ul>
                            <li>Supported test automation suite for client application - Brooklyn Project. Updated existing automation, added new automation, and provided feedback to developers and the business about potential defects and bugs in the application. The application was a complex multi-system business application that handles thousands of client investment statements and automates a number of business processes. </li>
                            <li>Converted automation suite tests to Behavior Driven Development (BDD) format using Specflow Framework + Gherkin. Updated QA engineering project documentation. Added test reporting functionality using extent reports.</li>
                            <li>Internally supported backend development for Conversion Rate Optimization (CRO) application.</li>
                        </ul>
                    </section>
                    <section class="experience3">
                        <div class="block-w-3">
                            <p><b>New York Public Library (Internship)</b></p>
                            <p class="col-location">New York, NY</p>
                            <p class="col-date">10/2018 - 04/2019</p>
                            System Engineer Support, Information Technology<br/>
                        </div>
                        Worked with DevOps team using Puppet software to configure and manage deployments.
                    </section>
                    <section class="experience4">
                        <div class="block-w-3">
                            <p><b>Con Edison (Internship)</b></p>
                            <p class="col-location">New Yrok, NY</p>
                            <p class="col-date">08/2017 - 12/2018</p>
                            Engineering Aide, Energy Services<br/>
                        </div>
                        Electric job monitoring and reporting for Queens, NY district. Automated various reporting processes and generate reports for managers.
                    </section>
                </div><br />
                <div class="education resume-section">
                    <h3 class="section-name">EDUCATION</h3>
                    <section class="education1">
                        <p><b>Virginia Polytechnic Institute and State University Northern Virginia Center: College of Engineering</b></p>
                        <p>Master of Engineering in Computer Science</p>
                        <p>Track: Software Engineering</p>
                        <p>Graduated: 12/2023</p>
                        <p>Summary: While in school I was employed full-time. For my capstone, I worked on a video meeting engagement
                            application powered by ChatGPT. The application was created for video meeting providers where a transcript
                            was generated at the end of the meeting e.g. Zoom. Using the meeting transcript we are able to provide feedback 
                            to the end users about their presentation skills and perform sentiment analysis on the captured text. 
                            Furthermore, our service would generate a short quiz created by ChatGPT to test the user on the main topics 
                            covered in the meeting. 
                        </p>
                    </section>
                    <section class="education2">
                        <p><b>The City College of the City University of New York: The Grove School of Engineering</b></p>
                        <p>Bachelor of Engineering in Computer Engineering</p>
                        <p>Track: Computer Vision</p>
                        <p>Graduated: 05/2019</p>
                        <p>Summary: While in school I participated in the CUNY Corps which is a non-profit organization
                            involved in providing volunteering services to communities and schools in New York city. 
                            I also held an internships at the New York Library in the IT department and Con Edison in the energy
                            services and engineering department. I also worked in IT for the Architecture School over the summer. 
                            For my capstone project I worked on bridging AR/VR technology using a Microsoft Hololens and Oculus headset 
                            to provide training and assistance learning.In connection with Goodwill and Con Edison we received
                            feedback from managers and coordinators from each respective organization which was helpful in understanding the 
                            need for this technology from their end users. In addition, I participated in the Albany Innovation 
                            Showcase with my team and professor, Dr. Zhigang Zhu, to demonstrate our final product to other participants, guests, 
                            and panel judges. We were also award a $15,000 research grant where $3,000 was dedicated to our set up and equipment 
                            and the remaining amount for the continuation and future research of this project.
                        </p>
                    </section>
                    <section class="education3">
                        <p><b>New York University: Polytechnic School of Engineering</b></p>
                        <p>Bachelor of Science in Computer Engineering</p>
                        <p>Transferred</p>
                        <p>Summary: While in school I was involved with the Lead Institute which is a leadership program to enhance 
                            student leadership, communication, and team work. Moreover, I also held part-time jobs over the summer 
                            and weekends in sales.
                        </p>    
                    </section>
                    <section class="education4">
                        <p><b>Westchester Community College	</b></p>
                        <p>Associates of Science in Engineering Science</p>
                        <p>Track: Electrical/Electronics Engineering</p>
                        <p>Graduated: 12/2013</p>
                        <p>Summary: Graduated with additional degrees in Math & Science Liberal Arts and Electrical/Electronic Technology, 
                            While in school I worked as math tutor. Tutored in math subjects such as Precalculus, Calculus 1, Calculus 2, 
                            Calculus 3, Differential Equations, and Linear Algebra. Moreover, I was also involved in a myriad of school 
                            extracurricular programs such as the Orientation Leadership Program, Westchester Events Board, Phi Theta Kappa, 
                            and Student Government Association. I was also a recipient of the Kathryn W. Davis Scholarship and participated 
                            in a year long community service project about the effects of bullying at an early age. Lastly, I also held a
                            summer internship at the Westchester Medical Center for the Biomedical Department as a support technician.
                        </p>
                    </section>           
                </div><br />
                <div class="projects resume-section">
                    <h3 class="section-name"> PROJECTS </h3>
                    <section class="project1">
                        <p><b>Capstone: Video Meeting Engagement Application</b></p>
                        <p>08/2023 - 12/2023</p>
                        <p>Created a web application to measure video meeting engagement of attendees using .NET 6, 
                            React.js, Microsoft SQL Server, JavaScript, HTML5, CSS, Bootstrap, ChatGPT API, Zoom APIs, 
                            Gitlab, AWS (EC2, S3, CloudFormation), Jira Kanban Board, Figma, and Postman.</p>
                        <p>Demonstrated final product to Virginia Tech Engineering faculty and representatives from Boeing and US Army. 
                            Application was successfully deployed and functioned as expected. Our team received positive feedback
                            and there was interest for further exploration</p>
                    </section>
                    <section class="project2">
                        <p><b>Course Registration System Web Application</b></p>
                        <p>09/2022 - 11/2022</p>
                        <p>Designed and implemented a course registration system web application using Java 8, STS, Spring Boot, Spring Server, 
                            Zuul API, Spring Cloud, MySQL/Navicat, HTML5, CSS, Bootstrap 5, Angular 13, Typescript, ES6. The login/authentication
                            implemented using Nodejs, Express.js, MongoDB. Additionally, an employee dashboard implemented using React.js.</p>
                        <p>Demonstrated final product LTIMindtree engineering leads. Application was successfully deployed and functioned as expected.
                            Our team received positive feedback from project leads which resulted in project placement for one of their most important
                            insurance accounts.
                        </p>
                    </section>
                    <section class="project3">
                        <p><b>Bookstore Web Application</b></p>
                        <p>05/2022 - 08/2022</p>
                        <p>Designed and implemented lightweight bookstore web application using Vue.js, Java, TomCat, Node.js. MySQL, HTML5, CSS, and 
                            Bootstrap.</p>
                        <p>Demonstrated application to the professors and class to received feedback. Application functioned as expected and received 
                            positive feedback from professors and classmates.
                        </p>
                    </section>
                </div><br />
                <div class="certifications  resume-section">
                    <h3 class="section-name">CERTIFICATIONS / COURSES</h3>
                    <p>Microsoft Azure Fundamentals - Azure Certification 09/2024</p>
                    <p>AWS Certified Cloud Practitioner - AWS Certification 07/2024 - 07/2027</p>
                    <p>AWS Certified Cloud Practitioner Essentials - AWS Certificate 06/2024</p>
                    <p>GitHub Copilot - Udemy Certificate 12/2023</p>
                    <p>CLF-C02: AWS Certified Cloud Practitioner - Udemy Certificate 06/2024</p>
                    <p>AZ-900: Microsoft Azure Fundamentals - Udemy Certificate 12/2023</p>
                    <p>Data Quality Masterclass - Udemy Certificate 11/2023</p>
                </div><br />
                <div class="languages  resume-section">
                    <h3 class="section-name">LANGUAGES</h3>
                    <p>English, Spanish</p>
                </div><br />
                <div class="affiliations  resume-section">
                    <h3 class="section-name">AFFILIATIONS</h3>
                    <p>Toastmaster: Active Member 05/2024 - Current </p>
                    <p>Toastmasters: Sergeant-At-Arms 04/2023 - 05/2024</p>
                </div><br />
                <div class="interests  resume-section">
                    <h3 class="section-name">INTERESTS</h3>
                    <p>Basketball, Soccer, Swimming, Dancing, Nature Walks, Leisure Reading, Audio Books, Movies, Self-Development</p>
                </div>
            </div>    
        </div>  
    );
}
 
export default Home;