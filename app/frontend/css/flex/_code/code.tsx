"use client";
import dynamic from "next/dynamic";
import { Sandpack } from "@codesandbox/sandpack-react";

// Sandbox options
const sandboxOptions = {
  showNavigator: false,
  showTabs: false,
  wrapContent: true,
  editorWidthPercentage: 0,
};

// Example Codes

const initial = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <div class="box one"><span>One</span></div>
      <div class="box two"><span>Two</span></div>
      <div class="box three"><span>Three</span></div>
    </div>
    <style>
        body {
            height: 80vh;
            display: flex;
            background-color: gray;
        }
        
        .container {
            width: 500px;
            margin: auto;
            border: 1.5px solid black;
            background-color: lightgray;
            display: flex;
        }

        .box {
            display: flex;
            width: 90px;
            height: 60px;
        }

        .box:nth-of-type(1) {
            background-color: orange;
        }

        .box:nth-of-type(2) {
            background-color: aqua;
        }

        .box:nth-of-type(3) {
            background-color: green;
        }

        .box span {
            margin: auto;
            font-size: 1.5rem;
        }
    </style>
  </body>
</html>
`;

export const flexGrowFirst = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <div class="box one"><span>One</span></div>
      <div class="box two"><span>Two</span></div>
      <div class="box three"><span>Three</span></div>
    </div>
    <style>
        body {
            height: 80vh;
            display: flex;
            background-color: gray;
        }
        
        .container {
            width: 500px;
            margin: auto;
            border: 1.5px solid black;
            background-color: lightgray;
            display: flex;
        }

        .box {
            display: flex;
            width: 90px;
            height: 60px;
        }

        .box:nth-of-type(1) {
            background-color: orange;
            flex-grow: 1;
        }

        .box:nth-of-type(2) {
            background-color: aqua;
        }

        .box:nth-of-type(3) {
            background-color: green;
        }

        .box span {
            margin: auto;
            font-size: 1.5rem;
        }
    </style>
  </body>
</html>
`;

export const flexGrowSecond = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <div class="box one"><span>One</span></div>
      <div class="box two"><span>Two</span></div>
      <div class="box three"><span>Three</span></div>
    </div>
    <style>
        body {
            height: 80vh;
            display: flex;
            background-color: gray;
        }
        
        .container {
            width: 500px;
            margin: auto;
            border: 1.5px solid black;
            background-color: lightgray;
            display: flex;
        }

        .box {
            display: flex;
            width: 90px;
            height: 60px;
        }

        .box:nth-of-type(1) {
            background-color: orange;
            flex-grow: 1;
        }

        .box:nth-of-type(2) {
            background-color: aqua;
            flex-grow: 1;
        }

        .box:nth-of-type(3) {
            background-color: green;
        }

        .box span {
            margin: auto;
            font-size: 1.5rem;
        }
    </style>
  </body>
</html>
`;

export const flexGrowThird = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <div class="box one"><span>One</span></div>
      <div class="box two"><span>Two</span></div>
      <div class="box three"><span>Three</span></div>
    </div>
    <style>
        body {
            height: 80vh;
            display: flex;
            background-color: gray;
        }
        
        .container {
            width: 500px;
            margin: auto;
            border: 1.5px solid black;
            background-color: lightgray;
            display: flex;
        }

        .box {
            display: flex;
            width: 90px;
            height: 60px;
        }

        .box:nth-of-type(1) {
            background-color: orange;
            flex-grow: 1;
        }

        .box:nth-of-type(2) {
            background-color: aqua;
            flex-grow: 2;
        }

        .box:nth-of-type(3) {
            background-color: green;
            flex-grow: 3;
        }

        .box span {
            margin: auto;
            font-size: 1.5rem;
        }
    </style>
  </body>
</html>
`;

export const flexShrinkInitial = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <div class="box one"><span>One</span></div>
      <div class="box two"><span>Two</span></div>
      <div class="box three"><span>Three</span></div>
    </div>
    <style>
        body {
            height: 80vh;
            display: flex;
            background-color: gray;
        }
        
        .container {
            width: 500px;
            margin: auto;
            border: 1.5px solid black;
            background-color: lightgray;
            display: flex;
        }

        .box {
            display: flex;
            width: 200px;
            height: 60px;
        }

        .box:nth-of-type(1) {
            background-color: orange;
        }

        .box:nth-of-type(2) {
            background-color: aqua;
        }

        .box:nth-of-type(3) {
            background-color: green;
        }

        .box span {
            margin: auto;
            font-size: 1.5rem;
        }
    </style>
  </body>
