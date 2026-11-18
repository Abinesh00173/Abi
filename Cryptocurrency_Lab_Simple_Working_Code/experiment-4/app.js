
console.log("Asset Transfer Application Started");

// Create an asset
let asset = {
    ID: "asset7",
    Color: "red",
    Size: 30,
    Owner: "Alice",
    AppraisedValue: 1000
};

console.log("\nAsset Created Successfully");

// Display asset details
console.log("\nBefore Transfer:");
console.log(JSON.stringify(asset, null, 4));

// Transfer ownership
asset.Owner = "Bob";

console.log("\nAsset Ownership Transferred Successfully");

// Display updated asset
console.log("\nAfter Transfer:");
console.log(JSON.stringify(asset, null, 4));

console.log("\nAsset Transfer Completed Successfully");
