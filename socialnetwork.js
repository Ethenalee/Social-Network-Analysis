var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};


var _ = require('underscore');


//List everyone and for each of them, list the names of who they follow and who follows them
//
function followWho(dataa) {
  for (list in dataa) {
    var lists = [];
    for (var i = 0; i < dataa[list].follows.length; i++) {
        lists.push(dataa[dataa[list].follows[i]].name);
    }
    dataa[list].followwhoI = lists
  }
}
followWho(data);

function followedback (dataa) {
  for (list in dataa) {
    for (var i = 0; i < Object.keys(dataa).length; i ++) {
      if(dataa[list].follows.includes(Object.keys(dataa)[i])) {
        if (data[Object.keys(dataa)[i]].followback) {
          dataa[Object.keys(dataa)[i]].followback.push(dataa[list].name);
        }
        else {
          data[Object.keys(dataa)[i]].followback = [dataa[list].name];
        }
      }
    }
  }
}
followedback(data);

function printList(dataa) {
  for (list in dataa) {
    var lists = "";
      for (var i = 0; i < dataa[list].followwhoI.length; i++) {
        if (i === 0) {
          lists = dataa[list].name + " follows " + dataa[list].followwhoI[i];
        }
        else {
          lists += ", " + dataa[list].followwhoI[i];
        }
      }
      for (var j = 0; j < dataa[list].followback.length; j++) {
          if(j === 0) {
            lists += " and " + dataa[list].followback[j];
          }
          else {
            lists += ", " + dataa[list].followback[j];
          }
      }
    console.log(lists + " follow back");
  }
}
printList(data);

// Identify who follows the most people


function followMost(dataa) {
    var most = _.max(dataa, function(dataa){return dataa.follows.length});
  console.log(most.name, 'follows most people');
}
followMost(data);



//Identify who has the most followers



