angular.module('app').controller("SearchController", function(){

	var viewModel = this;

	viewModel.showResult = false;

	viewModel.depart = "";

	viewModel.arrive = "";

	viewModel.date = "";

	viewModel.search = function()
	{
		viewModel.trajetCherche = [];
		for(i = 0; i < viewModel.trajets.length; i++)
		{
			var indexDepart = viewModel.trajets[i].depart.indexOf(viewModel.depart);
			var indexArrive = viewModel.trajets[i].arrive.indexOf(viewModel.arrive);
			if((viewModel.depart === "" || indexDepart != -1)
				&& (viewModel.arrive === "" || indexArrive != -1)
				&& (viewModel.date === "" || viewModel.date === viewModel.trajets[i].date))
			{
				viewModel.trajetCherche.push(viewModel.trajets[i]);
			}
		}
		viewModel.showResult = true;
	}

	viewModel.clear = function()
	{
		viewModel.trajetCherche = [];
		viewModel.showResult = false;
		viewModel.arrive = "";
		viewModel.depart = "";
		viewModel.date = "";
	}

	viewModel.save = function()
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
			arrive: 'St Chamond',
			date: '24/05/2015'
		},
		{
			depart: 'St Etienne',
			arrive: 'Clermont-Ferrans',
			date: '24/05/2015'
		},
		{
			depart: 'St Etienne',
			arrive: 'Rive de gier',
			date: '24/05/2015'
		},
		{
			depart: 'St Etienne',
			arrive: 'Rive de gier',
			date: '27/05/2015'
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
