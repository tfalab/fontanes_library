var legend = d3.select("#legend")

legend.append("text")
  .text("Lesespur-Typ")
  .attr("class", "legendTitle")
  .style("font-weight", "bold")
  .style("letter-spacing", "1px")
  .attr("y", legendSchriftspurY)
  .attr("x", +2)


  var marginalien = legend.append("g")
    .attr("class", "marginalien")
    .classed("legendMarginalien", true)
    .style("cursor", "pointer")
    .attr("transform", `translate(${d3.select(".legendTitle").node().getBBox().width+15},0)`)

  marginalien.append("rect")
    .attr("fill", "white")
    .attr("y", legendSchriftspurY - fontsize - 2 + "px")
    .attr("x", "-5px")
    .attr("height", +fontsize + 6 + "px")
    .attr("fill", "#f73f26")
    .style("opacity", "0")

  marginalien.append("text")
    .attr("y", legendSchriftspurY)
    .classed("marginalien-title", true)




var markierungen = legend.append("g")
  .attr("class", "markierungen")
  .classed("legendMarkierungen", true)
  .style("cursor", "pointer")




markierungen.append("rect")
  .attr("fill", "white")
  .attr("y", legendSchriftspurY - fontsize - 2 + "px")
  .attr("x", "-5px")
  .attr("height", +fontsize + 6 + "px")
  .attr("fill", "#58b0f7")
  .style("opacity", "0")



