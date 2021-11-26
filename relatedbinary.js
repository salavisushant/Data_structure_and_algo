function lowerBound (k,arr) {
    var low = 0;
    var high = arr.length-1;
    var ans = -1;
    while(low <= high) {
        mid = low + (Math.floor((high-low)/2))
        if(arr[mid]==k) {
            ans = mid;
            high = mid-1;
        } else if(arr[mid]>k) {
            high = mid-1;
        } else {
            low = mid+1;
        }
    }
    if(ans==-1) {
        return "-1 -1 0"
    } else{
        var output =[];
        output.push(ans);
        var low = 0;
        var high = arr.length-1;
        var ans = -1;
        while(low <=high) {
            mid = low + (Math.floor((high-low)/2))
            if(arr[mid]==k) {
                ans = mid;
                low=mid+1;
            } else if (arr[mid]<k) {
                low = mid+1;
            } else{
                high = mid-1;
            }
        }
        output.push(ans);
        output.push(output[1]-output[0]+1);
        return output.join(" ");
    }
}

    

function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var k = +input[2];
    console.log(lowerBound (k,arr));
}

if (process.env.USERNAME === "salav") {
runProgram(`6
1 1 1 2 2 2	
1`);
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