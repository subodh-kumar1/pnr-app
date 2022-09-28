# PNR APP

TS Config Details
- lib: The standard typing to be included in the type checking process. In our case, we have chosen to use the types for the browser’s DOM and the latest version of ECMAScript.
- allowJs: Whether to allow JavaScript files to be compiled.
- allowSyntheticDefaultImports: This allows default imports from modules with no default export in the type checking process.
- skipLibCheck: Whether to skip type checking of all the type declaration files (*.d.ts).
- esModuleInterop: This enables compatibility with Babel.
- strict: This sets the level of type checking to very high. When this is true, the project is said to be running in strict mode.
- forceConsistentCasingInFileNames: Ensures that the casing of referenced file names is consistent during the type checking process.
- moduleResolution: How module dependencies get resolved, which is node for our project.
- resolveJsonModule: This allows modules to be in .json files which are useful for configuration files.
- noEmit: Whether to suppress TypeScript generating code during the compilation process. This is true in our project because Babel will be generating the JavaScript code.
- jsx: Whether to support JSX in .tsx files.
- include: These are the files and folders for TypeScript to check. In our project, we have specified all the files in the src folder.

Babel Packages
- @babel/core: As the name suggests, this is the core Babel library.
- @babel/preset-env: This is a collection of plugins that allow us to use the latest JavaScript features but still target browsers that don’t support them.
- @babel/preset-react: This is a collection of plugins that enable Babel to transform React code into JavaScript.
- @babel/preset-typescript: This is a plugin that enables Babel to transform TypeScript code into JavaScript.
- @babel/plugin-transform-runtime and @babel/runtime: These are plugins that allow us to use the async and await JavaScript features.