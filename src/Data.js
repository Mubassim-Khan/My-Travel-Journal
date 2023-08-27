const data =  [
    {
        id: 1,
        title: "Nanaga Parbat",
        location: "Gilgit Baltistan, Pakistan",
        googleMapsLink: "https://goo.gl/maps/5HNdkHXhyXxXMebP6",
        date: {
            startDate: "9 Jan, 2021",
            endDate: "22 Jan, 2021"
        },
        description: "Nanga Parbat, known locally as Killer Mountain, is the 9th-highest mountain on Earth, its summit at 8,126 m above sea level.",
        imgURL: "https://cdn.britannica.com/23/120923-050-8FF29907/Nanga-Parbat.jpg?w=300"
    },
    {
        id: 2,
        title: "Times Square",
        location: "New York, USA",
        googleMapsLink: "https://goo.gl/maps/mDhdSXqLGrPdYTBL8",
        date: {
            startDate: "20 Dec, 2022",
            endDate: "1 Jan, 2023"
        },
        description: "Times Square is a major commercial intersection, tourist destination, entertainment hub, and neighborhood in Midtown Manhattan, New York City,",
        imgURL: "https://cdn.britannica.com/62/221362-050-9A84D34D/New-York-City-Times-Square-2015.jpg?w=600&q=60"
    },
    {
        id: 3,
        title: "Colosseum",
        location: "Rome, Italy",
        googleMapsLink: "https://goo.gl/maps/8DDmKQ3Q13wuv7yUA",
        date: {
            startDate: "16 Jun, 2021",
            endDate: "20 Jun, 2021"
        },
        description: "Rome Colosseum is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age.",
        imgURL: "https://cdn.mos.cms.futurecdn.net/BiNbcY5fXy9Lra47jqHKGK-970-80.jpg"
    },
    {
        id: 4,
        title: "Sydeny Opera House",
        location: "Sydeny, Australia",
        googleMapsLink: "https://goo.gl/maps/nmaNWXCdCKNPeAVN8",
        date: {
            startDate: "27 May, 2021",
            endDate: "8 Jun, 2021"
        },
        description: "Sydney Opera House is widely regarded as one of the world's most famous, distinctive buildings and a masterpiece of 20th-century architecture.",
        imgURL: "https://www.tripsavvy.com/thmb/gzMU2si2V__Ho-UPrD7Xp0ugJNs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/OperaHouse-755d893182dc4811b608eb1a99792fd7.jpg"
    },
    {
        id: 5,
        title: "World Trade Center",
        location: "Manhattan, New York, USA",
        googleMapsLink: "https://goo.gl/maps/D64FBNDRE72tu5sa9",
        date: {
            startDate: "9 Sep, 2001",
            endDate: "9 Sep, 2001"
        },
        description: "The original World Trade Center was a large complex of seven buildings in the Financial District of Lower Manhattan in New York City.",
        imgURL: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSfWzLxZhvpe3zcd4W2zeVBRSpoPcWMrdrPG_nHhHdS0JJNi3bo9zQX8zYpY7Q7VmXh"
    },
    {
        id: 6,
        title: "Burj Khalifa",
        location: "Dubai, UAE",
        googleMapsLink: "https://goo.gl/maps/vRANVYXmnaXaRFa26",
        date: {
            startDate: "25 Oct, 2022",
            endDate: "30 Oct, 2022"
        },
        description: "The Burj Khalifa is a skyscraper in Dubai, United Arab Emirates. It is the world's tallest building.",
        imgURL: "https://c4.wallpaperflare.com/wallpaper/560/38/439/burj-khalifa-tower-dubai-burj-khalifa-wallpaper-preview.jpg"
    },
    {
        id: 7,
        title: "K2",
        location: "Gilgit Baltistan, Pakistan",
        googleMapsLink: "https://goo.gl/maps/n3Neoa9Ayrcxf7Xh9",
        date: {
            startDate: "16 Mar, 2018",
            endDate: "1 Apr, 2018"
        },
        description: "K2, at 8,611 metres above sea level, is the second-highest mountain on Earth, after Mount Everest at 8,849 metres.",
        imgURL: "https://i.natgeofe.com/n/84aa9df7-cc94-433d-9ed2-764278d56a7e/002_gettyimages-151422254.jpg?w=1260&h=841"
    },
    {
        id: 8,
        title: "Great Pyramid of Giza",
        location: "Al Giza Desert, Egypt",
        googleMapsLink: "https://goo.gl/maps/eRyy9sNLg5yNzfr39",
        date: {
            startDate: "22 July, 2020",
            endDate: "25 July, 2020"
        },
        description: "The Great Pyramid of Giza is the largest Egyptian pyramid and served as the tomb of pharaoh Khufu, who ruled during the Fourth Dynasty of the Old Kingdom.",
        imgURL: "https://www.wendywutours.co.uk/resource/upload/2137/giza-ban.jpg"
    },
    {
        id: 9,
        title: "Great Barrier Reef",
        location: "Queensland, Australia",
        googleMapsLink: "https://goo.gl/maps/JwQxqasZxUcoj7S47",
        date: {
            startDate: "29 Apr, 2021",
            endDate: "3 May, 2021"
        },
        description: "The Great Barrier Reef is the world's largest coral reef system, composed of over 2,900 individual reefs and 900 islands.",
        imgURL: "https://www2.gbrmpa.gov.au/sites/default/files/2022-06/Commonwealth%20of%20Australia%20%28Reef%20Authority%29%20Johnny%20Gaskell-2A%20%281%20of%201%29.jpg"
    },
    {
        id: 10,
        title: "Eiffel Tower",
        location: "Paris, France",
        googleMapsLink: "https://goo.gl/maps/TBDUFKNjr14ybYPw8",
        date: {
            startDate: "19 Jun, 2021",
            endDate: "29 Jun, 2021"
        },
        description: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. Constructed from 1887, it is named after the engineer Gustave Eiffel, whose company designed and built the tower. ",
        imgURL: "https://assets.editorial.aetnd.com/uploads/2011/06/gettyimages-142198198.jpg?width=1920&height=960&crop=1920%3A960%2Csmart&quality=75"
    },
    {
        id: 11,
        title: "Hagia Sophia",
        location: "Istanbul, Türkiye",
        googleMapsLink: "https://goo.gl/maps/2LHbu5TQQWiKH1Tm9",
        date: {
            startDate: "22 Nov, 2020",
            endDate: "30 Nov, 2020"
        },
        description: " Hagia Sophia Mosque, is a mosque and a major cultural and historical site in Istanbul, Turkey. The last of three church buildings to be successively erected on the site by the Eastern Roman Empire, it was completed in 537 AD. ",
        imgURL: "https://images.memphistours.com/large/beb822487e575b5e43001d647d37bf16.jpg"
    },
    {
        id: 12,
        title: "Cloud Gate",
        location: "Chicago, USA",
        googleMapsLink: "https://goo.gl/maps/Xb4kYGBmTzfZzQwt6",
        date: {
            startDate: "9 May, 2019",
            endDate: "11 May, 2019"
        },
        description: "Cloud Gate is a public sculpture, that is the centerpiece of AT&T Plaza at Millennium Park in the Loop community area of Chicago, Illinois.",
        imgURL: "https://images.squarespace-cdn.com/content/v1/54ae5ba2e4b07edb5954e3b8/1639212732893-2T3EI4TL795NA8E1OHNZ/_Y7A0888.jpg"
    }
]

export default data;