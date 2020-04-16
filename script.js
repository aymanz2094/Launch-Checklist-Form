// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(
      function(response) {
        let destination = response.json();

        destination.then(function(json) {
          let container = document.getElementById("missionTarget");

          for (mission of json) {
            let missionHTML = `<h2>Mission Destination</h2>
          <ol>
             <li>Name: ${mission.name}</li> 
             <li>Diameter: ${mission.diameter}</li>
             <li>Star: ${mission.star}</li>
             <li>Distance from Earth: ${mission.distance}</li>
             <li>Number of Moons: ${mission.moons}</li>
          </ol>
          <img src= "${mission.image}"></img>
          `;
            container.innerHTML = missionHTML;
          }
        });
      }
    );
   });
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if ((pilotName.value === '')|| (copilotName.value === '')||(fuelLevel.value === '') || (cargoMass.value === '')) {
         alert("All fields are required!");
         event.preventDefault();
      } else if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false) {
         alert("Please enter a name for pilot name and Co-pilot Name");
         event.preventDefault();
      } else if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
         alert("Please enter a numeric value for fuel level and cargo mass");
         event.preventDefault();
      } else {
         document.getElementById("pilotStatus").innerHTML = "Pilot " + pilotName.value + " Ready!";
         document.getElementById("copilotStatus").innerHTML = "Co-pilot " + copilotName.value + " Ready!";
         if (fuelLevel.value <= 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch!";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("fuelStatus").innerHTML = "Fuel too low for takeoff!";
         } else {
            document.getElementById("fuelStatus").innerHTML = "Fuel level is ready for takeoff!";
         }
         if (cargoMass.value >= 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch!";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for takeoff!";
         } else {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass is low enough for takeoff!";
         }
         if (cargoMass.value <= 10000 && fuelLevel.value >= 10000) {
            document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch!";
            document.getElementById("launchStatus").style.color = "green";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch!";
            document.getElementById("faultyItems").style.visibility = "hidden";
         }
         event.preventDefault();
      }
   });
//       let pilotName = document.querySelector("input[name=pilotName]");
//       let copilotName = document.querySelector("input[name=copilotName]");
//       let fuelLevel = document.querySelector("input[name=fuelLevel]");
//       let cargoMass = document.querySelector("input[name=cargoMass]");

//       let pilotStatus = document.querySelector("#pilotStatus");
//       let copilotStatus = document.querySelector("#copilotStatus");
//       let fuelStatus = document.querySelector("#fuelStatus");
//       let cargoStatus = document.querySelector("#cargoStatus");
         
//       let faultyItems = document.querySelector("#faultyItems")
//       let launchStatus = document.querySelector("#launchStatus");
         
//       let missionTartget = document.querySelector("#missionTarget");
//          // console.log(copilotName.value)
//          // The pilot and co-pilot names should be strings and the fuel level and cargo mass should be numbers.
//          if(!pilotName.value | !copilotName.value | !fuelLevel.value | !cargoMass.value) {
//             window.alert("All fields are required!")

//          } else if ( !isNaN(pilotName.value) | !isNaN(copilotName.value)){
//             window.alert("Please enter numeric value.");
//          };
      
         
//          pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
//         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
//         launchStatus.innerHTML = "Shuttle is ready for launch";
//         launchStatus.style.color = "green";
//         faultyItems.style.visibility = "hidden"; 

//       //   user submits a fuel level that is too low (less than 10,000 liters)
//       if (fuelLevel.value < 10000) {
//          fuelStatus.innerHTML = "Fuel level too low for launch";
//          launchStatus.innerHTML = "Shuttle not ready for launch";
//          launchStatus.style.color = "red";
//         faultyItems.style.visibility = "visible";
//       } else {
//          fuelStatus.innerHTML = "Fuel level high enough for launch!";
//      }
//       // user submits a cargo mass that is too large (more than 10,000 kilograms)
//       if (cargoMass > 10000) {
//          cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
//          launchStatus.innerHTML = "Shuttle not ready for launch";
//          launchStatus.style.color = "red";
//          } else {
//          cargoStatus.innerHTML = "Cargo mass low enough for launch!";
//      }  
 
// });

// });
/* This block of code shows how to format the HTML once you fetch some planetary JSON!*/
