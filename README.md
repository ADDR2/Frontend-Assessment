# Frontend Developer Assessment

## Before running

This projects requires some dependencies and they can be installed running the following command:

```
$> npm install
```

This command should be run at the root of the project. If you get some errors and you are on Linux you may try with this one:

```
$> sudo npm install
```

## To run

Run the command:

```
$> npm start
```

or run it manually like this:

```
$> node server.js
```

## To compile

The repository contains the compiled file but in case you want to recompile you will need to install ``webpack v^2.0.0`` globally like this:

```
$> sudo npm install -g webpack
```

Or you can run the local webpack like this:

```
$> ./node_modules/webpack/bin/webpack.js
```

This will generate the ``bundle.js`` file you need to run the project.

## Specifications

This project was written and tested using Node ``v8.1.2`` and requires ES6 syntax support to run.