// === Set up canvas === //

var width = window.innerWidth - 100 //1300,
var height = window.innerHeight - 120 //680;

if (window.innerWidth >= 2000) {
  height = window.innerHeight - 160
}


var scrollTop = 0
var newScrollTop = 0 //scroller.node().scrollTop - 5050 - 301


//Retina function
function getRetinaRatio() {
  var devicePixelRatio = window.devicePixelRatio || 1
  var c = document.createElement('canvas').getContext('2d')
  var backingStoreRatio = [
    c.webkitBackingStorePixelRatio,
    c.mozBackingStorePixelRatio,
    c.msBackingStorePixelRatio,
    c.oBackingStorePixelRatio,
    c.backingStorePixelRatio,
    1
  ].reduce(function(a, b) {
    return a || b
  })

  return devicePixelRatio / backingStoreRatio
}

var ratio = getRetinaRatio()
var scaledWidth = width * ratio
var scaledHeight = height * ratio

//Retina function ende

var data = [];
var value = 5000;

var thisVerfasser = 0
var thisVerfasserSelected = "Fontane, Theodor"

var modus = "distribution"

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

var clickedBook = 0



var marginleft = 42
var marginright = 30

var xOffset = 2

var posY = 120
var posYCanvas = 0
var canvasTop = 310



var chartArea = width - marginleft - marginright
var areaheight = (window.innerHeight - 310)
var pageheight = areaheight / 1674

var buchBreite = 7
var buchBgBreite = 2 + buchBreite

var sLBuchAbstandSelected = 24 //55
var sLBuchBreiteSelected = 20

var sLBuchAbstandUnselected = 4
var sLBuchBreiteUnselected = 3

var xAreaMax = 5

var BuchauswahlFeld = 420
var BuchauswahlFeldSeitenFeld = 600

var unselectedBookBuchlevel = 5
var unselectedBookSeitenlevel = 4

var onSelectionBuchAbstandBL = 6
var onSelectionBuchAbstandSL = 5

var selectedBookBuchlevel = 20
var selectedBookSeitenlevel = 30

var transcripttextwrap = 270


var detailPicHeight = 250
var detailPicWidth = 190

var detailtextwrap = detailPicWidth

var fontsize = 12

var transcriptLinePos = 20

var detailCircleMax = 9

