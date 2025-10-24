# About


Unofficial wrapper for Proton's Lumo AI, providing a native Linux desktop experince.

## Disclaimer

This project and its contributors are not affiliated with Proton. This is simply an Electron wrapper that loads the offical Proton Lumo.ai web application.
# Installation

[![Get it from the Snap Store](https://raw.githubusercontent.com/snapcore/snap-store-badges/master/EN/%5BEN%5D-snap-store-white.png)](https://snapcraft.io/proton-lumo-ai)

[![proton-lumo.ai](https://snapcraft.io/proton-lumo-ai/badge.svg)](https://snapcraft.io/proton-lumo-ai)
[![proton-lumo.ai](https://snapcraft.io/proton-lumo-ai/trending.svg?name=0)](https://snapcraft.io/proton-lumo-ai)

## Requirements

You will need to install [npm](https://www.npmjs.com/), the Node.js package manager. On most distributions, the package is simply called `npm`.

## Cloning the source code

Once you have npm, clone the wrapper to a convenient location:

```bash
git clone https://github.com/kenvandine/proton-lumo-ai.git
```

## Building

```bash
npm install
npm start
```

On subsequent runs, `npm start` will be all that's required.

## Updating the source code

Simply pull the latest version of master and install any changed dependencies:

```bash
git checkout main
git pull
npm install
```
