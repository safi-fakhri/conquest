// var playerList = ["#E94848", "#F58E48", "#ECE23A", "#8E7CC3", "#F08BF0", "#34A853", "#A8FC86", "#4B90FF", "#3CDAE6"];
var playerList = document.getElementById("player-list");
var playerColors = ["#E94848", "#F58E48", "#ECE23A", "#8E7CC3", "#F08BF0", "#34A853", "#A8FC86"];

var areas = [
	{"code": 1, "name":"player1", "color":"#E94848", "hoverColor":"#F2F2F2", "prefectures":[1]},
	{"code": 2, "name":"player1", "color":"#E94848", "hoverColor":"#F2F2F2", "prefectures":[2]},
	{"code": 3, "name":"player1", "color":"#E94848", "hoverColor":"#F2F2F2", "prefectures":[3]},
	{"code": 4, "name":"player1", "color":"#E94848", "hoverColor":"#F2F2F2", "prefectures":[4]},
	{"code": 5, "name":"player2", "color":"#F58E48", "hoverColor":"#F2F2F2", "prefectures":[5]},
	{"code": 6, "name":"player2", "color":"#F58E48", "hoverColor":"#F2F2F2", "prefectures":[6]},
	{"code": 7, "name":"player2", "color":"#F58E48", "hoverColor":"#F2F2F2", "prefectures":[7]},
	{"code": 8, "name":"player2", "color":"#F58E48", "hoverColor":"#F2F2F2", "prefectures":[8]},
	{"code": 9, "name":"player3", "color":"#ECE23A", "hoverColor":"#F2F2F2", "prefectures":[9]},
	{"code": 10, "name":"player3", "color":"#ECE23A", "hoverColor":"#F2F2F2", "prefectures":[10]},
	{"code": 11, "name":"player3", "color":"#ECE23A", "hoverColor":"#F2F2F2", "prefectures":[11]},
	{"code": 12, "name":"player3", "color":"#ECE23A", "hoverColor":"#F2F2F2", "prefectures":[12]},
	{"code": 13, "name":"player4", "color":"#F08BF0", "hoverColor":"#F2F2F2", "prefectures":[13]},
	{"code": 14, "name":"player4", "color":"#F08BF0", "hoverColor":"#F2F2F2", "prefectures":[14]},
	{"code": 15, "name":"player5", "color":"#8E7CC3", "hoverColor":"#F2F2F2", "prefectures":[15]},
	{"code": 16, "name":"player5", "color":"#8E7CC3", "hoverColor":"#F2F2F2", "prefectures":[16]},
	{"code": 17, "name":"player5", "color":"#8E7CC3", "hoverColor":"#F2F2F2", "prefectures":[17]},
	{"code": 18, "name":"player5", "color":"#8E7CC3", "hoverColor":"#F2F2F2", "prefectures":[18]},
	{"code": 19, "name":"player4", "color":"#F08BF0", "hoverColor":"#F2F2F2", "prefectures":[19]},
	{"code": 20, "name":"player4", "color":"#F08BF0", "hoverColor":"#F2F2F2", "prefectures":[20]},
	{"code": 21, "name":"player6", "color":"#34A853", "hoverColor":"#F2F2F2", "prefectures":[21]},
	{"code": 22, "name":"player6", "color":"#34A853", "hoverColor":"#F2F2F2", "prefectures":[22]},
	{"code": 23, "name":"player6", "color":"#34A853", "hoverColor":"#F2F2F2", "prefectures":[23]},
	{"code": 24, "name":"player6", "color":"#34A853", "hoverColor":"#F2F2F2", "prefectures":[24]},
	{"code": 25, "name":"player7", "color":"#A8FC86", "hoverColor":"#F2F2F2", "prefectures":[25]},
	{"code": 26, "name":"player7", "color":"#A8FC86", "hoverColor":"#F2F2F2", "prefectures":[26]},
	{"code": 27, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[27]},
	{"code": 28, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[28]},
	{"code": 29, "name":"player7", "color":"#A8FC86", "hoverColor":"#F2F2F2", "prefectures":[29]},
	{"code": 30, "name":"player7", "color":"#A8FC86", "hoverColor":"#F2F2F2", "prefectures":[30]},
	{"code": 31, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[31]},
	{"code": 32, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[32]},
	{"code": 33, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[33]},
	{"code": 34, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[34]},
	{"code": 35, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[35]},
	{"code": 36, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[36]},
	{"code": 37, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[37]},
	{"code": 38, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[38]},
	{"code": 39, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[39]},
	{"code": 40, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[40]},
	{"code": 41, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[41]},
	{"code": 42, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[42]},
	{"code": 43, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[43]},
	{"code": 44, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[44]},
	{"code": 45, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[45]},
	{"code": 46, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[46]},
	{"code": 47, "name":"player0", "color":"#FFFFFF", "hoverColor":"#F2F2F2", "prefectures":[47]},
];

if (document.readyStates == "loading") {
	document.addEventListener("DOMContentLoaded", ready);
} else {
	ready();
}

function ready() {
	playerColors.forEach((element, index) => {
		var player = document.createElement("div");
		var playerInfo = document.createElement("div");
		var playerCrest = document.createElement("div");
		var crestImg = document.createElement("img");
		
		crestImg.setAttribute("class", "crest-img");
		crestImg.setAttribute("src", "assets/images/crests/Crest" + (index+1) + ".png");
		
		playerCrest.setAttribute("class", "player-crest");
		playerCrest.setAttribute("style", "background: " + element);
		
		playerInfo.setAttribute("class", "player-info");
		playerInfo.innerHTML = "4";
		player.setAttribute("class", "player");
		player.setAttribute("name", "player" + (index + 1));  
		
		playerCrest.appendChild(crestImg);
		player.appendChild(playerCrest);
		player.appendChild(playerInfo);
		playerList.appendChild(player);
	});

	$("#map-container").japanMap({
		areas: areas,
		selection: "prefecture",
		drawsBoxLine: false,
		borderLineColor: "#BFBFBF",
		borderLineWidth: 0.5,
		prefectureNameType: "english",
		movesIslands: true,
		height: 645,
		onHover: function(data) {
			$("#pref-name").html(data.name);
			$("#pref-name").css("background", data.area.color);
		},
		onSelect: function(data) {
			var defender = data.area.name;
			var attacker = document.getElementsByClassName("attacking");
			battle(data, defender.slice(-1), attacker[0].getAttribute("name").slice(-1));
		},
	});
}

// be sure to change back to splash
$(".overlay-screen").click(function() {
	this.classList.remove("visible");
});

$(".player").click(function() {
	var players = document.getElementsByClassName("player");
	Array.from(players).forEach((player) => {
		player.classList.remove("attacking");
	});
	
	this.classList.add("attacking");
});

function battle(prefecture, defender, attacker) {
	console.log("battle");
	document.getElementById("battle").classList.add("visible");
	// if statement to check who wins
	areas[(parseInt(prefecture.code) - 1)] = {"code": prefecture.code, "name": "player" + attacker, "color": playerColors[attacker - 1], "hoverColor": "#F2F2F2", "prefectures": [prefecture.code]};
}

