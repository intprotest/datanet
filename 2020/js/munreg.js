let map = new Map();

map.set("Tbilisi","");
//აჭარა 

map.set("Batumi","Achara");
map.set("Kobuleti","Achara");
map.set("Keda","Achara");
map.set("Shuakhevi","Achara");
map.set("Khelvachauri","Achara");
map.set("Khulo","Achara");

// გურია
map.set("Lanchkhuti","Guria");
map.set("Ozurgeti","Guria");
map.set("Chokhatauri","Guria");

//იმერეთი
map.set("Kutaisi","Imereti");
map.set("Baghdati","Imereti");
map.set("Vani","Imereti");
map.set("Zestaponi","Imereti");
map.set("Terjola","Imereti");
map.set("Samtredia","Imereti");
map.set("Sachkhere","Imereti");
map.set("Tkibuli","Imereti");
map.set("Tskaltubo","Imereti");
map.set("Chiatura","Imereti");
map.set("Kharagauli","Imereti");
map.set("Khoni","Imereti");

//კახეთი
map.set("Akhmeta","Kakheti");
map.set("Gurjaani","Kakheti");
map.set("Dedoplistskaro","Kakheti");
map.set("Telavi","Kakheti");
map.set("Lagodekhi","Kakheti");
map.set("Sagarejo","Kakheti");
map.set("Sighnaghi","Kakheti");
map.set("Kvareli","Kakheti");

//მცხეთა-მთიანეთი
map.set("Akhalgori","Mtskheta-Mtianeti");
map.set("Dusheti","Mtskheta-Mtianeti");
map.set("Tianeti","Mtskheta-Mtianeti");
map.set("Mtskheta","Mtskheta-Mtianeti");
map.set("Kazbegi","Mtskheta-Mtianeti");

//რაჭა-ლეჩხუმი და ქვემო სვანეთი
map.set("Ambrolauri","Racha");
map.set("Lentekhi","Racha");
map.set("Oni","Racha");
map.set("Tsageri","Racha");

//სამეგრელო-ზემო სვანეთი
map.set("Poti","Samegrelo");
map.set("Abasha","Samegrelo");
map.set("Zugdidi","Samegrelo");
map.set("Martvili","Samegrelo");
map.set("Mestia","Samegrelo");
map.set("Senaki","Samegrelo");
map.set("Chkhorotsku","Samegrelo");
map.set("Tsalenjikha","Samegrelo");
map.set("Khobi","Samegrelo");

//სამცხე-ჯავახეთი
map.set("Adigeni","Samtskhe");
map.set("Aspindza","Samtskhe");
map.set("Akhalkalaki","Samtskhe");
map.set("Akhaltsikhe","Samtskhe");
map.set("Borjomi","Samtskhe");
map.set("Ninotsminda","Samtskhe");

//ქვემო ქართლი
map.set("Rustavi","KvemoKartli");
map.set("Bolnisi","KvemoKartli");
map.set("Gardabani","KvemoKartli");
map.set("Dmanisi","KvemoKartli");
map.set("Tetritskaro","KvemoKartli");
map.set("Marneuli","KvemoKartli");
map.set("Tsalka","KvemoKartli");

//შიდა ქართლი
map.set("Gori","ShidaKartli");
map.set("Kaspi","ShidaKartli");
map.set("Kareli","ShidaKartli");
map.set("Khashuri","ShidaKartli");



if(window.location.hash != ''){
var hash = location.hash.substr(1);
getMunInfo (hash);
	    
}


$('div#municipalitetebi a').click(function(event) {
	event.preventDefault();

	getMunInfo ( $(this).attr("id"),[1] );
window.location.hash = '#' + $(this).attr("id"),[1];
    $('#searchinput').focus();
});

function getMunInfo(mun_id) {
	
	let state = map.get(mun_id);

	if(state){
		state = "/"+state;
	}else{
		state = "";
	}

	$.get( `engine${state}/${mun_id}.php`,{

		
		
		mun_id: mun_id
	}, function(data) {
		$('div#municipalitetebi a').removeClass('active');
		$('#'+mun_id).addClass('active');
		$('#munreg-main').html(data);
		
	});
}

GeoKBD.map('mun_filter',['searchinput']);

$('#municipalitetebi').btsListFilter('#searchinput', {itemChild: 'span'});


$('#searchinput').focus();