<template>
    <div class="cover-letter-container">
        <div class="header resume-section">
            <section class="header-name">
                <p>SEBASTIAN PUERTA HINCAPIE</p>
            </section>
            <section class="header-role">
                <h4>SENIOR SOFTWARE ENGINEER</h4> 
            </section>
            <section class="header-contact-details">
                <p>New York • 914-564-7937 • puertahincapie.sebastian@gmail.com • <a href="https://linkedin.com/in/sebastianph/">linkedin</a> </p>
            </section>
        </div><br />
        <div class="cover-letter-summary">
            <p>
                {{currentDate}} <br/><br/>
                Dear {{hiringManager}}, <br/><br/>
                I am writing to express my interest in the full stack developer / software engineer position. With a solid 
                background in software engineering and a passion for crafting innovative solutions, I am excited about the 
                opportunity to contribute to {{organizationName}}’s mission.<br/><br/>
                
                During my 6.5 years of experience in software engineering, I have honed my skills in frontend, backend, test 
                automation, and cloud service technology and best practices mainly for .NET and JavaScript applications using C#, 
                vb.net, and JavaScript programming languages. <br/><br/>
                
                Throughout the past two years I have participated in bi-weekly sprints following agile methodology where I have 
                successfully delivered migration from Siteminder to Okta OAth. for 4 business insurance applications within my 
                business unit as well as supported migrations for 3 other applications in other business units, added backend SOAP
                Web Services and REST APIs  for external consumption, updated existing SQL stored procedures using Microsoft SQL 
                Server, supported Ext.js to React.js migration initiatives, enhanced logging functionality for multiple applications, 
                improved automation by adding unit tests and integration test to project solutions, created Postman and SoapUI 
                collections for QA team to support testing of newly integrated services, supported production issues, supported 
                deployments, and collaborated effectively with onshore/offshore cross-functional teams to ensure the timely completion
                of projects while maintaining high-quality standards.<br/><br/>
                
                For the okta migration I provided a solution that became a standard for multiple .NET framework business insurance 
                applications where I worked closely with okta experts, okta support, cyber security, network engineering and system 
                architects. Furthermore, I took the initiative to inquire and look for other approaches to the problems that we were 
                facing for this specific task. In addition, I lead multiple demonstration sessions for other teams working on a similar 
                migration and I always made myself available when other teams had questions about specific service functionalities or 
                solution approaches. Lastly, I also lead internal learning sessions for the Dev and QA team where I provided a proof-of-concept
                on best practices, newly added services, details or potential solutions to production issues, or new technology/framework. 
                Hence, demonstrating my ability to communicate problems statements, showcase potential solutions, and provide information 
                both virtually or in person.<br/><br/>
                
                I joined the Toastmasters chapter at my organization to further enhance my professional team work, leadership, and communication 
                skills. For more than a year I participated as the Sergeant-At-Arms where I participated in prepared and impromptu communication 
                and took on different roles during each session.<br/><br/>
                
                Recently I completed my Master’s degree in Computer Science where I worked in a video meeting engagement application powered by 
                ChatGPT and machine learning technology (NLP) where the objective was to enhance engagement during meetings, provide a record of 
                the main topics covered through an assessment, and provide a score that would help meeting attendees improve their communication in 
                virtual meetings. This experience allowed me to leverage my technical expertise to create and deploy an application using AWS and 
                Azure cloud services. The frontend was deployed using AWS services such as IAM, EC2, ELB, Route 53, S3, and Cloudwatch and the backend
                was deployed using Azure Web App service and Azure SQL DB. In addition, we used ChatGPT API to automatically generate a short assessment
                at the end of each meeting to measure the engagement of each meeting attendee. Lastly, we added sentiment analysis to get insight 
                about the overall tone of the meeting and cumulative sentiment score of each meeting attendee. <br/><br/>

                Thank you for considering my application. I am excited about the possibility of joining {{organizationName}}
                and contributing to its continued success. I am available for an interview at your earliest convenience and 
                can be reached at 914-564-7937 or puertahincapie.sebastian@gmail.com.<br/><br/><br/>
                Sincerely,<br/>
                Sebastian Puerta Hincapie</p>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'CoverLetter',
  data: () => ({
    currentDate: new Date().toLocaleDateString(),
    hiringManager: "Hiring Manager",
    organizationName: "your organization",
  }),
  methods: {
  },
  computed: {

  }
}
</script>

<style scoped>
.cover-letter-container {
    margin: 2em 4em 2em 4em;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
</style>