const card_1 = document.getElementById("card_1");
const card_2 = document.getElementById("card_2");
const card_3 = document.getElementById("card_3");
const card_4 = document.getElementById("card_4");
const card_5 = document.getElementById("card_5");
const card_6 = document.getElementById("card_6");
const card_7 = document.getElementById("card_7");
const card_8 = document.getElementById("card_8");
const card_9 = document.getElementById("card_9");

const hidden_elements = document.querySelectorAll('.card_container');
const hidden_elements_1 = document.querySelectorAll('.card1');

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const card_1_body = document.getElementById('card_1_body');
const card_2_body = document.getElementById('card_2_body');

const select_id = document.getElementById("select_id");
const Year_built = document.getElementById("Year_built");
const bedrooms = document.getElementById("bedrooms");

const apply_filters = document.getElementById("apply_filters");
const reset_filters = document.getElementById("reset_filters");

const all_cards = [card_1, card_2, card_3, card_4, card_5, card_6, card_7, card_8, card_9];

const card_to_flip = [one, two, three, four, five, six, seven, eight, nine];

const more_info_buttons = document.getElementsByClassName('more_info');
const back_buttons = document.getElementsByClassName('back_button');

[...back_buttons].forEach((each_button, index) => {
    each_button.onclick = function () {
        card_to_flip[index].style.transform = 'rotateY(0deg)';
    }
});


[...more_info_buttons].forEach((each_button, index) => {
    each_button.addEventListener('click', () => {
        card_to_flip[index].style.transform = 'rotateY(180deg)';
    });
});


