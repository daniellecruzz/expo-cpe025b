// Task 1: Create the teamDirectory array of objects
let teamDirectory = [
    {
        name: "Leo Brooks",
        role: "Designer",
        skills: ["UI", "UX", "Figma"],
        available: true
    },
    {
        name: "Sasha Ivana",
        role: "Developer",
        skills: ["HTML", "CSS", "JS"],
        available: false
    },
    {
        name: "Jordan Lee",
        role: "Manager",
        skills: ["Planning", "Agile"],
        available: true
    }
];

// Task 2: Add Casey Moore using push()
teamDirectory.push({
    name: "Casey Moore",
    role: "QA Engineer",
    skills: ["Testing", "Debugging"],
    available: true
});

// Task 3: Update Sasha Ivana's availability (index 1)
teamDirectory[1].available = true;

// Task 4a: Name and first skill of the first team member
console.log(`First member: ${teamDirectory[0].name}, First skill: ${teamDirectory[0].skills[0]}`);

// Task 4b: Name and total number of skills of the last team member
let lastMember = teamDirectory[teamDirectory.length - 1];
console.log(`Last member: ${lastMember.name}, Total skills: ${lastMember.skills.length}`);

// Task 4c: Total number of people in the directory
console.log(`Total people in directory: ${teamDirectory.length}`);
