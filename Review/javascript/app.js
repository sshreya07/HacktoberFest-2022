const persons = [
				{	url:"https://i.pinimg.com/736x/1e/82/aa/1e82aafd8b3411a775d7130b4b2c1d2d.jpg",
					name:"Thor Odinson",
					post:"King Of Asgard",
					comment:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
				},
				{	url:"https://cdnb.artstation.com/p/assets/images/images/017/470/763/large/abhishek-samal-untitled-artwork-6.jpg?1556116542",
					name:"Tony Stark",
					post:"Billionaire Techie",
					comment:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
				},
				{	url:"https://assets-prd.ignimgs.com/2021/03/23/black-widow-button-1616528351974.jpg",
					name:"Natasha Romanoff",
					post:"Super Spy",
					comment:"Ест ад дицит персиус, про те ноструд бонорум волуптариа, воцибус еурипидис ех еам. Ан вивендо медиоцрем ехплицари вим."
				},
				{	url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdbsyfOOH4z4PDLqMmRavTyAjYKwSU2SGA_Q&usqp=CAU",
					name:"Steve Rogers",
					post:"Veternan Hero",
					comment:"The price of freedom is high, it always has been. And it's a price I'm willing to pay. And if I'm the only one, then so be it. But I'm willing to bet I'm not."
				},
				{	url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnYaX595mxvEgO1_5JwOrVbs2TKeGTFVhmQ&usqp=CAU",
					name:"Daredevil",
					post:"A Lawyer",
					comment:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
				},
				{	url:"https://sportshub.cbsistatic.com/i/2021/03/17/31c24870-84af-4060-aa9e-a2db1089b63a/avengers-endgame-hulk-1168809.jpg",
					name:"Bruce Banner",
					post:"Avenging Scientist",
					comment:"Hulk will break metal man open like a tin can. Metal man thinks he is stronger than Hulk. Metalman wrong."
				},
				{	url:"https://img.theweek.in/content/dam/week/news/entertainment/images/2019/4/26/thanos-avengers-infinity.jpg",
					name:"Thanos",
					post:"Destroyer Of Universe",
					comment:"Little one, it’s a simple calculus. This universe is finite, its resources, finite. If life is left unchecked, life will cease to exist. It needs correcting."
				}
				];


var index = 0;
const image = document.getElementById('image');
const name = document.querySelector('h3');
const post = document.querySelector('h4');
const comment = document.querySelector(".comment p");

const surp = document.getElementById("surprise");

surp.addEventListener("click", function(){
	index = Math.floor(7*Math.random());
	image.src = persons[index].url;
	name.textContent = persons[index].name;
	post.textContent = persons[index].post;
	comment.textContent = persons[index].comment;
});

function change(val) {
	index = index + val;
	if(index+val > 6)
		index = (index)%7;
	if(index+val < 0){
		index = 7 + index;
	}

	image.src = persons[index].url;
	name.textContent = persons[index].name;
	post.textContent = persons[index].post;
	comment.textContent = persons[index].comment;

}
// const surp = document.getElementById('surprise');
// surp.addEventListener('hover', function(){
// 	surp.style.color = "#222";
// });