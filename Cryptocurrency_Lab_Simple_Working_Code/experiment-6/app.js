console.log("Car Auction Application Started");

let cars = [];
let auctions = [];
let transactions = [];

// Register Car
function registerCar(id, model, owner) {

    let car = {
        ID: id,
        Model: model,
        Owner: owner,
        Status: "Available"
    };

    cars.push(car);

    console.log("\nCar Registered Successfully");
    console.log(JSON.stringify(car, null, 4));

    transactions.push("Car Registered: " + id);
}

// Create Auction
function createAuction(id, startingPrice) {

    let auction = {
        ID: id,
        StartingPrice: Number(startingPrice),
        HighestBid: Number(startingPrice),
        Winner: "",
        Status: "Open",
        Bids: []
    };

    auctions.push(auction);

    console.log("\nAuction Created Successfully");
    console.log(JSON.stringify(auction, null, 4));

    transactions.push("Auction Created: " + id);
}

// Submit Bid
function submitBid(id, bidder, amount) {

    let auction = auctions.find(a => a.ID === id);

    if (!auction || auction.Status !== "Open") {
        console.log("Auction Not Available");
        return;
    }

    if (amount <= auction.HighestBid) {
        console.log("Bid Must Be Higher Than Current Bid");
        return;
    }

    auction.HighestBid = amount;
    auction.Winner = bidder;

    auction.Bids.push({
        Bidder: bidder,
        Amount: amount
    });

    console.log("\nBid Submitted Successfully");
    transactions.push(bidder + " placed bid: " + amount);
}

// Close Auction
function closeAuction(id) {

    let auction = auctions.find(a => a.ID === id);

    if (!auction) {
        console.log("Auction Not Found");
        return;
    }

    auction.Status = "Closed";

    if (auction.Bids.length === 0) {
        auction.Winner = "No Bids";
    }

    console.log("\nAuction Closed Successfully");
    transactions.push("Auction Closed: " + id);
}

// Query Auction
function queryAuction(id) {

    let auction = auctions.find(a => a.ID === id);

    if (auction) {
        console.log("\nAuction Results:");
        console.log(JSON.stringify(auction, null, 4));
    } else {
        console.log("Auction Not Found");
    }
}

// Display Transaction History
function transactionHistory() {

    console.log("\nTransaction History:");

    transactions.forEach((t, index) => {
        console.log((index + 1) + ". " + t);
    });
}

// Execute Application
registerCar("CAR101", "Honda City", "Seller1");

createAuction("A101", 500000);

submitBid("A101", "Buyer1", 600000);

submitBid("A101", "Buyer2", 700000);

closeAuction("A101");

queryAuction("A101");

transactionHistory();

console.log("\nCar Auction Application Completed");