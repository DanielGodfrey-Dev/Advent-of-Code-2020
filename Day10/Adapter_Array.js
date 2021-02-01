function joltageDifferences(array) {

    //establish 1-jolt counts and 3-jolt counts
    let oneJoltCount = 0;
    let threeJoltCount = 0;
    
    //order our data
    let data = array.sort((a, b) => (a - b));
    let plug = 0;
    
    //iterate over the array
    for (let i = 0; i < data.length; i++) {
      let adapter = data[i];
    
      //look at first adapter within 3-jolts
      if (plug <= adapter <= 3) {
        //if 1 or 3 jolt diff, then increment corresponding counts
    
        if (adapter - plug === 1) oneJoltCount++;
        if (adapter - plug === 3) threeJoltCount++;
        
        //plug it in
        plug = adapter;
    
        //continue until end of data
      }
    }
    
    //return 1-jolt counts multiplied by 3-jolt counts
    //(last plug always adds three)
    threeJoltCount++;
    return ((oneJoltCount * threeJoltCount));
    }
    
    
    const dataSet = [
    56,139,42,28,3,87,142,57,147,6,117,95,2,112,107,54,146,104,40,26,136,127,111,47,8,24,13,92,18,130,141,37,81,148,31,62,50,80,91,33,77,1,96,100,9,120,27,97,60,102,25,83,55,118,19,113,49,133,14,119,88,124,110,145,65,21,7,74,72,61,103,20,41,53,32,44,10,34,121,114,67,69,66,82,101,68,84,48,73,17,43,140
    ]
    
    console.log(`our magic number is...${joltageDifferences(dataSet)}!`);
    // console.log(dataSet);