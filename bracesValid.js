function bracesValid(str){
    var brackets=[];
    for(var i=0;i<str.length;i++){;
      if(str[i]=="(" || str[i]=="[" || str[i]=="{"){
        brackets.push(str[i]);
      }
      else if(str[i]==")" || str[i]=="]" || str[i]=="}"){
        if(brackets.length==0){
          return false;
        }
        else{
          var open=brackets.pop();
          if(open=="("){
            if(str[i]!=")"){
              return false;
            }
          }
          else if(open=="["){
            if(str[i]!="]"){
              return false;
            }
          }
          else if(open=="{"){
            if(str[i]!="}"){
              return false;
            }
          }
        }
      }
    }
    if(brackets.length>0){
      return false;
    }
    else{
      return true;
    }
  }
  
  console.log(bracesValid("{{()}}[]"));
  console.log(bracesValid("{{()}}["));
  console.log(bracesValid("{{()}}"));
  console.log(bracesValid("{(})"));
  console.log(bracesValid("{a{a(s)d}f}gga"));