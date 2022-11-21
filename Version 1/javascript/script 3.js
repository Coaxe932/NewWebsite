// Permit Fee Checker with limited number of entries //




let enter = false;
let saved_password = 'flagpole';
do {
    var EnterPassword = prompt("Please Enter your Password")
    if (EnterPassword === saved_password)
        alert("Correct Password")
    else
        window.location="../index.html"
        break;
       

}
while (EnterPassword != saved_password)



//Button Stuff-----------------------------------------------

function alertBtn_1(){
    alert ("This is Orange Counties Permit Fees");
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

            let material = prompt('Does this job include material? Y/N');
            let hydrants = prompt('How many hydrants are on the job?');
            hydrantsarray.push(hydrants);
            console.log(hydrantsarray);
            if (material == "N") {
                for (let i = 3; i > 0; i--) {
                    let jobvaluation = prompt('Enter Job Valuation');
                    let adjustedamount = jobvaluation * 3.5;

                    if (adjustedamount <= 1000) {
                        permitfee = (50 + 50 * hydrants)
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee'));   
                        

                    } else if (adjustedamount <= 2000) {
                        permitfee = (58 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee'));                     

                    } else if (adjustedamount <= 3000) {
                        permitfee = (66 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee'));                      

                    } else if (adjustedamount <= 4000) {
                        permitfee = (74 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee'));                 

                    } else if (adjustedamount <= 5000) {
                        permitfee = (82 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee'));     
                    

                    } else if (adjustedamount <= 6000) {
                        permitfee = (90 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee'));     
                 

                    } else if (adjustedamount <= 7000) {
                        permitfee = (98 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee'));      

                 

                    } else if (adjustedamount <= 8000) {
                        permitfee = (106 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 9000) {
                        permitfee = (114 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 10000) {
                        permitfee = (122 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 
                        

                    } else if (adjustedamount <= 11000) {
                        permitfee = (130 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 12000) {
                        permitfee = (138 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 13000) {
                        permitfee = (146 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 14000) {
                        permitfee = (154 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 15000) {
                        permitfee = (162 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 16000) {
                        permitfee = (170 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 17000) {
                        permitfee = (186 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 18000) {
                        permitfee = (194 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 19000) {
                        permitfee = (202 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 20000) {
                        permitfee = (210 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 21000) {
                        permitfee = (218 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 22000) {
                        permitfee = (226 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 23000) {
                        permitfee = (234 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 24000) {
                        permitfee = (242 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 25000) {
                        permitfee = (249.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 26000) {
                        permitfee = (257 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 27000) {
                        permitfee = (264.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 28000) {
                        permitfee = (272 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 29000) {
                        permitfee = (279.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount > 29000) {
                        let bigamount = (((((adjustedamount - 100000) / 1000) * 7) + 804.5) + (50 * hydrants));
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
                    let adjustedamount = jobvaluation * 1;

                    if (adjustedamount <= 1000) {
                        permitfee = (50 + 50 * hydrants)
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 2000) {
                        permitfee = (58 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 3000) {
                        permitfee = (66 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 4000) {
                        permitfee = (74 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 5000) {
                        permitfee = (82 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 6000) {
                        permitfee = (90 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 7000) {
                        permitfee = (98 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 8000) {
                        permitfee = (106 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 9000) {
                        permitfee = (114 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 10000) {
                        permitfee = (122 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 11000) {
                        permitfee = (130 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 12000) {
                        permitfee = (138 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 13000) {
                        permitfee = (146 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 14000) {
                        permitfee = (154 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 15000) {
                        permitfee = (162 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 16000) {
                        permitfee = (170 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 17000) {
                        permitfee = (186 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 18000) {
                        permitfee = (194 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 19000) {
                        permitfee = (202 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 20000) {
                        permitfee = (210 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 21000) {
                        permitfee = (218 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 22000) {
                        permitfee = (226 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 23000) {
                        permitfee = (234 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 24000) {
                        permitfee = (242 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 25000) {
                        permitfee = (249.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 26000) {
                        permitfee = (257 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 27000) {
                        permitfee = (264.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 28000) {
                        permitfee = (272 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount <= 29000) {
                        permitfee = (279.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 

                    } else if (adjustedamount > 29000) {
                        let bigamount = (((((adjustedamount - 100000) / 1000) * 7) + 804.5) + (50 * hydrants));
                        alert('Permit Fee for City of Orlando will be ' + bigamount);
                        municipality.active = true;
                        console.log(municipality.active);
                        localStorage.setItem('PermitFee',permitfee);
                        JSON.parse(localStorage.getItem('permitfee')); 
                    }break;
                }

                
            }
        
}

function alertBtn_2(){
    alert ("This is City of Orlando Permit Fees");
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

            let material = prompt('Does this job include material? Y/N');
            let hydrants = prompt('How many hydrants are on the job?');
            hydrantsarray.push(hydrants);
            console.log(hydrantsarray);
            if (material == "N") {
                for (let i = 3; i > 0; i--) {
                    let jobvaluation = prompt('Enter Job Valuation');
                    let adjustedamount = jobvaluation * 3.5;

                    if (adjustedamount <= 1000) {
                        permitfee = (50 + 50 * hydrants)
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        

                    } else if (adjustedamount <= 2000) {
                        permitfee = (58 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                   

                    } else if (adjustedamount <= 3000) {
                        permitfee = (66 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        

                    } else if (adjustedamount <= 4000) {
                        permitfee = (74 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
               

                    } else if (adjustedamount <= 5000) {
                        permitfee = (82 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                    

                    } else if (adjustedamount <= 6000) {
                        permitfee = (90 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                 

                    } else if (adjustedamount <= 7000) {
                        permitfee = (98 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                 

                    } else if (adjustedamount <= 8000) {
                        permitfee = (106 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                 

                    } else if (adjustedamount <= 9000) {
                        permitfee = (114 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                    

                    } else if (adjustedamount <= 10000) {
                        permitfee = (122 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        

                    } else if (adjustedamount <= 11000) {
                        permitfee = (130 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 12000) {
                        permitfee = (138 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 13000) {
                        permitfee = (146 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 14000) {
                        permitfee = (154 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 15000) {
                        permitfee = (162 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 16000) {
                        permitfee = (170 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 17000) {
                        permitfee = (186 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 18000) {
                        permitfee = (194 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 19000) {
                        permitfee = (202 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 20000) {
                        permitfee = (210 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 21000) {
                        permitfee = (218 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 22000) {
                        permitfee = (226 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 23000) {
                        permitfee = (234 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 24000) {
                        permitfee = (242 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 25000) {
                        permitfee = (249.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 26000) {
                        permitfee = (257 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 27000) {
                        permitfee = (264.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 28000) {
                        permitfee = (272 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 29000) {
                        permitfee = (279.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount > 29000) {
                        let bigamount = (((((adjustedamount - 100000) / 1000) * 7) + 804.5) + (50 * hydrants));
                        alert('Permit Fee for City of Orlando will be ' + bigamount);
                        municipality.active = true;
                        console.log(municipality.active);
                    }break;
                }

               
            } else if (material == 'Y') {
                for (let i = 3; i > 0; i--) {
                    let jobvaluation = prompt('Enter Job Valuation');
                    let adjustedamount = jobvaluation * 1;

                    if (adjustedamount <= 1000) {
                        permitfee = (50 + 50 * hydrants)
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 2000) {
                        permitfee = (58 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 3000) {
                        permitfee = (66 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 4000) {
                        permitfee = (74 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 5000) {
                        permitfee = (82 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 6000) {
                        permitfee = (90 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 7000) {
                        permitfee = (98 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 8000) {
                        permitfee = (106 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 9000) {
                        permitfee = (114 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 10000) {
                        permitfee = (122 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 11000) {
                        permitfee = (130 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 12000) {
                        permitfee = (138 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 13000) {
                        permitfee = (146 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 14000) {
                        permitfee = (154 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 15000) {
                        permitfee = (162 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 16000) {
                        permitfee = (170 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 17000) {
                        permitfee = (186 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 18000) {
                        permitfee = (194 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 19000) {
                        permitfee = (202 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 20000) {
                        permitfee = (210 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 21000) {
                        permitfee = (218 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 22000) {
                        permitfee = (226 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 23000) {
                        permitfee = (234 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 24000) {
                        permitfee = (242 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 25000) {
                        permitfee = (249.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 26000) {
                        permitfee = (257 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 27000) {
                        permitfee = (264.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 28000) {
                        permitfee = (272 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 29000) {
                        permitfee = (279.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount > 29000) {
                        let bigamount = (((((adjustedamount - 100000) / 1000) * 7) + 804.5) + (50 * hydrants));
                        alert('Permit Fee for City of Orlando will be ' + bigamount);
                        municipality.active = true;
                        console.log(municipality.active);
                    }break;
                }

                
            }
        
}

function alertBtn_3(){
    alert ("This is Brevard County Permit Fees");
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

            let material = prompt('Does this job include material? Y/N');
            let hydrants = prompt('How many hydrants are on the job?');
            hydrantsarray.push(hydrants);
            console.log(hydrantsarray);
            if (material == "N") {
                for (let i = 3; i > 0; i--) {
                    let jobvaluation = prompt('Enter Job Valuation');
                    let adjustedamount = jobvaluation * 3.5;

                    if (adjustedamount <= 1000) {
                        permitfee = (50 + 50 * hydrants)
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        

                    } else if (adjustedamount <= 2000) {
                        permitfee = (58 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                   

                    } else if (adjustedamount <= 3000) {
                        permitfee = (66 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        

                    } else if (adjustedamount <= 4000) {
                        permitfee = (74 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
               

                    } else if (adjustedamount <= 5000) {
                        permitfee = (82 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                    

                    } else if (adjustedamount <= 6000) {
                        permitfee = (90 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                 

                    } else if (adjustedamount <= 7000) {
                        permitfee = (98 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                 

                    } else if (adjustedamount <= 8000) {
                        permitfee = (106 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                 

                    } else if (adjustedamount <= 9000) {
                        permitfee = (114 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                    

                    } else if (adjustedamount <= 10000) {
                        permitfee = (122 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);
                        

                    } else if (adjustedamount <= 11000) {
                        permitfee = (130 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 12000) {
                        permitfee = (138 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 13000) {
                        permitfee = (146 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 14000) {
                        permitfee = (154 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 15000) {
                        permitfee = (162 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 16000) {
                        permitfee = (170 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 17000) {
                        permitfee = (186 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 18000) {
                        permitfee = (194 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 19000) {
                        permitfee = (202 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 20000) {
                        permitfee = (210 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 21000) {
                        permitfee = (218 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 22000) {
                        permitfee = (226 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 23000) {
                        permitfee = (234 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 24000) {
                        permitfee = (242 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 25000) {
                        permitfee = (249.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 26000) {
                        permitfee = (257 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 27000) {
                        permitfee = (264.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 28000) {
                        permitfee = (272 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 29000) {
                        permitfee = (279.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount > 29000) {
                        let bigamount = (((((adjustedamount - 100000) / 1000) * 7) + 804.5) + (50 * hydrants));
                        alert('Permit Fee for City of Orlando will be ' + bigamount);
                        municipality.active = true;
                        console.log(municipality.active);
                    }break;
                }

               
            } else if (material == 'Y') {
                for (let i = 3; i > 0; i--) {
                    let jobvaluation = prompt('Enter Job Valuation');
                    let adjustedamount = jobvaluation * 1;

                    if (adjustedamount <= 1000) {
                        permitfee = (50 + 50 * hydrants)
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 2000) {
                        permitfee = (58 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 3000) {
                        permitfee = (66 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 4000) {
                        permitfee = (74 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 5000) {
                        permitfee = (82 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 6000) {
                        permitfee = (90 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 7000) {
                        permitfee = (98 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 8000) {
                        permitfee = (106 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 9000) {
                        permitfee = (114 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 10000) {
                        permitfee = (122 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 11000) {
                        permitfee = (130 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 12000) {
                        permitfee = (138 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 13000) {
                        permitfee = (146 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 14000) {
                        permitfee = (154 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 15000) {
                        permitfee = (162 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 16000) {
                        permitfee = (170 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 17000) {
                        permitfee = (186 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 18000) {
                        permitfee = (194 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 19000) {
                        permitfee = (202 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 20000) {
                        permitfee = (210 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 21000) {
                        permitfee = (218 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 22000) {
                        permitfee = (226 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 23000) {
                        permitfee = (234 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 24000) {
                        permitfee = (242 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 25000) {
                        permitfee = (249.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 26000) {
                        permitfee = (257 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 27000) {
                        permitfee = (264.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 28000) {
                        permitfee = (272 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount <= 29000) {
                        permitfee = (279.50 + (50 * hydrants))
                        alert('Permit Fee for City of Orlando will be ' + permitfee);
                        municipality.active = true;
                        console.log(municipality.active);

                    } else if (adjustedamount > 29000) {
                        let bigamount = (((((adjustedamount - 100000) / 1000) * 7) + 804.5) + (50 * hydrants));
                        alert('Permit Fee for City of Orlando will be ' + bigamount);
                        municipality.active = true;
                        console.log(municipality.active);
                    }break;
                }

                
            }
        
}






