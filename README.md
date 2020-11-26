# Reading Traces – Visualizing Theodor Fontane's Reference Library
![Prototype](/img/moduswechsel.gif)

## About
Reading Traces is visualization of personal reading traces such as marginalia or markings inside the reference library of the German realist author Theodor Fontane. 
His personal library comprises one hundred fifty-five volumes with more than sixty-four thousand pages, a collection of books from his possession which is now preserved in the »Theodor Fontane Archiv« in Potsdam. The preserved volumes show a variety of reading traces, such as comments, ratings, text corrections, various types of markings, institutional stamps, fingerprints or glued-in newspaper articles. In total, the data and the digitized pages can be explored via two modes, each one consisting of multiple granularity levels to help explore the data from different perspectives. While the first mode arranges and visualizes the distribution of reading traces along the linear reading order of the books, the second mode arranges books and authors based on similarity measures.

The source code is not really prepared for re-use and in parts quite redundant and in need of a restructering, commenting and clean-up. Nevertheless, we still hope it might be usefull to some of you.

See also the [project demo](https://uclab.fh-potsdam.de/ff/) and a [video](https://vimeo.com/355280580) describing the functionalities of the prototype. For more infos on the functionalities of the prototype, please inquire the help button inside the [prototype](https://uclab.fh-potsdam.de/ff/). 

### The data
The visualization is based on three data sources and the images of the digitized pages of the books and is accessed via a Google Spreadsheet enabling live-editing and the Google Spreadsheet API:

1) Corpus data: Overview of all books in the collection including all relevant meta data such id, author, genre, publication date, etc.
2) Data for reading traces in pages: A dataset including a data row for each of the over 60,000 pages/reading traces inside of the collection, including page id, reading trace occurences, reading trace transcriptions and more. This data is already processed and is a combination and restructering of individual spreadsheets for each book.
3) Data for the similarity (dark) mode: The python modules pandas and sklearn.manifold.MDS were used for the calculation of the MDS layout.  

For access to data files for individual books or access to the images, please contact the the [Theodor Fontane Archive Potsdam](https://www.fontanearchiv.de).

### External resources
/js/d3.v5.min.js → [D3.js](https://d3js.org/)  
/js/jquery.min.js → [jQuery](https://jquery.com/)  
/js/select2.min.js → [Select2](https://select2.org/)  
/css/select2.css → [Select2](https://select2.org/) 
/fonts/... → [Roboto](https://fonts.google.com/specimen/Roboto)

## Project Team
This project is a collaboration between the [Theodor Fontane Archive Potsdam](https://www.fontanearchiv.de) (University of Potsdam) and the [UCLAB](https://uclab.fh-potsdam.de/) (University of Applied Sciences Potsdam). 

### Team UCLAB  
Mark-Jan Bludau: concept development, design, data analysis & prototype development  
Viktoria Brüggemann: concept development & scientific supervision/research  
Marian Dörk: project lead  

### Team Theodor Fontane Archive  
Anna Busch: project coordination & data aquisition  
Sabine Seifert: research data management  
Luisa Billepp, Kristina Genzel, Tabea Klaus, Anke Reintsch: data aquisition  
Peer Trilcke: project lead  

## Related Publications
[Bludau, M.-J., Brüggemann, V., Busch, A., & Dörk, M. (2020). Reading Traces: Scalable Exploration in Elastic Visualizations of Cultural Heritage Data. In Computer Graphics Forum (Vol. 39, No. 3, pp. 77-87).](https://doi.org/10.1111/cgf.13964)

[Busch, A., Bludau, M.-J., Brüggemann, V., Dörk, M., Genzel, K., Seifert,S. & Trilcke P. Scalable Exploration (2019). Prototype study for the visualization of an author's library on the example of 'Theodor Fontane's Library'. In Book of Abstracts of the Digital Humanities conference (DH) 2019: Complexities. Utrecht (The Netherlands)](https://dev.clariah.nl/files/dh2019/boa/0490.html)

[Busch, A. (2019). Fontane als Leser. Zur Visualisierung von Lektürespuren in Fontanes Handbibliothek. In Fontane Blätter (107, S. 104-131).](https://www.fontanearchiv.de/fileadmin/user_upload/Fontane-Blaetter/Fbl_107_final_2019-08-07_Busch.pdf)

[Busch, A., Bludau, M.-J., Brüggemann, V., Dörk, M., Genzel, K., Möller,H.-P., Seifert,S. & Trilcke P. (2019). Skalierbare Exploration. Prototypenstudie zur Visualisierung einer Autorenbibliothek am Beispiel der ›Handbibliothek Theodor Fontanes. In Konferenzband zur DHd 2019 Frankfurt & Mainz - Digital Humanities: multimedial & multimodal](https://zenodo.org/record/2596095/preview/2019_DHd_BookOfAbstracts_web.pdf#page=205)

## License
The source code is licensed under the [ISC license](https://github.com/tfalab/fontanes_library/edit/master/LICENSE.md). The data is licensed under [CC BY-4.0](https://creativecommons.org/licenses/by/4.0). 

Copyright (c) 2018-2020, UCLAB (FH Potsdam) & Theodor Fontane Archiv Potsdam.
