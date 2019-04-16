
    if (window.location.hash != "") {
      d3.select("#overlay").style("display", "none")
      d3.select("#start").style("display", "none")
      d3.select(".tippbubble").style("display", "none")
    }else{
      if (localStorage.getItem("isNewSession") !== 'true') {
        d3.select(".tippbubble").style("display", "inline")

         localStorage.setItem('isNewSession', 'true');
    }else{
      d3.select(".tippbubble").style("display", "none")
    }
    }





d3.selectAll("#mehrinfos").on("click", function(){
  d3.select("#overlay").style("display", "block").transition().duration(600).style("opacity", .5)
  d3.select("#start").style("opacity", 0)
  d3.select("#about").style("display", "block").transition().duration(600).style("opacity", 1)

  setTimeout(function () {
    d3.select("#start").style("display", "none")
  }, 800);

})

d3.selectAll("#aboutIcon").on("click", function(){
  d3.select("#overlay").style("display", "block").transition().duration(600).style("opacity", .5)
  d3.select("#about").style("opacity", 0)
  d3.select("#start").style("display", "block").transition().duration(600).style("opacity", 1)
  d3.select(".tippbubble").style("display", "none")
  d3.select(".sharebubble").style("display", "none")

})

d3.selectAll(".about-close, #overlay, #vielspass").on("click", aboutCloseFunction)

function aboutCloseFunction() {
  d3.select("#overlay").transition().duration(600).style("opacity", 0)
  d3.select("#start").transition().duration(600).style("opacity", 0)
    d3.select("#about").transition().duration(600).style("opacity", 0)
    d3.select("#detailview").transition().duration(600).style("opacity", 0)

  setTimeout(function () {
    d3.select("#overlay").style("display", "none")
    d3.select("#start").style("display", "none")
    d3.select("#about").style("display", "none")
    d3.select("#detailview").style("display", "none")
  }, 800);
}



    function shareFunction() {
      /* Get the text field */
      var copyText = document.getElementById("shareInput");
      /* Select the text field */
      copyText.select();

      /* Copy the text inside the text field */
      document.execCommand("copy");

setTimeout(function () {
  d3.select(".sharebubble").style("display", "none")
}, 100);

    }

d3.select("#iconshare").on("click", function(){
  if (d3.select(".sharebubble").style("display") == "inline"){
  d3.select(".sharebubble").style("display", "none")
}else{
    d3.select(".tippbubble").style("display", "none")
    d3.select(".sharebubble").style("display", "inline")
}
})

d3.select("#tippIcon").on("click", function(){
  if (d3.select(".tippbubble").style("display") == "inline"){
  d3.select(".tippbubble").style("display", "none")
}else{
    d3.select(".sharebubble").style("display", "none")
    d3.select(".tippbubble").style("display", "inline")
}
})

d3.selectAll(".zuTipp1").on("click", function(){
    d3.select(".tipp2").style("display", "none")
    d3.select(".tipp1").style("display", "inline")
})

d3.selectAll(".zuTipp2").on("click", function(){
    d3.select(".tipp1").style("display", "none")
    d3.select(".tipp3").style("display", "none")
    d3.select(".tipp2").style("display", "inline")
})

d3.selectAll(".zuTipp3").on("click", function(){
    d3.select(".tipp2").style("display", "none")
    d3.select(".tipp4").style("display", "none")
    d3.select(".tipp3").style("display", "inline")
})

d3.selectAll(".zuTipp4").on("click", function(){
    d3.select(".tipp3").style("display", "none")
    d3.select(".tipp5").style("display", "none")
    d3.select(".tipp4").style("display", "inline")
})

d3.selectAll(".zuTipp5").on("click", function(){
    d3.select(".tipp4").style("display", "none")
    d3.select(".tipp6").style("display", "none")
    d3.select(".tipp5").style("display", "inline")
})

d3.selectAll(".zuTipp6").on("click", function(){
    d3.select(".tipp5").style("display", "none")
    d3.select(".tipp6").style("display", "inline")
})

