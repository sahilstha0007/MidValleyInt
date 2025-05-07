const navbar = [
{
    name: "About",
    href: "/Aboutus",
    hasDropdown: true,
    dropdown: [
        {
            name: "Message",
            href: "/Aboutus/Message"
        },
        {
            name: "Our Partners",
            href: "/Aboutus/Partners"
        },
        {
            name: "Our Team",
            href: "/Aboutus/Team"
        }
    ]
},

{
    name: "Programs",

    hasDropdown: true,
    dropdown: [
        {
            category: "Bachelors Programs",
            items: [
                {
                    name: "Bachelor of Business (BBA-Finance) (Hons)",
                    href: "/BBA",
                    affiliation: "Affiliated to HELP University, Malaysia"
                },
                {
                    name: "Bachelor of Business (BHM) (Hospitality Management) (Hons)",
                    href: "/BHM",
                    affiliation: "Affiliated to HELP University, Malaysia"
                },
                {
                    name: "Bachelor of Information Technology (BIT) (Hons)",
                    href: "/BIT",
                    affiliation: "Affiliated to HELP University, Malaysia"
                }
            ]
        },
        {
            category: "Diploma Programs",
            items: [
                {
                    name: "Diploma in Food Preparation Culinary Arts Level 2",
                    href: "/Diploma/DiplomaInFoodPreparationCulinaryArtsLevel2"
                },
                {
                    name: "Advance Diploma in Culinary Arts and Supervision Level 3",
                    href: "/Diploma/AdvanceDiplomaInCulinaryArtsAndSupervisionLevel3"
                },
                {
                    name: "Diploma in Food Preparation Culinary Arts Patisserie Level 2",
                    href: "/Diploma/DiplomaInFoodPreparationCulinaryArtsPatisserieLevel2"
                },
                {
                    name: "Diploma in Professional Patisserie and Confectionary Level 3",
                    href: "/Diploma/DiplomaInProfessionalPatisserieAndConfectionaryLevel3"
                },
                {
                    name: "IVQ Certificate in Professional Patisserie and Confectionary",
                    href: "/Diploma/IVQCertificateInProfessionalPatisserieAndConfectionary"
                },
                {
                    name: "International Award in Barista Skills",
                    href: "/Diploma/InternationalAwardInBaristaSkills"
                }
            ]
        }
    ]
},
{
    name: "Blog",
    href: "/blog",
    hasDropdown: false
},
{
    name: "Events",
    href: "/gallery&events",
    hasDropdown: false
},
{
    name: "Contact",
    href: "/contact",
    hasDropdown: false
},
{
    name: "Apply",
    href: "/EnquiryForm ",
    image: "/image/MVIClogo.png",
    hasDropdown: false
},
]
export default navbar