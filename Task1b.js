var count = 0;
    function myfunction(x) {
        
        var x;

        if(x == 1){
            count = count+1;
            console.log(count)
        }
        if (count == 1){
            document.getElementById("change").style.background = 'red';
        }
        else if (count == 2){
            document.getElementById("change").style.background = 'green';
        }
        else if (count == 3){
            document.getElementById("change").style.background = 'yellow';
        }
        else if (count == 4){
            document.getElementById("change").style.background = 'pink';
            count=0;
        }
    }

    function fun2(){
        alert('Good Evening');
    }

    function fun1(){
    
        var fnum = document.getElementById('text1').value;
        var snum = document.getElementById('text2').value;

        var total = parseInt(fnum) + parseInt(snum);

        document.getElementById('Result').innerHTML = total;
    }