apply_filters.onclick = function () {

    if ((select_id.value == "between_80L_and_1Cr") && (Year_built.value == 'All') && (bedrooms.value == "All")) {

        warning.classList.add("hide_alert");
        card_3.style.display = 'none';
        card_7.style.display = 'none';
        card_6.style.display = 'none';
        card_5.style.display = 'none';
        const eighty_to_1_crore = [card_1, card_4, card_8, card_2, card_9];

        let i = 0;
        for (i in eighty_to_1_crore) {
            eighty_to_1_crore[i].style.display = 'block';


        }
    }
    else if ((select_id.value == "3Cr_and_above") && (Year_built.value == 'All') && (bedrooms.value == "All")) {
        warning.classList.add("hide_alert");
        const three_crore = [card_1, card_2, card_3, card_4, card_5, card_7, card_8, card_9];
        card_6.style.display = 'block';

        let i = 0;
        for (i in three_crore) {
            three_crore[i].style.display = 'none';


        }
    }

    else if ((select_id.value == "above_1Cr") && (Year_built.value == 'All') && (bedrooms.value == "All")) {
        warning.classList.add("hide_alert");
        const crore_and_above = [card_1, card_2, card_3, card_4, card_8, card_9];
        card_2.style.display = 'block';
        card_5.style.display = 'block';
        card_6.style.display = 'block';
        card_7.style.display = 'block';


        let i = 0;
        for (i in crore_and_above) {
            crore_and_above[i].style.display = 'none';

        }
    }

    else if ((select_id.value == "Between_1Cr_and_25Cr") && (Year_built.value == 'All') && (bedrooms.value == "All")) {
        warning.classList.add("hide_alert");
        const crore_and_above = [card_1, card_2, card_3, card_4, card_8, card_9, card_6];
        card_5.style.display = 'block';
        card_6.style.display = 'block';
        card_7.style.display = 'block';


        let i = 0;
        for (i in crore_and_above) {
            crore_and_above[i].style.display = 'none';

        }
    }


    else if (((select_id.value == "below_70L") && (Year_built.value == 'All') && (bedrooms.value == "All")) || select_id.value == "below_70L" && Year_built.value == "2021"
        && (bedrooms.value == "All" || bedrooms.value == "2")) {
        warning.classList.add("hide_alert");
        const not_sixty_lakh = [card_1, card_2, card_5, card_6, card_7, card_4, card_8, card_9, card_6];
        card_3.style.display = 'block';




        let i = 0;
        for (i in not_sixty_lakh) {
            not_sixty_lakh[i].style.display = 'none';

        }
    }

    // no of bedrooms 

    // for 2 bedrooms in a house

    else if ((select_id.value == "All") && (Year_built.value == 'All') && (bedrooms.value == "2")) {

        const not_two_bed_rooms = [card_1, card_5, card_6, card_7, card_8, card_6];
        warning.classList.add("hide_alert");
        let j = 0;
        for (let j in not_two_bed_rooms) {
            not_two_bed_rooms[j].style.display = 'none';
        }
        const two_bed_rooms = [card_2, card_3, card_4, card_9];

        two_bed_rooms.forEach((e) => {
            e.style.display = 'block';
        })


    }

    else if ((select_id.value == "All") && (Year_built.value == 'All') && (bedrooms.value == "3")) {

        const not_three_bed_rooms = [card_2, card_3, card_4, card_6, card_9];
        warning.classList.add("hide_alert");
        let j = 0;
        for (let j in not_three_bed_rooms) {
            not_three_bed_rooms[j].style.display = 'none';
        }
        const three_bed_rooms = [card_1, card_5, card_7, card_8];

        three_bed_rooms.forEach((e) => {
            e.style.display = 'block';
        })
    }

    // for 4 bedrooms in a house

    else if (((select_id.value == "All" || select_id.value == "3Cr_and_above" || select_id.value == "above_1Cr") && (Year_built.value == 'All' ||
        Year_built.value == "2020") && (bedrooms.value == "4")) || select_id.value == "3Cr_and_above" && (Year_built.value
            == "All" || Year_built.value == "2020") && (bedrooms.value == "4" || bedrooms.value == "All")) {
        warning.classList.add("hide_alert");
        const not_four_bed_rooms = [card_2, card_3, card_4, card_1, card_9, card_5, card_7, card_8];

        let j = 0;
        for (let j in not_four_bed_rooms) {
            not_four_bed_rooms[j].style.display = 'none';

            card_6.style.display = 'block';

        }

    }
    // Year built 

    // houses built in 2019
    else if ((select_id.value == "All") && (Year_built.value == '2019') && (bedrooms.value == "All")) {
        warning.classList.add("hide_alert");
        const not_in_2019 = [card_2, card_3, card_4, card_6, card_9, card_8, card_5];

        let j = 0;
        for (let j in not_in_2019) {
            not_in_2019[j].style.display = 'none';
        }
        const in_2019 = [card_1, card_7];

        in_2019.forEach((e) => {
            e.style.display = 'block';
        })
    }

    // houses built in 2020
    else if ((select_id.value == "All") && (Year_built.value == '2020') && (bedrooms.value == "All")) {
        warning.classList.add("hide_alert");
        const not_in_2020 = [card_1, card_3, card_7, card_8, card_9];

        let j = 0;
        for (let j in not_in_2020) {
            not_in_2020[j].style.display = 'none';
        }
        const in_2020 = [card_2, card_4, card_6, card_5];

        in_2020.forEach((e) => {
            e.style.display = 'block';
        })
    }

    // houses built in 2021
    else if ((select_id.value == "All") && (Year_built.value == '2021') && (bedrooms.value == "All")) {

        const not_in_2021 = [card_1, card_4, card_7, card_2, card_5, card_6];
        warning.classList.add("hide_alert");
        let j = 0;
        for (let j in not_in_2021) {
            not_in_2021[j].style.display = 'none';
        }
        const in_2021 = [card_8, card_9, card_3];

        in_2021.forEach((e) => {
            e.style.display = 'block';
        })
    }


    // more features validation   

    else if (((select_id.value == "between_80L_and_1Cr") && (Year_built.value == '2021') &&
        (bedrooms.value == "3")) || Year_built.value == '2021' && bedrooms.value == "3" && select_id.value == "All") {
        warning.classList.add("hide_alert");
        const not_in_2021 = [card_1, card_4, card_7, card_2, card_5, card_6, card_3, card_9];

        let j = 0;
        for (let j in not_in_2021) {
            not_in_2021[j].style.display = 'none';
        }

        card_8.style.display = 'block';

    }

    // ======================================= 2020 with 2 bedrooms and price between 80L and 1 Crore

    else if (((select_id.value == "All") && (Year_built.value == '2020') &&
        (bedrooms.value == "2")) || Year_built.value == '2020' && bedrooms.value == "2" && select_id.value == "between_80L_and_1Cr") {
        warning.classList.add("hide_alert");
        const not_in_2021 = [card_1, card_8, card_7, card_5, card_6, card_3, card_9];

        let j = 0;
        for (let j in not_in_2021) {
            not_in_2021[j].style.display = 'none';
        }

        card_2.style.display = 'block';
        card_4.style.display = 'block';


    }

    // -------------------------------- 2021 with 2 bedrooms and All 

    else if ((select_id.value == "All") && (Year_built.value == '2021') &&
        (bedrooms.value == "2")) {
        warning.classList.add("hide_alert");
        const not_in_2021 = [card_1, card_8, card_7, card_5, card_6, card_2, card_4];

        let j = 0;
        for (let j in not_in_2021) {
            not_in_2021[j].style.display = 'none';
        }

        card_3.style.display = 'block';
        card_9.style.display = 'block';

    }
    // 2020 and price is above 1 cr

    else if ((select_id.value == "above_1Cr") && (Year_built.value == '2020') &&
        (bedrooms.value == "All")) {
        warning.classList.add("hide_alert");
        const not_in_2021 = [card_1, card_2, card_3, card_4, card_7, card_8, card_9];

        let j = 0;
        for (let j in not_in_2021) {
            not_in_2021[j].style.display = 'none';
        }

        card_5.style.display = 'block';
        card_6.style.display = 'block';

    }

    // 2020 , price = above 1 Cr , 3 bedrooms

    else if ((select_id.value == "above_1Cr") && (Year_built.value == '2020') &&
        (bedrooms.value == "3")) {
        warning.classList.add("hide_alert");
        const not_in_2021 = [card_1, card_2, card_3, card_4, card_7, card_8, card_9, card_6];

        let j = 0;
        for (let j in not_in_2021) {
            not_in_2021[j].style.display = 'none';
        }

        card_5.style.display = 'block';

    }

    // Between 80L and 1cr with 3 bedrooms

    else if ((select_id.value == "between_80L_and_1Cr") && (Year_built.value == 'All') &&
        (bedrooms.value == "3")) {

        warning.classList.add("hide_alert");
        const not_in_2021 = [card_2, card_3, card_4, card_7, card_5, card_9, card_6];

        let j = 0;
        for (let j in not_in_2021) {
            not_in_2021[j].style.display = 'none';
        }

        card_1.style.display = 'block';
        card_8.style.display = 'block';


    }

    // Between 80L and 1cr with 3 bedrooms

    else if ((select_id.value == "between_80L_and_1Cr") && (Year_built.value == 'All') &&
        (bedrooms.value == "2")) {
        warning.classList.add("hide_alert");
        const not_in_2021 = [card_1, card_3, card_7, card_5, card_8, card_6];

        let j = 0;
        for (let j in not_in_2021) {
            not_in_2021[j].style.display = 'none';
        }

        card_2.style.display = 'block';
        card_4.style.display = 'block';
        card_9.style.display = 'block';

    }

    // 3 bedrooms, 80L and 1 CR and year = 2019

    else if (((select_id.value == "between_80L_and_1Cr") && (Year_built.value == '2019') &&
        (bedrooms.value == "3")) || Year_built.value == '2019' && bedrooms.value == "3" && select_id.value == "All") {
        warning.classList.add("hide_alert");
        const not_in_2021 = [card_8, card_4, card_7, card_2, card_5, card_6, card_3, card_9];

        let j = 0;
        for (let j in not_in_2021) {
            not_in_2021[j].style.display = 'none';
        }

        card_1.style.display = 'block';

    }

    // Above 1 cr with 3 bedrooms

    else if ((select_id.value == "above_1Cr") && (Year_built.value == 'All') &&
        (bedrooms.value == "3")) {
        warning.classList.add("hide_alert");
        const not_in_2021 = [card_8, card_4, card_1, card_2, card_6, card_3, card_9];

        let j = 0;
        for (let j in not_in_2021) {
            not_in_2021[j].style.display = 'none';
        }

        card_5.style.display = 'block';
        card_7.style.display = 'block';


    }

    // Above 1 Cr in 2019

    else if ((select_id.value == "above_1Cr") && (Year_built.value == '2019') &&
        (bedrooms.value == "3" || bedrooms.value == "All")) {

        warning.classList.add("hide_alert");
        const not_in_2021 = [card_8, card_4, card_1, card_2, card_6, card_3, card_9, card_5];

        let j = 0;
        for (let j in not_in_2021) {
            not_in_2021[j].style.display = 'none';
        }

        card_7.style.display = 'block';

    }

    // below 70L and 2 bedrooms , even below 70L in 2021 and all of them in one go

    else if ((select_id.value == "below_70L") && (Year_built.value == '2021' || Year_built.value == "All") &&
        (bedrooms.value == "2" || bedrooms.value == "All")) {

        warning.classList.add("hide_alert");
        const not_in_2021 = [card_8, card_4, card_1, card_2, card_6, card_5, card_9, , card_7];

        let j = 0;
        for (let j in not_in_2021) {
            not_in_2021[j].style.display = 'none';
        }

        card_3.style.display = 'block';


    }

    // show all types available

    else if ((select_id.value == "All") && (bedrooms.value == "All") && (Year_built.value == "All")) {
        warning.classList.add("hide_alert");

        let i = 0;
        // card_1.style.display = 'block';
        for (i in all_cards) {
            all_cards[i].style.display = 'block';

        }
    }


    else {

        warning.classList.add("hide_alert");

        // alert("NO such house available");
        warning.classList.remove("hide_alert");

        let i = 0;
        // card_1.style.display = 'block';
        for (i in all_cards) {
            all_cards[i].style.display = 'none';
        }
    }
}


const warning = document.getElementById("warning");

// Reset button for filters 

reset_filters.onclick = function () {
    warning.classList.add("hide_alert");
    let i = 0;
    for (i in all_cards) {
        all_cards[i].style.display = 'block';

    }
}

const buy_button = document.getElementById("buy_button");
const all_buy_buttons = document.getElementsByClassName("buy_button");
