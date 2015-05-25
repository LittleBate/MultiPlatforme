angular.module('app').controller("SearchController", function(){

	var viewModel = this;

	viewModel.showResult = false;

	viewModel.depart = "";

	viewModel.arrive = "";

	viewModel.date = "";

	viewModel.search = function()
	{
		viewModel.trajetCherche = viewModel.trajets;
		angular.forEach(viewModel.trajets, function(trajet)
			{
				if(viewModel.depart == "" || viewModel.depart != trajet.depart)
				{
					viewModel.trajetCherche.remove(trajet);
				}
				if(viewModel.arrive == "" || viewModel.arrive != trajet.arrive)
				{
					viewModel.trajetCherche.remove(trajet);
				}
				if(viewModel.date == "" || viewModel.date != trajet.date)
				{
					viewModel.trajetCherche.remove(trajet);
				}
			});
		viewModel.arrive = "";
		viewModel.depart = "";
		viewModel.date = "";
		viewModel.showResult = true;
	}

	viewModel.trajetCherche = [];

	viewModel.trajets = [
		{
			depart: 'Clermont-Ferrand',
			arrive: 'Rive de gier',
			date: '24/05/2015'
		},
		{
			depart: 'Clermont-Ferrand',
			arrive: 'Rive de gier',
			date: '25/05/2015'
		},
		{
			depart: 'Clermont-Ferrand',
			arrive: 'St Chamond',
			date: '24/05/2015'
		},
		{
			depart: 'Clermont-Ferrand',
			arrive: 'St Etienne',
			date: '25/05/2015'
		},
		{
			depart: 'Rive de gier',
			arrive: 'Clermont-Ferrand',
			date: '27/05/2015'
		},
		{
			depart: 'St Chamond',
			arrive: 'Rive de gier',
			date: '25/05/2015'
		},
		{
			depart: 'St Etienne',
			arrive: 'Rive de gier',
			date: '26/05/2015'
		},
		{
			depart: 'St Chamond',
			arrive: 'Clermont-Ferrand',
			date: '27/05/2015'
		},
		{
			depart: 'St Etienne',
			arrive: 'Clermont-Ferrand',
			date: '26/05/2015'
		},
		{
			depart: 'Rive de gier',
			arrive: 'St Etienne',
			date: '24/05/2015'
		},
		{
			depart: 'Rive de gier',
			arrive: 'St Chamond',
			date: '27/05/2015'
		}
	];
});
