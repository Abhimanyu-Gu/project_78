           
var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://e7.pngegg.com/pngimages/8/82/png-clipart-cartoon-grandparent-grandma-s-purple-comics.png" ,"https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://static6.depositphotos.com/1000792/646/v/950/depositphotos_6464182-stock-illustration-two-boys-go-to-school.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg" ];
           
var names = ["Family Book","Hariom Gupta", "Sontosh Gupta", "Vineet Gupta", "Shruti Gupta", "Aditya Gupta", "Abhimanyu Gupta"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 6
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}

