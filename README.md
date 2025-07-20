# ehint-static

## Overview
ehint-static is a static web application designed to provide a fast and optimized user experience. This project utilizes modern web development practices, including HTML minification, CSS optimization, and image processing.

## Project Structure
- **.github/workflows/ci.yml**: GitHub Actions workflow for continuous integration.
- **build-scripts/**: Contains scripts for replacing tags and updating content in HTML files.
- **conf/**: Nginx configuration files for server setup.
- **dist/**: Directory for built and optimized files.
- **src/**: Source files including HTML, CSS, and images.
  - **css/**: Contains main CSS styles.
  - **img/**: Directory for image assets.
  - **index.html**: Main HTML file for the application.
- **package.json**: npm configuration file listing dependencies and scripts.

## Installation
To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/emersonhinterholz/ehint-static.git
cd ehint-static
npm install
```

## Build
To build the project, run the following command:

```bash
npm run build
```

This command will clean the `dist` directory, minify HTML, optimize CSS, process images, and replace content as specified in the build scripts.

## Running the Application
To start the application using Docker, run:

```bash
npm run start
```

This will start the application in a Docker container, serving the files from the `dist` directory.

## Stopping the Application
To stop the running application, use:

```bash
npm run stop
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.