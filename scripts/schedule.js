function update_schedule_color() {
    const months = {
        "Jan": 00,
        "Feb": 01,
        "Mar": 02,
        "March": 02,
        "Apr": 03,
        "April": 03,
        "May": 04,
        "Jun": 05,
        "June": 05,
        "Jul": 06,
        'July': 06,
        'Aug': 07,
        'Sep': 08,
        'Sept': 08,
        'Oct': 09,
        'Nov': 10,
        'Dec': 11
    };

    const table = document.getElementById("course-schedule")

    table
        .querySelector("tbody")
        .querySelectorAll("tr")
        .forEach(row => {
            current_date = new Date();
            year = current_date.getFullYear();

            var end_week = row.querySelectorAll("td")[1].innerText.split("~")[1];
            end_week = end_week.trim();
            end_week = new Date(year, monthIndex = months[end_week.split(" ")[0]], parseInt(end_week.split(" ")[1]));

            if (current_date > end_week) {
                row.style.backgroundColor = "#ffeeed";
                row.nextElementSibling.style.backgroundColor = "#cdf7e0";
            }
        });

}

controller_functions.schedule = update_schedule_color;
