// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if () {
    
} else if() {

} else if {

} else if {

} else {

}}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if () {
    
  } else if() {
  
  } else if {
  
  } else if {
  
  } else {
  
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  if () {
    
  } else if() {
  
  } else if {
  
  } else if {
  
  } else {
  
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // labels: 'empty h1 for project title', Description, Installation, Usage, Tests, Licesnse, Questions
  // links in Table of Contents to take to corresponding sections
  ${renderLicenseBadge(license)}
  return `# ${data.title}

    ## Description
    ${data.description}
    
    ## Table of Contents
      - [Installation](#installation)
      - [Usage](#usage)
      - [Test(s)](#tests)
      - [Credits](#credits)
      - [License](#license)
      - [Contact](#contact)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ##Test(s)
    ${data.tests}

    ## Credits
    ${data.credits}

    ## License
    ${data.license}

    ## Contact
    For any questions contacts, you can reach me at: ${data.email}
    To view my github profile, and other projects, please visit; ${data.github}

`;
};

module.exports = generateMarkdown;
