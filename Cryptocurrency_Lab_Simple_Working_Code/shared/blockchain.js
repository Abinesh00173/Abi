"use strict";
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const DATA_DIR = path.join(__dirname, "data");
const LEDGER_FILE = path.join(DATA_DIR, "ledger.json");

function ensureLedger() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(LEDGER_FILE)) {
    const genesis = {
      index: 0,
      timestamp: new Date().toISOString(),
      data: { message: "Genesis block" },
      previousHash: "0",
      hash: ""
    };
    genesis.hash = calculateHash(genesis);
    fs.writeFileSync(LEDGER_FILE, JSON.stringify([genesis], null, 2));
  }
}

function calculateHash(block) {
  const content = `${block.index}|${block.timestamp}|${JSON.stringify(block.data)}|${block.previousHash}`;
  return crypto.createHash("sha256").update(content).digest("hex");
}

function readChain() {
  ensureLedger();
  return JSON.parse(fs.readFileSync(LEDGER_FILE, "utf8"));
}

function writeChain(chain) {
  fs.writeFileSync(LEDGER_FILE, JSON.stringify(chain, null, 2));
}

function addBlock(data) {
  const chain = readChain();
  const previous = chain[chain.length - 1];
  const block = {
    index: chain.length,
    timestamp: new Date().toISOString(),
    data,
    previousHash: previous.hash,
    hash: ""
  };
  block.hash = calculateHash(block);
  chain.push(block);
  writeChain(chain);
  return block;
}

function verifyChain() {
  const chain = readChain();
  for (let i = 0; i < chain.length; i++) {
    if (chain[i].hash !== calculateHash(chain[i])) return false;
    if (i > 0 && chain[i].previousHash !== chain[i - 1].hash) return false;
  }
  return true;
}

module.exports = { addBlock, readChain, verifyChain };
