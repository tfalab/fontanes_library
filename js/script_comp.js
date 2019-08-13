if (window.location.hash != "") {
  d3.select("#overlay").style("display", "none")
  d3.select("#start").style("display", "none")
  d3.select("#tutorial").style("display", "none")
  d3.select(".tippbubble").style("display", "none")
  d3.select("html,body").style("overflow-y", "scroll")

} else {
  if (localStorage.getItem("isNewSession") !== 'true') {
    d3.select("#tutorial").style("display", "none")
    d3.select(".tippbubble").style("display", "inline")

    localStorage.setItem('isNewSession', 'true');
  } else {
    d3.select("#tutorial").style("display", "none")
    d3.select(".tippbubble").style("display", "inline")
  }
}


var noScroll = document.getElementById('scrollnavi');
var noScroll2 = document.getElementById('overlay');


noScroll.addEventListener('touchmove', function(e) {

  e.preventDefault();

}, false);

noScroll2.addEventListener('touchmove', function(e) {

  e.preventDefault();

}, false);




d3.selectAll("#mehrinfos").on("click", function() {
  d3.select("#overlay").style("display", "block").transition().duration(600).style("opacity", .5)
  d3.select("#start").style("opacity", 0)
  d3.select("#about").style("display", "block").transition().duration(600).style("opacity", 1)

  setTimeout(function() {
    d3.select("#start").style("display", "none")
  }, 800);

})

d3.selectAll("#aboutIcon").on("click", function() {
  d3.select("#overlay").style("display", "block").transition().duration(600).style("opacity", .5)
  d3.select("#about").style("opacity", 0)
  d3.select("#start").style("display", "block").transition().duration(600).style("opacity", 1)
  d3.select("#tutorial").style("display", "none")
  d3.select(".tippbubble").style("display", "none")
  d3.select(".sharebubble").style("display", "none")
  d3.select("html,body").style("overflow-y", "hidden")

})

d3.selectAll("#einfuerunginvis").on("click", function() {
  d3.select("html,body").style("overflow-y", "hidden")
  d3.select("#overlay").style("display", "block").transition().duration(600).style("opacity", .5)
  d3.select("#about").style("opacity", 0)
  d3.select("#start").style("opacity", 0)
  d3.select("#tutorial").style("display", "block").transition().duration(600).style("opacity", 1)
  d3.select(".tippbubble").style("display", "none")
  d3.select(".sharebubble").style("display", "none")


})



d3.selectAll(".about-close, #overlay, #vielspass").on("click", aboutCloseFunction)

function aboutCloseFunction() {
  d3.select("html,body").style("overflow-y", "scroll")
  d3.select("#overlay").transition().duration(600).style("opacity", 0)
  d3.select("#start").transition().duration(600).style("opacity", 0)
  d3.select("#about").transition().duration(600).style("opacity", 0)
  d3.select("#detailview").transition().duration(600).style("opacity", 0)
  d3.select("#tutorial").transition().duration(600).style("opacity", 0)
  d3.selectAll(".detailviewPrevious,.detailviewNext").style("display", "none")


  setTimeout(function() {
    d3.select("#overlay").style("display", "none")
    d3.select("#start").style("display", "none")
    d3.select("#about").style("display", "none")
    d3.select("#detailview").style("display", "none")
    d3.select("#tutorial").style("display", "none")
  }, 800);
}



function shareFunction() {
  var copyText = document.getElementById("shareInput");

  copyText.select();

  document.execCommand("copy");

  setTimeout(function() {
    d3.select(".sharebubble").style("display", "none")
  }, 100);

}

d3.select("#iconshare").on("click", function() {
  if (d3.select(".sharebubble").style("display") == "inline") {
    d3.select(".sharebubble").style("display", "none")
  } else {
    d3.select(".tippbubble").style("display", "none")
    d3.select(".sharebubble").style("display", "inline")
  }
})

d3.select("#tippIcon").on("click", function() {
  d3.select("html,body").style("overflow-y", "hidden")
  d3.select("#overlay").style("display", "block").transition().duration(600).style("opacity", .5)
  d3.select("#about").style("opacity", 0)
  d3.select("#start").style("opacity", 0)
  d3.select("#tutorial").style("display", "block").transition().duration(600).style("opacity", 1)
  d3.select(".tippbubble").style("display", "none")
  d3.select(".sharebubble").style("display", "none")
})


d3.selectAll(".tippsende").on("click", function() {
  d3.select(".tippbubble").transition().duration(800).style("opacity", 0).transition().delay(1000).style("display", "none")
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

  var scrollCircleScale2 = d3.scaleLinear()
    .domain([-2500, 0])
    .range([firstScrollIcon, secondScrollIcon])
    .clamp(true)




  if (modus == "distribution") {

    d3.selectAll(".scrollCircleFollower")
      .attr("cy", scrollCircleScale(newScrollTop))
      .attr("r", function() {
        if (window.innerWidth < 2000) {
          return 5
        } else {
          return 10
        }
      })

  } else if (modus == "similarity") {

    var scrollCircleZoomScale = d3.scaleLinear()
      .domain([-3000, -2500, 0, 3000])
      .range([1, 5, 5, 1])
      .clamp(true)


    d3.selectAll(".scrollCircleFollower")
      .attr("cy", scrollCircleScale2(newScrollTop))
      .attr("r", function() {
        if (window.innerWidth < 2000) {
          return scrollCircleZoomScale(newScrollTop)
        } else {
          return scrollCircleZoomScale(newScrollTop) * 2
        }
      })
  } else {

    d3.selectAll(".scrollCircleFollower")
      .attr("cy", scrollCircleScale(newScrollTop))
  }

}



scroller
  .on("scroll", function() {

    var scrollTop2 = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)


    newScrollTop = scrollTop2




    ////////////////////scrollnavi/
    ////////////////////////////////////////

    if (modus == "distribution") {

      d3.selectAll(".scrollCircleFollower")
        .attr("cy", scrollCircleScale(newScrollTop))

    } else if (modus == "similarity") {

      d3.selectAll(".scrollCircleFollower")
        .attr("cy", scrollCircleScale2(newScrollTop))
    } else {

      d3.selectAll(".scrollCircleFollower")
        .attr("cy", scrollCircleScale(newScrollTop))
    }
    ////////////////////scrollnaviEnde
    ////////////////////////////////////////
  })









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

var firstScrollIcon = canvasTop + 9
var thirdScrollIcon = window.innerHeight - 40
var secondScrollIcon = firstScrollIcon + (thirdScrollIcon - firstScrollIcon) / 2

var scrollBgLines = scrollSvg.append("g").attr("transform", "translate(39,-5)")
var scrollCircles = scrollSvg.append("g").attr("transform", "translate(40,-5)")
var scrollIcons = scrollSvg.append("g").attr("transform", "translate(0,-18)")
var scrollLabels = scrollSvg.append("g").attr("transform", "translate(58,-5)")


d3.selectAll(".verfasserbubble").style("top", function() {
  return -10 + firstScrollIcon - d3.select(".verfasserbubble").style("height").replace(/px/, "") / 2 + "px"
})
d3.selectAll(".buchbubble").style("top", function() {
  return -10 + secondScrollIcon - d3.select(".buchbubble").style("height").replace(/px/, "") / 2 + "px"
})
d3.selectAll(".seitenbubble").style("top", function() {
  return -15 + thirdScrollIcon - d3.select(".seitenbubble").style("height").replace(/px/, "") / 2 + "px"
})

scrollSvg.append("image").attr("xlink:href", "icons/distribution.svg")
  .attr("class", "distributionbutton")
  .attr("y", function(d) {
    if (window.innerWidth < 2000) {
      return 10
    } else {
      return 10
    }
  })
  .attr("x", function(d) {
    if (window.innerWidth < 2000) {
      return 18
    } else {
      return 18
    }
  })
  .attr("width", function(d) {
    if (window.innerWidth < 2000) {
      return 45
    } else {
      return 65
    }
  })
  .attr("height", function(d) {
    if (window.innerWidth < 2000) {
      return 45
    } else {
      return 65
    }
  })


scrollSvg.append("image").attr("xlink:href", "icons/similarity.svg")
  .style("opacity", 0.5)
  .attr("class", "similaritybutton")
  .attr("y", function(d) {
    if (window.innerWidth < 2000) {
      return 70
    } else {
      return 90
    }
  })
  .attr("x", function(d) {
    if (window.innerWidth < 2000) {
      return 18
    } else {
      return 18
    }
  })
  .attr("width", function(d) {
    if (window.innerWidth < 2000) {
      return 45
    } else {
      return 65
    }
  })
  .attr("height", function(d) {
    if (window.innerWidth < 2000) {
      return 45
    } else {
      return 65
    }
  })




scrollBgLines.append("line")
  .attr("x1", 0)
  .attr("x2", function(d) {
    if (window.innerWidth < 2000) {
      return 4
    } else {
      return 5
    }
  })
  .attr("y1", firstScrollIcon)
  .attr("y2", thirdScrollIcon)
  .attr("stroke", "white")
  .style("opacity", 0.3)
  .attr("class", "firstScrollLine")

scrollBgLines.append("line")
  .attr("x1", function(d) {
    if (window.innerWidth < 2000) {
      return 22
    } else {
      return 34
    }
  })
  .attr("x2", function(d) {
    if (window.innerWidth < 2000) {
      return 18
    } else {
      return 29
    }
  })
  .attr("y1", firstScrollIcon)
  .attr("y2", thirdScrollIcon)
  .attr("stroke", "white")
  .style("opacity", 0.3)
  .attr("class", "secondScrollLine")



scrollIcons.append("image")
  .attr("xlink:href", "icons/authorlevel.svg")
  .attr("y", function(d) {
    if (window.innerWidth < 2000) {
      return firstScrollIcon + 5
    } else {
      return firstScrollIcon + 2
    }
  })
  .attr("x", function(d) {
    if (window.innerWidth < 2000) {
      return 10
    } else {
      return 7
    }
  })
  .attr("width", function(d) {
    if (window.innerWidth < 2000) {
      return 20
    } else {
      return 25
    }
  })
  .attr("height", function(d) {
    if (window.innerWidth < 2000) {
      return 20
    } else {
      return 25
    }
  })
  .style("cursor", "pointer")
  .on("click", function() {
    d3.event.stopPropagation()
    if (modus == "distribution") {
      $("html,body").animate({
        scrollTop: 0
      }, 805)
    } else if (modus == "similarity") {
      $("html,body").animate({
        scrollTop: 500
      }, 805)
    }
  })
  .attr("class", "autorIcon")
  .on("mouseover", function() {
    d3.selectAll(".verfasserbubble").style("display", "block").style("top", function() {
      return -10 + firstScrollIcon - d3.select(".verfasserbubble").style("height").replace(/px/, "") / 2 + "px"
    })
  })
  .on("mouseout", function() {
    d3.selectAll(".verfasserbubble").style("display", "none")
  })






scrollIcons.append("image")
  .attr("xlink:href", "icons/buchlevel.svg")
  .attr("y", function(d) {
    if (window.innerWidth < 2000) {
      return secondScrollIcon + 5
    } else {
      return secondScrollIcon + 2
    }
  })
  .attr("x", function(d) {
    if (window.innerWidth < 2000) {
      return 10
    } else {
      return 7
    }
  })
  .attr("width", function(d) {
    if (window.innerWidth < 2000) {
      return 20
    } else {
      return 25
    }
  })
  .attr("height", function(d) {
    if (window.innerWidth < 2000) {
      return 20
    } else {
      return 25
    }
  })
  .style("cursor", "pointer")
  .on("click", function() {
    d3.event.stopPropagation()
    $("html,body").animate({
      scrollTop: 3000
    }, 805)
  })
  .attr("class", "buchIcon")
  .on("mouseover", function() {
    d3.selectAll(".buchbubble").style("display", "block").style("top", function() {
      return -10 + secondScrollIcon - d3.select(".buchbubble").style("height").replace(/px/, "") / 2 + "px"
    })
  })
  .on("mouseout", function() {
    d3.selectAll(".buchbubble").style("display", "none")
  })




scrollIcons.append("image")
  .attr("xlink:href", "icons/seitenlevel.svg")
  .attr("y", function(d) {
    if (window.innerWidth < 2000) {
      return thirdScrollIcon + 5
    } else {
      return thirdScrollIcon - 2
    }
  })
  .attr("x", function(d) {
    if (window.innerWidth < 2000) {
      return 10
    } else {
      return 7
    }
  })
  .attr("width", function(d) {
    if (window.innerWidth < 2000) {
      return 20
    } else {
      return 25
    }
  })
  .attr("height", function(d) {
    if (window.innerWidth < 2000) {
      return 20
    } else {
      return 25
    }
  })
  .style("cursor", "pointer")
  .on("click", function() {
    d3.event.stopPropagation()
    $("html,body").animate({
      scrollTop: 6000
    }, 805)
  })
  .attr("class", "seitenIcon")
  .on("mouseover", function() {
    d3.selectAll(".seitenbubble").style("display", "block").style("top", function() {
      return -15 + thirdScrollIcon - d3.select(".seitenbubble").style("height").replace(/px/, "") / 2 + "px"
    })
  })
  .on("mouseout", function() {
    d3.selectAll(".seitenbubble").style("display", "none")
  })

scrollCircles.append("circle")
  .attr("r", function() {
    if (window.innerWidth < 2000) {
      return 11
    } else {
      return 18
    }
  })
  .attr("cx", function() {
    if (window.innerWidth < 2000) {
      return 10
    } else {
      return 16
    }
  })
  .attr("cy", firstScrollIcon)
  .attr("stroke", "white")
  .attr("fill", "#474747")
  .style("cursor", "pointer")
  .attr("class", "firstScrollCircle")
  .on("click", function() {
    d3.event.stopPropagation()
    if (modus == "distribution") {
      $("html,body").animate({
        scrollTop: 0
      }, 805)
    } else if (modus == "similarity") {
      $("html,body").animate({
        scrollTop: 500
      }, 805)
    }
  })

scrollCircles.append("circle")
  .attr("r", function() {
    if (window.innerWidth < 2000) {
      return 9
    } else {
      return 15
    }
  })
  .attr("cx", function() {
    if (window.innerWidth < 2000) {
      return 10
    } else {
      return 16
    }
  })
  .attr("cy", secondScrollIcon)
  .attr("stroke", "white")
  .attr("fill", "#474747")
  .style("cursor", "pointer")
  .on("click", function() {
    d3.event.stopPropagation()
    $("html,body").animate({

      scrollTop: 3000
    }, 805)
  })
  .attr("class", "secondScrollCircle")

scrollCircles.append("circle")
  .attr("r", function() {
    if (window.innerWidth < 2000) {
      return 7
    } else {
      return 12
    }
  })
  .attr("cx", function() {
    if (window.innerWidth < 2000) {
      return 10
    } else {
      return 16
    }
  })
  .attr("cy", thirdScrollIcon - 5)
  .attr("stroke", "white")
  .attr("fill", "#474747")
  .style("cursor", "pointer")
  .on("click", function() {
    d3.event.stopPropagation()
    $("html,body").animate({
      scrollTop: 6000
    }, 805)
  })
  .attr("class", "thirdScrollCircle")

var scrollCircleFollower = scrollCircles.append("circle")
  .attr("r", function() {
    if (window.innerWidth < 2000) {
      return 5
    } else {
      return 10
    }
  })
  .attr("cx", function() {
    if (window.innerWidth < 2000) {
      return 10
    } else {
      return 16
    }
  })
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
  //d3.event.stopPropagation()
  d3.select(this).attr("cy", function() {
    if (modus == "distribution") {
      if (d3.event.y < firstScrollIcon) {
        return firstScrollIcon
      } else if (d3.event.y > thirdScrollIcon - 5) {
        return thirdScrollIcon - 5
      } else {
        return d3.event.y
      }
    } else if (modus == "similarity") {
      if (d3.event.y < firstScrollIcon) {
        return firstScrollIcon
      } else if (d3.event.y > secondScrollIcon - 5) {
        return secondScrollIcon
      } else {
        return d3.event.y
      }
    }

  });
  if (modus == "distribution") {
    window.scrollTo(0, scrollCircleScaleReverse(d3.event.y))
  } else if (modus == "similarity") {
    window.scrollTo(0, scrollCircleScaleReverse2(d3.event.y))
  }

}

function dragended(d) {
  d3.select(this).classed("active", false)
    .attr("cursor", "grab")
}


d3.select("#scrollSvg").on("click", function() {
  if (modus == "distribution" && d3.event.y >= firstScrollIcon && d3.event.y <= thirdScrollIcon - 5) {
    $("html,body").animate({
      scrollTop: scrollCircleScaleReverse(d3.event.y)
    }, '100')
  } else if (modus == "similarity" && d3.event.y >= firstScrollIcon && d3.event.y <= secondScrollIcon) {
    $("html,body").animate({
      scrollTop: scrollCircleScaleReverse2(d3.event.y)
    }, '100')
  }
})






var scrollCircleScaleReverse = d3.scaleLinear()
  .domain([firstScrollIcon, secondScrollIcon, thirdScrollIcon + 0])
  .range([0, 3000, 6000])
  .clamp(true)

var scrollCircleScaleReverse2 = d3.scaleLinear()
  .domain([firstScrollIcon, secondScrollIcon])
  .range([500, 3000])
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


/////Variables for transitions
///draw of canvas is only triggered, if a transition is active (transtion > 0) or after scrolling. If a transition occurs transitonsNeu+1 .
//After transition ends transitionNeu is decreased again by -1
//during a transition triggered by clicks on books, the scrollfunction shouldn't occur because it would block the bookClick transition. For this we use transitionbookClick
var transitions = false
var transitionsNeu = 0
var transitionbookClick = true



///Load data

