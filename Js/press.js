window.addEventListener('DOMContentLoaded',function() {

    // console.log("hello");
    console.log("hello world");

    let array = [{ title: `Discovery’s newest<br> property in Kaua’i North<br> Shore Preserve`, description: `Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings.` },
    { title: `James Island<br> Discovery's Newest Property`, description: `Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada.` },
    { title: `CostaTerra<br> Discovery's 23rdproperty`, description: `Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe.` },
    { title: `Troubadour To Open<br> Golf Course Fall 2019`, description: `Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall.` }];


      // fromm array declared above in .js file         
    let title = document.querySelector('.title');
    let description = document.querySelector('.description');
   
    //taken from .html file where we have declared a left-right button to link it with .js file
    let count=0;

    title.innerHTML= array[count].title;
    description.innerHTML = array[count].description;
    
    let previous = document.querySelector('#leftbutton');
    let next = document.querySelector('#rightbutton');

    previous.addEventListener('click',function(){

        if (count == 0) {
            count = array.length - 1;
        }
        else if (count > 0) {
            count = count - 1;
        }

        title.innerHTML= array[count].title;
        description.innerHTML = array[count].description;
       
    })
    next.addEventListener('click', function(){

        if (count < 4) {
            count = count + 1;
            console.log(count);
            if(count==4){
                count=0;
            }
        
        }
        title.innerHTML=array[count].title;
        description.innerHTML = array[count].description;
    })

    let array1 = [{t1: ` Interview with Michael Meldman`, d1: ` Golf Today ` },
    { t2: ` Golf Real Estate Roars Back as <br>Vacation Homes Boom in Pandemic `, d2: ` Bloomberg | September, 2021 ` },
    { t3: ` Brexit drives British millionaires to <br>Portugal for tax and EU perks - but <br>it's about to get complicated `, d3: ` Telegraph UK |  August 20, 2021 ` },
    { t4: ` This Property Company Ups the Ante <br>with Luxury and Sustainability `, d4: ` Sunset Magazine | August 13 2021 ` },
    { t5: ` Where Sun, Sand and Splendor Are<br> Still to Be Discovered `, d5: ` New York Times | June 9, 2021 ` },
    { t6: ` Mike Meldman is one of the most<br> influential real-estate moguls in the <br>country thanks to his luxurious live-in<br>resorts, which became irresistible to<br> the rich and famous during the pandemic `, d6: ` Business Insider | June 4, 2021 ` },
    { t7: ` There's a real buy-in for resort <br>communities offering amusement and<br> amenities `, d7: ` Luxury Magazine | Spring/Summer, 2021 ` },
    { t8: ` This Blue chip Caribbean Island<br> Hopes to Dethrone St. Barts `, d8: ` New York Post | April 5, 2021 ` }];

    // fromm array declared above in .js file         
    let t1 = document.querySelector('.t1');
    let t2 = document.querySelector('.t2');
    let t3 = document.querySelector('.t3');
    let t4 = document.querySelector('.t4');
    let t5 = document.querySelector('.t5');
    let t6 = document.querySelector('.t6');
    let t7 = document.querySelector('.t7');
    let t8 = document.querySelector('.t8');

    let d1 = document.querySelector('.d1');
    let d2 = document.querySelector('.d2');
    let d3 = document.querySelector('.d3');
    let d4 = document.querySelector('.d4');
    let d5 = document.querySelector('.d5');
    let d6 = document.querySelector('.d6');
    let d7 = document.querySelector('.d7');
    let d8 = document.querySelector('.d8');

    //taken from .html file where we have declared a left-right button to link it with .js file
    const count1=0;
        t1.innerHTML = array1[0].t1;
        d1.innerHTML = array1[0].d1;

        t2.innerHTML = array1[1].t2;
        d2.innerHTML = array1[1].d2;

        t3.innerHTML = array1[2].t3;
        d3.innerHTML = array1[2].d3;

        t4.innerHTML = array1[3].t4;
        d4.innerHTML = array1[3].d4;

        t5.innerHTML = array1[4].t5;
        d5.innerHTML = array1[4].d5;

        t6.innerHTML = array1[5].t6
        d6.innerHTML = array1[5].d6

        t7.innerHTML = array1[6].t7
        d7.innerHTML = array1[6].d7

        t8.innerHTML = array1[7].t8
        d8.innerHTML = array1[7].d8

    let previous1 = document.querySelector('#leftbutton1');
    let next1 = document.querySelector('#rightbutton1');

    previous1.addEventListener('click', function() {

        if (count1 == 0) {
            count1 = array1.length - 1;
        }
        else if (count1 > 0) {
            count1 = count1 - 1;
        }


        t1.innerHTML = array1[0].t1;
        d1.innerHTML = array1[0].d1;

        t2.innerHTML = array1[1].t2;
        d2.innerHTML = array1[1].d2;

        t3.innerHTML = array1[2].t3;
        d3.innerHTML = array1[2].d3;

        t4.innerHTML = array1[3].t4;
        d4.innerHTML = array1[3].d4;

        t5.innerHTML = array1[4].t5;
        d5.innerHTML = array1[4].d5;

        t6.innerHTML = array1[5].t6
        d6.innerHTML = array1[5].d6

        t7.innerHTML = array1[6].t7
        d7.innerHTML = array1[6].d7

        t8.innerHTML = array1[7].t8
        d8.innerHTML = array1[7].d8
    })

    next1.addEventListener('click', function() {
       

        if (count1 < 7) {
            count1 = count1 + 1;
            console.log(count1);
            if(count1==7){
                count1=0;
            }
        
        }

        t1.innerHTML = array1[0].t1;
        d1.innerHTML = array1[0].d1;

        t2.innerHTML = array1[1].t2;
        d2.innerHTML = array1[1].d2;

        t3.innerHTML = array1[2].t3;
        d3.innerHTML = array1[2].d3;

        t4.innerHTML = array1[3].t4;
        d4.innerHTML = array1[3].d4;

        t5.innerHTML = array1[4].t5;
        d5.innerHTML = array1[4].d5;

        t6.innerHTML = array1[5].t6
        d6.innerHTML = array1[5].d6

        t7.innerHTML = array1[6].t7
        d7.innerHTML = array1[6].d7

        t8.innerHTML = array1[7].t8
        d8.innerHTML = array1[7].d8

    })


})