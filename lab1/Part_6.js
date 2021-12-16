var a = [
	{FirsName:"Ellie", LastName:"Williams"},
	{FirstName:"Lara", LastName : "Croft"},
    {FirstName:"La", LastName : "Kepibara"},
    {FirstName:"Mara", LastName : "Aboba"},
    {FirstName:"Spang_bob", LastName : "Square_pants"}
];
function SortArray(x, y){
    if (x.LastName > y.LastName) {return -1;}
    if (x.LastName < y.LastName) {return 1;}
    return 0;
}
var s = a.sort(SortArray);
console.log(s);