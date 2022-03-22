// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Cinethon App',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		
		{
		path: '/promociones/',
    	url: 'promociones.html',
    	name: 'promociones',
  		},
		
		{
		path: '/categorias/',
    	url: 'categorias.html',
    	name: 'categorias',
  		},
		
		{
		path: '/mis-peliculas/',
    	url: 'mis-peliculas.html',
    	name: 'mis-peliculas',
  		},
		
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		
		{
		path: '/salir/',
    	url: 'salir.html',
    	name: 'salir',
  		},
		
		{
		path: '/sonido/',
    	url: 'sonido.html',
    	name: 'sonido',
  		},
		
		{
		path: '/camaras/',
    	url: 'camaras.html',
    	name: 'camaras',
  		},
		
		{
		path: '/confirm/',
    	url: 'confirm.html',
    	name: 'confirm',
  		},
		
		
		
		
	],
	dialog: {
		title: 'Cinethon App',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('cinethon', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('¡ Bienvenidos a Cinethon App !');
    }
	
});



$$('#btnAddCart').on('cinethon', function (e) {
	e.preventDefault();
	console.log('btn');
	
	
	var notification = app.notification.create({
      icon: '<i class="material-icons">check</i>',
      title: 'Order',
      titleRightText: '',
      subtitle: '',
      text: "Tu orden ha sido enviada.",
      closeTimeout: 3000,
    });
    notification.open();
	
});





