setTimeout(function(){
	var action=window.location.href.split('.html')[0].split('/')[window.location.href.split('.html')[0].split('/').length-1].toUpperCase()
	var url='https://sugardaddylocal.com/x_track_user.php?mid='+getCookie('mid')+'&action='+action
	console.log(url)
	$.ajax({url:url})
},3000)
			