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