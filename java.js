class Company {
    constructor(name, popularity, moreFunction) {
        this.name = name;
        this.moreFunction = moreFunction;
        this.popularity = popularity;
    }
    getInfo() {
        return `Банк: ${this.name}, Функцианалдуулугу: ${this.moreFunction}, Таанымалдуулугу: ${this.popularity}`;
    }
}

class firstCompany extends Company {
    constructor(name, popularity, moreFunction, region) {
        super(name, popularity, moreFunction);
        this.region = region;
    }
    getInfo() {
        return `${super.getInfo()}, Аймак: ${this.region}`;
    }
}

class secondCompany extends Company {
    constructor(name, popularity, moreFunction, countries) {
        super(name, popularity, moreFunction);
        this.countries = countries;
    }
    getInfo() {
        return `${super.getInfo()}, Өлкөлөр: ${this.countries}`;
    }
}

class Kyzmatker {
    constructor(name, kyzmaty, salary) {
        this.name = name;
        this.kyzmaty = kyzmaty;
        this.salary = salary;
    }
    getInfo() {
        return `Кызматкер: ${this.name}, Жумушу: ${this.kyzmaty}, Айлыгы: ${this.money}`;
    }
}

class Manager extends Kyzmatker {
    constructor(name, money, department) {
        super(name, "Менеджер", money);
        this.department = department;
    }
    getInfo() {
        return `${super.getInfo()}, Бөлүмү: ${this.department}`;
    }
}

class Cashier extends Kyzmatker {
    constructor(name, salary, filal) {
        super(name, "Кассир", salary);
        this.filal = filal;
    }
    getInfo() {
        return `${super.getInfo()}, Филиал: ${this.filal}`;
    }
}

const firstBank = new firstCompany("mBank", "Жогорку", "Перевод", "Бишкек");
console.log(firstBank);

const internationalBank = new secondCompany("oBank", "Популярдуулугу орто", "Электронный кошелек", "Бишкек");
console.log(internationalBank);

const firstmanager = new Manager("Айжан", 50000, "Кредит берүү");
console.log(firstmanager);

const firstcashier = new Cashier("Кубаныч", 20000, "7 областа филалы бар");
console.log(firstcashier);
