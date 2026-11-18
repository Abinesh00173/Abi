const { execSync } = require("node:child_process");

function check(command, versionFlag = "--version") {
  try {
    const output = execSync(`${command} ${versionFlag}`, {
      stdio: ["ignore", "pipe", "pipe"],
      encoding: "utf8"
    }).trim();
    console.log(` [OK] ${command}: ${output.split("\n")[0]}`);
  } catch {
    console.log(` [NOT FOUND] ${command} (optional for this simple JavaScript demo)`);
  }
}

console.log("EXPERIMENT 1: BLOCKCHAIN DEVELOPMENT ENVIRONMENT CHECK");
console.log("----------------------------------------------------");
check("node");
check("npm");
check("docker");
check("java", "-version");
console.log("\nNode.js is the only required tool for running Experiments 2–6.");
console.log("Docker, Java and Hyperledger Fabric are needed only for a real Fabric setup.");
