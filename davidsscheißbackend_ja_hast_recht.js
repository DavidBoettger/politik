function submit() {
    // define questions and answers
    var q_ausgeglichenheit = [];
    var a_ausgeglichenheit;

    var q_selbstvertrauen = [];
    var a_selbstvertrauen;

    var q_disziplin = [];
    var a_disziplin;

    var q_humor = [];
    var a_humor;

    var q_vertrauen = [];
    var a_vertrauen;

    var q_unbestechlichkeit = [];
    var a_unbestechlichkeit;

    var q_akzeptanz = [];
    var a_akzeptanz;

    var q_anerkennung = [];
    var a_anerkennung;

    var q_teamgeist = [];
    var a_teamgeist;

    var q_anstand = [];
    var a_anstand;

    var q_freundlichkeit = [];
    var a_freundlichkeit;

    var q_rücksicht = [];
    var a_rücksicht;

    var q_arbeit_einstellung = [];
    var a_arbeit_einstellung;

    var q_arbeit_pensum = [];
    var a_arbeit_pensum;
    
    var q_freizeit = [];
    var a_freizeit;

    var q_konsum = [];
    var a_konsum;

    var q_familie = [];
    var a_familie;

    var q_zukunft = [];
    var a_zukunft;

    var q_politik = [];
    var a_politik;

    var q_kinder = [];
    var a_kinder;

    var q_gesundheit = [];
    var a_gesundheit;

    var q_auswandern = [];
    var a_auswandern;

    var q_karriere = [];
    var a_karriere;

    var q_geld = [];
    var a_geld;

    var q_glück = [];
    var a_glück;

    var q_selbstbestimmung = [];
    var a_selbstbestimmung;

    var q_gesellschaft = [];
    var a_gesellschaft;

    var q_hobby = [];
    var a_hobby;

    q_ausgeglichenheit[0] = document.getElementById("ausgeglichenheit0").checked;
    q_ausgeglichenheit[1] = document.getElementById("ausgeglichenheit1").checked;
    q_ausgeglichenheit[2] = document.getElementById("ausgeglichenheit2").checked;
    q_ausgeglichenheit[3] = document.getElementById("ausgeglichenheit3").checked;

    q_selbstvertrauen[0] = document.getElementById("selbstvertrauen0").checked;
    q_selbstvertrauen[1] = document.getElementById("selbstvertrauen1").checked;
    q_selbstvertrauen[2] = document.getElementById("selbstvertrauen2").checked;
    q_selbstvertrauen[3] = document.getElementById("selbstvertrauen3").checked;

    q_disziplin[0] = document.getElementById("disziplin0").checked;
    q_disziplin[1] = document.getElementById("disziplin1").checked;
    q_disziplin[2] = document.getElementById("disziplin2").checked;
    q_disziplin[3] = document.getElementById("disziplin3").checked;

    q_humor[0] = document.getElementById("humor0").checked;
    q_humor[1] = document.getElementById("humor1").checked;
    q_humor[2] = document.getElementById("humor2").checked;
    q_humor[3] = document.getElementById("humor3").checked;

    q_vertrauen[0] = document.getElementById("vertrauen0").checked;
    q_vertrauen[1] = document.getElementById("vertrauen1").checked;
    q_vertrauen[2] = document.getElementById("vertrauen2").checked;
    q_vertrauen[3] = document.getElementById("vertrauen3").checked;

    q_unbestechlichkeit[0] = document.getElementById("unbestechlichkeit0").checked;
    q_unbestechlichkeit[1] = document.getElementById("unbestechlichkeit1").checked;
    q_unbestechlichkeit[2] = document.getElementById("unbestechlichkeit2").checked;
    q_unbestechlichkeit[3] = document.getElementById("unbestechlichkeit3").checked;

    q_akzeptanz[0] = document.getElementById("akzeptanz0").checked;
    q_akzeptanz[1] = document.getElementById("akzeptanz1").checked;
    q_akzeptanz[2] = document.getElementById("akzeptanz2").checked;
    q_akzeptanz[3] = document.getElementById("akzeptanz3").checked;

    q_anerkennung[0] = document.getElementById("anerkennung0").checked;
    q_anerkennung[1] = document.getElementById("anerkennung1").checked;
    q_anerkennung[2] = document.getElementById("anerkennung2").checked;
    q_anerkennung[3] = document.getElementById("anerkennung3").checked;

    q_teamgeist[0] = document.getElementById("teamgeist0").checked;
    q_teamgeist[1] = document.getElementById("teamgeist1").checked;
    q_teamgeist[2] = document.getElementById("teamgeist2").checked;
    q_teamgeist[3] = document.getElementById("teamgeist3").checked;

    q_anstand[0] = document.getElementById("anstand0").checked;
    q_anstand[1] = document.getElementById("anstand1").checked;
    q_anstand[2] = document.getElementById("anstand2").checked;
    q_anstand[3] = document.getElementById("anstand3").checked;

    q_freundlichkeit[0] = document.getElementById("freundlichkeit0").checked;
    q_freundlichkeit[1] = document.getElementById("freundlichkeit1").checked;
    q_freundlichkeit[2] = document.getElementById("freundlichkeit2").checked;
    q_freundlichkeit[3] = document.getElementById("freundlichkeit3").checked;

    q_rücksicht[0] = document.getElementById("rücksicht0").checked;
    q_rücksicht[1] = document.getElementById("rücksicht1").checked;
    q_rücksicht[2] = document.getElementById("rücksicht2").checked;
    q_rücksicht[3] = document.getElementById("rücksicht3").checked;

    q_arbeit_einstellung[0] = document.getElementById("arbeit_einstellung0").checked;
    q_arbeit_einstellung[1] = document.getElementById("arbeit_einstellung1").checked;
    q_arbeit_einstellung[2] = document.getElementById("arbeit_einstellung2").checked;

    q_arbeit_pensum[0] = document.getElementById("arbeit_pensum0").checked;
    q_arbeit_pensum[1] = document.getElementById("arbeit_pensum1").checked;
    q_arbeit_pensum[2] = document.getElementById("arbeit_pensum2").checked;

    q_freizeit[0] = document.getElementById("freizeit0").checked;
    q_freizeit[1] = document.getElementById("freizeit1").checked;
    q_freizeit[2] = document.getElementById("freizeit2").checked;
    q_freizeit[3] = document.getElementById("freizeit3").checked;

    q_konsum[0] = document.getElementById("konsum0").checked;
    q_konsum[1] = document.getElementById("konsum1").checked;
    q_konsum[2] = document.getElementById("konsum2").checked;
    q_konsum[3] = document.getElementById("konsum3").checked;

    q_familie[0] = document.getElementById("familie0").checked;
    q_familie[1] = document.getElementById("familie1").checked;
    q_familie[2] = document.getElementById("familie2").checked;
    q_familie[3] = document.getElementById("familie3").checked;

    q_zukunft[0] = document.getElementById("zukunft0").checked;
    q_zukunft[1] = document.getElementById("zukunft1").checked;
    q_zukunft[2] = document.getElementById("zukunft2").checked;
    q_zukunft[3] = document.getElementById("zukunft3").checked;

    q_politik[0] = document.getElementById("politik0").checked;
    q_politik[1] = document.getElementById("politik1").checked;
    q_politik[2] = document.getElementById("politik2").checked;
    q_politik[3] = document.getElementById("politik3").checked;
    q_politik[4] = document.getElementById("politik4").checked;
    q_politik[5] = document.getElementById("politik5").checked;
    q_politik[6] = document.getElementById("politik6").checked;

    q_kinder[0] = document.getElementById("kinder0").checked;
    q_kinder[1] = document.getElementById("kinder1").checked;
    q_kinder[2] = document.getElementById("kinder2").checked;
    q_kinder[3] = document.getElementById("kinder3").checked;

    q_gesundheit[0] = document.getElementById("gesundheit0").checked;
    q_gesundheit[1] = document.getElementById("gesundheit1").checked;
    q_gesundheit[2] = document.getElementById("gesundheit2").checked;
    q_gesundheit[3] = document.getElementById("gesundheit3").checked;

    // get answers
    for (i = 0; i < q_ausgeglichenheit.length; i++) {
        if (q_ausgeglichenheit[i] == true) {
            a_ausgeglichenheit = i;
        } 
    }
    
    for (i = 0; i < q_selbstvertrauen.length; i++) {
        if (q_selbstvertrauen[i] == true) {
            a_selbstvertrauen = i;
        } 
    }

    for (i = 0; i < q_disziplin.length; i++) {
        if (q_disziplin[i] == true) {
            a_disziplin = i;
        } 
    }
    
    for (i = 0; i < q_humor.length; i++) {
        if (q_humor[i] == true) {
            a_humor = i;
        } 
    }

    for (i = 0; i < q_vertrauen.length; i++) {
        if (q_vertrauen[i] == true) {
            a_vertrauen = i;
        } 
    }

    for (i = 0; i < q_unbestechlichkeit.length; i++) {
        if (q_unbestechlichkeit[i] == true) {
            a_unbestechlichkeit = i;
        } 
    }

    for (i = 0; i < q_akzeptanz.length; i++) {
        if (q_akzeptanz[i] == true) {
            a_akzeptanz = i;
        } 
    }

    for (i = 0; i < q_anerkennung.length; i++) {
        if (q_anerkennung[i] == true) {
            a_anerkennung = i;
        } 
    }

    for (i = 0; i < q_teamgeist.length; i++) {
        if (q_teamgeist[i] == true) {
            a_teamgeist = i;
        } 
    }

    for (i = 0; i < q_anstand.length; i++) {
        if (q_anstand[i] == true) {
            a_anstand = i;
        } 
    }

    for (i = 0; i < q_freundlichkeit.length; i++) {
        if (q_freundlichkeit[i] == true) {
            a_freundlichkeit = i;
        } 
    }

    for (i = 0; i < q_rücksicht.length; i++) {
        if (q_rücksicht[i] == true) {
            a_rücksicht = i;
        } 
    }

    for (i = 0; i < q_arbeit_einstellung.length; i++) {
        if (q_arbeit_einstellung[i] == true) {
            a_arbeit_einstellung = i;
        } 
    }

    for (i = 0; i < q_arbeit_pensum.length; i++) {
        if (q_arbeit_pensum[i] == true) {
            a_arbeit_pensum = i;
        } 
    }

    for (i = 0; i < q_freizeit.length; i++) {
        if (q_freizeit[i] == true) {
            a_freizeit = i;
        } 
    }

    for (i = 0; i < q_konsum.length; i++) {
        if (q_konsum[i] == true) {
            a_konsum = i;
        } 
    }

    for (i = 0; i < q_familie.length; i++) {
        if (q_familie[i] == true) {
            a_familie = i;
        } 
    }

    for (i = 0; i < q_zukunft.length; i++) {
        if (q_zukunft[i] == true) {
            a_zukunft = i;
        } 
    }

    for (i = 0; i < q_politik.length; i++) {
        if (q_politik[i] == true) {
            a_politik = i;
        } 
    }

    for (i = 0; i < q_kinder.length; i++) {
        if (q_kinder[i] == true) {
            a_kinder = i;
        } 
    }

    for (i = 0; i < q_gesundheit.length; i++) {
        if (q_gesundheit[i] == true) {
            a_gesundheit = i;
        } 
    }

    // Answerblöcke summieren
    var werte = 0;
    //var arbeit_einstellung = 0;
    //var arbeit_pensum = 0;
    //var freizeit = 0;
    //var konsum = 0;
    //var familie = 0;
    //var zukunft = 0;
    //var politik = 0;
    //var ziele = 0;
    //var finanzen = 0;

    // werte (36) (je mehr, desto positiver)
    werte = a_ausgeglichenheit + a_selbstvertrauen + a_disziplin + a_humor + a_vertrauen + a_unbestechlichkeit + a_akzeptanz + a_anerkennung + a_teamgeist + a_anstand + a_freundlichkeit + a_rücksicht
    werte = 36 - werte

    // arbeit_einstellung (2)
    arbeit_einstellung = a_arbeit_einstellung

    // arbeit_einstellung (2)
    arbeit_pensum = a_arbeit_pensum

    // freizeit (3)
    freizeit = a_freizeit
    freizeit = 3 - freizeit

    // konsum 
    konsum = a_konsum

    // familie 
    familie = a_familie

    // zukunft 
    zukunft = a_zukunft

    // politik 
    politik = a_politik

    // ziele 
    //ziele = a_kinder + a_gesundheit

    // finanzen 
    //finanzen = a_finanzen

    // Verlinkung nach gewichteten Kategorien



    // log
    console.log(werte);

}