</html>
`;

export const flexShrinkFirst = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <div class="box one"><span>One</span></div>
      <div class="box two"><span>Two</span></div>
      <div class="box three"><span>Three</span></div>
    </div>
    <style>
        body {
            height: 80vh;
            display: flex;
            background-color: gray;
        }
        
        .container {
            width: 500px;
            margin: auto;
            border: 1.5px solid black;
            background-color: lightgray;
            display: flex;
        }

        .box {
            display: flex;
            width: 200px;
            height: 60px;
            flex-shrink: 0;
        }

        .box:nth-of-type(1) {
            background-color: orange;
        }

        .box:nth-of-type(2) {
            background-color: aqua;
        }

        .box:nth-of-type(3) {
            background-color: green;
        }

        .box span {
            margin: auto;
            font-size: 1.5rem;
        }
    </style>
  </body>
</html>
`;

export const flexShrinkSecond = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <div class="box one"><span>One</span></div>
      <div class="box two"><span>Two</span></div>
      <div class="box three"><span>Three</span></div>
    </div>
    <style>
        body {
            height: 80vh;
            display: flex;
            background-color: gray;
        }
        
        .container {
            width: 500px;
            margin: auto;
            border: 1.5px solid black;
            background-color: lightgray;
            display: flex;
        }

        .box {
            display: flex;
            width: 200px;
            height: 60px;
        }

        .box:nth-of-type(1) {
            background-color: orange;
        }

        .box:nth-of-type(2) {
            background-color: aqua;
        }

        .box:nth-of-type(3) {
            background-color: green;
            flex-shrink: 2;
        }

        .box span {
            margin: auto;
            font-size: 1.5rem;
        }
    </style>
  </body>
</html>
`;

export const flexShrinkThird = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <div class="box one"><span>One</span></div>
      <div class="box two"><span>Two</span></div>
      <div class="box three"><span>Three</span></div>
    </div>
    <style>
        body {
            height: 80vh;
            display: flex;
            background-color: gray;
        }
        
        .container {
            width: 500px;
            margin: auto;
            border: 1.5px solid black;
            background-color: lightgray;
            display: flex;
        }

        .box {
            display: flex;
            width: 200px;
            height: 60px;
        }

        .box:nth-of-type(1) {
            background-color: orange;
        }

        .box:nth-of-type(2) {
            background-color: aqua;
            flex-shrink: 3;
        }

        .box:nth-of-type(3) {
            background-color: green;
            flex-shrink: 2;
        }

        .box span {
            margin: auto;
            font-size: 1.5rem;
        }
    </style>
  </body>
</html>
`;

export const flexBasisFirst = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <div class="box one"><span>Normal</span></div>
      <div class="box two"><span>Longer little bit</span></div>
      <div class="box three"><span>Even longer little bit</span></div>
    </div>
    <style>
        body {
            height: 80vh;
            display: flex;
            background-color: gray;
        }
        
        .container {
            width: 500px;
            margin: auto;
            border: 1.5px solid black;
            background-color: lightgray;
            display: flex;
        }

        .box {
            display: flex;
            height: 60px;
        }

        .box:nth-of-type(1) {
            background-color: orange;
        }

        .box:nth-of-type(2) {
            background-color: aqua;
        }

        .box:nth-of-type(3) {
            background-color: green;
        }

        .box span {
            margin: auto;
            font-size: 1.5rem;
        }
    </style>
  </body>
