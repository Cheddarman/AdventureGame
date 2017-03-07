function adventure() {
	var direction = prompt("You find yourself at a crossroads in an enless plane.\nA pale gentleman dressed in a, long, faded black coat stands in the center of the intersection. He addresses you, \"There you are. You\'re a bit late, but no matter. Tell me, which direction will you go?\nWill you go \"forward\", to your \"left\", or to your \"right\"?\"")

	goADirection(direction)

	function goADirection(direction){
		if (direction == "right") {
				var rightPath = prompt("As you begin moving toward the road leading to the right, the gentleman raises and eyebrow and remarks, \"Really? Now that IS a suprise.\" \n\nYou continue down the road for several minutes until the terrain becomes rocky, and on either side shear cliffs rise as the road cuts though a mountian. you turn a corner into a open depression, and are assulted by the smell of brimstone. Entering the depression you are startled to see a massive winged lizard raising it's head to make eye contact with you.\n\nYou have stumbled upon a dragon in it's lair. Do you \"fight\", \"hide\" or \"flee\"?")
				wentRight(rightPath)
		} else if (direction == "forward"){
				var forwardPath = prompt("You go forward. There is a house with a front door, side door, and a cellar. \"front\", \"side\", or \"cellar\".")
				wentForward(forwardPath)
		} else if (direction == "left"){
				var leftPath = prompt("You go left. You find a swamp. How do you cross? \"Tree\", \"water\", or \"go around\".")
				wentLeft(leftPath)
		} else if (direction == "back"){
			alert("You decide that you'll have nothing to do this creepy guy and his \"Choice\". You don\'t know how you got here, but you figure if you turn around and walk back you\'ll find out. As you turn to go, the manOh, no no no no.\nThat won\'t do at all. None of us can ever go back. I\'ll have to decide for you I suppose then.\"\n\nYour last sight before the darkness engulfs you is of the gentleman striding toward you muttering something unintelligible under his breath.")
		} else { 
			alert("You must choose \"forward\", \"left\", or \"right\".")
		}
	}

	

	function wentRight(dragon){
		if (dragon == "fight") {
			alert("You will not be stopped by this obvious hallucination, immediatly grab a large nearby rock and charge shouting at the the giant lizard. The creature seems shocked at your audacity. You are rewarded with the rare experience of hearing all of your bones shatter at once under the weight of the dragons paw.")
		} else if (dragon == "hide") {
			var hidden = prompt("You quickly dive for a rocky outcropping just as the beast spews for a great gout of flame, scorching you slightly, but otherwise missing you. It sniffs around for a bit, and seeming to be satisfied that you have been incinerated takes flight. After several fearful moments you poke your head out to see that the bulk of the dragon had concealed the entrance to a cave.\n\nDo you \"enter\", or \"turn back\"?")
			hidFromDragon(hidden)
		} else if (dragon == "flee") {
			alert("You turn to run back into the gap between the cliffs and hear a great rushing sound behind you. There is no time to scream. There is only fire.")
		} else {
			alert("You must choose to \"fight\", \"hide\", or \"flee\".")
		} 
	}

	

	function hidFromDragon(cave) {
		if (cave == "enter") {
			alert("After a moments hesitation you tentatively enter the cave. As you decend into it\'s depths you find that it is deeper than you first suspected. The sounds of the outside world begin to fade, and the tunnel levels off. You round a final turn to discover a massive treasure hoard. Near the closest edge, on top of a mound of gold coins sits the pale gentleman, this time dressed in a dark button up shirt, slacks, and vest. He begins \"Marvelous, I didn't think you had it in you.\" He then sweeps his hand in the direction of the treasure trove. \"You may have surmised this by now but none of this is real in any sense you are used to. You see this is what you may refer to as purgatory. A testing ground for the worthy to be given new options in their next life. You have succeeded in showing prudence in the face of great risk so you shall have great responsibility. Now close your eyes and take a deep breath.\" As you breath in you feel presure build behind your eyes. It continues to build as you breath out accompanied by a light that builds toward blindness until...\n\nCongragulations you've found a good ending.")
		} else {
			alert("You do not enter the cave. Wandering around the barren landscape you find nothing to sustain youself and eventualy starve to death.\n\nYou have died.")
		}
	}
	function wentLeft(swamp){
		if (swamp == "tree") {
			var climbATree = prompt("You climb a tree, find a path through the canopy to the otherside of the swamp. you find a city in the trees. do you try to \"sneak\" in, or \"annouce\" yourself?")
			throughTheTrees(climbATree)
		} else if (swamp == "water") {
			alert("Eaten by a crocodile")
		} else if (swamp == "go around") {
			alert("Drown in quicksand")
		} else {
			alert("you must choose tree, water, or go around")
		}
	}
	function throughTheTrees(city) {
		if (city == "sneak") {
			alert("You got caught, and are executed.")
		} else if (city == "announce"){
			alert("The gentleman greets you and explaines that due to your tact you will have great Charisma in your next life.")
		} else {
			alert("Come on man, I put quotes around the words you use. Try again.")
		}
	}
	function wentForward(house) {
		if (house == "front") {
			alert("Trap door! Fall to your doom.")
		} else if (house == "side") {
			var sideDoor = prompt("You enter a kitchen with a cooked chicken ready to serve on the counter. you realize how hungry you are. An old womans voice comes from the next room asking you to bring the food. Do you \"serve\", or \"eat\" the chicken?")
			serveTheChicken(sideDoor)
		} else if (house == "cellar") {
			alert("The door slams and locks behind you, then cellar fills with ravenous beattles that eat you alive.")
		} else {
			alert("You must choose the \"front\" door, \"side\" door, or the \"cellar\".")
		}
	}
	function serveTheChicken(kitchen) {
		if (kitchen == "serve") {
			alert("You bring the chicken ito the other room to find the gentleman who tells you that for your compassion you will have love and family with out signifigant sarrow in your next life.")
		} else {
			alert("The chicken explodes into bees that sting you to death.")
		}
	}
}

adventure()