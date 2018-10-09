// ---------------Question 1-----------//

    function PrintInt(n){
        for(var i=1;i<=n;i++){

            console.log(i);
        }

    }

    PrintInt(10);

//------------------Question 2------ with For loop//

    function PrintRev(n){
        for(var i=n;i>=1;i--){

            console.log(i);
        }

    }
    PrintRev(9);

    //--------------Question 2------ with While loop//
   
   function PrintRev(n){
       var i=n;
       while(i>=1){
           
        console.log(i);
        i--;
       }
   }
   PrintRev(9);


   //-------------Question 3---------------//

   
  function CheckInput(x){

    if(typeof x==='number')
    {
     return "number";
    }
    else if(typeof x==='string'){
     return "string";
    }
    else if(typeof x==='boolean'){
     return "boolean";
    }
    else{
     return -1;

    }
}
        
CheckInput('5');


//---------------Question 4-------------//

function SimpleEvenAdding(n){
    var sum=0;
    for(var i=1;i<=n;i++){
        if (i%2==0){
            sum=sum+i;
            
        }
    }
    console.log(sum);
}

 SimpleEvenAdding(12);



 //---------------Question 5-------------//

 function letterCapitalize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {

        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }

    return splitStr.join(' '); 
 }
 
 document.write(letterCapitalize("hi! my name is Yassine"));


  //---------------Question 6-------------//

  function simpleReverse(s){
    return s.split('').reverse().join('');
  }

  document.write(simpleReverse('Yassine Likes JavaScript '));

 //---------------Question 7-------------//

 function findDiff(arr){
    var min=arr[0];
    var max=arr[0];
    
    
    for (var i=0;i<arr.length;i++){
    
        if (arr[i]<min){
            min=arr[i];
    
        }else if(arr[i]>max){
            max=arr[i];
           
        }   
    }
    var diff=max-min;
        console.log(diff);
    }
     var arry=[12,4,8,1,5];
     findDiff(arry);


//---------------Question 8-------------//

function timeConvert(n){
      
   var m=n%60;
   var h=(n-m)/60;

   console.log(h+':'+m);
   }

   timeConvert(130);

//---------------Question 9-------------//

function findStr(str,long){
    var n=0;
    for(var i=0;i<=long.length - str.length;i++){
        if (long.slice(i, i+str.length)===str){
            n++;
        }
    }
    return n;
    
}
console.log(findStr("ha","hahahihohahaha"));

//---------------Question 10-------------//

function selfDividingNumbers(left, right) {
    var selfDiv = [], result;
    for(left; left < right +1; left++) {
    for(var i=0; i<left.toString().length; i++) {
    if(left % left.toString().charAt(i) === 0 && left.toString().charAt(i) !== 0 ) {
    result = true;
    }
    else {
    result = false;
    break;
    }
    }
    if(result == true)
    selfDiv.push(left);
    }
    return selfDiv;
    }
    
    console.log(selfDividingNumbers(12,21))

//---------------Question 11-------------//

function moveZeros(nums){
    var result=[];
    var counter=0;
    for(var i=0;i<nums.length;i++){

        if(nums[i]===0){
            counter++;

        }else{
            result.push(nums[i]);
        }

    }

    while(counter>0){
        result.push(0);
        counter--;
    }
    return result;

}
console.log(moveZeros([1,3,5,0,6,0,4,0,2,0,5]));

//---------------Question 12-------------//

function average(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum += arr[i];

    }
    return sum/ arr.length;


}
console.log(average([4,6,8,2,5]));
