export const sandboxOptions = {
  showNavigator: false,
  showTabs: false,
  wrapContent: true,
  editorWidthPercentage: 0,
};

export const initial = `
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
