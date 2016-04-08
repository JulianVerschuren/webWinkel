$(document).ready( function() {
    //inhoud modale vensters
    var product1Inhoud = $('#product1').detach();
    var product2Inhoud = $('#product2').detach();
    var product3Inhoud = $('#product3').detach();
    var product4Inhoud = $('#product4').detach();
    var product5Inhoud = $('#product5').detach();
    var product6Inhoud = $('#product6').detach();
    var product7Inhoud = $('#product7').detach();
    var product8Inhoud = $('#product8').detach();
    var product9Inhoud = $('#product9').detach();
    var product10Inhoud = $('#product10').detach();
    var product11Inhoud = $('#product11').detach();
    var product12Inhoud = $('#product12').detach();
    
    //events bij de thumbs : modaal venster openen met de passende inhoud erin
    $('#product1thumb').on('click',function() {
        modaalVenObject.openen({inhoud: product1Inhoud, breedte: 601});
    });
    $('#product2thumb').on('click',function() {
        modaalVenObject.openen({inhoud: product2Inhoud, breedte: 620});
    });
    $('#product3thumb').on('click',function() {
        modaalVenObject.openen({inhoud: product3Inhoud, breedte: 639});
    });
    $('#product4thumb').on('click',function() {
        modaalVenObject.openen({inhoud: product4Inhoud, breedte: 670});
    });
    $('#product5thumb').on('click',function() {
        modaalVenObject.openen({inhoud: product5Inhoud, breedte: 685});
    });
    $('#product6thumb').on('click',function() {
        modaalVenObject.openen({inhoud: product6Inhoud, breedte: 612});
    });
    $('#product7thumb').on('click',function() {
        modaalVenObject.openen({inhoud: product7Inhoud, breedte: 639});
    });
    $('#product8thumb').on('click',function() {
        modaalVenObject.openen({inhoud: product8Inhoud, breedte: 612});
    });
    $('#product9thumb').on('click',function() {
        modaalVenObject.openen({inhoud: product9Inhoud, breedte: 772});
    });
    $('#product10thumb').on('click',function() {
        modaalVenObject.openen({inhoud: product10Inhoud, breedte: 695});
    });
    $('#product11thumb').on('click',function() {
        modaalVenObject.openen({inhoud: product11Inhoud, breedte: 607});
    });
    $('#product12thumb').on('click',function() {
        modaalVenObject.openen({inhoud: product12Inhoud, breedte: 639});
    });
});