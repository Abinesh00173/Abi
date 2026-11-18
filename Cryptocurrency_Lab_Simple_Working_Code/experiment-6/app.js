
console.log("Car Auction Application Started");

let auction = {
    ID: "A101",
    Car: "Honda City",
    StartingPrice: 500000,
    HighestBid: 500000,
    Winner: "",
    Status: "Open"
};

// Register car and create auction
console.log("\nCar Registered Successfully");
console.log("\nAuction Created Successfully");

// Submit bids
function submitBid(bidder, amount) {
    if (auction.Status === "Open" && amount > auction.HighestBid) {
        auction.HighestBid = amount;
        auction.Winner = bidder;
        console.log(bidder + " placed bid: Rs." + amount);
    } else {
        console.log("Invalid Bid");
    }
}

submitBid("Buyer1", 600000);
submitBid("Buyer2", 700000);

// Close auction
auction.Status = "Closed";

console.log("\nAuction Closed Successfully");

// Display auction results
console.log("\nAuction Results:");
console.log(JSON.stringify(auction, null, 4));

console.log("\nCar Auction Application Completed");
