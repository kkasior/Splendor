window.onload = function () {
    document.getElementById("Players").reset();
};

var GoldCoin={
    ilosc: 5,
    placeholder: document.getElementById('Red')
}

var Coins =[
RedCoin= {
    ilosc: 0,
	placeholder: document.getElementById('Red'),
},
BlueCoin= {
    ilosc: 0,
    placeholder: document.getElementById('Blue'),
},
GreenCoin= {
    ilosc: 0,
    placeholder: document.getElementById('Green'),
},
BrownCoin= {
    ilosc: 0,
    placeholder: document.getElementById('Brown'),
},
WhiteCoin= {
	ilosc: 0,
	placeholder: document.getElementById('White'),
}
];

function SetGoldCoin() {
	var txt = document.getElementById('Gold');
	txt.innerHTML = GoldCoin.ilosc;
}

function SetCoinsForSinglePlayer(){
	for(i=0; i<Coins.length; i++){
		Coins[i].ilosc=4;
		Coins[i].placeholder.innerHTML = Coins[i].ilosc;
	}
}

function SetCoinsForTwoPlayers(){
    for(i=0; i<Coins.length; i++){
        Coins[i].ilosc=4;
        Coins[i].placeholder.innerHTML = Coins[i].ilosc;
    }
}

function SetCoinsForThreePlayers(){
    for(i=0; i<Coins.length; i++){
        Coins[i].ilosc=5;
        Coins[i].placeholder.innerHTML = Coins[i].ilosc;
    }
}

function SetCoinsForFourPlayers(){
    for(i=0; i<Coins.length; i++){
        Coins[i].ilosc=6;
        Coins[i].placeholder.innerHTML = Coins[i].ilosc;
    }
}

function ChoicePlayers(numberOfPlayers) {
    var howManyUsers = document.getElementById(numberOfPlayers);
    variable = howManyUsers.value;
 switch(variable){
	 case "1":
         SetGoldCoin();
         SetCoinsForSinglePlayer();
		 break;
	 case "2":
         SetGoldCoin();
         SetCoinsForTwoPlayers();
		 break;
	 case "3":
         SetGoldCoin();
         SetCoinsForThreePlayers();
	 	 break;
	 case "4":
         SetGoldCoin();
         SetCoinsForFourPlayers();
	 	break;
	 default:

	 	break;

 };
};

function StartGame(){
    document.getElementById('openTag').style.display = "none";
};
function TakeOneCoin(){
   var indeks = Coins.indexOf(CoinColor,0);
   alert(Coins);
}

var CoinColor;

$(function(){
    $('#Blue').click(function (e){
       CoinColor = $(e.currentTarget).attr('id');
       CoinColor += "Coin";
       TakeOneCoin();
    })
})






