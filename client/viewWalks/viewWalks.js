Template.viewWalks.helpers ({
	
});

Template.viewWalks.events ({
	'click a': function (e) {
		console.log("click", e.target.dataset.id);
	}
});