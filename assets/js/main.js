const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        formMessage.classList.remove(
            "d-none",
            "alert-success",
            "alert-danger"
        );

        if (!name || !email || !subject || !message) {
            formMessage.classList.add("alert-danger");
            formMessage.textContent =
                "يرجى تعبئة جميع الحقول المطلوبة.";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.classList.add("alert-danger");
            formMessage.textContent =
                "يرجى إدخال بريد إلكتروني صحيح.";
            return;
        }

        formMessage.classList.add("alert-success");
        formMessage.textContent =
            "شكراً لك! تم التحقق من بياناتك بنجاح.";

        contactForm.reset();
    });
}

const events = {
    programming: {
        title: "يوم المبرمجين",
        image: "assets/img/programming2.jpg",
        date: "10/11/2026",
        location: "الحرم الجامعي",
        description: "تحدَّ مهاراتك، تعاون مع ألمع العقول، وابنِ حلولاً برمجية مبتكرة تصنع الفارق."
    },

    art: {
        title: "المعرض الفني",
        image: "assets/img/art2.jpg",
        date: "18/11/2026",
        location: "القاعة الرئيسية",
        description: "حيث تلتقي ريشة الإبداع بشغف المنافسة؛ شاركنا رؤيتك الفنية واطمح للأفضل."
    },

    culture: {
        title: "اللقاء الثقافي",
        image: "assets/img/culture2.jpg",
        date: "1/12/2026",
        location: "المكتبة الجامعية",
        description: "رحلة في أروقة الثقافة والفكر، حيث تتلاقى الأفكار الملهمة وتتجسد الحوارات البناءة."
    },

    sport: {
        title: "اليوم الرياضي الجامعي",
        image: "assets/img/sport2.jpg",
        date: "12/12/2026",
        location: "الملعب الجامعي",
        description: "روح رياضية، إصرارٌ بلا حدود، وتحدٍّ يحدد من هو البطل الحقيقي."
    }
};

const eventTitle = document.getElementById("eventTitle");


if (eventTitle) {
    const events = {
        programming: {
            title: "يوم المبرمجين",
            image: "assets/img/programming2.jpg",
            date: "10/11/2026",
            location: "الحرم الجامعي",
            description: "تحدَّ مهاراتك، تعاون مع ألمع العقول، وابنِ حلولاً برمجية مبتكرة تصنع الفارق."
        },

        art: {
            title: "المعرض الفني",
            image: "assets/img/art2.jpg",
            date: "18/11/2026",
            location: "القاعة الرئيسية",
            description: "حيث تلتقي ريشة الإبداع بشغف المنافسة؛ شاركنا رؤيتك الفنية واطمح للأفضل."
        },

        culture: {
            title: "اللقاء الثقافي",
            image: "assets/img/culture2.jpg",
            date: "1/12/2026",
            location: "المكتبة الجامعية",
            description: "رحلة في أروقة الثقافة والفكر، حيث تتلاقى الأفكار الملهمة وتتجسد الحوارات البناءة."
        },

        sport: {
            title: "اليوم الرياضي الجامعي",
            image: "assets/img/sport2.jpg",
            date: "12/12/2026",
            location: "الملعب الجامعي",
            description: "روح رياضية، إصرارٌ بلا حدود، وتحدٍّ يحدد من هو البطل الحقيقي."
        }
    };

    const params = new URLSearchParams(window.location.search);
    const selectedId = params.get("id") || "programming";
    const selectedEvent = events[selectedId] || events.programming;

    document.getElementById("eventTitle").textContent = selectedEvent.title;

    const eventImage = document.getElementById("eventImage");
    if (eventImage) {
        eventImage.src = selectedEvent.image;
        eventImage.alt = selectedEvent.title;
    }

    const eventDate = document.getElementById("eventDate");
    if (eventDate) {
        eventDate.textContent = selectedEvent.date;
    }

    const eventLocation = document.getElementById("eventLocation");
    if (eventLocation) {
        eventLocation.textContent = selectedEvent.location;
        const mapLocation = document.getElementById("mapLocation");

if (mapLocation) {
    mapLocation.textContent = selectedEvent.location;
}
    }

    const eventDescription = document.getElementById("eventDescription");
    if (eventDescription) {
        eventDescription.textContent = selectedEvent.description;
    }
}

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const locationFilter = document.getElementById("locationFilter");
const dateFilter = document.getElementById("dateFilter");

