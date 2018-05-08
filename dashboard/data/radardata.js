var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['< 10 menit','10 - 20 menit','20 - 30 menit','> 30 menit'];

//Data
var d = [
		  [
			{axis:"Jumlah penduduk",value:0.384},
			{axis:"Luas wilayah layanan",value:0.170},
			{axis:"Kepadatan penduduk",value:0.439},
			{axis:"Kepadatan fasilitas umum",value:0.556},			
			{axis:"Prosentase pemukiman",value:0.236},
			{axis:"Prosentase persawahan",value:0.347},
			{axis:"Prosentase perkebunan",value:0.258},
			{axis:"Prosentase semak belukar/tegalan",value:0.153}
		  ],[
			{axis:"Jumlah penduduk",value:0.122},
			{axis:"Luas wilayah layanan",value:0.480},
			{axis:"Kepadatan penduduk",value:0.049},
			{axis:"Kepadatan fasilitas umum",value:0.170},			
			{axis:"Prosentase pemukiman",value:0.243},
			{axis:"Prosentase persawahan",value:0.267},
			{axis:"Prosentase perkebunan",value:0.273},
			{axis:"Prosentase semak belukar/tegalan",value:0.212}		
		  ],
		  [
			{axis:"Jumlah penduduk",value:0.381},
			{axis:"Luas wilayah layanan",value:0.244},
			{axis:"Kepadatan penduduk",value:0.305},
			{axis:"Kepadatan fasilitas umum",value:0.118},			
			{axis:"Prosentase pemukiman",value:0.270},
			{axis:"Prosentase persawahan",value:0.208},
			{axis:"Prosentase perkebunan",value:0.242},
			{axis:"Prosentase semak belukar/tegalan",value:0.271}			
		  ],
		 [
			{axis:"Jumlah penduduk",value:0.113},
			{axis:"Luas wilayah layanan",value:0.106},
			{axis:"Kepadatan penduduk",value:0.207},
			{axis:"Kepadatan fasilitas umum",value:0.156},			
			{axis:"Prosentase pemukiman",value:0.250},
			{axis:"Prosentase persawahan",value:0.178},
			{axis:"Prosentase perkebunan",value:0.227},
			{axis:"Prosentase semak belukar/tegalan",value:0.365}			
		  ]			  
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w + 20)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Kelas pelayanan");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w + 30)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w + 50 )
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	