# Intermediate Unit Tests

* [Unit and Integration Testing](https://dev.to/leading-edje/unit-and-integration-testing-bco)

## Setup

Please install `nvm` [link here](https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating) and run ...

```script
> nvm install
> nvm use
```

... this is done to ensure the correct version of NodeJS is running and is capable of running the `fetch` command.

Run the following ...

```script
> npm install
```

## Running Unit Tests

```script
> npm test
```

If you have [Jest installed](https://jestjs.io/docs/getting-started#running-from-command-line) globally, you can use ...

```script
> jest
```

## Coverage

```script
> npm run test:coverage
```

... OR, if you have [Jest installed](https://jestjs.io/docs/getting-started#running-from-command-line) globally ...

```script
> jest --coverage
```
