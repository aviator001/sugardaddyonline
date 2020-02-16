setTimeout(function(){
	var xp=window.location.href.toUpperCase()
	var arr=['HOME','SETTINGS','PROFILEBROWSE','INBOX','SENDMESSAGE','MEMBER_WISHLIST','SEARCH','ALBUMS','FRAME_WISH','CHECKOUT','LOGOUT']
	var arrDesc=['HOME','SETTINGS','PROFILEBROWSE','INBOX','SENDMESSAGE','MEMBER_WISHLIST','SEARCH','ALBUMS','FRAME_WISH','CHECKOUT','LOGOUT']
	var i
	for (var i=0;i<arr.length-1;i++) {
		if (xp.indexOf(arr[i])>=0) action=arrDesc[i]
	}
	var url='https://sugardaddylocal.com/x_track_user.php?mid='+getCookie('mid')+'&action='+action.toLowerCase()
	console.log(url)
	$.ajax({url:url})
},100)
			