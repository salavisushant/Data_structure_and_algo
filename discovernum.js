function discoverNum (n,k,arr){
    var low =0;
    var high = arr.length -1;
   while(low<=high){

       mid = low + (Math.floor((high-low)/2))
       if(arr[mid]==k){
           return true
       }else if(arr[mid]<k){
           low = mid +1
       }else if(arr[mid]>k) {
           high =mid-1;
       }
       
   }
    return false
   
}
function runProgram(input) {
    input = input.trim().split("\n");
    var [n,testcase] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    arr = arr.sort(function(a,b){return(a-b)})
    for(var i = 2; i < testcase+2; i++) {
        if(discoverNum(n,+input[i].trim(),arr)){
            console.log("YES")
        }else{
            console.log("NO")
        }
        
    }
   
}

if (process.env.USERNAME === "salav") {
runProgram(`5 10
50 40 30 20 10
10
20
30
40
50
60
70
80
90
100`);
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0) ;
});
}