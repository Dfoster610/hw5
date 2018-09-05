//startProcess

function startProcess() {
    for (i = 1; i < 11; i++) {
        Length = i+2;
        Width = i+3;
        Height = i+4;
        
        var volume = getVolume(Length, Width, Height);
 
        if (volume <= 300) {
            document.write('Small Volume ' + " " + volume + '<br>');
        }

        else if ((volume >= 301) && (volume < 601)) {
            document.write('Medium Volume ' + volume + '<br>');
        }
        else if ((volume >= 601) && (volume < 1001)) {
            document.write('Large Volume ' + volume + '<br>');
        }
        else if (volume >= 1001) {
            document.write('Extra Large ' + 'Volume ' + volume + '<br>');
        }  
    }
}
startProcess();

//getVolume
    function getVolume(Length, Width, Height) {
        var result = Length * Width * Height;
        return result;
    }
   

