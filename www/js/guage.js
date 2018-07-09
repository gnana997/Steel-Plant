
var xml = "<Reading><Time>Sun Jun 10 15:27:18 2018</Time><Temp>30.1</Temp><Humidity>38.61</Humidity><CO>10ppm</CO></Reading>",
xmlDOC = $.parseXML(xml),
$xml = $(xmlDOC),
$time = $xml.find("Time"),
$temp = $xml.find("Temp"),
$hum = $xml.find("Humidity"),
$co = $xml.find("CO");

$(document).ready(function () {
    $('#gaugeContainer').jqxGauge({
                ranges: [{ startValue: 0, endValue: 55, style: { fill: '#C9C9C9', stroke: '#C9C9C9' }, endWidth: 5, startWidth: 1 },
                            { startValue: 55, endValue: 110, style: { fill: '#FCF06A', stroke: '#FCF06A' }, endWidth: 10, startWidth: 5 },
                            { startValue: 110, endValue: 165, style: { fill: '#FCA76A', stroke: '#FCA76A' }, endWidth: 15, startWidth: 10 },
                            { startValue: 165, endValue: 220, style: { fill: '#FC6A6A', stroke: '#FC6A6A' }, endWidth: 20, startWidth: 15}],
                ticksMinor: { interval: 5, size: '5%' },
                ticksMajor: { interval: 10, size: '9%' },
                value: 0,
                colorScheme: 'scheme03',
                animationDuration: 1200,
                height: 200,
                width: 200
            });
    $('#gaugeContainer').jqxGauge('value', Number($hum.text()));
    $('#linGaugeContainer').jqxLinearGauge({
        max: 70,
        min: 0,
        pointer: { size: '5%' },
        colorScheme: 'scheme02',
        ticksMajor: { size: '10%', interval: 10 },
        ticksMinor: { size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa'} },
        ranges: [
        { startValue: 20, endValue: 45, style: { fill: '#FFA200', stroke: '#FFA200'} },
        { startValue: 45, endValue: 70, style: { fill: '#FF4800', stroke: '#FF4800'}}],
        value: 0
    });
    $('#linGaugeContainer').jqxLinearGauge('value', Number($temp.text()));
    var text = document.getElementById("Info");

    text.innerHTML = $time.text()+ " Temp is "+$temp.text() + " Humidity is "+$hum.text() +" Co is "+$co.text()+".";
});
