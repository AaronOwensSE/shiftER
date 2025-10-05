# Lessons Learned

## Environment Variables

Although this concept is not new to me, the specifics of implementation for app development are.

Environment variables are how we securely handle things like database credentials. Common practice is to use a root-level .env file containing variables for things like database host, port, username, password, etc. A package such as dotenv can then be used to make those variables available to code. This way, our code never contains hardcoded credentials, only variable names, allowing the code to be shared, contributed to, and deployed more freely. This also has the effect of storing important values and secrets in one place so that they can be modified without having to rewrite code.

We add .env to our .gitignore file, ensuring that our secrets never get uploaded. We also create a .env.example file that we do upload to demonstrate which variables should be populated at deployment. When we deploy, we may be given a platform-specific interface for certain environment variables, overriding our solution, which we should utilize.

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

## Backend Architecture: Routes, Controllers, and Models

This project's backend can be divided into three layers that comprise a common architectural pattern:

1. *Routes* intercept HTTP requests and forward them to their appropriate controllers.
2. *Controllers* perform the main business functions and represent most of the high-level program logic. They may call upon validation functions, business subroutines, or a variety of libraries. They often call upon models to persist or retrieve data.
3. *Models* perform direct interactions with the database. Each model provides basic CRUD functionality for a certain part of the database, often one table or entity. They are often written to be dumb, avoiding validation and leaving as much logic to the controllers as possible. Models decouple controllers from the database.

## Falsy Values vs. Exceptions vs. Results

In the past, I've used projects as opportunities to explore different styles of error handling, and I still feel like I'm searching for the correct approach.

Some languages, like C, do not have exception handling and rely upon either boolean values or error codes. Boolean values can be very convenient for the programmer calling the function when he or she only needs to know if it succeeded or failed. However, the lack of detail can lead to ambiguity.

This JavaScript function to determine whether a user exists in the database is a classic example:

```JavaScript
async function userExists(userId) {
    try {
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [userId]);

        return result.rowCount > 0;
    } catch (error) {
        console.error(error.message);

        return false;
    }
}
```

The function returns false when the specified user does not exist in the database, but it also returns false when the query fails. A programmer relying upon a false result as a certainty that the specified user does not exist can be misled, resulting in bugs.

On the other hand, every time we write a function that throws an exception, we are asking the calling code to handle that exception. Too much of this bogs code down with an excess of try/catch control structures, harming readability and forcing functions which might be relatively simple to engage in relatively complex error handling. Clear documentation of exception throwing behavior also becomes highly important.

It's ineffective to mix the two approaches within a single function because any possibility of an exception being thrown effectively decides the issue and forces the caller to react. Therefore, the best approach can only be to minimize the number of functions which throw exceptions, i.e., exceptions are for exceptional circumstances only.

The Result pattern offers a happy medium that I would like to explore further while working on this project. Very simply, a Result is a compound data type which contains both a boolean to indicate success or failure and either a return value or an error object or message.

Although this does force the calling code to unpack the Result, this is arguably less cumbersome than being required to change the control flow of the code and handle scope issues surrounding the introduction of try/catch blocks.

## "Walking Skeleton" vs. Focused Development

I expected this project to be an ideal opportunity to practice Alistair Cockburn's famous proposal that a system should be built out from an initial "walking skeleton," that is, a minimally featured, end-to-end functional system. This establishes early integration of all subsystems and allows a more robust feature set to be fleshed out as part of an existing environment instead of in isolation. I generally agree with the consensus that this is a smart way to build software.

In this particular case, however, working alone and learning a large number of new languages and technologies, I've found that jumping too quickly from one module, language, or system to another can be detrimental to the learning experience. While I still hope to proceed in the style recommended by Cockburn, I've found that slowing down and delving a bit deeper into each section of the system before moving on to the next has its benefits. I plan to experiment with this approach in the coming weeks.

## Testing Setup with Jest and cross-env

Jest is a JavaScript testing framework that allows test cases to be written easily and run automatically. I am hoping to use it to target code and requirements coverage and to put some of my academic knowledge of software testing into practice. Getting Jest working properly requires some additional project configuration.

In the project root directory, install Jest as a development (not production) dependency:

```shell
npm install --save-dev jest
```

In package.json (the project configuration file), CommonJS projects can set the test script to run Jest by simply using:

```JSON
"scripts": {
    "test": "jest"
}
```

However, we have committed to using ES Modules on this project. We must configure Jest and the project to deal with this.

First, create a file in the project root directory called jest.config.js, and save the following code:

```JavaScript
export default {
    testEnvironment: "node",    // Use a Node.js environment for testing, as opposed to simulating a browser environment.
    transform: {},              // Prevent Jest from using Babel to transform code, allowing it to run ES Modules.
};
```

And in package.json:

```JSON
"scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
}
```

Now, whenever we run the following from the project root directory:

```shell
npm test
```

Jest will search for test files (*.test.js), run the test cases within them, and give a report.

That's nice, but there's a problem. Test files need to import code files in order to access the functions to be tested. This means anything in the code file that is not being exported is not accessible to Jest. We could write test cases directly into the code files, of course, but this would be an undesirable mixing of test code and production code.

My preferred solution to this problem is to build an export package conditionally based on the NODE_ENV environment variable. (Any variable name could be used, but NODE_ENV is a standard recognized by many tools that we should adhere to.) This still requires modifying the codebase, but the modifications are minimal and acceptable.

In order to set NODE_ENV when we run our test script, we need to modify package.json again. However, different operating systems use different syntaxes to set a variable. To improve the project's portability, we can use the cross-env package to enable setting of environment variables with the same syntax, regardless of operating system.

In the project root directory:

```shell
npm install --save-dev cross-env
```

Now, we can have our test script set NODE_ENV=test (on any operating system) whenever it runs, allowing exports conditional upon NODE_ENV's value to activate in our test environment while remaining inactive in production.

In package.json:

```JSON
"scripts": {
    "test": "cross-env NODE_ENV=test node --experimental-vm-modules node_modules/jest/bin/jest.js"
}
```

With that, we are finally ready to write and run some test sets.

---

[Back to README](../README.md)
