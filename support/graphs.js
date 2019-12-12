
queue() /*Connecting DataBase for Amazon Charts*/
    .defer(d3.csv, "support/6monthsale.csv")
    .await(makeGraphs);

/*function for inputting data for output*/
function makeGraphs(error, salesMonthly) {
    var ndx = crossfilter(salesMonthly);
    
    /*Turning string Date into Date format*/
    var parseDate = d3.time.format("%d/%m/%y").parse;
    salesMonthly.forEach(function(d) {
        d.Day = parseDate(d.Day);
    });

    show_month_select(ndx);

    show_daily_sales(ndx);

    show_daily_units(ndx);

    show_average_price(ndx);

    show_average_price_unit(ndx);
    
    /*Drop down Menu for choosing Month*/
    function show_month_select(ndx) {
        var dim_select = ndx.dimension(dc.pluck('Month'));
        var group = dim_select.group();


        dc.selectMenu('#month_select')
            .dimension(dim_select)
            .group(group);
    }

    /*Chart for "Turn over Week by Week for last 6 Months"*/
    function show_daily_sales(ndx) {
        var dim_date = ndx.dimension(dc.pluck('Day')); /*xAxis Data*/
        var sales = dim_date.group().reduceSum(dc.pluck('Sales')); /*yAxis Data*/
        
        /*Keep xAxis Date in Order*/
        var minDate = dim_date.bottom(1)[0].Day;
        var maxDate = dim_date.top(1)[0].Day;

        dc.lineChart('#daily_sales')
            .width($('#chartCumulativeDVH').innerWidth()) /*Automatic chart WIDTH adjustment according to screen size*/
            .height($('#chartCumulativeDVH').innerHeight()) /*Automatic chart HEIGHT adjustment according to screen size*/
            /*.width(500)
            .height(300)*/
            .margins({ top: 10, right: 50, bottom: 30, left: 50 })
            .dimension(dim_date)
            .group(sales)
            .brushOn(false)
            .transitionDuration(800)
            .x(d3.time.scale().domain([minDate, maxDate]))
            .colors('#07711f')
            /*.x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)*/
            /*.xAxisLabel('Date')*/
            .yAxisLabel('Weekly Sales (£)')
            .yAxis().ticks(8);
    }

    /*Chart for "Amount of Units Sold every Week"*/
    function show_daily_units(ndx) {
        var dim_date = ndx.dimension(dc.pluck('Day'));
        var units = dim_date.group().reduceSum(dc.pluck('Orders'));

        var minDate = dim_date.bottom(1)[0].Day;
        var maxDate = dim_date.top(1)[0].Day;

        dc.lineChart('#daily_units')
            .width($('#chartCumulativeDVH').innerWidth())
            .height($('#chartCumulativeDVH').innerHeight())
            /*.width(500)
            .height(300)*/
            .margins({ top: 10, right: 50, bottom: 30, left: 50 })
            .dimension(dim_date)
            .group(units)
            .brushOn(true)
            .transitionDuration(800)
            .x(d3.time.scale().domain([minDate, maxDate]))
            .colors('#07711f')
            /*.x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)*/
            /*.xAxisLabel('Date')*/
            .yAxisLabel('Weekly Units')
            .yAxis().ticks(8);
    }
    
    /*Chart for "Average Price of Orders received each Week"*/
    function show_average_price(ndx) {
        var dim_date = ndx.dimension(dc.pluck('Day'));
        var avgPrice = dim_date.group().reduceSum(dc.pluck('Average_Price'));

        var minDate = dim_date.bottom(1)[0].Day;
        var maxDate = dim_date.top(1)[0].Day;

        dc.barChart('#average_price')
            .width($('#chartCumulativeDVH').innerWidth())
            .height($('#chartCumulativeDVH').outerHeight())
            /*.width(500)
            .height(300)*/
            .margins({ top: 10, right: 50, bottom: 30, left: 50 })
            .dimension(dim_date)
            .group(avgPrice)
            .brushOn(true)
            .transitionDuration(800)
            .x(d3.time.scale().domain([minDate, maxDate]))
            .xUnits(function() { return 25; })/*To keep bit of separation gap between to bars*/
            .colors('#07711f')
            /*.x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)*/
            /*.xAxisLabel('Date')*/
            .yAxisLabel('Average Price (£)')
            .yAxis().ticks(8);
    }
    
    /*Chart for "Average Price agaist Orders received every Week"*/
    function show_average_price_unit(ndx) {
        var monthColors = d3.scale.ordinal()
            .domain(['June', 'July', 'August', 'September', 'October', 'November', 'December'])
            .range(['#D81B60', '#FF5722', '#33FF00', '#0000CC', '#D35400', '#2E4053', '#CCFF00']);

        var orderDim = ndx.dimension(dc.pluck('Orders'));
        var average = ndx.dimension(function(d) {
            return [d.Orders, d.Average_per_Order, d.Average_Price, d.Month];
        });
        var average_price = average.group();

        var minOrder = orderDim.bottom(1)[0].Orders;
        var maxOrder = orderDim.top(1)[0].Orders;

        dc.scatterPlot('#average_price_unit')
            .width($('#chartCumulativeDVH').innerWidth())
            .height($('#chartCumulativeDVH').outerHeight())
            /*.width(1000)
            .height(400)*/
            .x(d3.scale.linear().domain([minOrder, maxOrder]))
            .brushOn(false)
            .symbolSize(8)
            .clipPadding(10)
            .yAxisLabel('Average Price (£)')
            .title(function(d) {
                return 'Every ' + d.key[0] + ' orders average price £' + d.key[2];
            })
            .colorAccessor(function(d) {
                return d.key[3];
            })
            .colors(monthColors)
            .xAxisLabel('Orders')
            .dimension(average)
            .group(average_price)
            .legend(dc.legend().x(200).y(20).itemHeight(10).gap(5))
            .margins({ top: 10, right: 50, bottom: 75, left: 75 });
    }

    function show_weekly_offer(ndx) {
        var name_dim = ndx.dimension(dc.pluck('Month'));
        var total_spend_per_person = name_dim.group().reduceSum(dc.pluck('Orders'));
        dc.pieChart('#weekly_offer')
            .height(330)
            .radius(90)
            .transitionDuration(1500)
            .dimension(name_dim)
            .group(total_spend_per_person);
    }

    dc.renderAll();
}






