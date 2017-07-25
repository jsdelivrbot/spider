var player = {
    total: 0,
    clickBao: 0,
    clickValue: 5000,
    clickUpgrade: 25,
    worker1: 0,
    value1: 0,
    upgrade1: 100,
    worker2: 0,
    value2: 0,
    upgrade2: 250,
    worker3: 0,
    value3: 0,
    upgrade3: 1000,
    worker4: 0,
    value4: 0,
    upgrade4: 5000
};

var total = document.getElementById("total");
var totalClickerBao = document.getElementById("totalClickerBao");
var clickerBaoCost = document.getElementById("clickerBaoCost");
var upgrade1 = document.getElementById("upgrade1");
var upgrade2 = document.getElementById("upgrade2");
var upgrade3 = document.getElementById("upgrade3");
var upgrade4 = document.getElementById("upgrade4");
var worker1 = document.getElementById("worker1");
var worker2 = document.getElementById("worker2");
var worker3 = document.getElementById("worker3");
var worker4 = document.getElementById("worker4");


function plusClicker() {
    player.total = player.total + player.clickValue;
    document.getElementById("total").innerHTML = player.total;
}

function econCheck1() {
    if (player.total >= player.clickUpgrade) {
        player.total -= player.clickUpgrade;
        total.innerHTML = player.total;
        upgradeClicker();
    }
}

function econCheck2() {
    if (player.total >= player.upgrade1) {
        player.total -= player.upgrade1;
        total.innerHTML = player.total;
        upgradeWorker1();
    }
}

function econCheck3() {
    if (player.total >= player.upgrade2) {
        player.total -= player.upgrade2;
        total.innerHTML = player.total;
        upgradeWorker2();
    }
}

function econCheck4() {
    if (player.total >= player.upgrade3) {
        player.total -= player.upgrade3;
        total.innerHTML = player.total;
        upgradeWorker3();
    }
}

function econCheck5() {
    if (player.total >= player.upgrade4) {
        player.total -= player.upgrade4;
        total.innerHTML = player.total;
        upgradeWorker4();
    }
}

function upgradeClicker() {
    player.clickBao += 1;
    player.clickValue += 1;
    player.clickUpgrade += 25;
    totalClickerBao.innerHTML = player.clickBao;
    clickerBaoCost.innerHTML = player.clickUpgrade;
}

function upgradeWorker1() {
    player.worker1 += 1;
    player.value1 += 10;
    player.upgrade1 += 100;
    worker1.innerHTML = player.worker1;
    upgrade1.innerHTML = player.upgrade1;
}

function upgradeWorker2() {
    player.worker2 += 1;
    player.value2 += 25;
    player.upgrade2 += 250;
    worker2.innerHTML = player.worker2;
    upgrade2.innerHTML = player.upgrade2;
}

function upgradeWorker3() {
    player.worker3 += 1;
    player.value3 += 100;
    player.upgrade3 += 1000;
    worker3.innerHTML = player.worker3;
    upgrade3.innerHTML = player.upgrade3;
}

function upgradeWorker4() {
    player.worker4 += 1;
    player.value4 += 500;
    player.upgrade4 += 5000;
    worker4.innerHTML = player.worker4;
    upgrade4.innerHTML = player.upgrade4;
}

function increment() {
    if (player.worker1 > 0)
        player.total += player.value1;
    if (player.worker2 > 0)
        player.total += player.value2;
    if (player.worker3 > 0)
        player.total += player.value3;
    if (player.worker4 > 0)
        player.total += player.value4;
    total.innerHTML = player.total;
}

window.onload = function() {
    total.innerHTML = player.total;
    totalClickerBao.innerHTML = player.clickBao;
    clickerBaoCost.innerHTML = player.clickUpgrade;
    worker1.innerHTML = player.worker1;
    worker2.innerHTML = player.worker2;
    worker3.innerHTML = player.worker3;
    worker4.innerHTML = player.worker4;
    upgrade1.innerHTML = player.upgrade1;
    upgrade2.innerHTML = player.upgrade2;
    upgrade3.innerHTML = player.upgrade3;
    upgrade4.innerHTML = player.upgrade4;
}

setInterval(increment, 1000);