if (window.innerWidth >= 2000) {
  buchBreite = 10
  buchBgBreite = 2 + buchBreite
  fontsize = 16

  posY = 160
  canvasTop = 310
  areaheight = (window.innerHeight - 350)
  height = window.innerHeight - posY
  pageheight = areaheight / 1674

  d3.select("canvas").style("margin-top", canvasTop + "px")
  d3.select("#scrollnavi").style("width", 100 + "px")
  d3.select("#scrollsvg").style("width", 100 + "px")
  d3.select("#header").select("h1").style("margin-top", 8 + "px")

  sLBuchAbstandSelected = 38
  sLBuchBreiteSelected = 35

  sLBuchAbstandUnselected = 6
  sLBuchBreiteUnselected = 5

  BuchauswahlFeld = 520
  BuchauswahlFeldSeitenFeld = 650

  detailPicHeight = 250
  detailPicWidth = 190
  detailtextwrap = detailPicWidth

  unselectedBookBuchlevel = 7
  unselectedBookSeitenlevel = 7
  onSelectionBuchAbstandBL = 9
  onSelectionBuchAbstandSL = 8

  selectedBookBuchlevel = 30
  selectedBookSeitenlevel = 35

  xAreaMax = 8

  transcripttextwrap = 270

  detailCircleMax = 12


} else if (window.innerWidth >= 1800 && window.innerWidth < 2000) {
  posY = 120
  canvasTop = 270
  areaheight = (window.innerHeight - 310)
  height = window.innerHeight - posY
  pageheight = areaheight / 1674

  d3.select("canvas").style("margin-top", canvasTop + "px")
  d3.select("#scrollnavi").style("width", 80 + "px")
  d3.select("#scrollsvg").style("width", 80 + "px")
  d3.select("#header").select("h1").style("margin-top", 17 + "px")


  fontsize = 12
  buchBreite = 8
  buchBgBreite = 2 + buchBreite

  sLBuchAbstandSelected = 24
  sLBuchBreiteSelected = 20

  sLBuchAbstandUnselected = 4
  sLBuchBreiteUnselected = 3

  BuchauswahlFeld = 420
  BuchauswahlFeldSeitenFeld = 600

  detailPicHeight = 250
  detailPicWidth = 190
  detailtextwrap = detailPicWidth

  unselectedBookBuchlevel = 5
  unselectedBookSeitenlevel = 4
  onSelectionBuchAbstandBL = 6
  onSelectionBuchAbstandSL = 5

  selectedBookBuchlevel = 20
  selectedBookSeitenlevel = 30

  xAreaMax = 6.5

  transcripttextwrap = 270
} else if (window.innerWidth < 1800 && window.innerWidth >= 1600) {
  posY = 120
  canvasTop = 270
  areaheight = (window.innerHeight - 310)
  height = window.innerHeight - posY
  pageheight = areaheight / 1674

  d3.select("canvas").style("margin-top", canvasTop + "px")
  d3.select("#scrollnavi").style("width", 80 + "px")
  d3.select("#scrollsvg").style("width", 80 + "px")
  d3.select("#header").select("h1").style("margin-top", 17 + "px")

  fontsize = 12
  buchBreite = 7
  buchBgBreite = 2 + buchBreite

  sLBuchAbstandSelected = 24
  sLBuchBreiteSelected = 20

  sLBuchAbstandUnselected = 4
  sLBuchBreiteUnselected = 3

  BuchauswahlFeld = 420
  BuchauswahlFeldSeitenFeld = 600
  detailPicHeight = 250
  detailPicWidth = 190
  detailtextwrap = detailPicWidth


  unselectedBookBuchlevel = 5
  unselectedBookSeitenlevel = 4
  onSelectionBuchAbstandBL = 6
  onSelectionBuchAbstandSL = 5

  selectedBookBuchlevel = 20
  selectedBookSeitenlevel = 30

  xAreaMax = 5.5

  transcripttextwrap = 270
} else if (window.innerWidth < 1600 && window.innerWidth >= 1400) {
  posY = 120
  canvasTop = 270
  areaheight = (window.innerHeight - 310)
  height = window.innerHeight - posY
  pageheight = areaheight / 1674

  d3.select("canvas").style("margin-top", canvasTop + "px")
  d3.select("#scrollnavi").style("width", 80 + "px")
  d3.select("#scrollsvg").style("width", 80 + "px")
  d3.select("#header").select("h1").style("margin-top", 17 + "px")

  fontsize = 12
  buchBreite = 5
  buchBgBreite = 2 + buchBreite

  sLBuchAbstandSelected = 20
  sLBuchBreiteSelected = 18

  sLBuchAbstandUnselected = 4
  sLBuchBreiteUnselected = 3

  BuchauswahlFeld = 340
  BuchauswahlFeldSeitenFeld = 520
  detailPicHeight = 250
  detailPicWidth = 190
  detailtextwrap = detailPicWidth

  unselectedBookBuchlevel = 4
  unselectedBookSeitenlevel = 3
  onSelectionBuchAbstandBL = 5
  onSelectionBuchAbstandSL = 4

  selectedBookBuchlevel = 12
  selectedBookSeitenlevel = 20

  xAreaMax = 4
  transcripttextwrap = 270
} else if (window.innerWidth < 1400 && window.innerWidth >= 1200) {
  posY = 120
  canvasTop = 270
  areaheight = (window.innerHeight - 310)
  height = window.innerHeight - posY
  pageheight = areaheight / 1674

  d3.select("canvas").style("margin-top", canvasTop + "px")
  d3.select("#scrollnavi").style("width", 80 + "px")
  d3.select("#scrollsvg").style("width", 80 + "px")
  d3.select("#header").select("h1").style("margin-top", 17 + "px")

  fontsize = 12
  mysteryVar = 0
  buchBreite = 4
  buchBgBreite = 2 + buchBreite

  sLBuchAbstandSelected = 16
  sLBuchBreiteSelected = 14

  sLBuchAbstandUnselected = 3
  sLBuchBreiteUnselected = 2

  BuchauswahlFeld = 260
  BuchauswahlFeldSeitenFeld = 440

  detailPicHeight = 200
  detailPicWidth = 152
  detailtextwrap = detailPicWidth

  unselectedBookBuchlevel = 3
  unselectedBookSeitenlevel = 2
  onSelectionBuchAbstandBL = 4
  onSelectionBuchAbstandSL = 3

  selectedBookBuchlevel = 8
  selectedBookSeitenlevel = 16

  xAreaMax = 4

  transcripttextwrap = 260
  transcriptLinePos = 15
} else if (window.innerWidth < 1200 && window.innerWidth >= 1100) {
  posY = 120
  canvasTop = 270
  areaheight = (window.innerHeight - 310)
  height = window.innerHeight - posY
  pageheight = areaheight / 1674

  d3.select("canvas").style("margin-top", canvasTop + "px")
  d3.select("#scrollnavi").style("width", 80 + "px")
  d3.select("#scrollsvg").style("width", 80 + "px")
  d3.select("#header").select("h1").style("margin-top", 17 + "px")

  fontsize = 11
  mysteryVar = 0
  fontsize = 11

  buchBreite = 4
  buchBgBreite = 1 + buchBreite

  sLBuchAbstandSelected = 15
  sLBuchBreiteSelected = 14

  sLBuchAbstandUnselected = 3
  sLBuchBreiteUnselected = 2

  BuchauswahlFeld = 260
  BuchauswahlFeldSeitenFeld = 440
  detailPicHeight = 200
  detailPicWidth = 152
  detailtextwrap = detailPicWidth

  unselectedBookBuchlevel = 3
  unselectedBookSeitenlevel = 2
  onSelectionBuchAbstandBL = 4
  onSelectionBuchAbstandSL = 3

  selectedBookBuchlevel = 8
  selectedBookSeitenlevel = 16

  xAreaMax = 3.5
  transcripttextwrap = 220
  transcriptLinePos = 15
} else if (window.innerWidth < 1100 && window.innerWidth > 900) {
  posY = 90
  canvasTop = 240
  areaheight = (window.innerHeight - 280)
  height = window.innerHeight - posY
  pageheight = areaheight / 1674

  d3.select("canvas").style("margin-top", canvasTop + "px")
  d3.select("#scrollnavi").style("width", 80 + "px")
  d3.select("#scrollsvg").style("width", 80 + "px")
  d3.select("#header").select("h1").style("margin-top", 17 + "px")

  fontsize = 10
  mysteryVar = 0

  buchBreite = 4
  buchBgBreite = 1 + buchBreite

  sLBuchAbstandSelected = 15
  sLBuchBreiteSelected = 14

  sLBuchAbstandUnselected = 2
  sLBuchBreiteUnselected = 2

  BuchauswahlFeld = 250
  BuchauswahlFeldSeitenFeld = 380
  detailPicHeight = 200
  detailPicWidth = 152
  detailtextwrap = detailPicWidth

  unselectedBookBuchlevel = 3
  unselectedBookSeitenlevel = 2
  onSelectionBuchAbstandBL = 3
  onSelectionBuchAbstandSL = 2

  selectedBookBuchlevel = 6
  selectedBookSeitenlevel = 13

  xAreaMax = 2.8
  transcripttextwrap = 200
  transcriptLinePos = 8
} else if (window.innerWidth < 900) {
  posY = 90
  canvasTop = 240
  areaheight = (window.innerHeight - 280)
  height = window.innerHeight - posY
  pageheight = areaheight / 1674

  d3.select("canvas").style("margin-top", canvasTop + "px")
  d3.select("#scrollnavi").style("width", 80 + "px")
  d3.select("#scrollsvg").style("width", 80 + "px")
  d3.select("#header").select("h1").style("margin-top", 17 + "px")

  fontsize = 7
  mysteryVar = 0 //50

  buchBreite = 4
  buchBgBreite = 1 + buchBreite

  sLBuchAbstandSelected = 15
  sLBuchBreiteSelected = 14

  sLBuchAbstandUnselected = 2
  sLBuchBreiteUnselected = 2

  BuchauswahlFeld = 250
  BuchauswahlFeldSeitenFeld = 380
  detailPicHeight = 200
  detailPicWidth = 152
  detailtextwrap = detailPicWidth

  unselectedBookBuchlevel = 3
  unselectedBookSeitenlevel = 2
  onSelectionBuchAbstandBL = 3
  onSelectionBuchAbstandSL = 2

  selectedBookBuchlevel = 6
  selectedBookSeitenlevel = 13

  xAreaMax = 1.8
  transcripttextwrap = 200
  transcriptLinePos = 8
}

d3.select("body").style("font-size", fontsize + "px")


var fontSizeScale = d3.scaleLinear()
  .domain([2, 28])
  .range([0.8, 1.5])
  .clamp(true)

d3.select("#complicationsvg").attr("height", window.innerHeight).attr("width", window.innerWidth - 100)

var filter = null
var eigentumsangabenEntfaltet = false
var markierungenEntfaltet = false
var marginalienEntfaltet = false

var legendSchriftspurY = 15
