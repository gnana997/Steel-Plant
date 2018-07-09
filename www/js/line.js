var xml = "<Reading><Time>Sun Jun 10 15:27:18 2018</Time><Temp>30.1</Temp><Humidity>38.61</Humidity><CO>10ppm"+
"</CO></Reading><Reading><Time>Sun Jun 10 15:27:18 2018</Time><Temp>30.1</Temp><Humidity>38.61</Humidity><CO>10ppm"+
"</CO></Reading><Reading><Time>Sun Jun 10 15:27:18 2018</Time><Temp>30.1</Temp><Humidity>38.61</Humidity><CO>10ppm"+
"</CO></Reading><Reading><Time>Sun Jun 10 15:27:18 2018</Time><Temp>30.1</Temp><Humidity>38.61</Humidity><CO>10ppm"+
"</CO></Reading><Reading><Time>Sun Jun 10 15:27:18 2018</Time><Temp>30.1</Temp><Humidity>38.61</Humidity><CO>10ppm"+
"</CO></Reading><Reading><Time>Sun Jun 10 15:27:18 2018</Time><Temp>30.1</Temp><Humidity>38.61</Humidity><CO>10ppm"+
"</CO></Reading><Reading><Time>Sun Jun 10 15:27:18 2018</Time><Temp>30.1</Temp><Humidity>38.61</Humidity><CO>10ppm"+
"</CO></Reading><Reading><Time>Sun Jun 10 15:27:18 2018</Time><Temp>30.1</Temp><Humidity>38.61</Humidity><CO>10ppm"+
"</CO></Reading><Reading><Time>Sun Jun 10 15:27:18 2018</Time><Temp>30.1</Temp><Humidity>38.61</Humidity><CO>10ppm"+
"</CO></Reading><Reading><Time>Sun Jun 10 15:27:18 2018</Time><Temp>30.1</Temp><Humidity>38.61</Humidity><CO>10ppm</CO></Reading>";

var parser,xmlDoc;
var temp= new Array();
var hum = new Array();
parser = new DOMParser();
xmlDoc = parser.parseFromString(xml,"text/xml");
var temp = xmlDOC.getElementsByTagName('temp')
