// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = `[![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;

    // Create a notice with the selected license
    const licenseNotice = `This application is covered under the ${license} license.`;

    // Construct the license section of the README
    // TODO: Create a function that returns the license section of README
    // If there is no license, return an empty string
    function renderLicenseSection(license) {

      const licenseSection = `
      ## License
      
      ${licenseBadge}
      
      ${licenseNotice}
      `;
      
      return licenseSection;
    }
}

// Example usage
const license = "MIT";
const licenseSection = renderLicenseSection(license);
console.log(licenseSection);



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
