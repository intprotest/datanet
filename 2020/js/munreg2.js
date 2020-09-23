$('div#municipalitetebi a').click(function(event) {
	event.preventDefault();
	getMunInfo ( $(this).attr("id").split('MUN')[1] );
    $('#searchinput').focus();
});

function getMunInfo(mun_id) {
	$.get( `/2020/enginemun_info.php`,{
		mun_id: mun_id
	}, function(data) {
		$('div#municipalitetebi a').removeClass('active');
		$('#MUN'+mun_id).addClass('active');
		$('#munreg-main').html(data);
	});
}

GeoKBD.map('mun_filter',['searchinput']);

$('#municipalitetebi').btsListFilter('#searchinput', {itemChild: 'span'});

$('#searchinput').focus();