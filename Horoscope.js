const form = document.querySelector("#horoscopeForm");

const birthdayInput = document.querySelector("#birthday");

const zodiacSign = document.querySelector("#zodiacSign");

const horoscopeText = document.querySelector("#horoscope");

const result = document.querySelector("#result");


form.addEventListener("submit", getHoroscope);


function getHoroscope(event) {

    event.preventDefault();


    const birthday = birthdayInput.value;


    if (birthday === "") {

        zodiacSign.innerText = "Please enter your birthday.";

        horoscopeText.innerText = "";

        result.style.display = "block";

        return;
    }


    const date = new Date(birthday);

    const month = date.getUTCMonth() + 1;

    const day = date.getUTCDate();


    let sign = "";

    let horoscope = "";


    // Capricorn
    if (
        (month === 12 && day >= 22) ||
        (month === 1 && day <= 19)
    ) {

        sign = "♑ Capricorn";

        horoscope =
            "Your determination will take you further than you expect today. Stay focused on your goals and trust the progress you are making.";
    }


    // Aquarius
    else if (
        (month === 1 && day >= 20) ||
        (month === 2 && day <= 18)
    ) {

        sign = "♒ Aquarius";

        horoscope =
            "Your creativity is especially strong today. Don't be afraid to approach a problem differently or share an unusual idea.";
    }


    // Pisces
    else if (
        (month === 2 && day >= 19) ||
        (month === 3 && day <= 20)
    ) {

        sign = "♓ Pisces";

        horoscope =
            "Trust your intuition today. Your instincts may guide you toward an opportunity that you weren't expecting.";
    }


    // Aries
    else if (
        (month === 3 && day >= 21) ||
        (month === 4 && day <= 19)
    ) {

        sign = "♈ Aries";

        horoscope =
            "Your energy is high today. Use it to start something you've been putting off, but remember to think before you act.";
    }


    // Taurus
    else if (
        (month === 4 && day >= 20) ||
        (month === 5 && day <= 20)
    ) {

        sign = "♉ Taurus";

        horoscope =
            "Patience will work in your favor today. Something you've been waiting for may finally begin moving in the right direction.";
    }


    // Gemini
    else if (
        (month === 5 && day >= 21) ||
        (month === 6 && day <= 20)
    ) {

        sign = "♊ Gemini";

        horoscope =
            "A conversation could bring you new information today. Keep an open mind and don't be afraid to ask questions.";
    }


    // Cancer
    else if (
        (month === 6 && day >= 21) ||
        (month === 7 && day <= 22)
    ) {

        sign = "♋ Cancer";

        horoscope =
            "Pay attention to the people closest to you today. Someone may appreciate your support more than you realize.";
    }


    // Leo
    else if (
        (month === 7 && day >= 23) ||
        (month === 8 && day <= 22)
    ) {

        sign = "♌ Leo";

        horoscope =
            "Your confidence will attract attention today. Let yourself shine, but remember that listening to others can be just as powerful.";
    }


    // Virgo
    else if (
        (month === 8 && day >= 23) ||
        (month === 9 && day <= 22)
    ) {

        sign = "♍ Virgo";

        horoscope =
            "Today is a great day to organize your thoughts and priorities. Small improvements could make a surprisingly big difference.";
    }


    // Libra
    else if (
        (month === 9 && day >= 23) ||
        (month === 10 && day <= 22)
    ) {

        sign = "♎ Libra";

        horoscope =
            "Balance is important today. Give yourself time for responsibilities, but don't forget to make room for something you enjoy.";
    }


    // Scorpio
    else if (
        (month === 10 && day >= 23) ||
        (month === 11 && day <= 21)
    ) {

        sign = "♏ Scorpio";

        horoscope =
            "Your focus is powerful today. Put that energy toward something meaningful instead of worrying about things outside your control.";
    }


    // Sagittarius
    else if (
        (month === 11 && day >= 22) ||
        (month === 12 && day <= 21)
    ) {

        sign = "♐ Sagittarius";

        horoscope =
            "Adventure may be calling you today. Try something different, learn something new, or take a small step outside your normal routine.";
    }


    zodiacSign.innerText = sign;

    horoscopeText.innerText = horoscope;

    result.style.display = "block";

}