import React from 'react';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';


const data = {
    socialMedias: [
        "https://github.com/",
        "https://www.linkedin.com/",
        "https://www.facebook.com/"
    ],
    skills: [
        {
            Area: "Programming Language",
            SkillSet: [
                { Name: "Java", Hot: true },
                { Name: "C#", Hot: false },
                { Name: "Python", Hot: false }
            ]
        },
        {
            Area: "Web-Based Application Development",
            SkillSet: [
                { Name: "JavaScript (ES5, ES6)", Hot: true },
                { Name: "TypeScript", Hot: false },
                { Name: "HTML5", Hot: true },
                { Name: "CSS (SCSS/SASS)", Hot: true },
                { Name: "React", Hot: true }
            ]
        }
    ],
    experiences: [
        {
            companyName: "Demo1 Technologies",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
            roles: [
                {
                    title: "Full Stack Developer",
                    description: "Built and updated various Chrome Extensions.",
                    startDate: "2017-01-01",
                    endDate: "2017-05-01",
                    location: "New York, USA"
                }
            ]
        },
        {
            companyName: "Demo2 Technologies",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
            roles: [
                {
                    title: "UI Designer",
                    description: "Design user-fridendly web page",
                    startDate: "2016-05-01",
                    endDate: "2016-09-01",
                    location: "Beijing, China"
                }
            ]
        }
    ]
};

function App() {
    return (
        <div>
            <Example1 socialMedias={data.socialMedias} />
            <Example2 skills={data.skills} />
            <Example3 experiences={data.experiences} />
        </div>
    );
}

export default App;
