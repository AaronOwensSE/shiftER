# Lessons Learned

## Sprint 2 (Basic Frontend) Retrospective

### Frontend Design

#### What went right?

Both the site map and the wireframes did an excellent job of forcing decisions and providing a direction to move in. The site map revealed the need for a set of user stories to ensure all functionality was being accounted for, and I was able to add those user stories as part of the sprint. The wireframes proved relatively easy to assemble in Figma and closely mirrored work in React Native.

I chose to drop mockups from the sprint backlog because I knew I would not have any practical need for them during the sprint. On a larger project, they would represent a crucial step in stakeholder communication before coding starts, but for this small project, I think it was the right call to avoid duplicating work and handle the details in code.

#### What went wrong?

By the end of the sprint, clear flaws were revealed in the site map and wireframes that will need to be considered in the next frontend pass. In practice, navigation is visually ugly and counterintuitive, and there are some areas where I'm not certain the frontend is ready to serve every aspect of the planned features.

The volume of work needed to produce a set of frontend screens across the entire project's planned feature set also immediately limited the scope of this sprint to bland, cluttered visuals designed for function rather than appeal. Beautification of existing components will be needed before the project is over.

However, I still have something where previously there was nothing. I have pages and components that features can be wired into, and there will be room for iteration on specific parts of the frontend as I focus in on those features one by one.

### Coding in React Native and GUI Testing

#### What went right?

I now feel comfortable writing and combining components in React Native and manipulating style. Part of the purpose of doing a full frontend pass rather than starting with a single feature was to familiarize myself with the framework and get the more repetitive coding tasks committed to memory. This goal was accomplished.

#### What went wrong?

The amount of boilerplate code needed to work in React Native was a major frustration. It felt as if 80% of the code I was writing was tedious, repetitive setup. Granted, this problem was exacerbated by my choice to add empty styles to my stylesheets so that components could be changed rapidly during GUI testing. But I am now curious whether I could be doing anything differently or if there's a tool I should be using to mitigate the amount of repetition required.

I also encountered trouble with the file structure I chose for my top-level screen components. Most component files were organized using a structure that was straightforward and effective, but the structure for the screens specifically suffered from the same flaws I encountered in the site map. Unresolved ambiguities surrounding app navigation remain and will need to be addressed.

Additionally, testing in Expo Go was a bit too involved. Web development may have spoiled me here. The ability to simply look at the web page you're working on after changing your code is a major advantage. It seems app development requires more circumlocutious methods of testing. Expo Go is one such method. It uses a locally run server to bundle your code and feed it to the app on your phone through a QR code posted to the console. Then, the app compiles your code and renders it, handling some (but not all) changes in real-time.

I appreciate that this tool exists. I'm also shocked there isn't a better way. I wish I could simply run my app on my phone without having to publish it to a store or see my app in an emulator on my development machine without having to deal with one huge enterprise emulator each for Android and iOS.

### What changes are needed?

The Scrum methodology is working. The project has grown more in one month of Scrum than in the previous four months of generic project management methodologies. There's still a lot to learn and a lot to do, but the fog is lifting.

The first two sprints have revealed some underlying flaws in the architecture and frontend design that will need to be considered going forward, but there shouldn't be any drastic need to tear anything down. A few augmentations to the database schema and another pass on frontend navigation are the main things that are needed. I'll address those challenges as they arise.

Upcoming blind spots include routing, HTTP requests, and cookies. I've worked with these before but not in the context of app development. Deployment is also looming. Again, I'll take these on as I encounter them.

I think tripling down on Scrum and having a third successful sprint is what's needed most right now. I need to keep on proving this isn't a fluke and that this project has velocity.

## Testing Revisited

My Software Testing professor hammered on the point that too few companies allocate sufficient time for software testing, resulting in too many products that are released in a broken state. One of the contributing factors to this problem, he argued, is treating testing as if it's a final check on the successful function of the software, a check that the software will pass without issue. Scheduling time for testing without scheduling time for bug fixing and refactoring is useless. Better to avoid testing altogether if there's no time to do anything about the flaws it reveals.

Despite knowing this issue, I made the very same mistake on my first sprint of this project. I allocated 3 units of work to each database model I was writing and only 1 unit of work to testing. But I probably spent 3 to 5 units of work testing, bug fixing, and refactoring each model! And this was simple statement coverage testing, no condition coverage, no boundary value analysis, none of that.

