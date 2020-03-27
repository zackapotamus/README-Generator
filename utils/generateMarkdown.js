function generateMarkdown(data) {
  return `# ${data.title}
${data.badge}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install the necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## License

This project is licensed under the ${data.license.name} license.

## Contributing

${data.contributing}

## Tests

To run tests, please run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

<img src="${data.image}" alt="avatar" style="border-radius: 16px;" width="30" />

If you have any questions about the repo, open an issue or contact [${data.username}](${data.url}) at ${data.email}.

`;
}

module.exports = generateMarkdown;
