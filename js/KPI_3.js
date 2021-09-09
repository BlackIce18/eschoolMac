$(document).ready(function () {
    var colors = {
        'darkyellow': '#fddf3b',
        'green': '#37aa50',
        'blue': '#3f59b7',
        'lightblue': '#1881d2',
        'purple': '#c23dd2',
        'gray': '#c5c5c5',
        'menugray': '#eef1f8',
        'red': '#ce1818',
    }

    var customToolTip = $('.lesson__info-block');

    const getOrCreateTooltip = (chart) => {
        var tooltipEl = customToolTip;
        if (!tooltipEl)  { // Создание tooltip если, он не найден
        }

        return tooltipEl;
    };

    function clickHandler(evt) {
        const points = myChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        if (points.length) {
            const firstPoint = points[0];

            allBluePoints(firstPoint.datasetIndex);

            if(!$(customToolTip).hasClass('hide'))
                $(customToolTip).addClass('hide');
            else {
                $(customToolTip).removeClass('hide');
            }
            //Нажатый point
            myChart.data.datasets[firstPoint.datasetIndex].pointBorderColor[firstPoint.index] = colors['green'];

            myChart.update();
        }

        else {
            var dataSets = myChart.data.datasets;
            for(var i = 0; i < dataSets.length; i++) {
                allBluePoints(i);
            }
        }
    }

    function allBluePoints(index) {
        var borderPointsCount = myChart.data.datasets[index].pointBorderColor.length;
        for(var i = 0; i < borderPointsCount; i++) {
            myChart.data.datasets[index].pointBorderColor[i] = colors['blue'];
        }
    }

    const externalTooltipHandler = (context) => {
        // Tooltip Element
        const {chart, tooltip} = context;
        const tooltipEl = getOrCreateTooltip(chart);

        const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;

        if($('.tabs-block').hasClass('hide')) {
            $(tooltipEl).css({
                top: positionY + tooltip.caretY - $(tooltipEl).height() + 84 + 'px',
                left: positionX + tooltip.caretX + 'px'
            }); // + 84 (header + 12px)
        }
        else {
            $(tooltipEl).css({
                top: positionY + tooltip.caretY - $(tooltipEl).height() + 84 + 82 + 'px',
                left: positionX + tooltip.caretX + 'px'
            }); // + 84 (header + 12px) + 82 (tabs+margin-bottom)
        }
    }

    var ctx = $('#myChart');

    $(ctx).on('click',function (evt) {
        $(customToolTip).addClass('hide');

        const points = myChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);


        if (points.length) {
            const firstPoint = points[0];

            var borderPointsCount = myChart.data.datasets[firstPoint.datasetIndex].pointBorderColor.length;

            for(var i = 0; i < borderPointsCount; i++) {
                myChart.data.datasets[firstPoint.datasetIndex].pointBorderColor[i] = colors['blue'];
            }

            myChart.update();
        }
    });

    var ctx2 = $('#myChart2');

    $(ctx2).on('click',function (evt) {
        $(customToolTip).addClass('hide');

        const points = myChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);


        if (points.length) {
            const firstPoint = points[0];

            var borderPointsCount = myChart.data.datasets[firstPoint.datasetIndex].pointBorderColor.length;

            for(var i = 0; i < borderPointsCount; i++) {
                myChart.data.datasets[firstPoint.datasetIndex].pointBorderColor[i] = colors['blue'];
            }

            myChart.update();
        }
    });

    const data = [{}];
    var date = Date.parse('2020-01-01');
    for (var day = 1; day <= 20; day++) {

        date = new Date(date);
        date.setDate(day);
        data.push({
            x: date,
            y: Math.floor(Math.random() * (300 - 0 + 1)) + 0
        });
    }

    const days = [];

    days.push('jun');
    for (var i = 1; i < data.length; i ++) {
        days.push(data[i].x.getDate());
    }
    days.push('jul');


    var myChart = new Chart(ctx, {
        type: 'bar',
        			data: {
                        labels: ['1', '2', '3', '4', '5', '6', 'jul', '7','5','5','5','5','5','5','5','5','5','5','5', '5','5','5','5','5','5','5','5','5','5','5','5'],
                        datasets: [
                            {
                                label: '',
                                data: [null, 20, null, null, null, null, null, 20, 20],
                                backgroundColor: [
                                    colors["green"],colors["darkyellow"],colors["green"],colors["green"],colors["green"],colors["green"],colors["green"],colors["green"],colors["green"]
                                ],
                                borderColor: [
                                    colors["green"]
                                ],
                                pointStyle: ['circle'],
                                pointRadius: 9,
                                pointBackgroundColor: '#ffffff',
                                pointBackgroundColorOpacity: 1,
                                pointBorderColor: [colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'],colors['blue'],colors['blue']],
                                pointBorderWidth: 5,
                                pointHoverBorderWidth: 5,
                                pointHoverRadius: 9,
                                pointHoverBackgroundColor: '#ffffff',
                                fill: false,

                                borderRadius: 2,
                                barPercentage: 0.5,
                                barThickness: 6,
                                maxBarThickness: 3,
                                minBarLength: 3,
                            },
                        ],
                        xAxes: [{
                            type: 'time',
                            barThickness: 3,
                            maxBarThickness: 3,
                            time: {
                                unit: 'day',
                            },

                        }],
                        yAxes: [{
                            min: 0,
                            max: 300,
                            beginAtZero: true,
                        }],
                    },
        options: {
            animation: true,
            // Растяжение по x
            responsive: true,
            maintainAspectRatio: false,
            showScale: false,

            spanGaps: true, // разрешает null значения для пропуска

            events: ['click'], // tooltip только по click

            plugins: {
                legend: {
                    display: false, // надпись обозначающая цвет
                },
                tooltip: {
                    enabled: false,
                    position: 'nearest',
                    external: externalTooltipHandler,
                }
            },
            //Default: false; if true, this would round all corners of final box;
            fullCornerRadius: false,
            //Default: false; if true, this rounds each box in the stack instead of only final box;
            stackedRounded: false,
            elements: {
                point: {
                    radius: 25,
                    hoverRadius: 35,
                    pointStyle: 'rectRounded',

                }
            },
            scales: {
                x: {
                    ticks: {
                        fontSize: 12,
                        fontWeight: 300,
                        color: colors['gray'],
                        display: true,
                        beginAtZero: true
                    },
                    stacked: true,
                    grid: {
                        display: false,

                    },
                },
                y: {
                    ticks: {
                        fontSize: 12,
                        fontWeight: 300,
                        color: colors['gray'],
                        display: false,
                        stepSize: 30,
                        beginAtZero: true
                    },
                    min: 0,
                    max: 20,
                    beginAtZero: true,
                    stacked: true,
                    radius: 25,
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                },

            },
            onClick: clickHandler
        }
    });
    var myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', 'jul', '7','5','5','5','5','5','5','5','5','5','5','5', '5','5','5','5','5','5','5','5','5','5','5','5'],
            datasets: [
                {
                    label: '',
                    data: [null, 20, null, null, null, null, null, 20, 20],
                    backgroundColor: [
                        colors["red"],
                    ],
                    borderColor: [
                        colors["red"],
                    ],
                    pointStyle: ['circle'],
                    pointRadius: 9,
                    pointBackgroundColor: '#ffffff',
                    pointBackgroundColorOpacity: 1,
                    pointBorderColor: [colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'],colors['blue'],colors['blue']],
                    pointBorderWidth: 5,
                    pointHoverBorderWidth: 5,
                    pointHoverRadius: 9,
                    pointHoverBackgroundColor: '#ffffff',
                    fill: false,

                    borderRadius: 2,
                    barPercentage: 0.5,
                    barThickness: 6,
                    maxBarThickness: 3,
                    minBarLength: 3,
                },
            ],
            xAxes: [{
                type: 'time',
                barThickness: 3,
                maxBarThickness: 3,
                time: {
                    unit: 'day',
                },

            }],
            yAxes: [{
                min: 0,
                max: 300,
                beginAtZero: true,
            }],
        },
        options: {
            animation: true,
            // Растяжение по x
            responsive: true,
            maintainAspectRatio: false,
            showScale: false,

            spanGaps: true, // разрешает null значения для пропуска

            events: ['click'], // tooltip только по click

            plugins: {
                legend: {
                    display: false, // надпись обозначающая цвет
                },
                tooltip: {
                    enabled: false,
                    position: 'nearest',
                    external: externalTooltipHandler,
                }
            },
            //Default: false; if true, this would round all corners of final box;
            fullCornerRadius: false,
            //Default: false; if true, this rounds each box in the stack instead of only final box;
            stackedRounded: false,
            elements: {
                point: {
                    radius: 25,
                    hoverRadius: 35,
                    pointStyle: 'rectRounded',

                }
            },
            scales: {
                x: {
                    ticks: {
                        fontSize: 12,
                        fontWeight: 300,
                        color: colors['gray'],
                        display: false,
                        beginAtZero: true
                    },
                    stacked: true,
                    grid: {
                        display: false,
                    },
                },
                y: {
                    ticks: {
                        fontSize: 12,
                        fontWeight: 300,
                        color: colors['gray'],
                        display: false,
                        stepSize: 30,
                        beginAtZero: true
                    },
                    min: 0,
                    max: 20,
                    beginAtZero: true,
                    stacked: true,
                    radius: 25,
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                },

            },
            onClick: clickHandler
        }
    });

    $('button.crossButton').on('click',function (e) {
        if((!$(this).is(e.target)  && $(this).has(e.target).length === 0)) {}

        var tabs__item = $(this).parents('.tabs__item');
        var index = $(tabs__item).parent().children().index($(tabs__item));
        RemoveItemFromChart(myChart, index);
        RemoveItemFromChart(myChart2, index);
        tabsColor.splice(index, 1);
        $(this).parents('.tabs__item').remove();
    });

    function RemoveItemFromChart(chart, index) {
        chart.data.datasets.splice(index, 1);
        chart.update();
    }

    function AddNewTab(userImage, name, year) {

        var tabs__item = $('<li class="tabs__item"></li>');

        var item_wrapper = $('<div class="item_wrapper"></div>');

        var user_photo = $('<div class="user_photo"></div>');
        var image = $('<img class="clip-svg image" src='+userImage+' alt="">');
        $(user_photo).append(image);

        var user_name = $('<p class="user_name">'+name+' <span class="year">'+year+'</span></p>');

        var crossButton = $('<button class="crossButton"><svg class="icon_cross" viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg"> <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"></path></svg></button>');

        $(item_wrapper).append(user_photo);
        $(item_wrapper).append(user_name);
        $(item_wrapper).append(crossButton);

        $(tabs__item).append(item_wrapper);

        $('.tabs-block > .tabs').append(tabs__item);
    }

    function RemoveAllTabs() {
        $('.tabs-block.users > .tabs').empty();
    }

    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.push(data);
        chart.update();
    }

    function clearChart(chart) {
        chart.data.datasets.forEach((dataset) => {
            delete dataset.data;
        });
        chart.update();
    }

    function AddNewDataSet(data, borderColor, backgroundColor = ['rgba(255, 255, 255, 1)']) {
        // В поступающие данные (data количество элементов, должно быть равно максимальному числу элементов на графике)
        //data = [1,1,1,1,1,50,50,50,50,50];

        //цвет рамки в массиве
        //borderColor = ['#ff0000'];

        addData(myChart, "",
            {
                label: '',
                data: data,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                pointStyle: ['circle'],
                borderWidth: 2,
                pointRadius: 9,
                pointBackgroundColor: '#ffffff',
                pointBackgroundColorOpacity: 1,
                pointBorderColor: [colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'],colors['blue'],colors['blue']],
                pointBorderWidth: 5,
                pointHoverBorderWidth: 5,
                pointHoverRadius: 9,
                pointHoverBackgroundColor: '#ffffff',
                fill: false,
            }
        );
    }

    function AddBorderToTab(index, newColor) {
        $($('.tabs-block > .tabs > .tabs__item')[index]).css({"border":"1px solid "+newColor});
    }

    const tabsColor = [];

    (function() { // Добавление цветных рамок для табов
        var borderColor;
        for(var i = 0; i < myChart.data.datasets.length; i++) {
            borderColor = myChart.data.datasets[i].borderColor[0];
            AddBorderToTab(i, borderColor);
            tabsColor.push(borderColor);
        }
    })();

    function AddGrayBorderToTabs() { // добавление серых рамок для табов
        for(var i = 0; i < myChart.data.datasets.length; i++) {
            AddBorderToTab(i, colors['menugray']);
        }
    }

    function setColorPointsAndLine(newColorPoint, newColorLine) {
        for(var i = 0; i < myChart.data.datasets.length; i++) {
            var borderPointsCount = myChart.data.datasets[i].pointBorderColor.length;

            for(var j = 0; j < borderPointsCount; j++) {
                myChart.data.datasets[i].pointBorderColor[j] = newColorPoint;
                myChart.data.datasets[i].borderColor[j] = newColorLine;
                myChart.data.datasets[i].backgroundColor[j] = newColorLine;
            }
        }
        myChart.update();
    }

    // Установить цвет точек синий и заменить цвет соединяющей линии по индексу
    function setBluePointsAndNewColorLine_byIndex(index, newColor) {
        var borderPointsCount = myChart.data.datasets[index].pointBorderColor.length;

        for(var i = 0; i < borderPointsCount; i++) {
            myChart.data.datasets[index].pointBorderColor[i] = colors['blue'];
            myChart.data.datasets[index].borderColor[i] = newColor;
            myChart.data.datasets[index].backgroundColor[i] = newColor;
        }
        myChart.update();
    }

    $('.tabs__item').on('click',function () {
        AddGrayBorderToTabs();

        $('.tabs__item').removeClass('active');
        $(this).addClass('active');

        var tabIndex = $(this).parent().children().index($(this));
        AddBorderToTab(tabIndex, tabsColor[tabIndex]);
        setColorPointsAndLine(colors['menugray'], colors['menugray']);
        setBluePointsAndNewColorLine_byIndex(tabIndex, tabsColor[tabIndex]);
    });

    // Вернуть цвета при нажатии за пределами табов
    $(document).on('mouseup', function (e){
        var tabs__item = $(".tabs__item");
        if (!tabs__item.is(e.target)  && tabs__item.has(e.target).length === 0) {
            for (var i = 0; i < myChart.data.datasets.length; i++) {
                setBluePointsAndNewColorLine_byIndex(i, tabsColor[i]);
                AddBorderToTab(i, tabsColor[i]);
            }
        }
        $('.tabs__item').removeClass('active');

        $(customToolTip).addClass('hide');
    });
});