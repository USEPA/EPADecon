# Introduction

The Wide-Area Decontamination Tool (WADT) estimates the cost and time associated with a remediation effort following the release of a biological agent in human-usable indoor, outdoor, and underground areas. The WADT utilizes a vairety of equations to calculate the cost and time associated with seven components of the decontamination process, including: 
  1. Incident Command: the oversight of all personnel and processes
  2. Characterization Sampling: the initial sampling of surfaces to determine the contaminant levels present before decontamination
  3. Source Reduction: the removal of material from the site area prior to decontamination to save the cost of decontaminating said materials
  4. Decontamination: the treatment of surfaces to remove contaminant
  5. Clearance Sampling: the sampling of surfaces after decontamination to determine if additional rounds of decon are required to fully decon the area
  6. Waste Sampling: the sampling of waste materials generated by decontamination to ensure proper disposal procedures are followed
  7. Travel: personnel traveling to and from the site area

# Getting Started

## Software dependencies

- ASP.Net Core 3.1 (Visual Studio 2019)
- Node (https://nodejs.org/en/download/)

## Running the Application

When first getting started with the application, clone the repository in the folder of your choice. This initial step should only be performed once

To run the application:
1. Open the Battelle.EPA.WideAreaDecon.Client folder in Visual Studio Code
2. Click the "Run API Server" button on the bottom toolbar
3. Once the API server is running, click the "Run and Debug" button on the lefthand side toolbar (or 'Ctrl + Shift + D') to open the correct toolbar
4. Click the green 'Run and Debug' arrow at the top of the displayed toolbar
5. This should open a web browser with the tool

# Contribute

Follow the standards set forth by the group for all .NET development.

## Development dependencies

It is recommended that development is completed in two enviroments:

1. Changes to .NET code (backend functionality) in Visual Studio 2019
2. Changes to VueJS code (frontend functionality) in Visual Studio Code

### Visual Studio Code Extensions Required

To ensure consistency in refactoring and linting, please ensure the following extensions are installed to your Visual Studio Code:

- ESLint (2.0.15)
- Vetur (0.23.0)
- Prettier - Code formatter (3.20.0)

### Visual Studio Code Settings

To ensure consistency in refactoring and linting, please ensure your Visual Studio Code settings include the following:

```json
{
  ...,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-expand-multiline",
    },
    "prettyhtml": {
      "printWidth": 100,
      "singleQuote": false,
      "wrapAttributes": true,
      "sortAttributes": false
    },
    "prettier": {
      "singleQuote": true,
      "trailingComma": "all"
    },
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "prefixWithI": "always"
    },
    {
      "language": "typescript"
    },
    {
      "language": "typescriptreact"
    }
  ],
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  ...,
}
```



## Running the application
The wide area decontamination tool is an ASP.Net Core application with a VueJs TypeScript frontend.

Ensure that all dependencies listed above are installed and configured appropriately. To launch the application, run the following command from the WebServer project directory:
```
dotnet run
```

## Unit testing for .NET

### Adding Tests

To add unit tests in .NET code:
  1. Open the Battelle.EPA.WideAreaDecon.sln solution in Visual Studio
  2. Select the 'Test' option in the top toolbar 
  3. Open the Test Explorer by selecting the 'Test Explorer' option from the dropdown menu
  4. Add a test to the Battelle.EPA.WideAreaDecon.API.Tests, Battelle.EPA.WideAreaDecon.InterfaceData.Tests, or Battelle.EPA.WideAreaDecon.Model.Tests project by clicking the dropdown arrow next to the project in the Solution Explorer pane
  5. Add a new test file by right-clicking the desired location, hovering over the 'Add' option, and selecting the 'New Item..." option
  6. Add a Visual C# Class item, using the Test naming convention (adding 'Tests' to the end of the class name being tested)
  7. Follow the NUnit Testing Framework, documented here: 
    - https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-nunit#creating-the-first-test

### Running Tests

To run unit tests in .NET code:
  1. Open the Battelle.EPA.WideAreaDecon.sln solution in Visual Studio
  2. Select the 'Test' option in the top toolbar 
  3. Open the Test Explorer by selecting the 'Test Explorer' option from the dropdown menu
  4. All tests will show up in the Test Explorer pane. Run an individual test by selecting the desired test and clicking the 'Run' button in the Test Explorer pane
  5. Alternately, run all tests by clicking the 'Run All Tests In View' button in the Test Explorer pane
  6. Test results should be printed to the Test Explorer pane

## Unit testing for VueJs typescript

### Adding Tests

To add unit tests in VueJs typescript:
  1. Open the Battelle.EPA.WideAreaDecon.Client folder in Visual Studio Code
  2. Add a test by dropping down the 'tests > unit > providers' structure in the Explorer pane and right-clicking to add a .spec.ts file
  3. Use the Test naming convention (adding 'Tested' to the end of the class name being tested)
  4. Follow the Mocha Testing Framework and Chai Library, documented here: 
    - https://mochajs.org/#getting-started
    - https://www.chaijs.com/
  5. Unit tests generally follow this pattern:
    - Setup: where conditions for the test are setup (i.e. creating parameters to pass to the method being tested)
    - SUT (System Under Test): where the method being tested is called
    - Assert: where the results returned by the method are verified
  6. The test suite is written inside of a 'describe' method, which takes a description string (such as the name of the suite) and a function containing the unit tests as parameters. Inside the describe function (before the tests) you can define any variables that multiple tests will use
  7. Unit tests are then written inside of an 'it' method, which also takes a description string and a function containing the unit test steps

### Running Tests

To run unit tests in VueJs typescript:
  1. Open the Battelle.EPA.WideAreaDecon.Client folder in Visual Studio Code
  2. Run an individual test by opening the test file in Visual Studio Code and clicking the 'Run and Debug' tab on the left toolbar. Then click the 'Debug Mocha Test File' at the top of the pane
  3. Alternately, run all tests by clicking the 'Run Unit Tests' button on the bottom toolbar
  4. Test results should be printed to the terminal under the 'Debug Console' tab at the bottom of the screen

## Dependency Injection in Typescript

(Inversify)[http://inversify.io/] is used to enable dependency injection in typescript. Full information on the library can be found at the website, but the steps to add a new DI dependency are:
  1. Add the appropriate interface into the `src/interfaces` directory (example below)
```typescript
// src/interfaces/example/INumberProvider.ts
export default interface INumberProvider {
  getValue(): number;
}
```
  2. Add the implementation of the interface into the `src/implementations` directory with the injectable marking
```typescript
// src/implementations/example/ExampleNumberProvider.ts
import INumberProvider from '@/interfaces/INumberProvider.ts';
import { injectable } from 'inversify';

@injectable()
export default class ExampleNumberProvider implements INumberProvider {
  // Read the docs for information on how to provide injectable members
  getValue(): number {
    retrurn 1.0;
  }
}
```
  3. Add a type mapping to the object found in `src/dependencyInjection/types.ts` - *Note - read the docs for more information on the displayed used here*
```typescript
// src/dependencyInjection/types.ts
export const TYPES= {
  ..., // other types
  NumberProvider: Symbol('INumberProvider'),
  ..., // other types
}
```
  4. Add a mapping of the interface to the implementation within `src/dependencyInjection/inversify.config.ts`
```typescript
// src/dependencyInjection/inversify.config.ts
import { Container } from 'inversify';
import 'reflect-metadata';
import { TYPES } from './types';
... // other interface imports
import INumberProvider from '@/interfaces/INumberProvider.ts';
... // other implementation imports
import ExampleNumberProvider from '@/implementations/ExampleNumberProvider.ts';

let container = new Container();

... // other implementation mappings

container
  .bind<INumberProvider>(TYPES.NumberProvider)
  .to(ExampleNumberProvider); // read the docs for more details on options for this

... // other implementation mappings

export default container
```
  5. Access the class from the container provider wherever it is needed
```typescript
// Some file needing number provider (can be ts or vue script)
import container from '@/dependencyInjection/inversify.config.ts';
import INumberProvider from '@interfaces/INumberProvider';

... // other code

const numberProvider = container.get<INumberProvider>(TYPES.NumberProvider);
let providedNumber = numberProvider.get();

... // other code
```
