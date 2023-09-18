function whatsapp(){
    var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    var Message = document.getElementById("Message").value;
    
    var url = "https://wa.me/9932876978?text="
    +"*Name :* "+Name+"%0a"
    +"*Email :* "+Email+"%0a"
    +"*Message :* "+Message;
    
    window.open(url,'_blank').focus();
    }
    