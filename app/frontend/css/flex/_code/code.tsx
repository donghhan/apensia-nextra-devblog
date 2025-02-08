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
