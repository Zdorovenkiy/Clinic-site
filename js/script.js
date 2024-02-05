try {
    document.querySelector('form').addEventListener("submit", e => {
        e.preventDefault();

        const data = {
            surname: document.querySelector(".form__surname").value || null,
            name: document.querySelector(".form__name").value || null,
            secondName: document.querySelector(".form__secondName").value || null,
            date: document.querySelector(".form__date").value || null
        }

        let now = new Date();
        let serviceDate = new Date(data.date);
        const currentURL = window.location.href;

        if(currentURL.includes("index2")) {
            data.type = "Мед. справки";
        } else if (currentURL.includes("index3")) {
            data.type = "Вакцинация";
        } else if (currentURL.includes("index4")) {
            data.type = "Анализы";
        } else {
            data.type = "Диагностика";
        }

        if (now > serviceDate) {
            alert("Выберите допустимую дату")
        } else if(!data.surname || !data.name || !data.date) {
            alert("Введите данные");
        } else {
            sendData(data);
        }
    })    
} catch (e) {
    console.log(e);
}


async function sendData(data) {
    const res = await fetch("./../php/index.php", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(data)
    });
    const result = await res.json();

    if (res.status === 201) {
        alert(result.message)
    }   
}

const allBtn = document.querySelectorAll(".header__navigation-btn");
const mainBtn = allBtn[0];
const companyBtn = allBtn[1];
const doctorsBtn = allBtn[2];
const ServicesBtn = allBtn[3];
const main = document.querySelector(".main");
const about = document.querySelector(".about");
const employee = document.querySelector(".employee");
const services = document.querySelector(".services");

try {
    mainBtn.addEventListener('click', () => {
        main.scrollIntoView({block: "center", behavior: "smooth"});
    });
    companyBtn.addEventListener('click', () => {
        about.scrollIntoView({block: "center", behavior: "smooth"});
    });
    doctorsBtn.addEventListener('click', () => {
        employee.scrollIntoView({block: "start", behavior: "smooth"});
    });
    ServicesBtn.addEventListener('click', () => {
        services.scrollIntoView({block: "center", behavior: "smooth"});
  });
} catch (e) {
  console.log(e)
}
