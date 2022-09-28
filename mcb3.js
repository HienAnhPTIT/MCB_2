

$(document).ready(function () {
    var data1 = Math.floor(Math.random() * 101);
    var data2 = Math.floor(Math.random() * 101);
    var data3 = Math.floor(Math.random() * 101);
    var data4 = Math.floor(Math.random() * 101);
    var data5 = Math.floor(Math.random() * 101);
    var data6 = Math.floor(Math.random() * 101);
    var data7 = Math.floor(Math.random() * 101);
    var data8 = Math.floor(Math.random() * 101);
    var data9 = Math.floor(Math.random() * 101);
    var data10 = Math.floor(Math.random() * 101);
    var data11 = Math.floor(Math.random() * 101);
    var data12 = Math.floor(Math.random() * 101);


    var x = document.getElementById("nhiet-do").innerHTML = Math.floor(Math.random() * 101);
    
    if (x < 10) {
        // $(".div-nd").css("background-image", "linear-gradient(to right, #217AB7, #169570, #FFD66E)");
        $(".div-nd").css("background-image", "linear-gradient(to right, #52607F, #AAB7C4, #CFD7DF)");

        document.getElementById("nhiet-do").innerHTML=x+'°C';
    } else if (x > 10 && x < 40) {
        // $(".div-nd").css("background-image", "linear-gradient(to right, #E39F48, #FCD669, #FFD66E)");
        $(".div-nd").css("background-image", "linear-gradient(to right, #CE7C3A, #F5BE58, #FCE882)");

        document.getElementById("nhiet-do").innerHTML=x+'°C';
    } else {
        // $(".div-nd").css("background-image", "linear-gradient(to right, #C23D4B, #CE7C3A, #FFD66E)");
        $(".div-nd").css("background-image", "linear-gradient(to right, #C23D4B, #E25950, #FFA27B)");

        document.getElementById("nhiet-do").innerHTML=x+'°C';
        
    }
    // if(x>80){
    //     confirm("Nhiệt độ đang rất cao!");
    // }

    document.getElementById("do-am").innerHTML= data1+'%';

    document.getElementById("anh-sang").innerHTML= Math.floor(Math.random() * 101)+'%';
    
    
    $("#button-on").click(function(){
        if(confirm('Bat den ?')==true){
          $("#div-btna").css("background-color", "#1ED395");
          $('#myImage').attr('src','/imgs/bongdensang.png');
        }
        
        // $('p').slideUp(200).delay(1000).fadeIn(400);
        // $("#div-btna").css("background-color", "#F6A8C7");
    })
    $("#button-off").click(function(){
        if(confirm('Tat den ?')==true){
          $("#div-btna").css("background-color", "#FF414D");
          $('#myImage').attr('src','/imgs/bongdentat.png');
        }

        // $('p').slideUp(200).delay(1000).fadeIn(400);
        // $("#div-btna").css("background-color", "#F6A8C7");
    })
    
    //Bieu-do
    Highcharts.chart('container', {
        chart: {
          zoomType: 'xy'
        },
        title: {
          text: 'Average Hourly Humidity, Temperature and Brightness in PTIT Academy, 2022',
          align: 'left'
        },
        subtitle: {
          text: 'Source: ' +
            '<a href="https://www.yr.no/nb/historikk/graf/5-97251/Norge/Troms%20og%20Finnmark/Karasjok/Karasjok?q=2021"' +
            'target="_blank">YR</a>'
        },
        xAxis: [{
          categories: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00',
            '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
          crosshair: true
        }],
        yAxis: [{ // Primary yAxis
          labels: {
            format: '{value}°C',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          },
          title: {
            text: 'Humidity',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          }
        }, { // Secondary yAxis
          title: {
            text: 'Temperature + Brightness',
            style: {
              color: Highcharts.getOptions().colors[0]
            }
          },
          labels: {
            format: '{value} %',
            style: {
              color: Highcharts.getOptions().colors[0]
            }
          },
          opposite: true
        }],
        tooltip: {
          shared: true
        },
        legend: {
          align: 'left',
          x: 80,
          verticalAlign: 'top',
          y: 80,
          floating: true,
          backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
        },
        series: [{
          name: 'Humidity',
          type: 'column',
          yAxis: 1,
          
          data: [data1, data2, data3, data4, data5, data6, data7, data8, 
            data9, data10, data11, data12],
          tooltip: {
            valueSuffix: ' %'
          }
      
        }, {
          name: 'Temperature',
          type: 'spline',
          // data: [-13.6, -14.9, -5.8, -0.7, 3.1, 13.0, 14.5, 10.8, 5.8,
          //   -0.7, -11.0, -16.4],
          data: [data6, data3, data4, data2, data8, data1, data12, data5, 
            data11, data7, data10, data9],
          tooltip: {
            valueSuffix: '°C'
          }
        }, {
          name: 'Brightness',
          type: 'spline',
          // data: [-13.6, -14.9, -5.8, -0.7, 3.1, 13.0, 14.5, 10.8, 5.8,
          //   -0.7, -11.0, -16.4],
          data: [data2, data10, data6, data9, data7, data4, data3, data11, 
            data1, data5, data12, data8],
          tooltip: {
            valueSuffix: '°C'
          }
        }
      
      ]
      });
    
    

    // $('#nhiet-do').click(function () {
    //     $(".div-nd").css("background-color", "red");
    //     console.log(x);

    // })
})


