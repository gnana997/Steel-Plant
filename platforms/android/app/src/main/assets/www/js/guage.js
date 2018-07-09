
var xml = "<Reading><Time>Sun Jun 10 15:27:18 2018</Time><Temp>30.1</Temp><Humidity>38.61</Humidity><CO>10ppm</CO></Reading>",
xmlDOC = $.parseXML(xml),
$xml = $(xmlDOC),
$time = $xml.find("Time"),
$temp = $xml.find("Temp"),
$hum = $xml.find("Humidity"),
$co = $xml.find("CO");

$(document).ready(function () {

    $('#gaugeContainer').jqxLinearGauge({
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
    $('#gaugeContainer').jqxLinearGauge('value', Number($temp.text()));
    var text = document.getElementById("Info");

    text.innerHTML = $time.text()+ " Temp is "+$temp.text() + " Humidity is "+$hum.text() +" Co is "+$co.text()+".";
});
