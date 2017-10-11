window.onload = function(){
	
	var btnAdd = document.querySelector("#btnAdd");
	var btnFetch = document.querySelector("#btnFetch");
	var hStatus = document.querySelector("#hStatus");

	var config = {
	    apiKey: "AIzaSyDDcp-v2W9WR-iopOjAWFzaGIynd-vRxi4",
	    authDomain: "fir-demo-f9f81.firebaseapp.com",
	    databaseURL: "https://fir-demo-f9f81.firebaseio.com",
	    projectId: "fir-demo-f9f81",
	    storageBucket: "fir-demo-f9f81.appspot.com",
	    messagingSenderId: "1097382896017"
  	};
  	firebase.initializeApp(config);
  	const db = firebase.firestore();
  	const userCol = db.collection("users_data");
	btnAdd.addEventListener('click',function(){
		userCol.set({
	    	first: "Adam",
	    	last: "Eval",
	    	born: 1815
		})
		.then(function(docRef) {
		    console.log("Document written with ID: ", docRef.id);
		})
		.catch(function(error) {
		    console.error("Error adding document: ", error);
		});
	});

	btnFetch.addEventListener('click', function(){
		userCol.get().then((querySnapshot) => {
			
			if(!querySnapshot.empty){
				var data = querySnapshot.docs[0].data();
				hStatus.innerText = "Status : "+data.first+" : "+ data.last;
			}else{
				hStatus.innerText = "Status : Empty";	
			}
		});
	});
	
}