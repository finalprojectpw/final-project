var teacher = [

	{
		"nip" : "987135268",
		"nama" : "Achmad Fauzan, S.Pd",
		"email" : "mas.fauzan@rauzuran.com",
		"web" : "www.masfauzan.com"
		
	},
	
	{
		"nip" : "987735491",
		"nama" : "Agung Fauzan, S.Pd",
		"email" : "fauzanagung@rauzuran.com",
		"web" : "www.agungzan.com"
		
	},
	
	{
		"nip" : "987548901",
		"nama" : "Ananda Maulana, M.Pd",
		"email" : "mauulana@rauzuran.com",
		"web" : "www.maumaulana.com"
		
	},

	{
		"nip" : "987562124",
		"nama" : "Ananda Nurul Awwal, M.Pd",
		"email" : "ananda.awwal@rauzuran.com",
		"web" : "www.tawacanda.com"
		
	},
	
	{	
		"nip" : "987562134",
		"nama" : "Nuringtyas Arya Laksmana, M.Pd",
		"email" : "nurityas.arya@rauzuran.com",
		"web" : "www.nuringtyasarya.com"
	},
	
	{	
		"nip" : "987857613",
		"nama" : "Satria Budi Hatmaja, M.Pd",
		"email" : "hatmaja.satria@rauzuran.com",
		"web" : "www.nganunenganu.com"
	},
	
	{	
		"nip" : "987851254",
		"nama" : "Satria Budi Pekerti, M.Pd",
		"email" : "budipekerti@rauzuran.com",
		"web" : "www.pekertibudi.com"
	},
	


];

var tabel = document.getElementById('tabel');
var no = 1;
for(var i=0;i<teacher.length; i++){
	var tr=document.createElement("tr");
	tr.innerHTML="<td>" + no + "</td>";
	tr.innerHTML +="<td>" + (teacher[i].nip) + "</td>";
	tr.innerHTML +="<td>" + (teacher[i].nama) + "</td>";
	tr.innerHTML +="<td>" + (teacher[i].email) + "</td>";
	tr.innerHTML +="<td>" + (teacher[i].web) + "</td>";
	tabel.appendChild(tr);
	no++;
}