</html>
`;

export const flexBasisSecond = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <div class="box one"><span>One</span></div>
      <div class="box two"><span>Two</span></div>
      <div class="box three"><span>Three</span></div>
    </div>
    <style>
        body {
            height: 80vh;
            display: flex;
            background-color: gray;
        }
        
        .container {
            width: 500px;
            margin: auto;
            border: 1.5px solid black;
            background-color: lightgray;
            display: flex;
        }

        .box {
            display: flex;
            height: 60px;
        }

        .box:nth-of-type(1) {
            background-color: orange;
            flex-basis: 50px;
        }

        .box:nth-of-type(2) {
            background-color: aqua;
            flex-basis: 100px;
        }

        .box:nth-of-type(3) {
            background-color: green;
            flex-basis: 150px;
        }

        .box span {
            margin: auto;
            font-size: 1.5rem;
        }
    </style>
  </body>
</html>
`;

export const flexBasisThird = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <div class="box one"><span>One</span></div>
      <div class="box two"><span>Two</span></div>
      <div class="box three"><span>Three</span></div>
    </div>
    <style>
        body {
            height: 80vh;
            display: flex;
            background-color: gray;
        }
        
        .container {
            width: 500px;
            margin: auto;
            border: 1.5px solid black;
            background-color: lightgray;
            display: flex;
        }

        .box {
            display: flex;
            height: 60px;
            width: 200px;
            flex-grow: 1;
        }

        .box:nth-of-type(1) {
            background-color: orange;
            flex-basis: 300px;
        }

        .box:nth-of-type(2) {
            background-color: aqua;
        }

        .box:nth-of-type(3) {
            background-color: green;
        }

        .box span {
            margin: auto;
            font-size: 1.5rem;
        }
    </style>
  </body>
</html>
`;

export const flexBasisFourth = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <div class="box one"><span>1</span></div>
      <div class="box two"><span>Longer</span></div>
      <div class="box three"><span>Even longer</span></div>
    </div>
    <style>
        body {
            height: 80vh;
            display: flex;
            background-color: gray;
        }
        
        .container {
            width: 500px;
            margin: auto;
            border: 1.5px solid black;
            background-color: lightgray;
            display: flex;
        }

        .box {
            display: flex;
            height: 60px;
            flex-grow: 1;
        }

        .box:nth-of-type(1) {
            background-color: orange;
        }

        .box:nth-of-type(2) {
            background-color: aqua;
        }

        .box:nth-of-type(3) {
            background-color: green;
        }

        .box span {
            margin: auto;
            font-size: 1.5rem;
        }
    </style>
  </body>
</html>
`;

export const flexBasisFifth = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <div class="box one"><span>1</span></div>
      <div class="box two"><span>Longer</span></div>
      <div class="box three"><span>Even longer</span></div>
    </div>
    <style>
        body {
            height: 80vh;
            display: flex;
            background-color: gray;
        }
        
        .container {
            width: 500px;
            margin: auto;
            border: 1.5px solid black;
            background-color: lightgray;
            display: flex;
        }

        .box {
            display: flex;
            height: 60px;
            flex-grow: 1;
            flex-basis: 0;
        }

        .box:nth-of-type(1) {
            background-color: orange;
        }

        .box:nth-of-type(2) {
            background-color: aqua;
        }

        .box:nth-of-type(3) {
            background-color: green;
        }

        .box span {
            margin: auto;
            font-size: 1.5rem;
        }
    </style>
  </body>
