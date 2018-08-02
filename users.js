users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]
  

function userLanguages(arr){
    var sentence1="";
    var sentence2="";
    for(var i=0;i<arr.length;i++){
        sentence1=arr[i].fname + " " + arr[i].lname + " knows ";
        for(var x=0;x<arr[i].languages.length;x++){
            sentence1=sentence1 + " " + arr[i].languages[x];
            if((x+1)<arr[i].languages.length){
                sentence1=sentence1 + ",";
            }
            else{
                sentence1=sentence1 + ".";
            }
        }
        sentence2=arr[i].fname + " is also interested in ";
        for(var key in arr[i].interests){
            for(var y=0;y<arr[i].interests[key].length;y++){
                sentence2=sentence2 + " " + arr[i].interests[key][y];
                if((y+1)<arr[i].interests[key].length){
                    sentence2=sentence2 + ",";
                }
                else{
                    sentence2=sentence2 + ".";
                }
            }
        }

        console.log(sentence1);
        console.log(sentence2);
    }
}

userLanguages(users);