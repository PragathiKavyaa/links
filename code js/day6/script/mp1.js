let moviename = ["gilli", "sura", "villu", "tamilan"]
userinput = prompt("Enter Movie Name")
for(let val=0; val<moviename.length; val++){
    if(userinput == moviename[val]){
        console.log("Ticket Booked");
        
    }
    else{
        console.log("Movie Not Available");
        
    }
}