Perhaps developers just want to believe we'll get it right the first time. I underestimated the simple fact that testing is hard. Furthermore, I underestimated just how much test code needs to be written and kept organized. In the future, I will be very careful about estimating test work. On the plus side, I feel much more comfortable with Jest. I'm also determined to leave JavaScript behind for TypeScript as often as possible on future projects.

## Scrum

To bring greater focus and velocity to the project, I have switched to the Scrum project management framework. I bought the Scrum book and have nearly finished reading it. As of the end of my first 2-week sprint, I feel I've completed more work in 2 weeks than I have in the last 2 months and that my work is focused on specific product increments with clear understandings of what does and doesn't need to be done. My second sprint will be into more uncharted territory, but I hope to build upon my first sprint's velocity.

A professor I had for my Software Engineering and Software Testing classes cautioned his students against misunderstanding Scrum and Agile. He echoed Jeff Sutherland's sentiment in the Scrum book that many organizations claiming to utilize Scrum aren't doing it right and, predictably, aren't seeing the benefits. Having worked on student teams before who would go through some of the motions of Scrum or use some of the artifacts to minimal effect, I understand this concern. I am trying to avoid this mistake while remaining attached to the reality that this is a solo project, and Scrum is a team framework.

I think in the realm of solo projects, Scrum's greatest benefits lie the estimation of work relative to other work, the creation of simple, effective artifacts to prioritize and focus work, the pinpointing and elimination of obstacles to work, the regular delivery of discrete, complete units of work, the ability to regularly redefine what needs to be worked on, and the self-reflection and tracking of velocity to improve, not just maintain, skill and speed. These assets are achieved with a relatively simple system, which is a huge plus for me. I like simple things that just work.

## Test Case Independence

While testing my database models, I encountered the problem of wanting to call one function under test from another function under test. For example, to test createUser, it would be convenient to first call deleteUser to ensure the database is prepared for the test. However, this would break test case independence. The test case meant for createUser would become reliant upon the successful function of deleteUser, which would not yet be known.

To address this problem, I chose to write direct interactions with the database in place of calling functions currently under test. For my current purposes, this is easy to do and sufficient to solve the problem, but it does highlight some possible future challenges.

Are there cases in which it is worth incurring test case dependencies to avoid excessive duplication of code? Or should independence be strictly maintained in all cases?

Furthermore, who tests the test cases? How much logic can be written for testing purposes before the test logic itself is in need of testing?

In the short term, it seems my goal should be to keep test cases as simple as possible while respecting test case independence.

## Jest Revisited

For consistency with package.json, I have changed jest.config.js to a JSON file as well. I have also removed the explicit transform option. Disabling the default transformer is not necessary.

Previously, I encountered the problem of needing to load environment variables separately for test sets. I also encountered a problem with my pg Pool remaining open at the end of my test script, even in cases when I thought it had been closed. These issues clarified the need for a better understanding of how exactly Jest works, how to get my test scripts the information they need, and how to properly close them out when they are done.

Jest runs test files in parallel. Each file gets its own test process and test environment. A file contains a test set with potentially many test cases. Each of these layers can run their own setup and teardown scripts.

Using the *globals* and *globalSetup* options, we can define variables or modules that will be available in all test environments. Environment variables can be configured here (or can wait for *setupFiles*). The option *globalTeardown* will run code after all testing is complete. Importantly, a pg Pool cannot be shared using these options. Jest serializes global setup variables and copies them to each test process, but a live pg Pool cannot be passed between processes in this manner. Each process needs its own Pool.

At the process level, *setupFiles* allows us to run setup code for an individual environment, while *setupFilesAfterEnv* similarly runs setup code once for each file but with access to Jest functions, such as *beforeAll*.

At the file level, *beforeAll* and *afterAll* run code on either side of the test set, while *beforeEach* and *afterEach* run code before and after each test case.

For now, I will perform my environment variable setup using *globalSetup* in the Jest configuration file and my pg Pool teardown using *afterAll* at the file level.

## Environment Variables Revisited

As I build more background utilities, including test sets and database setup/teardown scripts, I realize not every script I run has the same access to environment variables as my app's main process. Separate access needs to be established.

The first thing I did to fix this was to decouple the loading of environment variables from index.js and place this code in its own env-config.js file, to be imported by any script which will initiate a new process.