Promise.all([
    d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vStg2qx0x9UnOQ_7e9Z7lHpZaM9waLYmwidse5_Gjq6MmYUgfAZIpdBv1CWoqKRQjHgAx4BSgdCZ3Z6/pub?output=csv"), //daten
    d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vS645PG9nYFEi8th_jpOF1OOnkReHbAJNMcUpeNG3QsUbCqamvAAKfUTVaTOVfTZPtEG0lx2twPTnEl/pub?output=csv"), //korpus
    d3.csv("data/complication190806.csv"), //complication
  ])
  .then(([dataset, korpus, complicationData]) => {

    var fullHash = 0
    var level = "start"

    if (window.location.hash != "") {
      fullHash = window.location.hash.split("?");
      modus = fullHash[0].substring(7)
      level = fullHash[1].substring(6)
      filter = fullHash[2].substring(7)
      clickedBook = fullHash[3].substring(8)
    }



    if (modus == "distribution") {
      implication()
    } else if (modus == "similarity") {
      implication()
      complication()
      //  hashLoad()
    } else {
      implication()
    }

    d3.select(".similaritybutton")
      .on("mouseover", function() {
        d3.select(this).style("opacity", 1)
        d3.select(".complicationbubble").style("display", "block")
      })
      .on("mouseout", function() {
        d3.select(".complicationbubble").style("display", "none")
        if (modus == "distribution") {
          // d3.selectAll(".buttonTooltip").remove()

          d3.select(this).style("opacity", 0.5)

        } else {
          d3.selectAll(".buttonTooltip").remove()

          d3.select(this).style("opacity", 1)
        }
      })
      .on("click", function() {
        d3.select(".complicationbubble").style("display", "none")
        modus = "similarity"
        d3.selectAll(".complicationVisBaseG").remove()
        d3.selectAll(".detailDiv").style("display", "none")

        if (scrollTop < -1700) {
          clickedBook = 0

          $("html,body").animate({
            scrollTop: 500
          }, 500)
        } else {
          $("html,body").animate({
            scrollTop: 3000
          }, 500)
        }

        complication()
      })





    function implication() {

      d3.select(".distributionbutton")
        .on("mouseover", function() {
          d3.select(this).style("opacity", 1)
          d3.select(".explicationbubble").style("display", "block")

        })
        .on("mouseout", function() {
          d3.select(".explicationbubble").style("display", "none")

          if (modus == "distribution") {
            d3.select(this).style("opacity", 1)
          } else {
            d3.select(this).style("opacity", 0.7)
          }
        })
        .on("click", function() {
          d3.select(".explicationbubble").style("display", "none")
          modus = "distribution"
          d3.selectAll(".complicationVisBaseG").remove()




          if (clickedBook != 0) {
            thisData = datenByTitle.filter(function(d) {
                return d.key == clickedBook
              })[0]
              .values.filter(function(d) {
                return d.Benutzungsspur != "" && d.Benutzungsspur != "4f" && d.Benutzungsspur != "4f?"
              })
          }

          implicationStart()


          window.requestAnimationFrame(animate)
          scrollFunction()
          hashLoad()

          if (clickedBook == 0) {
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

          }

          if (scrollTop < -1500) {
            level = -3000

            $("html,body").animate({
              scrollTop: 0
            }, 500)
          } else {
            level = 0

            $("html,body").animate({
              scrollTop: 3000
            }, 500)
          }


        })

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
        return d.SchriftspurTranskription != "" && d.SchriftspurTyp != "P"
      })

      var searchDatenGroups = d3.nest()
        .key(function(d) {
          return d.searchCluster;
        })
        .entries(searchDatenCreator)
        .sort(function(a, b) {
          return b.values.length - a.values.length
        })

      var searchDaten = []


      searchDatenGroups.forEach(function(D, I) {
        searchDaten.push({
          id: I,
          text: D.key,
          count: D.values.length,
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

        eigentumsangaben.select("text").transition().duration(800).style("fill", "#707070")
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

        zusatzMaterial.selectAll("text").style("font-weight", "400").style("opacity", 1)
        marginalien.selectAll("text").style("font-weight", "400").style("opacity", 1)
        anderes.selectAll("text").style("font-weight", "400").style("opacity", 1)
        markierungen.selectAll("text").style("font-weight", "400").style("opacity", 1)
        eigentumsangaben.selectAll("text").style("font-weight", "400").style("opacity", 1)
        marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
        markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
        eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")



        dataContainer.selectAll(".nodesbg").transition().attr("fill", "white").style("opacity", 1)


      })


      $("#search").on("select2-selecting", function(e) {

        filter = null
        clickedBook = 0

        eigentumsangaben.select("text").transition().duration(800).style("fill", "#707070")
        anderes.select("text").transition().duration(800).style("fill", "#f284c0")
        zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
        marginalien.select("text").transition().duration(800).style("fill", "#f73f26")
        markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

        eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
        anderes.select("rect").transition().duration(800).style("opacity", 0)
        zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
        marginalien.select("rect").transition().duration(800).style("opacity", 0)
        markierungen.select("rect").transition().duration(800).style("opacity", 0)



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
        transitionsNeu++
        setTimeout(function() {
          transitions = false
          transitionsNeu--

        }, 1000);


        $("html,body").animate({
          scrollTop: 3000
        }, '0')


        d3.selectAll(".singleBookBG").style("opacity", 0)

        dataContainer.selectAll(".nodesbg").transition().attr("fill", "#f7ece4")




        dataContainer.selectAll(".nodesbg").filter(function(d) {
            return d3.select(this).datum().values.filter(function(D) {
              return D.searchCluster == e.choice.text
            }).length > 0
          })
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
            return d.SchriftspurTyp.includes("K") == true
          })
          .attr("opacity", 1)
          .transition()
          .attr("fill", "#FF8A5D")

        dataContainer.selectAll(".nodes")
          .filter(function(d) {
            return d.searchCluster == e.choice.text
          })
          .filter(function(d) {
            return d.SchriftspurTyp.includes("T") == true
          })
          .attr("opacity", 1)
          .transition()
          .attr("fill", "#a4105f")

        dataContainer.selectAll(".nodes")
          .filter(function(d) {
            return d.searchCluster == e.choice.text
          })
          .filter(function(d) {
            return d.SchriftspurTyp.includes("V") == true
          })
          .attr("opacity", 1)
          .transition()
          .attr("fill", "#fb8385")

        dataContainer.selectAll(".nodes")
          .filter(function(d) {
            return d.searchCluster == e.choice.text
          })
          .filter(function(d) {
            return d.SchriftspurTyp.includes("U") == true
          })
          .attr("opacity", 1)
          .transition()
          .attr("fill", "#d93168")



      })








      setTimeout(function() {
        hashLoad()
      }, 50);




      var datensatzAll = dataset //.filter(function(d,i){return d.Benutzungsspur != ""})

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

      var BuchAnzahl = datenByTitle.length
      var authorAnzahl = datenByAuthor.filter(function(d, i) {
        return d.values[0].values[0].AuthorCount > 1
      }).length







      var totalBuchWidth = buchBgBreite * BuchAnzahl
      var authorAbstand = ((chartArea - totalBuchWidth) + (buchBgBreite * authorAnzahl)) / (authorAnzahl - 1)

      ///Author-Ebene Größen und Abstände
      var authorLevelAbstand = (chartArea - totalAreaChartsWidth) / authorAnzahl

      ///Seiten-Ebene Größen und Abstände
      var sLBuchAbstand = chartArea / authorAnzahl


      var thisVerfasserSelectedBookCount = datenByAuthor.filter(function(d, i) {
        return d.key == "Fontane, Theodor"
      })[0].values.length
      var sLTotalBuchWidthSelected = (thisVerfasserSelectedBookCount) * sLBuchAbstandSelected
      var sLTotalBuchWidthUnselected = (BuchAnzahl - thisVerfasserSelectedBookCount - (authorAnzahl - 1)) * sLBuchAbstandUnselected
      var sLAuthorAbstand2 = (chartArea - (sLTotalBuchWidthSelected + sLTotalBuchWidthUnselected)) / (authorAnzahl - 1)


      ///Setting für Buch-buchauswahl





      var unselectedBookSameAuthorBuchlevel = 3
      var unselectedBookSameAuthorSeitenlevel = 3




      var onSelectionBuchAbstandScale = d3.scaleLinear()
        .domain([0, 3000])
        .range([onSelectionBuchAbstandBL, onSelectionBuchAbstandSL])
        .clamp(true)








      //////////legend///////////////////////////////////////
      ////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////









      ////////////////Provenienz-Filter Start


      d3.selectAll(".EigentumsangabenFilter")
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


            eigentumsangaben.selectAll("text").style("font-weight", "bold").style("opacity", 1)
            zusatzMaterial.selectAll("text").style("font-weight", "200").style("opacity", .6)
            anderes.selectAll("text").style("font-weight", "200").style("opacity", .6)
            marginalien.selectAll("text").style("font-weight", "200").style("opacity", .6)
            markierungen.selectAll("text").style("font-weight", "200").style("opacity", .6)

            eigentumsangabendetail.transition().duration(800).attr("transform", "scale(1,1)").style("opacity", 1).style("pointer-events", "auto")
            markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
            marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")

          } else {
            eigentumsangaben.select("text").transition().duration(800).style("fill", "#707070")
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
            zusatzMaterial.selectAll("text").style("font-weight", "400").style("opacity", 1)
            marginalien.selectAll("text").style("font-weight", "400").style("opacity", 1)
            anderes.selectAll("text").style("font-weight", "400").style("opacity", 1)
            markierungen.selectAll("text").style("font-weight", "400").style("opacity", 1)
            eigentumsangaben.selectAll("text").style("font-weight", "400").style("opacity", 1)
            eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
          }

        })




      d3.selectAll(".filter-provenienz")
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



      d3.selectAll(".filter-provenienzstempel")
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



      d3.selectAll(".MarkierungFilter")
        .on("click", function() {
          if (filter != "markierungen") {
            filter = "markierungen"
            markierungenEntfaltet = true

            farbausfaltungMarkierung()
            filterInteraction()

            markierungen.select("text").transition().duration(800).style("fill", "white")
            markierungen.select("rect").transition().duration(800).style("opacity", 1)

            eigentumsangaben.select("text").transition().duration(800).style("fill", "#707070")
            anderes.select("text").transition().duration(800).style("fill", "#f284c0")
            zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
            marginalien.select("text").transition().duration(800).style("fill", "#f73f26")

            eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
            anderes.select("rect").transition().duration(800).style("opacity", 0)
            zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
            marginalien.select("rect").transition().duration(800).style("opacity", 0)


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

            eigentumsangaben.select("text").transition().duration(800).style("fill", "#707070")
            anderes.select("text").transition().duration(800).style("fill", "#f284c0")
            zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
            marginalien.select("text").transition().duration(800).style("fill", "#f73f26")
            markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

            eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
            anderes.select("rect").transition().duration(800).style("opacity", 0)
            zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
            marginalien.select("rect").transition().duration(800).style("opacity", 0)
            markierungen.select("rect").transition().duration(800).style("opacity", 0)

            zusatzMaterial.selectAll("text").style("font-weight", "400").style("opacity", 1)
            marginalien.selectAll("text").style("font-weight", "400").style("opacity", 1)
            markierungen.selectAll("text").style("font-weight", "400").style("opacity", 1)
            eigentumsangaben.selectAll("text").style("font-weight", "400").style("opacity", 1)
            anderes.selectAll("text").style("font-weight", "400").style("opacity", 1)
            markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
          }
        })



      d3.selectAll(".filter-anstreichung")
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



      d3.selectAll(".filter-unterstreichung")
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


      d3.selectAll(".filter-durchstreichung")
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



      d3.selectAll(".filter-sonstigeMarkierung")
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



      d3.selectAll(".MarginalienFilter")
        .on("click", function() {
          if (filter != "marginalien") {
            filter = "marginalien"
            marginalienEntfaltet = true

            farbausfaltungMarginalien()
            filterInteraction()

            marginalien.select("text").transition().duration(800).style("fill", "white")
            marginalien.select("rect").transition().duration(800).style("opacity", 1)

            eigentumsangaben.select("text").transition().duration(800).style("fill", "#707070")
            anderes.select("text").transition().duration(800).style("fill", "#f284c0")
            zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
            markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

            eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
            anderes.select("rect").transition().duration(800).style("opacity", 0)
            zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
            markierungen.select("rect").transition().duration(800).style("opacity", 0)

            marginalien.selectAll("text").style("font-weight", "bold")
            marginaliendetail.transition().duration(800).attr("transform", "scale(1,1)").style("opacity", 1).style("pointer-events", "auto")

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

            eigentumsangaben.select("text").transition().duration(800).style("fill", "#707070")
            anderes.select("text").transition().duration(800).style("fill", "#f284c0")
            zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
            marginalien.select("text").transition().duration(800).style("fill", "#f73f26")
            markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

            eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
            anderes.select("rect").transition().duration(800).style("opacity", 0)
            zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
            marginalien.select("rect").transition().duration(800).style("opacity", 0)
            markierungen.select("rect").transition().duration(800).style("opacity", 0)

            zusatzMaterial.selectAll("text").style("font-weight", "400").style("opacity", 1)
            anderes.selectAll("text").style("font-weight", "400").style("opacity", 1)
            marginalien.selectAll("text").style("font-weight", "400").style("opacity", 1)
            markierungen.selectAll("text").style("font-weight", "400").style("opacity", 1)
            eigentumsangaben.selectAll("text").style("font-weight", "400").style("opacity", 1)
            marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
          }
        })



      d3.selectAll(".filter-bewertung")
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



      d3.selectAll(".filter-kommentar")
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



      d3.selectAll(".filter-textkorrektur")
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



      d3.selectAll(".filter-variante")
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



      d3.selectAll(".filter-uebersetzung")
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


      //  .attr("x", 600)

      d3.selectAll(".zusatzmaterial-title")
        .on("click", function() {
          if (filter != "zusatzMaterial") {
            filter = "zusatzMaterial"
            filterInteraction()

            zusatzMaterial.select("text").transition().duration(800).style("fill", "white")
            zusatzMaterial.select("rect").transition().duration(800).style("opacity", 1)

            eigentumsangaben.select("text").transition().duration(800).style("fill", "#707070")
            anderes.select("text").transition().duration(800).style("fill", "#f284c0")
            marginalien.select("text").transition().duration(800).style("fill", "#f73f26")
            markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

            eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
            anderes.select("rect").transition().duration(800).style("opacity", 0)
            marginalien.select("rect").transition().duration(800).style("opacity", 0)
            markierungen.select("rect").transition().duration(800).style("opacity", 0)

            zusatzMaterial.selectAll("text").style("font-weight", "bold").style("opacity", 1)
            marginalien.selectAll("text").style("font-weight", "200").style("opacity", .6)
            markierungen.selectAll("text").style("font-weight", "200").style("opacity", .6)
            eigentumsangaben.selectAll("text").style("font-weight", "200").style("opacity", .6)
            anderes.selectAll("text").style("font-weight", "200").style("opacity", .6)


            eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
            markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
            marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
          } else {

            eigentumsangaben.select("text").transition().duration(800).style("fill", "#707070")
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
            filterInteraction()
            anderes.selectAll("text").style("font-weight", "400").style("opacity", 1)
            zusatzMaterial.selectAll("text").style("font-weight", "400").style("opacity", 1)
            marginalien.selectAll("text").style("font-weight", "400").style("opacity", 1)
            markierungen.selectAll("text").style("font-weight", "400").style("opacity", 1)
            eigentumsangaben.selectAll("text").style("font-weight", "400").style("opacity", 1)
          }
        })


      d3.selectAll(".anderes-title")
        .on("click", function() {
          if (filter != "anderes") {
            filter = "anderes"
            filterInteraction()

            anderes.select("text").transition().duration(800).style("fill", "white")
            anderes.select("rect").transition().duration(800).style("opacity", 1)

            eigentumsangaben.select("text").transition().duration(800).style("fill", "#707070")
            zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
            marginalien.select("text").transition().duration(800).style("fill", "#f73f26")
            markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

            eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
            zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
            marginalien.select("rect").transition().duration(800).style("opacity", 0)
            markierungen.select("rect").transition().duration(800).style("opacity", 0)

            anderes.selectAll("text").style("font-weight", "bold").style("opacity", 1)
            zusatzMaterial.selectAll("text").style("font-weight", "200").style("opacity", .6)
            marginalien.selectAll("text").style("font-weight", "200").style("opacity", .6)
            markierungen.selectAll("text").style("font-weight", "200").style("opacity", .6)
            eigentumsangaben.selectAll("text").style("font-weight", "200").style("opacity", .6)

            eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
            markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
            marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
          } else {
            eigentumsangaben.select("text").transition().duration(800).style("fill", "#707070")
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
            filterInteraction()
            anderes.selectAll("text").style("font-weight", "400").style("opacity", 1)
            zusatzMaterial.selectAll("text").style("font-weight", "400").style("opacity", 1)
            marginalien.selectAll("text").style("font-weight", "400").style("opacity", 1)
            markierungen.selectAll("text").style("font-weight", "400").style("opacity", 1)
            eigentumsangaben.selectAll("text").style("font-weight", "400").style("opacity", 1)
          }
        })




      //////////////Rezize Function Start
      $(window).resize(function() {
        width = window.innerWidth - 100
        height = window.innerHeight - 120

        if (window.innerWidth >= 2000) {
          height = window.innerHeight - 160
        }


        ratio = getRetinaRatio()
        scaledWidth = width * ratio
        caledHeight = height * ratio

        chartArea = width - marginleft - marginright
        areaheight = (window.innerHeight - 310)
        ///Buch-Ebene Größen und Abstände





        firstScrollIcon = canvasTop + 9
        thirdScrollIcon = window.innerHeight - 40
        secondScrollIcon = firstScrollIcon + (thirdScrollIcon - firstScrollIcon) / 2


        d3.select(".firstScrollCircle")
          .attr("cy", firstScrollIcon)

        d3.selectAll(".firstScrollLine,.secondScrollLine").attr("y1", firstScrollIcon)


        if (modus == "similarity") {
          d3.selectAll(".firstScrollLine,.secondScrollLine").attr("y2", secondScrollIcon)
        } else {
          d3.selectAll(".firstScrollLine,.secondScrollLine").attr("y2", thirdScrollIcon)
        }

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

        d3.selectAll(".verfasserbubble").style("top", function() {
          return -10 + firstScrollIcon - d3.select(".verfasserbubble").style("height").replace(/px/, "") / 2 + "px"
        })
        d3.selectAll(".buchbubble").style("top", function() {
          return -10 + secondScrollIcon - d3.select(".buchbubble").style("height").replace(/px/, "") / 2 + "px"
        })
        d3.selectAll(".seitenbubble").style("top", function() {
          return -15 + thirdScrollIcon - d3.select(".seitenbubble").style("height").replace(/px/, "") / 2 + "px"
        })


        d3.select(".distributionbutton")
          .attr("y", function(d) {
            if (window.innerWidth < 2000) {
              return 10
            } else {
              return 10
            }
          })
          .attr("x", function(d) {
            if (window.innerWidth < 2000) {
              return 18
            } else {
              return 18
            }
          })
          .attr("width", function(d) {
            if (window.innerWidth < 2000) {
              return 45
            } else {
              return 65
            }
          })
          .attr("height", function(d) {
            if (window.innerWidth < 2000) {
              return 45
            } else {
              return 65
            }
          })


        d3.select(".similaritybutton")
          .attr("y", function(d) {
            if (window.innerWidth < 2000) {
              return 70
            } else {
              return 90
            }
          })
          .attr("x", function(d) {
            if (window.innerWidth < 2000) {
              return 18
            } else {
              return 18
            }
          })
          .attr("width", function(d) {
            if (window.innerWidth < 2000) {
              return 45
            } else {
              return 65
            }
          })
          .attr("height", function(d) {
            if (window.innerWidth < 2000) {
              return 45
            } else {
              return 65
            }
          })


        scrollCircleScale = d3.scaleLinear()
          .domain([-3000, 0, 2600])
          .range([firstScrollIcon, secondScrollIcon, thirdScrollIcon - 5])
          .clamp(true)

        scrollCircleScale2 = d3.scaleLinear()
          .domain([-2500, 0])
          .range([firstScrollIcon, secondScrollIcon])
          .clamp(true)




        if (modus == "distribution") {

          d3.selectAll(".scrollCircleFollower")
            .attr("cy", scrollCircleScale(newScrollTop))
            .attr("r", function() {
              if (window.innerWidth < 2000) {
                return 5
              } else {
                return 10
              }
            })

        } else if (modus == "similarity") {

          var scrollCircleZoomScale = d3.scaleLinear()
            .domain([-3000, -2500, 0, 3000])
            .range([1, 5, 5, 1])
            .clamp(true)


          d3.selectAll(".scrollCircleFollower")
            .attr("cy", scrollCircleScale2(newScrollTop))
            .attr("r", function() {
              if (window.innerWidth < 2000) {
                return scrollCircleZoomScale(newScrollTop)
              } else {
                return scrollCircleZoomScale(newScrollTop) * 2
              }
            })

          // d3.selectAll(".scrollCircleFollower")
          //   .attr("cy", scrollCircleScale2(newScrollTop))
          //


        } else {

          d3.selectAll(".scrollCircleFollower")
            .attr("cy", scrollCircleScale(newScrollTop))
        }


        d3.select(".firstScrollLine")
          .attr("x2", function(d) {
            if (window.innerWidth < 2000) {
              return 4
            } else {
              return 5
            }
          })

        d3.select(".secondScrollLine")
          .attr("x1", function(d) {
            if (window.innerWidth < 2000) {
              return 22
            } else {
              return 34
            }
          })
          .attr("x2", function(d) {
            if (window.innerWidth < 2000) {
              return 18
            } else {
              return 29
            }
          })

        d3.select(".autorIcon").attr("y", function(d) {
            if (window.innerWidth < 2000) {
              return firstScrollIcon + 5
            } else {
              return firstScrollIcon + 2
            }
          })
          .attr("x", function(d) {
            if (window.innerWidth < 2000) {
              return 10
            } else {
              return 7
            }
          })
          .attr("width", function(d) {
            if (window.innerWidth < 2000) {
              return 20
            } else {
              return 25
            }
          })
          .attr("height", function(d) {
            if (window.innerWidth < 2000) {
              return 20
            } else {
              return 25
            }
          })


        d3.select(".buchIcon").attr("y", function(d) {
            if (window.innerWidth < 2000) {
              return secondScrollIcon + 5
            } else {
              return secondScrollIcon + 2
            }
          })
          .attr("x", function(d) {
            if (window.innerWidth < 2000) {
              return 10
            } else {
              return 7
            }
          })
          .attr("width", function(d) {
            if (window.innerWidth < 2000) {
              return 20
            } else {
              return 25
            }
          })
          .attr("height", function(d) {
            if (window.innerWidth < 2000) {
              return 20
            } else {
              return 25
            }
          })

        d3.select(".seitenIcon").attr("y", function(d) {
            if (window.innerWidth < 2000) {
              return thirdScrollIcon + 5
            } else {
              return thirdScrollIcon - 2
            }
          })
          .attr("x", function(d) {
            if (window.innerWidth < 2000) {
              return 10
            } else {
              return 7
            }
          })
          .attr("width", function(d) {
            if (window.innerWidth < 2000) {
              return 20
            } else {
              return 25
            }
          })
          .attr("height", function(d) {
            if (window.innerWidth < 2000) {
              return 20
            } else {
              return 25
            }
          })

        d3.select(".firstScrollCircle")
          .attr("r", function() {
            if (window.innerWidth < 2000) {
              return 11
            } else {
              return 18
            }
          })
          .attr("cx", function() {
            if (window.innerWidth < 2000) {
              return 10
            } else {
              return 16
            }
          })

        d3.select(".secondScrollCircle")
          .attr("r", function() {
            if (window.innerWidth < 2000) {
              return 9
            } else {
              return 15
            }
          })
          .attr("cx", function() {
            if (window.innerWidth < 2000) {
              return 10
            } else {
              return 16
            }
          })

        d3.select(".thirdScrollCircle")
          .attr("r", function() {
            if (window.innerWidth < 2000) {
              return 7
            } else {
              return 12
            }
          })
          .attr("cx", function() {
            if (window.innerWidth < 2000) {
              return 10
            } else {
              return 16
            }
          })


        d3.select(".scrollCircleFollower")
          .attr("r", function() {
            if (window.innerWidth < 2000) {
              return 5
            } else {
              return 10
            }
          })
          .attr("cx", function() {
            if (window.innerWidth < 2000) {
              return 10
            } else {
              return 16
            }
          })



        pageheight = areaheight / 1674


        if (window.innerWidth >= 2000) {
          buchBreite = 10
          buchBgBreite = 2 + buchBreite
          fontsize = 16

          posY = 160
          canvasTop = 310
          areaheight = (window.innerHeight - 350)
          height = window.innerHeight - posY //680;
          pageheight = areaheight / 1674

          d3.select("canvas").style("margin-top", canvasTop + "px")
          d3.select("#scrollnavi").style("width", 100 + "px")
          d3.select("#scrollsvg").style("width", 100 + "px")
          d3.select("#header").select("h1").style("margin-top", 8 + "px")

          sLBuchAbstandSelected = 38 //55
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

          xAreaMax = 3.5
          transcripttextwrap = 220
          transcriptLinePos = 15
        } else if (window.innerWidth < 1100 && window.innerWidth > 900) {
          posY = 90 //120  = Standart
          canvasTop = 240
          areaheight = (window.innerHeight - 280)
          height = window.innerHeight - posY
          pageheight = areaheight / 1674

          d3.select("canvas").style("margin-top", canvasTop + "px")
          d3.select("#scrollnavi").style("width", 80 + "px")
          d3.select("#scrollsvg").style("width", 80 + "px")
          d3.select("#header").select("h1").style("margin-top", 17 + "px")

          fontsize = 10

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
          posY = 90 //120  = Standart
          canvasTop = 240
          areaheight = (window.innerHeight - 280)
          height = window.innerHeight - posY
          pageheight = areaheight / 1674

          d3.select("canvas").style("margin-top", canvasTop + "px")
          d3.select("#scrollnavi").style("width", 80 + "px")
          d3.select("#scrollsvg").style("width", 80 + "px")
          d3.select("#header").select("h1").style("margin-top", 17 + "px")

          fontsize = 7
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

        svg = d3.select("#svg")
          .style('width', width + 'px')
          .style('height', height + 'px')
        //.style("margin-top", posY)

        svgFront = d3.select("#svgFront")
          .style('width', width + 'px')
          .style('height', height + 'px')
        //  .style("margin-top", posY)

        svgFrontTitles = d3.select("#svgFrontTitles")
          .style('width', width + 'px')
          .style('height', height + 'px')
        //    .style("margin-top", posY)


        d3.select("body").style("font-size", fontsize + "px")

        d3.select("#complicationsvg").attr("height", window.innerHeight).attr("width", window.innerWidth - 100)

        totalBuchWidth = buchBgBreite * BuchAnzahl
        authorAbstand = ((chartArea - totalBuchWidth) + (buchBgBreite * authorAnzahl)) / (authorAnzahl - 1)

        ///Author-Ebene Größen und Abstände

        sLTotalBuchWidthSelected = (thisVerfasserSelectedBookCount) * sLBuchAbstandSelected
        sLTotalBuchWidthUnselected = (BuchAnzahl - thisVerfasserSelectedBookCount - (authorAnzahl - 1)) * sLBuchAbstandUnselected
        sLAuthorAbstand2 = (chartArea - (sLTotalBuchWidthSelected + sLTotalBuchWidthUnselected)) / (authorAnzahl - 1)


        totalAreaChartsWidth = 0
        datenByAuthor.forEach(function(D, I) {
          totalAreaChartsWidth = totalAreaChartsWidth + xAreaMax * D.maxTraceNumberNorm
        })
        authorLevelAbstand = (chartArea - totalAreaChartsWidth) / authorAnzahl


        areachartGroup.selectAll("line")
          .attr("y1", 0)
          .attr("y2", areaheight)


        yArea = d3.scaleLinear()
          .range([0, (areaheight / 21)]);

        xArea = d3.scaleLinear()
          .range([0, xAreaMax]);




        area = d3.area()
          .y(function(d, i) {
            return yArea(d.data.part)
          })
          .x0(function(d) {
            return xArea(d[0]);
          })
          .x1(function(d) {
            return xArea(d[1]);
          })
          .curve(d3.curveBasis)

        areachart.selectAll("path")
          .attr("d", area)



        ////////////////////////////
        //Filter-Abstand Update Start

        d3.selectAll("#legend").selectAll("text").attr("y", legendSchriftspurY)

        d3.selectAll(".detail").selectAll("text").attr("y", legendSchriftspurY + 1.6 * fontsize)

        marginalien.selectAll("rect").attr("width", function() {
          return d3.select(".marginalien-title").node().getBBox().width + 10
        })
        marginalien.attr("transform", `translate(${d3.select(".legendTitle").node().getBBox().width+15},0)`)

        d3.select(".filter-kommentar").attr("x", function() {
          return d3.select(".filter-bewertung").node().getBBox().width + 15
        })
        d3.select(".filter-textkorrektur").attr("x", function() {
          return d3.select(".filter-bewertung").node().getBBox().width + 15 + d3.select(".filter-kommentar").node().getBBox().width + 15
        })
        d3.select(".filter-variante").attr("x", function() {
          return d3.select(".filter-bewertung").node().getBBox().width + 15 + d3.select(".filter-kommentar").node().getBBox().width + 15 + d3.select(".filter-textkorrektur").node().getBBox().width + 15
        })
        d3.select(".filter-uebersetzung").attr("x", function() {
          return d3.select(".filter-bewertung").node().getBBox().width + 15 + d3.select(".filter-kommentar").node().getBBox().width + 15 + d3.select(".filter-textkorrektur").node().getBBox().width + 15 + d3.select(".filter-variante").node().getBBox().width + 15
        })



        markierungen.attr("transform", `translate(${d3.select(".legendTitle").node().getBBox().width+15 + d3.select(".marginalien-title").node().getBBox().width+15},0)`)
        markierungen.selectAll("rect").attr("width", function() {
          return d3.select(".markierungen-title").node().getBBox().width + 10
        })

        d3.select(".filter-unterstreichung").attr("x", function() {
          return d3.select(".filter-anstreichung").node().getBBox().width + 15
        })
        d3.select(".filter-durchstreichung").attr("x", function() {
          return d3.select(".filter-anstreichung").node().getBBox().width + 15 + d3.select(".filter-unterstreichung").node().getBBox().width + 15
        })
        d3.select(".filter-sonstigeMarkierung").attr("x", function() {
          return d3.select(".filter-anstreichung").node().getBBox().width + 15 + d3.select(".filter-unterstreichung").node().getBBox().width + 15 + d3.select(".filter-durchstreichung").node().getBBox().width + 15
        })

        eigentumsangaben.attr("transform", `translate(${d3.select(".legendTitle").node().getBBox().width+15 + d3.select(".marginalien-title").node().getBBox().width+15
        + d3.select(".markierungen-title").node().getBBox().width+15},0)`)
        eigentumsangaben.selectAll("rect").attr("width", function() {
          return d3.select(".eigentumsangaben-title").node().getBBox().width + 10
        })

        d3.select(".filter-provenienzstempel").attr("x", function() {
          return d3.select(".filter-provenienz").node().getBBox().width + 15
        })


        zusatzMaterial.attr("transform", `translate(${d3.select(".legendTitle").node().getBBox().width+15 + d3.select(".marginalien-title").node().getBBox().width+15
        + d3.select(".markierungen-title").node().getBBox().width+15 + d3.select(".eigentumsangaben-title").node().getBBox().width+15},0)`)

        zusatzMaterial.selectAll("rect").attr("width", function() {
          return d3.select(".zusatzmaterial-title").node().getBBox().width + 10
        })


        anderes.attr("transform", `translate(${d3.select(".legendTitle").node().getBBox().width+15 + d3.select(".marginalien-title").node().getBBox().width+15
        + d3.select(".markierungen-title").node().getBBox().width+15 + d3.select(".eigentumsangaben-title").node().getBBox().width+15 + d3.select(".zusatzmaterial-title").node().getBBox().width+15},0)`)

        anderes.selectAll("rect").attr("width", function() {
          return d3.select(".anderes-title").node().getBBox().width + 10
        })
        ////////////////////////////
        //Filter-Abstand Update End






        canvas
          .attr('width', scaledWidth)
          .attr('height', scaledHeight)
          .style('width', width + 'px')
          .style('height', height + 'px')

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
        .range([0, detailCircleMax])
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
            detailview = false

            dataContainer.selectAll(".nodesbg").attr("x", 0).attr("fill", "white").attr("opacity", 1)
            d3.selectAll(".bookBG").selectAll("rect").style("opacity", 0)



            eigentumsangaben.select("text").transition().duration(800).style("fill", "#707070")
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
              scrollTop: 3001
            }, '0')
          }
        })




      datenByAuthor.forEach(function(D, I) {

        D.Abschnitte = []
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
          var leseSpuren = d3.nest()
            .key(function(d) {
              return d.ID;
            })
            .entries(E.values.filter(function(d) {
              return d.Benutzungsspur != ""
            }))


          leseSpuren.forEach(function(x, y) {
            x.Provenienz = x.values.filter(function(d, i) {
                return d.SchriftspurTyp.includes("P") && d.Schreibmedium !== "Stempel"
              }).length,
              x.Stempel = x.values.filter(function(d, i) {
                return d.SchriftspurTyp.includes("P") && d.Schreibmedium === "Stempel"
              }).length,
              x.Anstreichung = x.values.filter(function(d, i) {
                return d.Benutzungsspur.includes("1")
              }).length,
              x.Unterstreichung = x.values.filter(function(d, i) {
                return d.Benutzungsspur.includes("2")
              }).length,
              x.Durchstreichung = x.values.filter(function(d, i) {
                return d.Benutzungsspur.includes("3")
              }).length,
              x.SonstigeMarkierung = x.values.filter(function(d, i) {
                return d.Benutzungsspur.includes("4") == true && d.Benutzungsspur.includes("4f") == false
              }).length,
              x.ZusatzMaterial = x.values.filter(function(d, i) {
                return d.Benutzungsspur.includes("6")
              }).length,
              x.Bewertung = x.values.filter(function(d, i) {
                return d.SchriftspurTyp.includes("B")
              }).length,
              x.Kommentar = x.values.filter(function(d, i) {
                return d.SchriftspurTyp.includes("K")
              }).length,
              x.Textkorrektur = x.values.filter(function(d, i) {
                return d.SchriftspurTyp.includes("T")
              }).length,
              x.Variante = x.values.filter(function(d, i) {
                return d.SchriftspurTyp.includes("V")
              }).length,
              x.Uebersetzung = x.values.filter(function(d, i) {
                return d.SchriftspurTyp.includes("U")
              }).length,
              x.Anderes = x.values.filter(function(d, i) {
                return d.Benutzungsspur.includes("7")
              }).length,
              x.Verfasser = x.values[0].Verfasser,
              x.VerfasserOriginal = x.values[0].Verfasser_Original,
              x.PartPos = x.values[0].Part / x.values[0].maxPart

          })

          leseSpuren.forEach(function(F, C) {
            if (F.PartPos <= 0.05) {

              if (F.Provenienz > 0) {
                D.Abschnitte[1].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[1].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[1].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[1].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[1].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[1].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[1].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[1].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[1].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[1].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[1].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[1].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[1].Variante++
              }
            } else if (F.PartPos > 0.05 && F.PartPos <= 0.1) {
              if (F.Provenienz > 0) {
                D.Abschnitte[2].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[2].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[2].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[2].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[2].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[2].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[2].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[2].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[2].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[2].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[2].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[2].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[2].Variante++
              }
            } else if (F.PartPos > 0.1 && F.PartPos <= 0.15) {
              if (F.Provenienz > 0) {
                D.Abschnitte[3].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[3].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[3].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[3].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[3].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[3].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[3].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[3].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[3].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[3].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[3].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[3].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[3].Variante++
              }
            } else if (F.PartPos > 0.15 && F.PartPos <= 0.2) {
              if (F.Provenienz > 0) {
                D.Abschnitte[4].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[4].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[4].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[4].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[4].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[4].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[4].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[4].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[4].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[4].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[4].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[4].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[4].Variante++
              }
            } else if (F.PartPos > 0.2 && F.PartPos <= 0.25) {
              if (F.Provenienz > 0) {
                D.Abschnitte[5].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[5].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[5].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[5].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[5].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[5].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[5].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[5].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[5].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[5].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[5].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[5].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[5].Variante++
              }
            } else if (F.PartPos > 0.25 && F.PartPos <= 0.3) {
              if (F.Provenienz > 0) {
                D.Abschnitte[6].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[6].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[6].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[6].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[6].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[6].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[6].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[6].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[6].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[6].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[6].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[6].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[6].Variante++
              }
            } else if (F.PartPos > 0.3 && F.PartPos <= 0.35) {
              if (F.Provenienz > 0) {
                D.Abschnitte[7].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[7].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[7].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[7].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[7].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[7].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[7].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[7].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[7].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[7].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[7].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[7].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[7].Variante++
              }
            } else if (F.PartPos > 0.35 && F.PartPos <= 0.4) {
              if (F.Provenienz > 0) {
                D.Abschnitte[8].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[8].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[8].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[8].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[8].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[8].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[8].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[8].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[8].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[8].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[8].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[8].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[8].Variante++
              }
            } else if (F.PartPos > 0.4 && F.PartPos <= 0.45) {
              if (F.Provenienz > 0) {
                D.Abschnitte[9].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[9].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[9].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[9].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[9].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[9].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[9].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[9].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[9].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[9].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[9].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[9].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[9].Variante++
              }
            } else if (F.PartPos > 0.45 && F.PartPos <= 0.5) {
              if (F.Provenienz > 0) {
                D.Abschnitte[10].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[10].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[10].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[10].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[10].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[10].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[10].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[10].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[10].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[10].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[10].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[10].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[10].Variante++
              }
            } else if (F.PartPos > 0.5 && F.PartPos <= 0.55) {
              if (F.Provenienz > 0) {
                D.Abschnitte[11].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[11].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[11].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[11].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[11].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[11].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[11].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[11].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[11].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[11].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[11].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[11].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[11].Variante++
              }
            } else if (F.PartPos > 0.55 && F.PartPos <= 0.6) {
              if (F.Provenienz > 0) {
                D.Abschnitte[12].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[12].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[12].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[12].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[12].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[12].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[12].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[12].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[12].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[12].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[12].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[12].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[12].Variante++
              }
            } else if (F.PartPos > 0.5 && F.PartPos <= 0.65) {
              if (F.Provenienz > 0) {
                D.Abschnitte[13].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[13].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[13].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[13].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[13].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[13].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[13].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[13].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[13].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[13].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[13].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[13].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[13].Variante++
              }
            } else if (F.PartPos > 0.65 && F.PartPos <= 0.7) {
              if (F.Provenienz > 0) {
                D.Abschnitte[14].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[14].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[14].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[14].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[14].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[14].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[14].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[14].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[14].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[14].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[14].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[14].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[14].Variante++
              }
            } else if (F.PartPos > 0.7 && F.PartPos <= 0.75) {
              if (F.Provenienz > 0) {
                D.Abschnitte[15].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[15].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[15].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[15].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[15].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[15].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[15].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[15].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[15].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[15].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[15].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[15].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[15].Variante++
              }
            } else if (F.PartPos > 0.75 && F.PartPos <= 0.8) {
              if (F.Provenienz > 0) {
                D.Abschnitte[16].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[16].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[16].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[16].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[16].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[16].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[16].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[16].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[16].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[16].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[16].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[16].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[16].Variante++
              }
            } else if (F.PartPos > 0.8 && F.PartPos <= 0.85) {
              if (F.Provenienz > 0) {
                D.Abschnitte[17].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[17].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[17].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[17].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[17].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[17].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[17].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[17].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[17].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[17].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[17].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[17].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[17].Variante++
              }
            } else if (F.PartPos > 0.85 && F.PartPos <= 0.9) {
              if (F.Provenienz > 0) {
                D.Abschnitte[18].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[18].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[18].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[18].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[18].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[18].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[18].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[18].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[18].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[18].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[18].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[18].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[18].Variante++
              }
            } else if (F.PartPos > 0.9 && F.PartPos <= 0.95) {
              if (F.Provenienz > 0) {
                D.Abschnitte[19].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[19].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[19].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[19].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[19].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[19].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[19].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[19].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[19].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[19].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[19].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[19].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[19].Variante++
              }
            } else if (F.PartPos > 0.95 && F.PartPos <= 1) {
              if (F.Provenienz > 0) {
                D.Abschnitte[20].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[20].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[20].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[20].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[20].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[20].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[20].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[20].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[20].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[20].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[20].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[20].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[20].Variante++
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
              })[0].Formalschlagwort_Genre != "") {

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



      var authorLabel = bookG
        .filter(function(d, i) {
          return i == 0 || d.values[0].Verfasser != datenByTitle[i - 1].values[0].Verfasser
        })
        .append("g").attr("transform", "translate(4,-3)rotate(-45)")
      var layerGroups = bookGFront
        .filter(function(d, i) {
          return i == 0 || d.values[0].Verfasser != datenByTitle[i - 1].values[0].Verfasser
        })
        .append("g").attr("transform", "translate(0,0)rotate(0)")


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
          return xArea(d[0]);
        })
        .x1(function(d) {
          return xArea(d[1]);
        })
        .curve(d3.curveBasis)


      var areachartGroup = layerGroups.append("g").attr("class", "areachartGroup")

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
          d3.select(".detailDiv").remove()
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

          }else if (scrollTop < 3000){
            $("html,body").animate({
              scrollTop: 6000
            }, 805)

          }else{

            ////////////////////////authorlabelClick transition without scrolling start
            ////////////////////////////////////////////////
            ////////////////////////////////////////////////


            ///Trigger animation in Canvas
            transitions = true
            transitionsNeu++
            transitionbookClick = true

            ///Stop animation in Canvas
            setTimeout(function() {
              transitions = false
              transitionsNeu--
              transitionbookClick = false
            }, 1200);

            var explicateScale = d3.scaleLinear()
              .domain([500, 2500])
              .range([pageheight, 30])
              .clamp(true)

            var explicateScale2 = d3.scaleLinear()
              .domain([500, 2500])
              .range([pageheight, 31])
              .clamp(true)



              bookG
              .transition()
              .duration(800)
                .attr("transform", function(d, i) {
                  if (i == 0) {
                    posx2 = 0
                    posx = 0
                    return "translate(" + (marginleft + (posx2)) + "," + (posY) + ")"
                  } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
                    posx2 = posx2 + sLAuthorAbstand2
                    posx = posx + authorAbstand

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([-100, -3000])
                      .range([posx, posx2])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
                  } else {
                    posx2 = posx2
                    posx = posx + buchBgBreite

                    var implicateScaleX1 = d3.scaleLinear()
                      .domain([-100, -3000])
                      .range([posx, posx2])
                      .clamp(true)

                    return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
                  }
                })

              bookFingerprint
              .transition()
              .duration(800)
                .attr("transform", function(d, i) {
                  if (i == 0) {
                    posx2 = 0
                    posx = 0
                    return "translate(" + (marginleft + (posx2)) + "," + (posYCanvas) + ")"
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
                .transition()
                .duration(800)
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
              sLTotalBuchWidthSelected = (thisVerfasserSelectedBookCount) * sLBuchAbstandSelected
              sLTotalBuchWidthUnselected = (BuchAnzahl - thisVerfasserSelectedBookCount - (authorAnzahl - 1)) * sLBuchAbstandUnselected
              sLAuthorAbstand2 = (chartArea - (sLTotalBuchWidthSelected + sLTotalBuchWidthUnselected)) / (authorAnzahl - 1)



              bookFingerprint.selectAll(".nodes")
              .transition()
              .duration(800)
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




              ////mehrere Lesespuren auf einer Seite sollen aufgesplittert werden, wenn der Verfasser ausgewählt ist, allerdings erst aber scrollTop > 0 weil sonst die Filterung auf Buch-Ebene zu kleinteilig ist
                bookFingerprint.selectAll(".nodes")
                  .filter(function(d, i) {
                    return d.Verfasser == thisVerfasserSelected
                  })
                  .transition()
                  .duration(800)
                  .attr("width", function(d, i) {
                    ///MAX SCHRIFTSPUR AUF SEITE BERECHNEN
                    var thisBookData = (d3.select(this.parentNode).datum()).values.filter(function(D, I) {
                      return D.Benutzungsspur != "" && D.Benutzungsspur != "4f" && D.Benutzungsspur != "4f?"
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
                      return D.Benutzungsspur != "" && D.Benutzungsspur != "4f" && D.Benutzungsspur != "4f?"
                    })
                    var maxSpurenAufSeite = thisBookData.filter(function(D, I) {
                      return D.ID == d.ID && D.Benutzungsspur != "4f" && D.Benutzungsspur != "4f?"
                    }).length

                    ///Spurposition abhängig von maxSpurenAufSeite
                    var implicateScaleWidth = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([buchBreite / maxSpurenAufSeite, sLBuchBreiteSelected / maxSpurenAufSeite])
                      .clamp(true)

                    if (i > 9 && thisBookData[i - 10].ID == d.ID) {
                      return 10 * implicateScaleWidth(scrollTop)
                    } else if (i > 8 && thisBookData[i - 9].ID == d.ID) {

                      return 9 * implicateScaleWidth(scrollTop)
                    } else if (i > 7 && thisBookData[i - 8].ID == d.ID) {

                      return 8 * implicateScaleWidth(scrollTop)
                    } else if (i > 6 && thisBookData[i - 7].ID == d.ID) {

                      return 7 * implicateScaleWidth(scrollTop)
                    } else if (i > 5 && thisBookData[i - 6].ID == d.ID) {

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
              .transition()
              .duration(800)
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
                  .attr("y", function(d, i) {
                    if (scrollTop < 3000) {

                      posYCanvas = 0
                    } else {
                      posYCanvas = 0 - ((scrollTop - 3000) * 1)

                    }
                    return posYCanvas
                  })

              d3.select("#svg").selectAll(".singleBookBG")
              .transition()
              .duration(800)
                .attr("width", function(d, i) {
                  if (d.values[0].Verfasser == thisVerfasserSelected) {
                    var implicateScaleWidth = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([buchBgBreite, sLBuchBreiteSelected])
                      .clamp(true)

                    var thisCount = datenByAuthor.filter(function(D, I) {
                      return D.key === thisVerfasserSelected
                    })[0].values.length


                    return implicateScaleWidth(scrollTop)


                  } else {
                    var implicateScaleWidth = d3.scaleLinear()
                      .domain([500, 2000])
                      .range([buchBreite, sLBuchBreiteUnselected])
                      .clamp(true)

                    return implicateScaleWidth(scrollTop)
                  }
                })




              bookFingerprint
              .transition()
              .duration(800)
                .attr("transform", function(d, i) {

                //  posYCanvas = 0

                  if (i == 0) {
                    posx3 = 0
                    posx = 0
                    return "translate(" + (marginleft + (posx3)) + "," + (posYCanvas) + ")"

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







              bookG
              .transition()
              .duration(800)
                .attr("transform", function(d, i) {
                  //falls erstes Element
                  if (i == 0) {
                    posx3 = 0
                    posx = 0
                    return "translate(" + (marginleft + (posx3)) + "," + (posY) + ")"

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
              .transition()
              .duration(800)
                .attr("transform", function(d, i) {
                  //falls erstes Element
                  if (i == 0) {
                    posx3 = 0
                    posx = 0
                    return "translate(" + (marginleft + (posx3) - 40.5) + "," + (posY) + ")"

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
              .transition()
              .duration(800)
                .attr("transform", function(d, i) {
                  if (i == 0) {
                    posx3 = 0
                    posx = 0
                    return "translate(" + (marginleft + (posx3)) + "," + (posY) + ")"
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

                ////////////////////////authorlabelClick transition without scrolling end
                ////////////////////////////////////////////////
                ////////////////////////////////////////////////


          }
        })




      /////Titel und hover
      bookG
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
        .on("mouseover", function(d) {
          if (scrollTop > -800 && scrollTop < 1200) {
            thisVerfasserSelected = d3.select(this).datum().values[0].Verfasser


          }


          svg.selectAll(".authorLabel").filter(function(d) {
              return d.values[0].Verfasser == thisVerfasserSelected
            })
            .style("font-weight", "bold")

          svg.selectAll(".authorLabel").filter(function(d) {
              return d.values[0].Verfasser != thisVerfasserSelected
            })
            .style("font-weight", "normal")


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

            var mouseY = ((d3.event.pageY) - currentScrollTop - canvasTop);


            var thisPage = Math.round(round45(mouseY) / pageheight) + 1

            function round45(x) {
              return Math.ceil(x / pageheight) * pageheight
            }
            thisVerfasser = d3.select(this).datum().values[0].Verfasser
            var thisBookID = d3.select(this).datum().values[0].BookID


            if (d.values[0].maxPart < thisPage || mouseY < 1000) {
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
        .on("touchend", function(d) {
          var thisBookID = d3.select(this).datum().values[0].BookID

          svgFrontTitles.selectAll(".bookTitleFrontG")
            .filter(function(d) {
              return d.values[0].BookID == thisBookID
            })
            .style("display", "none")


          svg.selectAll(".authorLabel").filter(function(d) {
            if (scrollTop >= 0) {
              return d.values[0].Verfasser != thisVerfasserSelected
            } else {
              return d
            }
          }).style("font-weight", function() {
            if (scrollTop < 0) {
              return "normal"
            }
          })

          d3.select('.tooltip')
            .style("display", "none")
        })
        .on("mouseout", function() {

          var thisBookID = d3.select(this).datum().values[0].BookID

          svgFrontTitles.selectAll(".bookTitleFrontG")
            .filter(function(d) {
              return d.values[0].BookID == thisBookID
            })
            .style("display", "none")


          svg.selectAll(".authorLabel").filter(function(d) {
            if (scrollTop >= 0) {
              return d.values[0].Verfasser != thisVerfasserSelected
            } else {
              return d
            }
          }).style("font-weight", function() {
            if (scrollTop < 0) {
              return "normal"
            }
          })

          d3.select('.tooltip')
            .style("display", "none")

        })

      d3.selectAll(".singleBookBG")
        .on("click", function(d, i) {
          if (d3.select(this).datum().values[0].BookID !== clickedBook) {
            if (scrollTop < 0) {

              $("html,body").animate({
                scrollTop: 3000
              }, '0')


              clickedBook = d3.select(this).datum().values[0].BookID
              thisData = (d3.select(this).datum().values).filter(function(d) {
                return d.Benutzungsspur != "" && d.Benutzungsspur != "4f" && d.Benutzungsspur != "4f?"
              })

              setTimeout(function() {
                bookClickHash(thisData)


              }, 550);

            } else {
              clickedBook = d3.select(this).datum().values[0].BookID
              thisData = (d3.select(this).datum().values).filter(function(d) {
                return d.Benutzungsspur != "" && d.Benutzungsspur != "4f" && d.Benutzungsspur != "4f?"
              })

              bookClickHash(thisData)
            }
          } else if (d3.select(this).datum().values[0].BookID === clickedBook) {
            d3.event.stopPropagation()

            if (scrollTop >= 0 && d3.select(this).datum().values[0].BookID == clickedBook) {

              var currentScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)

              var mouseY = ((d3.event.pageY) - currentScrollTop - canvasTop - posYCanvas);


              var thisPage = Math.round(round45(mouseY) / explicateScale2(scrollTop))

              var thisPageID = (d.values.filter(function(d, i) {
                return d.Part == thisPage
              }))[0].ID

              function round45(x) {
                return Math.ceil(x / explicateScale2(scrollTop)) * explicateScale2(scrollTop)
              }
              thisVerfasser = d3.select(this).datum().values[0].Verfasser

              var thisBookID = d3.select(this).datum().values[0].BookID
              var thisPart = thisPage

              detailviewOpen(thisBookID, thisPart)

            }


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
            return d.Benutzungsspur != "" && d.Benutzungsspur != "4f" && d.Benutzungsspur != "4f?"
          })
        })
        .enter()
        .append("rect")
        .attr("width", buchBreite)
        .attr("height", pageheight)
        .attr("x", 0)
        .attr("y", function(d, i) {
          return posYCanvas + pageheight * d.Part
        })
        .attr("opacity", 1)
        .attr("fill", function(d) {
          if (d.Benutzungsspur == "") {
            return "white"
          } else if (d.Benutzungsspur.includes("1") == true) {
            return "#58b0f7"
          } else if (d.Benutzungsspur.includes("2") == true) {
            return "#58b0f7"
          } else if (d.Benutzungsspur.includes("3") == true) {
            return "#58b0f7"
          } else if (d.Benutzungsspur.includes("4") == true) {
            return "#58b0f7"
          } else if (d.Benutzungsspur.includes("7") == true) {
            return "#f284c0"
          } else if (d.Benutzungsspur.includes("6") == true) {
            return "rgb(210, 164, 0)"
          } else if (d.SchriftspurTyp.includes("P") == true && d.Schreibmedium != "Stempel") {
            return "#707070"
          } else if (d.SchriftspurTyp.includes("P") == true && d.Schreibmedium == "Stempel") {
            return "#707070"
          } else if (d.SchriftspurTyp.includes("B") == true) {
            return "#f73f26"
          } else if (d.SchriftspurTyp.includes("K") == true) {
            return "#f73f26"
          } else if (d.SchriftspurTyp.includes("T") == true) {
            return "#f73f26"
          } else if (d.SchriftspurTyp.includes("U") == true) {
            return "#f73f26"
          } else if (d.SchriftspurTyp.includes("V") == true) {
            return "#f73f26"
          } else if (d.Benutzungsspur.includes("5") == true) {
            return "#f73f26"
          }
        })
        .attr("class", function(d) {
          if (d.Benutzungsspur == "") {
            return "leer"
          } else if (d.Benutzungsspur.includes("1") == true) {
            return "anstreichung"
          } else if (d.Benutzungsspur.includes("2") == true) {
            return "unterstreichung"
          } else if (d.Benutzungsspur.includes("3") == true) {
            return "durchstreichung"
          } else if (d.Benutzungsspur.includes("4") == true) {
            return "sonstigeMarkierung"
          } else if (d.Benutzungsspur.includes("7") == true) {
            return "anderes"
          } else if (d.Benutzungsspur.includes("6") == true) {
            return "zusatzMaterial"
          } else if (d.SchriftspurTyp.includes && d.Schreibmedium != "Stempel") {
            return "provenienz"
          } else if (d.SchriftspurTyp.includes && d.Schreibmedium == "Stempel") {
            return "provenienzstempel"
          } else if (d.SchriftspurTyp.includes("B") == true) {
            return "bewertung"
          } else if (d.SchriftspurTyp.includes("K") == true) {
            return "kommentar"
          } else if (d.SchriftspurTyp.includes("T") == true) {
            return "textkorrektur"
          } else if (d.SchriftspurTyp.includes("U") == true) {
            return "uebersetzung"
          } else if (d.SchriftspurTyp.includes("V") == true) {
            return "variante"
          } else if (d.Benutzungsspur.includes("5") == true) {
            return "marginalie"
          }
        })
        .classed("nodes", true)

      function farbausfaltungProvenienz() {
        transitions = true
        transitionsNeu++

        setTimeout(function() {
          transitions = false
          transitionsNeu--

        }, 1000);

        areachart.selectAll(".provenienz,.provenienzstempel,.sonstigeMarkierung,.anstreichung,.unterstreichung,.durchstreichung,.bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").classed("eingefaltet", false)
        d3.selectAll(".pieG").selectAll(".provenienz,.provenienzstempel,.sonstigeMarkierung,.anstreichung,.unterstreichung,.durchstreichung,.bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").classed("eingefaltet", false)

        dataContainer.selectAll(".nodes").filter(".provenienz,.provenienzstempel").transition("farbausfaltungProvenienz").duration(800)
          .attr("fill", function(d) {
            if (d.SchriftspurTyp.includes("P") == true && d.Schreibmedium != "Stempel") {
              return "#7e7e8e"
            } else if (d.SchriftspurTyp.includes("P") == true && d.Schreibmedium == "Stempel") {
              return "#a3a3a3"
            }
          })
      }

      function farbeinfaltungProvenienz() {
        transitions = true
        transitionsNeu++

        setTimeout(function() {
          transitions = false
          transitionsNeu--

        }, 1000);

        areachart.selectAll(".provenienz,.provenienzstempel").classed("eingefaltet", true)
        d3.selectAll(".pieG").selectAll(".provenienz,.provenienzstempel").classed("eingefaltet", true)

        dataContainer.selectAll(".nodes").filter(".provenienz,.provenienzstempel").transition("farbeinfaltungProvenienz").duration(800)
          .attr("fill", function(d) {
            if (d.SchriftspurTyp.includes("P") == true && d.Schreibmedium != "Stempel") {
              return "#707070"
            } else if (d.SchriftspurTyp.includes("P") == true && d.Schreibmedium == "Stempel") {
              return "#707070"
            }
          })
      }



      function farbausfaltungMarkierung() {
        transitions = true
        transitionsNeu++

        setTimeout(function() {
          transitions = false
          transitionsNeu--

        }, 1000);

        areachart.selectAll(".provenienz,.provenienzstempel,.sonstigeMarkierung,.anstreichung,.unterstreichung,.durchstreichung,.bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").classed("eingefaltet", false)
        d3.selectAll(".pieG").selectAll(".provenienz,.provenienzstempel,.sonstigeMarkierung,.anstreichung,.unterstreichung,.durchstreichung,.bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").classed("eingefaltet", false)

        dataContainer.selectAll(".nodes").filter(".unterstreichung,.anstreichung,.durchstreichung,.sonstigeMarkierung,.anderes").transition("farbausfaltungMarkierung").duration(800)
          .attr("fill", function(d) {
            if (d.Benutzungsspur.includes("1") == true) {
              return "#018DC9"
            } else if (d.Benutzungsspur.includes("2") == true) {
              return "#415aff"
            } else if (d.Benutzungsspur.includes("3") == true) {
              return "#944cfd"
            } else if (d.Benutzungsspur.includes("4") == true) {
              return "#29D1E2"
            }
          })
      }

      function farbeinfaltungMarkierung() {
        transitions = true
        transitionsNeu++

        setTimeout(function() {
          transitions = false
          transitionsNeu--
        }, 1000);

        areachart.selectAll(".unterstreichung,.anstreichung,.durchstreichung,.sonstigeMarkierung").classed("eingefaltet", true)
        d3.selectAll(".pieG").selectAll(".unterstreichung,.anstreichung,.durchstreichung,.sonstigeMarkierung").classed("eingefaltet", true)

        dataContainer.selectAll(".nodes").filter(".unterstreichung,.anstreichung,.durchstreichung,.sonstigeMarkierung").transition("farbeinfaltungMarkierung").duration(800)
          .attr("fill", function(d) {
            if (d.Benutzungsspur.includes("1") == true) {
              return "#58b0f7"
            } else if (d.Benutzungsspur.includes("2") == true) {
              return "#58b0f7"
            } else if (d.Benutzungsspur.includes("3") == true) {
              return "#58b0f7"
            } else if (d.Benutzungsspur.includes("4") == true) {
              return "#58b0f7"
            }
          })
      }



      function farbausfaltungMarginalien() {
        transitions = true
        transitionsNeu++

        setTimeout(function() {
          transitions = false
          transitionsNeu--

        }, 1000);

        areachart.selectAll(".provenienz,.provenienzstempel,.sonstigeMarkierung,.anstreichung,.unterstreichung,.durchstreichung,.bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").classed("eingefaltet", false)
        d3.selectAll(".pieG").selectAll(".provenienz,.provenienzstempel,.sonstigeMarkierung,.anstreichung,.unterstreichung,.durchstreichung,.bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").classed("eingefaltet", false)

        dataContainer.selectAll(".nodes").filter(".bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").transition("farbausfaltungMarginalien").duration(800)
          .attr("fill", function(d) {
            if (d.SchriftspurTyp.includes("B") == true) {
              return "#dd0000"
            } else if (d.SchriftspurTyp.includes("K") == true) {
              return "#FF8A5D"
            } else if (d.SchriftspurTyp.includes("T") == true) {
              return "#a4105f"
            } else if (d.SchriftspurTyp.includes("U") == true) {
              return "#d93168"
            } else if (d.SchriftspurTyp.includes("V") == true) {
              return "#fb8385"
            }
          })
      }

      function farbeinfaltungMarginalien() {
        transitions = true
        transitionsNeu++

        setTimeout(function() {
          transitions = false
          transitionsNeu--

        }, 1000);

        areachart.selectAll(".bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").classed("eingefaltet", true)
        d3.selectAll(".pieG").selectAll(".bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").classed("eingefaltet", true)

        dataContainer.selectAll(".nodes").filter(".bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").transition("farbeinfaltungMarginalien").duration(800)
          .attr("fill", function(d) {
            if (d.SchriftspurTyp.includes("B") == true) {
              return "#f73f26"
            } else if (d.SchriftspurTyp.includes("K") == true) {
              return "#f73f26"
            } else if (d.SchriftspurTyp.includes("T") == true) {
              return "#f73f26"
            } else if (d.SchriftspurTyp.includes("U") == true) {
              return "#f73f26"
            } else if (d.SchriftspurTyp.includes("V") == true) {
              return "#f73f26"
            } else if (d.Benutzungsspur.includes("5") == true && d.SchriftspurTyp.includes("P") == false) {
              return "#f73f26"
            }
          })
      }

      var detailview = false
      var thisData = 0




      //////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////
      /////////////////////////////
      /////bookhash selection Function Anfang

      function bookClickHash(data) {

        d3.select(".tippbubble").transition().duration(800).style("opacity", 0).transition().delay(1000).style("display", "none")

        hashFunction()


        svgFrontTitles.selectAll(".bookTitleFrontG")
          .style("display", "none")

        d3.select('.tooltip')
          .style("display", "none")

        ///Trigger animation in Canvas
        transitions = true
        transitionsNeu++
        transitionbookClick = true

        ///Stop animation in Canvas
        setTimeout(function() {
          transitions = false
          transitionsNeu--
          transitionbookClick = false
        }, 1200);

        ///create array thisData that only includes pages with Benutzungsspuren
        thisData = data
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

        var onSelectionAuthorAbstand = ((chartArea) - BuchauswahlFeldScale(scrollTop) - ((BuchAnzahl - authorAnzahl - 2) * onSelectionBuchAbstandScale(scrollTop))) / (authorAnzahl - 1)

        bookFingerprint.selectAll(".nodes")
          .filter(function(d, i) {
            return d.BookID != clickedBook
          })
          .transition()
          .duration(800)
          .attr("width", function(d) {
            return unselectedBookScale(scrollTop)
          })
          .attr("x", 0)




        bookFingerprint.selectAll(".nodes")
          .filter(function(d, i) {
            return d.BookID == clickedBook
          })
          .transition()
          .duration(800)
          .attr("width", function(d) {
            return selectedBookScale(scrollTop)
          })
          .attr("x", function(d, i) {
            if (i > 6 && thisData[i - 7].ID == d.ID) {
              return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 7
            } else if (i > 5 && thisData[i - 6].ID == d.ID) {
              return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 6
            } else if (i > 4 && thisData[i - 5].ID == d.ID) {
              return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 5
            } else if (i > 3 && thisData[i - 4].ID == d.ID) {
              return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 4
            } else if (i > 2 && thisData[i - 3].ID == d.ID) {
              return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 3
            } else if (i > 1 && thisData[i - 2].ID == d.ID) {
              return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 2
            } else if (i != 0 && thisData[i - 1].ID == d.ID) {
              return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop)
            } else {
              return 7 * selectedBookScale(scrollTop)
            }
          })

        bookFingerprint.selectAll(".nodesbg")
          .transition()
          .duration(800)
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
          .duration(800)
          .attr("transform", function(d, i) {
            //erstes Buches
            if (i == 0) {
              posx = 0
              return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
            } else if (i == datenByTitle.length - 1 && datenByTitle[i].values[0].BookID == clickedBook) {
              thisBookPosition = posx + 83
              posx = posx + onSelectionBuchAbstandScale(scrollTop)
              return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
            } else if (i != 0 && datenByTitle[i - 1].values[0].BookID == clickedBook) {
              thisBookPosition = posx + 83
              posx = posx + BuchauswahlFeldScale(scrollTop)
              return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
              //ungleich null und Buch davor hat anderen Verfasser
            } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
              posx = posx + onSelectionAuthorAbstand
              return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
              //ungleich null und Buch davor ist nicht ausgewähltes Buch
            } else {
              posx = posx + onSelectionBuchAbstandScale(scrollTop)
              return "translate(" + (marginleft + (posx)) + "," + (posYCanvas) + ")"
            }
          })


        bookG
          .transition()
          .duration(800)
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
          .transition()
          .duration(800)
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
          .duration(800)
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
          .style("top", canvasTop + "px")
          .style("width", detailPicWidth + "px")
          .style("height", "700px")
          .style("transform", "scale(0, 1)")
          .style("transform-origin", "0 0")
          .style("left", function() {
            return thisBookPosition + marginleft + 8 * selectedBookScale(scrollTop) + "px"
          })
          .style("opacity", function(d) {
            return detailInfoScale(scrollTop)
          })
          .style("display", function() {
            if (modus === "similarity") {
              return "none"
            }
          })


        detailDiv
          .transition()
          .duration(800)
          .style("transform", "scale(1, 1)")
          .style("left", thisBookPosition + marginleft + 38 + 9 * selectedBookScale(scrollTop) + "px")

        var detailInfoData = data[0]
        var bookcover = data[0].ID


        detailDiv.append("img")
          .attr("src", function(d) {
            return "./img/m/" + korpus.filter(function(D, I) {
              return D.Cover && D.KurzSignatur == data[0].BookID
            })[0].Cover
          })
          .style("display", "block")
          .style("width", detailPicWidth + "px")
          .style("height", "auto")
          .style("margin-bottom", "10px")
          .style("cursor", "pointer")
          .on("click", function(d, i) {
            var thisPart = 1
            var thisBookID = data[0].BookID

            detailviewOpen(thisBookID, thisPart)
          })

        var detailVerfasser = detailDiv.append("p")
          .text("Verfasser: ")

        detailVerfasser.append("span")
          .text(function(d) {
            return korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Verfasser
          })
          .attr("class", "detailDivData")

        detailVerfasser.filter(function(d) {
            return korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Verfasser == ""
          })
          .remove()

        var detailHerausgeber = detailDiv.append("p").text("Herausgeber: ")

        detailHerausgeber.append("span")
          .text(function(d) {
            return korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Herausgeber
          })
          .attr("class", "detailDivData")

        detailHerausgeber.filter(function(d) {
            return korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Herausgeber == ""
          })
          .remove()




        var detailVerlag = detailDiv.append("p").text("Verlag: ")

        detailVerlag.append("span")
          .text(function(d) {
            return korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Verlag
          })
          .attr("class", "detailDivData")

        detailVerlag.filter(function(d) {
            return korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Verlag == ""
          })
          .remove()


        var detailGenre = detailDiv.append("p").text("Genre: ")

        detailGenre.append("span")
          .text(function(d) {
            return korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Formalschlagwort_Genre
          })
          .attr("class", "detailDivData")

        detailGenre.filter(function(d) {
            return korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Formalschlagwort_Genre == ""
          })
          .remove()


        var detailDatierung = detailDiv.append("p").text("Datierung: ")

        detailDatierung.append("span")
          .text(function(d) {
            return korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Jahr
          })
          .attr("class", "detailDivData")

        detailDatierung.filter(function(d) {
            return korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Jahr == ""
          })
          .remove()



        var detailOrt = detailDiv.append("p").text("Ort: ").style("margin-bottom", "10px")
        detailOrt.append("span")
          .text(function(d) {
            return korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Ort
          })
          .attr("class", "detailDivData")

        detailOrt.filter(function(d) {
            return korpus.filter(function(D, I) {
              return D.KurzSignatur == detailInfoData.BookID
            })[0].Ort == ""
          })
          .remove()



        var detailSeitenzahl = detailDiv.append("p").text("Seitenzahl: ").style("font-weight", "normal")

        detailSeitenzahl.append("span")
          .text(function(d) {
            return detailInfoData.maxPart
          })
          .style("font-weight", "bold")
          .attr("class", "detailDivData")



        var detailEigentumsangaben = detailDiv.append("p").attr("class", "eigentumsangaben")
          .text("Provenienzangaben: ")
          .style("font-weight", "normal")

        detailEigentumsangaben.append("span")
          .text(function(d) {
            return thisData.filter(function(d) {
              return d.SchriftspurTyp.includes("P")
            }).length
          })
          .style("font-weight", "bold")
          .attr("class", "detailDivData")

        detailEigentumsangaben.filter(function(d) {
          return +thisData.filter(function(d) {
            return d.SchriftspurTyp.includes("P")
          }).length == 0
        }).remove()


        var detailMarginalien = detailDiv.append("p").attr("class", "marginalien").text("Marginalien: ").style("font-weight", "normal")

        detailMarginalien.append("span")
          .text(function(d) {
            return thisData.filter(function(d) {
              return (d.Benutzungsspur.includes("5") == true && d.SchriftspurTyp != "P")
            }).length
          }).style("font-weight", "bold")

        detailMarginalien
          .filter(function(d) {
            return +thisData.filter(function(d) {
              return (d.Benutzungsspur.includes("5") == true && d.SchriftspurTyp != "P")
            }).length == 0
          }).remove()




        var detailMarkierungen = detailDiv.append("p").attr("class", "markierungen").text("Markierungen: ")
          .style("font-weight", "normal")

        detailMarkierungen.append("span")
          .text(function(d) {
            return thisData.filter(function(d) {
              return d.Benutzungsspur.includes("1") == true || d.Benutzungsspur.includes("2") == true || d.Benutzungsspur.includes("3") == true || d.Benutzungsspur.includes("4") == true &&
                d.Benutzungsspur.includes("4f") == false
            }).length
          }).style("font-weight", "bold")


        detailMarkierungen.filter(function(d) {
          return +thisData.filter(function(d) {
            return d.Benutzungsspur.includes("1") == true || d.Benutzungsspur.includes("2") == true || d.Benutzungsspur.includes("3") == true || d.Benutzungsspur.includes("4") == true &&
              d.Benutzungsspur.includes("4f") == false
          }).length == 0
        }).remove()




        var detailZusatzMaterial = detailDiv.append("p").attr("class", "zusatzMaterial").text("Zusätzliches Material: ")
          .style("font-weight", "normal").style("pointer-events", "none")

        detailZusatzMaterial.append("span").text(function(d) {
          return thisData.filter(function(d) {
            return d.Benutzungsspur.includes("6") == true
          }).length
        }).style("font-weight", "bold")

        detailZusatzMaterial.filter(function(d) {
          return +thisData.filter(function(d) {
            return d.Benutzungsspur.includes("6") == true
          }).length == 0
        }).remove()


        var detrailAnderes = detailDiv.append("p").attr("class", "anderes").text("Anderes: ").style("font-weight", "normal").style("pointer-events", "none")

        detrailAnderes.append("span").text(function(d) {
          return thisData.filter(function(d) {
            return d.Benutzungsspur.includes("7") == true
          }).length
        }).style("font-weight", "bold")

        detrailAnderes.filter(function(d) {
          return +thisData.filter(function(d) {
            return d.Benutzungsspur.includes("7") == true
          }).length == 0
        }).remove()


        detailInfo.attr("class", "detailinfo")
          .attr("transform", "scale(0,1)")
          .transition()
          .duration(800)
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

        d3.selectAll(".transcriptions")
          .attr("transform", function(d, i) {
            if (scrollTop < 3000) {
              posYCanvas = 0
            } else {
              posYCanvas = 0 - ((scrollTop - 3000) * 1)
            }
            return "translate(" + 0 + "," + (posYCanvas) + ") scale(0,1)"
          })
          .transition()
          .duration(800)
          .attr("transform", function(d, i) {
            if (scrollTop < 3000) {
              posYCanvas = 0
            } else {
              posYCanvas = 0 - ((scrollTop - 3000) * 1)
            }
            return "translate(" + 0 + "," + (posYCanvas) + ") scale(1,1)"
          })


        var transcriptData = thisData.filter(function(d) {
          return d.SchriftspurTranskription != ""
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
          .text(function(d, i) {
            return d.SchriftspurTranskription
          })
          .call(wraptext, transcripttextwrap)
          .selectAll("tspan")
          .attr("x", transcriptPositionScale(scrollTop) * selectedBookScale(scrollTop) + 10)
          .attr("y", function(d, i) {
            return transcriptYStart(scrollTop) + (explicateScale2(scrollTop)) * d.Part
          })

        transcriptions.selectAll("text").classed("transcriptionText", true).style("font-size", function() {
            return transcriptFontSize(scrollTop) + "px"
          })
          .on("mouseover", function(d, i) {
            if (scrollTop > 800) {
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
            }
          })
          .on("click", function(d, i) {
            var thisPageID = d.ID
            var thisBookID = d.BookID
            var thisPart = d.Part

            detailviewOpen(thisBookID, thisPart)

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
                    } else if (d.SchriftspurSchreibhand == "Unbekannt" || d.SchriftspurSchreibhand == "unbekannt" || d.SchriftspurSchreibhand == "") {
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
                    } else if (d.SchriftspurSchreibhand == "Unbekannt" || d.SchriftspurSchreibhand == "unbekannt" || d.SchriftspurSchreibhand == "") {
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
                  } else if (d.SchriftspurSchreibhand == "Unbekannt" || d.SchriftspurSchreibhand == "unbekannt" || d.SchriftspurSchreibhand == "") {
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
        transitionsNeu++
        setTimeout(function() {
          transitions = false
          transitionsNeu--

        }, 1000);
        dataContainer.selectAll(".nodes")
          .transition()
          .attr("opacity", 1)
      })

      function filterInteraction() {
        d3.select(".tippbubble").transition().duration(800).style("opacity", 0).transition().delay(1000).style("display", "none")

        hashFunction()

        transitions = true
        transitionsNeu++
        setTimeout(function() {
          transitions = false
          transitionsNeu--

        }, 1000);
        dataContainer.selectAll(".nodesbg").attr("fill", "white")
        $("#search").val('').trigger('change')

        if (filter == null) {


          areachart.selectAll("path").classed("filtered", false).classed("eingefaltet", true)
          d3.selectAll(".pieG").selectAll("path").classed("filtered", false).classed("eingefaltet", true)

          dataContainer.selectAll(".nodes")

            .transition()
            .attr("opacity", 1)

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("P") == true && d.Schreibmedium != "Stempel"
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#707070")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("P") == true && d.Schreibmedium == "Stempel"
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#707070")


          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.Benutzungsspur.includes("1") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#58b0f7")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.Benutzungsspur.includes("2") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#58b0f7")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.Benutzungsspur.includes("3") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#58b0f7")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.Benutzungsspur.includes("4") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#58b0f7")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.Benutzungsspur.includes("6") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "rgb(210, 164, 0)")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return (d.Benutzungsspur.includes("5") == true && d.SchriftspurTyp.includes("P") == false)
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#f73f26")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("B") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#f73f26")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("K") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#f73f26")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("T") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#f73f26")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("V") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#f73f26")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("U") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#f73f26")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.Benutzungsspur.includes("7") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#f284c0")

        } else if (filter == "eigentumsangaben") {

          areachart.selectAll("path").classed("filtered", true).filter(".provenienz,.provenienzstempel").classed("filtered", false)
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".provenienz,.provenienzstempel").classed("filtered", false)

          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 0)
            .attr("fill", "white")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("P") == true && d.Schreibmedium != "Stempel"
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#7e7e8e")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("P") == true && d.Schreibmedium == "Stempel"
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#a3a3a3")
        } else if (filter == "provenienz") {

          areachart.selectAll("path").classed("filtered", true).filter(".provenienz").classed("filtered", false)
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".provenienz").classed("filtered", false)


          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 0)
            .attr("fill", "white")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("P") == true && d.Schreibmedium != "Stempel"
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#7e7e8e")


        } else if (filter == "provenienzstempel") {

          areachart.selectAll("path").classed("filtered", true).filter(".provenienzstempel").classed("filtered", false)
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".provenienzstempel").classed("filtered", false)

          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 0)
            .attr("fill", "white")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("P") == true && d.Schreibmedium == "Stempel"
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#a3a3a3")

        } else if (filter == "markierungen") {

          areachart.selectAll("path").classed("filtered", true).filter(".unterstreichung,.anstreichung,.durchstreichung,.sonstigeMarkierung").classed("filtered", false)
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".unterstreichung,.anstreichung,.durchstreichung,.sonstigeMarkierung").classed("filtered", false)

          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 0)
            .attr("fill", "white")


          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.Benutzungsspur.includes("1") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#018DC9")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.Benutzungsspur.includes("2") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#415aff")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.Benutzungsspur.includes("3") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#944cfd")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.Benutzungsspur.includes("4") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#29D1E2")



        } else if (filter == "anstreichung") {

          areachart.selectAll("path").classed("filtered", true).filter(".anstreichung").classed("filtered", false)
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".anstreichung").classed("filtered", false)

          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 0)
            .attr("fill", "white")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.Benutzungsspur.includes("1") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#018DC9")


        } else if (filter == "unterstreichung") {

          areachart.selectAll("path").classed("filtered", true).filter(".unterstreichung").classed("filtered", false)
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".unterstreichung").classed("filtered", false)

          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 0)
            .attr("fill", "white")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.Benutzungsspur.includes("2") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#415aff")
        } else if (filter == "durchstreichung") {

          areachart.selectAll("path").classed("filtered", true).filter(".durchstreichung").classed("filtered", false)
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".durchstreichung").classed("filtered", false)

          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 0)
            .attr("fill", "white")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.Benutzungsspur.includes("3") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#944cfd")
        } else if (filter == "sonstigeMarkierung") {

          areachart.selectAll("path").classed("filtered", true).filter(".sonstigeMarkierung").classed("filtered", false)
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".sonstigeMarkierung").classed("filtered", false)

          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 0)
            .attr("fill", "white")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.Benutzungsspur.includes("4") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#29D1E2")
        } else if (filter == "zusatzMaterial") {
          areachart.selectAll("path").classed("filtered", true).filter(".zusatzMaterial").classed("filtered", false)
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".zusatzMaterial").classed("filtered", false)

          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 0)
            .attr("fill", "white")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.Benutzungsspur.includes("6") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "rgb(210, 164, 0)")

        } else if (filter == "marginalien") {
          areachart.selectAll("path").classed("filtered", true).filter(".bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").classed("filtered", false)
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").classed("filtered", false)

          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 0)
            .attr("fill", "white")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("5") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#f73f26")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("B") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#dd0000")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("K") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#FF8A5D")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("T") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#a4105f")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("V") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#fb8385")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("U") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#d93168")


        } else if (filter == "bewertung") {
          areachart.selectAll("path").classed("filtered", true).filter(".bewertung").classed("filtered", false)
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".bewertung").classed("filtered", false)


          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 0)
            .attr("fill", "white")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("B") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#dd0000")
        } else if (filter == "kommentar") {
          areachart.selectAll("path").classed("filtered", true).filter(".kommentar").classed("filtered", false)
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".kommentar").classed("filtered", false)

          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 0)
            .attr("fill", "white")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("K") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#FF8A5D")
        } else if (filter == "textkorrektur") {
          areachart.selectAll("path").classed("filtered", true).filter(".textkorrektur").classed("filtered", false)
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".textkorrektur").classed("filtered", false)

          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 0)
            .attr("fill", "white")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("T") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#a4105f")
        } else if (filter == "variante") {
          areachart.selectAll("path").classed("filtered", true).filter(".variante").classed("filtered", false)
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".variante").classed("filtered", false)

          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 0)
            .attr("fill", "white")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("V") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#fb8385")
        } else if (filter == "uebersetzung") {
          areachart.selectAll("path").classed("filtered", true).filter(".uebersetzung").classed("filtered", false)
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".uebersetzung").classed("filtered", false)

          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 0)
            .attr("fill", "white")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.SchriftspurTyp.includes("U") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#d93168")
        } else if (filter == "anderes") {
          areachart.selectAll("path").classed("filtered", true).filter(".anderes").classed("filtered", false)
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".anderes").classed("filtered", false)

          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 0)
            .attr("fill", "white")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.Benutzungsspur.includes("7") == true
            })
            .transition()
            .attr("opacity", 1)
            .attr("fill", "#f284c0")
        } else if (filter == "leer") {
          dataContainer.selectAll(".nodes")
            .transition()
            .attr("opacity", 0)
            .attr("fill", "white")

          dataContainer.selectAll(".nodes")
            .filter(function(d) {
              return d.Benutzungsspur === ""
            })
            .transition()
            .attr("opacity", 1)
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


        if (transitionsNeu > 0 || scrollTop !== newScrollTop) {
          scrollTop = newScrollTop
          if (transitionbookClick == false) {
            scrollFunction()
          }
          draw()

        }
        if (modus != "similarity") {
          window.requestAnimationFrame(animate);
        }
      }


      if (modus != "similarity") {
        window.requestAnimationFrame(animate);
      }





      function hashFunction() {

        window.location.hash = "#modus=" + modus + "?level=" + scrollTop + "?filter=" + filter + "?auswahl=" + clickedBook
        d3.select("#shareInput").attr("value", window.location.href)

      }

      var fullHash = 0
      var level = "start"

      function hashLoad() {

        if (window.location.hash == "") {
          setTimeout(function() {
            window.scrollTo(0, 3000)
            transitionbookClick = false
          }, 10);
        } else if (window.location.hash != "") {

          fullHash = window.location.hash.split("?");
          modus = fullHash[0].substring(7)
          level = fullHash[1].substring(6)
          filter = fullHash[2].substring(7)
          clickedBook = fullHash[3].substring(8)
          transitionbookClick = false

          if (clickedBook != 0) {
            transitionbookClick = true
            thisData = datenByTitle.filter(function(d) {
                return d.key == clickedBook
              })[0]
              .values.filter(function(d) {
                return d.Benutzungsspur != "" && d.Benutzungsspur != "4f" && d.Benutzungsspur != "4f?"
              })

            bookClickHash(thisData)
          }

          if (filter == "eigentumsangaben" || filter == "provenienz" || filter == "provenienzstempel") {
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

            eigentumsangaben.select("text").transition().duration(800).style("fill", "#707070")
            anderes.select("text").transition().duration(800).style("fill", "#f284c0")
            zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
            marginalien.select("text").transition().duration(800).style("fill", "#f73f26")

            eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
            anderes.select("rect").transition().duration(800).style("opacity", 0)
            zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
            marginalien.select("rect").transition().duration(800).style("opacity", 0)

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

            eigentumsangaben.select("text").transition().duration(800).style("fill", "#707070")
            anderes.select("text").transition().duration(800).style("fill", "#f284c0")
            zusatzMaterial.select("text").transition().duration(800).style("fill", "rgb(210, 164, 0)")
            markierungen.select("text").transition().duration(800).style("fill", "#58b0f7")

            eigentumsangaben.select("rect").transition().duration(800).style("opacity", 0)
            anderes.select("rect").transition().duration(800).style("opacity", 0)
            zusatzMaterial.select("rect").transition().duration(800).style("opacity", 0)
            markierungen.select("rect").transition().duration(800).style("opacity", 0)

            marginalien.selectAll("text").style("font-weight", "bold")
            marginaliendetail.transition().duration(800).attr("transform", "scale(1,1)").style("opacity", 1).style("pointer-events", "auto")

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
            zusatzMaterial.selectAll("text").style("font-weight", "bold").style("opacity", 1)
            marginalien.selectAll("text").style("font-weight", "200").style("opacity", .6)
            markierungen.selectAll("text").style("font-weight", "200").style("opacity", .6)
            eigentumsangaben.selectAll("text").style("font-weight", "200").style("opacity", .6)
            anderes.selectAll("text").style("font-weight", "200").style("opacity", .6)


            eigentumsangabendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
            markierungendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
            marginaliendetail.transition().duration(800).attr("transform", "scale(0,1)").style("opacity", 0).style("pointer-events", "none")
          } else if (filter == "anderes") {
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
            }, 805)

          }, 500);
        }
      }









      function scrollFunction() {
        d3.select(".tippbubble").transition().duration(800).style("opacity", 0).transition().delay(1000).style("display", "none")
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

          d3.selectAll(".detailInfoParent")
            .transition()
            .style("opacity", 0)

          d3.selectAll(".detailDiv").transition()
            .style("opacity", 0)

          d3.selectAll(".bookBG").selectAll("rect")
            .transition()
            .style("opacity", 0)


          bookFingerprint.selectAll(".nodes")
            .attr("height", function(d) {
              if (d.maxPart >= 1674) {
                var implicateScaleB = d3.scaleLinear()
                  .domain([-100, -1000]) ////*****hier scroll
                  .range([(areaheight / d.maxPart), 0])
                  .clamp(true)
                return implicateScaleB(scrollTop)
              } else {
                var implicateScale = d3.scaleLinear()
                  .domain([-100, -1000]) ////*****hier scroll
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
                  .domain([-100, -1000]) ////*****hier scroll
                  .range([(areaheight / d.maxPart), pageheight])
                  .clamp(true)

                return posYCanvas + implicateScaleB(scrollTop) * (d.Part - 1)
              } else {
                var implicateScale = d3.scaleLinear()
                  .domain([-100, -1000]) ////*****hier scroll
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
                  .domain([-100, -1000]) ////*****hier scroll
                  .range([areaheight, (d.values[0].maxPart) * pageheight])
                  .clamp(true)
                return implicateScaleB(scrollTop)
              } else {
                var implicateScale = d3.scaleLinear()
                  .domain([-100, -1000]) ////*****hier scroll
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
                .domain([-1000, -2900]) ////*****hier scroll
                .range([buchBreite, 0])
                .clamp(true)
              return implicateScaleC(scrollTop)
            })


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
                return "translate(" + (marginleft + (posx2)) + "," + (posY) + ")"
              } else if (i != 0 && d.values[0].AuthorCount == 1) {
                posx2 = posx2
                posx = posx + buchBgBreite

                var implicateScaleX1 = d3.scaleLinear()
                  .domain([-100, -3000]) ////*****hier scroll
                  .range([posx, posx2])
                  .clamp(true)

                return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
              } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
                posx2 = posx2 + areaSize + authorLevelAbstand
                posx = posx + authorAbstand

                var implicateScaleX1 = d3.scaleLinear()
                  .domain([-100, -3000]) ////*****hier scroll
                  .range([posx, posx2])
                  .clamp(true)

                return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
              } else {
                posx2 = posx2
                posx = posx + buchBgBreite

                var implicateScaleX1 = d3.scaleLinear()
                  .domain([-100, -3000]) ////*****hier scroll
                  .range([posx, posx2])
                  .clamp(true)

                return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
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
                return "translate(" + (marginleft + (posx2)) + "," + (posY) + ")"
              } else if (i != 0 && d.values[0].AuthorCount == 1) {
                posx2 = posx2
                posx = posx + buchBgBreite

                var implicateScaleX1 = d3.scaleLinear()
                  .domain([-100, -3000]) ////*****hier scroll
                  .range([posx, posx2])
                  .clamp(true)

                return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"

              } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
                posx2 = posx2 + areaSize + authorLevelAbstand
                posx = posx + authorAbstand

                var implicateScaleX1 = d3.scaleLinear()
                  .domain([-100, -3000]) ////*****hier scroll
                  .range([posx, posx2])
                  .clamp(true)

                return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
              } else {
                posx2 = posx2
                posx = posx + buchBgBreite

                var implicateScaleX1 = d3.scaleLinear()
                  .domain([-100, -3000]) ////*****hier scroll
                  .range([posx, posx2])
                  .clamp(true)

                return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
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
                return "translate(" + (marginleft + (posx2)) + "," + (posYCanvas) + ")"
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
                .domain([-1000, -2500]) ////*****hier scroll
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
            if (scrollTop >= 0) {
              return "auto"
            }
          })




        }

        ////////Scroll-Section > 0 Start
        ///////////////////////////////////////
        ///////////////////////////////////////
        ///////////////////////////////////////
        else if (scrollTop >= 0) {

          if (scrollTop >= 0 && clickedBook != 0) {
            d3.selectAll(".detailDiv")
              .transition()
              .style("opacity", 1)

            d3.selectAll(".detailInfoParent")
              .transition()
              .style("opacity", 1)
          }


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
                  return "translate(" + (marginleft + (posx2)) + "," + (posY) + ")"
                } else if (i != 0 && datenByTitle[i - 1].values[0].Verfasser != d.values[0].Verfasser) {
                  posx2 = posx2 + sLAuthorAbstand2
                  posx = posx + authorAbstand

                  var implicateScaleX1 = d3.scaleLinear()
                    .domain([-100, -3000])
                    .range([posx, posx2])
                    .clamp(true)

                  return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
                } else {
                  posx2 = posx2
                  posx = posx + buchBgBreite

                  var implicateScaleX1 = d3.scaleLinear()
                    .domain([-100, -3000])
                    .range([posx, posx2])
                    .clamp(true)

                  return "translate(" + (marginleft + (implicateScaleX1(scrollTop))) + "," + (posY) + ")"
                }
              })

            bookFingerprint
              .attr("transform", function(d, i) {
                if (i == 0) {
                  posx2 = 0
                  posx = 0
                  return "translate(" + (marginleft + (posx2)) + "," + (posYCanvas) + ")"
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
            sLTotalBuchWidthSelected = (thisVerfasserSelectedBookCount) * sLBuchAbstandSelected
            sLTotalBuchWidthUnselected = (BuchAnzahl - thisVerfasserSelectedBookCount - (authorAnzahl - 1)) * sLBuchAbstandUnselected
            sLAuthorAbstand2 = (chartArea - (sLTotalBuchWidthSelected + sLTotalBuchWidthUnselected)) / (authorAnzahl - 1)



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




            ////mehrere Lesespuren auf einer Seite sollen aufgesplittert werden, wenn der Verfasser ausgewählt ist, allerdings erst aber scrollTop > 0 weil sonst die Filterung auf Buch-Ebene zu kleinteilig ist
            if (scrollTop > 0) {
              bookFingerprint.selectAll(".nodes")
                .filter(function(d, i) {
                  return d.Verfasser == thisVerfasserSelected
                })
                .attr("width", function(d, i) {
                  ///MAX SCHRIFTSPUR AUF SEITE BERECHNEN
                  var thisBookData = (d3.select(this.parentNode).datum()).values.filter(function(D, I) {
                    return D.Benutzungsspur != "" && D.Benutzungsspur != "4f" && D.Benutzungsspur != "4f?"
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
                    return D.Benutzungsspur != "" && D.Benutzungsspur != "4f" && D.Benutzungsspur != "4f?"
                  })
                  var maxSpurenAufSeite = thisBookData.filter(function(D, I) {
                    return D.ID == d.ID && D.Benutzungsspur != "4f" && D.Benutzungsspur != "4f?"
                  }).length

                  ///Spurposition abhängig von maxSpurenAufSeite
                  var implicateScaleWidth = d3.scaleLinear()
                    .domain([500, 2000])
                    .range([buchBreite / maxSpurenAufSeite, sLBuchBreiteSelected / maxSpurenAufSeite])
                    .clamp(true)

                  if (i > 9 && thisBookData[i - 10].ID == d.ID) {
                    return 10 * implicateScaleWidth(scrollTop)
                  } else if (i > 8 && thisBookData[i - 9].ID == d.ID) {

                    return 9 * implicateScaleWidth(scrollTop)
                  } else if (i > 7 && thisBookData[i - 8].ID == d.ID) {

                    return 8 * implicateScaleWidth(scrollTop)
                  } else if (i > 6 && thisBookData[i - 7].ID == d.ID) {

                    return 7 * implicateScaleWidth(scrollTop)
                  } else if (i > 5 && thisBookData[i - 6].ID == d.ID) {

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

            }


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

            d3.select("#svg").selectAll(".singleBookBG")
              .attr("width", function(d, i) {
                if (d.values[0].Verfasser == thisVerfasserSelected) {
                  var implicateScaleWidth = d3.scaleLinear()
                    .domain([500, 2000])
                    .range([buchBgBreite, sLBuchBreiteSelected])
                    .clamp(true)

                  var thisCount = datenByAuthor.filter(function(D, I) {
                    return D.key === thisVerfasserSelected
                  })[0].values.length


                  return implicateScaleWidth(scrollTop)


                } else {
                  var implicateScaleWidth = d3.scaleLinear()
                    .domain([500, 2000])
                    .range([buchBreite, sLBuchBreiteUnselected])
                    .clamp(true)

                  return implicateScaleWidth(scrollTop)
                }
              })




            bookFingerprint
              .attr("transform", function(d, i) {

                posYCanvas = 0

                if (i == 0) {
                  posx3 = 0
                  posx = 0
                  return "translate(" + (marginleft + (posx3)) + "," + (posYCanvas) + ")"

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
                  return "translate(" + (marginleft + (posx3)) + "," + (posY) + ")"

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
                  return "translate(" + (marginleft + (posx3) - 40.5) + "," + (posY) + ")"

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
                  return "translate(" + (marginleft + (posx3)) + "," + (posY) + ")"
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

          if (clickedBook != 0 && scrollTop >= 0) {
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



            var onSelectionAuthorAbstand = ((chartArea) - BuchauswahlFeldScale(scrollTop) - ((BuchAnzahl - authorAnzahl - 2) * onSelectionBuchAbstandScale(scrollTop))) / (authorAnzahl - 1)

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
                if (i > 6 && thisData[i - 7].ID == d.ID) {
                  return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 7
                } else if (i > 5 && thisData[i - 6].ID == d.ID) {
                  return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 6
                } else if (i > 4 && thisData[i - 5].ID == d.ID) {
                  return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 5
                } else if (i > 3 && thisData[i - 4].ID == d.ID) {
                  return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 4
                } else if (i > 2 && thisData[i - 3].ID == d.ID) {
                  return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 3
                } else if (i > 1 && thisData[i - 2].ID == d.ID) {
                  return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop) * 2
                } else if (i != 0 && thisData[i - 1].ID == d.ID) {
                  return 7 * selectedBookScale(scrollTop) - selectedBookScale(scrollTop)
                } else {
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
                } else if (i == datenByTitle.length - 1 && datenByTitle[i].values[0].BookID == clickedBook) {
                  thisBookPosition = posx + 83
                  posx = posx + onSelectionBuchAbstandScale(scrollTop)
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
            .on("touchstart", schreibhandIconFunction)
            .on("mouseout", function() {
              d3.selectAll(".schreibhandTooltip").remove()
            })
            .on("touchend", function() {
              var thisBookID = d3.select(this).datum().values[0].BookID

              svgFrontTitles.selectAll(".bookTitleFrontG")
                .filter(function(d) {
                  return d.values[0].BookID == thisBookID
                })
                .style("display", "none")


              svg.selectAll(".authorLabel").filter(function(d) {
                if (scrollTop >= 0) {
                  return d.values[0].Verfasser != thisVerfasserSelected
                } else {
                  return d
                }
              }).style("font-weight", function() {
                if (scrollTop < 0) {
                  return "normal"
                }
              })

              d3.select('.tooltip')
                .style("display", "none")
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
            .on("mousemove", buchHoverFunction)
            .on("touchstart", buchHoverFunction)
            .on("touchend", function(d) {
              d3.select('.tooltip')
                .style("display", "none")
                .style('top', d3.event.pageY)
            })

          ///////////////////////////
          ///////////////////////////
          ////BuchhoverFunction Start
          ///////////////////////////
          function buchHoverFunction(d, i) {

            if (scrollTop >= 0) {
              var currentScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)

              var mouseY = ((d3.event.pageY) - currentScrollTop - canvasTop - posYCanvas);
              var mouseX = d3.event.pageX

              var thisPage = Math.round(round45(mouseY) / explicateScale2(scrollTop))


              function round45(x) {
                return Math.ceil(x / explicateScale2(scrollTop)) * explicateScale2(scrollTop)
              }

              thisVerfasser = d3.select(this).datum().values[0].Verfasser
              var thisBookID = d3.select(this).datum().values[0].BookID

              ///für jedes Buch, das nicht der aktuellen Selektion entspricht
              if (thisBookID != clickedBook) {

                if (d.values[0].maxPart < thisPage || mouseY < 0 || scrollTop < 1000) {

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
                    .on("click", function(d, i) {
                      var thisPart = thisPage
                      detailviewOpen(thisBookID, thisPart)
                    })

                }


              }
              //Ende


            }

          }
          ///////////////////////////
          ///////////////////////////
          ////BuchhoverFunction Ende
          ///////////////////////////


          ///////////////////////////
          ///////////////////////////
          ////Lesespur/Seiten-Klick
          ///////////////////////////



          d3.selectAll(".singleBookBG")
            .on("click", function(d, i) {
              if (d3.select(this).datum().values[0].BookID !== clickedBook) {
                if (scrollTop < 0) {

                  $("html,body").animate({
                    scrollTop: 3000
                  }, '0')


                  clickedBook = d3.select(this).datum().values[0].BookID
                  thisData = (d3.select(this).datum().values).filter(function(d) {
                    return d.Benutzungsspur != "" && d.Benutzungsspur != "4f" && d.Benutzungsspur != "4f?"
                  })

                  setTimeout(function() {
                    bookClickHash(thisData)


                  }, 550);

                } else {
                  clickedBook = d3.select(this).datum().values[0].BookID
                  thisData = (d3.select(this).datum().values).filter(function(d) {
                    return d.Benutzungsspur != "" && d.Benutzungsspur != "4f" && d.Benutzungsspur != "4f?"
                  })

                  bookClickHash(thisData)
                }
              } else if (d3.select(this).datum().values[0].BookID === clickedBook) {
                d3.event.stopPropagation()

                if (scrollTop >= 0 && d3.select(this).datum().values[0].BookID == clickedBook) {

                  var currentScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)

                  //    var mouseY = ((d3.event.layerY || d3.event.offsety) - currentScrollTop-120);
                  var mouseY = ((d3.event.pageY) - currentScrollTop - canvasTop - posYCanvas);


                  var thisPage = Math.round(round45(mouseY) / explicateScale2(scrollTop))

                  var thisPageID = (d.values.filter(function(d, i) {
                    return d.Part == thisPage
                  }))[0].ID

                  function round45(x) {
                    return Math.ceil(x / explicateScale2(scrollTop)) * explicateScale2(scrollTop)
                  }
                  thisVerfasser = d3.select(this).datum().values[0].Verfasser

                  var thisBookID = d3.select(this).datum().values[0].BookID

                  var thisPart = thisPage

                  detailviewOpen(thisBookID, thisPart)

                }


              }
            })



          //////////////
          //////////////
          ///Hover-Transcript

          d3.selectAll(".transcriptions").attr("cursor", "pointer").selectAll("text").on("mousemove", function(d) {

            if (scrollTop >= 0) {
              var currentScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)

              var mouseY = ((d3.event.pageY) - currentScrollTop - canvasTop - posYCanvas);


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


      function detailviewOpen(thisBookID, thisPart) {

        var thisPageID = datenByTitle.filter(function(d) {
          return d.key == clickedBook
        })[0].values.filter(function(d) {
          return d.Part == thisPart
        })[0].ID
        var nextPage = +thisPart + 1
        var previousPage = +thisPart - 1
        var lastPage = datenByTitle.filter(function(d) {
          return d.key == clickedBook
        })[0].values.filter(function(d) {
          return d.Part == thisPart
        })[0].maxPart


        d3.select("#detailview").selectAll("img").remove()
        d3.select("#detailview").selectAll("table").remove()

        d3.selectAll(".detailviewPrevious")
          .style("display", function() {
            if (thisPart > 1) {
              return "block"
            } else {
              return "none"
            }
          })
          .style("border-color", "transparent rgba(71, 71, 71, 0.9)transparent transparent")
          .on("click", function() {
            return detailviewOpen(thisBookID, previousPage)
          })

        d3.selectAll(".detailviewNext")
          .style("display", function() {
            if (thisPart < lastPage) {
              return "block"
            } else {
              return "none"
            }
          })
          .style("border-color", "transparent transparent transparent rgba(71, 71, 71, 0.9)")
          .on("click", function() {
            return detailviewOpen(thisBookID, nextPage)
          })

        d3.select("#overlay").style("display", "block").transition().duration(600).style("opacity", .5)
        d3.select("#detailview").style("display", "block").transition().duration(600).style("opacity", 1)

        d3.select("#detailview").append("div").attr("class", "tableImage")
          .append("img").attr("src", "./img/m/" + thisPageID + ".jpg").attr("class", "tableimg")

        var detailviewTable = d3.select("#detailview").append("table").attr("id", "detailviewTable")

        var detailviewTableTr1 = detailviewTable.append("tr")
        var detailviewTableTr2 = detailviewTable.append("tr")
        var detailviewTableTr3 = detailviewTable.append("tr").style("display", function(d) {
          if (korpus.filter(function(D, I) {
              return D.KurzSignatur == thisBookID
            })[0].Herausgeber == "") {
            return "none"
          } else {
            return "table-row"
          }
        })
        var detailviewTableTr4 = detailviewTable.append("tr").style("display", function(d) {
          if (korpus.filter(function(D, I) {
              return D.KurzSignatur == thisBookID
            })[0].Verlag == "") {
            return "none"
          } else {
            return "table-row"
          }
        })
        var detailviewTableTr5 = detailviewTable.append("tr").style("display", function(d) {
          if (korpus.filter(function(D, I) {
              return D.KurzSignatur == thisBookID
            })[0].Formalschlagwort_Genre == "") {
            return "none"
          } else {
            return "table-row"
          }
        })
        var detailviewTableTr6 = detailviewTable.append("tr").style("display", function(d) {
          if (korpus.filter(function(D, I) {
              return D.KurzSignatur == thisBookID
            })[0].Ort == "") {
            return "none"
          } else {
            return "table-row"
          }
        })

        var detailviewTableTr7 = detailviewTable.append("tr").style("display", function(d) {
          if (korpus.filter(function(D, I) {
              return D.KurzSignatur == thisBookID
            })[0].Jahr == "") {
            return "none"
          } else {
            return "table-row"
          }
        })
        var detailviewTableTr8 = detailviewTable.append("tr")

        var detailviewTableTr9 = detailviewTable.append("tr")
          .style("display", function(d) {
            if (datenByTitle.filter(function(d) {
                return d.key == clickedBook
              })[0].values.filter(function(d) {
                return d.SchriftspurTranskription != "" && d.Part == thisPart
              }).length < 1) {
              return "none"
            } else {
              return "table-row"
            }
          })






        detailviewTableTr1.append("td").text("Buchtitel: ").attr("class", "td-title")
        detailviewTableTr1.append("td").attr("class", "td-data").text(function(d) {
          return korpus.filter(function(D, I) {
            return D.KurzSignatur == thisBookID
          })[0].Titel
        })

        detailviewTableTr2.append("td").text("Verfasser: ").attr("class", "td-title")
        detailviewTableTr2.append("td").attr("class", "td-data").text(function(d) {
          return korpus.filter(function(D, I) {
            return D.KurzSignatur == thisBookID
          })[0].Verfasser
        })

        detailviewTableTr3.append("td").text("Herausgeber: ").attr("class", "td-title")
        detailviewTableTr3.append("td").attr("class", "td-data").text(function(d) {
          return korpus.filter(function(D, I) {
            return D.KurzSignatur == thisBookID
          })[0].Herausgeber
        })
        detailviewTableTr4.append("td").text("Verlag: ").attr("class", "td-title")
        detailviewTableTr4.append("td").attr("class", "td-data").text(function(d) {
          return korpus.filter(function(D, I) {
            return D.KurzSignatur == thisBookID
          })[0].Verlag
        })

        detailviewTableTr5.append("td").text("Genre: ").attr("class", "td-title")
        detailviewTableTr5.append("td").attr("class", "td-data").text(function(d) {
          return korpus.filter(function(D, I) {
            return D.KurzSignatur == thisBookID
          })[0].Formalschlagwort_Genre
        })

        detailviewTableTr6.append("td").text("Ort: ").attr("class", "td-title")
        detailviewTableTr6.append("td").attr("class", "td-data").text(function(d) {
          return korpus.filter(function(D, I) {
            return D.KurzSignatur == thisBookID
          })[0].Ort
        })

        detailviewTableTr7.append("td").text("Datierung: ").attr("class", "td-title")
        detailviewTableTr7.append("td").attr("class", "td-data").text(function(d) {
          return korpus.filter(function(D, I) {
            return D.KurzSignatur == thisBookID
          })[0].Jahr
        })



        detailviewTableTr8.append("td").text("Seiten-ID: ").attr("class", "td-title")
        detailviewTableTr8.append("td").attr("class", "td-data").text(thisPageID)

        detailviewTableTr9.append("td").text("Transkriptionen: ").attr("class", "td-title")
        detailviewTableTr9.append("td").attr("class", "td-data").selectAll("p")
          .data(datenByTitle.filter(function(d) {
            return d.key == clickedBook
          })[0].values.filter(function(d) {
            return d.SchriftspurTranskription != "" && d.Part == thisPart
          }))
          .enter()
          .append("p").classed("detailviewTableTranscript", true).text(function(d) {
            return d.SchriftspurTranskription
          })
          .append("span").classed("detailviewTableTranscriptSpan", true).text(function(d) {
            if (d.SchriftspurSchreibhand == "") {
              return " (" + d.Schreibmedium + ")"
            } else {
              return " (" + d.SchriftspurSchreibhand + ", " + d.Schreibmedium + ")"
            }
          })
      }


      draw()



      function draw() {
        // clear canvas
        context.clearRect(0, 0, width, height);
        ///draw elements
        var bookGroups = dataContainer.selectAll(".bookFingerprint")


        bookGroups.each(function(d) {
          var bookGroupPosition = Number(d3.select(this).attr("transform").replace("translate(", "").split(',')[0])

          var elementswhite = d3.select(this).selectAll(".nodesbg");

          elementswhite.each(function(d) {


            var node = d3.select(this);
            var nodeXPos = Number(node.attr("x")) + bookGroupPosition
            context.fillStyle = node.attr("fill");
            context.globalAlpha = node.attr("opacity")


            context.beginPath();
            context.rect((nodeXPos), (node.attr("y")), (node.attr("width")), (node.attr("height")))
            context.fill();
            context.closePath();
          })



          var elements = d3.select(this).selectAll(".nodes");

          elements.each(function(d) {
            var node = d3.select(this);
            var nodeXPos = Number(node.attr("x")) + bookGroupPosition

            context.fillStyle = node.attr("fill");

            if (node.datum().BookID == clickedBook) {
              context.globalAlpha = 1
            } else {
              context.globalAlpha = node.attr("opacity")
            }



            context.beginPath();
            context.rect((nodeXPos), (node.attr("y")), (node.attr("width")), (node.attr("height")))
            context.fill();

            context.closePath();
          })
        })

      }



      function implicationStart() {
        d3.selectAll("#svg,#container,#svgFront,#svgFrontTitles").style("display", "block")
        dataContainer.selectAll(".nodesbg").attr("fill", "white").style("opacity", 1).style("fill", "white").attr("opacity", 1)
        d3.selectAll(".nodesbg").attr("fill", "white").style("opacity", 1)
        d3.select("html,body").style("overflow-y", "scroll")

        d3.select(".modus1").style("display", "block")
        d3.select(".modus2").style("display", "none")

        d3.select(".verfasserbubble").select("p").text("Autor*innen-Ebene: Durchschnittliche Verteilung der Lesespuren von allen Büchern eines gleichen Autors abschnittsweise von oben (Buchanfang) nach unten (Buchende) in Form von Flächen-Diagrammen.")
        d3.select(".buchbubble").select("p").text("Buch-Ebene: Übersicht aller Bücher (je ein Balken) der Handbibliothek, geordnet nach Autor*innen.")

        transitions = true
        transitionsNeu++
        animate()

        setTimeout(function() {
          transitions = false
          transitionsNeu--

        }, 3000);



        d3.select(".distributionbutton").transition().style("opacity", 1)
        d3.select(".similaritybutton").transition().style("opacity", 0.5)
        d3.select(".piedetailview").style("display", "none")

        d3.select(".detailDiv").style("display", null)

        d3.select("html").transition().duration(2000).style("background-color", "#f7e5d7").style("color", "black")
        d3.select("body").transition().duration(2000).style("background-color", "#f7e5d7").style("color", "black")
        d3.select("#overlay").style("background-color", "#f7e5d7").style("color", "black")

        d3.selectAll(".legendTitle").transition().duration(2000).style("fill", "black")
        d3.selectAll("#complicationsvg").style("display", "none")
        d3.select(".search-container").style("display", "block")


        d3.selectAll(".seitenIcon,.thirdScrollCircle").transition().duration(1000).style("opacity", 1)

        d3.selectAll(".firstScrollLine,.secondScrollLine").transition().duration(1000).attr("y2", thirdScrollIcon)


        var scrollCircleScale = d3.scaleLinear()
          .domain([-3000, 0, 2600])
          .range([firstScrollIcon, secondScrollIcon, thirdScrollIcon - 5])
          .clamp(true)

        d3.selectAll(".scrollCircleFollower")
          .attr("cy", scrollCircleScale(newScrollTop))
          .attr("r", function() {
            if (window.innerWidth < 2000) {
              return 5
            } else {
              return 10
            }
          })



      }


    }




    //////////ENDE IMPLICATION/EXPLICATION

    function complication() {
      d3.select(".modus1").style("display", "none")
      d3.select(".modus2").style("display", "block")

      d3.select(".tippbubble").transition().duration(800).style("opacity", 0).transition().delay(1000).style("display", "none")
      d3.selectAll(".nodesbg").attr("fill", "white").style("opacity", 1)

      hashFunction()
      var complicationStart = true
      transitions = false
      transitionsNeu = 0

      setTimeout(function() {
        complicationStart = false
      }, 1500);

      var visualizationsizeheight = 900
      var visualizationsizewidth = 900

      d3.select("#complicationsvg")
        .attr("preserveAspectRatio", "xMinYMid")
        .attr("viewBox", "100 -100 " + visualizationsizewidth + " " + visualizationsizeheight)
        .attr("width", "100%")
        .attr("height", "100%")

      d3.select(".distributionbutton").transition().style("opacity", 0.5)
      d3.select(".similaritybutton").transition().style("opacity", 1)
      ///////change style
      d3.select("html").transition().duration(2000).style("background-color", "rgb(35, 40, 52)").style("color", "white")
      d3.select("body").transition().duration(2000).style("background-color", "rgb(35, 40, 52)").style("color", "white")
      d3.select("#overlay").style("background-color", "rgb(35, 40, 52)").style("color", "white")


      d3.select("#scrollnavi").style("box-shadow", "2px 0px 5px black")

      d3.selectAll(".legendTitle").transition().duration(2000).style("fill", "white")
      d3.select(".search-container").style("display", "none")
      d3.select(".detailDiv").style("display", "none")

      d3.select(".verfasserbubble").select("p").text("Autor*innen-Ebene: Ähnlichkeitsbasierte Anordnung der Autor*innen basierend auf den vorkommenden Lesespuren.")
      d3.select(".buchbubble").select("p").text("Buch-Ebene: Ähnlichkeitsbasierte Anordnung der Bücher basierend auf den vorkommenden Lesespuren.")


      d3.selectAll("#complicationsvg").style("display", "block")


      d3.selectAll("#svg,#container,#svgFront,#svgFrontTitles").style("display", "none")

      d3.selectAll(".seitenIcon,.thirdScrollCircle").transition().duration(1000).style("opacity", 0)

      d3.selectAll(".firstScrollLine,.secondScrollLine").transition().duration(1000).attr("y2", secondScrollIcon)




      var scrollCircleScale2 = d3.scaleLinear()
        .domain([-2500, 0])
        .range([firstScrollIcon, secondScrollIcon])
        .clamp(true)

      var scrollCircleZoomScale = d3.scaleLinear()
        .domain([-3000, -2500, 0, 3000])
        .range([1, 5, 5, 1])
        .clamp(true)




      d3.selectAll(".scrollCircleFollower")
        .attr("cy", scrollCircleScale2(newScrollTop))
        .attr("r", function() {
          if (window.innerWidth < 2000) {
            return scrollCircleZoomScale(newScrollTop)
          } else {
            return scrollCircleZoomScale(newScrollTop) * 2
          }
        })








      var datensatzAll = dataset

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
        D.authorCount = +D.values[0].AuthorCount

      })

      var BuchAnzahl = datenByTitle.length
      var authorAnzahl = datenByAuthor.filter(function(d, i) {
        return d.values[0].values[0].AuthorCount > 1
      }).length


      datenByAuthor.forEach(function(D, I) {

        D.Abschnitte = []
        D.Seitenzahl = 0

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

          var leseSpuren = d3.nest()
            .key(function(d) {
              return d.ID;
            })
            .entries(E.values.filter(function(d) {
              return d.Benutzungsspur != ""
            }))


          leseSpuren.forEach(function(x, y) {
            x.Provenienz = x.values.filter(function(d, i) {
                return d.SchriftspurTyp.includes("P") && d.Schreibmedium !== "Stempel"
              }).length,
              x.Stempel = x.values.filter(function(d, i) {
                return d.SchriftspurTyp.includes("P") && d.Schreibmedium === "Stempel"
              }).length,
              x.Anstreichung = x.values.filter(function(d, i) {
                return d.Benutzungsspur.includes("1")
              }).length,
              x.Unterstreichung = x.values.filter(function(d, i) {
                return d.Benutzungsspur.includes("2")
              }).length,
              x.Durchstreichung = x.values.filter(function(d, i) {
                return d.Benutzungsspur.includes("3")
              }).length,
              x.SonstigeMarkierung = x.values.filter(function(d, i) {
                return d.Benutzungsspur.includes("4") == true && d.Benutzungsspur.includes("4f") == false
              }).length,
              x.ZusatzMaterial = x.values.filter(function(d, i) {
                return d.Benutzungsspur.includes("6")
              }).length,
              x.Bewertung = x.values.filter(function(d, i) {
                return d.SchriftspurTyp.includes("B")
              }).length,
              x.Kommentar = x.values.filter(function(d, i) {
                return d.SchriftspurTyp.includes("K")
              }).length,
              x.Textkorrektur = x.values.filter(function(d, i) {
                return d.SchriftspurTyp.includes("T")
              }).length,
              x.Variante = x.values.filter(function(d, i) {
                return d.SchriftspurTyp.includes("V")
              }).length,
              x.Uebersetzung = x.values.filter(function(d, i) {
                return d.SchriftspurTyp.includes("U")
              }).length,
              x.Anderes = x.values.filter(function(d, i) {
                return d.Benutzungsspur.includes("7")
              }).length,
              x.Verfasser = x.values[0].Verfasser,
              x.VerfasserOriginal = x.values[0].Verfasser_Original,
              x.PartPos = x.values[0].Part / x.values[0].maxPart

          })

          leseSpuren.forEach(function(F, C) {
            if (F.PartPos <= 0.05) {

              if (F.Provenienz > 0) {
                D.Abschnitte[1].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[1].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[1].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[1].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[1].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[1].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[1].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[1].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[1].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[1].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[1].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[1].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[1].Variante++
              }
            } else if (F.PartPos > 0.05 && F.PartPos <= 0.1) {
              if (F.Provenienz > 0) {
                D.Abschnitte[2].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[2].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[2].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[2].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[2].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[2].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[2].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[2].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[2].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[2].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[2].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[2].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[2].Variante++
              }
            } else if (F.PartPos > 0.1 && F.PartPos <= 0.15) {
              if (F.Provenienz > 0) {
                D.Abschnitte[3].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[3].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[3].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[3].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[3].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[3].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[3].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[3].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[3].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[3].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[3].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[3].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[3].Variante++
              }
            } else if (F.PartPos > 0.15 && F.PartPos <= 0.2) {
              if (F.Provenienz > 0) {
                D.Abschnitte[4].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[4].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[4].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[4].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[4].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[4].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[4].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[4].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[4].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[4].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[4].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[4].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[4].Variante++
              }
            } else if (F.PartPos > 0.2 && F.PartPos <= 0.25) {
              if (F.Provenienz > 0) {
                D.Abschnitte[5].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[5].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[5].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[5].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[5].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[5].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[5].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[5].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[5].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[5].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[5].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[5].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[5].Variante++
              }
            } else if (F.PartPos > 0.25 && F.PartPos <= 0.3) {
              if (F.Provenienz > 0) {
                D.Abschnitte[6].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[6].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[6].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[6].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[6].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[6].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[6].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[6].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[6].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[6].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[6].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[6].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[6].Variante++
              }
            } else if (F.PartPos > 0.3 && F.PartPos <= 0.35) {
              if (F.Provenienz > 0) {
                D.Abschnitte[7].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[7].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[7].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[7].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[7].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[7].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[7].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[7].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[7].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[7].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[7].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[7].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[7].Variante++
              }
            } else if (F.PartPos > 0.35 && F.PartPos <= 0.4) {
              if (F.Provenienz > 0) {
                D.Abschnitte[8].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[8].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[8].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[8].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[8].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[8].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[8].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[8].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[8].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[8].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[8].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[8].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[8].Variante++
              }
            } else if (F.PartPos > 0.4 && F.PartPos <= 0.45) {
              if (F.Provenienz > 0) {
                D.Abschnitte[9].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[9].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[9].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[9].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[9].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[9].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[9].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[9].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[9].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[9].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[9].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[9].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[9].Variante++
              }
            } else if (F.PartPos > 0.45 && F.PartPos <= 0.5) {
              if (F.Provenienz > 0) {
                D.Abschnitte[10].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[10].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[10].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[10].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[10].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[10].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[10].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[10].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[10].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[10].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[10].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[10].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[10].Variante++
              }
            } else if (F.PartPos > 0.5 && F.PartPos <= 0.55) {
              if (F.Provenienz > 0) {
                D.Abschnitte[11].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[11].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[11].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[11].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[11].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[11].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[11].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[11].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[11].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[11].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[11].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[11].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[11].Variante++
              }
            } else if (F.PartPos > 0.55 && F.PartPos <= 0.6) {
              if (F.Provenienz > 0) {
                D.Abschnitte[12].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[12].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[12].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[12].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[12].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[12].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[12].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[12].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[12].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[12].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[12].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[12].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[12].Variante++
              }
            } else if (F.PartPos > 0.5 && F.PartPos <= 0.65) {
              if (F.Provenienz > 0) {
                D.Abschnitte[13].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[13].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[13].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[13].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[13].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[13].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[13].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[13].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[13].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[13].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[13].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[13].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[13].Variante++
              }
            } else if (F.PartPos > 0.65 && F.PartPos <= 0.7) {
              if (F.Provenienz > 0) {
                D.Abschnitte[14].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[14].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[14].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[14].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[14].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[14].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[14].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[14].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[14].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[14].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[14].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[14].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[14].Variante++
              }
            } else if (F.PartPos > 0.7 && F.PartPos <= 0.75) {
              if (F.Provenienz > 0) {
                D.Abschnitte[15].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[15].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[15].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[15].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[15].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[15].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[15].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[15].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[15].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[15].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[15].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[15].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[15].Variante++
              }
            } else if (F.PartPos > 0.75 && F.PartPos <= 0.8) {
              if (F.Provenienz > 0) {
                D.Abschnitte[16].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[16].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[16].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[16].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[16].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[16].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[16].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[16].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[16].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[16].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[16].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[16].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[16].Variante++
              }
            } else if (F.PartPos > 0.8 && F.PartPos <= 0.85) {
              if (F.Provenienz > 0) {
                D.Abschnitte[17].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[17].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[17].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[17].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[17].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[17].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[17].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[17].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[17].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[17].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[17].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[17].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[17].Variante++
              }
            } else if (F.PartPos > 0.85 && F.PartPos <= 0.9) {
              if (F.Provenienz > 0) {
                D.Abschnitte[18].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[18].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[18].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[18].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[18].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[18].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[18].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[18].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[18].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[18].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[18].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[18].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[18].Variante++
              }
            } else if (F.PartPos > 0.9 && F.PartPos <= 0.95) {
              if (F.Provenienz > 0) {
                D.Abschnitte[19].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[19].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[19].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[19].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[19].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[19].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[19].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[19].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[19].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[19].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[19].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[19].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[19].Variante++
              }
            } else if (F.PartPos > 0.95 && F.PartPos <= 1) {
              if (F.Provenienz > 0) {
                D.Abschnitte[20].Provenienz++
              }
              if (F.Stempel > 0) {
                D.Abschnitte[20].Stempel++
              }
              if (F.Anstreichung > 0) {
                D.Abschnitte[20].Anstreichung++
              }
              if (F.Unterstreichung > 0) {
                D.Abschnitte[20].Unterstreichung++
              }
              if (F.Durchstreichung > 0) {
                D.Abschnitte[20].Durchstreichung++
              }
              if (F.SonstigeMarkierung > 0) {
                D.Abschnitte[20].SonstigeMarkierung++
              }
              if (F.ZusatzMaterial > 0) {
                D.Abschnitte[20].ZusatzMaterial++
              }
              if (F.Anderes > 0) {
                D.Abschnitte[20].Anderes++
              }
              if (F.Bewertung > 0) {
                D.Abschnitte[20].Bewertung++
              }
              if (F.Kommentar > 0) {
                D.Abschnitte[20].Kommentar++
              }
              if (F.Textkorrektur > 0) {
                D.Abschnitte[20].Textkorrektur++
              }
              if (F.Uebersetzung > 0) {
                D.Abschnitte[20].Uebersetzung++
              }
              if (F.Variante > 0) {
                D.Abschnitte[20].Variante++
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




      function animate2() {
        if (scrollTop !== newScrollTop) {
          scrollTop = newScrollTop
          compScrollFunction()

        }
        if (modus == "similarity") {
          window.requestAnimationFrame(animate2);
        }
      }

      if (modus == "similarity") {
        window.requestAnimationFrame(animate2);
      }






      var piedetailview = d3.select(".piedetailview")
      var pieData = []

      complicationData.forEach(function(D, I) {
        D.pieDataSum = +D.Bewertung + +D.Kommentar + +D.Textkorrektur + +D.Variante + +D.Uebersetzung + +D.Anstreichung + +D.Unterstreichung + +D.Durchstreichung + +D.SonstigeMarkierung + +D.ZusatzMaterial + +D.Anderes + +D.Provenienz + +D.Stempel

        D.pieData = []
        D.pieData = [
          +D.Bewertung,
          +D.Kommentar,
          +D.Textkorrektur,
          +D.Variante,
          +D.Uebersetzung,
          +D.Anstreichung,
          +D.Unterstreichung,
          +D.Durchstreichung,
          +D.SonstigeMarkierung,
          +D.ZusatzMaterial,
          +D.Anderes,
          +D.Provenienz,
          +D.Stempel
        ]

        if (D.level == "buch") {
          D.verfasserX = complicationData.filter(function(Y, Z) {
            return Y.ID == D.Verfasser
          })[0].x
          D.verfasserY = complicationData.filter(function(Y, Z) {
            return Y.ID == D.Verfasser
          })[0].y
        }

      })





      var scatterZoomScale = d3.scaleLinear()
        .domain([-2500, 0])
        .range([1, 1])
        .clamp(true)

      var lineZoomScale = d3.scaleLinear()
        .domain([-3000, -2500, 0, 1000])
        .range([1, 1, 1, 7])



      var complicationVisBG = d3.select("#complicationsvg").append("rect").attr("height", "3000px").attr("width", "3000px").style("fill", "none").style("pointer-events", "all")
      var complicationVisBaseG = d3.select("#complicationsvg").append("g").attr("class", "complicationVisBaseG").attr("transform", "translate(0, 0)")

      var zoomPointerX = 0
      var zoomPointerY = 0

      complicationVisBG
        .attr("cursor", "grab")
        .on("mousemove", function(d, i) {
          zoomPointerX = d3.mouse(this)[0]
          zoomPointerY = d3.mouse(this)[1]
          //
          // d3.select(".complicationVisG").attr("transform-origin", function(d){
          //   return zoomPointerX+"px "+zoomPointerY +"px"})

        })
        .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

      var dragStartX = 0
      var dragStartY = 0
      var dragPosXBefore = 0
      var dragPosYBefore = 0

      function dragstarted(event) {
        if(pieDetailviewOn == true){
          pieDetailClose()
        }

        d3.select(this).classed("active", true);


        dragStartX = d3.mouse(this)[0]
        dragStartY = d3.mouse(this)[1]

        var dragPosXYBefore = d3.select(".complicationVisBaseG").attr("transform").split(",")

        dragPosXBefore = +dragPosXYBefore[0].substring(10)
        dragPosYBefore = +dragPosXYBefore[1].split(")")[0]


      }

      function dragged() {
        var mouseDragX = dragPosXBefore - (dragStartX - d3.mouse(this)[0])
        var mouseDragY = dragPosYBefore - (dragStartY - d3.mouse(this)[1])


        d3.select(".complicationVisBaseG").attr("transform", `translate(${mouseDragX}, ${mouseDragY})`);
      }

      function dragended(d) {
        d3.select(this).classed("active", false);
      }


      var complicationVis = d3.select(".complicationVisBaseG").append("g").attr("class", "complicationVisG")
        .attr("transform", function(d, i) {
          return "translate(" + -0 + "," + -0 + ")scale(" + scatterZoomScale(scrollTop) + "," + scatterZoomScale(scrollTop) + ")"
        })









      var scatterScaleX = d3.scaleLinear()
        .domain([-20, 20])
        .range([0, 1200])
        .clamp(true)

      var scatterScaleY = d3.scaleLinear()
        .domain([10, -30])
        .range([0, 1200])
        .clamp(true)


      var compOpacityScale = d3.scaleLinear()
        .domain([-2500, -1000])
        .range([0, 1])
        .clamp(true)

      var verfasserPiesSizeScale = d3.scaleLinear()
        .domain([-2500, -1000])
        .range([0, 1])
        .clamp(true)

      var pieLineStrokes = d3.scaleLinear()
        .domain([-2500, 0])
        .range([1, 0])
        .clamp(true)




      var scatterZoomPositionY = d3.scaleLinear()
        .domain([-3000, -2500, 0, 1000])
        .range([-1200, 0, 0, -1600])

      var scatterZoomPositionX = d3.scaleLinear()
        .domain([-3000, -2500, 0, 1000])
        .range([-2200, 0, 0, -3400])



      /////////node-pie starting
      var arc = d3.arc();

      var pie = d3.pie()
        .sort(null)
        .value(function(e) {
          return e;
        });


      var pieGroup = complicationVis.selectAll(".pieG")
        .data(complicationData)
        .join("g")
        .attr("class", "pieG")
        .attr("transform", function(d, i) {
          return "translate(" + scatterScaleX(d.x) + "," + scatterScaleY(d.y) + ")"
        })
        .each(multiple)
        .style("opacity", function(d, i) {
          return 1 - compOpacityScale(scrollTop)
        })
        .filter(function(d, i) {
          return d.level == "buch"
        })
        .style("opacity", function(d, i) {
          return compOpacityScale(scrollTop)
        })
        .attr("transform", function(d, i) {
          var posXalsBuch = d.x
          var posXalsVerfasser = complicationData.filter(function(Y, Z) {
            return Y.ID == d.Verfasser
          })[0].x
          var posYalsBuch = d.y
          var posYalsVerfasser = complicationData.filter(function(Y, Z) {
            return Y.ID == d.Verfasser
          })[0].y

          var scatterScaleBuchX = d3.scaleLinear()
            .domain([-20, 20])
            .range([0, 1200])
            .clamp(true)

          var scatterScaleBuchY = d3.scaleLinear()
            .domain([10, -30])
            .range([0, 1200])
            .clamp(true)

          var scatterScaleBuchVerfasserX = d3.scaleLinear()
            .domain([-2500, 0])
            .range([posXalsVerfasser, posXalsBuch])
            .clamp(true)

          var scatterScaleBuchVerfasserY = d3.scaleLinear()
            .domain([-2500, 0])
            .range([posYalsVerfasser, posYalsBuch])
            .clamp(true)

          var radiusSizing = d3.scaleSqrt()
            .domain([-3000, -2500, 0, 700])
            .range([1 / 3, 0, 1, 1 / 7])
            .clamp(true)



          return "translate(" + scatterScaleBuchX(scatterScaleBuchVerfasserX(scrollTop)) + "," + scatterScaleBuchY(scatterScaleBuchVerfasserY(scrollTop)) + ")scale(+" + radiusSizing(scrollTop) + "," + radiusSizing(scrollTop) + ")"
        })

      function multiple(d) {
        var radius = d3.scaleSqrt()
          .domain([10, 200])
          .range([8, 15])
        //.clamp(true)


        d3.select(this).append("text")
          .style("fill", "white")
          .style("text-anchor", "middle")
          .attr("y", function() {
            if (d.y > 0) {
              return -2 - 1.2 * radius(d.pieDataSum)
            } else {
              return 12 + 1.2 * radius(d.pieDataSum)
            }
          })
          .style("display", function() {
            if (d.level == "verfasser" && d.y < 3 && d.y > -3 && d.x < 3 && d.x > -3 || d.level == "buch" && d.y < 5 && d.y > -5 && d.x < 5 && d.x > -5) {
              return "none"
            }
          })
          .text(function() {
            if (d.level == "buch" && korpus.filter(function(D, I) {
                return D.KurzSignatur == d.ID
              })[0]) {
              if (korpus.filter(function(D, I) {
                  return D.KurzSignatur == d.ID
                })[0].Kurztitel.length <= 25) {
                return korpus.filter(function(D, I) {
                  return D.KurzSignatur == d.ID
                })[0].Kurztitel.substring(0, 25)
              } else if (korpus.filter(function(D, I) {
                  return D.KurzSignatur == d.ID
                })[0].Kurztitel.length > 25) {
                return korpus.filter(function(D, I) {
                  return D.KurzSignatur == d.ID
                })[0].Kurztitel.substring(0, 25) + "..."
              }
            } else {
              return d.ID
            }
          })
          .style("font-size", function() {
            if (d.level == "verfasser") {
              return "12px"
            } else {
              return "11px"
            }
          })



        d3.select(this).append("circle").style("fill", "none").attr("r", 8).style("cursor", "pointer").style("pointer-events", "all")

        d3.select(this).selectAll(".pieStroke")
          .data(pie(d.pieData))
          .enter()
          .append("circle")
          .attr("class", "pieStroke")
          .attr("r", function(D) {
            return 1.2 * radius(d.pieDataSum)
          })
          .style("fill", "none")
          .style("cursor", "pointer")
          .style("stroke", "white")
          .style("stroke-width", 2)
          .style("stroke-dasharray", "4, 2")
          .style("pointer-events", "none")
          .style("opacity", 0)



        d3.select(this).selectAll(".pieArc")
          .data(pie(d.pieData))
          .enter().append("g")
          .style("opacity", 0.9)
          .attr("class", "pieArc")
          .append("path")
          .attr("d", function(e, c) {

            if (d.level == "buch") {
              return arc.outerRadius(radius(d.pieDataSum)).innerRadius(radius(d.pieDataSum) * 0.5)(e, c)
            } else {
              return arc.outerRadius(radius(d.pieDataSum)).innerRadius(radius(d.pieDataSum) * 0)(e, c)
            }
          })
          .attr("class", function(d, i) {
            if (i == 0) {
              return "pieArc bewertung"
            } else if (i == 1) {
              return "pieArc kommentar"
            } else if (i == 2) {
              return "pieArc textkorrektur"
            } else if (i == 3) {
              return "pieArc variante"
            } else if (i == 4) {
              return "pieArc uebersetzung"
            } else if (i == 5) {
              return "pieArc anstreichung"
            } else if (i == 6) {
              return "pieArc unterstreichung"
            } else if (i == 7) {
              return "pieArc durchstreichung"
            } else if (i == 8) {
              return "pieArc sonstigeMarkierung"
            } else if (i == 9) {
              return "pieArc zusatzMaterial"
            } else if (i == 10) {
              return "pieArc anderes"
            } else if (i == 11) {
              return "pieArc provenienz"
            } else if (i == 12) {
              return "pieArc provenienzstempel"
            }
          })
          .classed("eingefaltet", true)
      }

      if (filter == "eigentumsangaben" || filter == "provenienz" || filter == "provenienzstempel") {
        d3.selectAll(".pieG").selectAll(".provenienz,.provenienzstempel").classed("eingefaltet", false)

        if (filter == "eigentumsangaben") {
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".provenienz,.provenienzstempel").classed("filtered", false)
        } else if (filter == "provenienz") {
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".provenienz").classed("filtered", false)
        } else if (filter == "provenienzstempel") {
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".provenienzstempel").classed("filtered", false)
        }
      } else if (filter == "marginalien" || filter == "bewertung" || filter == "kommentar" || filter == "textkorrektur" || filter == "variante" || filter == "uebersetzung") {
        d3.selectAll(".pieG").selectAll(".bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").classed("eingefaltet", false)
        if (filter == "marginalien") {
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".bewertung,.kommentar,.textkorrektur,.uebersetzung,.variante").classed("filtered", false)
        } else if (filter == "bewertung") {
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".bewertung").classed("filtered", false)
        } else if (filter == "kommentar") {
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".kommentar").classed("filtered", false)
        } else if (filter == "textkorrektur") {
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".textkorrektur").classed("filtered", false)
        } else if (filter == "variante") {
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".variante").classed("filtered", false)
        } else if (filter == "uebersetzung") {
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".uebersetzung").classed("filtered", false)
        }

      } else if (filter == "markierungen" || filter == "anstreichung" || filter == "unterstreichung" || filter == "durchstreichung" || filter == "sonstigeMarkierung") {
        d3.selectAll(".pieG").selectAll(".unterstreichung,.anstreichung,.durchstreichung,.sonstigeMarkierung,.anderes").classed("eingefaltet", false)
        if (filter == "markierungen") {
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".unterstreichung,.anstreichung,.durchstreichung,.sonstigeMarkierung").classed("filtered", false)
        } else if (filter == "anstreichung") {
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".anstreichung").classed("filtered", false)
        } else if (filter == "unterstreichung") {
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".unterstreichung").classed("filtered", false)
        } else if (filter == "durchstreichung") {
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".durchstreichung").classed("filtered", false)
        } else if (filter == "sonstigeMarkierung") {
          d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".sonstigeMarkierung").classed("filtered", false)
        }
      } else if (filter == "zusatzMaterial") {
        d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".zusatzMaterial").classed("filtered", false)
      } else if (filter == "anderes") {
        d3.selectAll(".pieG").selectAll("path").classed("filtered", true).filter(".anderes").classed("filtered", false)
      }



      var scatterScaleX = d3.scaleLinear()
        .domain([-20, 20])
        .range([0, 1200])
        .clamp(true)

      var scatterScaleY = d3.scaleLinear()
        .domain([10, -30])
        .range([0, 1200])
        .clamp(true)



      var scatterZoomScale = d3.scaleLinear()
        .domain([-3000, -2500, 0, 1000])
        .range([2, 1, 1, 2])



      d3.select(".complicationVisG")
        .attr("transform", function(d, i) {
          return "translate(" + scatterZoomPositionX(scrollTop) + "," + scatterZoomPositionY(scrollTop) + ")scale(" + scatterZoomScale(scrollTop) + "," + scatterZoomScale(scrollTop) + ")"
        })


      if (scrollTop > -1500) {
        d3.selectAll(".pieG").filter(function(d, i) {
          return d.level == "verfasser"
        }).style("pointer-events", "none")
        d3.selectAll(".pieG").filter(function(d, i) {
          return d.level == "buch"
        }).style("pointer-events", "auto")
        //.style("display", "none")
      } else {
        d3.selectAll(".pieG").filter(function(d, i) {
          return d.level == "verfasser"
        }).style("pointer-events", "auto")
        d3.selectAll(".pieG").filter(function(d, i) {
          return d.level == "buch"
        }).style("pointer-events", "none") //.style("display", "inline")
      }


      d3.selectAll(".pieG").filter(function(d, i) {
          return d.level == "verfasser"
        }).style("opacity", function(d, i) {
          return 1.5 - compOpacityScale(scrollTop)
        })
        .attr("transform", function(d, i) {
          var posXalsBuch = d.x
          var posXalsVerfasser = complicationData.filter(function(Y, Z) {
            return Y.ID == d.Verfasser
          })[0].x
          var posYalsBuch = d.y
          var posYalsVerfasser = complicationData.filter(function(Y, Z) {
            return Y.ID == d.Verfasser
          })[0].y

          var scatterScaleBuchX = d3.scaleLinear()
            .domain([-20, 20])
            .range([0, 1200])
            .clamp(true)

          var scatterScaleBuchY = d3.scaleLinear()
            .domain([10, -30])
            .range([0, 1200])
            .clamp(true)

          var scatterScaleBuchVerfasserX = d3.scaleLinear()
            .domain([-2500, 0])
            .range([posXalsVerfasser, posXalsBuch])
            .clamp(true)

          var scatterScaleBuchVerfasserY = d3.scaleLinear()
            .domain([-2500, 0])
            .range([posYalsVerfasser, posYalsBuch])
            .clamp(true)

          var radiusSizing = d3.scaleSqrt()
            .domain([-3000, -2500, 0, 700])
            .range([1 / 3, 1, 0, 0])
            .clamp(true)


          return "translate(" + scatterScaleBuchX(scatterScaleBuchVerfasserX(scrollTop)) + "," + scatterScaleBuchY(scatterScaleBuchVerfasserY(scrollTop)) + ")scale(+" + radiusSizing(scrollTop) + "," + radiusSizing(scrollTop) + ")"
        })



      d3.selectAll(".pieG").filter(function(d, i) {
          return d.level == "buch"
        })
        .style("opacity", function(d, i) {
          return compOpacityScale(scrollTop)
        })
        .attr("transform", function(d, i) {
          var posXalsBuch = d.x
          var posXalsVerfasser = complicationData.filter(function(Y, Z) {
            return Y.ID == d.Verfasser
          })[0].x
          var posYalsBuch = d.y
          var posYalsVerfasser = complicationData.filter(function(Y, Z) {
            return Y.ID == d.Verfasser
          })[0].y

          var scatterScaleBuchX = d3.scaleLinear()
            .domain([-20, 20])
            .range([0, 1200])
            .clamp(true)

          var scatterScaleBuchY = d3.scaleLinear()
            .domain([10, -30])
            .range([0, 1200])
            .clamp(true)

          var scatterScaleBuchVerfasserX = d3.scaleLinear()
            .domain([-2500, 0])
            .range([posXalsVerfasser, posXalsBuch])
            .clamp(true)

          var scatterScaleBuchVerfasserY = d3.scaleLinear()
            .domain([-2500, 0])
            .range([posYalsVerfasser, posYalsBuch])
            .clamp(true)

          var radiusSizing = d3.scaleSqrt()
            .domain([-3000, -2500, 0, 700])
            .range([1 / 3, 0, 1, 1 / 7])
            .clamp(true)



          return "translate(" + scatterScaleBuchX(scatterScaleBuchVerfasserX(scrollTop)) + "," + scatterScaleBuchY(scatterScaleBuchVerfasserY(scrollTop)) + ")scale(+" + radiusSizing(scrollTop) + "," + radiusSizing(scrollTop) + ")"
        })





      var pieMovementLines = complicationVis.selectAll(".pieMovementLines")
        .data(complicationData.filter(function(d) {
          return d.level != "verfasser"
        }))
        .join("g")
        .attr("class", function(d) {
          return "pieMovementLines"
        })
        .append("line")
        .attr("x1", function(d) {
          return scatterScaleX(d.verfasserX)
        })
        .attr("x2", function(d) {
          var scatterScaleBuchVerfasserX = d3.scaleLinear()
            .domain([-2500, 0])
            .range([d.verfasserX, d.x])
            .clamp(true)

          return scatterScaleX(scatterScaleBuchVerfasserX(scrollTop))
        })
        .attr("y1", function(d) {
          return scatterScaleY(d.verfasserY)
        })
        .attr("y2", function(d) {
          var scatterScaleBuchVerfasserY = d3.scaleLinear()
            .domain([-2500, 0])
            .range([d.verfasserY, d.y])
            .clamp(true)

          return scatterScaleY(scatterScaleBuchVerfasserY(scrollTop))
        })
        .style("stroke", "white")
        .style("stroke-width", function() {
          return pieLineStrokes(scrollTop) + "px"
        })


      d3.selectAll(".pieG")
        //.style("pointer-events","all")
        .on("mouseover", function(d) {
          pieHover(d.ID, d)
        })
        .on("mouseout", function(d) {
          pieMouseOut(d.ID, d)
        })
        .on("click", function(d) {
          d3.event.stopPropagation()
          pieClick(d.ID, d)
        })

      d3.selection.prototype.moveToFront = function() {
        return this.each(function() {
          this.parentNode.appendChild(this);
        });
      };



      function pieMouseOut(id, d) {
        d3.selectAll(".pieG").selectAll("text").style("display", function(D) {
          if (D.level == "verfasser" && D.y < 3 && D.y > -3 && D.x < 3 && D.x > -3 || D.level == "buch" && D.y < 5 && D.y > -5 && D.x < 5 && D.x > -5) {
            return "none"
          }
        })
        d3.selectAll(".pieG").filter(function(D) {
          return D.ID == clickedBook
        }).selectAll("text").style("display", "block")

        if (pieDetailviewOn == false) {

          d3.selectAll(".pieMovementLines").selectAll("line").transition().style("stroke-width", function() {
            return pieLineStrokes(scrollTop) + "px"
          })



          d3.selectAll(".pieG").filter(function(D) {
            return D.Verfasser !== d.Verfasser && D.level === d.level
          }).transition().style("opacity", "1")

        }
      }





      function pieHover(id, d) {

        d3.selectAll(".pieG").filter(function(D) {
          return D.ID == id
        }).selectAll("text").style("display", "block")
        d3.selectAll(".pieG").filter(function(D) {
          return D.ID == clickedBook
        }).selectAll("text").style("display", "block")


        if (pieDetailviewOn == false) {



          d3.selectAll(".pieMovementLines").filter(function(D) {
            return D.Verfasser !== d.Verfasser
          }).selectAll("line").transition().style("stroke-width", "0px")


          d3.selectAll(".pieMovementLines").filter(function(D) {
            return D.Verfasser === d.Verfasser
          }).selectAll("line").transition().style("stroke-width", function() {
            return 1 / lineZoomScale(scrollTop) + "px"
          })




          d3.selectAll(".pieG").filter(function(D) {
            return D.Verfasser !== d.Verfasser
          }).transition().style("opacity", ".1")

          d3.selectAll(".pieG").filter(function(D) {
              return D.Verfasser === d.Verfasser && D.level === d.level
            })
            .moveToFront();


        }
      }

      var pieDetailviewOn = false

      function pieClick(id, d) {
        d3.select("html,body").style("overflow-y", "hidden")

        d3.selectAll(".pieG").selectAll("text").style("display", function(D) {
          if (D.level == "verfasser" && D.y < 3 && D.y > -3 && D.x < 3 && D.x > -3 || D.level == "buch" && D.y < 5 && D.y > -5 && D.x < 5 && D.x > -5) {
            return "none"
          }
        })
        d3.selectAll(".pieG").filter(function(D) {
          return D.ID == id
        }).selectAll("text").style("display", "block")


        pieDetailviewOn = true


        if (d.level == "buch") {
          clickedBook = id
          hashFunction()
        }

        d3.select(".piedetailviewclose").style("display", "block")

        d3.selectAll(".pieMovementLines").filter(function(D) {
          return D.Verfasser !== d.Verfasser
        }).selectAll("line").transition().style("stroke-width", "0px")

        d3.selectAll(".pieMovementLines").filter(function(D) {
          return D.Verfasser === d.Verfasser
        }).selectAll("line").transition().style("stroke-width", function() {
          return 1 / lineZoomScale(scrollTop) + "px"
        })


        d3.selectAll(".pieG").filter(function(D) {
          return D.Verfasser !== d.Verfasser && D.level === d.level
        }).transition().style("opacity", ".1")
        d3.selectAll(".pieG").selectAll(".pieStroke").transition().style("opacity", "0")
        d3.selectAll(".pieG").filter(function(D) {
          return D.ID == d.ID
        }).selectAll(".pieStroke").transition().style("opacity", "1")


        d3.selectAll(".pieG").filter(function(D) {
            return D.Verfasser === d.Verfasser && D.level === d.level
          }).style("opacity", "1")
          .moveToFront();


        piedetailview
          .style("display", "inline")


        d3.selectAll(".coverimagesSolo").remove()
        d3.selectAll(".coverimagesMulti").remove()

        piedetailview.selectAll(".tooltipImage").selectAll(".coverimages")
          .data(function() {
            if (d.level != "verfasser") {
              return korpus.filter(function(D, I) {
                return D.Cover && D.KurzSignatur == id
              })
            } else {
              return korpus.filter(function(D, I) {
                return D.Cover && D.Verfasser == id
              })
            }
          })
          .enter()
          .append("img")
          .attr("src", function(D, I) {
            return "./img/m/" + D.Cover
          })
          .attr("width", function() {
            if (korpus.filter(function(D, I) {
                return D.Cover && D.Verfasser == id
              }).length > 9) {
              return "50px"
            } else if (korpus.filter(function(D, I) {
                return D.Cover && D.Verfasser == id
              }).length > 4) {
              return "80px"
            } else if (korpus.filter(function(D, I) {
                return D.Cover && D.Verfasser == id
              }).length > 1) {
              return "120px"
            } else {
              return "240px"
            }
          })
          .attr("class", function() {
            if (d.level != "verfasser") {
              return "coverimagesSolo"
            } else {
              return "coverimagesMulti"
            }
          })

        piedetailview.selectAll(".tooltipTitle").text(function(D) {
          if (d.level != "verfasser") {
            return korpus.filter(function(E, G) {
              return E.KurzSignatur == id
            })[0].Kurztitel
          } else {
            return id
          }
        })


        if (d.level == "buch") {

          piedetailview.select(".tr-verfasser").style("display", "table-row")

          piedetailview.selectAll(".tt-verfasser")
            .text(function(D) {
              if (d.level != "verfasser") {
                return korpus.filter(function(E, G) {
                  return E.KurzSignatur == id
                })[0].Verfasser
              } else {
                return 0
              }
            })

          piedetailview.select(".tr-herausgeber")
          .style("display", "none")
          .filter(function(D) {
            return korpus.filter(function(E, G) {
              return E.KurzSignatur == id
            })[0].Herausgeber != ""
          }).style("display", "table-row")

          piedetailview.selectAll(".tt-herausgeber")
            .text(function(D) {
              if (d.level != "verfasser") {
                return korpus.filter(function(E, G) {
                  return E.KurzSignatur == id
                })[0].Herausgeber
              } else {
                return 0
              }
            })

          piedetailview.select(".tr-verlag")
          .style("display", "none")
          .filter(function(D) {
            return korpus.filter(function(E, G) {
              return E.KurzSignatur == id
            })[0].Verlag != ""
          }).style("display", "table-row")

          piedetailview.selectAll(".tt-verlag")
            .text(function(D) {
              if (d.level != "verfasser") {
                return korpus.filter(function(E, G) {
                  return E.KurzSignatur == id
                })[0].Verlag
              } else {
                return 0
              }
            })

          piedetailview.select(".tr-genre")
          .style("display", "none")
          .filter(function(D) {
            return korpus.filter(function(E, G) {
              return E.KurzSignatur == id
            })[0].Formalschlagwort_Genre != ""
          }).style("display", "table-row")

          piedetailview.selectAll(".tt-genre")
            .text(function(D) {
              if (d.level != "verfasser") {
                return korpus.filter(function(E, G) {
                  return E.KurzSignatur == id
                })[0].Formalschlagwort_Genre
              } else {
                return 0
              }
            })

          piedetailview.select(".tr-datierung")
          .style("display", "none")
          .filter(function(D) {
            return korpus.filter(function(E, G) {
              return E.KurzSignatur == id
            })[0].Jahr != ""
          }).style("display", "table-row")

          piedetailview.selectAll(".tt-datierung")
            .text(function(D) {
              if (d.level != "verfasser") {
                return korpus.filter(function(E, G) {
                  return E.KurzSignatur == id
                })[0].Jahr
              } else {
                return 0
              }
            })

          piedetailview.select(".tr-ort")
          .style("display", "none")
          .filter(function(D) {
            return korpus.filter(function(E, G) {
              return E.KurzSignatur == id
            })[0].Ort != ""
          }).style("display", "table-row")

          piedetailview.selectAll(".tt-ort")
            .text(function(D) {
              if (d.level != "verfasser") {
                return korpus.filter(function(E, G) {
                  return E.KurzSignatur == id
                })[0].Ort
              } else {
                return 0
              }
            })


          piedetailview.selectAll(".tt-transkriptionen").selectAll(".complicationTranscript").remove()

          piedetailview.selectAll(".tt-transkriptionen").selectAll(".complicationTranscript")
            .data(datenByTitle.filter(function(E, G) {
              return E.key == id
            })[0].values.filter(function(E, G) {
              return E.SchriftspurTranskription != "" && E.SchriftspurTyp != "P"
            }))
            .enter().append("span")
            .attr("class", "complicationTranscript tt-data")
            .text(function(E, I) {
              return " · " + E.SchriftspurTranskription
            })
            .style("cursor", "pointer")
            .on("click", function(E, I) {

              var thisPageID = E.ID
              var thisBookID = E.BookID
              var thisPart = E.Part

              detailviewOpenComp(thisBookID, thisPart)

            })

          d3.selectAll(".tt-bio").style("display", "none")
          d3.selectAll(".tt-transkriptionentitel").style("display", function(D) {
            if (datenByTitle.filter(function(E, G) {
                return E.key == id
              })[0].values.filter(function(E, G) {
                return E.SchriftspurTranskription != "" && E.SchriftspurTyp != "P"
              }).length > 0) {
              return "block"
            } else {
              return "none"
            }
          })
          d3.selectAll(".tr-transkriptionen").style("display", function(D) {
            if (datenByTitle.filter(function(E, G) {
                return E.key == id
              })[0].values.filter(function(E, G) {
                return E.SchriftspurTranskription != "" && E.SchriftspurTyp != "P"
              })) {
              return "block"
            } else {
              return "none"
            }
          })

        } else if (d.level == "verfasser") {

          piedetailview.selectAll(".tt-transkriptionen").selectAll(".complicationTranscript").remove()

          piedetailview.selectAll(".tt-transkriptionen")
            .append("span")
            .attr("class", "complicationTranscript tt-data")
            .text(function(D) {
              if (complicationData.filter(function(E, G) {
                  return E.ID === id
                })[0].Bio) {
                return " " + complicationData.filter(function(E, G) {
                  return E.ID === id
                })[0].Bio + " [Quelle: Wikipedia]"
              }
            })





          piedetailview.select(".tr-verfasser").style("display", "none")
          piedetailview.select(".tr-herausgeber").style("display", "none")
          piedetailview.select(".tr-verlag").style("display", "none")
          piedetailview.select(".tr-genre").style("display", "none")
          piedetailview.select(".tr-datierung").style("display", "none")
          piedetailview.select(".tr-ort").style("display", "none")
          piedetailview.select(".tr-schreibhand").style("display", "none")
          d3.selectAll(".tt-bio").style("display", function(D) {
            if (complicationData.filter(function(E, G) {
                return E.ID === id
              })[0].Bio) {
              return "block"
            } else {
              return "none"
            }
          })
          d3.selectAll(".tt-transkriptionentitel").style("display", "none")
          d3.selectAll(".tr-transkriptionen").style("display", "block")
        }

        piedetailview.select(".eigentumsangaben").style("display", function(D) {
          if (+complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].ProvenienzTotal + +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].StempelTotal == 0) {
            return "none"
          } else {
            return null
          }
        })
        piedetailview.select(".provenienz").style("display", function(D) {
          if (+complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].ProvenienzTotal == 0) {
            return "none"
          } else {
            return null
          }
        })
        piedetailview.select(".provenienzstempel").style("display", function(D) {
          if (+complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].StempelTotal == 0) {
            return "none"
          } else {
            return null
          }
        })
        piedetailview.select(".marginalien").style("display", function(D) {
          if (+complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].BewertungTotal + +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].KommentarTotal + +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].TextkorrekturTotal + +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].VarianteTotal + +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].UebersetzungTotal == 0) {
            return "none"
          } else {
            return null
          }
        })
        piedetailview.select(".markierungen").style("display", function(D) {
          if (+complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].AnstreichungTotal + +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].UnterstreichungTotal + +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].DurchstreichungTotal + +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].SonstigeMarkierungTotal == 0) {
            return "none"
          } else {
            return null
          }
        })
        piedetailview.select(".bewertung").style("display", function(D) {
          if (+complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].BewertungTotal == 0) {
            return "none"
          } else {
            return null
          }
        })
        piedetailview.select(".kommentar").style("display", function(D) {
          if (+complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].KommentarTotal == 0) {
            return "none"
          } else {
            return null
          }
        })
        piedetailview.select(".textkorrektur").style("display", function(D) {
          if (+complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].TextkorrekturTotal == 0) {
            return "none"
          } else {
            return null
          }
        })
        piedetailview.select(".variante").style("display", function(D) {
          if (+complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].VarianteTotal == 0) {
            return "none"
          } else {
            return null
          }
        })
        piedetailview.select(".uebersetzung").style("display", function(D) {
          if (+complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].UebersetzungTotal == 0) {
            return "none"
          } else {
            return null
          }
        })
        piedetailview.select(".anstreichung").style("display", function(D) {
          if (+complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].AnstreichungTotal == 0) {
            return "none"
          } else {
            return null
          }
        })
        piedetailview.select(".unterstreichung").style("display", function(D) {
          if (+complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].UnterstreichungTotal == 0) {
            return "none"
          } else {
            return null
          }
        })
        piedetailview.select(".durchstreichung").style("display", function(D) {
          if (+complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].DurchstreichungTotal == 0) {
            return "none"
          } else {
            return null
          }
        })
        piedetailview.select(".sonstigeMarkierung").style("display", function(D) {
          if (+complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].SonstigeMarkierungTotal == 0) {
            return "none"
          } else {
            return null
          }
        })
        piedetailview.select(".zusatzMaterial").style("display", function(D) {
          if (+complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].ZusatzMaterialTotal == 0) {
            return "none"
          } else {
            return null
          }
        })
        piedetailview.select(".anderes").style("display", function(D) {
          if (+complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].AnderesTotal == 0) {
            return "none"
          } else {
            return null
          }
        })



        piedetailview.selectAll(".tt-seitenzahl")
          .text(function(D) {
            return +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].Seitenzahl
          })


        piedetailview.selectAll(".tt-provenienz")
          .text(function(D) {
            return +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].ProvenienzTotal + +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].StempelTotal
          })

        piedetailview.selectAll(".tt-provenienzangaben")
          .text(function(D) {
            return +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].ProvenienzTotal
          })


        piedetailview.selectAll(".tt-provenienzstempel")
          .text(function(D) {
            return +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].StempelTotal
          })


        piedetailview.selectAll(".tt-marginalien")
          .text(function(D) {
            return +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].BewertungTotal + +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].KommentarTotal + +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].TextkorrekturTotal + +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].VarianteTotal + +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].UebersetzungTotal
          })

        piedetailview.selectAll(".tt-bewertung")
          .text(function(D) {
            return +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].BewertungTotal
          })


        piedetailview.selectAll(".tt-kommentar")
          .text(function(D) {
            return +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].KommentarTotal
          })



        piedetailview.selectAll(".tt-textkorrektur")
          .text(function(D) {
            return +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].TextkorrekturTotal
          })

        piedetailview.selectAll(".tt-variante")
          .text(function(D) {
            return +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].VarianteTotal
          })

        piedetailview.selectAll(".tt-uebersetzung")
          .text(function(D) {
            return +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].UebersetzungTotal
          })


        piedetailview.selectAll(".tt-markierungen")
          .text(function(D) {
            return +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].AnstreichungTotal + +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].UnterstreichungTotal + +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].DurchstreichungTotal + +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].SonstigeMarkierungTotal
          })

        piedetailview.selectAll(".tt-anstreichung")
          .text(function(D) {
            return +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].AnstreichungTotal
          })

        piedetailview.selectAll(".tt-unterstreichung")
          .text(function(D) {
            return +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].UnterstreichungTotal
          })

        piedetailview.selectAll(".tt-durchstreichung")
          .text(function(D) {
            return +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].DurchstreichungTotal
          })

        piedetailview.selectAll(".tt-sonstigeMarkierung")
          .text(function(D) {
            return +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].SonstigeMarkierungTotal
          })

        piedetailview.selectAll(".tt-anderes")
          .text(function(D) {
            return +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].AnderesTotal
          })

        piedetailview.selectAll(".tt-zusatzMaterial")
          .text(function(D) {
            return +complicationData.filter(function(E, G) {
              return E.ID === id
            })[0].ZusatzMaterialTotal
          })




      }

      function pieDetailClose() {
        d3.select("html,body").style("overflow-y", "scroll")
        pieDetailviewOn = false

        detailview = false
        clickedBook = 0
        dataContainer.selectAll(".nodesbg").attr("fill", "white").style("opacity", 1)
        d3.selectAll(".bookBG").selectAll("rect").style("opacity", 0)

        d3.selectAll(".BuchTitel").remove()
        d3.selectAll(".detailInfoParent").remove()
        d3.select(".detailDiv").remove()


        hashFunction()

        d3.select(".piedetailview").style("display", "none")

        d3.selectAll(".pieMovementLines").selectAll("line").transition().style("stroke-width", function() {
          return pieLineStrokes(scrollTop) + "px"
        })
        d3.selectAll(".pieG").selectAll(".pieStroke").transition().style("opacity", "0")


        d3.selectAll(".pieG").transition().style("opacity", "1")

      }


      d3.select(".piedetailviewclose").on("click", pieDetailClose)


      ///////Ende Pies






      function hashFunction() {

        window.location.hash = "#modus=" + modus + "?level=" + scrollTop + "?filter=" + filter + "?auswahl=" + clickedBook
        d3.select("#shareInput").attr("value", window.location.href)

      }


      if (clickedBook != 0) {

        var pieClickData = complicationData.filter(function(d) {
          return d.ID == clickedBook
        })[0]
        setTimeout(function() {
          pieClick(clickedBook, pieClickData)
        }, 700);

      }



      function compScrollFunction() {
        if (complicationStart != true) {
          pieDetailClose()
        }




        d3.selectAll(".pieMovementLines").selectAll("line")
          .style("stroke-width", function() {
            return pieLineStrokes(scrollTop) + "px"
          })
          .attr("x1", function(d) {
            return scatterScaleX(d.verfasserX)
          })
          .attr("x2", function(d) {
            var scatterScaleBuchVerfasserX = d3.scaleLinear()
              .domain([-2500, 0])
              .range([d.verfasserX, d.x])
              .clamp(true)

            return scatterScaleX(scatterScaleBuchVerfasserX(scrollTop))
          })
          .attr("y1", function(d) {
            return scatterScaleY(d.verfasserY)
          })
          .attr("y2", function(d) {
            var scatterScaleBuchVerfasserY = d3.scaleLinear()
              .domain([-2500, 0])
              .range([d.verfasserY, d.y])
              .clamp(true)

            return scatterScaleY(scatterScaleBuchVerfasserY(scrollTop))
          })

        if (scrollTop > -1500) {
          d3.selectAll(".pieG").filter(function(d, i) {
            return d.level == "verfasser"
          }).style("pointer-events", "none")
          d3.selectAll(".pieG").filter(function(d, i) {
            return d.level == "buch"
          }).style("pointer-events", "auto") //.style("display", "none")
        } else {
          d3.selectAll(".pieG").filter(function(d, i) {
            return d.level == "verfasser"
          }).style("pointer-events", "auto")
          d3.selectAll(".pieG").filter(function(d, i) {
            return d.level == "buch"
          }).style("pointer-events", "none") //.style("display", "inline")
        }


        d3.selectAll(".pieG").filter(function(d, i) {
            return d.level == "verfasser"
          }).style("opacity", function(d, i) {
            return 1.5 - compOpacityScale(scrollTop)
          })
          .attr("transform", function(d, i) {
            var posXalsBuch = d.x
            var posXalsVerfasser = complicationData.filter(function(Y, Z) {
              return Y.ID == d.Verfasser
            })[0].x
            var posYalsBuch = d.y
            var posYalsVerfasser = complicationData.filter(function(Y, Z) {
              return Y.ID == d.Verfasser
            })[0].y

            var scatterScaleBuchX = d3.scaleLinear()
              .domain([-20, 20])
              .range([0, 1200])
              .clamp(true)

            var scatterScaleBuchY = d3.scaleLinear()
              .domain([10, -30])
              .range([0, 1200])
              .clamp(true)

            var scatterScaleBuchVerfasserX = d3.scaleLinear()
              .domain([-2500, 0])
              .range([posXalsVerfasser, posXalsBuch])
              .clamp(true)

            var scatterScaleBuchVerfasserY = d3.scaleLinear()
              .domain([-2500, 0])
              .range([posYalsVerfasser, posYalsBuch])
              .clamp(true)

            var radiusSizing = d3.scaleSqrt()
              .domain([-3000, -2500, 0, 700])
              .range([1 / 3, 1, 0, 0])
              .clamp(true)


            return "translate(" + scatterScaleBuchX(scatterScaleBuchVerfasserX(scrollTop)) + "," + scatterScaleBuchY(scatterScaleBuchVerfasserY(scrollTop)) + ")scale(+" + radiusSizing(scrollTop) + "," + radiusSizing(scrollTop) + ")"
          })



        d3.selectAll(".pieG").filter(function(d, i) {
            return d.level == "buch"
          })
          .style("opacity", function(d, i) {
            return compOpacityScale(scrollTop)
          })
          .attr("transform", function(d, i) {
            var posXalsBuch = d.x
            var posXalsVerfasser = complicationData.filter(function(Y, Z) {
              return Y.ID == d.Verfasser
            })[0].x
            var posYalsBuch = d.y
            var posYalsVerfasser = complicationData.filter(function(Y, Z) {
              return Y.ID == d.Verfasser
            })[0].y

            var scatterScaleBuchX = d3.scaleLinear()
              .domain([-20, 20])
              .range([0, 1200])
              .clamp(true)

            var scatterScaleBuchY = d3.scaleLinear()
              .domain([10, -30])
              .range([0, 1200])
              .clamp(true)

            var scatterScaleBuchVerfasserX = d3.scaleLinear()
              .domain([-2500, 0])
              .range([posXalsVerfasser, posXalsBuch])
              .clamp(true)

            var scatterScaleBuchVerfasserY = d3.scaleLinear()
              .domain([-2500, 0])
              .range([posYalsVerfasser, posYalsBuch])
              .clamp(true)

            var radiusSizing = d3.scaleSqrt()
              .domain([-3000, -2500, 0, 700])
              .range([0, 0, 1, 1 / 7])
              .clamp(true)



            return "translate(" + scatterScaleBuchX(scatterScaleBuchVerfasserX(scrollTop)) + "," + scatterScaleBuchY(scatterScaleBuchVerfasserY(scrollTop)) + ")scale(+" + radiusSizing(scrollTop) + "," + radiusSizing(scrollTop) + ")"
          })

        var scatterZoomScale = d3.scaleLinear()
          .domain([-3000, -2500, 0, 1000])
          .range([5, 1, 1, 7])


        d3.select(".complicationVisG")

          .attr("transform", function(d, i) {
            return "translate(" + scatterZoomPositionX(scrollTop) + "," + scatterZoomPositionY(scrollTop) + ")scale(" + scatterZoomScale(scrollTop) + "," + scatterZoomScale(scrollTop) + ")"
          })




      }


      function detailviewOpenComp(thisBookID, thisPart) {


        var thisPageID = datenByTitle.filter(function(d) {
          return d.key == clickedBook
        })[0].values.filter(function(d) {
          return d.Part == thisPart
        })[0].ID
        var nextPage = +thisPart + 1
        var previousPage = +thisPart - 1
        var lastPage = datenByTitle.filter(function(d) {
          return d.key == clickedBook
        })[0].values.filter(function(d) {
          return d.Part == thisPart
        })[0].maxPart


        d3.select("#detailview").selectAll("img").remove()
        d3.select("#detailview").selectAll("table").remove()

        d3.selectAll(".detailviewPrevious")
          .style("display", function() {
            if (thisPart > 1) {
              return "block"
            } else {
              return "none"
            }
          })
          .style("border-color", "transparent rgba(255, 255, 255, 1)transparent transparent")
          .on("click", function() {
            return detailviewOpenComp(thisBookID, previousPage)
          })


        d3.selectAll(".detailviewNext")
          .style("display", function() {
            if (thisPart < lastPage) {
              return "block"
            } else if (thisPart == lastPage) {
              return "none"
            } else {
              return "block"
            }
          })
          .style("border-color", "transparent transparent transparent rgba(255, 255, 255, 1)")
          .on("click", function() {
            return detailviewOpenComp(thisBookID, nextPage)
          })


        d3.select("#overlay").style("display", "block").transition().duration(600).style("opacity", .5)
        d3.select("#detailview").style("display", "block").transition().duration(600).style("opacity", 1)

        d3.select("#detailview").append("div").attr("class", "tableImage")
          .append("img").attr("src", "./img/m/" + thisPageID + ".jpg").attr("class", "tableimg")

        var detailviewTable = d3.select("#detailview").append("table").attr("id", "detailviewTable")

        var detailviewTableTr1 = detailviewTable.append("tr")
        var detailviewTableTr2 = detailviewTable.append("tr")
        var detailviewTableTr3 = detailviewTable.append("tr").style("display", function(d) {
          if (korpus.filter(function(D, I) {
              return D.KurzSignatur == thisBookID
            })[0].Herausgeber == "") {
            return "none"
          } else {
            return "table-row"
          }
        })
        var detailviewTableTr4 = detailviewTable.append("tr").style("display", function(d) {
          if (korpus.filter(function(D, I) {
              return D.KurzSignatur == thisBookID
            })[0].Verlag == "") {
            return "none"
          } else {
            return "table-row"
          }
        })
        var detailviewTableTr5 = detailviewTable.append("tr").style("display", function(d) {
          if (korpus.filter(function(D, I) {
              return D.KurzSignatur == thisBookID
            })[0].Formalschlagwort_Genre == "") {
            return "none"
          } else {
            return "table-row"
          }
        })
        var detailviewTableTr6 = detailviewTable.append("tr").style("display", function(d) {
          if (korpus.filter(function(D, I) {
              return D.KurzSignatur == thisBookID
            })[0].Ort == "") {
            return "none"
          } else {
            return "table-row"
          }
        })
        var detailviewTableTr7 = detailviewTable.append("tr").style("display", function(d) {
          if (korpus.filter(function(D, I) {
              return D.KurzSignatur == thisBookID
            })[0].Jahr == "") {
            return "none"
          } else {
            return "table-row"
          }
        })
        var detailviewTableTr8 = detailviewTable.append("tr")

        var detailviewTableTr9 = detailviewTable.append("tr")
          .style("display", function(d) {
            if (datenByTitle.filter(function(d) {
                return d.key == clickedBook
              })[0].values.filter(function(d) {
                return d.SchriftspurTranskription != "" && d.Part == thisPart
              }).length < 1) {
              return "none"
            } else {
              return "table-row"
            }
          })





        detailviewTableTr1.append("td").text("Buchtitel: ").attr("class", "td-title")
        detailviewTableTr1.append("td").attr("class", "td-data").text(function(d) {
          return korpus.filter(function(D, I) {
            return D.KurzSignatur == thisBookID
          })[0].Titel
        })

        detailviewTableTr2.append("td").text("Verfasser: ").attr("class", "td-title")
        detailviewTableTr2.append("td").attr("class", "td-data").text(function(d) {
          return korpus.filter(function(D, I) {
            return D.KurzSignatur == thisBookID
          })[0].Verfasser
        })

        detailviewTableTr3.append("td").text("Herausgeber: ").attr("class", "td-title")
        detailviewTableTr3.append("td").attr("class", "td-data").text(function(d) {
          return korpus.filter(function(D, I) {
            return D.KurzSignatur == thisBookID
          })[0].Herausgeber
        })
        detailviewTableTr4.append("td").text("Verlag: ").attr("class", "td-title")
        detailviewTableTr4.append("td").attr("class", "td-data").text(function(d) {
          return korpus.filter(function(D, I) {
            return D.KurzSignatur == thisBookID
          })[0].Verlag
        })

        detailviewTableTr5.append("td").text("Genre: ").attr("class", "td-title")
        detailviewTableTr5.append("td").attr("class", "td-data").text(function(d) {
          return korpus.filter(function(D, I) {
            return D.KurzSignatur == thisBookID
          })[0].Formalschlagwort_Genre
        })

        detailviewTableTr6.append("td").text("Ort: ").attr("class", "td-title")
        detailviewTableTr6.append("td").attr("class", "td-data").text(function(d) {
          return korpus.filter(function(D, I) {
            return D.KurzSignatur == thisBookID
          })[0].Ort
        })

        detailviewTableTr7.append("td").text("Datierung: ").attr("class", "td-title")
        detailviewTableTr7.append("td").attr("class", "td-data").text(function(d) {
          return korpus.filter(function(D, I) {
            return D.KurzSignatur == thisBookID
          })[0].Jahr
        })



        detailviewTableTr8.append("td").text("Seiten-ID: ").attr("class", "td-title")
        detailviewTableTr8.append("td").attr("class", "td-data").text(thisPageID)

        detailviewTableTr9.append("td").text("Transkriptionen: ").attr("class", "td-title")
        detailviewTableTr9.append("td").attr("class", "td-data").selectAll("p")
          .data(datenByTitle.filter(function(d) {
            return d.key == clickedBook
          })[0].values.filter(function(d) {
            return d.SchriftspurTranskription != "" && d.Part == thisPart
          }))
          .enter()
          .append("p").classed("detailviewTableTranscript", true).text(function(d) {
            return d.SchriftspurTranskription
          })
          .append("span").classed("detailviewTableTranscriptSpan", true).text(function(d) {
            if (d.SchriftspurSchreibhand == "") {
              return " (" + d.Schreibmedium + ")"
            } else {
              return " (" + d.SchriftspurSchreibhand + ", " + d.Schreibmedium + ")"
            }
          })
      }


    }


  });
