    box1Data();
    box2Data();
    box3Data();
    box4Data();
    box5Data();
function box1Data(){
    var count=0;
var checkValue;
var mainData=[];
var row="";
var colm="";
    for(var j=0;j<=32;j++)
    {
        checkValue=count.toString(2);
       if(checkValue.length>=5)
       {
        if(checkValue[0]==1)
        {
            mainData.push(count);
        }        
        
       }
       count++;      
        if(count===32)
        {
            break;
        }
    }
    count=0;
    for(var k=0;k<Math.ceil(mainData.length/3);k++)
    {
        for(var i=0;i<3;i++)
        {
            if(count<=mainData.length-1)
            {
                colm+=`
            <td>${mainData[count]}</td>
            `;
            count++;

            }
        }
        row+=`
        <tr>${colm}</tr>
        `;
        colm="";
    }
box1.innerHTML=`
<table class="table-borderless table-hover w-100">${row}</table>
`;
}
function box2Data(){
    var count=0;
    var checkValue;
    var mainData=[];
    var row="";
    var colm="";
        for(var j=0;j<=32;j++)
        {
            checkValue=count.toString(2);
            if(checkValue.length==4)
            {
             if(checkValue[0]==1)
             {
                 mainData.push(count);     
            }        
 
                }
        else if(checkValue.length==5){
            if(checkValue[1]==1)
             {
              mainData.push(count);
                }           
                }
           count++;      
            if(count===32)
            {
                break;
            }
        }
        count=0;
        for(var k=0;k<Math.ceil(mainData.length/3);k++)
        {
            for(var i=0;i<3;i++)
            {
                if(count<=mainData.length-1)
                {
                    colm+=`
                <td>${mainData[count]}</td>
                `;
                count++;
                }
            }
            row+=`
            <tr>${colm}</tr>
            `;
            colm="";
        }
    box2.innerHTML=`
    <table class="table-borderless table-hover w-100">${row}</table>
    `;
}
function box3Data(){
    var count=0;
    var checkValue;
    var mainData=[];
    var row="";
    var colm="";
        for(var j=0;j<=32;j++)
        {
            checkValue=count.toString(2);
            if(checkValue.length==3)
            {
             if(checkValue[0]==1)
             {
                 mainData.push(count);     
            }        
 
                }
        else if(checkValue.length==4){
            if(checkValue[1]==1)
             {
              mainData.push(count);
                }           
                }
                else if(checkValue.length==5){
                    if(checkValue[2]==1)
                     {
                      mainData.push(count);
                        }           
                        }
           count++;      
            if(count===32)
            {
                break;
            }
        }
        count=0;
        for(var k=0;k<Math.ceil(mainData.length/3);k++)
        {
            for(var i=0;i<3;i++)
            {
                if(count<=mainData.length-1)
                {
                    colm+=`
                <td>${mainData[count]}</td>
                `;
                count++;
                }
            }
            row+=`
            <tr>${colm}</tr>
            `;
            colm="";
        }
    box3.innerHTML=`
    <table class="table-borderless table-hover w-100">${row}</table>
    `;
}
function box4Data(){
    var count=0;
    var checkValue;
    var mainData=[];
    var row="";
    var colm="";
        for(var j=0;j<=32;j++)
        {
            checkValue=count.toString(2);
            if(checkValue.length==2)
            {
             if(checkValue[0]==1)
             {
                 mainData.push(count);     
            }        
 
                }
        else if(checkValue.length==3){
            if(checkValue[1]==1)
             {
              mainData.push(count);
                }           
                }
                else if(checkValue.length==4){
                    if(checkValue[2]==1)
                     {
                      mainData.push(count);
                        }           
                        }
                else if(checkValue.length==5){
                    if(checkValue[3]==1)
                     {
                      mainData.push(count);
                        }           
                        }
           count++;      
            if(count===32)
            {
                break;
            }
        }
        count=0;
        for(var k=0;k<Math.ceil(mainData.length/3);k++)
        {
            for(var i=0;i<3;i++)
            {
                if(count<=mainData.length-1)
                {
                    colm+=`
                <td>${mainData[count]}</td>
                `;
                count++;
                }
            }
            row+=`
            <tr>${colm}</tr>
            `;
            colm="";
        }
    box4.innerHTML=`
    <table class="table-borderless table-hover w-100">${row}</table>
    `;
}
function box5Data(){
    var count=0;
    var checkValue;
    var mainData=[];
    var row="";
    var colm="";
        for(var j=0;j<=32;j++)
        {
            checkValue=count.toString(2);
            if(checkValue.length==1)
            {
             if(checkValue[0]==1)
             {
                 mainData.push(count);     
            }        
 
                }
        else if(checkValue.length==2){
            if(checkValue[1]==1)
             {
              mainData.push(count);
                }           
                }
                else if(checkValue.length==3){
                    if(checkValue[2]==1)
                     {
                      mainData.push(count);
                        }           
                        }
                else if(checkValue.length==4){
                    if(checkValue[3]==1)
                     {
                      mainData.push(count);
                        }           
                        }
                else if(checkValue.length==5){
                    if(checkValue[4]==1)
                     {
                      mainData.push(count);
                        }           
                        }
           count++;      
            if(count===32)
            {
                break;
            }
        }
        count=0;
        for(var k=0;k<Math.ceil(mainData.length/3);k++)
        {
            for(var i=0;i<3;i++)
            {
                if(count<=mainData.length-1)
                {
                    colm+=`
                <td>${mainData[count]}</td>
                `;
                count++;
                }
            }
            row+=`
            <tr>${colm}</tr>
            `;
            colm="";
        }
    box5.innerHTML=`
    <table class="table-borderless table-hover w-100">${row}</table>
    `;
}
button1.onclick=function(){
    var checkBoxValue=0;
    if(check1.checked===true)
    {
        checkBoxValue+=10000;
    }
    if(check2.checked===true)
    {
        checkBoxValue+=1000;
    }
    if(check3.checked===true)
    {
        checkBoxValue+=100;
    }
    if(check4.checked===true)
    {
        checkBoxValue+=10;
    }
    if(check5.checked===true)
    {
        checkBoxValue+=1;
    }
    if(checkBoxValue==0)
    {
        alert("Select a box first");
    }
    else{
        result.innerHTML=parseInt(checkBoxValue,2);
    }
};
button2.onclick=function(){
    check1.checked=false;
    check2.checked=false;
    check3.checked=false;
    check4.checked=false;
    check5.checked=false;
    result.innerHTML="";
}