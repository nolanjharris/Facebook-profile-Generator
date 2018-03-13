$(".newProfile").click(function(){
	baconComments();
	userInfo();
	ronSwanson();
	commentingUser(1);
	commentingUser(2);
	randomImages();
	coverPhoto();
});

function userInfo(){
$.getJSON("https://randomuser.me/api/")
	.done(function(data){
		console.log(data);
		var result = data.results[0];
		$('.userName').html(result.name.first + " " + result.name.last)
		$('.profilePic').attr('src', result.picture.large)
		$('#livesCity').html(result.location.city + ", " + result.location.state)
		$('#fromCity').html(result.location.state)
		$('#email').html(result.email)
		$('#twitter').html("@" + result.login.username)
		var dob = result.dob.split(' ');
		$('#dob').html(dob[0])
	})
	.fail(function(){
		console.log('User Info Error!');
	})
};

function coverPhoto(){
	$('#profileBG').css("background-image", "url('https://source.unsplash.com/random/sig=" + Math.random() + "')");

}

function ronSwanson(){
	$.getJSON("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
	.done(function(data){
		console.log(data)
		$('#motto').html(data[0] + " <em>-Ron Swanson</em>")
	})
	.fail(function(){
		console.log('RonSwanson Error!');
	})
};

function commentingUser(x){
	$.getJSON("https://randomuser.me/api/")
	.done(function(data){
		console.log(data);
		$('.user' + x).html(data.results[0].name.first + " " + data.results[0].name.last)
		$('.user' + x + 'pic').attr('src', data.results[0].picture.thumbnail)
	})
	.fail(function(){
		console.log('Commenting User Error!');
	})
};

function baconComments(){
	$.getJSON("https://baconipsum.com/api/?type=meat-and-filler")
	.done(function(data){
		$('#comment1').html(data[0])
		$('#comment2').html(data[1])
		$('#comment3').html(data[2])
		$('#comment4').html(data[3])
		$('#comment5').html(data[4])
		$('#comment6').html(data[1])
	})
	.fail(function(){
		console.log('Bacon Error!');
	})
};

function randomImages(){
	for(var i = 0; i < 12; i++){
	$('#image'+i).attr('src', 'https://source.unsplash.com/random/sig=' + Math.floor(Math.random()*100));		
	}
};




