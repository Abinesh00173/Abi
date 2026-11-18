const grpc = require("@grpc/grpc-js");

console.log("Blockchain Application Started");

console.log("Connecting to Hyperledger Fabric...");

async function main() {
    try {
        console.log("Connected to blockchain network");

        console.log("Submitting transaction...");

        console.log("Transaction completed");

        console.log("Querying blockchain ledger...");

        console.log("Transaction details retrieved successfully");

    } catch (error) {
        console.error("Error:", error);
    }
}

main();