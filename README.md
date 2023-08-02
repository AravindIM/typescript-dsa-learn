# TypeScript DSA Learn

This is a fork of the algorithms repository called [kata-machine](https://github.com/ThePrimeagen/kata-machine) made by [ThePrimeagen](https://twitch.tv/ThePrimeagen) to learn DSA in Typescript.
This repository contains the [solutions](./src/day1) I created for the problems he had prepared for learning it.


## Install dependencies

```bash
yarn install
```


## Setup

Create a day (directories for each day of practice, or just generate it once for one directory) of katas:
```bash
yarn generate
```

This will progressively create directories named

```
src/day1
src/day2
...
```

`yarn generate` will also update the `tsconfig.json` and `jest.config` to point
the latest `day` directory via tspaths.  This allows us to avoid updating anything
for testing each day.


## Testing

Test each problem solved by file name:
```bash
npx jest SearchTermForFilenameHere
```

Test everything in one go:
```bash
yarn test
```
