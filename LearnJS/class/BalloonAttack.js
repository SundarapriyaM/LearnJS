class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
  
    status() {
      console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
    }
  }
  
  
  // Write function below
  const balloonAttack = (player1,player2) => {
     
     player1.balloonCount -= player2.hitsPerMinute * 10;
     player2.balloonCount -= player1.hitsPerMinute * 10;
     
    if(player1.balloonCount > player2.balloonCount){
      player1.status();
      return (`${player1.name} wins`);      
    } else if(player1.balloonCount < player2.balloonCount){
      player2.status();
      return(`${player2.name} wins`);      
    } else {      
      player1.status();
      player2.status();
      return(`${player1.name}, ${player2.name} are tie`);
    }
  }
  
  const p1 = new Player('p1', 5);
  const p2 = new Player('p2', 2);
  
 const result = balloonAttack(p1, p2);
 console.log(result);