However, a new problem arose: The default behavior of the dotenv config function is not to look for a .env file in the current file's directory, but in the *working directory* from which the *current process* was called. Therefore, regardless of project file structure, calls to scripts from arbitrary working directories can result in failure to load environment variables.

Since my test files and database utilities do not (and should not under my desired file structure) share a directory with my .env file, they are highly likely to be called from incorrect working directories.

The solution to this is simple: Provide dotenv's config function with an explicit absolute file path.

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

## "Walking Skeleton" vs. Focused Development

I expected this project to be an ideal opportunity to practice Alistair Cockburn's famous proposal that a system should be built out from an initial "walking skeleton," that is, a minimally featured, end-to-end functional system. This establishes early integration of all subsystems and allows a more robust feature set to be fleshed out as part of an existing environment instead of in isolation. I generally agree with the consensus that this is a smart way to build software.

In this particular case, however, working alone and learning a large number of new languages and technologies, I've found that jumping too quickly from one module, language, or system to another can be detrimental to the learning experience. While I still hope to proceed in the style recommended by Cockburn, I've found that slowing down and delving a bit deeper into each section of the system before moving on to the next has its benefits. I plan to experiment with this approach in the coming weeks.

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

## Backend Architecture: Routes, Controllers, and Models

This project's backend can be divided into three layers that comprise a common architectural pattern:

1. *Routes* intercept HTTP requests and forward them to their appropriate controllers.
2. *Controllers* perform the main business functions and represent most of the high-level program logic. They may call upon validation functions, business subroutines, or a variety of libraries. They often call upon models to persist or retrieve data.
3. *Models* perform direct interactions with the database. Each model provides basic CRUD functionality for a certain part of the database, often one table or entity. They are often written to be dumb, avoiding validation and leaving as much logic to the controllers as possible. Models decouple controllers from the database.

## Setting Up a Node.js Project

Node.js can function as a simple runtime for .js files, but when we're working on a project, it's more appropriate to perform some setup.

Run "npm init" from the project root to set up a Node.js project. This handles project metadata and tracks dependencies, creating the package.json and package-lock.json files.

Running "npm install ____" (again, from the project root) is how we add packages like pg and dotenv. This will create the node_modules directory, where the packages live.

## Imports in JavaScript

When we include a file in a language like C++, we are typically making our code aware of some set of predefined functions or compound data types. We may also be gaining access to existing objects (like cout, perhaps), but it's not common that we associate file inclusion with some pre-existing object in memory. In contrast, when we import in JavaScript, the primary thing we are doing is gaining direct access to live objects exported from the file in question.

For a given Node.js process, an imported file will be executed only once, and its exports will be saved in memory. Further imports during the same process will simply acquire references to those exported objects, not new copies of them.

So, for example, if we create a separate file, pool.js, to create and export a pg Pool object to manage database connections, then import that object five times in the same process (once each in index.js, create-schema.js, seed-data.js, delete-data.js, and delete-schema.js), these five files are effectively sharing a single Pool that was created once when the first import was encountered. It's as if one object is being passed by reference between these files.

## ES6 vs. CommonJS

ES6 and CommonJS are types of JavaScript module systems. ES6 is the new standard and the correct system to learn going forward. It loads modules asynchronously, lends itself to static analysis and type checking, and is better suited for modern JavaScript practices. Older versions of Node.js used CommonJS, which is still ubiquitous.

The main difference to consider while coding is that ES6 uses the import and export keywords, while CommonJS uses require and module.exports.

Node.js is smart enough to interpret keyword use in a .js file to use ES6 when appropriate but will throw a warning when doing so. It is best to modify the project's package.json file to explicitly inform Node.js that the project is written for ES6.

## Environment Variables

Although this concept is not new to me, the specifics of implementation for app development are.

Environment variables are how we securely handle things like database credentials. Common practice is to use a root-level .env file containing variables for things like database host, port, username, password, etc. A package such as dotenv can then be used to make those variables available to code. This way, our code never contains hardcoded credentials, only variable names, allowing the code to be shared, contributed to, and deployed more freely. This also has the effect of storing important values and secrets in one place so that they can be modified without having to rewrite code.

We add .env to our .gitignore file, ensuring that our secrets never get uploaded. We also create a .env.example file that we do upload to demonstrate which variables should be populated at deployment. When we deploy, we may be given a platform-specific interface for certain environment variables, overriding our solution, which we should utilize.

---

[Back to README](../README.md)
