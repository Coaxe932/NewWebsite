// Permit Fee Checker with limited number of entries //




// let enter = false;
// let saved_password = 'flagpole';
// do {
//     var EnterPassword = prompt("Please Enter your Password")
//     if (EnterPassword === saved_password)
//         alert("Correct Password")
//     else
//         window.location="../index.html"
//         break;
       

// }
// while (EnterPassword != saved_password)



//-------------------------------Button Stuff-----------------------------------------------//

function alertBtn_1(){
    alert ("This is City of Orlando Permit Fees");
    document.getElementsByClassName("tablinks")[0].style.backgroundColor = "green";
    const municipality_1 = {
        name: 'City of Orlando',
        typical_authority: 'OUC',
        permit_rating: 'Easy',
        data: {
            hydrants: '$50 EA',
            inspections: '$150 EA',
            resubmit: '$150 EA',
        }
    }
    function municipality(name, permit_rating, data){
        this.name = name;
        this.permit_rating = permit_rating;
        this.data = data;
        this.talk = function (){
            console.log('This is ' + this.name);
        }
    }


    hydrantsarray = [];
    buildingsarray = [];

            let material = prompt('Does this job include material? Y/N');
            let hydrants = prompt('How many hydrants are on the job?');
            let buildings = prompt('How many buildings are on the job?');
            hydrantsarray.push(hydrants);
            buildingsarray.push(buildings);
            console.log(hydrantsarray);
            if (material == "N") {
                for (let i = 3; i > 0; i--) {
                    let jobvaluation = prompt('Enter Job Valuation');
                    let adjustedamount = (jobvaluation * 3.5)/buildings;

                    if (adjustedamount <= 1000) {
                        permitfee = (50*buildings)+(50*hydrants); 
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee'));   
                        

                    } else if (adjustedamount <= 2000) {
                        permitfee = (58*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee'));                     

                    } else if (adjustedamount <= 3000) {
                        permitfee = (66*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee'));                      

                    } else if (adjustedamount <= 4000) {
                        permitfee = (74*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee'));                 

                    } else if (adjustedamount <= 5000) {
                        permitfee = (82*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee'));     
                    

                    } else if (adjustedamount <= 6000) {
                        permitfee = (90*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee'));     
                 

                    } else if (adjustedamount <= 7000) {
                        permitfee = (98*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee'));      

                    } else if (adjustedamount <= 8000) {
                        permitfee = (106*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 9000) {
                        permitfee = (114*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 10000) {
                        permitfee = (122*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 
                        

                    } else if (adjustedamount <= 11000) {
                        permitfee = (130*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 12000) {
                        permitfee = (138*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 13000) {
                        permitfee = (146*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 14000) {
                        permitfee = (154*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 15000) {
                        permitfee = (162*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 16000) {
                        permitfee = (170*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 17000) {
                        permitfee = (186*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 18000) {
                        permitfee = (194*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 19000) {
                        permitfee = (202*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 20000) {
                        permitfee = (210*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 21000) {
                        permitfee = (218*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 22000) {
                        permitfee = (226*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 23000) {
                        permitfee = (234*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 24000) {
                        permitfee = (242*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 25000) {
                        permitfee = (249.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 26000) {
                        permitfee = (257*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 27000) {
                        permitfee = (264.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 28000) {
                        permitfee = (272*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 29000) {
                        permitfee = (279.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 30000) {
                        permitfee = (287*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 31000) {
                        permitfee = (294.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 32000) {
                        permitfee = (302*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 33000) {
                        permitfee = (309.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 34000) {
                        permitfee = (317*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 35000) {
                        permitfee = (324.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 36000) {
                        permitfee = (332*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 37000) {
                        permitfee = (339.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 38000) {
                        permitfee = (347*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 39000) {
                        permitfee = (354.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 40000) {
                        permitfee = (362*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 41000) {
                        permitfee = (369.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 42000) {
                        permitfee = (377*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 43000) {
                        permitfee = (384.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 44000) {
                        permitfee = (392*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 45000) {
                        permitfee = (399.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 46000) {
                        permitfee = (407*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 47000) {
                        permitfee = (414.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 48000) {
                        permitfee = (422*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 49000) {
                        permitfee = (429.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 50000) {
                        permitfee = (437*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 51000) {
                        permitfee = (444.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 52000) {
                        permitfee = (452*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 53000) {
                        permitfee = (459.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 54000) {
                        permitfee = (467*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 55000) {
                        permitfee = (474.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                        

                    } else if (adjustedamount <= 56000) {
                        permitfee = (482*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

        
                    }
                     else if (adjustedamount > 56000) {
                        let bigamount = (((((adjustedamount - 100000) / 1000) * 7) + 804.5)*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + bigamount);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 
                    }break;
                }

               
            } else if (material == 'Y') {
                for (let i = 3; i > 0; i--) {
                    let jobvaluation = prompt('Enter Job Valuation');
                    let adjustedamount = (jobvaluation)/buildings;

                    if (adjustedamount <= 1000) {
                        permitfee = (50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 2000) {
                        permitfee = (58*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 3000) {
                        permitfee = (66*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 4000) {
                        permitfee = (74*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 5000) {
                        permitfee = (82*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 6000) {
                        permitfee = (90*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 7000) {
                        permitfee = (98*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 8000) {
                        permitfee = (106*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 9000) {
                        permitfee = (114*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 10000) {
                        permitfee = (122*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 11000) {
                        permitfee = (130*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 12000) {
                        permitfee = (138*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 13000) {
                        permitfee = (146*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 14000) {
                        permitfee = (154*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 15000) {
                        permitfee = (162*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 16000) {
                        permitfee = (170*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 17000) {
                        permitfee = (186*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 18000) {
                        permitfee = (194*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 19000) {
                        permitfee = (202*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 20000) {
                        permitfee = (210*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 21000) {
                        permitfee = (218*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 22000) {
                        permitfee = (226*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 23000) {
                        permitfee = (234*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 24000) {
                        permitfee = (242*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 25000) {
                        permitfee = (249.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 26000) {
                        permitfee = (257*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 27000) {
                        permitfee = (264.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 28000) {
                        permitfee = (272*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 29000) {
                        permitfee = (279.50*buildings)+(50*hydrants);
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount > 29000) {
                        let bigamount = (((((adjustedamount - 100000) / 1000) * 7) + 804.5)*buildings)+(50*hydrants);;
                        alert('Permit Fee for City of Orlando will be ' + bigamount);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 
                    }break;
                }

                
            }
        
}
onclick=this.style.backgroundColor='green';


function alertBtn_2(){
    alert ("Will be available Soon!");
}

function alertBtn_3(){
    alert ("Will be available Soon!");
}






