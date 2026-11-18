# Cryptocurrency Lab Manual – Simple Working Code (6 Experiments)

These examples are deliberately simplified so they can be executed on a normal Windows laptop using Node.js and VS Code.

## Important scope note
Experiments 2–6 demonstrate blockchain concepts with a local JavaScript ledger. They do **not** deploy a real Hyperledger Fabric network, use Fabric peers/orderers, or provide production-grade consensus, identity, or cryptographic security. This is a practical-friendly simulation of the operations described in the supplied lab manual.

## Requirements
- Windows 10/11
- Node.js LTS (install from https://nodejs.org/)
- Visual Studio Code (optional but recommended)

Check installation in VS Code Terminal:
```powershell
node --version
npm --version
```

No npm packages are required. The programs use only built-in Node.js modules.

## Run an experiment
Open this folder in VS Code. Open Terminal and run, for example:
```powershell
cd experiment-1
node app.js
```
Repeat with `experiment-2` through `experiment-6`.

Each experiment stores any sample ledger data in its own `data` folder. To reset an experiment, stop the program and delete that experiment's `data` folder; it will be recreated on the next run.

## Experiments
1. Installation and Configuration of Blockchain Development Environment – checks Node.js/npm and reports optional tools.
2. Create and Deploy a Blockchain Network Using Hyperledger Fabric Java SDK – local ledger simulation: create/query an asset.
3. Interact with a Blockchain Network Using an Application – Node.js app submits and queries a transaction against the local ledger.
4. Develop and Deploy an Asset Transfer Application Using Blockchain – create, read, update, and transfer an asset.
5. Develop a Blockchain-Based Fitness Club Rewards Tracking Application – register members, add/redeem points, and query balances.
6. Develop a Blockchain-Based Car Auction Network Using Hyperledger Fabric Node SDK – register car, create auction, place bids, close auction, and query result.

## Practical exam note
If your college specifically requires actual Hyperledger Fabric, use the official Fabric test network and Fabric Gateway SDK. These simplified programs are suitable for learning and demonstrating the core logic, but should not be represented as a real Fabric deployment.
