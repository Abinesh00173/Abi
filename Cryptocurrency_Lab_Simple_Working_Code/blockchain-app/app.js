console.log("Asset Transfer Application Started");

let asset = {
    ID: "asset7",
    Color: "red",
    Size: 30,
    Owner: "Alice",
    AppraisedValue: 1000
};

// Create Asset
console.log("\nAsset Created Successfully");

// Read Asset
console.log("\nBefore Transfer:");
console.log(JSON.stringify(asset, null, 4));

// Update Asset
asset.Color = "blue";
console.log("\nAsset Updated Successfully");

// Transfer Asset Ownership
asset.Owner = "Bob";
console.log("\nAsset Ownership Transferred Successfully");

// Verify Ownership
console.log("\nAfter Transfer:");
console.log(JSON.stringify(asset, null, 4));

console.log("\nAsset Transfer Completed Successfully");