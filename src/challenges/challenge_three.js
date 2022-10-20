// Topic A: Services 
// Topic D: Behavioral Pattern - Memento 

var Credit = function (type, interestRate, term, financingPercentage) {
    this.type = type;
    this.interestRate = interestRate;
    this.term = term;
    this.financingPercentage = financingPercentage;
}

Credit.prototype = {

    saveState: function () {
        var memento = JSON.stringify(this);
        return memento;
    },

    recover: function (memento) {
        var m = JSON.parse(memento);
        this.type = m.type;
        this.interestRate = m.interestRate;
        this.term = m.term;
        this.financingPercentage = m.financingPercentage;
    }
}

var CareTaker = function () {
    this.mementos = {};

    this.add = function (key, memento) {
        this.mementos[key] = memento;
    },

        this.get = function (key) {
            return this.mementos[key];
        }
}

function run() {

    var credit01 = new Credit("Leasing", 0.6, 5, 60);
    var credit02 = new Credit("FreeInvestmentCredit", 0.96, 20, 70);
    var caretaker = new CareTaker();

    // Save state
    caretaker.add(1, credit01.saveState());
    caretaker.add(2, credit02.saveState());

    // Change the type of credit
    credit01.type = "FreeInvestmentCredit";
    credit02.type = "HomeLoan";

    // Restore original state
    credit01.recover(caretaker.get(1));
    credit02.recover(caretaker.get(2));

    console.log(credit01.type);
    console.log(credit02.type);
}

run();