markierungen.append("text")
  .attr("y", legendSchriftspurY)
  .classed("markierungen-title", true)





      var eigentumsangaben = legend.append("g")
        .attr("class", "eigentumsangaben")
        .classed("legendEigentumsangaben", true)
        .style("cursor", "pointer")
        // .attr("transform", `translate(${d3.select(".legendTitle").node().getBBox().width+15 + d3.select(".legendMarginalien").node().getBBox().width+15
        // + d3.select(".legendMarkierungen").node().getBBox().width+15},0)`)



      eigentumsangaben.append("rect")
        .attr("y", legendSchriftspurY - fontsize - 2 + "px")
        .attr("x", "-5px")
    //    .attr("width", function(){return d3.select(".legendEigentumsangaben").node().getBBox().width + 5 })
        .attr("height", +fontsize + 6 + "px")
        .attr("fill", "#5B5B5B")
        .style("opacity", "0")


      eigentumsangaben.append("text")
        .attr("y", legendSchriftspurY)
        .classed("eigentumsangaben-title", true)


      var zusatzMaterial = legend.append("g")
        .attr("class", "zusatzMaterial")
        .classed("legendZusatzMaterial", true)
        .style("cursor", "pointer")
        // .attr("transform", `translate(${d3.select(".legendTitle").node().getBBox().width+15 + d3.select(".legendMarginalien").node().getBBox().width+15
        // + d3.select(".legendMarkierungen").node().getBBox().width+15 + d3.select(".legendEigentumsangaben").node().getBBox().width+15},0)`)




      zusatzMaterial.append("rect")
        .attr("fill", "white")
        .attr("y", legendSchriftspurY - fontsize - 2 + "px")
        .attr("x", "-5px")
        .attr("width", function(){return d3.select(".legendZusatzMaterial").node().getBBox().width + 5 })
        .attr("height", +fontsize + 6 + "px")
        .attr("fill", "rgb(210, 164, 0)")
        .style("opacity", "0")





      var anderes = legend.append("g")
        .attr("class", "anderes")
        .classed("legendAnderes", true)
        .style("cursor", "pointer")
        .attr("transform", `translate(${d3.select(".legendTitle").node().getBBox().width+15 + d3.select(".legendMarginalien").node().getBBox().width+15
        + d3.select(".legendMarkierungen").node().getBBox().width+15 + d3.select(".legendEigentumsangaben").node().getBBox().width+15 + d3.select(".legendZusatzMaterial").node().getBBox().width+15},0)`)



      anderes.append("rect")
        .attr("fill", "white")
        .attr("y", legendSchriftspurY - fontsize - 2 + "px")
        .attr("x", "-5px")
        .attr("width", function(){return d3.select(".legendAnderes").node().getBBox().width + 5 })
        .attr("height", +fontsize + 6 + "px")
        .attr("fill", "#f284c0")
        .style("opacity", "0")


        ///////////////////////////////////////////////

    eigentumsangaben.select("text")
      .text("Provenienzangaben")
      .attr("class", "EigentumsangabenFilter")
      .classed("eigentumsangaben-title", true)
      .style("pointer-events", "all")


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
      .attr("class", "provenienz filter-provenienz")


    eigentumsangabendetail.append("text")
      .text("Provenienz-Stempel")
      .attr("y", legendSchriftspurY + 1.6 * fontsize)
      .attr("x", function() {
        return d3.select(".filter-provenienz").node().getBBox().width + 15
      })
      .attr("class", "provenienzstempel filter-provenienzstempel")


    markierungen.select("text")
      .text("Markierungen")
      .attr("class", "MarkierungFilter")
      .classed("markierungen-title", true)
      .style("pointer-events", "all")


    var markierungendetail = markierungen.append("g").attr("class", "detail").attr("transform", "scale(0,1)").style("opacity", 0)

    markierungendetail.append("text")
      .text("Anstreichung")
      .attr("y", legendSchriftspurY + 1.6 * fontsize)
      .attr("x", 0)
      .attr("class", "anstreichung filter-anstreichung")


    markierungendetail.append("text")
      .text("Unterstreichung")
      .attr("y", legendSchriftspurY + 1.6 * fontsize)
      .attr("x", function() {
        return d3.select(".filter-anstreichung").node().getBBox().width + 15
      })
      .attr("class", "unterstreichung filter-unterstreichung")

    markierungendetail.append("text")
      .text("Durchstreichung")
      .attr("y", legendSchriftspurY + 1.6 * fontsize)
      .attr("x", function() {
        return d3.select(".filter-anstreichung").node().getBBox().width + 15 + d3.select(".filter-unterstreichung").node().getBBox().width + 15
      })
      .attr("class", "durchstreichung filter-durchstreichung")


    markierungendetail.append("text")
      .text("Sonstige Markierung")
      .attr("y", legendSchriftspurY + 1.6 * fontsize)
      .attr("x", function() {
        return d3.select(".filter-anstreichung").node().getBBox().width + 15 + d3.select(".filter-unterstreichung").node().getBBox().width + 15 + d3.select(".filter-durchstreichung").node().getBBox().width + 15
      })
      .attr("class", "sonstigeMarkierung filter-sonstigeMarkierung")


    marginalien.select("text")
      .text("Marginalien")
      .attr("class", "MarginalienFilter")
      .style("pointer-events", "all")
      .classed("marginalien-title", true)

    var marginaliendetail = marginalien.append("g").attr("class", "detail").attr("transform", "scale(0,1)").style("opacity", 0)

    marginaliendetail.append("text")
      .text("Bewertung")
      .attr("y", legendSchriftspurY + 1.6 * fontsize)
      .attr("x", 0)
      .attr("class", "bewertung filter-bewertung")


    marginaliendetail.append("text")
      .text("Kommentar")
      .attr("y", legendSchriftspurY + 1.6 * fontsize)
      .attr("x", function() {
        return d3.select(".filter-bewertung").node().getBBox().width + 15
      })
      .attr("class", "kommentar filter-kommentar")


    marginaliendetail.append("text")
      .text("Textkorrektur")
      .attr("y", legendSchriftspurY + 1.6 * fontsize)
      .attr("x", function() {
        return d3.select(".filter-bewertung").node().getBBox().width + 15 + d3.select(".filter-kommentar").node().getBBox().width + 15
      })
      .attr("class", "textkorrektur filter-textkorrektur")


    marginaliendetail.append("text")
      .text("Variante")
      .attr("y", legendSchriftspurY + 1.6 * fontsize)
      .attr("x", function() {
        return d3.select(".filter-bewertung").node().getBBox().width + 15 + d3.select(".filter-kommentar").node().getBBox().width + 15 + d3.select(".filter-textkorrektur").node().getBBox().width + 15
      })
      .attr("class", "variante filter-variante")


    marginaliendetail.append("text")
      .text("Übersetzung")
      .attr("y", legendSchriftspurY + 1.6 * fontsize)
      .attr("x", function() {
        return d3.select(".filter-bewertung").node().getBBox().width + 15 + d3.select(".filter-kommentar").node().getBBox().width + 15 + d3.select(".filter-textkorrektur").node().getBBox().width + 15 + d3.select(".filter-variante").node().getBBox().width + 15
      })
      .attr("class", "uebersetzung filter-uebersetzung")


    zusatzMaterial.append("text")
      .text("Zusätzliches Material")
      .classed("zusatzmaterial-title", true)
      .attr("y", legendSchriftspurY)


    anderes.append("text")
      .text("Anderes")
      .classed("anderes-title", true)
      .attr("y", legendSchriftspurY)


      setTimeout(function () {

        ////////////////////////////
        //Filter-Abstand Update Start

        d3.selectAll("#legend").selectAll("text").attr("y", legendSchriftspurY)

        d3.selectAll(".detail").selectAll("text").attr("y", legendSchriftspurY + 1.6 * fontsize)

        marginalien.selectAll("rect").attr("width", function(){return d3.select(".marginalien-title").node().getBBox().width + 10 })
        marginalien.attr("transform", `translate(${d3.select(".legendTitle").node().getBBox().width+15},0)`)

        d3.select(".filter-kommentar").attr("x", function(){return d3.select(".filter-bewertung").node().getBBox().width+15})
        d3.select(".filter-textkorrektur").attr("x", function(){return d3.select(".filter-bewertung").node().getBBox().width+15 + d3.select(".filter-kommentar").node().getBBox().width+15})
        d3.select(".filter-variante").attr("x", function(){return d3.select(".filter-bewertung").node().getBBox().width+15 + d3.select(".filter-kommentar").node().getBBox().width+15 + d3.select(".filter-textkorrektur").node().getBBox().width+15})
        d3.select(".filter-uebersetzung").attr("x", function(){return d3.select(".filter-bewertung").node().getBBox().width+15 + d3.select(".filter-kommentar").node().getBBox().width+15 + d3.select(".filter-textkorrektur").node().getBBox().width+15 + d3.select(".filter-variante").node().getBBox().width+15})



        markierungen.attr("transform", `translate(${d3.select(".legendTitle").node().getBBox().width+15 + d3.select(".marginalien-title").node().getBBox().width+15},0)`)
        markierungen.selectAll("rect").attr("width", function(){return d3.select(".markierungen-title").node().getBBox().width + 10 })

        d3.select(".filter-unterstreichung").attr("x", function(){return d3.select(".filter-anstreichung").node().getBBox().width+15})
        d3.select(".filter-durchstreichung").attr("x", function(){return d3.select(".filter-anstreichung").node().getBBox().width+15 + d3.select(".filter-unterstreichung").node().getBBox().width+15})
        d3.select(".filter-sonstigeMarkierung").attr("x", function(){return d3.select(".filter-anstreichung").node().getBBox().width+15 + d3.select(".filter-unterstreichung").node().getBBox().width+15 + d3.select(".filter-durchstreichung").node().getBBox().width+15})

        eigentumsangaben.attr("transform", `translate(${d3.select(".legendTitle").node().getBBox().width+15 + d3.select(".marginalien-title").node().getBBox().width+15
        + d3.select(".markierungen-title").node().getBBox().width+15},0)`)
        eigentumsangaben.selectAll("rect").attr("width", function(){return d3.select(".eigentumsangaben-title").node().getBBox().width + 10 })

        d3.select(".filter-provenienzstempel").attr("x", function(){return d3.select(".filter-provenienz").node().getBBox().width+15})


        zusatzMaterial.attr("transform", `translate(${d3.select(".legendTitle").node().getBBox().width+15 + d3.select(".marginalien-title").node().getBBox().width+15
        + d3.select(".markierungen-title").node().getBBox().width+15 + d3.select(".eigentumsangaben-title").node().getBBox().width+15},0)`)

        zusatzMaterial.selectAll("rect").attr("width", function(){return d3.select(".zusatzmaterial-title").node().getBBox().width + 10 })


        anderes.attr("transform", `translate(${d3.select(".legendTitle").node().getBBox().width+15 + d3.select(".marginalien-title").node().getBBox().width+15
        + d3.select(".markierungen-title").node().getBBox().width+15 + d3.select(".eigentumsangaben-title").node().getBBox().width+15 + d3.select(".zusatzmaterial-title").node().getBBox().width+15},0)`)

        anderes.selectAll("rect").attr("width", function(){return d3.select(".anderes-title").node().getBBox().width + 10 })
        ////////////////////////////
        //Filter-Abstand Update End


      }, 50);