if (searchInput && categoryFilter && locationFilter && dateFilter) {
    const eventCards = document.querySelectorAll(".event-card");

    function filterEvents() {
        const searchText = searchInput.value.trim().toLowerCase();
        const selectedCategory = categoryFilter.value.trim();
        const selectedLocation = locationFilter.value.trim();
        const selectedDate = dateFilter.value;

        eventCards.forEach(function(card) {
            const titleElement = card.querySelector("h2");
            const paragraphs = card.querySelectorAll("p");

            const title = titleElement
                ? titleElement.textContent.trim().toLowerCase()
                : "";

            const description = paragraphs[0]
                ? paragraphs[0].textContent.trim().toLowerCase()
                : "";

            const category = paragraphs[1]
                ? paragraphs[1].textContent.replace("التصنيف:", "").trim()
                : "";

            const location = paragraphs[2]
                ? paragraphs[2].textContent.replace("المكان:", "").trim()
                : "";

            const matchesSearch =
                title.includes(searchText) ||
                description.includes(searchText);

            const matchesCategory =
                selectedCategory === "" ||
                category === selectedCategory;

            const matchesLocation =
                selectedLocation === "" ||
                location === selectedLocation;

            const cardDate = card.dataset.date || "";

             const matchesDate =
              selectedDate === "" || cardDate === selectedDate;

            if ( matchesSearch && matchesCategory &&  matchesLocation &&    matchesDate ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    }

    searchInput.addEventListener("input", filterEvents);
    categoryFilter.addEventListener("change", filterEvents);
    locationFilter.addEventListener("change", filterEvents);
    dateFilter.addEventListener("change", filterEvents);
    
}

const shareEventButton = document.getElementById("shareEventButton");
const shareMessage = document.getElementById("shareMessage");

if (shareEventButton && shareMessage) {
    shareEventButton.addEventListener("click", async function () {
        const pageUrl = window.location.href;

        try {
            if (navigator.share && window.isSecureContext) {
                await navigator.share({
                    title: document.getElementById("eventTitle")?.textContent || "فعالية جامعية",
                    text: document.getElementById("eventDescription")?.textContent || "",
                    url: pageUrl
                });

                shareMessage.textContent = "تم فتح خيارات مشاركة الفعالية.";
            } else {
                shareMessage.textContent =
                    "لمشاركة الفعالية، انسخ الرابط من شريط العنوان ";
            }
        } catch (error) {
            if (error.name !== "AbortError") {
                shareMessage.textContent =
                    "تعذرت المشاركة. انسخ الرابط من شريط العنوان ";
            }
        }
    });
}

const calendarButton = document.getElementById("calendarButton");
const calendarMessage = document.getElementById("calendarMessage");

if (calendarButton && calendarMessage) {
    calendarButton.addEventListener("click", function () {
        const title = document.getElementById("eventTitle")?.textContent || "فعالية جامعية";
        const description = document.getElementById("eventDescription")?.textContent || "";
        const location = document.getElementById("eventLocation")?.textContent || "";
        const dateText = document.getElementById("eventDate")?.textContent || "";

        const parts = dateText.split("/");
        if (parts.length !== 3) {
            calendarMessage.textContent = "تعذر قراءة تاريخ الفعالية.";
            return;
        }

        const day = parts[0].padStart(2, "0");
        const month = parts[1].padStart(2, "0");
        const year = parts[2];

        const startDate = new Date(`${year}-${month}-${day}T10:00:00`);
        if (Number.isNaN(startDate.getTime())) {
            calendarMessage.textContent = "تاريخ الفعالية غير صالح.";
            return;
        }

        const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);

        function formatDate(date) {
            return date.getFullYear() +
                String(date.getMonth() + 1).padStart(2, "0") +
                String(date.getDate()).padStart(2, "0") + "T" +
                String(date.getHours()).padStart(2, "0") +
                String(date.getMinutes()).padStart(2, "0") + "00";
        }

        function escapeText(text) {
            return text
                .replace(/\\/g, "\\\\")
                .replace(/\n/g, "\\n")
                .replace(/,/g, "\\,")
                .replace(/;/g, "\\;")
                .replace(/,/g, "\\,");
        }

        const calendarContent = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//University Events//AR",
            "BEGIN:VEVENT",
            "DTSTART:" + formatDate(startDate),
            "DTEND:" + formatDate(endDate),
            "SUMMARY:" + escapeText(title),
            "LOCATION:" + escapeText(location),
            "DESCRIPTION:" + escapeText(description),
            "END:VEVENT",
            "END:VCALENDAR"
        ].join("\r\n");

        const file = new Blob([calendarContent], {
            type: "text/calendar;charset=utf-8"
        });

        const fileUrl = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "university-event.ics";
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(fileUrl);

        calendarMessage.textContent =
            "تم اضافة الفعالية للتقويم. افتح الملف الذي تم تنزيله لإضافتها إلى تقويمك.";
    });
}

const relatedEventsContainer = document.getElementById("relatedEvents");

if (relatedEventsContainer && typeof events !== "undefined") {
    const currentEventId = new URLSearchParams(window.location.search).get("id");

    for (const [eventId, event] of Object.entries(events)) {
        if (eventId === currentEventId) {
            continue;
        }

        const eventCard = document.createElement("div");
        eventCard.className = "related-event-card";

        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <h3>${event.title}</h3>
            <p>📅 ${event.date}</p>
            <p>📍 ${event.location}</p>
            <a href="event.html?id=${eventId}">عرض التفاصيل</a>
        `;

        relatedEventsContainer.appendChild(eventCard);
    }
}

const toggleGallery = document.getElementById("toggleGallery");
const photoGallery = document.getElementById("photoGallery");

if (toggleGallery && photoGallery) {
    toggleGallery.addEventListener("click", function () {
        const isHidden = photoGallery.hidden;

        photoGallery.hidden = !isHidden;
        toggleGallery.textContent = isHidden ? "إخفاء الصور" : "عرض الصور";
        toggleGallery.setAttribute("aria-expanded", isHidden ? "true" : "false");
    });
}

// أزرار التصنيفات في الصفحة الرئيسية
const categoryButtons = document.querySelectorAll(".category-button");

categoryButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const category = button.dataset.category;
        window.location.href =
            "events.html?category=" + encodeURIComponent(category);
    });
});

// اختيار التصنيف القادم من الصفحة الرئيسية
const params = new URLSearchParams(window.location.search);
const requestedCategory = params.get("category");

if (categoryFilter && requestedCategory) {
    categoryFilter.value = requestedCategory;
    categoryFilter.dispatchEvent(new Event("change"));
}

/* تشغيل الوضع الداكن */
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    const darkModeButton = document.createElement("button");

    darkModeButton.type = "button";
    darkModeButton.className = "dark-mode-button";
    darkModeButton.setAttribute("aria-pressed", "false");

    navbar.appendChild(darkModeButton);

    function updateDarkMode() {
        const isDark = document.body.classList.contains("dark-mode");

        darkModeButton.textContent = isDark
            ? "☀️ الوضع الفاتح"
            : "🌙 الوضع الداكن";

        darkModeButton.setAttribute("aria-pressed", String(isDark));
    }

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    updateDarkMode();

    darkModeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "darkMode",
            isDark ? "enabled" : "disabled"
        );

        updateDarkMode();
    });
});