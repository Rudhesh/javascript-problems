function Pokemon (name, health, magic, image){
    this.name = name;
    this.health = {
      maxHealth: health,
      currentHealth: health
    };
    this.magic = {
      maxMagic: magic, 
      currentMagic: magic
    };
    this.image = image;
    this.skills = {}
    this.pokemonSkills = [];
  }
  function AttackSkill (attackName, damage, magicNeeded) {
    this.attackName = attackName;
    this.damage = damage;
    this.magicNeeded = magicNeeded;
  }
  Pokemon.prototype.skillsToArray = function(){
    for(key in this.skills){
      this.pokemonSkills.push(key);
    }
  }
  
  Pokemon.prototype.learnAttackSkill = function (objAttachSkill) {
    //add skill that was used into the pokemon's skill object
    this.skills[objAttachSkill.attackName] = objAttachSkill;
  }
  
  Pokemon.prototype.attack = function (skillKey, pokemon) {
      if(this.magic.currentMagic < this.skills[skillKey].magicNeeded){
          console.log("not enough Magic!!!!");
      }else {
      // debugger;
     
  
          pokemon.health.currentHealth -= this.skills[skillKey].damage;
      if(pokemon.health.currentHealth < 0){
      pokemon.health.currentMagic = 0;
      };
      // for health/magic Movement fucntions
      if(currentPlayer.name[currentPlayer.name.length-1] === "1"){
        var currentPlayerPassthrough = 'One';
        var OtherPlayerPassthrough = 'Two';
      }else{
        var currentPlayerPassthrough = 'Two';
        var OtherPlayerPassthrough = 'One';
      };
      // first perameter must be negative because to lose health otherwise will gain Health
      healthBarMovement(-(this.skills[skillKey].damage), this.health.maxHealth, OtherPlayerPassthrough);
      this.magic.currentMagic -= this.skills[skillKey].magicNeeded
      magicBarMovement(-(this.skills[skillKey].magicNeeded),this.magic.maxMagic,currentPlayerPassthrough)
          console.log(this.name + " launched skill " + skillKey + " successfully!");
          console.log(pokemon.name + " received " + this.skills[skillKey].damage +" damage");
          //pikachu launched skill 'lightning' successfully!
          //bulbasaur got 40 damage
          
      
      }
  };
  
  
  Pokemon.prototype.showStatus = function(){
    console.log(this.name + " status")
    console.log("health: " + this.health);
    console.log("magic: " + this.magic.currentMagic);
  }
  
//   Pokemon.prototype.getMagic = function() {
//     //10% of max magic
//     //current magic can never go above max magic
     
  
//       var addMagic = Math.round(this.magic.maxMagic * .10);
//     if(this.magic.currentMagic + addMagic < this.magic.maxMagic){
//       this.magic.currentMagic += addMagic;
  
//       // for health/magic Movement fucntions
//       if(currentPlayer.name[currentPlayer.name.length-1] === "1"){
//         var currentPlayerPassthrough = 'One';
//       }else{
//         var currentPlayerPassthrough = 'Two';
//       };
//       magicBarMovement(addMagic ,this.magic.maxMagic,currentPlayerPassthrough);
//     }else if(this.magic.currentMagic < this.magic.maxMagic) {  
//       var addMagic = this.magic.maxMagic - this.magic.currentMagic;
//       this.magic.currentMagic = this.magic.maxMagic;
  
//       // for health/magic Movement fucntions
//       if(currentPlayer.name[currentPlayer.name.length-1] === "1"){
//         var currentPlayerPassthrough = 'One';
//       }else{
//         var currentPlayerPassthrough = 'Two';
//       };
//       magicBarMovement(addMagic ,this.magic.maxMagic,currentPlayerPassthrough);
//     };
  
//     console.log("current", this.magic.currentMagic);
//   }

  var pikachu = new Pokemon("pikachu", 120, 80);
var bulbasaur = new Pokemon("bulbasaur", 95, 105);
//Each skill should do a certain amount of damage, and consume a certain amount of magic
//from the Pokemon that used the skill
//Again, these do not have to be real skills - you can make them up
var lightning = new AttackSkill("lightning", 40, 30);
var poisonSeed = new AttackSkill ("poison seed", 20, 20);
pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);
//The first argument to `attack` should be the index (or key) of the attack
// pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
// pikachu.showStatus();
// bulbasaur.showStatus();
// pikachu.attack(0, bulbasaur);
// pikachu.attack(0, bulbasaur);
// pikachu.getMagic();
// pikachu.attack(0, bulbasaur);
// bulbasaur.attack(0, pikachu);
