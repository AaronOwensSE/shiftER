# Lessons Learned

## Environment Variables

(Not exactly a new concept, but I'm discovering the specifics of implementation for the first time.)

Environment variables are how we securely handle things like database credentials. Common practice is to use a root-level .env file containing variables for things like database host, port, username, password, etc. A package such as dotenv can then be used to make those variables available to code. This way, our code never contains hardcoded credentials, only variable names, allowing the code to be shared, contributed to, and deployed more freely. Important values and secrets can also be changed in one place without the need to rewrite code. We add .env to our .gitignore file, ensuring that our secrets never get uploaded. We also create a .env.example file that we do upload to demonstrate which variables should be populated at deployment. When we deploy, we may be given a platform-specific interface for certain environment variables, overriding our solution, which we should utilize.

## ES6 vs. CommonJS

ES6 and CommonJS are types of JavaScript module systems. ES6 is the new standard and the correct system to learn going forward. It loads modules asynchronously, lends itself to static analysis and type checking, and is better suited for modern JavaScript practices. Older versions of Node.js used CommonJS, which is still ubiquitous.

The main difference to consider while coding is that ES6 uses the import and export keywords, while CommonJS uses require and module.exports.

Node.js is smart enough to interpret keyword use in a .js file to use ES6 when appropriate but will throw a warning when doing so. It is best to modify the project's package.json file to explicitly inform Node.js that the project is written for ES6.

## Imports in JavaScript

When we include a file in a language like C++, we are typically making our code aware of some set of predefined functions or compound data types. We may also be gaining access to existing objects (like cout, perhaps), but it's not common that we associate file inclusion with some pre-existing object in memory. In contrast, when we import in JavaScript, the primary thing we are doing is gaining direct access to live objects exported from the file in question.

For a given Node.js process, an imported file will be executed only once, and its exports will be saved in memory. Further imports during the same process will simply acquire references to those exported objects, not new copies of them.

So, for example, if we create a separate file, pool.js, to create and export a pg Pool object to manage database connections, then import that object five times in the same process (once each in index.js, create-schema.js, seed-data.js, delete-data.js, and delete-schema.js), these five files are effectively sharing a single Pool that was created once when the first import was encountered. It's as if one object is being passed by reference between these files.

## Setting Up a Node.js Project

Node.js can function as a simple runtime for .js files, but when we're working on a project, it's more appropriate to perform some setup.

Run "npm init" from the project root to set up a Node.js project. This handles project metadata and tracks dependencies, creating the package.json and package-lock.json files.

Running "npm install ____" (again, from the project root) is how we add packages like pg and dotenv. This will create the node_modules directory, where the packages live.

---

[Back to README](../README.md)
