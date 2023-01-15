***What?***  
In general, a manifest is a document or file that lists or declares something clearly and explicitly.

In a JavaScript project, a manifest file is a file that contains metadata and configuration information about the project. It typically contains information such as the project's name, version, author, and dependencies. 

***Why?***  
The manifest file is used by the project's build tool or package manager to determine how to build and distribute the project.

One of the most common manifest file format used in javascript projects is the package.json file. This file is used by npm (Node Package Manager) which is the default package manager for JavaScript projects.

***How?***  
Here is an example of the structure of a package.json file:

```
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample JavaScript project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "John Doe",
  "license": "ISC",
  "dependencies": {
    "lodash": "^4.17.15",
    "axios": "^0.19.2"
  }
}
```

The package.json file contains important information about the project, such as the name, version, description, main file, and scripts. It also lists the dependencies of the project, which are the other packages that the project relies on.

It's worth mentioning that other technologies have other manifest file format, for example, in web development, manifest.json is used for Progressive Web Apps (PWA), it contains information about the app, such as icons.