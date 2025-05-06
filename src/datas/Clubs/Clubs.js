export const clubsData = {
    handsOfHope: {
        frontImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop",
        title: "Hands of Hope",
        logo: "image/Clubs/HandsOfHope/logo.png", // Added logo path
        description: "We are excited to introduce Hands of Hope, a dedicated service project club committed to uplifting and empowering our community. Through small acts of kindness, compassion, and service, we strive to make a meaningful impact and spread hope to those in need.\n\nAt Hands of Hope, we believe that every effort, no matter how small, contributes to a brighter and a better future for all. By working together, we can create lasting changes and inspire others to join us in our mission of hope and service.",
        
        mission: {
            title: "Our Mission",
            subheading: "What We Aim For",
            description: "We aim to foster a spirit of giving, support those in need, and build a community where kindness and compassion thrives.",
            goals: [
                "Empower individuals through service and outreach programs.",
                "Spread hope by addressing pressing social issues.",
                "Inspire positive change through volunteerism and advocacy."
            ],
            image: "https://images.unsplash.com/photo-1559024020-08916aceefe5?q=80&w=800&auto=format&fit=crop",
            caption: "Making a difference\nOne act at a time"
        },
        
        charterPresident: {
            title: "Meet Our Charter President",
            name: "Shishir Kunwar",
            description: "We are proud to have Shishir Kunwar as the Charter President of Hands of Hope. His leadership, vision, and dedication to community service drive our club's mission forward, inspiring all members to contribute to a better world.",
            position: "Charter President, Hands of Hope",
            image: "image/Clubs/HandsOfHope/IMG_4305.CR2"  // Update with the correct path
        },
        
        joinUs: {
            title: "Join Us",
            subheading: "Be a Part of the Change",
            description: "Be a part of this movement and help us bring hope to every corner of our society. Whether through volunteering, supporting our initiatives, or simply spreading kindness, your involvement can make a real difference!",
            image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop",
            caption: "Together, we can be the Hands\nof Hope that our community needs!"
        },
        
        callToAction: {
            title: "Be a part of the change!",
            description: "Join us today and help make our community a better place through acts of kindness and service. Your contribution will make a real difference in the lives of many.",
            buttonText: "Contact Us"
        }
    },
    techTitans: {
        frontImage: "/image/Clubs/techTitans/front.JPG",
        title: "Tech Titans",
            logo: "/image/Clubs/techTitans/techTitans.jpg", // Added logo path
        description: "We are Tech Titans — a powerhouse of curious minds and creative spirits, united by our passion for technology. Our club isn't just about learning code or designing graphics; it's about building a community where ideas come alive, where innovation is a shared adventure, and where anyone, from beginner to expert, feels at home.\n\nAt Tech Titans, we turn curiosity into skills, and skills into solutions. We believe technology is not just for the few — it's for everyone. Our workshops, challenges, and projects are crafted to spark innovation and empower every member.",
        
        mission: {
            title: "What Drives Us",
            subheading: "Our Core Values",
            description: "We believe technology is not just for the few — it's for everyone. Our workshops, challenges, and projects are crafted to spark innovation and empower every member.",
            goals: [
                "Curiosity - Asking questions that lead to innovation",
                "Hands-on Learning - Learning by doing and creating",
                "Collaboration - Working together to solve complex problems",
                "Impact - Using technology to make a difference in our community"
            ],
            image: "/image/Clubs/techTitans/teamFinest.JPG  ",  
            caption: "Turning Passion into Purpose\nOne line of code at a time"
        },
        
        charterPresident: {
            title: "Meet Our Leader",
            name: "Swapnil Shrestha",
            description: "With visionary leadership from our Club President, Swapnil Shrestha, Tech Titans continues to push boundaries. His dedication to empowering learners and creators alike drives the club forward, ensuring we stay at the forefront of tech innovation.",
            position: "Club President, Tech Titans",
            image: "image/Clubs/TechTitans/swapnil.jpg"  // Update with the correct path when available
        },
        
        joinUs: {
            title: "Become a Titan Today!",
            subheading: "Why Join Us?",
            description: "Because you're more than just a participant — you're a creator of the future. Whether you're exploring tech for the first time or you're ready to lead a project, Tech Titans gives you the platform to grow, share, and lead.",
            image: "/image/Clubs/techTitans/hackathon (20).JPG",  // Update with the correct path when available
            caption: "Every great tech innovator started with\na spark of curiosity — let's ignite yours."
        },
        
        callToAction: {
            title: "Join the movement!",
            description: "Be part of a club where your ideas take flight and your skills build the future. Tech Titans Club — Where Tech Meets Impact.",
            buttonText: "Contact Us"
        }
    },
    
    // You can add more clubs here in the future with the same structure
    // environmentalClub: { ... },
    // sportsClub: { ... },
    // etc.
};

// Export a function to get a specific club by ID
export const getClubById = (clubId) => {
    return clubsData[clubId] || null;
};

// Export a function to get all clubs
export const getAllClubs = () => {
    return Object.keys(clubsData).map(key => ({
        id: key,
        title: clubsData[key].title,
        description: clubsData[key].description.substring(0, 150) + '...',
        frontImage: clubsData[key].frontImage
    }));
};