</html>
`;

// Sandbox components
function SInitial() {
  return (
    <Sandpack
      files={{
        "index.html": {
          code: initial,
        },
      }}
      theme="dark"
      customSetup={{ entry: "/index.html" }}
      options={sandboxOptions}
    />
  );
}

function SFlexGrowFirst() {
  return (
    <Sandpack
      files={{
        "index.html": {
          code: flexGrowFirst,
        },
      }}
      theme="dark"
      customSetup={{ entry: "/index.html" }}
      options={sandboxOptions}
    />
  );
}

function SFlexGrowSecond() {
  return (
    <Sandpack
      files={{
        "index.html": {
          code: flexGrowSecond,
        },
      }}
      theme="dark"
      customSetup={{ entry: "/index.html" }}
      options={sandboxOptions}
    />
  );
}

function SFlexGrowThird() {
  return (
    <Sandpack
      files={{
        "index.html": {
          code: flexGrowThird,
        },
      }}
      theme="dark"
      customSetup={{ entry: "/index.html" }}
      options={sandboxOptions}
    />
  );
}

function SFlexShrinkInitial() {
  return (
    <Sandpack
      files={{
        "index.html": {
          code: flexShrinkInitial,
        },
      }}
      theme="dark"
      customSetup={{ entry: "/index.html" }}
      options={sandboxOptions}
    />
  );
}

function SFlexShrinkFirst() {
  return (
    <Sandpack
      files={{
        "index.html": {
          code: flexShrinkFirst,
        },
      }}
      theme="dark"
      customSetup={{ entry: "/index.html" }}
      options={sandboxOptions}
    />
  );
}

function SFlexShrinkSecond() {
  return (
    <Sandpack
      files={{
        "index.html": {
          code: flexShrinkSecond,
        },
      }}
      theme="dark"
      customSetup={{ entry: "/index.html" }}
      options={sandboxOptions}
    />
  );
}

function SFlexShrinkThird() {
  return (
    <Sandpack
      files={{
        "index.html": {
          code: flexShrinkThird,
        },
      }}
      theme="dark"
      customSetup={{ entry: "/index.html" }}
      options={sandboxOptions}
    />
  );
}

function SFlexBasisFirst() {
  return (
    <Sandpack
      files={{
        "index.html": {
          code: flexBasisFirst,
        },
      }}
      theme="dark"
      customSetup={{ entry: "/index.html" }}
      options={sandboxOptions}
    />
  );
}

function SFlexBasisSecond() {
  return (
    <Sandpack
      files={{
        "index.html": {
          code: flexBasisSecond,
        },
      }}
      theme="dark"
      customSetup={{ entry: "/index.html" }}
      options={sandboxOptions}
    />
  );
}

function SFlexBasisThird() {
  return (
    <Sandpack
      files={{
        "index.html": {
          code: flexBasisThird,
        },
      }}
      theme="dark"
      customSetup={{ entry: "/index.html" }}
      options={sandboxOptions}
    />
  );
}

function SFlexBasisFourth() {
  return (
    <Sandpack
      files={{
        "index.html": {
          code: flexBasisFourth,
        },
      }}
      theme="dark"
      customSetup={{ entry: "/index.html" }}
      options={sandboxOptions}
    />
  );
}

function SFlexBasisFifth() {
  return (
    <Sandpack
      files={{
        "index.html": {
          code: flexBasisFifth,
        },
      }}
      theme="dark"
      customSetup={{ entry: "/index.html" }}
      options={sandboxOptions}
    />
  );
}

// Sandbox dynamic wrapped components
export const Initial = dynamic(() => Promise.resolve(() => <SInitial />), {
  ssr: false,
});
export const FlexGrowFirst = dynamic(
  () => Promise.resolve(() => <SFlexGrowFirst />),
  { ssr: false }
);
export const FlexGrowSecond = dynamic(
  () => Promise.resolve(() => <SFlexGrowSecond />),
  { ssr: false }
);
export const FlexGrowThird = dynamic(
  () => Promise.resolve(() => <SFlexGrowThird />),
  { ssr: false }
);
export const FlexShrinkInitial = dynamic(
  () => Promise.resolve(() => <SFlexShrinkInitial />),
  { ssr: false }
);
export const FlexShrinkFirst = dynamic(
  () => Promise.resolve(() => <SFlexShrinkFirst />),
  { ssr: false }
);
export const FlexShrinkSecond = dynamic(
  () => Promise.resolve(() => <SFlexShrinkSecond />),
  { ssr: false }
);
export const FlexShrinkThird = dynamic(
  () => Promise.resolve(() => <SFlexShrinkThird />),
  { ssr: false }
);
export const FlexBasisFirst = dynamic(
  () => Promise.resolve(() => <SFlexBasisFirst />),
  { ssr: false }
);
export const FlexBasisSecond = dynamic(
  () => Promise.resolve(() => <SFlexBasisSecond />),
  { ssr: false }
);
export const FlexBasisThird = dynamic(
  () => Promise.resolve(() => <SFlexBasisThird />),
  { ssr: false }
);
export const FlexBasisFourth = dynamic(
  () => Promise.resolve(() => <SFlexBasisFourth />),
  { ssr: false }
);
export const FlexBasisFifth = dynamic(
  () => Promise.resolve(() => <SFlexBasisFifth />),
  { ssr: false }
);