d3.selectAll(".tippsende").on("click", function(){
d3.select(".tippbubble").style("display", "none")
})


    setTimeout(function() {

      window.scrollTo(0, 3000)


    }, 10);






    var scroller = d3.select('body')

    window.onscroll = function() {

      var scrollTop2 = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)

      newScrollTop = scrollTop2 - 3000




      ////////////////////scrollnavi/
      ////////////////////////////////////////

      var scrollCircleScale = d3.scaleLinear()
        .domain([-3000, 0, 2600])
        .range([firstScrollIcon, secondScrollIcon, thirdScrollIcon - 5])
        .clamp(true)

      d3.selectAll(".scrollCircleFollower")
        .attr("cy", scrollCircleScale(newScrollTop))


    }

    var scrollTop = 0
    var newScrollTop = 0//scroller.node().scrollTop - 5050 - 301

    scroller
      .on("scroll", function() {

        // d3.select('.tooltip')
        //     .style("display", "none")



        var scrollTop2 = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)


        newScrollTop = scrollTop2




        ////////////////////scrollnavi/
        ////////////////////////////////////////3n1kL8T

        d3.selectAll(".scrollCircleFollower")
          .attr("cy", scrollCircleScale(newScrollTop))


        ////////////////////scrollnaviEnde
        ////////////////////////////////////////
      })





    // === Set up canvas === //

    var width = window.innerWidth - 100 //1300,
    var height = window.innerHeight - 120 //680;


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
    var colourScale;

    var thisVerfasser = 0
    var thisVerfasserSelected = "Fontane, Theodor"



    var tooltip = d3.select("body")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "300")
      .style("display", "none")
      .attr("width", 200)
      .attr("class", "tooltip")

    tooltip.append("img").attr("width", 200).attr("height", "auto")



    var svg = d3.select("#svg")
      .style('width', width + 'px')
      .style('height', height + 'px')

    var svgFront = d3.select("#svgFront")
      .style('width', width + 'px')
      .style('height', height + 'px')

    var svgFrontTitles = d3.select("#svgFrontTitles")
      .style('width', width + 'px')
      .style('height', height + 'px')


    var scrollSvg = d3.select("#scrollSvg")

    var firstScrollIcon = 40
    var secondScrollIcon = window.innerHeight / 2
    var thirdScrollIcon = window.innerHeight - 40

    var scrollBgLines = scrollSvg.append("g").attr("transform", "translate(39,-5)")
    var scrollCircles = scrollSvg.append("g").attr("transform", "translate(40,-5)")
    var scrollIcons = scrollSvg.append("g").attr("transform", "translate(0,-18)")
    var scrollLabels = scrollSvg.append("g").attr("transform", "translate(58,-5)")


    scrollBgLines.append("line")
      .attr("x1", 0)
      .attr("x2", 4)
      .attr("y1", firstScrollIcon)
      .attr("y2", thirdScrollIcon)
      .attr("stroke", "white")
      .style("opacity", 0.3)
      .attr("class", "firstScrollLine")

    scrollBgLines.append("line")
      .attr("x1", 22)
      .attr("x2", 18)
      .attr("y1", firstScrollIcon)
      .attr("y2", thirdScrollIcon)
      .attr("stroke", "white")
      .style("opacity", 0.3)
      .attr("class", "secondScrollLine")



    scrollIcons.append("image")
      .attr("xlink:href", "icons/authorlevel.svg")
      .attr("y", firstScrollIcon + 5)
      .attr("x", 10)
      .attr("width", 20)
      .attr("height", 20)
      .style("cursor", "pointer")
      .on("click", function() {
        $("html,body").animate({
          scrollTop: 0
        }, '3000')
      })
      .attr("class", "autorIcon")


    scrollIcons.append("image")
      .attr("xlink:href", "icons/buchlevel.svg")
      .attr("y", secondScrollIcon + 5)
      .attr("x", 10)
      .attr("width", 20)
      .attr("height", 20)
      .style("cursor", "pointer")
      .on("click", function() {
        $("html,body").animate({
          scrollTop: 3000
        }, '3000')
      })
      .attr("class", "buchIcon")




    scrollIcons.append("image")
      .attr("xlink:href", "icons/seitenlevel.svg")
      .attr("y", thirdScrollIcon)
      .attr("x", 10)
      .attr("width", 20)
      .attr("height", 20)
      .style("cursor", "pointer")
      .on("click", function() {
        $("html,body").animate({
          scrollTop: 6000
        }, '3000')
      })
      .attr("class", "seitenIcon")

    scrollCircles.append("circle")
      .attr("r", 11)
      .attr("cx", 10)
      .attr("cy", firstScrollIcon)
      .attr("stroke", "white")
      .attr("fill", "#474747")
      .style("cursor", "pointer")
      .on("click", function() {
        $("html,body").animate({
          scrollTop: 0
        }, '3000')
      })

    scrollCircles.append("circle")
      .attr("r", 9)
      .attr("cx", 10)
      .attr("cy", secondScrollIcon)
      .attr("stroke", "white")
      .attr("fill", "#474747")
      .style("cursor", "pointer")
      .on("click", function() {
        $("html,body").animate({
          scrollTop: 3000
        }, '3000')
      })
      .attr("class", "secondScrollCircle")

    scrollCircles.append("circle")
      .attr("r", 7)
      .attr("cx", 10)
      .attr("cy", thirdScrollIcon - 5)
      .attr("stroke", "white")
      .attr("fill", "#474747")
      .style("cursor", "pointer")
      .on("click", function() {
        $("html,body").animate({
          scrollTop: 6000
        }, '3000')
      })
      .attr("class", "thirdScrollCircle")

    var scrollCircleFollower = scrollCircles.append("circle")
      .attr("r", 5)
      .attr("cx", 10)
      .attr("cy", secondScrollIcon)
      .attr("fill", "white")
      .attr("class", "scrollCircleFollower")
      .attr("cursor", "grab")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    function dragstarted(d) {
      d3.select(this).raise().classed("active", true)
        .attr("cursor", "grabbing")
    }

    function dragged(d) {
      d3.select(this).attr("cy", function() {
        if (d3.event.y < 40) {
          return "40px"
        } else if (d3.event.y > thirdScrollIcon - 5) {
          return thirdScrollIcon - 5
        } else {
          return d3.event.y
        }
      });
      window.scrollTo(0, scrollCircleScaleReverse(d3.event.y))
    }

    function dragended(d) {
      d3.select(this).classed("active", false)
        .attr("cursor", "grab")
    }


    var scrollCircleScaleReverse = d3.scaleLinear()
      .domain([firstScrollIcon, secondScrollIcon, thirdScrollIcon - 5])
      .range([0, 3000, 6000])
      .clamp(true)



    //Real visible canvas
    var canvas = d3.select('#container')
      .append('canvas')
      .attr("id", "canvas")
      .attr('width', scaledWidth)
      .attr('height', scaledHeight)
      .style('width', width + 'px')
      .style('height', height + 'px')
    //	.style("display","none");

    var context = canvas.node().getContext('2d');
    context.scale(ratio, ratio)



    var svgFront = d3.select('body')
      .append("svg")
      .attr("id", "svgFront")
      .style('width', width + 'px')
      .style('height', height + "px")

    var svgFrontTitles = d3.select('body')
      .append("svg")
      .attr("id", "svgFrontTitles")
      .style('width', width + 'px')
      .style('height', height + "px")




    //Create a custom element, that will not be attached to the DOM, to which we can bind the data
    var detachedContainer = document.createElement("custom");
    var dataContainer = d3.select(detachedContainer);


    var transitions = false

    ///Load data
    //  d3.csv("data/data.csv", function(error, dataset) {

    Promise.all([
        d3.csv("data/data_update7.csv"),
        d3.csv("data/korpus.csv"),
      ])
      .then(([dataset, korpus]) => {





        ///////////////////search
        var searchDaten2 = [{
            "text": "Group 1",
            "children": [{
                "id": 1,
                "text": "Option 1.1"
              },
              {
                "id": 2,
                "text": "Option 1.2"
              }
            ]
          },
          {
            "text": "Group 2",
            "children": [{
                "id": 3,
                "text": "Option 2.1"
              },
              {
                "id": 4,
                "text": "Option 2.2"
              }
            ]
          }
        ]

        var searchDatenCreator = dataset.filter(function(d) {
          return d.SchriftspurTranskription != "null" && d.SchriftspurTyp != "P"
        })

        var searchDatenGroups =  d3.nest()
            .key(function(d) { return d.searchCluster; })
            .entries(searchDatenCreator)
          //&  .filter(function(d){return d.values.length > 2})
            .sort(function(a, b) {
              return b.values.length - a.values.length
            })

  var searchDaten = []


searchDatenGroups.forEach(function(D, I) {
  searchDaten.push({
    id: I,
    text: D.key,
    count: D.values.length,
    //children:[]
  })
})



// searchDatenCreator.forEach(function(D, I) {
//   searchDaten.push({
//     text: D.key,
//     count: D.values.length,
//     children:[]
//   })
// })





        // var searchDaten = []
        // searchDatenCreator.forEach(function(D, I) {
        //   searchDaten.push({
        //     id: I,
        //     text: D.SchriftspurTranskription
        //   })
        // })


        $("#search").select2({
          data: searchDaten,
          containerCssClass: "search",
          selectOnClose: true,
          placeholder: "MARGINALIEN-SUCHE/ÜBERSICHT",
          allowClear: true

        });


        $("#search").on("select2-clearing", function(e) {
          filter = null
          // clickedBook = 0

          eigentumsangaben.select("text").transition().duration(800).style("fill", "#5B5B5B")
          anderes.select("text").transition().duration(800).style("fill", "#f284c0")
          zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
          marginalien.select("text").transition().duration(800).style("fill", "#f73f26")
          markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

          eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
          anderes.select("rect").transition().duration(800).style("opacity", 0)
          zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
          marginalien.select("rect").transition().duration(800).style("opacity", 0)
          markierungen.select("rect").transition().duration(800).style("opacity", 0)

dataContainer.selectAll(".nodesbg").transition().attr("fill", "white").attr("opacity", 1)
          farbeinfaltungMarkierung()
          farbeinfaltungMarginalien()
          farbeinfaltungProvenienz()
          filterInteraction()
          legend.selectAll(".CloseCross").style("display", "none")
          zusatzMaterial.selectAll("text").style("font-weight", "400").style("opacity", 1)
          marginalien.selectAll("text").style("font-weight", "400").style("opacity", 1)
          anderes.selectAll("text").style("font-weight", "400").style("opacity", 1)
          markierungen.selectAll("text").style("font-weight", "400").style("opacity", 1)
          eigentumsangaben.selectAll("text").style("font-weight", "400").style("opacity", 1)
          marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
          markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
          eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")

          // d3.selectAll(".detailDiv").remove()
          // d3.selectAll(".detailInfoParent").remove()




          // $("html,body").animate({
          //   scrollTop: 3000
          // }, '0')
        })


        $("#search").on("select2-selecting", function(e) {

          filter = null
          clickedBook = 0

          eigentumsangaben.select("text").transition().duration(800).style("fill", "#5B5B5B")
          anderes.select("text").transition().duration(800).style("fill", "#f284c0")
          zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
          marginalien.select("text").transition().duration(800).style("fill", "#f73f26")
          markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

          eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
          anderes.select("rect").transition().duration(800).style("opacity", 0)
          zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
          marginalien.select("rect").transition().duration(800).style("opacity", 0)
          markierungen.select("rect").transition().duration(800).style("opacity", 0)


          // farbeinfaltungMarkierung()
          // farbeinfaltungMarginalien()
          // farbeinfaltungProvenienz()
          // filterInteraction()
          legend.selectAll(".CloseCross").style("display", "none")
          zusatzMaterial.selectAll("text").style("font-weight", "400").style("opacity", 1)
          marginalien.selectAll("text").style("font-weight", "400").style("opacity", 1)
          anderes.selectAll("text").style("font-weight", "400").style("opacity", 1)
          markierungen.selectAll("text").style("font-weight", "400").style("opacity", 1)
          eigentumsangaben.selectAll("text").style("font-weight", "400").style("opacity", 1)
          marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
          markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
          eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")

          d3.selectAll(".detailDiv").remove()
          d3.selectAll(".detailInfoParent").remove()

          transitions = true
          setTimeout(function() {
            transitions = false
          }, 1000);


          $("html,body").animate({
            scrollTop: 3000
          }, '0')


dataContainer.selectAll(".nodesbg").transition().attr("fill", "#f7ece4")




dataContainer.selectAll(".nodesbg").filter(function(d){return d3.select(this).datum().values.filter(function(D){return D.searchCluster == e.choice.text}).length > 0})
.transition().attr("fill", "white")



          dataContainer.selectAll(".nodes")
            .attr("opacity", 0)
            .attr("fill", "rgba(247, 237, 229, 0)")



            dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.searchCluster == e.choice.text
            })
            .attr("opacity", 1)
            .attr("fill", "#f73f26")


          dataContainer.selectAll(".nodes")
          .filter(function(d) {
            return d.searchCluster == e.choice.text
          })
            .attr("opacity", 1)
            .transition()
            .attr("fill", "#dd0000")

          dataContainer.selectAll(".nodes")
          .filter(function(d) {
            return d.searchCluster == e.choice.text
          })
            .filter(function(d) {
              return d.SchriftspurTyp == "K"
            })
            .attr("opacity", 1)
            .transition()
            .attr("fill", "#FF8A5D")

          dataContainer.selectAll(".nodes")
          .filter(function(d) {
            return d.searchCluster == e.choice.text
          })
            .filter(function(d) {
              return d.SchriftspurTyp == "T"
            })
            .attr("opacity", 1)
            .transition()
            .attr("fill", "#8D084E")

          dataContainer.selectAll(".nodes")
          .filter(function(d) {
            return d.searchCluster == e.choice.text
          })
            .filter(function(d) {
              return d.SchriftspurTyp == "V"
            })
            .attr("opacity", 1)
            .transition()
            .attr("fill", "#FD9698")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.searchCluster == e.choice.text
            })
            .filter(function(d) {
              return d.SchriftspurTyp == "U"
            })
            .attr("opacity", 1)
            .transition()
            .attr("fill", "#d93168")



        })








        setTimeout(function() {
          hashLoad()
        }, 50);




        var datensatzAll = dataset //.filter(function(d,i){return d.Benutzungsspur != "null"})

        var datenByAuthor = d3.nest()
          .key(function(d) {
            if (+d.AuthorCount > 1) {
              return d.Verfasser
            } else {
              return "Sonstige"
            }
          })
          .entries(dataset);

        datenByAuthor.forEach(function(D, I) {
          D.values = d3.nest()
            .key(function(d) {
              return d.BookID;
            })
            .entries(D.values);
        })



        var datenByTitle = d3.nest()
          .key(function(d) {
            return d.BookID;
          })
          .entries(dataset);

        datenByTitle.forEach(function(D, I) {
          D.authorCount = +D.values[0].AuthorCount //.values.length

        })



        ////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////

        var clickedBook = 0



        var marginleft = 42
        var marginright = 30

        var xOffset = 2

        var posY = 120
        var posYCanvas = 0

        var BuchAnzahl = datenByTitle.length
        var authorAnzahl = datenByAuthor.filter(function(d, i) {
          return d.values[0].values[0].AuthorCount > 1
        }).length + 1


        var chartArea = width - marginleft - marginright
        var areaheight = (window.innerHeight - 310)
        ///Buch-Ebene Größen und Abstände

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

        var mysteryVar = 100
        var transcriptLinePos = 20

        if (window.innerWidth >= 1800) {
          buchBreite = 8
          buchBgBreite = 2 + buchBreite

          sLBuchAbstandSelected = 24 //55
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

          xAreaMax = 6

          transcripttextwrap = 270
        } else if (window.innerWidth < 1800 && window.innerWidth >= 1600) {
          buchBreite = 7
          buchBgBreite = 2 + buchBreite

          sLBuchAbstandSelected = 24 //55
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

          xAreaMax = 4.5

          transcripttextwrap = 270
        } else if (window.innerWidth < 1600 && window.innerWidth >= 1400) {
          buchBreite = 5
          buchBgBreite = 2 + buchBreite

          sLBuchAbstandSelected = 20 //55
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

          xAreaMax = 3
          transcripttextwrap = 270
        } else if (window.innerWidth < 1400 && window.innerWidth >= 1200) {
          mysteryVar = 50
          buchBreite = 4
          buchBgBreite = 2 + buchBreite

          sLBuchAbstandSelected = 16 //55
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
          mysteryVar = 50
          fontsize = 11

          buchBreite = 4
          buchBgBreite = 1 + buchBreite

          sLBuchAbstandSelected = 15 //55
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
          transcripttextwrap = 220
          transcriptLinePos = 15
        } else if (window.innerWidth < 1100) {
          mysteryVar = 50

          fontsize = 11
          buchBreite = 4
          buchBgBreite = 1 + buchBreite

          sLBuchAbstandSelected = 15 //55
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

          xAreaMax = 3
          transcripttextwrap = 200
          transcriptLinePos = 8
        }

        d3.select("body").style("font-size", fontsize + "px")


        var fontSizeScale = d3.scaleLinear()
          .domain([2, 28])
          .range([0.8, 1.5])
          .clamp(true)








        var totalBuchWidth = buchBgBreite * BuchAnzahl
        var authorAbstand = ((chartArea - totalBuchWidth) + (buchBgBreite * authorAnzahl)) / authorAnzahl

        ///Author-Ebene Größen und Abstände
        var authorLevelAbstand = (chartArea - totalAreaChartsWidth) / authorAnzahl

        ///Seiten-Ebene Größen und Abstände
        var sLBuchAbstand = chartArea / authorAnzahl


        var thisVerfasserSelectedBookCount = datenByAuthor.filter(function(d, i) {
          return d.key == "Fontane, Theodor"
        })[0].values.length
        var sLTotalBuchWidthSelected = thisVerfasserSelectedBookCount * sLBuchAbstandSelected
        var sLTotalBuchWidthUnselected = (BuchAnzahl - thisVerfasserSelectedBookCount) * sLBuchAbstandUnselected
        var sLAuthorAbstand2 = (chartArea + mysteryVar - (sLTotalBuchWidthSelected + sLTotalBuchWidthUnselected)) / (authorAnzahl - 1)


        ///Setting für Buch-buchauswahl





        var unselectedBookSameAuthorBuchlevel = 3
        var unselectedBookSameAuthorSeitenlevel = 3




        //    var onSelectionBuchAbstand = 7



        var onSelectionBuchAbstandScale = d3.scaleLinear()
          .domain([0, 3000])
          .range([onSelectionBuchAbstandBL, onSelectionBuchAbstandSL])
          .clamp(true)








        //////////legend///////////////////////////////////////
        ////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////

        var filter = null
        var eigentumsangabenEntfaltet = false
        var markierungenEntfaltet = false
        var marginalienEntfaltet = false

        var legendSchriftspurY = 15

        var legend = d3.select("#legend")

        legend.append("text")
          .text("Schriftspur-Typ")
          .style("font-weight", "bold")
          .style("letter-spacing", "1px")
          .attr("y", legendSchriftspurY)
          .attr("x", 0)

        var eigentumsangaben = legend.append("g")
          .attr("class", "eigentumsangaben")
          .style("cursor", "pointer")
          .attr("transform", "translate(135,0)")


        eigentumsangaben.append("rect")
          .attr("y", legendSchriftspurY - fontsize - 2 + "px")
          .attr("x", "-5px")
          .attr("width", "138px")
          .attr("height", +fontsize + 6 + "px")
          .attr("fill", "#5B5B5B")
          .style("opacity", "0")


        eigentumsangaben.append("text")
          .attr("y", legendSchriftspurY)

        var zusatzMaterial = legend.append("g")
          .attr("class", "zusatzMaterial")
          .style("cursor", "pointer")
          .attr("transform", "translate(492,0)")

        zusatzMaterial.append("rect")
          .attr("fill", "white")
          .attr("y", legendSchriftspurY - fontsize - 2 + "px")
          .attr("x", "-5px")
          .attr("width", "156px")
          .attr("height", +fontsize + 6 + "px")
          .attr("fill", "rgb(210, 164, 0)")
          .style("opacity", "0")


        var anderes = legend.append("g")
          .attr("class", "anderes")
          .style("cursor", "pointer")
          .attr("transform", "translate(658,0)")


        anderes.append("rect")
          .attr("fill", "white")
          .attr("y", legendSchriftspurY - fontsize - 2 + "px")
          .attr("x", "-5px")
          .attr("width", "64px")
          .attr("height", +fontsize + 6 + "px")
          .attr("fill", "#f284c0")
          .style("opacity", "0")

        var markierungen = legend.append("g")
          .attr("class", "markierungen")
          .style("cursor", "pointer")
          .attr("transform", "translate(380,0)")

        markierungen.append("rect")
          .attr("fill", "white")
          .attr("y", legendSchriftspurY - fontsize - 2 + "px")
          .attr("x", "-5px")
          .attr("width", "104px")
          .attr("height", +fontsize + 6 + "px")
          .attr("fill", "#58b0f7")
          .style("opacity", "0")

        markierungen.append("text")
          .attr("y", legendSchriftspurY)

        var marginalien = legend.append("g")
          .attr("class", "marginalien")
          .style("cursor", "pointer")
          .attr("transform", "translate(280,0)")

        marginalien.append("rect")
          .attr("fill", "white")
          .attr("y", legendSchriftspurY - fontsize - 2 + "px")
          .attr("x", "-5px")
          .attr("width", "90px")
          .attr("height", +fontsize + 6 + "px")
          .attr("fill", "#f73f26")
          .style("opacity", "0")

        marginalien.append("text")
          .attr("y", legendSchriftspurY)


        ////////////////Provenienz-Filter Start
        ///////////////////////////////////////////////


        eigentumsangaben.select("text").append("tspan")
          .text("Provenienzangaben")
          .attr("class", "EigentumsangabenFilter")
          .on("click", function() {
            if (filter != "eigentumsangaben") {
              filter = "eigentumsangaben"
              eigentumsangabenEntfaltet = true


              farbausfaltungProvenienz()
              filterInteraction()

              eigentumsangaben.select("text").transition().duration(800).style("fill", "white")
              eigentumsangaben.select("rect").transition().duration(800).style("opacity", 1)

              anderes.select("text").transition().duration(800).style("fill", "#f284c0")
              zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
              marginalien.select("text").transition().duration(800).style("fill", "#f73f26")
              markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

              anderes.select("rect").transition().duration(800).style("opacity", 0)
              zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
              marginalien.select("rect").transition().duration(800).style("opacity", 0)
              markierungen.select("rect").transition().duration(800).style("opacity", 0)

              legend.selectAll(".CloseCross").style("display", "none")
              eigentumsangaben.select(".CloseCross").style("display", "none")
              eigentumsangaben.selectAll(".detail").selectAll(".CloseCross").style("display", "none")

              eigentumsangaben.selectAll("text").style("font-weight", "bold").style("opacity", 1)
              zusatzMaterial.selectAll("text").style("font-weight", "200").style("opacity", .6)
              anderes.selectAll("text").style("font-weight", "200").style("opacity", .6)
              marginalien.selectAll("text").style("font-weight", "200").style("opacity", .6)
              markierungen.selectAll("text").style("font-weight", "200").style("opacity", .6)

              eigentumsangabendetail.transition().duration(800).attr("transform", "scale(1,1)").style("opacity", 1).style("pointer-events", "auto")
              markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")

            } else {
              eigentumsangaben.select("text").transition().duration(800).style("fill", "#5B5B5B")
              anderes.select("text").transition().duration(800).style("fill", "#f284c0")
              zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
              marginalien.select("text").transition().duration(800).style("fill", "#f73f26")
              markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

              eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
              anderes.select("rect").transition().duration(800).style("opacity", 0)
              zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
              marginalien.select("rect").transition().duration(800).style("opacity", 0)
              markierungen.select("rect").transition().duration(800).style("opacity", 0)

              filter = null
              eigentumsangabenEntfaltet = false

              farbeinfaltungProvenienz()
              filterInteraction()
              legend.selectAll(".CloseCross").style("display", "none")
              zusatzMaterial.selectAll("text").style("font-weight", "400").style("opacity", 1)
              marginalien.selectAll("text").style("font-weight", "400").style("opacity", 1)
              anderes.selectAll("text").style("font-weight", "400").style("opacity", 1)
              markierungen.selectAll("text").style("font-weight", "400").style("opacity", 1)
              eigentumsangaben.selectAll("text").style("font-weight", "400").style("opacity", 1)
              eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
            }

          })


        var eigentumsangabendetail = eigentumsangaben.append("g").attr("class", "detail").attr("transform", "scale(0,1)").style("opacity", 0)

        eigentumsangabendetail.append("rect")
          .attr("y", legendSchriftspurY + 1.6 * fontsize - fontsize - 2 + "px")
          .attr("x", "-5px")
          .attr("width", "200px")
          .attr("height", +fontsize + 6 + "px")
          .attr("fill", "#494747")
          .style("opacity", "0")

        eigentumsangabendetail.append("text")
          .text("Schriftl. Provenienzangaben")
          .attr("y", legendSchriftspurY + 1.6 * fontsize)
          .attr("x", 0)
          .attr("class", "provenienz")
          .on("click", function() {
            if (filter != "provenienz") {
              eigentumsangabendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
              d3.select(this).style("font-weight", "bold").style("opacity", 1)

              filter = "provenienz"
              filterInteraction()
            } else {
              filter = "eigentumsangaben"
              filterInteraction()

              eigentumsangabendetail.selectAll("text").style("font-weight", "bold").style("opacity", 1)
            }
          })


        eigentumsangabendetail.append("text")
          .text("Provenienz-Stempel")
          .attr("y", legendSchriftspurY + 1.6 * fontsize)
          .attr("x", 210)
          .attr("class", "provenienzstempel")
          .on("click", function() {
            if (filter != "provenienzstempel") {
              eigentumsangabendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
              d3.select(this).style("font-weight", "bold").style("opacity", 1)

              filter = "provenienzstempel"
              filterInteraction()
            } else {
              filter = "eigentumsangaben"
              filterInteraction()

              eigentumsangabendetail.selectAll("text").style("font-weight", "bold").style("opacity", 1)
            }
          })


        ////////////////Provenienz-Filter Ende
        ///////////////////////////////////////////////


        ////////////////Markierung-Filter Start
        ///////////////////////////////////////////////

        markierungen.select("text").append("tspan")
          .text("Markierungen")
          .attr("class", "MarkierungFilter")
          .on("click", function() {
            if (filter != "markierungen") {
              filter = "markierungen"
              markierungenEntfaltet = true

              farbausfaltungMarkierung()
              filterInteraction()

              markierungen.select("text").transition().duration(800).style("fill", "white")
              markierungen.select("rect").transition().duration(800).style("opacity", 1)

              eigentumsangaben.select("text").transition().duration(800).style("fill", "#5B5B5B")
              anderes.select("text").transition().duration(800).style("fill", "#f284c0")
              zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
              marginalien.select("text").transition().duration(800).style("fill", "#f73f26")

              eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
              anderes.select("rect").transition().duration(800).style("opacity", 0)
              zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
              marginalien.select("rect").transition().duration(800).style("opacity", 0)



              legend.selectAll(".CloseCross").style("display", "none")
              markierungen.select(".CloseCross").style("display", "none")
              markierungen.selectAll(".detail").selectAll(".CloseCross").style("display", "none")

              markierungen.selectAll("text").style("font-weight", "bold").style("opacity", 1)
              zusatzMaterial.selectAll("text").style("font-weight", "200").style("opacity", .6)
              anderes.selectAll("text").style("font-weight", "200").style("opacity", .6)
              marginalien.selectAll("text").style("font-weight", "200").style("opacity", .6)
              eigentumsangaben.selectAll("text").style("font-weight", "200").style("opacity", .6)




              eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              markierungendetail.transition().duration(800).attr("transform", "scale(1,1)").style("opacity", 1).style("pointer-events", "auto")
              marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")


            } else {
              filter = null
              markierungenEntfaltet = false

              farbeinfaltungMarkierung()
              filterInteraction()

              eigentumsangaben.select("text").transition().duration(800).style("fill", "#5B5B5B")
              anderes.select("text").transition().duration(800).style("fill", "#f284c0")
              zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
              marginalien.select("text").transition().duration(800).style("fill", "#f73f26")
              markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

              eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
              anderes.select("rect").transition().duration(800).style("opacity", 0)
              zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
              marginalien.select("rect").transition().duration(800).style("opacity", 0)
              markierungen.select("rect").transition().duration(800).style("opacity", 0)

              legend.selectAll(".CloseCross").style("display", "none")
              zusatzMaterial.selectAll("text").style("font-weight", "400").style("opacity", 1)
              marginalien.selectAll("text").style("font-weight", "400").style("opacity", 1)
              markierungen.selectAll("text").style("font-weight", "400").style("opacity", 1)
              eigentumsangaben.selectAll("text").style("font-weight", "400").style("opacity", 1)
              anderes.selectAll("text").style("font-weight", "400").style("opacity", 1)
              markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
            }
          })


        var markierungendetail = markierungen.append("g").attr("class", "detail").attr("transform", "scale(0,1)").style("opacity", 0)

        markierungendetail.append("text")
          .text("Anstreichung")
          .attr("y", legendSchriftspurY + 1.6 * fontsize)
          .attr("x", 0)
          .attr("class", "anstreichung")
          .on("click", function() {
            if (filter != "anstreichung") {
              markierungendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
              d3.select(this).style("font-weight", "bold").style("opacity", 1)

              filter = "anstreichung"
              filterInteraction()
            } else {
              filter = "markierungen"
              filterInteraction()

              markierungendetail.selectAll("text").style("font-weight", "bold").style("opacity", 1)
            }
          })

        markierungendetail.append("text")
          .text("Unterstreichung")
          .attr("y", legendSchriftspurY + 1.6 * fontsize)
          .attr("x", 110)
          .attr("class", "unterstreichung")
          .on("click", function() {
            if (filter != "unterstreichung") {
              markierungendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
              d3.select(this).style("font-weight", "bold").style("opacity", 1)

              filter = "unterstreichung"
              filterInteraction()
            } else {
              filter = "markierungen"
              filterInteraction()

              markierungendetail.selectAll("text").style("font-weight", "bold").style("opacity", 1)
            }
          })

        markierungendetail.append("text")
          .text("Durchstreichung")
          .attr("y", legendSchriftspurY + 1.6 * fontsize)
          .attr("x", 240)
          .attr("class", "durchstreichung")
          .on("click", function() {
            if (filter != "durchstreichung") {
              markierungendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
              d3.select(this).style("font-weight", "bold").style("opacity", 1)

              filter = "durchstreichung"
              filterInteraction()
            } else {
              filter = "markierungen"
              filterInteraction()

              markierungendetail.selectAll("text").style("font-weight", "bold").style("opacity", 1)
            }
          })

        markierungendetail.append("text")
          .text("Sonstige Markierung")
          .attr("y", legendSchriftspurY + 1.6 * fontsize)
          .attr("x", 370)
          .attr("class", "sonstigeMarkierung")
          .on("click", function() {
            if (filter != "sonstigeMarkierung") {
              markierungendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
              d3.select(this).style("font-weight", "bold").style("opacity", 1)

              filter = "sonstigeMarkierung"
              filterInteraction()
            } else {
              filter = "markierungen"
              filterInteraction()

              markierungendetail.selectAll("text").style("font-weight", "bold").style("opacity", 1)
            }
          })


        ////////////////Markierung-Filter Ende
        ///////////////////////////////////////////////

        ////////////////Marginalien-Filter Start
        ///////////////////////////////////////////////

        marginalien.select("text").append("tspan")
          .text("Marginalien")
          .attr("class", "MarginalienFilter")
          .on("click", function() {
            if (filter != "marginalien") {
              filter = "marginalien"
              marginalienEntfaltet = true

              farbausfaltungMarginalien()
              filterInteraction()

              marginalien.select("text").transition().duration(800).style("fill", "white")
              marginalien.select("rect").transition().duration(800).style("opacity", 1)

              eigentumsangaben.select("text").transition().duration(800).style("fill", "#5B5B5B")
              anderes.select("text").transition().duration(800).style("fill", "#f284c0")
              zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
              markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

              eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
              anderes.select("rect").transition().duration(800).style("opacity", 0)
              zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
              markierungen.select("rect").transition().duration(800).style("opacity", 0)

              marginalien.selectAll("text").style("font-weight", "bold")
              marginaliendetail.transition().duration(800).attr("transform", "scale(1,1)").style("opacity", 1).style("pointer-events", "auto")
              legend.selectAll(".CloseCross").style("display", "none")
              marginalien.select(".CloseCross").style("display", "none")
              marginalien.selectAll(".detail").selectAll(".CloseCross").style("display", "none")

              marginalien.selectAll("text").style("font-weight", "bold").style("opacity", 1)
              zusatzMaterial.selectAll("text").style("font-weight", "200").style("opacity", .6)
              anderes.selectAll("text").style("font-weight", "200").style("opacity", .6)
              markierungen.selectAll("text").style("font-weight", "200").style("opacity", .6)
              eigentumsangaben.selectAll("text").style("font-weight", "200").style("opacity", .6)

              eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              marginaliendetail.transition().duration(800).attr("transform", "scale(1,1)").style("opacity", 1).style("pointer-events", "auto")


            } else {
              filter = null
              marginalienEntfaltet = false

              farbeinfaltungMarginalien()
              filterInteraction()

              eigentumsangaben.select("text").transition().duration(800).style("fill", "#5B5B5B")
              anderes.select("text").transition().duration(800).style("fill", "#f284c0")
              zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
              marginalien.select("text").transition().duration(800).style("fill", "#f73f26")
              markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

              eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
              anderes.select("rect").transition().duration(800).style("opacity", 0)
              zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
              marginalien.select("rect").transition().duration(800).style("opacity", 0)
              markierungen.select("rect").transition().duration(800).style("opacity", 0)

              // marginalien.selectAll(".MarginalienPlus").text(" ⊕")
              legend.selectAll(".CloseCross").style("display", "none")
              zusatzMaterial.selectAll("text").style("font-weight", "400").style("opacity", 1)
              anderes.selectAll("text").style("font-weight", "400").style("opacity", 1)
              marginalien.selectAll("text").style("font-weight", "400").style("opacity", 1)
              markierungen.selectAll("text").style("font-weight", "400").style("opacity", 1)
              eigentumsangaben.selectAll("text").style("font-weight", "400").style("opacity", 1)
              marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
            }
          })

        var marginaliendetail = marginalien.append("g").attr("class", "detail").attr("transform", "scale(0,1)").style("opacity", 0)

        marginaliendetail.append("text")
          .text("Bewertung")
          .attr("y", legendSchriftspurY + 1.6 * fontsize)
          .attr("x", 0)
          .attr("class", "bewertung")
          .on("click", function() {
            if (filter != "bewertung") {
              marginaliendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
              d3.select(this).style("font-weight", "bold").style("opacity", 1)

              filter = "bewertung"
              filterInteraction()
            } else {
              filter = "marginalien"
              filterInteraction()

              marginaliendetail.selectAll("text").style("font-weight", "bold").style("opacity", 1)
            }
          })

        marginaliendetail.append("text")
          .text("Kommentar")
          .attr("y", legendSchriftspurY + 1.6 * fontsize)
          .attr("x", 90)
          .attr("class", "kommentar")
          .on("click", function() {
            if (filter != "kommentar") {
              marginaliendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
              d3.select(this).style("font-weight", "bold").style("opacity", 1)

              filter = "kommentar"
              filterInteraction()
            } else {
              filter = "marginalien"
              filterInteraction()

              marginaliendetail.selectAll("text").style("font-weight", "bold").style("opacity", 1)
            }
          })

        marginaliendetail.append("text")
          .text("Textkorrektur")
          .attr("y", legendSchriftspurY + 1.6 * fontsize)
          .attr("x", 190)
          .attr("class", "textkorrektur")
          .on("click", function() {
            if (filter != "textkorrektur") {
              marginaliendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
              d3.select(this).style("font-weight", "bold").style("opacity", 1)

              filter = "textkorrektur"
              filterInteraction()
            } else {
              filter = "marginalien"
              filterInteraction()

              marginaliendetail.selectAll("text").style("font-weight", "bold").style("opacity", 1)
            }
          })

        marginaliendetail.append("text")
          .text("Variante")
          .attr("y", legendSchriftspurY + 1.6 * fontsize)
          .attr("x", 310)
          .attr("class", "variante")
          .on("click", function() {
            if (filter != "variante") {
              marginaliendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
              d3.select(this).style("font-weight", "bold").style("opacity", 1)

              filter = "variante"
              filterInteraction()
            } else {
              filter = "marginalien"
              filterInteraction()

              marginaliendetail.selectAll("text").style("font-weight", "bold").style("opacity", 1)
            }
          })

        marginaliendetail.append("text")
          .text("Übersetzung")
          .attr("y", legendSchriftspurY + 1.6 * fontsize)
          .attr("x", 390)
          .attr("class", "uebersetzung")
          .on("click", function() {
            if (filter != "uebersetzung") {
              marginaliendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
              d3.select(this).style("font-weight", "bold").style("opacity", 1)

              filter = "uebersetzung"
              filterInteraction()
            } else {
              filter = "marginalien"
              filterInteraction()

              marginaliendetail.selectAll("text").style("font-weight", "bold").style("opacity", 1)
            }
          })

        ////////////////Marginalien-Filter Ende
        ///////////////////////////////////////////////

        zusatzMaterial.append("text")
          .text("Zusätzliches Material")
          .attr("y", legendSchriftspurY)
          //  .attr("x", 600)
          .on("click", function() {
            if (filter != "zusatzMaterial") {
              filter = "zusatzMaterial"
              filterInteraction()

              zusatzMaterial.select("text").transition().duration(800).style("fill", "white")
              zusatzMaterial.select("rect").transition().duration(800).style("opacity", 1)

              eigentumsangaben.select("text").transition().duration(800).style("fill", "#5B5B5B")
              anderes.select("text").transition().duration(800).style("fill", "#f284c0")
              marginalien.select("text").transition().duration(800).style("fill", "#f73f26")
              markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

              eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
              anderes.select("rect").transition().duration(800).style("opacity", 0)
              marginalien.select("rect").transition().duration(800).style("opacity", 0)
              markierungen.select("rect").transition().duration(800).style("opacity", 0)

              legend.selectAll(".CloseCross").style("display", "none")
              zusatzMaterial.select(".CloseCross").style("display", "none")
              zusatzMaterial.selectAll("text").style("font-weight", "bold").style("opacity", 1)
              marginalien.selectAll("text").style("font-weight", "200").style("opacity", .6)
              markierungen.selectAll("text").style("font-weight", "200").style("opacity", .6)
              eigentumsangaben.selectAll("text").style("font-weight", "200").style("opacity", .6)
              anderes.selectAll("text").style("font-weight", "200").style("opacity", .6)


              eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
            } else {

              eigentumsangaben.select("text").transition().duration(800).style("fill", "#5B5B5B")
              anderes.select("text").transition().duration(800).style("fill", "#f284c0")
              zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
              marginalien.select("text").transition().duration(800).style("fill", "#f73f26")
              markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

              eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
              anderes.select("rect").transition().duration(800).style("opacity", 0)
              zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
              marginalien.select("rect").transition().duration(800).style("opacity", 0)
              markierungen.select("rect").transition().duration(800).style("opacity", 0)

              filter = null
              legend.selectAll(".CloseCross").style("display", "none")
              filterInteraction()
              anderes.selectAll("text").style("font-weight", "400").style("opacity", 1)
              zusatzMaterial.selectAll("text").style("font-weight", "400").style("opacity", 1)
              marginalien.selectAll("text").style("font-weight", "400").style("opacity", 1)
              markierungen.selectAll("text").style("font-weight", "400").style("opacity", 1)
              eigentumsangaben.selectAll("text").style("font-weight", "400").style("opacity", 1)
            }
          })



        anderes.append("text")
          .text("Anderes")
          .attr("y", legendSchriftspurY)
          //  .attr("x", 600)
          .on("click", function() {
            if (filter != "anderes") {
              filter = "anderes"
              filterInteraction()

              anderes.select("text").transition().duration(800).style("fill", "white")
              anderes.select("rect").transition().duration(800).style("opacity", 1)

              eigentumsangaben.select("text").transition().duration(800).style("fill", "#5B5B5B")
              zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
              marginalien.select("text").transition().duration(800).style("fill", "#f73f26")
              markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

              eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
              zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
              marginalien.select("rect").transition().duration(800).style("opacity", 0)
              markierungen.select("rect").transition().duration(800).style("opacity", 0)

              legend.selectAll(".CloseCross").style("display", "none")
              anderes.select(".CloseCross").style("display", "none")
              anderes.selectAll("text").style("font-weight", "bold").style("opacity", 1)
              zusatzMaterial.selectAll("text").style("font-weight", "200").style("opacity", .6)
              marginalien.selectAll("text").style("font-weight", "200").style("opacity", .6)
              markierungen.selectAll("text").style("font-weight", "200").style("opacity", .6)
              eigentumsangaben.selectAll("text").style("font-weight", "200").style("opacity", .6)

              eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
            } else {
              eigentumsangaben.select("text").transition().duration(800).style("fill", "#5B5B5B")
              anderes.select("text").transition().duration(800).style("fill", "#f284c0")
              zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
              marginalien.select("text").transition().duration(800).style("fill", "#f73f26")
              markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

              eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
              anderes.select("rect").transition().duration(800).style("opacity", 0)
              zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
              marginalien.select("rect").transition().duration(800).style("opacity", 0)
              markierungen.select("rect").transition().duration(800).style("opacity", 0)

              legend.selectAll(".CloseCross").style("display", "none")
              filter = null
              filterInteraction()
              anderes.selectAll("text").style("font-weight", "400").style("opacity", 1)
              zusatzMaterial.selectAll("text").style("font-weight", "400").style("opacity", 1)
              marginalien.selectAll("text").style("font-weight", "400").style("opacity", 1)
              markierungen.selectAll("text").style("font-weight", "400").style("opacity", 1)
              eigentumsangaben.selectAll("text").style("font-weight", "400").style("opacity", 1)
            }
          })


        legend.selectAll(".eigentumsangaben,.markierungen,.marginalien,.zusatzMaterial,.anderes").selectAll("text").append("tspan")
          .text(" \u2715")
          .attr("class", "CloseCross")
          .style("display", "none")
          .on("click", function() {
            d3.event.stopPropagation()
            filter = null
            filterInteraction()
            legend.selectAll(".CloseCross").style("display", "none")

            anderes.selectAll("text").style("font-weight", "400").style("opacity", 1)
            zusatzMaterial.selectAll("text").style("font-weight", "400").style("opacity", 1)
            marginalien.selectAll("text").style("font-weight", "400").style("opacity", 1)
            markierungen.selectAll("text").style("font-weight", "400").style("opacity", 1)
            eigentumsangaben.selectAll("text").style("font-weight", "400").style("opacity", 1)
            eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
            markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
            marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
          })







        //////////////Rezize Function Start
        $(window).resize(function() {
          width = window.innerWidth - 100 //1300,
          height = window.innerHeight - 120 //680;


          ratio = getRetinaRatio()
          scaledWidth = width * ratio
          caledHeight = height * ratio

          chartArea = width - marginleft - marginright
          areaheight = (window.innerHeight - 310)
          ///Buch-Ebene Größen und Abstände



          svg = d3.select("#svg")
            .style('width', width + 'px')
            .style('height', height + 'px')

          svgFront = d3.select("#svgFront")
            .style('width', width + 'px')
            .style('height', height + 'px')

          svgFrontTitles = d3.select("#svgFrontTitles")
            .style('width', width + 'px')
            .style('height', height + 'px')


          firstScrollIcon = 40
          secondScrollIcon = window.innerHeight / 2
          thirdScrollIcon = window.innerHeight - 40


          d3.select(".firstScrollLine")
            .attr("y1", firstScrollIcon)
            .attr("y2", thirdScrollIcon)

          d3.select(".secondScrollLine")
            .attr("y1", firstScrollIcon)
            .attr("y2", thirdScrollIcon)


          d3.select(".autorIcon")
            .attr("y", firstScrollIcon + 5)


          d3.select(".buchIcon")
            .attr("y", secondScrollIcon + 5)

          d3.select(".secondScrollCircle")
            .attr("cy", secondScrollIcon)

          d3.select(".seitenIcon")
            .attr("y", thirdScrollIcon)

          d3.select(".thirdScrollCircle")
            .attr("cy", thirdScrollIcon - 5)


          scrollCircleScale = d3.scaleLinear()
            .domain([-4990, 0, 2600])
            .range([firstScrollIcon, secondScrollIcon, thirdScrollIcon - 5])
            .clamp(true)

          d3.selectAll(".scrollCircleFollower")
            .attr("cy", scrollCircleScale(newScrollTop))

          pageheight = areaheight / 1674


          if (window.innerWidth >= 1800) {
            buchBreite = 8
            buchBgBreite = 2 + buchBreite

            sLBuchAbstandSelected = 24 //55
            sLBuchBreiteSelected = 20

            sLBuchAbstandUnselected = 4
            sLBuchBreiteUnselected = 3

            BuchauswahlFeld = 420
            BuchauswahlFeldSeitenFeld = 600

            unselectedBookBuchlevel = 5
            unselectedBookSeitenlevel = 4
            onSelectionBuchAbstandBL = 6
            onSelectionBuchAbstandSL = 5

            selectedBookBuchlevel = 20
            selectedBookSeitenlevel = 30

            xAreaMax = 6
          } else if (window.innerWidth < 1800 && window.innerWidth >= 1600) {
            buchBreite = 7
            buchBgBreite = 2 + buchBreite

            sLBuchAbstandSelected = 24 //55
            sLBuchBreiteSelected = 20

            sLBuchAbstandUnselected = 4
            sLBuchBreiteUnselected = 3

            BuchauswahlFeld = 420
            BuchauswahlFeldSeitenFeld = 600

            unselectedBookBuchlevel = 5
            unselectedBookSeitenlevel = 4
            onSelectionBuchAbstandBL = 6
            onSelectionBuchAbstandSL = 5

            selectedBookBuchlevel = 20
            selectedBookSeitenlevel = 30

            xAreaMax = 4.5
          } else if (window.innerWidth < 1600 && window.innerWidth >= 1400) {
            buchBreite = 5
            buchBgBreite = 2 + buchBreite

            sLBuchAbstandSelected = 20 //55
            sLBuchBreiteSelected = 18

            sLBuchAbstandUnselected = 4
            sLBuchBreiteUnselected = 3

            BuchauswahlFeld = 340
            BuchauswahlFeldSeitenFeld = 520

            unselectedBookBuchlevel = 4
            unselectedBookSeitenlevel = 3
            onSelectionBuchAbstandBL = 5
            onSelectionBuchAbstandSL = 4

            selectedBookBuchlevel = 12
            selectedBookSeitenlevel = 20

            xAreaMax = 3
          } else if (window.innerWidth < 1400 && window.innerWidth >= 1200) {
            buchBreite = 4
            buchBgBreite = 2 + buchBreite

            sLBuchAbstandSelected = 16 //55
            sLBuchBreiteSelected = 14

            sLBuchAbstandUnselected = 3
            sLBuchBreiteUnselected = 2

            BuchauswahlFeld = 260
            BuchauswahlFeldSeitenFeld = 440

            unselectedBookBuchlevel = 3
            unselectedBookSeitenlevel = 2
            onSelectionBuchAbstandBL = 4
            onSelectionBuchAbstandSL = 3

            selectedBookBuchlevel = 8
            selectedBookSeitenlevel = 16

            xAreaMax = 4
          } else if (window.innerWidth < 1200 && window.innerWidth >= 1100) {
            buchBreite = 4
            buchBgBreite = 1 + buchBreite

            sLBuchAbstandSelected = 15 //55
            sLBuchBreiteSelected = 14

            sLBuchAbstandUnselected = 3
            sLBuchBreiteUnselected = 2

            BuchauswahlFeld = 260
            BuchauswahlFeldSeitenFeld = 440

            unselectedBookBuchlevel = 3
            unselectedBookSeitenlevel = 2
            onSelectionBuchAbstandBL = 4
            onSelectionBuchAbstandSL = 3

            selectedBookBuchlevel = 8
            selectedBookSeitenlevel = 16

            xAreaMax = 4
          } else if (window.innerWidth < 1100) {
            buchBreite = 4
            buchBgBreite = 1 + buchBreite

            sLBuchAbstandSelected = 14 //55
            sLBuchBreiteSelected = 13

            sLBuchAbstandUnselected = 2
            sLBuchBreiteUnselected = 2

            BuchauswahlFeld = 200
            BuchauswahlFeldSeitenFeld = 380

            unselectedBookBuchlevel = 3
            unselectedBookSeitenlevel = 2
            onSelectionBuchAbstandBL = 4
            onSelectionBuchAbstandSL = 3

            selectedBookBuchlevel = 6
            selectedBookSeitenlevel = 13

            xAreaMax = 3
          }


          totalBuchWidth = buchBgBreite * BuchAnzahl
          authorAbstand = ((chartArea - totalBuchWidth) + (buchBgBreite * authorAnzahl)) / authorAnzahl

          ///Author-Ebene Größen und Abstände


          ///Seiten-Ebene Größen und Abstände
          sLBuchAbstand = chartArea / authorAnzahl
          //  var sLAuthorAbstand = 120 //???
          //var sLAuthorAbstand2 = 30



          sLTotalBuchWidthSelected = thisVerfasserSelectedBookCount * sLBuchAbstandSelected
          sLTotalBuchWidthUnselected = (BuchAnzahl - thisVerfasserSelectedBookCount) * sLBuchAbstandUnselected
          sLAuthorAbstand2 = (chartArea + mysteryVar - (sLTotalBuchWidthSelected + sLTotalBuchWidthUnselected)) / (authorAnzahl - 1)


          totalAreaChartsWidth = 0
          datenByAuthor.forEach(function(D, I) {
            totalAreaChartsWidth = totalAreaChartsWidth + xAreaMax * D.maxTraceNumberNorm
          })
          authorLevelAbstand = (chartArea - totalAreaChartsWidth) / authorAnzahl


          areachartGroup.selectAll("line")
            .attr("y1", 0)
            .attr("y2", areaheight)

          //areachart.selectAll("path").remove()


          yArea = d3.scaleLinear()
            .range([0, (areaheight / 21)]);

          xArea = d3.scaleLinear()
            .range([0, xAreaMax]);




          area = d3.area()
            .y(function(d, i) {
              return yArea(d.data.part)
            })
            .x0(function(d) {
              var areaChartXPos =
                50 //Number(dataContainer.selectAll(".bookFingerprint").filter(function(D){return D.values[0].Verfasser == d.data.Verfasser || D.values[0].Verfasser == "[Black, Adam u. Charles]"}).attr("transform").replace("translate(", "").split(',')[0])
              return xArea(d[0]);
            })
            .x1(function(d) {
              var areaChartXPos =
                50 //Number(dataContainer.selectAll(".bookFingerprint").filter(function(D){return D.values[0].Verfasser == d.data.Verfasser || D.values[0].Verfasser == "[Black, Adam u. Charles]"}).attr("transform").replace("translate(", "").split(',')[0])

              return xArea(d[1]);
            })
            .curve(d3.curveBasis)

          areachart.selectAll("path")
            .attr("d", area)




          canvas
            .attr('width', scaledWidth)
            .attr('height', scaledHeight)
            .style('width', width + 'px')
            .style('height', height + 'px')
          //	.style("display","none");

          canvas.node().getContext('2d');
          context.scale(ratio, ratio)

          scrollFunction()
          draw()

        });
        //////////////Rezize Function End






        var transcriptFontSize = d3.scaleLinear()
          .domain([500, 2500])
          .range([2, fontsize])
          .clamp(true)


        var detailInfoScale = d3.scaleLinear()
          .domain([450, 800])
          .range([1, 0])
          .clamp(true)

        var BuchauswahlFeldScale = d3.scaleLinear()
          .domain([0, 3000])
          .range([BuchauswahlFeld, BuchauswahlFeldSeitenFeld])
          .clamp(true)


        var detailInfoTextBoxScale = d3.scaleLinear()
          .domain([50, 800])
          .range([BuchauswahlFeldScale(scrollTop) - detailPicWidth - 2, 100 + BuchauswahlFeldScale(scrollTop) - detailPicWidth])
          .clamp(true)

        var detailTranscriptScale = d3.scaleLinear()
          .domain([-0.01, 0, 380])
          .range([0, 1, 1])
          .clamp(true)

        var transcriptYStart = d3.scaleLinear()
          .domain([900, 1250])
          .range([1, -20])
          .clamp(true)


        var detailCircleScale = d3.scaleLinear()
          .domain([2500, 3000])
          .range([0, 9])
          .clamp(true)

        var transcriptPositionScale = d3.scaleLinear()
          .domain([2500, 3000])
          .range([8, 10])
          .clamp(true)

        var transcriptPathScaleOpacity = d3.scaleLinear()
          .domain([2500, 3000])
          .range([0, 1])
          .clamp(true)



        ///////


        ////////////////esc reset

        d3.select("body")
          .on("keydown", function() {
            if (d3.event.key == "Escape") {
              filter = null
              clickedBook = 0

              eigentumsangaben.select("text").transition().duration(800).style("fill", "#5B5B5B")
              anderes.select("text").transition().duration(800).style("fill", "#f284c0")
              zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
              marginalien.select("text").transition().duration(800).style("fill", "#f73f26")
              markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

              eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
              anderes.select("rect").transition().duration(800).style("opacity", 0)
              zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
              marginalien.select("rect").transition().duration(800).style("opacity", 0)
              markierungen.select("rect").transition().duration(800).style("opacity", 0)


              farbeinfaltungMarkierung()
              farbeinfaltungMarginalien()
              farbeinfaltungProvenienz()
              filterInteraction()
              legend.selectAll(".CloseCross").style("display", "none")
              zusatzMaterial.selectAll("text").style("font-weight", "400").style("opacity", 1)
              marginalien.selectAll("text").style("font-weight", "400").style("opacity", 1)
              anderes.selectAll("text").style("font-weight", "400").style("opacity", 1)
              markierungen.selectAll("text").style("font-weight", "400").style("opacity", 1)
              eigentumsangaben.selectAll("text").style("font-weight", "400").style("opacity", 1)
              marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")

              d3.selectAll(".detailDiv").remove()
              d3.selectAll(".detailInfoParent").remove()




              $("html,body").animate({
                scrollTop: 2999
              }, '0')
            }
          })




        datenByAuthor.forEach(function(D, I) {
          D.Abschnitte = []
          //	D.Abschnitte2 = []
          //	D.Abschnitte2.push({Provenienz:[0,0,0,0,0,0,0,0,0,0], Stempel:[], Anstreichung:[], Unterstreichung:[], Durchstreichung:[], SonstigeMarkierung:[], ZusatzMaterial:[],Bewertung:[],Kommentar:[],Textkorrektur:[],Variante:[],Uebersetzung:[],Anderes:[],Leer:[]})
          D.Abschnitte.push({
            part: 0,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 1,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 2,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 3,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 4,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 5,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 6,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 7,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 8,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 9,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 10,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 11,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 12,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 13,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 14,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 15,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 16,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 17,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 18,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 19,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 20,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })
          D.Abschnitte.push({
            part: 21,
            Provenienz: 0,
            Stempel: 0,
            Anstreichung: 0,
            Unterstreichung: 0,
            Durchstreichung: 0,
            SonstigeMarkierung: 0,
            ZusatzMaterial: 0,
            Bewertung: 0,
            Kommentar: 0,
            Textkorrektur: 0,
            Variante: 0,
            Uebersetzung: 0,
            Anderes: 0,
            Leer: 0,
            Verfasser: D.key,
            BuchAnzahlAutor: D.values.length
          })



          D.values.forEach(function(E, G) {
            E.values.forEach(function(F, C) {
              if (F.Part / F.maxPart <= 0.05) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[1].Provenienz++
                  //			D.Abschnitte2[0].Provenienz[0]++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[1].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[1].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[1].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[1].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[1].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[1].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[1].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[1].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[1].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[1].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[1].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[1].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[1].Leer++
                }
              } else if (F.Part / F.maxPart > 0.05 && F.Part / F.maxPart <= 0.1) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[2].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[2].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[2].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[2].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[2].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[2].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[2].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[2].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[2].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[2].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[2].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[2].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[2].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[2].Leer++
                }
              } else if (F.Part / F.maxPart > 0.1 && F.Part / F.maxPart <= 0.15) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[3].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[3].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[3].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[3].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[3].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[3].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[3].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[3].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[3].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[3].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[3].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[3].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[3].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[3].Leer++
                }
              } else if (F.Part / F.maxPart > 0.15 && F.Part / F.maxPart <= 0.2) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[4].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[4].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[4].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[4].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[4].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[4].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[4].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[4].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[4].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[4].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[4].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[4].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[4].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[4].Leer++
                }
              } else if (F.Part / F.maxPart > 0.2 && F.Part / F.maxPart <= 0.25) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[5].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[5].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[5].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[5].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[5].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[5].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[5].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[5].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[5].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[5].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[5].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[5].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[5].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[5].Leer++
                }
              } else if (F.Part / F.maxPart > 0.25 && F.Part / F.maxPart <= 0.3) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[6].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[6].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[6].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[6].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[6].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[6].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[6].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[6].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[6].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[6].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[6].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[6].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[6].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[6].Leer++
                }
              } else if (F.Part / F.maxPart > 0.3 && F.Part / F.maxPart <= 0.35) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[7].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[7].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[7].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[7].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[7].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[7].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[7].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[7].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[7].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[7].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[7].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[7].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[7].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[7].Leer++
                }
              } else if (F.Part / F.maxPart > 0.35 && F.Part / F.maxPart <= 0.4) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[8].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[8].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[8].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[8].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[8].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[8].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[8].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[8].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[8].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[8].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[8].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[8].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[8].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[8].Leer++
                }
              } else if (F.Part / F.maxPart > 0.4 && F.Part / F.maxPart <= 0.45) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[9].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[9].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[9].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[9].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[9].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[9].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[9].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[9].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[9].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[9].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[9].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[9].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[9].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[9].Leer++
                }
              } else if (F.Part / F.maxPart > 0.45 && F.Part / F.maxPart <= 0.5) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[10].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[10].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[10].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[10].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[10].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[10].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[10].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[10].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[10].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[10].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[10].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[10].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[10].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[10].Leer++
                }
              } else if (F.Part / F.maxPart > 0.5 && F.Part / F.maxPart <= 0.55) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[11].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[11].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[11].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[11].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[11].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[11].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[11].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[11].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[11].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[11].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[11].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[11].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[11].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[11].Leer++
                }
              } else if (F.Part / F.maxPart > 0.55 && F.Part / F.maxPart <= 0.6) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[12].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[12].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[12].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[12].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[12].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[12].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[12].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[12].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[12].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[12].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[12].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[12].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[12].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[12].Leer++
                }
              } else if (F.Part / F.maxPart > 0.5 && F.Part / F.maxPart <= 0.65) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[13].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[13].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[13].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[13].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[13].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[13].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[13].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[13].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[13].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[13].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[13].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[13].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[13].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[13].Leer++
                }
              } else if (F.Part / F.maxPart > 0.65 && F.Part / F.maxPart <= 0.7) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[14].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[14].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[14].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[14].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[14].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[14].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[14].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[14].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[14].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[14].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[14].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[14].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[14].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[14].Leer++
                }
              } else if (F.Part / F.maxPart > 0.7 && F.Part / F.maxPart <= 0.75) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[15].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[15].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[15].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[15].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[15].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[15].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[15].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[15].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[15].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[15].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[15].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[15].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[15].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[15].Leer++
                }
              } else if (F.Part / F.maxPart > 0.75 && F.Part / F.maxPart <= 0.8) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[16].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[16].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[16].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[16].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[16].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[16].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[16].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[16].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[16].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[16].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[16].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[16].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[16].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[16].Leer++
                }
              } else if (F.Part / F.maxPart > 0.8 && F.Part / F.maxPart <= 0.85) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[17].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[17].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[17].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[17].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[17].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[17].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[17].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[17].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[17].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[17].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[17].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[17].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[17].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[17].Leer++
                }
              } else if (F.Part / F.maxPart > 0.85 && F.Part / F.maxPart <= 0.9) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[18].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[18].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[18].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[18].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[18].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[18].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[18].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[18].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[18].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[18].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[18].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[18].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[18].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[18].Leer++
                }
              } else if (F.Part / F.maxPart > 0.9 && F.Part / F.maxPart <= 0.95) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[19].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[19].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[19].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[19].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[19].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[19].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[19].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[19].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[19].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[19].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[19].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[19].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[19].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[19].Leer++
                }
              } else if (F.Part / F.maxPart > 0.95 && F.Part / F.maxPart <= 1) {
                if (F.SchriftspurTyp === "P" && F.Schreibmedium !== "Stempel") {
                  D.Abschnitte[20].Provenienz++
                } else if (F.SchriftspurTyp === "P" && F.Schreibmedium == "Stempel") {
                  D.Abschnitte[20].Stempel++
                } else if (F.Benutzungsspur === "1" || F.Benutzungsspur === "1?") {
                  D.Abschnitte[20].Anstreichung++
                } else if (F.Benutzungsspur === "2" || F.Benutzungsspur === "2?") {
                  D.Abschnitte[20].Unterstreichung++
                } else if (F.Benutzungsspur === "3" || F.Benutzungsspur === "3?") {
                  D.Abschnitte[20].Durchstreichung++
                } else if (F.Benutzungsspur === "4" || F.Benutzungsspur === "4?") {
                  D.Abschnitte[20].SonstigeMarkierung++
                } else if (F.Benutzungsspur === "6" || F.Benutzungsspur === "6?") {
                  D.Abschnitte[20].ZusatzMaterial++
                } else if (F.Benutzungsspur === "7" || F.Benutzungsspur === "7?") {
                  D.Abschnitte[20].Anderes++
                } else if (F.SchriftspurTyp === "B") {
                  D.Abschnitte[20].Bewertung++
                } else if (F.SchriftspurTyp === "K") {
                  D.Abschnitte[20].Kommentar++
                } else if (F.SchriftspurTyp === "T") {
                  D.Abschnitte[20].Textkorrektur++
                } else if (F.SchriftspurTyp === "U") {
                  D.Abschnitte[20].Uebersetzung++
                } else if (F.SchriftspurTyp === "V") {
                  D.Abschnitte[20].Variante++
                } else if (F.Benutzungsspur === "null") {
                  D.Abschnitte[20].Leer++
                }
              }




            })

          })





          D.Abschnitte.forEach(function(E, F) {
            E.ProvenienzNorm = E.Provenienz / E.BuchAnzahlAutor
            E.StempelNorm = E.Stempel / E.BuchAnzahlAutor
            E.AnstreichungNorm = E.Anstreichung / E.BuchAnzahlAutor
            E.UnterstreichungNorm = E.Unterstreichung / E.BuchAnzahlAutor
            E.DurchstreichungNorm = E.Durchstreichung / E.BuchAnzahlAutor
            E.SonstigeMarkierungNorm = E.SonstigeMarkierung / E.BuchAnzahlAutor
            E.ZusatzMaterialNorm = E.ZusatzMaterial / E.BuchAnzahlAutor
            E.BewertungNorm = E.Bewertung / E.BuchAnzahlAutor
            E.KommentarNorm = E.Kommentar / E.BuchAnzahlAutor
            E.TextkorrekturNorm = E.Textkorrektur / E.BuchAnzahlAutor
            E.VarianteNorm = E.Variante / E.BuchAnzahlAutor
            E.UebersetzungNorm = E.Uebersetzung / E.BuchAnzahlAutor
            E.AnderesNorm = E.Anderes / E.BuchAnzahlAutor
            E.LeerNorm = E.Leer / E.BuchAnzahlAutor
            // E.PlatzhalterNorm = 0

            E.TotalTraces = E.Provenienz + E.Stempel + E.Anstreichung + E.Unterstreichung + E.Durchstreichung + E.SonstigeMarkierung + E.ZusatzMaterial +
              E.Bewertung + E.Kommentar + E.Textkorrektur + E.Variante + E.Uebersetzung + E.Anderes
            E.TotalTracesNorm = E.TotalTraces / E.BuchAnzahlAutor
          })



        })


        datenByAuthor.forEach(function(D, I) {

          D.maxTraceNumber = d3.max([D.Abschnitte[0].TotalTraces, D.Abschnitte[1].TotalTraces, D.Abschnitte[2].TotalTraces, D.Abschnitte[3].TotalTraces, D.Abschnitte[4].TotalTraces, D.Abschnitte[5].TotalTraces, D.Abschnitte[6].TotalTraces, D
            .Abschnitte[7].TotalTraces, D.Abschnitte[8].TotalTraces, D.Abschnitte[9].TotalTraces, D.Abschnitte[10].TotalTraces, D.Abschnitte[11].TotalTraces, D.Abschnitte[12].TotalTraces, D.Abschnitte[13].TotalTraces, D.Abschnitte[14]
            .TotalTraces, D.Abschnitte[15].TotalTraces, D.Abschnitte[16].TotalTraces, D.Abschnitte[17].TotalTraces, D.Abschnitte[18].TotalTraces, D.Abschnitte[19].TotalTraces, D.Abschnitte[20].TotalTraces
          ])

          D.maxTraceNumberNorm = D.maxTraceNumber / D.Abschnitte[0].BuchAnzahlAutor
          //  D.maxTraceNumberNormBefore = datenByAuthor[I-1].maxTraceNumberNorm

        })

        datenByAuthor.forEach(function(D, I) {

          D.maxTraceNumber = d3.max([D.Abschnitte[0].TotalTraces, D.Abschnitte[1].TotalTraces, D.Abschnitte[2].TotalTraces, D.Abschnitte[3].TotalTraces, D.Abschnitte[4].TotalTraces, D.Abschnitte[5].TotalTraces, D.Abschnitte[6].TotalTraces, D
            .Abschnitte[7].TotalTraces, D.Abschnitte[8].TotalTraces, D.Abschnitte[9].TotalTraces, D.Abschnitte[10].TotalTraces, D.Abschnitte[11].TotalTraces, D.Abschnitte[12].TotalTraces, D.Abschnitte[13].TotalTraces, D.Abschnitte[14]
            .TotalTraces, D.Abschnitte[15].TotalTraces, D.Abschnitte[16].TotalTraces, D.Abschnitte[17].TotalTraces, D.Abschnitte[18].TotalTraces, D.Abschnitte[19].TotalTraces, D.Abschnitte[20].TotalTraces
          ])

          D.maxTraceNumberNorm = D.maxTraceNumber / D.Abschnitte[0].BuchAnzahlAutor
          if (I > 0) {
            D.maxTraceNumberNormBefore = datenByAuthor[I - 1].maxTraceNumberNorm
          }
        })


        var posx = 0
        var posx2 = 0

        var bookFingerprint = dataContainer.selectAll(".bookFingerprint")
          .data(datenByTitle)
          .enter()
          .append("g")
          .attr("class", "bookFingerprint")
          .attr("transform", function(d, i) {
            if (i == 0) {
              posx = 0
              return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
            } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser && d.values[0].AuthorCount > 1) {
              posx = posx + authorAbstand
              return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
            } else {
              posx = posx + buchBgBreite
              return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
            }
          })


        ///clip-path für transcriptions start

        svg.append("defs")
          .append("clipPath")
          .attr("id", "transcript-clip")
          .append("rect")
          .attr("height", height)
          .attr("width", width)

        ///clip-path für transcriptions ende


        var bookG = svg.selectAll(".bookBG")
          .data(datenByTitle)
          .enter()
          .append("g")
          .attr("transform", function(d, i) {
            if (i == 0) {
              posx = 0
              return "translate(" + (marginleft - ((buchBgBreite - buchBreite) / 2) + (posx)) + "," + (posY) + ")"
            } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser && d.values[0].AuthorCount > 1) {
              posx = posx + authorAbstand
              return "translate(" + (marginleft - ((buchBgBreite - buchBreite) / 2) + (posx)) + "," + (posY) + ")"
            } else {
              posx = posx + buchBgBreite
              return "translate(" + (marginleft - ((buchBgBreite - buchBreite) / 2) + (posx)) + "," + (posY) + ")"
            }
          })
          .attr("class", "bookBG bookBGsvg")

        var bookGFront = svgFront.selectAll(".bookBG")
          .data(datenByTitle)
          .enter()
          .append("g")
          .attr("transform", function(d, i) {
            if (i == 0) {
              posx = 0
              return "translate(" + (marginleft - ((buchBgBreite - buchBreite) / 2) + (posx)) + "," + (posY) + ")"
            } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser && d.values[0].AuthorCount > 1) {
              posx = posx + authorAbstand
              return "translate(" + (marginleft - ((buchBgBreite - buchBreite) / 2) + (posx)) + "," + (posY) + ")"
            } else {
              posx = posx + buchBgBreite
              return "translate(" + (marginleft - ((buchBgBreite - buchBreite) / 2) + (posx)) + "," + (posY) + ")"
            }
          })
          .attr("class", "bookBG")

        var bookTitleFront = svgFrontTitles.selectAll(".bookTitleFrontG")
          .data(datenByTitle)
          .enter()
          .append("g")
          .attr("transform", function(d, i) {
            if (i == 0) {
              posx = 0
              return "translate(" + (marginleft - 40.5 + (posx)) + "," + (posY) + ")"
            } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser && d.values[0].AuthorCount > 1) {
              posx = posx + authorAbstand
              return "translate(" + (marginleft - 40.5 + (posx)) + "," + (posY) + ")"
            } else {
              posx = posx + buchBgBreite
              return "translate(" + (marginleft - 40.5 + (posx)) + "," + (posY) + ")"
            }
          })
          .attr("class", "bookTitleFrontG")
          .style("display", "none")


        bookTitleFront.append("rect")
          .attr("height", 1500)
          .attr("width", 40)
          .attr("fill", "#474747")
          .attr("class", "BuchTitelRect")


        bookTitleFront.append("text").attr("x", -4).attr("y", 16).style("text-anchor", "end")
          .text(function(d) {
            if (d.values[0].Verfasser_Original.length > 70) {
              return (d.values[0].Verfasser_Original).substring(0, 70) + " [...]"
            } else {
              return d.values[0].Verfasser_Original
            }
          })
          .attr("fill", "white")
          .attr("class", "BuchTitelLabel")
          .style("font-weight", "bold")
          .style("letter-spacing", "1px")
          .attr("transform", "rotate(-90)")



        bookTitleFront.append("text").attr("x", -4).attr("y", 32).style("text-anchor", "end")
          .text(function(d) {
            if (korpus.filter(function(D, I) {
                return D.KurzSignatur == d.values[0].BookID
              })[0]) {
              if (korpus.filter(function(D, I) {
                  return D.KurzSignatur == d.values[0].BookID
                })[0].Kurztitel.length > 70) {
                return (korpus.filter(function(D, I) {
                  return D.KurzSignatur == d.values[0].BookID
                })[0].Kurztitel).substring(0, 70) + " [...]"
              } else {
                return korpus.filter(function(D, I) {
                  return D.KurzSignatur == d.values[0].BookID
                })[0].Kurztitel
              }
            }
          })
          .attr("fill", "white")
          .attr("class", "BuchTitelLabel")
          .attr("transform", "rotate(-90)")


        bookTitleFront.append("text").attr("x", -areaheight).attr("y", 24).style("text-anchor", "start")
          .text(function(d) {
            if (korpus.filter(function(D, I) {
                return D.KurzSignatur == d.values[0].BookID
              })[0]) {
              if (korpus.filter(function(D, I) {
                  return D.KurzSignatur == d.values[0].BookID
                })[0].Formalschlagwort_Genre != "null") {

                return korpus.filter(function(D, I) {
                  return D.KurzSignatur == d.values[0].BookID
                })[0].Formalschlagwort_Genre + " (" + korpus.filter(function(D, I) {
                  return D.KurzSignatur == d.values[0].BookID
                })[0].Jahr + ")"
              } else {
                return "(" + korpus.filter(function(D, I) {
                  return D.KurzSignatur == d.values[0].BookID
                })[0].Jahr + ")"
              }
            }
          })
          .attr("fill", "white")
          .attr("class", "BuchTitelLabel")
          .attr("transform", "rotate(-90)")


        var authorGroup = bookG
          .filter(function(d, i) {
            return i == 0 || d.values[0].Verfasser != datenByTitle[i - 1].values[0].Verfasser
          })
          .append("g").attr("class", function(d) {
            return d.values[0].Verfasser
          }).attr("transform", "translate(0,0)")
          .classed("authorBg", true)


        var authorLabel = bookG
          .filter(function(d, i) {
            return i == 0 || d.values[0].Verfasser != datenByTitle[i - 1].values[0].Verfasser
          })
          //|| d.values[0].AuthorCount == 1 && datenByTitle[i-1].authorCount != 1}
          .append("g").attr("transform", "translate(4,-3)rotate(-45)")
        var layerGroups = bookGFront
          .filter(function(d, i) {
            return i == 0 || d.values[0].Verfasser != datenByTitle[i - 1].values[0].Verfasser
          })
          .append("g").attr("transform", "translate(0,0)rotate(0)")


        authorGroup.append("rect")
          .attr("width", function(d, i) {
            return buchBgBreite * (datenByAuthor[i].values.length)
          })
          .attr("height", 6000)
          .attr("fill", "#f7e5d7") //"#d9c2b2")//"red")
          .attr("class", "authorBg")
          .attr("opacity", 0)






        var stack = d3.stack()
          .keys(["BewertungNorm", "KommentarNorm", "TextkorrekturNorm", "UebersetzungNorm", "VarianteNorm", "AnstreichungNorm", "UnterstreichungNorm", "DurchstreichungNorm", "SonstigeMarkierungNorm", "AnderesNorm", "ProvenienzNorm", "StempelNorm",
            "ZusatzMaterialNorm"
          ])
          .order(d3.stackOrderNone)
          .offset(d3.stackOffsetNone);




        var totalAreaChartsWidth = 0
        datenByAuthor.forEach(function(D, I) {
          totalAreaChartsWidth = totalAreaChartsWidth + xAreaMax * D.maxTraceNumberNorm
        })
        authorLevelAbstand = (chartArea - totalAreaChartsWidth) / authorAnzahl



        var yArea = d3.scaleLinear()
          .range([0, (areaheight / 21)]);

        var xArea = d3.scaleLinear()
          .range([0, xAreaMax]);




        var area = d3.area()
          .y(function(d, i) {
            return yArea(d.data.part)
          })
          .x0(function(d) {
            var areaChartXPos =
              50 //Number(dataContainer.selectAll(".bookFingerprint").filter(function(D){return D.values[0].Verfasser == d.data.Verfasser || D.values[0].Verfasser == "[Black, Adam u. Charles]"}).attr("transform").replace("translate(", "").split(',')[0])
            return xArea(d[0]);
          })
          .x1(function(d) {
            var areaChartXPos =
              50 //Number(dataContainer.selectAll(".bookFingerprint").filter(function(D){return D.values[0].Verfasser == d.data.Verfasser || D.values[0].Verfasser == "[Black, Adam u. Charles]"}).attr("transform").replace("translate(", "").split(',')[0])

            return xArea(d[1]);
          })
          .curve(d3.curveBasis)
        //  .context(context);

        var areachartGroup = layerGroups.append("g").attr("class", "areachartGroup")
        //var areachartGroup = dataContainer.append("g").attr("class", "areachartGroup")

        var areachart = areachartGroup.selectAll(".areachartlayer")
          .data(function(D, I) {
            return (stack(datenByAuthor[I].Abschnitte).filter(function(d) {
              return d
            }))
          })
          .enter().append("g")
          .attr("class", "areachartlayer")
          .attr("display", "none")


        areachartGroup.append("line")
          .attr("x1", 0)
          .attr("x2", 0)
          .attr("y1", 0)
          .attr("y2", areaheight)
          .attr("stroke-width", 0.5)
          .attr("stroke", "black")
          .style("opacity", 1)
          .attr("stroke-dasharray", 2, 0.5)
          .attr("display", "none")


        areachart.append("path")
          .attr("d", area)
          .attr("class", function(d, i) {
            if (d.key == "AnstreichungNorm") {
              return "anstreichung eingefaltet"
            } else if (d.key == "UnterstreichungNorm") {
              return "unterstreichung eingefaltet"
            } else if (d.key == "ProvenienzNorm") {
              return "provenienz eingefaltet"
            } else if (d.key == "StempelNorm") {
              return "provenienzstempel eingefaltet"
            } else if (d.key == "DurchstreichungNorm") {
              return "durchstreichung eingefaltet"
            } else if (d.key == "ZusatzMaterialNorm") {
              return "zusatzMaterial"
            } else if (d.key == "SonstigeMarkierungNorm") {
              return "sonstigeMarkierung eingefaltet"
            } else if (d.key == "AnderesNorm") {
              return "anderes eingefaltet"
            } else if (d.key == "BewertungNorm") {
              return "bewertung eingefaltet"
            } else if (d.key == "KommentarNorm") {
              return "kommentar eingefaltet"
            } else if (d.key == "TextkorrekturNorm") {
              return "textkorrektur eingefaltet"
            } else if (d.key == "UebersetzungNorm") {
              return "uebersetzung eingefaltet"
            } else if (d.key == "VarianteNorm") {
              return "variante eingefaltet"
            } else if (d.key == "PlatzhalterNorm") {
              return "platzhalter"
            }
          })




        authorLabel.append("text")
          .attr("class", "authorLabel")
          .attr("fill", "black")
          .text(function(d) {
            if (d.values[0].Verfasser == "[Black, Adam u. Charles]") {
              return "Sonstige"
            } else {
              return d.values[0].Verfasser
            }
          })
          .style("font-size", function(d, i) {
            if (d.values[0].Verfasser == "[ohne Angabe]" || d.values[0].Verfasser == "Sonstige") {
              return 0.8 + "em"
            } else {
              return fontSizeScale(d.values[0].AuthorCount) + "em"
            }
          })
          .style("cursor", "pointer")
          .on("mouseover", function(d) {

            d3.select(this).style("font-weight", "bold")

            //  thisVerfasserSelected = d3.select(this).text()
          })
          .on("mouseout", function(d) {
            svg.selectAll(".authorLabel").filter(function(d) {
              return d.values[0].Verfasser == thisVerfasserSelected
            }).style("font-weight", "bold")
            svg.selectAll(".authorLabel").filter(function(d) {
              return d.values[0].Verfasser != thisVerfasserSelected
            }).style("font-weight", "normal")
          })
          .on("click", function(d) {
            thisVerfasserSelected = d3.select(this).text()

            if (clickedBook != 0) {
              d3.selectAll(".detailInfoParent")
                .transition()
                .style("opacity", 0)
                .remove()

              clickedBook = 0

              d3.selectAll(".detailDiv")
                .transition()
                .style("opacity", 0)
                .remove()


              d3.selectAll(".bookBG").selectAll("rect")
                .transition()
                .style("opacity", 0)

              $("html,body").animate({
                scrollTop: 2999
              }, '200')
              setTimeout(function() {
                clickedBook = 0

                $("html,body").animate({
                  scrollTop: 6000
                }, 300);
              })

            }

            if (scrollTop == 3000) {
              $("html,body").animate({
                scrollTop: 6001
              }, '1000')

            } else {
              $("html,body").animate({
                scrollTop: 6000
              }, '1000')
            }
          })




        /////Titel und hover
        bookG
          //.attr("transform", "translate(" + (posX-1) + "," + (posY) + ")")
          .append("rect")
          .attr("cursor", function() {
            if (scrollTop > -1000) {
              return "pointer"
            } else {
              return "not-allowed"
            }
          })
          .attr("opacity", 0)
          .attr("width", buchBgBreite)
          .attr("height", "7500")
          .attr("class", "bookBG")
          .classed("singleBookBG", true)
          .attr("fill", "#d9c2b2")
          //  .attr("fill", "red")
          .on("mouseover", function(d) {
            if (scrollTop > -800 && scrollTop < 1200) {
              thisVerfasserSelected = d3.select(this).datum().values[0].Verfasser


            }

            authorGroup.selectAll("rect").filter(function(d) {
                return d.values[0].Verfasser == thisVerfasser
              }).transition().duration(200)
              .attr("opacity", function() {
                if (scrollTop < 400) {
                  return 1
                } else {
                  return 0
                }
              })

            authorGroup.selectAll("rect").filter(function(d) {
                return d.values[0].Verfasser == thisVerfasserSelected
              }).transition().duration(200)
              .attr("opacity", function() {
                if (scrollTop > 400) {
                  return 0
                }
              })

            svg.selectAll(".authorLabel").filter(function(d) {
              return d.values[0].Verfasser == thisVerfasserSelected
            }).style("font-weight", "bold")
            svg.selectAll(".authorLabel").filter(function(d) {
              return d.values[0].Verfasser != thisVerfasserSelected
            }).style("font-weight", "normal")


            var thisBookID = d3.select(this).datum().values[0].BookID

            if (thisBookID != clickedBook) {
              svgFrontTitles.selectAll(".bookTitleFrontG")
                .filter(function(d) {
                  return d.values[0].BookID == thisBookID
                })
                .style("display", "inline")
            }



          })
          .on("mousemove", function(d) {

            if (scrollTop > -800) {
              if (scrollTop > -800 && scrollTop < 1200) {
                thisVerfasserSelected = d3.select(this).datum().values[0].Verfasser


              }
              var currentScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)

              var mouseY = ((d3.event.pageY) - currentScrollTop - 270);


              var thisPage = Math.round(round45(mouseY) / pageheight) + 1

              function round45(x) {
                return Math.ceil(x / pageheight) * pageheight
              }
              thisVerfasser = d3.select(this).datum().values[0].Verfasser
              var thisBookID = d3.select(this).datum().values[0].BookID



              //tooltip.select("p").text(thisPageID)
              if (d.values[0].maxPart < thisPage || mouseY < 0) {
                d3.select('.tooltip')
                  .style("display", "none")
                  .style('top', d3.event.pageY)
              } else if (d.values[0].maxPart >= thisPage && mouseY > 0) {

                var thisPageID = (d.values.filter(function(d, i) {
                  return d.Part == thisPage
                }))[0].ID

                d3.select(".tooltip")
                  .style("display", "block")
                  .style('top', d3.event.pageY - 100 + 'px')
                  .style('left', function() {
                    if (d3.event.pageX < width / 2) {
                      return d3.event.pageX + 25 + 'px'
                    } else {
                      return d3.event.pageX - 250 + 'px'
                    }
                  })

                tooltip.select("img").attr("src", function() {
                  return "./img/m/" + thisPageID + ".jpg"
                })
              }


              authorGroup.selectAll("rect").filter(function(d) {
                  return d.values[0].Verfasser == thisVerfasser
                }).transition().duration(200)
                .attr("opacity", function() {
                  if (scrollTop < 400) {
                    return 1
                  } else {
                    return 0
                  }
                })

              authorGroup.selectAll("rect").filter(function(d) {
                  return d.values[0].Verfasser == thisVerfasserSelected
                }).transition().duration(200)
                .attr("opacity", function() {
                  if (scrollTop > 400) {
                    return 0
                  }
                })

              svg.selectAll(".authorLabel").filter(function(d) {
                return d.values[0].Verfasser == thisVerfasserSelected
              }).style("font-weight", "bold")
              svg.selectAll(".authorLabel").filter(function(d) {
                return d.values[0].Verfasser != thisVerfasserSelected
              }).style("font-weight", "normal")


              var thisBookID = d3.select(this).datum().values[0].BookID


              svgFrontTitles.selectAll(".bookTitleFrontG")
                .filter(function(d) {
                  return d.values[0].BookID == thisBookID
                })
                .style("display", "inline")
            }
          })
          .on("mouseout", function() {

            var thisBookID = d3.select(this).datum().values[0].BookID

            svgFrontTitles.selectAll(".bookTitleFrontG")
              .filter(function(d) {
                return d.values[0].BookID == thisBookID
              })
              .style("display", "none")


            authorGroup.selectAll("rect").filter(function(d) {
              return d.values[0].Verfasser != thisVerfasserSelected
            }).transition().duration(200).attr("opacity", function() {
              return 0
            })
            svg.selectAll(".authorLabel").filter(function(d) {
              if (scrollTop > 0) {
                return d.values[0].Verfasser != thisVerfasserSelected
              } else {
                return d
              }
            }).style("font-weight", function() {
              if (scrollTop < 0) {
                return "normal"
              }
            })


            //	d3.select(this).transition().attr("opacity", 0)

            d3.select('.tooltip')
              .style("display", "none")

          })

        d3.selectAll(".singleBookBG")
          .filter(function(d, i) {
            return d3.select(this).datum().values[0].BookID != clickedBook
          })
          .on("click", function() {
            if (scrollTop < 0) {

              $("html,body").animate({
                scrollTop: 3000
              }, '0')


              clickedBook = d3.select(this).datum().values[0].BookID
              thisData = (d3.select(this).datum().values).filter(function(d) {
                return d.Benutzungsspur != "null" && d.Benutzungsspur != "4f" && d.Benutzungsspur != "4f?"
              })

              setTimeout(function() {
                bookClickHash(thisData)


              }, 550);

            } else {
              clickedBook = d3.select(this).datum().values[0].BookID
              thisData = (d3.select(this).datum().values).filter(function(d) {
                return d.Benutzungsspur != "null" && d.Benutzungsspur != "4f" && d.Benutzungsspur != "4f?"
              })

              bookClickHash(thisData)
            }
          })

        d3.selectAll(".singleBookBG")
          .filter(function(d, i) {
            return d3.select(this).datum().values[0].BookID == clickedBook
          })
          .on("click", function(d, i) {


            if (scrollTop >= 0 && d3.select(this).datum().values[0].BookID == clickedBook) {
              var currentScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)

              //    var mouseY = ((d3.event.layerY || d3.event.offsety) - currentScrollTop-120);
              var mouseY = ((d3.event.pageY) - currentScrollTop - 270 - posYCanvas);

              var thisPage = Math.round(round45(mouseY) / explicateScale2(scrollTop))

              var thisPageID = (d.values.filter(function(d, i) {
                return d.Part == thisPage
              }))[0].ID

              function round45(x) {
                return Math.ceil(x / explicateScale2(scrollTop)) * explicateScale2(scrollTop)
              }

              thisVerfasser = d3.select(this).datum().values[0].Verfasser
              var thisBookID = d3.select(this).datum().values[0].BookID

              d3.select("#detailview").selectAll("img").remove()
              d3.select("#detailview").selectAll("table").remove()

              d3.select("#overlay").style("display", "block").transition().duration(600).style("opacity", .5)
              d3.select("#detailview").style("display", "block").transition().duration(600).style("opacity", 1)
              d3.select("#detailview").append("img").attr("src", "./img/m/" + thisPageID + ".jpg")

              var detailviewTable = d3.select("#detailview").append("table").attr("id", "detailviewTable")

              var detailviewTableTr1 = detailviewTable.append("tr")
              var detailviewTableTr2 = detailviewTable.append("tr")
              var detailviewTableTr3 = detailviewTable.append("tr")
              var detailviewTableTr4 = detailviewTable.append("tr")
              var detailviewTableTr5 = detailviewTable.append("tr")
              var detailviewTableTr6 = detailviewTable.append("tr")
              var detailviewTableTr7= detailviewTable.append("tr")
              var detailviewTableTr8 = detailviewTable.append("tr")
              var detailviewTableTr9 = detailviewTable.append("tr")

              detailviewTableTr1.append("td").text("Buchtitel: ")
              detailviewTableTr1.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Titel
                })

              detailviewTableTr2.append("td").text("Verfasser: ")
              detailviewTableTr2.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Verfasser
                })

              detailviewTableTr3.append("td").text("Herausgeber: ")
              detailviewTableTr3.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Herausgeber
                })

              detailviewTableTr4.append("td").text("Verlag: ")
              detailviewTableTr4.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Verlag
                })

              detailviewTableTr5.append("td").text("Genre: ")
              detailviewTableTr5.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Formalschlagwort_Genre
                })

              detailviewTableTr6.append("td").text("Ort: ")
              detailviewTableTr6.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Ort
                })

                detailviewTableTr7.append("td").text("Datierung: ")
                detailviewTableTr7.append("td").text(function(d) {
                    return korpus.filter(function(D, I) {
                      return D.KurzSignatur == thisBookID
                    })[0].Jahr
                  })



              detailviewTableTr8.append("td").text("Seiten-ID: ")
              detailviewTableTr8.append("td").text(thisPageID)

              // window.open(
              //   "./img/m/" + thisPageID + ".jpg",
              //   '_blank' // <- This is what makes it open in a new window.
              // );

            }
          })

        bookFingerprint.append("rect")
          .attr("class", "nodesbg")
          .attr("width", buchBreite)
          .attr("height", function(d) {
            return (d.values[0].maxPart) * pageheight
          })
          .attr("fill", "white")
          .attr("x", 0)
          .attr("y", posYCanvas)
          .attr("opacity", 1)


        bookFingerprint.selectAll(".nodes")
          .data(function(d) {
            return d.values.filter(function(d) {
              return d.Benutzungsspur != "null" && d.Benutzungsspur != "4f" && d.Benutzungsspur != "4f?"
            })
          })
          //			.data(function(d){return d.values})
          .enter()
          .append("rect")
          .attr("width", buchBreite)
          .attr("height", pageheight)
          .attr("x", 0)
          .attr("y", function(d, i) {
            return posYCanvas + pageheight * d.Part
          })
          .attr("opacity", 1)
          //	.attr("fill", function(d){return color(d.Benutzungsspur)})
          .attr("fill", function(d) {
            if (d.Benutzungsspur == "null") {
              return "white"
            } else if (d.Benutzungsspur === "1" || d.Benutzungsspur === "1?") {
              return "#58b0f7"
            } else if (d.Benutzungsspur === "2" || d.Benutzungsspur === "2?") {
              return "#58b0f7"
            } else if (d.Benutzungsspur === "3" || d.Benutzungsspur === "3?") {
              return "#58b0f7"
            } else if (d.Benutzungsspur === "4" || d.Benutzungsspur === "4?") {
              return "#58b0f7"
            } else if (d.Benutzungsspur === "7" || d.Benutzungsspur === "7?") {
              return "#f284c0"
            } else if (d.Benutzungsspur === "6" || d.Benutzungsspur === "6?") {
              return "rgb(210, 164, 0)"
            } else if (d.SchriftspurTyp == "P" && d.Schreibmedium != "Stempel") {
              return "#5B5B5B"
            } else if (d.SchriftspurTyp == "P" && d.Schreibmedium == "Stempel") {
              return "#5B5B5B"
            } else if (d.SchriftspurTyp == "B") {
              return "#f73f26"
            } else if (d.SchriftspurTyp == "K") {
              return "#f73f26"
            } else if (d.SchriftspurTyp == "T") {
              return "#f73f26"
            } else if (d.SchriftspurTyp == "U") {
              return "#f73f26"
            } else if (d.SchriftspurTyp == "V") {
              return "#f73f26"
            }
          })
          .attr("class", function(d) {
            if (d.Benutzungsspur == "null") {
              return "leer"
            } else if (d.Benutzungsspur === "1" || d.Benutzungsspur === "1?") {
              return "anstreichung"
            } else if (d.Benutzungsspur === "2" || d.Benutzungsspur === "2?") {
              return "unterstreichung"
            } else if (d.Benutzungsspur === "3" || d.Benutzungsspur === "3?") {
              return "durchstreichung"
            } else if (d.Benutzungsspur === "4" || d.Benutzungsspur === "4?") {
              return "sonstigeMarkierung"
            } else if (d.Benutzungsspur === "7" || d.Benutzungsspur === "7?") {
              return "anderes"
            } else if (d.Benutzungsspur === "6" || d.Benutzungsspur === "6?") {
              return "zusatzMaterial"
            } else if (d.SchriftspurTyp == "P" && d.Schreibmedium != "Stempel") {
              return "provenienz"
            } else if (d.SchriftspurTyp == "P" && d.Schreibmedium == "Stempel") {
              return "provenienzstempel"
            } else if (d.SchriftspurTyp == "B") {
              return "bewertung"
            } else if (d.SchriftspurTyp == "K") {
              return "kommentar"
            } else if (d.SchriftspurTyp == "T") {
              return "textkorrektur"
            } else if (d.SchriftspurTyp == "U") {
              return "uebersetzung"
            } else if (d.SchriftspurTyp == "V") {
              return "variante"
            }
          })
          .classed("nodes", true)

        //})

        function farbausfaltungProvenienz() {
          transitions = true

          setTimeout(function() {
            transitions = false
          }, 1000);

          areachart.selectAll(".provenienz,.provenienzstempel,.sonstigeMarkierung,.anstreichung,.unterstreichung,.durchstreichung,.bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").classed("eingefaltet", false)

          dataContainer.selectAll(".nodes").filter(".provenienz,.provenienzstempel").transition().duration(800)
            .attr("fill", function(d) {
              if (d.SchriftspurTyp == "P" && d.Schreibmedium != "Stempel") {
                return "#494747"
              } else if (d.SchriftspurTyp == "P" && d.Schreibmedium == "Stempel") {
                return "#828282"
              }
            })
        }

        function farbeinfaltungProvenienz() {
          transitions = true

          setTimeout(function() {
            transitions = false
          }, 1000);

          areachart.selectAll(".provenienz,.provenienzstempel").classed("eingefaltet", true)

          dataContainer.selectAll(".nodes").filter(".provenienz,.provenienzstempel").transition().duration(800)
            .attr("fill", function(d) {
              if (d.SchriftspurTyp == "P" && d.Schreibmedium != "Stempel") {
                return "#5B5B5B"
              } else if (d.SchriftspurTyp == "P" && d.Schreibmedium == "Stempel") {
                return "#5B5B5B"
              }
            })
        }



        function farbausfaltungMarkierung() {
          transitions = true

          setTimeout(function() {
            transitions = false
          }, 1000);

          areachart.selectAll(".provenienz,.provenienzstempel,.sonstigeMarkierung,.anstreichung,.unterstreichung,.durchstreichung,.bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").classed("eingefaltet", false)

          dataContainer.selectAll(".nodes").filter(".unterstreichung,.anstreichung,.durchstreichung,.sonstigeMarkierung,.anderes").transition().duration(800)
            .attr("fill", function(d) {
              if (d.Benutzungsspur === "1" || d.Benutzungsspur === "1?") {
                return "#018DC9"
              } else if (d.Benutzungsspur === "2" || d.Benutzungsspur === "2?") {
                return "#415aff"
              } else if (d.Benutzungsspur === "3" || d.Benutzungsspur === "3?") {
                return "#4020d0"
              } else if (d.Benutzungsspur === "4" || d.Benutzungsspur === "4?") {
                return "#29D1E2"
              } else if (d.Benutzungsspur === "7" || d.Benutzungsspur === "7?") {
                return "#f284c0"
              }
            })
        }

        function farbeinfaltungMarkierung() {
          transitions = true

          setTimeout(function() {
            transitions = false
          }, 1000);

          areachart.selectAll(".unterstreichung,.anstreichung,.durchstreichung,.sonstigeMarkierung").classed("eingefaltet", true)

          dataContainer.selectAll(".nodes").filter(".unterstreichung,.anstreichung,.durchstreichung,.sonstigeMarkierung").transition().duration(800)
            .attr("fill", function(d) {
              if (d.Benutzungsspur === "1" || d.Benutzungsspur === "1?") {
                return "#58b0f7"
              } else if (d.Benutzungsspur === "2" || d.Benutzungsspur === "2?") {
                return "#58b0f7"
              } else if (d.Benutzungsspur === "3" || d.Benutzungsspur === "3?") {
                return "#58b0f7"
              } else if (d.Benutzungsspur === "4" || d.Benutzungsspur === "4?") {
                return "#58b0f7"
              }
            })
        }



        function farbausfaltungMarginalien() {
          transitions = true

          setTimeout(function() {
            transitions = false
          }, 1000);

          areachart.selectAll(".provenienz,.provenienzstempel,.sonstigeMarkierung,.anstreichung,.unterstreichung,.durchstreichung,.bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").classed("eingefaltet", false)

          dataContainer.selectAll(".nodes").filter(".bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").transition().duration(800)
            .attr("fill", function(d) {
              if (d.SchriftspurTyp == "B") {
                return "#dd0000"
              } else if (d.SchriftspurTyp == "K") {
                return "#FF8A5D"
              } else if (d.SchriftspurTyp == "T") {
                return "#8D084E"
              } else if (d.SchriftspurTyp == "U") {
                return "#d93168"
              } else if (d.SchriftspurTyp == "V") {
                return "#FD9698"
              }
            })
        }

        function farbeinfaltungMarginalien() {
          transitions = true

          setTimeout(function() {
            transitions = false
          }, 1000);

          areachart.selectAll(".bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").classed("eingefaltet", true)

          dataContainer.selectAll(".nodes").filter(".bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").transition().duration(800)
            .attr("fill", function(d) {
              if (d.SchriftspurTyp == "B") {
                return "#f73f26"
              } else if (d.SchriftspurTyp == "K") {
                return "#f73f26"
              } else if (d.SchriftspurTyp == "T") {
                return "#f73f26"
              } else if (d.SchriftspurTyp == "U") {
                return "#f73f26"
              } else if (d.SchriftspurTyp == "V") {
                return "#f73f26"
              }
            })
        }

        var detailview = false
        var thisData = 0



        //////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////
        /////////////////////////////
        /////bookClick Function Anfang

        function bookClick(data) {
          //      d3.select("#svgFrontTitles").style("display", "none")
          ///Trigger animation in Canvas


          transitions = true

          ///Stop animation in Canvas
          setTimeout(function() {
            transitions = false
          }, 20000);

          ///Hide Background for Author Group
          authorGroup.selectAll("rect").attr("display", "none")


          ///create array thisData that only includes pages with Benutzungsspuren

          thisData = data

          ///set a selection based on ID



          ///create Variable that counts number of "Schriftspuren" on one page
          var maxX = 0

          ///create variable that helps to position the books
          var posX = 0



          ////Create Scale for book/page width, based on scroll position
          var selectedBookScale = d3.scaleLinear()
            .domain([0, 3000])
            .range([selectedBookBuchlevel, selectedBookSeitenlevel])
            .clamp(true)

          var unselectedBookSameAuthorScale = d3.scaleLinear()
            .domain([0, 3000])
            .range([unselectedBookSameAuthorBuchlevel, unselectedBookSameAuthorSeitenlevel])
            .clamp(true)

          var unselectedBookScale = d3.scaleLinear()
            .domain([0, 3000])
            .range([unselectedBookBuchlevel, unselectedBookSeitenlevel])
            .clamp(true)

          var BuchauswahlFeldScale = d3.scaleLinear()
            .domain([0, 3000])
            .range([BuchauswahlFeld, BuchauswahlFeldSeitenFeld])
            .clamp(true)

          var onSelectionAuthorAbstand = ((chartArea + mysteryVar + 20) - BuchauswahlFeldScale(scrollTop) - ((BuchAnzahl - 1) * onSelectionBuchAbstandScale(scrollTop))) / (authorAnzahl - 1)


          bookFingerprint.selectAll(".nodes")
            .filter(function(d, i) {
              return d.BookID != clickedBook
            })
            .transition()
            .duration(600)
            .attr("width", function(d) {
              return unselectedBookScale(scrollTop)
            })

            .attr("x", 0)




          bookFingerprint.selectAll(".nodes")
            .filter(function(d, i) {
              return d.BookID == clickedBook
            })
            .transition()
            .duration(600)
            .attr("width", function(d) {
              return selectedBookScale(scrollTop)
            })
            .attr("x", function(d, i) {
              if (i > 5 && thisData[i - 6].ID == d.ID) {
                //  maxX = (Math.max(maxX, 7))
                return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 6
              } else if (i > 4 && thisData[i - 5].ID == d.ID) {
                //    maxX = (Math.max(maxX, 6))
                return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 5
              } else if (i > 3 && thisData[i - 4].ID == d.ID) {
                //    maxX = (Math.max(maxX, 5))
                return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 4
              } else if (i > 2 && thisData[i - 3].ID == d.ID) {
                //    maxX = (Math.max(maxX, 4))
                return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 3
              } else if (i > 1 && thisData[i - 2].ID == d.ID) {
                //  maxX = (Math.max(maxX, 3))
                return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 2
              } else if (i != 0 && thisData[i - 1].ID == d.ID) {
                //  maxX = (Math.max(maxX, 2))
                return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop)
              } else {
                //      maxX = (Math.max(maxX, 1))
                return 7 * selectedBookScale(scrollTop)
              }
            })

          bookFingerprint.selectAll(".nodesbg")
            .transition()
            .duration(600)
            .attr("width", function(d) {
              if (d.values[0].BookID == clickedBook) {
                return selectedBookScale(scrollTop)
              } else {
                return unselectedBookScale(scrollTop)
              }
            })
            .attr("x", function(d) {
              if (d.values[0].BookID == clickedBook) {
                return 7 * selectedBookScale(scrollTop)
              } else {
                return 0
              }
            })


          var thisBookPosition = 0


          bookFingerprint
            .transition()
            .duration(600)
            .attr("transform", function(d, i) {
              if (i == 0) {
                posx = 0
                return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
              } else if (i != 0 && datenByTitle[i - 1].values[0].BookID == clickedBook) {
                thisBookPosition = posx + 83
                posx = posx + BuchauswahlFeldScale(scrollTop)
                return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
              } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
                posx = posx + onSelectionAuthorAbstand
                return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
              } else {
                posx = posx + onSelectionBuchAbstandScale(scrollTop)
                return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
              }
            })


          bookG
            .transition()
            .duration(600)
            .attr("transform", function(d, i) {
              if (i == 0) {
                posx = 0
                return "translate(" + (marginleft - 2 + (posx)) + "," + (posY) + ")"
              } else if (i != 0 && datenByTitle[i - 1].values[0].BookID == clickedBook) {
                posx = posx + BuchauswahlFeldScale(scrollTop)
                return "translate(" + (marginleft - 2 + (posx)) + "," + (posY) + ")"
              } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
                posx = posx + onSelectionAuthorAbstand
                return "translate(" + (marginleft - 2 + (posx)) + "," + (posY) + ")"
              } else {
                posx = posx + onSelectionBuchAbstandScale(scrollTop)
                return "translate(" + (marginleft - 2 + (posx)) + "," + (posY) + ")"
              }
            })


          d3.selectAll(".bookTitleFrontG")
            .attr("transform", function(d, i) {
              if (i == 0) {
                posx = 0
                return "translate(" + (marginleft + (posx) - 40.5) + "," + (posY) + ")"
              } else if (i != 0 && datenByTitle[i - 1].values[0].BookID == clickedBook) {
                posx = posx + BuchauswahlFeldScale(scrollTop)
                return "translate(" + (marginleft + (posx) - 40.5) + "," + (posY) + ")"
              } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
                posx = posx + onSelectionAuthorAbstand
                return "translate(" + (marginleft + (posx) - 40.5) + "," + (posY) + ")"
              } else {
                posx = posx + onSelectionBuchAbstandScale(scrollTop)
                return "translate(" + (marginleft + (posx) - 40.5) + "," + (posY) + ")"
              }
            })




          bookG.selectAll(".bookBG")
            .transition()
            .duration(600)
            .style("opacity", 0)
            .attr("width", function(d) {
              if (d.values[0].BookID == clickedBook) {
                return BuchauswahlFeldScale(scrollTop)
              } else {
                return buchBreite
              }
            })
            .filter(function(d) {
              return d.values[0].BookID == clickedBook
            })
            .style("fill", "#d9c2b2")
            .style("opacity", 0.3)




          d3.selectAll(".BuchTitel").remove()


          d3.selectAll(".detailInfoParent")
            .remove()

          detailview = true
          ///Detailinfo bei Klick einblenden
          var detailInfoParent = d3.select(this.parentNode).append("g").attr("class", "detailInfoParent")

          var detailInfo = detailInfoParent.append("g") //.attr("pointer-events", "visible")


          d3.select(".detailDiv").remove()

          var detailDiv = d3.select("body").append("div").attr("class", "detailDiv").style("position", "fixed").style("display", "block")
            //      .style("left", "500px")
            .style("top", 270 + "px")
            .style("width", detailPicWidth + "px")
            .style("height", "700px")
            .style("transform", "scale(0, 1)")
            .style("transform-origin", "0 0")
            .style("left", thisBookPosition + marginleft + 8 * selectedBookScale(scrollTop) + "px")
            .style("opacity", function(d) {
              return detailInfoScale(scrollTop)
            })


          detailDiv
            .transition()
            .duration(600)
            .style("transform", "scale(1, 1)")
            .style("left", thisBookPosition + marginleft + 38 + 9 * selectedBookScale(scrollTop) + "px")

          var detailInfoData = data[0]
          var bookcover = data[0].ID


          detailDiv.append("img")
            .attr("src", function(d) {
              return "./img/m/" + bookcover + ".jpg"
            })
            .style("display", "block")
            .style("width", detailPicWidth + "px")
            .style("height", "auto")
            .style("margin-bottom", "10px")

          detailDiv.append("p")
            .text(function(d) {
              return "Verfasser: "
            })
            .append("span")
            .text(function(d) {
              return korpus.filter(function(D, I) {
                return D.KurzSignatur == detailInfoData.BookID
              })[0].Verfasser
            })

          detailDiv.append("p").text(function(d) {
            return "Herausgeber: " + korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Herausgeber
          })
          detailDiv.append("p").text(function(d) {
            return "Verlag: " + korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Verlag
          })
          detailDiv.append("p").text(function(d) {
            return "Genre: " + korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Formalschlagwort_Genre
          })
          detailDiv.append("p").text(function(d) {
            return "Datierung: " + korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Jahr
          })
          detailDiv.append("p").text(function(d) {
            return "Ort: " + korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Ort
          }).style("margin-bottom", "10px")
          detailDiv.append("p").text(function(d) {
            return "Seitenzahl: " + detailInfoData.maxPart
          })
          detailDiv.append("p").attr("class", "eigentumsangaben").text(function(d) {
            return "Provenienzangaben: " + thisData.filter(function(d) {
              return d.SchriftspurTyp == "P"
            }).length
          })
          detailDiv.append("p").attr("class", "marginalien").text(function(d) {
            return "Marginalien: " + +thisData.filter(function(d) {
              return d.Benutzungsspur == "5" || d.Benutzungsspur == "5?"
            }).length
          })
          detailDiv.append("p").attr("class", "markierungen").text(function(d) {
            return "Markierungen: " + +thisData.filter(function(d) {
              return d.Benutzungsspur == "1" || d.Benutzungsspur == "1?" ||
                d.Benutzungsspur == "2" || d.Benutzungsspur == "2?" ||
                d.Benutzungsspur == "3" || d.Benutzungsspur == "3?" ||
                d.Benutzungsspur == "4" || d.Benutzungsspur == "4?"
            }).length
          })
          detailDiv.append("p").attr("class", "zusatzMaterial").text(function(d) {
            return "Zusätzliches Material: " + thisData.filter(function(d) {
              return d.Benutzungsspur == "6" || d.Benutzungsspur == "6?"
            }).length
          })
          detailDiv.append("p").attr("class", "anderes").text(function(d) {
            return "Anderes: " + thisData.filter(function(d) {
              return d.Benutzungsspur == "7" || d.Benutzungsspur == "7?"
            }).length
          }).style("pointer-events", "none")






          detailInfo.attr("class", "detailinfo")
            .attr("transform", "scale(0,1)")
            .transition()
            .duration(600)
            .attr("transform", "scale(1,1)")








          detailInfo.append("text")
            .attr("class", "detail_titel")
            .text(function(d) {
              if (korpus.filter(function(D, I) {
                  return D.KurzSignatur == d.values[0].BookID
                })[0]) {
                if (korpus.filter(function(D, I) {
                    return D.KurzSignatur == d.values[0].BookID
                  })[0].Kurztitel.length > 70) {
                  return (korpus.filter(function(D, I) {
                    return D.KurzSignatur == d.values[0].BookID
                  })[0].Kurztitel).substring(0, 70) + " [...]" + "  \u2715"
                } else {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == d.values[0].BookID
                  })[0].Kurztitel + "  \u2715"
                }
              }
            })
            .attr("y", -5)
            .attr("dy", 0)
            .style("cursor", "pointer")
            .style("font-size", "1em")
            .attr("text-anchor", "middle")
            .on("click", function() {
              clickedBook = 0
              detailview = false
              scrollTop = scrollTop + 1

              scrollFunction()
              d3.selectAll(".detailInfoParent")
                .transition()
                .style("opacity", 0)
                .remove()

              d3.selectAll(".detailDiv").transition()
                .style("opacity", 0)
                .remove()

              d3.selectAll(".bookBG").selectAll("rect")
                .transition()
                .style("opacity", 0)

              bookFingerprint.selectAll(".nodesbg").attr("x", "0")
              setTimeout(function() {
                window.scrollTo(0, 3000)
              }, 10)
            })
            .attr("x", BuchauswahlFeldScale(scrollTop) / 2)
            .call(wrapUp, BuchauswahlFeld - 30)
            .selectAll("tspan")
            .attr("x", BuchauswahlFeldScale(scrollTop) / 2)
            .attr("text-anchor", "middle")


          var detailTranscriptScale = d3.scaleLinear()
            .domain([-0.01, 0, 380])
            .range([0, 1, 1])
            .clamp(true)

          var transcriptions = detailInfoParent.append("g").attr("clip-path", "url(#transcript-clip)").append("g").classed("transcriptions", true).attr("opacity", function(d) {
            return detailTranscriptScale(scrollTop)
          })

          var transcriptData = thisData.filter(function(d) {
            return d.SchriftspurTranskription != "null"
          })

          var explicateScale2 = d3.scaleLinear()
            .domain([500, 2500])
            .range([pageheight, 31])
            .clamp(true)


          transcriptions.selectAll("text")
            .data(transcriptData)
            .enter()
            .append("text")
            .text(function(d) {
              return d.SchriftspurTranskription
            })
            .style("font-size", fontsize + "px")
            .attr("x", transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) + 10)
            .attr("y", function(d, i) {
              if (i == 0) {
                return transcriptYStart(scrollTop) + (explicateScale2(scrollTop)) * d.Part
              } else {
                return transcriptYStart(scrollTop) + (explicateScale2(scrollTop)) * d.Part
              }
            })
            .attr("dy", 0)
            .attr("dx", 0)
            .attr("class", function(d, i) {
              if (d.Schreibmedium == "Stempel") {
                return "stempel"
              } else {
                return "handschrift"
              }
            })
            .classed("transcriptText", true)
            // .style("fill", function(d){if(d.Schreibmedium == "Bleistift" || d.Schreibmedium == "Bleistift?"){return "grey"}else if(d.Schreibmedium == "Tinte" || d.Schreibmedium == "Tinte?"){return "black"}
            // else if(d.Schreibmedium == "roter Buntstift" || d.Schreibmedium == "roter Buntstift?"){return "red"}  else if(d.Schreibmedium == "lila Buntstift"){return "DarkOrchid"}
            // else if(d.Schreibmedium == "blauer Buntstift"){return "blue"}})
            .text(function(d, i) {
              return d.SchriftspurTranskription
            })
            .call(wraptext, transcripttextwrap)
            .selectAll("tspan")
            .attr("x", transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) + 10)


          transcriptions.selectAll("text").classed("transcriptionText", true).style("font-size", function() {
              return transcriptFontSize(scrollTop) + "px"
            })
            .on("mouseover", function(d, i) {
              d3.event.stopPropagation()


              d3.select('.tooltip')
                .style("display", "block")
                .style('top', d3.event.pageY - 100 + 'px')
                .style('left', function() {
                  if (d3.event.pageX < width / 2) {
                    return d3.event.pageX + 25 + 'px'
                  } else {
                    return d3.event.pageX - 250 + 'px'
                  }
                })

              tooltip.select("img").attr("src", function() {
                return "./img/m/" + d.ID + ".jpg"
              })
            })
            .on("click", function(d, i) {
              var thisPageID = d.ID
              var thisBookID = d.BookID

              d3.select("#detailview").selectAll("img").remove()
              d3.select("#detailview").selectAll("table").remove()

              d3.select("#overlay").style("display", "block").transition().duration(600).style("opacity", .5)
              d3.select("#detailview").style("display", "block").transition().duration(600).style("opacity", 1)
              d3.select("#detailview").append("img").attr("src", "./img/m/" + thisPageID + ".jpg")

              var detailviewTable = d3.select("#detailview").append("table").attr("id", "detailviewTable")

              var detailviewTableTr1 = detailviewTable.append("tr")
              var detailviewTableTr2 = detailviewTable.append("tr")
              var detailviewTableTr3 = detailviewTable.append("tr")
              var detailviewTableTr4 = detailviewTable.append("tr")
              var detailviewTableTr5 = detailviewTable.append("tr")
              var detailviewTableTr6 = detailviewTable.append("tr")
              var detailviewTableTr7= detailviewTable.append("tr")
              var detailviewTableTr8 = detailviewTable.append("tr")
              var detailviewTableTr9 = detailviewTable.append("tr")

              detailviewTableTr1.append("td").text("Buchtitel: ")
              detailviewTableTr1.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Titel
                })

              detailviewTableTr2.append("td").text("Verfasser: ")
              detailviewTableTr2.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Verfasser
                })

              detailviewTableTr3.append("td").text("Herausgeber: ")
              detailviewTableTr3.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Herausgeber
                })

              detailviewTableTr4.append("td").text("Verlag: ")
              detailviewTableTr4.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Verlag
                })

              detailviewTableTr5.append("td").text("Genre: ")
              detailviewTableTr5.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Formalschlagwort_Genre
                })

              detailviewTableTr6.append("td").text("Ort: ")
              detailviewTableTr6.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Ort
                })

                detailviewTableTr7.append("td").text("Datierung: ")
                detailviewTableTr7.append("td").text(function(d) {
                    return korpus.filter(function(D, I) {
                      return D.KurzSignatur == thisBookID
                    })[0].Jahr
                  })



              detailviewTableTr8.append("td").text("Seiten-ID: ")
              detailviewTableTr8.append("td").text(thisPageID)

              // window.open(
              //   "./img/m/" + d.ID + ".jpg",
              //   '_blank' // <- This is what makes it open in a new window.
              // )
            })



          d3.selectAll(".transcriptionText")
            .each(function(d, i) {
              if (i > 0) {
                var thisTranscriptY = d3.select(this).node().getBBox().y
                var lastTranscriptMaxY = d3.selectAll(".transcriptionText").filter(function(D, I) {
                  return I == i - 1
                }).node().getBBox().y + d3.selectAll(".transcriptionText").filter(function(D, I) {
                  return I == i - 1
                }).node().getBBox().height

                if (thisTranscriptY <= lastTranscriptMaxY) {
                  d3.select(this)
                    .attr("y", function() {
                      return lastTranscriptMaxY + transcriptFontSize(scrollTop)
                    })
                    .selectAll("tspan").attr("y", function() {
                      return lastTranscriptMaxY + transcriptFontSize(scrollTop)
                    })

                  transcriptions.append("image")
                    .attr("xlink:href", function() {
                      if (d.SchriftspurSchreibhand == "Theodor Fontane") {
                        return "icons/icon_fontaneA.svg"
                      } else if (d.SchriftspurSchreibhand == "?Theodor Fontane?") {
                        return "icons/icon_fontaneB.svg"
                      } else if (d.SchriftspurSchreibhand == "Unbekannt" || d.SchriftspurSchreibhand == "unbekannt" || d.SchriftspurSchreibhand == "null") {
                        return "icons/icon_unbekannt.svg"
                      } else {
                        return "icons/icon_andereA.svg"
                      }
                    })
                    .attr("width", detailCircleScale(scrollTop))
                    .attr("height", detailCircleScale(scrollTop))
                    .attr("title", function() {
                      return d.SchriftspurSchreibhand
                    })
                    .attr("class", "schreibhandIcon")
                    .attr("x", transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3)
                    .attr("y", lastTranscriptMaxY + transcriptFontSize(scrollTop) - 3 - (detailCircleScale(scrollTop) / 2))


                  ////line between transcript and rect
                  transcriptions.append("path")
                    .style("pointer-events", "none")
                    .style("stroke", "white")
                    .style("stroke-width", 1)
                    .style("opacity", .7)
                    .style("fill", "none")
                    //.style("stroke-dasharray", "1,2")
                    .attr("d", function(d, i) {
                      var line = d3.line().curve(d3.curveBasis)
                      var data = [
                        [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3, lastTranscriptMaxY + transcriptFontSize(scrollTop) - 3],
                        [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - transcriptLinePos, lastTranscriptMaxY + transcriptFontSize(scrollTop) - 3],
                        [8 * selectedBookScale(scrollTop) + transcriptLinePos, thisTranscriptY + 15],
                        [8 * selectedBookScale(scrollTop), thisTranscriptY + 15]
                      ];

                      return line(data)
                    })


                } else {
                  transcriptions.append("image")
                    .attr("xlink:href", function() {
                      if (d.SchriftspurSchreibhand == "Theodor Fontane") {
                        return "icons/icon_fontaneA.svg"
                      } else if (d.SchriftspurSchreibhand == "?Theodor Fontane?") {
                        return "icons/icon_fontaneB.svg"
                      } else if (d.SchriftspurSchreibhand == "Unbekannt" || d.SchriftspurSchreibhand == "unbekannt" || d.SchriftspurSchreibhand == "null") {
                        return "icons/icon_unbekannt.svg"
                      } else {
                        return "icons/icon_andereA.svg"
                      }
                    })
                    .attr("title", function() {
                      return d.SchriftspurSchreibhand
                    })
                    .attr("width", detailCircleScale(scrollTop))
                    .attr("height", detailCircleScale(scrollTop))
                    .attr("class", "schreibhandIcon")
                    .attr("x", transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3)
                    .attr("y", thisTranscriptY + transcriptFontSize(scrollTop) - 6 - (detailCircleScale(scrollTop) / 2))

                  ////line between transcript and rect
                  transcriptions.append("path")
                  .style("pointer-events", "none")
                    .style("stroke", "white")
                    .style("stroke-width", 1)
                    .style("opacity", .7)
                    .style("fill", "none")
                    //.style("stroke-dasharray", "1,2")
                    .attr("d", function(d, i) {
                      var line = d3.line().curve(d3.curveBasis)
                      var data = [
                        [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                        [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - transcriptLinePos, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                        [8 * selectedBookScale(scrollTop) + transcriptLinePos, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                        [8 * selectedBookScale(scrollTop), thisTranscriptY + 15]
                      ];

                      return line(data)
                    })



                }

              } else {

                var thisTranscriptY = d3.select(this).node().getBBox().y

                transcriptions.append("image")
                  .attr("xlink:href", function() {
                    if (d.SchriftspurSchreibhand == "Theodor Fontane") {
                      return "icons/icon_fontaneA.svg"
                    } else if (d.SchriftspurSchreibhand == "?Theodor Fontane?") {
                      return "icons/icon_fontaneB.svg"
                    } else if (d.SchriftspurSchreibhand == "Unbekannt" || d.SchriftspurSchreibhand == "unbekannt" || d.SchriftspurSchreibhand == "null") {
                      return "icons/icon_unbekannt.svg"
                    } else {
                      return "icons/icon_andereA.svg"
                    }
                  })
                  .attr("title", function() {
                    return d.SchriftspurSchreibhand
                  })
                  .attr("width", detailCircleScale(scrollTop))
                  .attr("height", detailCircleScale(scrollTop))
                  .attr("class", "schreibhandIcon")
                  .attr("x", transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3)
                  .attr("y", thisTranscriptY + transcriptFontSize(scrollTop) - 6 - (detailCircleScale(scrollTop) / 2))


                ////line between transcript and rect
                transcriptions.append("path")
                .style("pointer-events", "none")
                  .style("stroke", "white")
                  .style("stroke-width", 1)
                  .style("opacity", .7)
                  .style("fill", "none")
                  //.style("stroke-dasharray", "1,2")
                  .attr("d", function(d, i) {
                    var line = d3.line().curve(d3.curveBasis)
                    var data = [
                      [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                      [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - transcriptLinePos, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                      [8 * selectedBookScale(scrollTop) + transcriptLinePos, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                      [8 * selectedBookScale(scrollTop), thisTranscriptY + 15]
                    ];

                    return line(data)
                  })

              }
            })

          d3.selectAll(".transcriptions").selectAll("path")
            .style("opacity", transcriptPathScaleOpacity(scrollTop))

        }



        //////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////
        /////////////////////////////
        /////bookClick Function Ende



        //////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////
        /////////////////////////////
        /////bookhash selection Function Anfang

        function bookClickHash(data) {
          //      d3.select("#svgFrontTitles").style("display", "none")
          ///Trigger animation in Canvas
          transitions = true

          ///Stop animation in Canvas
          setTimeout(function() {
            transitions = false
          }, 20000);

          ///Hide Background for Author Group
          authorGroup.selectAll("rect").attr("display", "none")


          ///create array thisData that only includes pages with Benutzungsspuren
          thisData = data

          ///set a selection based on ID
          //clickedBook = d3.select(this).datum().values[0].BookID

          ///create Variable that counts number of "Schriftspuren" on one page
          var maxX = 0

          ///create variable that helps to position the books
          var posX = 0



          ////Create Scale for book/page width, based on scroll position
          var selectedBookScale = d3.scaleLinear()
            .domain([0, 3000])
            .range([selectedBookBuchlevel, selectedBookSeitenlevel])
            .clamp(true)

          var unselectedBookSameAuthorScale = d3.scaleLinear()
            .domain([0, 3000])
            .range([unselectedBookSameAuthorBuchlevel, unselectedBookSameAuthorSeitenlevel])
            .clamp(true)

          var unselectedBookScale = d3.scaleLinear()
            .domain([0, 3000])
            .range([unselectedBookBuchlevel, unselectedBookSeitenlevel])
            .clamp(true)

          var BuchauswahlFeldScale = d3.scaleLinear()
            .domain([0, 3000])
            .range([BuchauswahlFeld, BuchauswahlFeldSeitenFeld])
            .clamp(true)

          var onSelectionAuthorAbstand = ((chartArea + mysteryVar + 20) - BuchauswahlFeldScale(scrollTop) - ((BuchAnzahl - 1) * onSelectionBuchAbstandScale(scrollTop))) / (authorAnzahl -
            1) //-100 muss eventuell raus? warum die benötigt werden ist un klar


          bookFingerprint.selectAll(".nodes")
            .filter(function(d, i) {
              return d.BookID != clickedBook
            })
            .transition()
            .duration(500)
            .attr("width", function(d) {
              return unselectedBookScale(scrollTop)
            })

            .attr("x", 0)




          bookFingerprint.selectAll(".nodes")
            .filter(function(d, i) {
              return d.BookID == clickedBook
            })
            .transition()
            .duration(500)
            .attr("width", function(d) {
              return selectedBookScale(scrollTop)
            })
            .attr("x", function(d, i) {
              if (i > 5 && thisData[i - 6].ID == d.ID) {
                //  maxX = (Math.max(maxX, 7))
                return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 6
              } else if (i > 4 && thisData[i - 5].ID == d.ID) {
                //    maxX = (Math.max(maxX, 6))
                return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 5
              } else if (i > 3 && thisData[i - 4].ID == d.ID) {
                //    maxX = (Math.max(maxX, 5))
                return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 4
              } else if (i > 2 && thisData[i - 3].ID == d.ID) {
                //    maxX = (Math.max(maxX, 4))
                return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 3
              } else if (i > 1 && thisData[i - 2].ID == d.ID) {
                //  maxX = (Math.max(maxX, 3))
                return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 2
              } else if (i != 0 && thisData[i - 1].ID == d.ID) {
                //  maxX = (Math.max(maxX, 2))
                return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop)
              } else {
                //      maxX = (Math.max(maxX, 1))
                return 7 * selectedBookScale(scrollTop)
              }
            })

          bookFingerprint.selectAll(".nodesbg")
            .transition()
            .duration(500)
            .attr("width", function(d) {
              if (d.values[0].BookID == clickedBook) {
                return selectedBookScale(scrollTop)
              } else {
                return unselectedBookScale(scrollTop)
              }
            })
            .attr("x", function(d) {
              if (d.values[0].BookID == clickedBook) {
                return 7 * selectedBookScale(scrollTop)
              } else {
                return 0
              }
            })

          var thisBookPosition = 0

          bookFingerprint
            .transition()
            .duration(500)
            .attr("transform", function(d, i) {
              if (i == 0) {
                posx = 0
                return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
              } else if (i != 0 && datenByTitle[i - 1].values[0].BookID == clickedBook) {
                thisBookPosition = posx + 83
                posx = posx + BuchauswahlFeldScale(scrollTop)
                return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
              } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
                posx = posx + onSelectionAuthorAbstand
                return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
              } else {
                posx = posx + onSelectionBuchAbstandScale(scrollTop)
                return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
              }
            })


          bookG
            .transition()
            .duration(500)
            .attr("transform", function(d, i) {
              if (i == 0) {
                posx = 0
                return "translate(" + (marginleft - 2 + (posx)) + "," + (posY) + ")"
              } else if (i != 0 && datenByTitle[i - 1].values[0].BookID == clickedBook) {
                posx = posx + BuchauswahlFeldScale(scrollTop)
                return "translate(" + (marginleft - 2 + (posx)) + "," + (posY) + ")"
              } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
                posx = posx + onSelectionAuthorAbstand
                return "translate(" + (marginleft - 2 + (posx)) + "," + (posY) + ")"
              } else {
                posx = posx + onSelectionBuchAbstandScale(scrollTop)
                return "translate(" + (marginleft - 2 + (posx)) + "," + (posY) + ")"
              }
            })


          d3.selectAll(".bookTitleFrontG")
            .attr("transform", function(d, i) {
              if (i == 0) {
                posx = 0
                return "translate(" + (marginleft + (posx) - 40.5) + "," + (posY) + ")"
              } else if (i != 0 && datenByTitle[i - 1].values[0].BookID == clickedBook) {
                posx = posx + BuchauswahlFeldScale(scrollTop)
                return "translate(" + (marginleft + (posx) - 40.5) + "," + (posY) + ")"
              } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
                posx = posx + onSelectionAuthorAbstand
                return "translate(" + (marginleft + (posx) - 40.5) + "," + (posY) + ")"
              } else {
                posx = posx + onSelectionBuchAbstandScale(scrollTop)
                return "translate(" + (marginleft + (posx) - 40.5) + "," + (posY) + ")"
              }
            })





          //    .selectAll("rect")

          //    d3.selectAll(".bookBG").attr("opacity", 1)


          bookG.selectAll(".bookBG")
            .transition()
            //.delay(50)
            .duration(500)
            .style("opacity", 0)
            .attr("width", function(d) {
              if (d.values[0].BookID == clickedBook) {
                return BuchauswahlFeldScale(scrollTop)
              } else {
                return buchBreite
              }
            })
            .filter(function(d) {
              return d.values[0].BookID == clickedBook
            })
            .style("fill", "#d9c2b2")
            .style("opacity", 0.3)


          d3.selectAll(".BuchTitel").remove()


          d3.selectAll(".detailInfoParent")
            .remove()

          detailview = true
          ///Detailinfo bei Klick einblenden
          var detailInfoParent = (d3.select("#svg").selectAll(".bookBGsvg").filter(function(d) {
            return d.key == clickedBook
          })).append("g").attr("class", "detailInfoParent")


          var detailInfo = detailInfoParent.append("g")


          d3.select(".detailDiv").remove()

          var detailDiv = d3.select("body").append("div").attr("class", "detailDiv").style("position", "fixed").style("display", "block")
            .style("top", 270 + "px")
            .style("width", detailPicWidth + "px")
            .style("height", "700px")
            .style("transform", "scale(0, 1)")
            .style("transform-origin", "0 0")
            .style("left", thisBookPosition + marginleft + 8 * selectedBookScale(scrollTop) + "px")
            .style("opacity", function(d) {
              return detailInfoScale(scrollTop)
            })


          detailDiv
            .transition()
            .duration(600)
            .style("transform", "scale(1, 1)")
            .style("left", thisBookPosition + marginleft + 38 + 9 * selectedBookScale(scrollTop) + "px")

          var detailInfoData = data[0]
          var bookcover = data[0].ID


          detailDiv.append("img")
            .attr("src", function(d) {
              return "./img/m/" + bookcover + ".jpg"
            })
            .style("display", "block")
            .style("width", detailPicWidth + "px")
            .style("height", "auto")
            .style("margin-bottom", "10px")

        var detailVerfasser =  detailDiv.append("p")
              .text("Verfasser: ")

              detailVerfasser.append("span")
              .text(function(d) {
                return korpus.filter(function(D, I) {
                  return D.KurzSignatur == detailInfoData.BookID
                })[0].Verfasser
              })
              .attr("class", "detailDivData")

              detailVerfasser.filter(function(d){return korpus.filter(function(D, I) {
                return D.KurzSignatur == detailInfoData.BookID
              })[0].Verfasser == "null"})
              .remove()

          var detailHerausgeber = detailDiv.append("p").text("Herausgeber: ")

          detailHerausgeber.append("span")
          .text(function(d) {
            return korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Herausgeber
          })
          .attr("class", "detailDivData")

          detailHerausgeber.filter(function(d){return korpus.filter(function(D, I) {
            return D.KurzSignatur == detailInfoData.BookID
          })[0].Herausgeber == "null"})
          .remove()




          var detailVerlag = detailDiv.append("p").text("Verlag: ")

          detailVerlag .append("span")
          .text(function(d) {
              return korpus.filter(function(D, I) {
                return D.KurzSignatur == detailInfoData.BookID
              })[0].Verlag
          })
          .attr("class", "detailDivData")

          detailVerlag.filter(function(d){return korpus.filter(function(D, I) {
            return D.KurzSignatur == detailInfoData.BookID
          })[0].Verlag == "null"})
          .remove()


          var detailGenre = detailDiv.append("p").text("Genre: ")

          detailGenre.append("span")
          .text(function(d) {
              return korpus.filter(function(D, I) {
                return D.KurzSignatur == detailInfoData.BookID
              })[0].Formalschlagwort_Genre
          })
          .attr("class", "detailDivData")

          detailGenre.filter(function(d){return korpus.filter(function(D, I) {
            return D.KurzSignatur == detailInfoData.BookID
          })[0].Formalschlagwort_Genre == "null"})
          .remove()


          var detailDatierung = detailDiv.append("p").text("Datierung: ")

          detailDatierung.append("span")
          .text(function(d) {
              return  korpus.filter(function(D, I) {
                return D.KurzSignatur == detailInfoData.BookID
              })[0].Jahr
          })
          .attr("class", "detailDivData")

          detailDatierung.filter(function(d){return korpus.filter(function(D, I) {
            return D.KurzSignatur == detailInfoData.BookID
          })[0].Jahr == "null"})
          .remove()



          var detailOrt = detailDiv.append("p").text("Ort: ").style("margin-bottom", "10px")
          detailOrt.append("span")
          .text(function(d) {
              return  korpus.filter(function(D, I) {
                return D.KurzSignatur == detailInfoData.BookID
              })[0].Ort
          })
          .attr("class", "detailDivData")

          detailOrt.filter(function(d){return korpus.filter(function(D, I) {
            return D.KurzSignatur == detailInfoData.BookID
          })[0].Ort == "null"})
          .remove()



          var detailSeitenzahl = detailDiv.append("p").text("Seitenzahl: ").style("font-weight", "normal")

          detailSeitenzahl.append("span")
          .text(function(d) {
            return detailInfoData.maxPart})
          .style("font-weight", "bold")
          .attr("class", "detailDivData")



          var detailEigentumsangaben= detailDiv.append("p").attr("class", "eigentumsangaben")
          .text("Provenienzangaben: ")
          .style("font-weight", "normal")

          detailEigentumsangaben.append("span")
          .text(function(d) {
            return thisData.filter(function(d) {
              return d.SchriftspurTyp == "P"
            }).length})
          .style("font-weight", "bold")
          .attr("class", "detailDivData")

          detailEigentumsangaben.filter(function(d){return +thisData.filter(function(d) {
            return d.SchriftspurTyp == "P"
          }).length == 0 }).remove()


          var detailMarginalien = detailDiv.append("p").attr("class", "marginalien").text("Marginalien: ").style("font-weight", "normal")

          detailMarginalien.append("span")
          .text(function(d) {
            return thisData.filter(function(d) {
              return (d.Benutzungsspur == "5" && d.SchriftspurTyp != "P") || (d.Benutzungsspur == "5?" && d.SchriftspurTyp != "P")
            }).length
          }).style("font-weight", "bold")

          detailMarginalien
          .filter(function(d){ return +thisData.filter(function(d) {
              return (d.Benutzungsspur == "5" && d.SchriftspurTyp != "P") || (d.Benutzungsspur == "5?" && d.SchriftspurTyp != "P")
            }).length == 0}).remove()




          var detailMarkierungen = detailDiv.append("p").attr("class", "markierungen").text("Markierungen: ")
          .style("font-weight", "normal")

          detailMarkierungen.append("span")
          .text(function(d) {
            return thisData.filter(function(d) {
              return d.Benutzungsspur == "1" || d.Benutzungsspur == "1?" ||
                d.Benutzungsspur == "2" || d.Benutzungsspur == "2?" ||
                d.Benutzungsspur == "3" || d.Benutzungsspur == "3?" ||
                d.Benutzungsspur == "4" || d.Benutzungsspur == "4?"
            }).length
          }).style("font-weight", "bold")


          detailMarkierungen.filter(function(d){return +thisData.filter(function(d) {
            return d.Benutzungsspur == "1" || d.Benutzungsspur == "1?" ||
              d.Benutzungsspur == "2" || d.Benutzungsspur == "2?" ||
              d.Benutzungsspur == "3" || d.Benutzungsspur == "3?" ||
              d.Benutzungsspur == "4" || d.Benutzungsspur == "4?"
          }).length == 0}).remove()




          var detailZusatzMaterial = detailDiv.append("p").attr("class", "zusatzMaterial").text("Zusätzliches Material: ")
          .style("font-weight", "normal").style("pointer-events", "none")

          detailZusatzMaterial.append("span").text(function(d) {
            return thisData.filter(function(d) {
              return d.Benutzungsspur == "6" || d.Benutzungsspur == "6?"
            }).length
          }).style("font-weight", "bold")

          detailZusatzMaterial.filter(function(d){return +thisData.filter(function(d) {
            return d.Benutzungsspur == "6" || d.Benutzungsspur == "6?"
          }).length == 0}).remove()


          var detrailAnderes = detailDiv.append("p").attr("class", "anderes").text("Anderes: ").style("font-weight", "normal").style("pointer-events", "none")

          detrailAnderes.append("span").text(function(d) {
            return thisData.filter(function(d) {
              return d.Benutzungsspur == "7" || d.Benutzungsspur == "7?"
            }).length
          }).style("font-weight", "bold")

          detrailAnderes.filter(function(d){return +thisData.filter(function(d) {
            return d.Benutzungsspur == "7" || d.Benutzungsspur == "7?"
          }).length == 0}).remove()


          detailInfo.attr("class", "detailinfo")
            .attr("transform", "scale(0,1)")
            .transition()
            .duration(600)
            .attr("transform", "scale(1,1)")







          detailInfo.append("text")
            .attr("class", "detail_titel")
            .text(function(d) {
              if (korpus.filter(function(D, I) {
                  return D.KurzSignatur == d.values[0].BookID
                })[0]) {
                if (korpus.filter(function(D, I) {
                    return D.KurzSignatur == d.values[0].BookID
                  })[0].Kurztitel.length > 70) {
                  return (korpus.filter(function(D, I) {
                    return D.KurzSignatur == d.values[0].BookID
                  })[0].Kurztitel).substring(0, 70) + " [...]" + "  \u2715"
                } else {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == d.values[0].BookID
                  })[0].Kurztitel + "  \u2715"
                }
              }
            })
            .attr("y", -5)
            .attr("dy", 0)
            .style("cursor", "pointer")
            .style("pointer-events", "auto")
            .style("font-size", "1em")
            .attr("text-anchor", "middle")
            .on("click", function() {
              clickedBook = 0
              detailview = false
              scrollTop = scrollTop + 1

              scrollFunction()
              d3.selectAll(".detailInfoParent")
                .transition()
                .style("opacity", 0)
                .remove()

              d3.selectAll(".detailDiv").transition()
                .style("opacity", 0)
                .remove()

              d3.selectAll(".bookBG").selectAll("rect")
                .transition()
                .style("opacity", 0)

              bookFingerprint.selectAll(".nodesbg").attr("x", "0")
              setTimeout(function() {
                window.scrollTo(0, 3000)
              }, 10)
            })
            .attr("x", BuchauswahlFeldScale(scrollTop) / 2)
            .call(wrapUp, BuchauswahlFeld - 30)
            .selectAll("tspan")
            .attr("x", BuchauswahlFeldScale(scrollTop) / 2)
            .attr("text-anchor", "middle")




          var detailTranscriptScale = d3.scaleLinear()
            .domain([-0.01, 0, 380])
            .range([0, 1, 1])
            .clamp(true)

          var transcriptions = detailInfoParent.append("g").attr("clip-path", "url(#transcript-clip)").append("g").classed("transcriptions", true).attr("opacity", function(d) {
            return detailTranscriptScale(scrollTop)
          })

          var transcriptData = thisData.filter(function(d) {
            return d.SchriftspurTranskription != "null"
          })

          var explicateScale2 = d3.scaleLinear()
            .domain([500, 2500])
            .range([pageheight, 31])
            .clamp(true)
          //var lasttranscripty = 0

          // var transcriptFontSize = d3.scaleLinear()
          //     .domain([500, 3000])
          //     .range([1.5, 12])
          //     .clamp(true)
          //


          transcriptions.selectAll("text")
            .data(transcriptData)
            .enter()
            .append("text")
            .text(function(d) {
              return d.SchriftspurTranskription
            })
            .style("font-size", fontsize + "px")
            .attr("x", transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) + 10)
            .attr("y", function(d, i) {
              if (i == 0) {
                return transcriptYStart(scrollTop) + (explicateScale2(scrollTop)) * d.Part
              } else {
                return transcriptYStart(scrollTop) + (explicateScale2(scrollTop)) * d.Part
              }
            })
            .attr("dy", 0)
            .attr("dx", 0)
            .attr("class", function(d, i) {
              if (d.Schreibmedium == "Stempel") {
                return "stempel"
              } else {
                return "handschrift"
              }
            })
            .classed("transcriptText", true)
            // .style("fill", function(d){if(d.Schreibmedium == "Bleistift" || d.Schreibmedium == "Bleistift?"){return "grey"}else if(d.Schreibmedium == "Tinte" || d.Schreibmedium == "Tinte?"){return "black"}
            // else if(d.Schreibmedium == "roter Buntstift" || d.Schreibmedium == "roter Buntstift?"){return "red"}  else if(d.Schreibmedium == "lila Buntstift"){return "DarkOrchid"}
            // else if(d.Schreibmedium == "blauer Buntstift"){return "blue"}})
            .text(function(d, i) {
              return d.SchriftspurTranskription
            })
            .call(wraptext, transcripttextwrap)
            .selectAll("tspan")
            .attr("x", transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) + 10)

          transcriptions.selectAll("text").classed("transcriptionText", true).style("font-size", function() {
              return transcriptFontSize(scrollTop) + "px"
            })
            .on("mouseover", function(d, i) {
              d3.event.stopPropagation()

              d3.select('.tooltip')
                .style("display", "block")
                .style('top', d3.event.pageY - 100 + 'px')
                .style('left', function() {
                  if (d3.event.pageX < width / 2) {
                    return d3.event.pageX + 25 + 'px'
                  } else {
                    return d3.event.pageX - 250 + 'px'
                  }
                })

              tooltip.select("img").attr("src", function() {
                return "./img/m/" + d.ID + ".jpg"
              })
            })
            .on("click", function(d, i) {
              var thisPageID = d.ID
              var thisBookID = d.BookID

              d3.select("#detailview").selectAll("img").remove()
              d3.select("#detailview").selectAll("table").remove()

              d3.select("#overlay").style("display", "block").transition().duration(600).style("opacity", .5)
              d3.select("#detailview").style("display", "block").transition().duration(600).style("opacity", 1)
              d3.select("#detailview").append("img").attr("src", "./img/m/" + thisPageID + ".jpg")

              var detailviewTable = d3.select("#detailview").append("table").attr("id", "detailviewTable")

              var detailviewTableTr1 = detailviewTable.append("tr")
              var detailviewTableTr2 = detailviewTable.append("tr")
              var detailviewTableTr3 = detailviewTable.append("tr")
              var detailviewTableTr4 = detailviewTable.append("tr")
              var detailviewTableTr5 = detailviewTable.append("tr")
              var detailviewTableTr6 = detailviewTable.append("tr")
              var detailviewTableTr7= detailviewTable.append("tr")
              var detailviewTableTr8 = detailviewTable.append("tr")
              var detailviewTableTr9 = detailviewTable.append("tr")

              detailviewTableTr1.append("td").text("Buchtitel: ")
              detailviewTableTr1.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Titel
                })

              detailviewTableTr2.append("td").text("Verfasser: ")
              detailviewTableTr2.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Verfasser
                })

              detailviewTableTr3.append("td").text("Herausgeber: ")
              detailviewTableTr3.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Herausgeber
                })

              detailviewTableTr4.append("td").text("Verlag: ")
              detailviewTableTr4.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Verlag
                })

              detailviewTableTr5.append("td").text("Genre: ")
              detailviewTableTr5.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Formalschlagwort_Genre
                })

              detailviewTableTr6.append("td").text("Ort: ")
              detailviewTableTr6.append("td").text(function(d) {
                  return korpus.filter(function(D, I) {
                    return D.KurzSignatur == thisBookID
                  })[0].Ort
                })

                detailviewTableTr7.append("td").text("Datierung: ")
                detailviewTableTr7.append("td").text(function(d) {
                    return korpus.filter(function(D, I) {
                      return D.KurzSignatur == thisBookID
                    })[0].Jahr
                  })



              detailviewTableTr8.append("td").text("Seiten-ID: ")
              detailviewTableTr8.append("td").text(thisPageID)
              // window.open(
              //   "./img/m/" + d.ID + ".jpg",
              //   '_blank' // <- This is what makes it open in a new window.
              // )
            })


          d3.selectAll(".transcriptionText")
            .each(function(d, i) {
              if (i > 0) {
                var thisTranscriptY = d3.select(this).node().getBBox().y //d3.select(this).node().getBBox().y
                var lastTranscriptMaxY = d3.selectAll(".transcriptionText").filter(function(D, I) {
                  return I == i - 1
                }).node().getBBox().y + d3.selectAll(".transcriptionText").filter(function(D, I) {
                  return I == i - 1
                }).node().getBBox().height

                if (thisTranscriptY <= lastTranscriptMaxY) {
                  d3.select(this)
                    .attr("y", function() {
                      return lastTranscriptMaxY + transcriptFontSize(scrollTop)
                    })
                    .selectAll("tspan").attr("y", function() {
                      return lastTranscriptMaxY + transcriptFontSize(scrollTop)
                    })

                  transcriptions.append("image")
                    .attr("xlink:href", function() {
                      if (d.SchriftspurSchreibhand == "Theodor Fontane") {
                        return "icons/icon_fontaneA.svg"
                      } else if (d.SchriftspurSchreibhand == "?Theodor Fontane?") {
                        return "icons/icon_fontaneB.svg"
                      } else if (d.SchriftspurSchreibhand == "Unbekannt" || d.SchriftspurSchreibhand == "unbekannt" || d.SchriftspurSchreibhand == "null") {
                        return "icons/icon_unbekannt.svg"
                      } else {
                        return "icons/icon_andereA.svg"
                      }
                    })
                    .attr("width", detailCircleScale(scrollTop))
                    .attr("height", detailCircleScale(scrollTop))
                    .attr("title", function() {
                      return d.SchriftspurSchreibhand
                    })
                    .attr("class", "schreibhandIcon")
                    .attr("x", transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3)
                    .attr("y", lastTranscriptMaxY + transcriptFontSize(scrollTop) - 3 - (detailCircleScale(scrollTop) / 2))


                  ////line between transcript and rect
                  transcriptions.append("path")
                  .style("pointer-events", "none")
                    .style("stroke", "white")
                    .style("stroke-width", 1)
                    .style("opacity", .7)
                    .style("fill", "none")
                    //.style("stroke-dasharray", "1,2")
                    .attr("d", function(d, i) {
                      var line = d3.line().curve(d3.curveBasis)
                      var data = [
                        [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3, lastTranscriptMaxY + transcriptFontSize(scrollTop) - 3],
                        [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - transcriptLinePos, lastTranscriptMaxY + transcriptFontSize(scrollTop) - 3],
                        [8 * selectedBookScale(scrollTop) + transcriptLinePos, thisTranscriptY + 15],
                        [8 * selectedBookScale(scrollTop), thisTranscriptY + 15]
                      ];

                      return line(data)
                    })


                } else {
                  transcriptions.append("image")
                    .attr("xlink:href", function() {
                      if (d.SchriftspurSchreibhand == "Theodor Fontane") {
                        return "icons/icon_fontaneA.svg"
                      } else if (d.SchriftspurSchreibhand == "?Theodor Fontane?") {
                        return "icons/icon_fontaneB.svg"
                      } else if (d.SchriftspurSchreibhand == "Unbekannt" || d.SchriftspurSchreibhand == "unbekannt" || d.SchriftspurSchreibhand == "null") {
                        return "icons/icon_unbekannt.svg"
                      } else {
                        return "icons/icon_andereA.svg"
                      }
                    })
                    .attr("title", function() {
                      return d.SchriftspurSchreibhand
                    })
                    .attr("width", detailCircleScale(scrollTop))
                    .attr("height", detailCircleScale(scrollTop))
                    .attr("class", "schreibhandIcon")
                    .attr("x", transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3)
                    .attr("y", thisTranscriptY + transcriptFontSize(scrollTop) - 6 - (detailCircleScale(scrollTop) / 2))

                  ////line between transcript and rect
                  transcriptions.append("path")
                  .style("pointer-events", "none")
                    .style("stroke", "white")
                    .style("stroke-width", 1)
                    .style("opacity", .7)
                    .style("fill", "none")
                    //.style("stroke-dasharray", "1,2")
                    .attr("d", function(d, i) {
                      var line = d3.line().curve(d3.curveBasis)
                      var data = [
                        [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                        [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - transcriptLinePos, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                        [8 * selectedBookScale(scrollTop) + transcriptLinePos, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                        [8 * selectedBookScale(scrollTop), thisTranscriptY + 15]
                      ];

                      return line(data)
                    })



                }

              } else {
                var thisTranscriptY = d3.select(this).node().getBBox().y

                transcriptions.append("image")
                  .attr("xlink:href", function() {
                    if (d.SchriftspurSchreibhand == "Theodor Fontane") {
                      return "icons/icon_fontaneA.svg"
                    } else if (d.SchriftspurSchreibhand == "?Theodor Fontane?") {
                      return "icons/icon_fontaneB.svg"
                    } else if (d.SchriftspurSchreibhand == "Unbekannt" || d.SchriftspurSchreibhand == "unbekannt" || d.SchriftspurSchreibhand == "null") {
                      return "icons/icon_unbekannt.svg"
                    } else {
                      return "icons/icon_andereA.svg"
                    }
                  })
                  .attr("title", function() {
                    return d.SchriftspurSchreibhand
                  })
                  .attr("width", detailCircleScale(scrollTop))
                  .attr("height", detailCircleScale(scrollTop))
                  .attr("class", "schreibhandIcon")
                  .attr("x", transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3)
                  .attr("y", thisTranscriptY + transcriptFontSize(scrollTop) - 6 - (detailCircleScale(scrollTop) / 2))


                ////line between transcript and rect
                transcriptions.append("path")
                .style("pointer-events", "none")
                  .style("stroke", "white")
                  .style("stroke-width", 1)
                  .style("opacity", .7)
                  .style("fill", "none")
                  //.style("stroke-dasharray", "1,2")
                  .attr("d", function(d, i) {
                    var line = d3.line().curve(d3.curveBasis)
                    var data = [
                      [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                      [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - transcriptLinePos, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                      [8 * selectedBookScale(scrollTop) + transcriptLinePos, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                      [8 * selectedBookScale(scrollTop), thisTranscriptY + 15]
                    ];

                    return line(data)
                  })

              }
            })
          //each ende



          d3.selectAll(".transcriptions").selectAll("path")
            .style("opacity", transcriptPathScaleOpacity(scrollTop))

        }



        //////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////
        /////////////////////////////
        /////bookHashSelection Function Ende






        ////////// Text-Wrap Function Anfang///
        ///////////////////////////////////////
        ///////////////////////////////////////

        function wrap(text, width) {

          text.each(function() {
            var lineNumber = 0
            var text = d3.select(this),
              words = text.text().split(/\s+/).reverse(),
              word,
              line = []

            var lineHeight = 1.1, // ems
              y = text.attr("y"),
              dy = parseFloat(text.attr("dy")),
              tspan = text.text(null).append("tspan").attr("y", y).attr("dy", dy + "em")


            while (word = words.pop()) {
              line.push(word);
              tspan.text(line.join(" "));
              if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                lineNumber = lineNumber + 1
                tspan = text.append("tspan").attr("y", y).attr("dy", lineNumber * lineHeight + dy + "em").text(word);
              }
            }

          });

        }


        function wrapUp(text, width) {
          text.each(function() {
            var text = d3.select(this),
              words = text.text().split(/\s+/).reverse(),
              word,
              line = [],
              lineNumber = 0,
              lineHeight = 1.1, // ems
              y = text.attr("y"),
              dy = parseFloat(text.attr("dy")),
              tspan = text.text(null).append("tspan").attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
              line.push(word);
              tspan.text(line.join(" "));
              if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                lineNumber = lineNumber + 1

                tspan = text.append("tspan")
                  //  .attr("y", function(d,i){if(lineNumber >= 0 ){return y-40} else {return y}})
                  .attr("y", y)
                  .attr("dy", lineNumber * lineHeight + "em").text(word);
              }
            }

            var tspanCount = text.selectAll("tspan").size();
            text.attr("transform", "translate(" + 0 + "," + -((tspanCount - 1) * 15) + ")");
          });
        }


        /////Text
        ////Text-Wrap function
        function wraptext(text, width) {
          text.each(function() {
            var text = d3.select(this),
              words = text.text().split(/\s+/).reverse(),
              word,
              line = [],
              lineNumber = 0,
              lineHeight = 1.1, // ems
              y = text.attr("y"),
              dy = parseFloat(text.attr("dy")),
              tspan = text.text(null).append("tspan").attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
              line.push(word);
              tspan.text(line.join(" "));
              if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
              }
            }
          });
        }



        ////////// Text-Wrap Function Ende/////
        ///////////////////////////////////////
        ///////////////////////////////////////









        ////////// Filter Interaction///////////
        ///////////////////////////////////////
        ///////////////////////////////////////


        d3.select("h1").on("click", function() {
          transitions = true
          setTimeout(function() {
            transitions = false
          }, 1000);
          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 1)
        })

        function filterInteraction() {
          transitions = true
          setTimeout(function() {
            transitions = false
          }, 2000);
          dataContainer.selectAll(".nodesbg").attr("fill", "white")
          $("#search").val('').trigger('change')

          if (filter == null) {


            areachart.selectAll("path").classed("filtered", false).classed("eingefaltet", true)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 1)

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "P" && d.Schreibmedium != "Stempel"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#5B5B5B")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "P" && d.Schreibmedium == "Stempel"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#5B5B5B")


            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.Benutzungsspur === "1" || d.Benutzungsspur === "1?"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#58b0f7")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.Benutzungsspur === "2" || d.Benutzungsspur === "2?"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#58b0f7")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.Benutzungsspur === "3" || d.Benutzungsspur === "3?"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#58b0f7")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.Benutzungsspur === "4" || d.Benutzungsspur === "4?"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#58b0f7")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.Benutzungsspur === "6" || d.Benutzungsspur === "6?"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "rgb(210, 164, 0)")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "B"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#f73f26")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "K"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#f73f26")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "T"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#f73f26")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "V"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#f73f26")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "U"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#f73f26")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.Benutzungsspur === "7" || d.Benutzungsspur === "7?"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#f284c0")

          } else if (filter == "Fontane") {

            areachart.selectAll("path").classed("filtered", true).filter(".schreibhandFontane").classed("filtered", false)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurSchreibhand == "Theodor Fontane" || d.SchriftspurSchreibhand == "?Theodor Fontane?"
              })
              .filter(function(d) {
                return d.SchriftspurTyp == "B"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#dd0000")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurSchreibhand == "Theodor Fontane" || d.SchriftspurSchreibhand == "?Theodor Fontane?"
              })
              .filter(function(d) {
                return d.SchriftspurTyp == "K"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#FF8A5D")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurSchreibhand == "Theodor Fontane" || d.SchriftspurSchreibhand == "?Theodor Fontane?"
              })
              .filter(function(d) {
                return d.SchriftspurTyp == "T"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#8D084E")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurSchreibhand == "Theodor Fontane" || d.SchriftspurSchreibhand == "?Theodor Fontane?"
              })
              .filter(function(d) {
                return d.SchriftspurTyp == "V"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#FD9698")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurSchreibhand == "Theodor Fontane" || d.SchriftspurSchreibhand == "?Theodor Fontane?"
              })
              .filter(function(d) {
                return d.SchriftspurTyp == "U"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#d93168")



          } else if (filter == "Familie") {

            areachart.selectAll("path").classed("filtered", true).filter(".schreibhandFamilie").classed("filtered", false)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurSchreibhand == "Emilie Fontane" || d.SchriftspurSchreibhand == "?Emilie Fontane?" ||
                  d.SchriftspurSchreibhand == "Friedrich Fontane" || d.SchriftspurSchreibhand == "?Friedrich Fontane?" ||
                  d.SchriftspurSchreibhand == "Georg Fontane" || d.SchriftspurSchreibhand == "Georg Fontane?" ||
                  d.SchriftspurSchreibhand == "Theodor Fontane jr."
              })
              .filter(function(d) {
                return d.SchriftspurTyp == "B"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#dd0000")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurSchreibhand == "Emilie Fontane" || d.SchriftspurSchreibhand == "?Emilie Fontane?" ||
                  d.SchriftspurSchreibhand == "Friedrich Fontane" || d.SchriftspurSchreibhand == "?Friedrich Fontane?" ||
                  d.SchriftspurSchreibhand == "Georg Fontane" || d.SchriftspurSchreibhand == "Georg Fontane?" ||
                  d.SchriftspurSchreibhand == "Theodor Fontane jr."
              })
              .filter(function(d) {
                return d.SchriftspurTyp == "K"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#FF8A5D")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurSchreibhand == "Emilie Fontane" || d.SchriftspurSchreibhand == "?Emilie Fontane?" ||
                  d.SchriftspurSchreibhand == "Friedrich Fontane" || d.SchriftspurSchreibhand == "?Friedrich Fontane?" ||
                  d.SchriftspurSchreibhand == "Georg Fontane" || d.SchriftspurSchreibhand == "Georg Fontane?" ||
                  d.SchriftspurSchreibhand == "Theodor Fontane jr."
              })
              .filter(function(d) {
                return d.SchriftspurTyp == "T"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#8D084E")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurSchreibhand == "Emilie Fontane" || d.SchriftspurSchreibhand == "?Emilie Fontane?" ||
                  d.SchriftspurSchreibhand == "Friedrich Fontane" || d.SchriftspurSchreibhand == "?Friedrich Fontane?" ||
                  d.SchriftspurSchreibhand == "Georg Fontane" || d.SchriftspurSchreibhand == "Georg Fontane?" ||
                  d.SchriftspurSchreibhand == "Theodor Fontane jr."
              })
              .filter(function(d) {
                return d.SchriftspurTyp == "V"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#FD9698")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurSchreibhand == "Emilie Fontane" || d.SchriftspurSchreibhand == "?Emilie Fontane?" ||
                  d.SchriftspurSchreibhand == "Friedrich Fontane" || d.SchriftspurSchreibhand == "?Friedrich Fontane?" ||
                  d.SchriftspurSchreibhand == "Georg Fontane" || d.SchriftspurSchreibhand == "Georg Fontane?" ||
                  d.SchriftspurSchreibhand == "Theodor Fontane jr."
              })
              .filter(function(d) {
                return d.SchriftspurTyp == "U"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#d93168")



          } else if (filter == "eigentumsangaben") {

            areachart.selectAll("path").classed("filtered", true).filter(".provenienz,.provenienzstempel").classed("filtered", false)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "P" && d.Schreibmedium != "Stempel"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#494747")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "P" && d.Schreibmedium == "Stempel"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#828282")
          } else if (filter == "provenienz") {

            areachart.selectAll("path").classed("filtered", true).filter(".provenienz").classed("filtered", false)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "P" && d.Schreibmedium != "Stempel"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#494747")


          } else if (filter == "provenienzstempel") {

            areachart.selectAll("path").classed("filtered", true).filter(".provenienzstempel").classed("filtered", false)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "P" && d.Schreibmedium == "Stempel"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#828282")

          } else if (filter == "markierungen") {

            areachart.selectAll("path").classed("filtered", true).filter(".unterstreichung,.anstreichung,.durchstreichung,.sonstigeMarkierung").classed("filtered", false)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")


            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.Benutzungsspur === "1" || d.Benutzungsspur === "1?"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#018DC9")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.Benutzungsspur === "2" || d.Benutzungsspur === "2?"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#415aff")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.Benutzungsspur === "3" || d.Benutzungsspur === "3?"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#4020d0")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.Benutzungsspur === "4" || d.Benutzungsspur === "4?"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#29D1E2")





          } else if (filter == "anstreichung") {

            areachart.selectAll("path").classed("filtered", true).filter(".anstreichung").classed("filtered", false)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.Benutzungsspur === "1" || d.Benutzungsspur === "1?"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#018DC9")


          } else if (filter == "unterstreichung") {

            areachart.selectAll("path").classed("filtered", true).filter(".unterstreichung").classed("filtered", false)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.Benutzungsspur === "2" || d.Benutzungsspur === "2?"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#415aff")
          } else if (filter == "durchstreichung") {

            areachart.selectAll("path").classed("filtered", true).filter(".durchstreichung").classed("filtered", false)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.Benutzungsspur === "3" || d.Benutzungsspur === "3?"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#4020d0")
          } else if (filter == "sonstigeMarkierung") {

            areachart.selectAll("path").classed("filtered", true).filter(".sonstigeMarkierung").classed("filtered", false)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.Benutzungsspur === "4" || d.Benutzungsspur === "4?"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#29D1E2")
          } else if (filter == "zusatzMaterial") {
            areachart.selectAll("path").classed("filtered", true).filter(".zusatzMaterial").classed("filtered", false)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.Benutzungsspur === "6" || d.Benutzungsspur === "6?"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "rgb(210, 164, 0)")

          } else if (filter == "marginalien") {
            areachart.selectAll("path").classed("filtered", true).filter(".bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").classed("filtered", false)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "B"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#dd0000")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "K"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#FF8A5D")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "T"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#8D084E")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "V"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#FD9698")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "U"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#d93168")


          } else if (filter == "bewertung") {
            areachart.selectAll("path").classed("filtered", true).filter(".bewertung").classed("filtered", false)


            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "B"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#dd0000")
          } else if (filter == "kommentar") {
            areachart.selectAll("path").classed("filtered", true).filter(".kommentar").classed("filtered", false)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "K"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#FF8A5D")
          } else if (filter == "textkorrektur") {
            areachart.selectAll("path").classed("filtered", true).filter(".textkorrektur").classed("filtered", false)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "T"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#8D084E")
          } else if (filter == "variante") {
            areachart.selectAll("path").classed("filtered", true).filter(".variante").classed("filtered", false)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "V"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#FD9698")
          } else if (filter == "uebersetzung") {
            areachart.selectAll("path").classed("filtered", true).filter(".uebersetzung").classed("filtered", false)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.SchriftspurTyp == "U"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#d93168")
          } else if (filter == "anderes") {
            areachart.selectAll("path").classed("filtered", true).filter(".anderes").classed("filtered", false)

            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.Benutzungsspur === "7" || d.Benutzungsspur === "7?"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "#f284c0")
          } else if (filter == "leer") {
            dataContainer.selectAll(".nodes")
              .attr("opacity", 0)
              .transition()
              .attr("fill", "white")

            dataContainer.selectAll(".nodes")
              .filter(function(d) {
                return d.Benutzungsspur === "null"
              })
              .attr("opacity", 1)
              .transition()
              .attr("fill", "white")
          }


        }



        ////////// Filter Interaction Ende/////
        ///////////////////////////////////////
        ///////////////////////////////////////



        function animate() {
          if (scrollTop !== newScrollTop) {
            d3.select('.tooltip')
              .style("display", "none")
          }

          if (transitions == true || scrollTop !== newScrollTop) {
            scrollTop = newScrollTop
            scrollFunction()
            draw()

          }
          window.requestAnimationFrame(animate);
        }
        window.requestAnimationFrame(animate);





        function hashFunction() {

          window.location.hash = "#level=" + scrollTop + "?filter=" + filter + "?auswahl=" + clickedBook
          d3.select("#shareInput").attr("value", window.location.href)

        }

        var fullHash = 0
        var level = "start"

        function hashLoad() {

          if (window.location.hash == "") {
            setTimeout(function() {
              window.scrollTo(0, 3000)
            }, 10);
          } else if (window.location.hash != "") {
            fullHash = window.location.hash.split("?");
            level = fullHash[0].substring(7)
            filter = fullHash[1].substring(7)
            clickedBook = fullHash[2].substring(8)

            if (clickedBook != 0) {
              thisData = datenByTitle.filter(function(d) {
                  return d.key == clickedBook
                })[0]
                .values.filter(function(d) {
                  return d.Benutzungsspur != "null" && d.Benutzungsspur != "4f" && d.Benutzungsspur != "4f?"
                })

              bookClickHash(thisData)
            }

            if (filter == "eigentumsangaben" || filter == "provenienz" || filter == "provenienzstempel") {
              //eigentumsangabenEntfaltet = true
              farbausfaltungProvenienz()
              eigentumsangaben.select("text").transition().duration(800).style("fill", "white")
              eigentumsangaben.select("rect").transition().duration(800).style("opacity", 1)

              anderes.select("text").transition().duration(800).style("fill", "#f284c0")
              zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
              marginalien.select("text").transition().duration(800).style("fill", "#f73f26")
              markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

              anderes.select("rect").transition().duration(800).style("opacity", 0)
              zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
              marginalien.select("rect").transition().duration(800).style("opacity", 0)
              markierungen.select("rect").transition().duration(800).style("opacity", 0)

              legend.selectAll(".CloseCross").style("display", "none")
              eigentumsangaben.select(".CloseCross").style("display", "none")
              eigentumsangaben.selectAll(".detail").selectAll(".CloseCross").style("display", "none")

              eigentumsangaben.selectAll("text").style("font-weight", "bold").style("opacity", 1)
              zusatzMaterial.selectAll("text").style("font-weight", "200").style("opacity", .6)
              anderes.selectAll("text").style("font-weight", "200").style("opacity", .6)
              marginalien.selectAll("text").style("font-weight", "200").style("opacity", .6)
              markierungen.selectAll("text").style("font-weight", "200").style("opacity", .6)

              eigentumsangabendetail.transition().duration(800).attr("transform", "scale(1,1)").style("opacity", 1).style("pointer-events", "auto")
              markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")

              if (filter == "provenienz") {
                eigentumsangabendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
                eigentumsangabendetail.select(".provenienz").style("font-weight", "bold").style("opacity", 1)
              } else if (filter == "provenienzstempel") {
                eigentumsangabendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
                eigentumsangabendetail.select(".provenienzstempel").style("font-weight", "bold").style("opacity", 1)
              }

              eigentumsangabendetail.transition().duration(800).attr("transform", "scale(1,1)").style("opacity", 1).style("pointer-events", "auto")
              markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")

            } else if (filter == "markierungen" || filter == "anstreichung" || filter == "unterstreichung" || filter == "durchstreichung" || filter == "sonstigeMarkierung") {
              farbausfaltungMarkierung()

              markierungen.select("text").transition().duration(800).style("fill", "white")
              markierungen.select("rect").transition().duration(800).style("opacity", 1)

              eigentumsangaben.select("text").transition().duration(800).style("fill", "#5B5B5B")
              anderes.select("text").transition().duration(800).style("fill", "#f284c0")
              zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
              marginalien.select("text").transition().duration(800).style("fill", "#f73f26")

              eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
              anderes.select("rect").transition().duration(800).style("opacity", 0)
              zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
              marginalien.select("rect").transition().duration(800).style("opacity", 0)



              legend.selectAll(".CloseCross").style("display", "none")
              markierungen.select(".CloseCross").style("display", "none")
              markierungen.selectAll(".detail").selectAll(".CloseCross").style("display", "none")

              markierungen.selectAll("text").style("font-weight", "bold").style("opacity", 1)
              zusatzMaterial.selectAll("text").style("font-weight", "200").style("opacity", .6)
              anderes.selectAll("text").style("font-weight", "200").style("opacity", .6)
              marginalien.selectAll("text").style("font-weight", "200").style("opacity", .6)
              eigentumsangaben.selectAll("text").style("font-weight", "200").style("opacity", .6)




              eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              markierungendetail.transition().duration(800).attr("transform", "scale(1,1)").style("opacity", 1).style("pointer-events", "auto")
              marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")

              if (filter == "anstreichung") {
                markierungendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
                markierungendetail.select(".anstreichung").style("font-weight", "bold").style("opacity", 1)
              } else if (filter == "unterstreichung") {
                markierungendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
                markierungendetail.select(".unterstreichung").style("font-weight", "bold").style("opacity", 1)
              } else if (filter == "durchstreichung") {
                markierungendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
                markierungendetail.select(".durchstreichung").style("font-weight", "bold").style("opacity", 1)
              } else if (filter == "sonstigeMarkierung") {
                markierungendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
                markierungendetail.select(".sonstigeMarkierung").style("font-weight", "bold").style("opacity", 1)
              }


              eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              markierungendetail.transition().duration(800).attr("transform", "scale(1,1)").style("opacity", 1).style("pointer-events", "auto")
              marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")

            } else if (filter == "marginalien" || filter == "bewertung" || filter == "kommentar" || filter == "textkorrektur" || filter == "variante" || filter == "uebersetzung") {

              farbausfaltungMarginalien()
              marginalien.select("text").transition().duration(800).style("fill", "white")
              marginalien.select("rect").transition().duration(800).style("opacity", 1)

              eigentumsangaben.select("text").transition().duration(800).style("fill", "#5B5B5B")
              anderes.select("text").transition().duration(800).style("fill", "#f284c0")
              zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
              markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

              eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
              anderes.select("rect").transition().duration(800).style("opacity", 0)
              zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
              markierungen.select("rect").transition().duration(800).style("opacity", 0)

              marginalien.selectAll("text").style("font-weight", "bold")
              marginaliendetail.transition().duration(800).attr("transform", "scale(1,1)").style("opacity", 1).style("pointer-events", "auto")
              legend.selectAll(".CloseCross").style("display", "none")
              marginalien.select(".CloseCross").style("display", "none")
              marginalien.selectAll(".detail").selectAll(".CloseCross").style("display", "none")

              marginalien.selectAll("text").style("font-weight", "bold").style("opacity", 1)
              zusatzMaterial.selectAll("text").style("font-weight", "200").style("opacity", .6)
              anderes.selectAll("text").style("font-weight", "200").style("opacity", .6)
              markierungen.selectAll("text").style("font-weight", "200").style("opacity", .6)
              eigentumsangaben.selectAll("text").style("font-weight", "200").style("opacity", .6)

              eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              marginaliendetail.transition().duration(800).attr("transform", "scale(1,1)").style("opacity", 1).style("pointer-events", "auto")

              if (filter == "bewertung") {
                marginaliendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
                marginaliendetail.select(".bewertung").style("font-weight", "bold").style("opacity", 1)
              } else if (filter == "kommentar") {
                marginaliendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
                marginaliendetail.select(".kommentar").style("font-weight", "bold").style("opacity", 1)
              } else if (filter == "textkorrektur") {
                marginaliendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
                marginaliendetail.select(".textkorrektur").style("font-weight", "bold").style("opacity", 1)
              } else if (filter == "variante") {
                marginaliendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
                marginaliendetail.select(".variante").style("font-weight", "bold").style("opacity", 1)
              } else if (filter == "uebersetzung") {
                marginaliendetail.selectAll("text").style("font-weight", "200").style("opacity", .6)
                marginaliendetail.select(".uebersetzung").style("font-weight", "bold").style("opacity", 1)
              }


              eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              marginaliendetail.transition().duration(800).attr("transform", "scale(1,1)").style("opacity", 1).style("pointer-events", "auto")



            } else if (filter == "zusatzMaterial") {
              legend.selectAll(".CloseCross").style("display", "none")
              zusatzMaterial.select(".CloseCross").style("display", "none")
              zusatzMaterial.selectAll("text").style("font-weight", "bold").style("opacity", 1)
              marginalien.selectAll("text").style("font-weight", "200").style("opacity", .6)
              markierungen.selectAll("text").style("font-weight", "200").style("opacity", .6)
              eigentumsangaben.selectAll("text").style("font-weight", "200").style("opacity", .6)
              anderes.selectAll("text").style("font-weight", "200").style("opacity", .6)


              eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
            } else if (filter == "anderes") {
              legend.selectAll(".CloseCross").style("display", "none")
              anderes.select(".CloseCross").style("display", "none")
              anderes.selectAll("text").style("font-weight", "bold").style("opacity", 1)
              zusatzMaterial.selectAll("text").style("font-weight", "200").style("opacity", .6)
              marginalien.selectAll("text").style("font-weight", "200").style("opacity", .6)
              markierungen.selectAll("text").style("font-weight", "200").style("opacity", .6)
              eigentumsangaben.selectAll("text").style("font-weight", "200").style("opacity", .6)

              eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
              marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
            }




            setTimeout(function() {
              filterInteraction()
              $("html,body").animate({
                scrollTop: +level + 3000
              }, '3000')

              // $("html,body").animate({
              //     scrollTop: +level+6000+1
              // }, '1')



            }, 500);
          }
        }









        function scrollFunction() {


          hashFunction()
          if (scrollTop < 0) {


            detailview = false

            bookG
              .selectAll("rect")
              .attr("cursor", function() {
                if (scrollTop >= 0) {
                  return "pointer"
                } else if (scrollTop < -1000 && scrollTop > -4000) {
                  return "not-allowed"
                } else {
                  return "auto"
                }
              })

            d3.select("#svgFrontTitles").style("display", "none")

          } else if (scrollTop >= -0) {
            d3.select("#svgFrontTitles").style("display", "inline")

          }


          bookG
            .selectAll("rect")
            .attr("cursor", function() {
              if (scrollTop >= 0) {
                return "pointer"
              } else if (scrollTop < -1000 && scrollTop > -2000) {
                return "not-allowed"
              } else {
                return "auto"
              }
            })
            .attr("pointer-events", function() {
              if (scrollTop >= 0) {
                return "auto"
              } else if (scrollTop < 0 && scrollTop > -2000) {
                return "auto"
              } else {
                return "none"
              }
            })



          if (scrollTop < 0) {
            /////remove Detailview von buchauswahl

            //  clickedBook = 0
            d3.selectAll(".detailInfoParent")
              .transition()
              .style("opacity", 0)
            //.remove()

            d3.selectAll(".detailDiv").transition()
              .style("opacity", 0)
            //.remove()

            d3.selectAll(".bookBG").selectAll("rect")
              .transition()
              .style("opacity", 0)
            /////remove Detailview von buchauswahl ende


            authorGroup.selectAll("rect").transition().duration(200).attr("opacity", 0)


            bookFingerprint.selectAll(".nodes")
              .attr("height", function(d) {
                if (d.maxPart >= 1674) {
                  var implicateScaleB = d3.scaleLinear()
                    .domain([-100, -1000])     ////*****hier scroll
                    .range([(areaheight / d.maxPart), 0])
                    .clamp(true)
                  return implicateScaleB(scrollTop)
                } else {
                  var implicateScale = d3.scaleLinear()
                    .domain([-100, -1000])  ////*****hier scroll
                    .range([pageheight, (areaheight / d.maxPart)])
                    .clamp(true)
                  return implicateScale(scrollTop)
                }
              })
              .attr("width", function(d, i) {
                if (d.Verfasser == thisVerfasserSelected) {
                  var implicateScaleWidth = d3.scaleLinear()
                    .domain([500, 2000])
                    .range([buchBreite, sLBuchBreiteSelected])
                    .clamp(true)

                  return implicateScaleWidth(scrollTop)


                } else {
                  var implicateScaleWidth = d3.scaleLinear()
                    .domain([500, 2000])
                    .range([buchBreite, sLBuchBreiteUnselected])
                    .clamp(true)

                  return implicateScaleWidth(scrollTop)
                }
              })
              .attr("x", function(d, i) {
                return 0
              })
              .attr("y", function(d, i) {
                if (d.maxPart >= 1674) {
                  var implicateScaleB = d3.scaleLinear()
                    .domain([-100, -1000])    ////*****hier scroll
                    .range([(areaheight / d.maxPart), pageheight])
                    .clamp(true)

                  return posYCanvas + implicateScaleB(scrollTop) * (d.Part - 1)
                } else {
                  var implicateScale = d3.scaleLinear()
                    .domain([-100, -1000])   ////*****hier scroll
                    .range([pageheight, (areaheight / d.maxPart)])
                    .clamp(true)

                  return posYCanvas + implicateScale(scrollTop) * (d.Part - 1)
                }
              })


            bookFingerprint.selectAll(".nodesbg")
              .attr("opacity", 1)
              .attr("height", function(d) {
                if (d.maxPart >= 1674) {
                  var implicateScaleB = d3.scaleLinear()
                    .domain([-100, -1000])  ////*****hier scroll
                    .range([areaheight, (d.values[0].maxPart) * pageheight])
                    .clamp(true)
                  return implicateScaleB(scrollTop)
                } else {
                  var implicateScale = d3.scaleLinear()
                    .domain([-100, -1000])  ////*****hier scroll
                    .range([(d.values[0].maxPart) * pageheight, areaheight])
                    .clamp(true)
                  return implicateScale(scrollTop)
                }
              }).attr("width", function(d, i) {
                if (d.values[0].Verfasser == thisVerfasserSelected) {
                  var implicateScaleWidth = d3.scaleLinear()
                    .domain([500, 2000])
                    .range([buchBreite, sLBuchBreiteSelected])
                    .clamp(true)

                  return implicateScaleWidth(scrollTop)


                } else {
                  var implicateScaleWidth = d3.scaleLinear()
                    .domain([500, 2000])
                    .range([buchBreite, sLBuchBreiteUnselected])
                    .clamp(true)

                  return implicateScaleWidth(scrollTop)
                }
              })
              .attr("x", function(d, i) {
                return 0
              })


            bookFingerprint.selectAll(".nodes")
              .attr("opacity", 1)
              .attr("width", function(d) {
                var implicateScaleC = d3.scaleLinear()
                  .domain([-1000, -2900])   ////*****hier scroll
                  .range([buchBreite, 0])
                  .clamp(true)
                return implicateScaleC(scrollTop)
              })







            //			if (scrollTop < -2300){

            bookG
              .attr("transform", function(d, i) {
                var areaSize = xAreaMax * (datenByAuthor.filter(function(D, I) {
                  if (d.values[0].AuthorCount == 1) {
                    return D.values[0].values[0].AuthorCount == 1
                  } else {
                    return D.values[0].values[0].Verfasser == d.values[0].Verfasser
                  }
                })[0].maxTraceNumberNormBefore)

                if (i == 0) {
                  posx2 = 0
                  posx = 0
                  return "translate(" + (marginleft - 1 + (posx2)) + "," + (posY) + ")"
                } else if (i != 0 && d.values[0].AuthorCount == 1) {
                  posx2 = posx2
                  posx = posx + buchBgBreite

                  var implicateScaleX1 = d3.scaleLinear()
                    .domain([-100, -3000]) ////*****hier scroll
                    .range([posx, posx2])
                    .clamp(true)

                  return "translate(" + (marginleft - 1 + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
                } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
                  posx2 = posx2 + areaSize + authorLevelAbstand
                  posx = posx + authorAbstand

                  var implicateScaleX1 = d3.scaleLinear()
                    .domain([-100, -3000]) ////*****hier scroll
                    .range([posx, posx2])
                    .clamp(true)

                  return "translate(" + (marginleft - 1 + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
                } else {
                  posx2 = posx2
                  posx = posx + buchBgBreite

                  var implicateScaleX1 = d3.scaleLinear()
                    .domain([-100, -3000]) ////*****hier scroll
                    .range([posx, posx2])
                    .clamp(true)

                  return "translate(" + (marginleft - 1 + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
                }
              })



            bookGFront
              .attr("transform", function(d, i) {
                var areaSize = xAreaMax * (datenByAuthor.filter(function(D, I) {
                  if (d.values[0].AuthorCount == 1) {
                    return D.values[0].values[0].AuthorCount == 1
                  } else {
                    return D.values[0].values[0].Verfasser == d.values[0].Verfasser
                  }
                })[0].maxTraceNumberNormBefore)


                if (i == 0) {
                  posx2 = 0
                  posx = 0
                  return "translate(" + (marginleft - 1 + (posx2)) + "," + (posY) + ")"
                } else if (i != 0 && d.values[0].AuthorCount == 1) {
                  posx2 = posx2
                  posx = posx + buchBgBreite

                  var implicateScaleX1 = d3.scaleLinear()
                    .domain([-100, -3000]) ////*****hier scroll
                    .range([posx, posx2])
                    .clamp(true)

                  return "translate(" + (marginleft - 1 + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"

                } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
                  posx2 = posx2 + areaSize + authorLevelAbstand
                  posx = posx + authorAbstand

                  var implicateScaleX1 = d3.scaleLinear()
                    .domain([-100, -3000]) ////*****hier scroll
                    .range([posx, posx2])
                    .clamp(true)

                  return "translate(" + (marginleft - 1 + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
                } else {
                  posx2 = posx2
                  posx = posx + buchBgBreite

                  var implicateScaleX1 = d3.scaleLinear()
                    .domain([-100, -3000]) ////*****hier scroll
                    .range([posx, posx2])
                    .clamp(true)

                  return "translate(" + (marginleft - 1 + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
                }
              })






            bookFingerprint
              .attr("transform", function(d, i) {
                var areaSize = xAreaMax * (datenByAuthor.filter(function(D, I) {
                  if (d.values[0].AuthorCount == 1) {
                    return D.values[0].values[0].AuthorCount == 1
                  } else {
                    return D.values[0].values[0].Verfasser == d.values[0].Verfasser
                  }
                })[0].maxTraceNumberNormBefore)

                if (i == 0) {
                  posx2 = 0
                  posx = 0
                  return "translate(" + (marginleft - 1 + (posx2)) + "," + (posYCanvas) + ")"
                } else if (i != 0 && d.values[0].AuthorCount == 1) {
                  posx2 = posx2
                  posx = posx + buchBgBreite

                  var implicateScaleX1 = d3.scaleLinear()
                    .domain([-100, -3000]) ////*****hier scroll
                    .range([posx, posx2])
                    .clamp(true)

                  return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posYCanvas) + ")"
                } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {


                  posx2 = posx2 + areaSize + authorLevelAbstand
                  posx = posx + authorAbstand

                  var implicateScaleX1 = d3.scaleLinear()
                    .domain([-100, -3000]) ////*****hier scroll
                    .range([posx, posx2])
                    .clamp(true)

                  return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posYCanvas) + ")"
                } else {
                  posx2 = posx2
                  posx = posx + buchBgBreite

                  var implicateScaleX1 = d3.scaleLinear()
                    .domain([-100, -3000]) ////*****hier scroll
                    .range([posx, posx2])
                    .clamp(true)

                  return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posYCanvas) + ")"
                }
              })



            bookFingerprint
              .selectAll(".nodesbg")
              .attr("opacity", function(d) {
                var implicateScaleOpacity = d3.scaleLinear()
                  .domain([-1000, -2500])  ////*****hier scroll
                  .range([1, 0])
                  .clamp(true)

                return implicateScaleOpacity(scrollTop)
              })

            var implicateScaleAreaChart = d3.scaleLinear()
              .domain([-1000, -3000]) ////*****hier scroll
              .range([0, 1])
              .clamp(true)


            layerGroups.attr("transform", "translate(0,0)scale(" + implicateScaleAreaChart(scrollTop) + ",1)")
            areachartGroup.selectAll("line").attr("display", "auto")
            areachart.attr("display", function() {
              if (scrollTop > 0) {
                return "auto"
              }
            })




          }

          ////////Scroll-Section > 0 Start
          ///////////////////////////////////////
          ///////////////////////////////////////
          ///////////////////////////////////////
          else if (scrollTop >= 0) {

            if (scrollTop > 0 && clickedBook != 0) {
              d3.selectAll(".detailDiv")
                .transition()
                .style("opacity", 1)

              d3.selectAll(".detailInfoParent")
                .transition()
                .style("opacity", 1)
            }
            /////remove Detailview von buchauswahl

            //  d3.select("#svgFrontTitles").style("display", "none")

            // d3.selectAll(".detailinfo")
            //     .transition()
            //     .style("opacity", 0)
            //     .remove()
            /////remove Detailview von buchauswahl ende


            areachartGroup.selectAll("line").attr("display", "none")
            areachart.attr("display", "none")

            var explicateScale = d3.scaleLinear()
              .domain([500, 2500])
              .range([pageheight, 30])
              .clamp(true)

            var explicateScale2 = d3.scaleLinear()
              .domain([500, 2500])
              .range([pageheight, 31])
              .clamp(true)

            ////////////////////////////
            ///////No book selectected
            ////////////////////////////
            ////////////////////////////

            if (clickedBook == 0) {
              bookG
                .attr("transform", function(d, i) {
                  if (i == 0) {
                    posx2 = 0
                    posx = 0
                    return "translate(" + (marginleft - 1 + (posx2)) + "," + (posY) + ")"
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
                    posx2 = posx2 + sLAuthorAbstand2
                    posx = posx + authorAbstand

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([-100, -3000])
                      .range([posx, posx2])
                      .clamp(true)

                    return "translate(" + (marginleft - 1 + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
                  } else {
                    posx2 = posx2
                    posx = posx + buchBgBreite

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([-100, -3000])
                      .range([posx, posx2])
                      .clamp(true)

                    return "translate(" + (marginleft - 1 + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
                  }
                })

              bookFingerprint
                .attr("transform", function(d, i) {
                  if (i == 0) {
                    posx2 = 0
                    posx = 0
                    return "translate(" + (marginleft - 1 + (posx2)) + "," + (posYCanvas) + ")"
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
                    posx2 = posx2 + sLAuthorAbstand2
                    posx = posx + authorAbstand

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([-100, -3000])
                      .range([posx, posx2])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posYCanvas) + ")"
                  } else {
                    posx2 = posx2
                    posx = posx + buchBgBreite

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([-100, -3000])
                      .range([posx, posx2])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posYCanvas) + ")"
                  }
                })



              bookFingerprint
                .selectAll(".nodesbg")
                .attr("opacity", function(d) {
                  var implicateScaleOpacity = d3.scaleLinear()
                    .domain([-200, -5000])
                    .range([1, 0])
                    .clamp(true)

                  return implicateScaleOpacity(scrollTop)
                })







              //////////////////////////Auswahl für SelectedAuthor beim Reinzoomen und Stauchen der anderen Bücher
              thisVerfasserSelectedBookCount = datenByAuthor.filter(function(d, i) {
                return d.key == thisVerfasserSelected
              })[0].values.length
              sLTotalBuchWidthSelected = thisVerfasserSelectedBookCount * sLBuchAbstandSelected
              sLTotalBuchWidthUnselected = (BuchAnzahl - thisVerfasserSelectedBookCount) * sLBuchAbstandUnselected
              sLAuthorAbstand2 = (chartArea + mysteryVar - (sLTotalBuchWidthSelected + sLTotalBuchWidthUnselected)) / (authorAnzahl - 1)



              bookFingerprint.selectAll(".nodes")
                .attr("height", explicateScale(scrollTop))
                .attr("y", function(d, i) {
                  if (scrollTop < 3000) {
                    posYCanvas = 0
                  } else {
                    posYCanvas = 0 - ((scrollTop - 3000) * 1)
                  }

                  return posYCanvas + (explicateScale2(scrollTop)) * (d.Part - 1)
                })
                .attr("width", function(d, i) {
                  var implicateScaleWidth = d3.scaleLinear()
                    .domain([500, 2000])
                    .range([buchBreite, sLBuchBreiteUnselected])
                    .clamp(true)

                  return implicateScaleWidth(scrollTop)
                })
                .attr("x", 0)

              bookFingerprint.selectAll(".nodes")
                .filter(function(d, i) {
                  return d.Verfasser == thisVerfasserSelected
                })
                .attr("width", function(d, i) {
                  ///MAX SCHRIFTSPUR AUF SEITE BERECHNEN
                  var thisBookData = (d3.select(this.parentNode).datum()).values.filter(function(D, I) {
                    return D.Benutzungsspur != "null" && D.Benutzungsspur != "4f" && D.Benutzungsspur != "4f?"
                  })
                  var maxSpurenAufSeite = thisBookData.filter(function(D, I) {
                    return D.ID == d.ID && D.Benutzungsspur != "4f" && D.Benutzungsspur != "4f?"
                  }).length

                  ///Spurbreite abhängig von maxSpurenAufSeite
                  var implicateScaleWidth = d3.scaleLinear()
                    .domain([500, 2000])
                    .range([buchBreite, sLBuchBreiteSelected])
                    .clamp(true)

                  return implicateScaleWidth(scrollTop) / maxSpurenAufSeite
                })
                .attr("x", function(d, i) {
                  ///MAX SCHRIFTSPUR AUF SEITE BERECHNEN
                  var thisBookData = (d3.select(this.parentNode).datum()).values.filter(function(D, I) {
                    return D.Benutzungsspur != "null" && D.Benutzungsspur != "4f" && D.Benutzungsspur != "4f?"
                  })
                  var maxSpurenAufSeite = thisBookData.filter(function(D, I) {
                    return D.ID == d.ID && D.Benutzungsspur != "4f" && D.Benutzungsspur != "4f?"
                  }).length

                  ///Spurposition abhängig von maxSpurenAufSeite
                  var implicateScaleWidth = d3.scaleLinear()
                    .domain([500, 2000])
                    .range([buchBreite / maxSpurenAufSeite, sLBuchBreiteSelected / maxSpurenAufSeite])
                    .clamp(true)

                  if (i > 5 && thisBookData[i - 6].ID == d.ID) {

                    return 6 * implicateScaleWidth(scrollTop)
                  } else if (i > 4 && thisBookData[i - 5].ID == d.ID) {


                    return 5 * implicateScaleWidth(scrollTop)
                  } else if (i > 3 && thisBookData[i - 4].ID == d.ID) {

                    return 4 * implicateScaleWidth(scrollTop)
                  } else if (i > 2 && thisBookData[i - 3].ID == d.ID) {

                    return 3 * implicateScaleWidth(scrollTop)
                  } else if (i > 1 && thisBookData[i - 2].ID == d.ID) {

                    return 2 * implicateScaleWidth(scrollTop)
                  } else if (i != 0 && thisBookData[i - 1].ID == d.ID) {

                    return implicateScaleWidth(scrollTop)
                  } else {
                    return 0
                  }
                })








              bookFingerprint.selectAll(".nodesbg")
                .attr("height", function(d) {
                  return (explicateScale2(scrollTop)) * (d.values[0].maxPart)
                })
                .attr("width", function(d, i) {
                  if (d.values[0].Verfasser == thisVerfasserSelected) {
                    var implicateScaleWidth = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([buchBreite, sLBuchBreiteSelected])
                      .clamp(true)

                    return implicateScaleWidth(scrollTop)


                  } else {
                    var implicateScaleWidth = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([buchBreite, sLBuchBreiteUnselected])
                      .clamp(true)

                    return implicateScaleWidth(scrollTop)
                  }
                })

              d3.select("#svg").selectAll(".singleBookBG") //.selectAll(".bookBG").selectAll("rect")
                .attr("width", function(d, i) {
                  if (d.values[0].Verfasser == thisVerfasserSelected) {
                    var implicateScaleWidth = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([buchBgBreite, sLBuchBreiteSelected])
                      .clamp(true)

                    var thisCount = datenByAuthor.filter(function(D, I) {
                      return D.key === thisVerfasserSelected
                    })[0].values.length

                    //  datenByAuthor.filter(function(D,I){return d.}).values.length

                    return implicateScaleWidth(scrollTop)


                  } else {
                    var implicateScaleWidth = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([buchBreite, sLBuchBreiteUnselected])
                      .clamp(true)

                    return implicateScaleWidth(scrollTop) //thisCountunselected
                  }
                })

              d3.select("#svg").selectAll(".authorBg") //.selectAll(".bookBG").selectAll("rect")
                .attr("width", function(d, i) {
                  if (d.values[0].Verfasser == thisVerfasserSelected) {
                    var implicateScaleWidth = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([buchBgBreite, sLBuchBreiteSelected])
                      .clamp(true)

                    var thisCount = datenByAuthor.filter(function(D, I) {
                      return D.key === thisVerfasserSelected
                    })[0].values.length

                    //  datenByAuthor.filter(function(D,I){return d.}).values.length

                    return implicateScaleWidth(scrollTop) * thisCount


                  } else {
                    var implicateScaleWidth = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([buchBreite, sLBuchBreiteUnselected])
                      .clamp(true)

                    //  var thisCountunselected = datenByAuthor.filter(function(D,I){return D.key === d3.select(this).datum().values[0].Verfasser})[0].values.length

                    return implicateScaleWidth(scrollTop) * 1 //thisCountunselected
                  }
                })



              bookFingerprint
                .attr("transform", function(d, i) {

                  posYCanvas = 0

                  if (i == 0) {
                    posx3 = 0
                    posx = 0
                    return "translate(" + (marginleft - 1 + (posx3)) + "," + (posYCanvas) + ")"

                    //falls vorheriges Element Selected und anderer Verfasser
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser && datenByTitle[i - 1].values[0].Verfasser == thisVerfasserSelected) {
                    posx3 = posx3 + sLBuchAbstandSelected + sLAuthorAbstand2
                    posx = posx + authorAbstand

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([posx, posx3])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posYCanvas) + ")"

                    //falls vorheriges Element Selected und gleicher Verfasser
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser == thisVerfasserSelected && datenByTitle[i - 1].values[0].Verfasser == d.values[0].Verfasser) {
                    posx3 = posx3 + sLBuchAbstandSelected
                    posx = posx + buchBgBreite

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([posx, posx3])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posYCanvas) + ")"

                    //falls vorheriges Element NICHT Selected und anderer Verfasser
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser && datenByTitle[i - 1].values[0].Verfasser != thisVerfasserSelected && datenByTitle[i - 1].values[0].AuthorCount != 1) {
                    posx3 = posx3 + sLAuthorAbstand2
                    posx = posx + authorAbstand

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([posx, posx3])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posYCanvas) + ")"

                    //falls vorheriges Element NICHT Selected und gleicher Verfasser
                  } else {
                    posx3 = posx3 + sLBuchAbstandUnselected
                    posx = posx + buchBgBreite

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([posx, posx3])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posYCanvas) + ")"
                  }
                })

              bookFingerprint.selectAll(".nodesbg")
                .attr("y", function(d, i) {
                  if (scrollTop < 3000) {

                    posYCanvas = 0
                  } else {
                    posYCanvas = 0 - ((scrollTop - 3000) * 1)

                  }
                  return posYCanvas
                })





              bookG
                .attr("transform", function(d, i) {
                  //falls erstes Element
                  if (i == 0) {
                    posx3 = 0
                    posx = 0
                    return "translate(" + (marginleft - 1 + (posx3)) + "," + (posY) + ")"

                    //falls vorheriges Element Selected und anderer Verfasser
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser && datenByTitle[i - 1].values[0].Verfasser == thisVerfasserSelected) {
                    posx3 = posx3 + sLBuchAbstandSelected + sLAuthorAbstand2
                    posx = posx + authorAbstand

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([posx, posx3])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"

                    //falls vorheriges Element Selected und gleicher Verfasser
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser == thisVerfasserSelected) {
                    posx3 = posx3 + sLBuchAbstandSelected
                    posx = posx + buchBgBreite

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([posx, posx3])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"

                    //falls vorheriges Element NICHT Selected und anderer Verfasser
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser && datenByTitle[i - 1].values[0].Verfasser != thisVerfasserSelected) {
                    posx3 = posx3 + sLAuthorAbstand2
                    posx = posx + authorAbstand

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([posx, posx3])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"

                    //falls vorheriges Element NICHT Selected und gleicher Verfasser
                  } else {
                    posx3 = posx3 + sLBuchAbstandUnselected
                    posx = posx + buchBgBreite

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([posx, posx3])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
                  }
                })


              //bu
              d3.selectAll(".bookTitleFrontG")
                .attr("transform", function(d, i) {
                  //falls erstes Element
                  if (i == 0) {
                    posx3 = 0
                    posx = 0
                    return "translate(" + (marginleft - 1 + (posx3) - 40.5) + "," + (posY) + ")"

                    //falls vorheriges Element Selected und anderer Verfasser
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser && datenByTitle[i - 1].values[0].Verfasser == thisVerfasserSelected) {
                    posx3 = posx3 + sLBuchAbstandSelected + sLAuthorAbstand2
                    posx = posx + authorAbstand

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([posx, posx3])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop)) - 40.5) + "," + (posY) + ")"

                    //falls vorheriges Element Selected und gleicher Verfasser
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser == thisVerfasserSelected) {
                    posx3 = posx3 + sLBuchAbstandSelected
                    posx = posx + buchBgBreite

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([posx, posx3])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop)) - 40.5) + "," + (posY) + ")"

                    //falls vorheriges Element NICHT Selected und anderer Verfasser
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser && datenByTitle[i - 1].values[0].Verfasser != thisVerfasserSelected) {
                    posx3 = posx3 + sLAuthorAbstand2
                    posx = posx + authorAbstand

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([posx, posx3])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop)) - 40.5) + "," + (posY) + ")"

                    //falls vorheriges Element NICHT Selected und gleicher Verfasser
                  } else {
                    posx3 = posx3 + sLBuchAbstandUnselected
                    posx = posx + buchBgBreite

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([posx, posx3])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop)) - 40.5) + "," + (posY) + ")"
                  }
                })



              bookGFront
                .attr("transform", function(d, i) {
                  if (i == 0) {
                    posx3 = 0
                    posx = 0
                    return "translate(" + (marginleft - 1 + (posx3)) + "," + (posY) + ")"
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser && datenByTitle[i - 1].values[0].Verfasser == thisVerfasserSelected) {
                    posx3 = posx3 + sLBuchAbstandSelected
                    posx = posx + authorAbstand

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([posx, posx3])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser == thisVerfasserSelected) {
                    posx3 = posx3 + sLBuchAbstandSelected
                    posx = posx + buchBgBreite

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([posx, posx3])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser && datenByTitle[i - 1].values[0].Verfasser != thisVerfasserSelected) {
                    posx3 = posx3 + sLAuthorAbstand2
                    posx = posx + authorAbstand

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([posx, posx3])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
                  } else {
                    posx3 = posx3 + sLBuchAbstandUnselected
                    posx = posx + buchBgBreite

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([posx, posx3])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
                  }
                })


            }
            //////////////////////////////
            //////no selected book Ende
            //////////////////////////////
            //////////////////////////////


            //////////////////////////////
            //////if book selected
            //////////////////////////////
            //////////////////////////////

            if (clickedBook != 0 && scrollTop > 0) {


              ///create Variable that counts number of "Schriftspuren" on one page
              var maxX = 0

              ///create variable that helps to position the books
              var posX = 0



              ////Create Scale for book/page width, based on scroll position
              var selectedBookScale = d3.scaleLinear()
                .domain([0, 3000])
                .range([selectedBookBuchlevel, selectedBookSeitenlevel])
                .clamp(true)

              var unselectedBookSameAuthorScale = d3.scaleLinear()
                .domain([0, 3000])
                .range([unselectedBookSameAuthorBuchlevel, unselectedBookSameAuthorSeitenlevel])
                .clamp(true)

              var unselectedBookScale = d3.scaleLinear()
                .domain([0, 3000])
                .range([unselectedBookBuchlevel, unselectedBookSeitenlevel])
                .clamp(true)

              var BuchauswahlFeldScale = d3.scaleLinear()
                .domain([0, 3000])
                .range([BuchauswahlFeld, BuchauswahlFeldSeitenFeld])
                .clamp(true)





              var onSelectionAuthorAbstand = ((chartArea + mysteryVar + 20) - BuchauswahlFeldScale(scrollTop) - ((BuchAnzahl - 1) * onSelectionBuchAbstandScale(scrollTop))) / (authorAnzahl -
                1) //-100 muss eventuell raus? warum die benötigt werden ist un klar

              bookFingerprint.selectAll(".nodes")
                .filter(function(d, i) {
                  return d.BookID != clickedBook
                })
                .attr("width", function(d) {
                  return unselectedBookScale(scrollTop)
                })
                .attr("height", explicateScale(scrollTop))
                .attr("y", function(d, i) {
                  if (scrollTop < 3000) {
                    posYCanvas = 0
                  } else {
                    posYCanvas = 0 - ((scrollTop - 3000) * 1)
                  }

                  return posYCanvas + (explicateScale2(scrollTop)) * (d.Part - 1)
                })
                .attr("x", 0)


              bookFingerprint.selectAll(".nodes")
                .filter(function(d, i) {
                  return d.BookID == clickedBook
                })
                .attr("width", function(d) {
                  return selectedBookScale(scrollTop)
                })
                .attr("height", explicateScale(scrollTop))
                .attr("y", function(d, i) {
                  return posYCanvas + (explicateScale2(scrollTop)) * (d.Part - 1)
                })
                .attr("x", function(d, i) {
                  if (i > 5 && thisData[i - 6].ID == d.ID) {
                    //  maxX = (Math.max(maxX, 7))
                    return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 6
                  } else if (i > 4 && thisData[i - 5].ID == d.ID) {
                    //    maxX = (Math.max(maxX, 6))
                    return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 5
                  } else if (i > 3 && thisData[i - 4].ID == d.ID) {
                    //    maxX = (Math.max(maxX, 5))
                    return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 4
                  } else if (i > 2 && thisData[i - 3].ID == d.ID) {
                    //    maxX = (Math.max(maxX, 4))
                    return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 3
                  } else if (i > 1 && thisData[i - 2].ID == d.ID) {
                    //  maxX = (Math.max(maxX, 3))
                    return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 2
                  } else if (i != 0 && thisData[i - 1].ID == d.ID) {
                    //  maxX = (Math.max(maxX, 2))
                    return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop)
                  } else {
                    //      maxX = (Math.max(maxX, 1))
                    return 7 * selectedBookScale(scrollTop)
                  }
                })

              bookFingerprint.selectAll(".nodesbg")
                .attr("width", function(d) {
                  if (d.values[0].BookID == clickedBook) {
                    return selectedBookScale(scrollTop)
                  } else {
                    return unselectedBookScale(scrollTop)
                  }
                })
                .attr("height", function(d) {
                  return (explicateScale2(scrollTop)) * (d.values[0].maxPart)
                })
                .attr("x", function(d) {
                  if (d.values[0].BookID == clickedBook) {
                    return 7 * selectedBookScale(scrollTop)
                  } else {
                    return 0
                  }
                })
                .attr("y", function(d, i) {
                  if (scrollTop < 3000) {

                    posYCanvas = 0
                  } else {

                    posYCanvas = 0 - ((scrollTop - 3000) * 1)

                  }
                  return posYCanvas
                })



              var thisBookPosition = 0

              bookFingerprint
                .attr("transform", function(d, i) {

                  posYCanvas = 0

                  if (i == 0) {
                    posx = 0
                    return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
                  } else if (i != 0 && datenByTitle[i - 1].values[0].BookID == clickedBook) {
                    thisBookPosition = posx + 83
                    posx = posx + BuchauswahlFeldScale(scrollTop)
                    return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
                    posx = posx + onSelectionAuthorAbstand
                    return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
                  } else {
                    posx = posx + onSelectionBuchAbstandScale(scrollTop)
                    return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
                  }
                })


              bookG
                .attr("transform", function(d, i) {
                  if (i == 0) {
                    posx = 0
                    return "translate(" + (marginleft - 2 + (posx)) + "," + (posY) + ")"
                  } else if (i != 0 && datenByTitle[i - 1].values[0].BookID == clickedBook) {
                    posx = posx + BuchauswahlFeldScale(scrollTop)
                    return "translate(" + (marginleft - 2 + (posx)) + "," + (posY) + ")"
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
                    posx = posx + onSelectionAuthorAbstand
                    return "translate(" + (marginleft - 2 + (posx)) + "," + (posY) + ")"
                  } else {
                    posx = posx + onSelectionBuchAbstandScale(scrollTop)
                    return "translate(" + (marginleft - 2 + (posx)) + "," + (posY) + ")"
                  }
                })


              ///Buchtitel
              d3.selectAll(".bookTitleFrontG")
                .attr("transform", function(d, i) {
                  if (i == 0) {
                    posx = 0
                    return "translate(" + (marginleft + (posx) - 40.5) + "," + (posY) + ")"
                  } else if (i != 0 && datenByTitle[i - 1].values[0].BookID == clickedBook) {
                    posx = posx + BuchauswahlFeldScale(scrollTop)
                    return "translate(" + (marginleft + (posx) - 40.5) + "," + (posY) + ")"
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
                    posx = posx + onSelectionAuthorAbstand
                    return "translate(" + (marginleft + (posx) - 40.5) + "," + (posY) + ")"
                  } else {
                    posx = posx + onSelectionBuchAbstandScale(scrollTop)
                    return "translate(" + (marginleft + (posx) - 40.5) + "," + (posY) + ")"
                  }
                })






              bookG.selectAll(".bookBG")
                .style("opacity", 0)
                .attr("width", function(d) {
                  if (d.values[0].BookID == clickedBook) {
                    return BuchauswahlFeldScale(scrollTop)
                  } else {
                    return buchBreite
                  }
                })
                .filter(function(d) {
                  return d.values[0].BookID == clickedBook
                })
                .style("fill", "#d9c2b2")
                .style("opacity", 0.3)

              d3.selectAll(".transcriptText")
                .style("font-size", function() {
                  return transcriptFontSize(scrollTop) + "px"
                })
                .attr("x", transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) + 10)
                .attr("y", function(d, i) {
                  if (i == 0) {
                    return transcriptYStart(scrollTop) + (explicateScale2(scrollTop)) * d.Part
                  } else {
                    return transcriptYStart(scrollTop) + (explicateScale2(scrollTop)) * d.Part
                  }
                })
                .selectAll("tspan")
                .attr("x", transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) + 10)
                .attr("y", function(d, i) {
                  return transcriptYStart(scrollTop) + (explicateScale2(scrollTop)) * d.Part
                })



              d3.selectAll(".detailDiv")
                .style("left", thisBookPosition + marginleft + 38 + 9 * selectedBookScale(scrollTop) + "px")
                .style("opacity", function(d) {
                  return detailInfoScale(scrollTop)
                })
                .style("transform-origin", "right")
                .style("transform", function(d) {
                  return "scale(" + detailInfoScale(scrollTop) + ",1)"
                })
              //.attr("transform", funsction(d){return "translate(" + detailInfoTextBoxScale(scrollTop) + "," + 0 + ")"})

              d3.select(".detail_titel").selectAll("tspan")
                .attr("x", BuchauswahlFeldScale(scrollTop) / 2)



              d3.selectAll(".transcriptions").attr("opacity", function(d) {
                return detailTranscriptScale(scrollTop)
              })



              d3.selectAll(".transcriptions").selectAll(".schreibhandIcon")
                .attr("width", detailCircleScale(scrollTop))
                .attr("height", detailCircleScale(scrollTop))

              d3.selectAll(".transcriptions").selectAll("path")
                .style("opacity", transcriptPathScaleOpacity(scrollTop))


              d3.selectAll(".transcriptionText")
                .each(function(d, i) {
                  if (i > 0) {
                    var thisTranscriptY = d3.select(this).node().getBBox().y
                    var lastTranscriptMaxY = d3.selectAll(".transcriptionText").filter(function(D, I) {
                      return I == i - 1
                    }).node().getBBox().y + d3.selectAll(".transcriptionText").filter(function(D, I) {
                      return I == i - 1
                    }).node().getBBox().height

                    if (thisTranscriptY <= lastTranscriptMaxY) {
                      d3.select(this)
                        .attr("y", function() {
                          return lastTranscriptMaxY + transcriptFontSize(scrollTop)
                        })
                        .selectAll("tspan").attr("y", function() {
                          return lastTranscriptMaxY + transcriptFontSize(scrollTop)
                        })

                      d3.selectAll(".transcriptions").selectAll(".schreibhandIcon").filter(function(D, I) {
                          return I == i
                        })
                        .attr("x", transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3)
                        .attr("y", lastTranscriptMaxY + transcriptFontSize(scrollTop) - 3 - (detailCircleScale(scrollTop) / 2))
                      //
                      //
                      ////line between transcript and rect
                      d3.selectAll(".transcriptions").selectAll("path").filter(function(D, I) {
                          return I == i
                        })
                        .attr("d", function(d, i) {
                          var line = d3.line().curve(d3.curveBasis)
                          var data = [
                            [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3, lastTranscriptMaxY + transcriptFontSize(scrollTop) - 3],
                            [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - transcriptLinePos, lastTranscriptMaxY + transcriptFontSize(scrollTop) - 3],
                            [8 * selectedBookScale(scrollTop) + transcriptLinePos, thisTranscriptY + 15],
                            [8 * selectedBookScale(scrollTop), thisTranscriptY + 15]
                          ];

                          return line(data)
                        })


                    } else {
                      d3.selectAll(".transcriptions").selectAll(".schreibhandIcon").filter(function(D, I) {
                          return I == i
                        })
                        .attr("x", transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3)
                        .attr("y", thisTranscriptY + transcriptFontSize(scrollTop) - 6 - (detailCircleScale(scrollTop) / 2))

                      ////line between transcript and rect
                      d3.selectAll(".transcriptions").selectAll("path").filter(function(D, I) {
                          return I == i
                        })
                        .attr("d", function(d, i) {
                          var line = d3.line().curve(d3.curveBasis)
                          var data = [
                            [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                            [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - transcriptLinePos, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                            [8 * selectedBookScale(scrollTop) + transcriptLinePos, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                            [8 * selectedBookScale(scrollTop), thisTranscriptY + 15]
                          ];

                          return line(data)
                        })



                    }

                  } else {
                    var thisTranscriptY = d3.select(this).node().getBBox().y

                    d3.selectAll(".transcriptions").selectAll(".schreibhandIcon").filter(function(D, I) {
                        return I == i
                      })
                      .attr("x", transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3)
                      .attr("y", thisTranscriptY + transcriptFontSize(scrollTop) - 6 - (detailCircleScale(scrollTop) / 2))

                    //
                    ////line between transcript and rect
                    d3.selectAll(".transcriptions").selectAll("path").filter(function(D, I) {
                        return I == i
                      })
                      .attr("d", function(d, i) {
                        var line = d3.line().curve(d3.curveBasis)
                        var data = [
                          [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - 3, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                          [transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) - transcriptLinePos, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                          [8 * selectedBookScale(scrollTop) + transcriptLinePos, thisTranscriptY + transcriptFontSize(scrollTop) - 6],
                          [8 * selectedBookScale(scrollTop), thisTranscriptY + 15]
                        ];

                        return line(data)
                      })

                  }
                })









              d3.selectAll(".transcriptions")
                .attr("transform", function(d, i) {
                  if (scrollTop < 3000) {
                    posYCanvas = 0
                  } else {
                    posYCanvas = 0 - ((scrollTop - 3000) * 1)
                  }
                  return "translate(" + 0 + "," + (posYCanvas) + ")"
                })









            }

            //////////////////////////////
            //////selected book Ende
            //////////////////////////////
            //////////////////////////////


            if (scrollTop > 400) {
              d3.select("#svg").selectAll(".bookBG").selectAll("rect").attr("opacity", function(d) {
                return 0
              })

            }


            //////
            ////
            ////Hover Schreibhand-icon starting

            d3.selectAll(".schreibhandIcon")
              .on("mouseover", schreibhandIconFunction)
              .on("mouseout", function() {
                d3.selectAll(".schreibhandTooltip").remove()
              })


            function schreibhandIconFunction() {
              var scheibhandTitle = d3.select(this).attr("title")

              d3.select("body").append("p")
                .attr("class", "schreibhandTooltip")
                .style("background-color", "#474747")
                .style("padding", "10px")
                .style("color", "white")
                .style("position", "absolute")
                .style("z-index", "300")
                .style("font-size", "11pt")
                .style('top', d3.event.pageY - 30 + 'px')
                .style('left', d3.event.pageX + 10 + 'px')
                .text("-" + scheibhandTitle)

            }

            ///////////
            ///////Hover-Schreibhand ende





            //////////////
            //////////////
            ///Hover-Thumb

            d3.selectAll(".singleBookBG")
              .on("mousemove", function(d) {

                if (scrollTop >= 0) {
                  var currentScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)

                  //    var mouseY = ((d3.event.layerY || d3.event.offsety) - currentScrollTop-120);
                  var mouseY = ((d3.event.pageY) - currentScrollTop - 270 - posYCanvas);
                  var mouseX = d3.event.pageX

                  var thisPage = Math.round(round45(mouseY) / explicateScale2(scrollTop))


                  function round45(x) {
                    return Math.ceil(x / explicateScale2(scrollTop)) * explicateScale2(scrollTop)
                  }

                  thisVerfasser = d3.select(this).datum().values[0].Verfasser
                  var thisBookID = d3.select(this).datum().values[0].BookID

                  ///für jedes Buch, das nicht der aktuellen Selektion entspricht
                  if (thisBookID != clickedBook) {

                    if (d.values[0].maxPart < thisPage || mouseY < 0) {
                      d3.select('.tooltip')
                        .style("display", "none")
                        .style('top', d3.event.pageY)
                    } else if (d.values[0].maxPart >= thisPage && mouseY > 0) {
                      var thisPageID = (d.values.filter(function(d, i) {
                        return d.Part == thisPage
                      }))[0].ID

                      d3.select('.tooltip')
                        .style("display", "block")
                        .style('top', d3.event.pageY - 100 + 'px')
                        .style('left', function() {
                          if (d3.event.pageX < width / 2) {
                            return d3.event.pageX + 25 + 'px'
                          } else {
                            return d3.event.pageX - 250 + 'px'
                          }
                        })

                      tooltip.select("img").attr("src", function() {
                        return "./img/m/" + thisPageID + ".jpg"
                      })
                    }
                  }
                  ///für Auswahl und scrollTop über 500
                  else if (thisBookID == clickedBook && scrollTop > 500) {

                    var selectedBookScale = d3.scaleLinear()
                      .domain([0, 3000])
                      .range([selectedBookBuchlevel, selectedBookSeitenlevel])
                      .clamp(true)

                    var detailBoxPosition = +d3.select(this.parentNode).attr("transform").replace("translate(", "").split(',')[0] + 8 * selectedBookScale(scrollTop) + 83

                    if (d.values[0].maxPart < thisPage || mouseY < 0 || mouseX > detailBoxPosition) {
                      d3.select('.tooltip')
                        .style("display", "none")
                        .style('top', d3.event.pageY)
                    } else if (d.values[0].maxPart >= thisPage && mouseY > 0) {
                      var thisPageID = (d.values.filter(function(d, i) {
                        return d.Part == thisPage
                      }))[0].ID

                      d3.select('.tooltip')
                        .style("display", "block")
                        .style('top', d3.event.pageY - 100 + 'px')
                        .style('left', function() {
                          if (d3.event.pageX < width / 2) {
                            return d3.event.pageX + 25 + 'px'
                          } else {
                            return d3.event.pageX - 250 + 'px'
                          }
                        })

                      tooltip.select("img").attr("src", function() {
                        return "./img/m/" + thisPageID + ".jpg"
                      })
                    }
                  }


                  ////Für Auswahl
                  else {

                    var selectedBookScale = d3.scaleLinear()
                      .domain([0, 3000])
                      .range([selectedBookBuchlevel, selectedBookSeitenlevel])
                      .clamp(true)

                    var detailBoxPosition = +d3.select(this.parentNode).attr("transform").replace("translate(", "").split(',')[0] + 8 * selectedBookScale(scrollTop) + 83


                    if (d.values[0].maxPart < thisPage || mouseY < 0 || mouseX > detailBoxPosition) {

                      d3.select('.tooltip')
                        .style("display", "none")
                        .style('top', d3.event.pageY)



                    } else if (d.values[0].maxPart >= thisPage && mouseY > 0) {
                      var thisPageID = (d.values.filter(function(d, i) {
                        return d.Part == thisPage
                      }))[0].ID

                      d3.selectAll('.detailDiv').select("img")
                        .attr("src", function(d) {
                          return "./img/m/" + thisPageID + ".jpg"
                        })
                    }


                  }
                  //Ende


                }

              })


            d3.selectAll(".singleBookBG")
              .filter(function(d, i) {
                return d3.select(this).datum().values[0].BookID != clickedBook
              })
              .on("click", function() {
                if (scrollTop < 0) {

                  $("html,body").animate({
                    scrollTop: 3000
                  }, '0')


                  clickedBook = d3.select(this).datum().values[0].BookID
                  thisData = (d3.select(this).datum().values).filter(function(d) {
                    return d.Benutzungsspur != "null" && d.Benutzungsspur != "4f" && d.Benutzungsspur != "4f?"
                  })

                  setTimeout(function() {
                    bookClickHash(thisData)


                  }, 550);

                } else {
                  clickedBook = d3.select(this).datum().values[0].BookID
                  thisData = (d3.select(this).datum().values).filter(function(d) {
                    return d.Benutzungsspur != "null" && d.Benutzungsspur != "4f" && d.Benutzungsspur != "4f?"
                  })

                  bookClickHash(thisData)
                }
              })

            d3.selectAll(".singleBookBG")
              .filter(function(d, i) {
                return d3.select(this).datum().values[0].BookID == clickedBook
              })
              .on("click", function(d, i) {


                if (scrollTop >= 0 && d3.select(this).datum().values[0].BookID == clickedBook) {
                  var currentScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)

                  //    var mouseY = ((d3.event.layerY || d3.event.offsety) - currentScrollTop-120);
                  var mouseY = ((d3.event.pageY) - currentScrollTop - 270 - posYCanvas);


                  var thisPage = Math.round(round45(mouseY) / explicateScale2(scrollTop))

                  var thisPageID = (d.values.filter(function(d, i) {
                    return d.Part == thisPage
                  }))[0].ID

                  function round45(x) {
                    return Math.ceil(x / explicateScale2(scrollTop)) * explicateScale2(scrollTop)
                  }
                  thisVerfasser = d3.select(this).datum().values[0].Verfasser

                  var thisBookID = d3.select(this).datum().values[0].BookID

                  d3.select("#detailview").selectAll("img").remove()
                  d3.select("#detailview").selectAll("table").remove()

                  d3.select("#overlay").style("display", "block").transition().duration(600).style("opacity", .5)
                  d3.select("#detailview").style("display", "block").transition().duration(600).style("opacity", 1)
                  d3.select("#detailview").append("img").attr("src", "./img/m/" + thisPageID + ".jpg")

                  var detailviewTable = d3.select("#detailview").append("table").attr("id", "detailviewTable")

                  var detailviewTableTr1 = detailviewTable.append("tr")
                  var detailviewTableTr2 = detailviewTable.append("tr")
                  var detailviewTableTr3 = detailviewTable.append("tr")
                  var detailviewTableTr4 = detailviewTable.append("tr")
                  var detailviewTableTr5 = detailviewTable.append("tr")
                  var detailviewTableTr6 = detailviewTable.append("tr")
                  var detailviewTableTr7= detailviewTable.append("tr")
                  var detailviewTableTr8 = detailviewTable.append("tr")
                  var detailviewTableTr9 = detailviewTable.append("tr")

                  detailviewTableTr1.append("td").text("Buchtitel: ")
                  detailviewTableTr1.append("td").text(function(d) {
                      return korpus.filter(function(D, I) {
                        return D.KurzSignatur == thisBookID
                      })[0].Titel
                    })

                  detailviewTableTr2.append("td").text("Verfasser: ")
                  detailviewTableTr2.append("td").text(function(d) {
                      return korpus.filter(function(D, I) {
                        return D.KurzSignatur == thisBookID
                      })[0].Verfasser
                    })

                  detailviewTableTr3.append("td").text("Herausgeber: ")
                  detailviewTableTr3.append("td").text(function(d) {
                      return korpus.filter(function(D, I) {
                        return D.KurzSignatur == thisBookID
                      })[0].Herausgeber
                    })

                  detailviewTableTr4.append("td").text("Verlag: ")
                  detailviewTableTr4.append("td").text(function(d) {
                      return korpus.filter(function(D, I) {
                        return D.KurzSignatur == thisBookID
                      })[0].Verlag
                    })

                  detailviewTableTr5.append("td").text("Genre: ")
                  detailviewTableTr5.append("td").text(function(d) {
                      return korpus.filter(function(D, I) {
                        return D.KurzSignatur == thisBookID
                      })[0].Formalschlagwort_Genre
                    })

                  detailviewTableTr6.append("td").text("Ort: ")
                  detailviewTableTr6.append("td").text(function(d) {
                      return korpus.filter(function(D, I) {
                        return D.KurzSignatur == thisBookID
                      })[0].Ort
                    })

                    detailviewTableTr7.append("td").text("Datierung: ")
                    detailviewTableTr7.append("td").text(function(d) {
                        return korpus.filter(function(D, I) {
                          return D.KurzSignatur == thisBookID
                        })[0].Jahr
                      })



                  detailviewTableTr8.append("td").text("Seiten-ID: ")
                  detailviewTableTr8.append("td").text(thisPageID)
                  //
                  // detailviewTableTr9.append("td").text("Seiten-Inhalte: ")
                  // detailviewTableTr9.append("td").text("x")
                  //
                  //



                  // window.open(
                  //   "./img/m/" + thisPageID + ".jpg",
                  //   '_blank' // <- This is what makes it open in a new window.
                  // );

                }
              })



            //////////////
            //////////////
            ///Hover-Transcript

            d3.selectAll(".transcriptions").attr("cursor", "pointer").selectAll("text").on("mousemove", function(d) {

              if (scrollTop >= 0) {
                var currentScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)

                //    var mouseY = ((d3.event.layerY || d3.event.offsety) - currentScrollTop-120);
                var mouseY = ((d3.event.pageY) - currentScrollTop - 270 - posYCanvas);



                //        thisVerfasser = d3.select(this).datum().values[0].Verfasser
                //                var thisBookID = d3.select(this).datum().values[0].BookID
                var thisPageID = d3.select(this).datum().ID


                if (scrollTop > 500) {
                  d3.selectAll('.detail_cover')
                    .attr("xlink:href", function(d) {
                      return "./img/m/" + thisPageID + ".jpg"
                    })
                }



              } else if (scrollTop <= 500) {

                tooltip.select("img").attr("src", function() {
                  return "./img/m/" + thisPageID + ".jpg"
                })

              }

            })






          }

          ////////Scroll-Section > 0 Ende
          ///////////////////////////////////////
          ///////////////////////////////////////
          ///////////////////////////////////////

        }


        draw()

        function draw() {
          //		context.globalCompositeOperation = 'multiply';
          // clear canvas

          context.clearRect(0, 0, width, height);
          ///draw elements
          var bookGroups = dataContainer.selectAll(".bookFingerprint")


          // areachart.each(function(d){
          //
          //
          //   context.beginPath();
          //   area(d);
          //   if (d.key == "SonstigeMarkierungNorm"){
          //     context.fillStyle = 'blue';
          //     context.strokeStyle = 'blue';
          //   }else{
          //   context.fillStyle = 'red';
          //   context.strokeStyle = 'red';}
          //   context.fill();
          // })

          bookGroups.each(function(d) {
            var bookGroupPosition = Number(d3.select(this).attr("transform").replace("translate(", "").split(',')[0])

            var elementswhite = d3.select(this).selectAll(".nodesbg");

            elementswhite.each(function(d) {

              var node = d3.select(this);
              var nodeXPos = Number(node.attr("x")) + bookGroupPosition
              context.fillStyle = node.attr("fill");
              context.globalAlpha = node.attr("opacity")
              //          context.shadowBlur = 0


              context.beginPath();
              context.rect((nodeXPos), (node.attr("y")), (node.attr("width")), (node.attr("height")))
              //	context.arc((+node.attr("x")), (+node.attr("y")),  (+node.attr("width")), (+node.attr("height")));
              context.fill();
              context.closePath();
            })



            var elements = d3.select(this).selectAll(".nodes");

            elements.each(function(d) {
              var node = d3.select(this);
              var nodeXPos = Number(node.attr("x")) + bookGroupPosition

              context.fillStyle = node.attr("fill");
              context.globalAlpha = node.attr("opacity")

              //context.globalCompositeOperation = 'multiply';

              // if (filter != null && node.attr("opacity")!= 0){


              // context.shadowColor = node.attr("fill");
              // context.shadowBlur = 5
              //;}
              // else{ context.shadowBlur = 0}

              context.beginPath();
              context.rect((nodeXPos), (node.attr("y")), (node.attr("width")), (node.attr("height")))
              //	context.arc((+node.attr("x")), (+node.attr("y")),  (+node.attr("width")), (+node.attr("height")));
              context.fill();
              context.closePath();
            })
          })

        }



      });
