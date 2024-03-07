// fetch("https://alfa-leetcode-api.onrender.com/RuikangLin")
//     .then(res => res.json())
//     .then((json) => {
//         let str = "";
//         str += JSON.stringify(json);
//         document.getElementById("stats-leetcode").innerHTML = str;
//     });
// fetch("https://leetcode-stats-api.herokuapp.com/RuikangLin")
//     .then(res => res.json())
//     .then((json) => {
//         let str = "";
//         str += json["ranking"];
//         document.getElementById("stats-leetcode").innerHTML = str;
//     });

fetch(`https://leetcode.com/graphql?query=query{matchedUser(username:%20%22RuikangLin%22)%20{%20userCalendar%20{%20activeYears%20streak%20totalActiveDays%20dccBadges%20{%20timestamp%20badge%20{%20name%20icon%20}%20}%20submissionCalendar%20}}}`)
    .then(res => res.json())
    .then((json) => {
        let str = "";
        str += JSON.stringify(json);
        document.getElementById("stats-leetcode").innerHTML = str;
    });