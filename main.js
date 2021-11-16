var images = ["download.jpg","124855563-vector-illustration-of-cartoon-happy-family-on-white-background","f18986c494842328385aa07455eb2f0e","mother-and-kids_1809823"];
var names = ["Soni Singh","Kabir Singh","Arun Chandhran","Rithu Nair"]


function update() {
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array){
        i = 0;
    }
    var updatedImage =  images[i];
    var updatedName = names[i];
    document.getElementById("family_member_images").src = updatedImage;
    document.getElementById("family_member_names").innerHTML = updatedName;
}