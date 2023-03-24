


// let live = new Date();
// let time=live.getHours();
// if(6<=time&&time<12)
// {
	// console.log("morning");
// }
// else if(12<=time&&time<18)
// {
	// console.log("afternoon");
// }
// else{
	// console.log("night");
// }

// let live = new Date();
// let time=live.getMonth();
// if(0<=time&&time<4)
// {
	// console.log("fall");
// }
// else if(4<=time&&time<8)
// {
	// console.log("summer");
// }
// else{
	// console.log("winter");
// }


// let live = parseInt(prompt("enter the month"));
// var actual= new Date();
// actual.setMonth(live);
// var time=actual.getMonth();
// if(0<=time&&time<4)
// {
	// console.log("fall");
// }
// else if(4<=time&&time<8)
// {
	// console.log("summer");
// }
// else{
	// console.log("winter");
// }




// let live= parseInt(prompt("enter the time"));
// var actual= new Date();
// actual.setHours(live);
// var time=actual.getHours();
// if(6<=time&&time<12)
// {
	// console.log("morning");
// }
// else if(12<=time&&time<18)
// {
	// console.log("afternoon");
// }
// else{
	// console.log("night");
// }



var library = [ { author: 'Bill Gates',
					title: 'The Road Ahead', 
					readingStatus: true },
					
					{ author: 'Steve Jobs',
					title: 'Walter Isaacson', 
					readingStatus: true },
					
					{ author: 'Suzanne Collins',
					title: 'Mockingjay: The Final Book of The Hunger Games', 
					readingStatus: false }];

library.filter(function(value)
{
	if(value.readingStatus===true){
		console.log(`Already read ${value.author} by ${value.title}`)
	}
	else {
	console.log(`You still need to read ${value.title} by ${value.author}`)
	}
})

