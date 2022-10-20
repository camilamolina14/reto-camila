// Topic A: Services 
// Topic C: Structural Pattern - Flyweight

function Flyweight(type, creditHistory, centralRiskReport) {
    this.type = type;
    this.creditHistory = creditHistory;
    this.centralRiskReport = centralRiskReport;
};

var FlyWeightFactory = (function () {
    var flyweights = {};

    return {

        get: function (type, creditHistory, centralRiskReport) {
            if (!flyweights[type]) {
                flyweights[type] =
                    new Flyweight(type, creditHistory, centralRiskReport);
            }
            return flyweights[type];
        },

        getCount: function () {
            var count = 0;
            for (var f in flyweights) count++;
            return count;
        }
    }
})();

function CreditCollection() {
    var computers = {};
    var count = 0;

    return {
        add: function (type, interestRate, term, financingPercentage, 
                       creditHistory, centralRiskReport, tag) {
            computers[tag] =
                new Credit(type, interestRate, term, financingPercentage, creditHistory, centralRiskReport, tag);
            count++;
        },

        get: function (tag) {
            return computers[tag];
        },

        getCount: function () {
            return count;
        }
    };
}

var Credit = function (type, interestRate, term, financingPercentage, 
                       creditHistory, centralRiskReport, tag) {
    this.flyweight = FlyWeightFactory.get(type, creditHistory, centralRiskReport);
    this.type = type;
    this.interestRate = interestRate;
    this.term = term;
    this.financingPercentage = financingPercentage;
    this.tag = tag;
    this.getMake = function () {
        return this.flyweight.make;
    }
}

function run() {
    var credits = new CreditCollection();

    credits.add("Leasing", 0.6, 5, 60, "CreditHistory", "CentralriskReport", "Credit01");
    credits.add("Leasing", 0.9, 15, 80, "CreditHistory", "CentralriskReport", "Credit02");
    credits.add("Leasing", 0.22, 19, 30, "CreditHistory", "CentralriskReport", "Credit03");
    credits.add("Leasing", 0.53, 2, 100, "CreditHistory", "CentralriskReport", "Credit04");
    credits.add("Leasing", 0.8, 8, 70, "CreditHistory", "CentralriskReport", "Credit05");
    credits.add("FreeInvestmentCredit", 0.5, 15, 90, "CreditHistory", "CentralriskReport", "Credit06");
    credits.add("FreeInvestmentCredit", 0.11, 20, 30, "CreditHistory", "CentralriskReport", "Credit07");
    credits.add("HomeLoan", 0.19, 2, 30, "CreditHistory", "CentralriskReport", "Credit08");

    console.log("Credits: " + credits.getCount());
    console.log("Flyweights: " + FlyWeightFactory.getCount());
}

run();