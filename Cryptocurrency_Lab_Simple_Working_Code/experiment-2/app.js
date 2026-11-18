
console.log("Blockchain Network Started");

// Create a blockchain asset
let asset = {
    ID: "asset6",
    Color: "blue",
    Size: 20,
    Owner: "Tom",
    AppraisedValue: 500
};

console.log("\nAsset Created Successfully");

// Display asset details
console.log("\nBlockchain Ledger:");
console.log(JSON.stringify(asset, null, 4));

// Update asset owner
asset.Owner = "Alice";

console.log("\nAsset Ownership Updated");

// Query updated asset
console.log("\nUpdated Asset Details:");
console.log(JSON.stringify(asset, null, 4));

console.log("\nTransaction Completed Successfully");
