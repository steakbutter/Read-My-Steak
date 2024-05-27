// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseMitBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  const licenseMozillaBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  const licenseApacheBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  const licenseBoostBage = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`

    // Create a notice with the selected license
    const licenseNotice = `This application is covered under the ${license}.`;
if(license = "Apache 2.0 License" || "Boost Software License 1.0" || "Mozilla Public License 2.0") {
  return licenseMitBadge + "            " + licenseNotice 
} else {
  return[""]
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

  ## Table of Contents
  ${data.tableContents}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.contribution}
  
  ## Tests
  ${data.tests}

  ## Questions
  ${data.github} <br> 
  ${data.email}
  
  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
