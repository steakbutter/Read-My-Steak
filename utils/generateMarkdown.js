// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseMitBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

    // Create a notice with the selected license
    const licenseNotice = `This application is covered under the ${license} license.`;
if(license === "Apache 2.0 License" || "Boost Software License 1.0" || "Mozilla Public License 2.0") {
  return licenseMitBadge + licenseNotice 
} else {
  return[""]
}
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection() {

    const licenseSection = `
    ## License
    
    ${licenseBadge}
    
    ${licenseNotice}
    `;
    if (!licenseSection) {
      return [""] 
    } else {
      return licenseSection;
    }
  }
  
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    const licenseUrls = {
      "MIT": "https://opensource.org/licenses/MIT",
      "Apache-2.0": "https://www.apache.org/licenses/LICENSE-2.0",
}; 
  if (licenseUrls.hasOwnProperty(license)) {
  return licenseUrls[license];
} else {
  return [""];
}
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
