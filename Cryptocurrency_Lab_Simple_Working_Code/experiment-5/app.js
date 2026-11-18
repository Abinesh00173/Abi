console.log("Fitness Club Rewards Application Started");

let members = [];

function registerMember() {
    let id = document.getElementById("memberId").value;
    let name = document.getElementById("memberName").value;

    if (id === "" || name === "") {
        alert("Enter Member ID and Name");
        return;
    }

    let member = {
        ID: id,
        Name: name,
        Points: 0
    };

    members.push(member);

    document.getElementById("result").innerHTML =
        "Member Registered Successfully";
}



function queryMember() {
    let id = document.getElementById("memberId").value;

    let member = members.find(m => m.ID === id);

    if (member) {
        document.getElementById("result").innerHTML =
            "<h3>Member Details</h3>" +
            "<pre>" + JSON.stringify(member, null, 4) + "</pre>";
    } else {
        document.getElementById("result").innerHTML =
            "Member Not Found";
    }
}

console.log("Fitness Club Rewards Application Completed");