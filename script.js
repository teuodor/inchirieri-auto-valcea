function click_contact(){
    let contact = document.getElementById("contact")
    let about_us = document.getElementById("about_us")
    if(about_us.classList.contains("active")){
        about_us.classList.remove("active")
        contact.classList.add("active")
        let app_text = document.getElementById("first-text") 
        let telefon = '<h1>Date de contact</h1><p class="paragraph">Telefon: 0722910000<br>'
        let sediu = 'Sediu: Str Nicolae Iorga nr. 18, bl. A30, sc. B , ap.3 , et. 1<br>'
        let city = 'Localitate: R&#226;mnicu V&#226;lcea<br>Jude&#355;: V&#226;lcea</p>'
        let text = telefon + sediu + city
        app_text.innerHTML = text
        let opel = document.getElementsByClassName("opel-break")[0]
        opel.classList.add("opel")
        opel.src = "resources/opel.png"
        let sandero = document.getElementsByClassName("sandero-logan")[0]
        sandero.src = "resources/golan-resized.png"
        sandero.classList.add("golan")
        let promo = document.getElementById("second-text")
        promo.innerHTML = ''
    }
    
}

function click_about_us(){
    let contact = document.getElementById("contact")
    let about_us = document.getElementById("about_us")
    if(contact.classList.contains("active")){
        contact.classList.remove("active")
        about_us.classList.add("active")
        let app_text = document.getElementById("first-text") 
        let slogan = '<h1>&#206;nchirieri auto V&#226;lcea</h1>'
        let par = '<p class="paragraph">Cu o experien&#355;&#259; &#238;n domeniu de peste 10 ani, firma noastr&#259; Saturn Auto SRL v&#259; pune la dispozi&#355;ie o gam&#259; de ma&#351;ini fiabile precum Dacia Sandero, Dacia Logan break sau berlina, Opel Corsa &#351;i altele &#238;n func&#355;ie de disponibilitate. Oferta noastr&#259; variaz&#259; &#238;n func&#355;ie de durata contractului de &#238;nchiriere &#351;i include asigurarea obligatorie, ITP, rovigneta cu pre&#355;uri cuprinse &#238;ntre &#351;i &#238;ntre.<br><strong><label>PRE&#354;URI &#206;NCEP&#194;ND DE LA 60 LEI/ZI!!!</label></strong></p>'
        let text = slogan + par
        app_text.innerHTML = text
        let opel = document.getElementsByClassName("opel-break")[0]
        opel.classList.remove("opel")
        opel.src = "resources/break.png"
        let sandero = document.getElementsByClassName("sandero-logan")[0]
        sandero.src = "resources/sandero-resized.png"
        sandero.classList.remove("golan")
        let promo = document.getElementById("second-text")
        promo.innerHTML = '<p class="paragraph">V&#226;lcea ad&#259;poste&#351;te locuri &#238;nc&#226;nt&#259;toare. Cu bogate forme de relief, de la dealuri domoale la v&#226;rfuri muntoase,'.concat( 
        'cu r&#226;uri de munte limpezi &#351;i reci, V&#226;lcea te &#238;mbie s&#259; o descoperi &#238;n orice anotimp. Valea Oltului te va fascina cu drumurile &#351;erpuite ',
        'care alunec&#259; lin pe l&#226;ng&#259; firul apei. B&#259;tr&#226;nul Olt poart&#259; cu el at&#226;ta istorie, a&#351;a c&#259; de ce s&#259; nu &#238;nchiriezi o ma&#351;in&#259; &#351;i s&#259; descoperi ',
        'totul pe cont propriu?</p>')
    }
}