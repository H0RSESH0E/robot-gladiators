var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

window.alert("Welcome to Robot Gladiators! " + playerName);

var fight = function() {



var promtFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

console.log(promtFight);

if (promtFight === "FIGHT" || promtFight === "fight" || promtFight === "Fight") {
enemyHealth = enemyHealth - playerAttack

console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );
  
  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
    

    // Substract the value of enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    
    playerHealth = playerHealth -enemyAttack


// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }


    // log a resulting message to the console so we know that it worked.

    console.log("Updated Player Health:" + playerHealth)
}
else if (promtFight === "SKIP" || promtFight === "skip" || promtFight === "Skip") {
    var confirmSkip = window.confirm("Are you a coward?  It will cost you $2 to skip.  Click 'OK' to confirm or 'Cancel' to choose again.");
    if (confirmSkip) {
        window.alert(playerName + "is a coward and is skipping this fight. It's going to cost you $2!");
        playerMoney = playerMoney - 2;
    }
    else {
        fight();
    }
}
else {
    window.alert("You are the only one who can choose!")
}
};

fight();
