// Topic A: Services 
// Topic B: Creational Pattern - Prototype

function CreditPrototype(proto) {
    this.proto = proto;

    this.clone = function () {
        var credit = new Credit();

        credit.interestRate = proto.interestRate;
        credit.term = proto.term;
        credit.financingPercentage = proto.financingPercentage;

        return credit;
    };
}

function Credit(interestRate, term, financingPercentage) {

    this.interestRate = interestRate;
    this.term = term;
    this.financingPercentage = financingPercentage;

    this.creditConditions = function () {
        console.log(
            "Credit conditions: Interest Rate: " + this.interestRate + 
            ", Term in years: " + this.term +
            ", Financing Percentage: " + this.financingPercentage
        );
    };
}

function run() {

    var proto = new Credit(0.1, 20, 70);
    var prototype = new CreditPrototype(proto);

    var newCredit = prototype.clone();
    newCredit.creditConditions();
}

run();
