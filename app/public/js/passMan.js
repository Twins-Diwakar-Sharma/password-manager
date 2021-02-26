		  var divId = 0;
		  var foreverOrange = false;
		  var foreverRed = false;
		  var foreverPurple = false;
		 function change(){
			if(divId == 0){
				
				document.getElementById("wasted").style.display = "block";
				document.getElementById("notwasted").style.display = "none";
				document.getElementById("ht").style.background = "radial-gradient(circle at 50% 50%,#460400,#170000)";
				divId = 1;
			}
			else if (divId == 1){
				
				document.getElementById("wasted").style.display = "none";
				document.getElementById("notwasted").style.display = "block";
				document.getElementById("ht").style.background = "radial-gradient(circle at 50% 50%,#014446,#111121)";
				divId = 0;
			}
		 }
		 
		 function upOrange(or)
		 {
			if(or == 1)
			{	
				foreverOrange = true;
                updatePassword();
			}
			else
			{
//				foreverOrange = false;
//				foreverRed = false;
//				foreverPurple = false;
			}

            if(foreverRed == false && foreverPurple == false)
			{
                document.getElementById("redlink").style.border = "2px solid #ff9000";
                document.getElementById("redlink").style.color = "#ff9000";
                document.getElementById("redPass").style.border = "2px solid #ff9000";
                document.getElementById("redPass").style.color = "#ff9000";
            }
		 }
		 
		 function newRed(re)
		 {
			if(re == 1)
			{	
				foreverRed = true;
                newPassword();
			}
			else
			{
//				foreverOrange = false;
//				foreverRed = false;
//				foreverPurple = false;
			}

            if(foreverOrange == false && foreverPurple == false)
			{
			
                document.getElementById("redlink").style.border = "2px solid #ff0000";
                document.getElementById("redlink").style.color = "#ff0000";
                document.getElementById("redPass").style.border = "2px solid #ff0000";
                document.getElementById("redPass").style.color = "#ff0000";
            }
		 }
		 
		 function delPurple(pu)
		 {
			if(pu == 1)
			{	
				foreverPurple = true;
                deletePassword();
			}
			else
			{
//				foreverOrange = false;
//				foreverRed = false;
//				foreverPurple = false;
			}
			if(foreverOrange == false && foreverRed == false)
			{
                document.getElementById("redlink").style.border = "2px solid #ff00f0";
                document.getElementById("redlink").style.color = "#ff00f0";
                document.getElementById("redPass").style.border = "2px solid #ff00f0";
                document.getElementById("redPass").style.color = "#ff00f0";
            }
		 }
		 
		 function defBrown()
		 {
			if(foreverOrange == false && foreverRed == false && foreverPurple == false)
			{
			document.getElementById("redlink").style.border = "1px solid #993220";
			document.getElementById("redlink").style.color = "#ff0000";
			document.getElementById("redPass").style.border = "1px solid #993220";
			document.getElementById("redPass").style.color = "#ff0000";
			}
		 }
		 
		 
          function postFetch(){
            var op = document.getElementById("output");
            var data = document.getElementById("link").value;
            var jsonObj = {msg : data};
            const url = "http://127.0.0.1:5000/get-pass";
            fetch(url, {
                mode: 'cors',
                method: 'post',
                headers: {
                  // "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Content-type":"application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin":"*",  
                },
                body: JSON.stringify(jsonObj)
              })
             .then(res => res.json())
              .then(dat => {
                 op.className = "tronDiv";
                 op.innerHTML = dat.messages;
                 setTimeout(function(){
                      op.className = "tronDivFadded";
                 },3000);
              })
             .catch(error => {
                 op.innerHTML = "fail : " + error;
              });
          }

        
	      function newPassword(){
            var link = document.getElementById("redlink");
            var pass = document.getElementById("redPass");
            var jsonObj = {link : link.value, pass : pass.value};
            const url = "http://127.0.0.1:5000/new-pass";
            fetch(url, {
                mode: 'cors',
                method: 'post',
                headers: {
                  // "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Content-type":"application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin":"*",  
                },
                body: JSON.stringify(jsonObj)
              })
             .then(res => res.json())
              .then(dat => {
                  setTimeout(function(){
                        foreverRed = false;
                          defBrown();
                  },1000);
                
              })
             .catch(error => {
                // pass.innerHTML = "fail : " + error;
              });
          }

	      function updatePassword(){
            var link = document.getElementById("redlink");
            var pass = document.getElementById("redPass");
            var jsonObj = {link : link.value, pass : pass.value};
            const url = "http://127.0.0.1:5000/update-pass";
            fetch(url, {
                mode: 'cors',
                method: 'post',
                headers: {
                  // "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Content-type":"application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin":"*",  
                },
                body: JSON.stringify(jsonObj)
              })
             .then(res => res.json())
              .then(dat => {
                 // pass.innerHTML = "success";
                   setTimeout(function(){
                         foreverOrange = false;
                          defBrown();
                 },1000);
             })
             .catch(error => {
                // pass.innerHTML = "fail : " + error;
              });
          }

	      function deletePassword(){
            var link = document.getElementById("redlink");
            var jsonObj = {link : link.value};
            const url = "http://127.0.0.1:5000/delete-pass";
            fetch(url, {
                mode: 'cors',
                method: 'post',
                headers: {
                  // "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Content-type":"application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin":"*",  
                },
                body: JSON.stringify(jsonObj)
              })
             .then(res => res.json())
              .then(dat => {
                 // pass.innerHTML = "success";
                    setTimeout(function(){
                         foreverPurple = false;
                         defBrown();
                 },1000); 
              })
             .catch(error => {
                // pass.innerHTML = "fail : " + error;
              });
          }


