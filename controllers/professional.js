const professionalData = {
    professionalName: "Ivan Makarov",
    base64Image: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wIAAgUBAO+Qd0QAAAAASUVORK5CYII=",
    nameLink: { firstName: "Ivan", url: "https://examplehttps://www.names.org/n/ivan/about.com" },
    primaryDescription: "Frontend Developer",
    workDescription1: "I build websites and web applications.",
    workDescription2: "I love Node.js, JavaScript, and modern frontend frameworks.",
    linkTitleText: "Find me online:",
    linkedInLink: { text: "LinkedIn", link: "https://www.linkedin.com/in/ivan-makarov-9043031aa/" },
    githubLink: { text: "GitHub", link: "https://github.com/ivanmakarov7ch" }
};

// Controller function
const getProfessional = (req, res) => {
    res.json(professionalData);
};

module.exports = { getProfessional };
