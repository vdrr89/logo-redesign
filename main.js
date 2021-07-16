/* MENU */
var menuItems = [
    {
        title: 'Por qué vectorizar?',
        link: '#porquevectorizar'
    },
    {
        title: 'Por qué simplificar?',
        link: '#porquesimplificar'
    },
    {
        title: 'Logo Actual',
        link: '#logoactual'
    },
    {
        title: 'Simplificando',
        link: '#simplificandomapa'
    },
    {
        title: 'Logo final',
        link: '#logofinal'
    },
    {
        title: 'Diseños Institucional',
        link: '#tarjetapersonal'
    }
]

var menuUlHTML = document.getElementById('menu-ul');

for( i = 0; i < 6; i++){
    menuUlHTML.innerHTML += '<li><a href="' + menuItems[i].link + '">' + menuItems[i].title + '</a></li>'; 
}

/* TRAER XQ VECTORIZAR AL HTML DESDE EL TXT */
var porQueVectorizarHTML = document.getElementById('porquevectorizar');
var xqVectorizarHTML = document.getElementById('xq-vectorizar');

function getVectorizarContent(porQueVectorizarHTML){
    var myRequest = new Request('txts/xq-vectorizar.txt');
    fetch(myRequest).then(function(response){
      return response.text().then(function(text){
        xqVectorizarHTML.innerHTML = text;
      });
    });
  };

getVectorizarContent(xqVectorizarHTML);

/* TRAER XQ SIMPLIFICAR AL HTML DESDE EL TXT */
var porQueSimplificarHTML = document.getElementById('porquesimplificar');
var xqSimplificarHTML = document.getElementById('xq-simplificar');

function getSimplificarContent(porQueSimplificarHTML){
    var myRequest = new Request('txts/xq-simplificar.txt');
    fetch(myRequest).then(function(response){
      return response.text().then(function(text){
        xqSimplificarHTML.innerHTML = text;
      });
    });
  };

getSimplificarContent(xqSimplificarHTML);

/* IMGS Y SUS TITULOS */

var imgSections = [
    {
        title: 'Logo Actual',
        id: 'logoactual',
        img: 'https://66.media.tumblr.com/0f8f98dfced9e2d503e4969301a2f5cf/tumblr_psjju7HIQv1vvigzjo5_r1_540.jpg',
    },
    {
        title: 'Este el logo actual vectorizado',
        id: 'logoactualvectorizado',
        img: 'https://66.media.tumblr.com/16aff1573bebd4cfff78aba11c98c5e8/tumblr_psjjs5xBJv1vvigzjo1_250.png'
    },
    {
        title: 'Simplificando el mapa',
        id: 'simplificandomapa',
        img: 'https://66.media.tumblr.com/2e4ea35997ff1e2cfea5cece70267c4c/tumblr_psjju7HIQv1vvigzjo2_640.png'
    },
    {
        title: 'Simplificando pulmones',
        id: 'simplificandopulmones',
        img: 'https://66.media.tumblr.com/38b97245cddda33dd333df7e2c89d208/tumblr_psjju7HIQv1vvigzjo3_540.png'
    },
    {
        title: 'Simplificando corazón',
        id: 'simplificandocorazon',
        img: 'https://66.media.tumblr.com/9de4199f19184ace1f062b5f4981b3eb/tumblr_psjju7HIQv1vvigzjo1_500.png'
    },
    {
        title: 'Simplificando tipografía',
        id: 'simplificandotipografia',
        img: 'https://66.media.tumblr.com/eb15add91f0015d7ebc771c66db639f7/tumblr_psjjs5xBJv1vvigzjo3_1280.png'
    },
    {
        title: 'Simplificando logo',
        id: 'simplificandologo',
        img: 'https://66.media.tumblr.com/f0bf7db4ec8788e96031d605caadeea7/tumblr_psjjs5xBJv1vvigzjo4_500.png'
    }, 
    {
        title: 'Logo final',
        id: 'logofinal',
        img: 'https://66.media.tumblr.com/7c49227d1868373fe1656d09bad9a8c8/tumblr_psjjs5xBJv1vvigzjo5_1280.png'
    }, 
    {
        title: 'Tarjeta personal',
        id: 'tarjetapersonal',
        img: 'https://66.media.tumblr.com/1fe21a8d76908bfb5a8baf3079f024a1/tumblr_psjjs5xBJv1vvigzjo7_1280.png'
    }, 
    {
        title: 'Hoja membretada',
        id: 'hojamembretada',
        img: 'https://66.media.tumblr.com/fe03c905e0a2f6e3fa4214516dbd6193/tumblr_psjjs5xBJv1vvigzjo9_500.png'
    }, 
    {
        title: 'Sobre membretado',
        id: 'sobremembretado',
        img: 'https://66.media.tumblr.com/5122c19a40964600dc868d3b06f7caf8/tumblr_psjjs5xBJv1vvigzjo10_1280.png'
    }, 
    {
        title: 'Sello',
        id: 'sello',
        img: 'https://66.media.tumblr.com/f14843fa45892accf74f01c910b426e3/tumblr_psjju7HIQv1vvigzjo4_r1_1280.png'
    }
]

var imgSectionsHTML = document.getElementById('imgSectionsHTML');
var imgSectionsLength = imgSections.length;

for ( let i = 0; i <= 12; i++ ){
    imgSectionsHTML.innerHTML += '<h2 id="' + imgSections[i].id + '">' + imgSections[i].title + '</h2> <img src="' + imgSections[i].img + '">'
  };