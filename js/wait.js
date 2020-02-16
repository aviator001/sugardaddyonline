	var wait_ldr, wait_img, wait_txt
	var  op=1
	function wait_light(txt) {
		wait3(txt,0.8)
	}
	function wait(txt) {
		wait2(txt,0.8)
	}
	function wait3(txt,op) {
		if (!op) op=1
		wait_ldr=document.createElement('div')
		wait_txt=document.createElement('div')
		wait_ldr.id='wait_ldr'
		wait_txt.id='wait_txt'
		wait_ldr.style.cssText='background:#fff;display:none;z-index:99999999999999999;position:fixed;top:0;left:0;right:0;bottom:0;width:70%;height:65px;opacity:1;margin:auto;background:#fff;border-radius:12px;font-family:Open Sans;opacity:0.8'
		wait_txt.style.cssText='display:none;;z-index:999999999999999999;position:fixed;top:50%;opacity:1;left:100px;opacity:1;margin:auto;height:50px;text-align:center;margin-top:-15px'
		wait_txt.innerHTML='<div style="font-size:1.3em" id="loader_txt"><img src="bg/loading.gif">&nbsp;&nbsp;&nbsp;&nbsp<b>Loading, Please Wait...</b></div>'
		document.documentElement.appendChild(wait_ldr)	
		document.documentElement.appendChild(wait_txt)	
		wait_ldr.style.display=''
		wait_txt.style.display=''
	}

	function wait2(txt,op) {
		if (!op) op=0.9
		wait_ldr=document.createElement('div')
		wait_txt=document.createElement('div')
		wait_img=document.createElement('img')
		wait_ldr.id='wait_ldr'
		wait_txt.id='wait_txt'
		wait_img.id='wait_img'
		wait_ldr.style.cssText='display:none;z-index:99999999999999999;position:fixed;top:0;left:0;right:0;bottom:0;opacity:'+op+';margin:auto;background:none;font-family:Open Sans Condensed'
		wait_img.style.cssText='display:none;;z-index:999999999999999999;position:fixed;top:0;left:0;right:0;bottom:0;opacity:1;margin:auto;'
		wait_img.src='js/loading.gif'
		wait_txt.style.cssText='display:none;z-index:999999999999999999;position:fixed;top:0;left:0;right:0;bottom:0;opacity:1;margin:auto;width:100%;height:50px;text-align:center'
		document.documentElement.appendChild(wait_ldr)	
		document.documentElement.appendChild(wait_img)	
		document.documentElement.appendChild(wait_txt)	
		if (!txt) var txt=''
			else {
				wait_txt.innerHTML=''
			}
		wait_ldr.style.display=''
		wait_img.style.display=''
		wait_txt.style.display=''
	}
	function hide() {
		wait_ldr.style.display='none'
		if ($$('wait_img')) wait_img.style.display='none'
		wait_txt.style.display='none'				
		$$('wait_ldr').style.display='none'
		if ($$('wait_img')) $$('wait_img').style.display='none'
		$$('wait_txt').style.display='none'			
	}
	
	function showerror(msg) {
		$.alert({title:'',theme:'supervan',content:'<div style="color:white!Important;width:100%!Important;font-size:16px">'+msg+'</div>', onClose: function () {
				showerror(msg)
			}
		})
	}

	function $$(objID) {
		return document.getElementById(objID)
	}