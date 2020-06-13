
var options = {
	series: [{
		name: 'Approved',
		data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
	}, {
		name: 'Reject',
		data: [56, 45, 59, 33, 78, 57, 56, 45, 59, 33, 78, 57]
	}],
	chart: {
		type: 'bar',
		height: 450,
		stacked: true,
		stackType: '100%',
		toolbar: {
			show: false
		},
		zoom: {
			enabled: false
		}
	},
	dataLabels: {
		enabled: false
	},
	colors: ['#A3CF60', '#DE544F'],

	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '35%',
		},

	},

	xaxis: {
		type: 'month',
		categories: ['Jan', 'Api', 'Sep', 'Nov',
			'Jan', 'Api', 'Sep', 'Nov', 'Jan', 'Api', 'Sep', 'Nov'
		],
	},

	legend: {
		show: true,
		position: 'top',
		horizontalAlign: 'left', 
		markers: {
			width: 18,
			height: 10,
			radius: 5,
		},
		itemMargin: {
			horizontal: 15,
			vertical: 15
		},
	},
	grid: {
		show: true,
		borderColor: '#cecece',
		strokeDashArray: 0.2,
		position: 'back',
		xaxis: {
			lines: {
				show: false
			}
		},

	},



	yaxis: {
		tickAmount: 5,
		labels: {
			show: true,
			align: 'right',
			minWidth: 0,
			maxWidth: 160,
		},
	},

	responsive: [{
		breakpoint: 480,

		options: {
			legend: {
				itemMargin: {
					vertical: 0
				},
			},
			plotOptions: {
				bar: {
					horizontal: true,
					barHeight: '35%',
				},
		
			},
		},
	}],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();



var optionscolumn = {
	series: [{
		data: [21, 85]
	}],
	chart: {
		height: 450,
		type: 'bar',
		events: {
			click: function (chart, w, e) {
				// console.log(chart, w, e)
			}
		},
		toolbar: {
			show: false
		},
	},

	colors: ['#2A80F1', '#F4900E'],
	grid: {
		show: true,
		borderColor: '#cecece',
		strokeDashArray: 0.2,
		position: 'back',
		xaxis: {
			lines: {
				show: false
			}
		},

	},

	plotOptions: {
		bar: {
			columnWidth: '45%',
			distributed: true,
		},
		dataLabels: {
			position: 'top', // top, center, bottom
		},
	},
	dataLabels: {
		enabled: false
	},
	legend: {
		show: false
	},
	xaxis: {
		categories: [
			['Target'],
			['Total Sales'],
		],
		labels: {
			style: {
				fontSize: '12px'
			}
		}
	},
	yaxis: {
		tickAmount: 6,
		labels: {
			show: true,
			align: 'right',
			minWidth: 0,
			maxWidth: 160,
		},
	},
};

var chartcolumn = new ApexCharts(document.querySelector("#chartcolumn"), optionscolumn);
chartcolumn.render();








