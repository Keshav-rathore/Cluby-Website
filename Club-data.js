// Map categories to colors
export const categoryColors = {
    technology: 'blue',
    art: 'pink',
    sports: 'green',
    environment: 'black',
    default: 'red'
};

const clubs = [
    { 
        id:"tech-club-001",
        name: "Tech Club",
        logo: "/Images/techclub_logo.jpeg",
        bio: "Tech Club, where innovation meets opportunity! Whether you're passionate about coding, AI, robotics, or web development.",
        description: "Tech Club, where innovation meets opportunity! Whether you're passionate about coding, AI, robotics, or web development, we offer hands-on projects, hackathons, and workshops to help you sharpen your skills. Collaborate with like-minded peers, gain mentorship from industry professionals, and build a strong portfolio to kickstart your tech career. Our club fosters creativity and problem-solving, providing members with real-world experience, networking opportunities, and leadership roles. Stay ahead of tech trends, boost your resume, and become a part of a vibrant community driving technological advancement. Join us, and turn your passion into impact!",
        category: "Technology",
        coordinator: "Avneesh Singh",
        teamMembers: [
            {
                name: "Avneesh Singh",
                batch: "22-26",
                profileImage: "/Images/johndoe.jpeg",
                linkedIn: "https://linkedin.com/in/Avneesh",
                email: "avneeshsingjnv@gmail.com"
            },
            {
                name: "Keshav Singh Rathore",
                batch: "22-26",
                profileImage: "/Images/johndoe.jpeg",
                linkedIn: "https://linkedin.com/in/keshav",
                email: "rathorekeshav@gmail.com"
            }
        ],
        achievements: [
            "1st Place in National Robotics Competition",
            "Developed an AI-based app"
        ],
        events: [
            {
                name: "Hackathon 2023",
                image: "/Images/Hackathon.jpeg",
                description: "A 24-hour hackathon where teams compete to create the best software solutions."
            },
            {
                name: "Weekly Coding Workshops",
                image: "/Images/Coding Workshop.jpeg",
                description: "Join us every Friday to learn new coding skills and technologies."
            },
            {
                name: "Robotics Competition",
                image: "/Images/Robotics Competition.jpeg",
                description: "Compete in a series of robotics challenges and win prizes."
            }
        ],
        membershipInfo: "Join Our Club for tech stuffs.",
        socialMedia: [
            { platform: "Facebook", link: "https://facebook.com/techclub", icon: '<i class="fab fa-facebook"></i>' },
            { platform: "Instagram", link: "https://instagram.com/techclub", icon: '<i class="fab fa-instagram"></i>' },
            { platform: "LinkedIn", link: "https://linkedin.com/company/techclub", icon: '<i class="fab fa-linkedin"></i>' },
            { platform: "Website", link: "https://techclub.com", icon: '<i class="fas fa-globe"></i>' }
        ]
    },
    {
        id:"art-club-002",
        name: "Art Club",
        logo: "/Images/Art club.png",
        bio: "Art Club fosters creativity, encouraging members to explore various artistic mediums, including painting, sketching, and digital art.",
        description: "Art Club fosters creativity, encouraging members to explore various artistic mediums, including painting, sketching, and digital art. We host events that challenge artistic boundaries and offer guidance from experienced artists.",
        category: "Art",
        coordinator: "Anika Gulariya",
        teamMembers: [
            {
                name: "Jaspreet singh",
                batch: "21-25",
                profileImage: "/Images/johndoe.jpg",
                linkedIn: "https://linkedin.com/in/johndoe",
                email: "Jaspreet43@gmail.com"
            },
            {
                name: "Anika Gulariya",
                batch: "22-26",
                profileImage: "/Images/janesmith.jpg",
                linkedIn: "https://linkedin.com/in/janesmith",
                email: "Anika@gmail.com"
            }
        ],
        // achievements: [
        //     "1st Place in National Robotics Competition",
        //     "Developed an AI-based app"
        // ],
        events: [
            {
                name: "Painting Competition",
                image: "/Images/Hackathon.jpeg",
                description: "Showcase your painting skills in a campus-wide competition."
            },
            {
                name: "Gallery Art",
                image: "/Images/Coding Workshop.jpeg",
                description: "A regular exhibition of the finest and produced by club members."
            },
            {
                name: "Sketch Making Competition",
                image: "/Images/Robotics Competition.jpeg",
                description: "A contest to celebrate and reward sketching talents."
            }
        ],
        // membershipInfo: "Join Our Club for tech stuffs.",
        socialMedia: [
            { platform: "Facebook", link: "https://facebook.com/Artclub", icon: '<i class="fab fa-facebook"></i>' },
            { platform: "Instagram", link: "https://instagram.com/Artclub", icon: '<i class="fab fa-instagram"></i>' },
            { platform: "LinkedIn", link: "https://linkedin.com/company/Artclub", icon: '<i class="fab fa-linkedin"></i>' },
            { platform: "Website", link: "https://techclub.com", icon: '<i class="fas fa-globe"></i>' }
        ]
    },
    {
        id:"sports-club-003",
        name: "Sports Club",
        logo: "/Images/Sports club.jpeg",
        bio: "Sports Club promotes a healthy lifestyle through a wide range of physical activities. From football to badminton, the club organizes regular tournaments.",
        description: "Sports Club promotes a healthy lifestyle through a wide range of physical activities. From football to badminton, the club organizes regular tournaments and fosters teamwork, discipline, and sportsmanship.",
        category: "Sports",
        coordinator: "Ashish Dogara",
        teamMembers: [
            {
                name: "Ashish Dogara",
                batch: "22-26",
                profileImage: "/Images/johndoe.jpg",
                linkedIn: "https://linkedin.com/in/Ashish",
                email: "Dogra54@gmail.com"
            },
            {
                name: "Bhumika Marwa",
                batch: "22-26",
                profileImage: "/Images/janesmith.jpg",
                linkedIn: "https://linkedin.com/in/Bhumika",
                email: "Bhumika243@gmail.com"
            }
        ],
        // achievements: [
        //     "1st Place in National Robotics Competition",
        //     "Developed an AI-based app"
        // ],
        events: [
            {
                name: "Intercollege Football Competition",
                image: "/Images/Hackathon.jpeg",
                description: "Compete against other colleges in an exciting football tournament."
            },
            {
                name: "Mits Cricket League",
                image: "/Images/Coding Workshop.jpeg",
                description: "A competitive cricket league for students of all skill levels."
            },
            {
                name: "Badmintion League",
                image: "/Images/Robotics Competition.jpeg",
                description: "Test your Badminton skills and win prizes."
            }
        ],
        // membershipInfo: "Join Our Club for tech stuffs.",
        socialMedia: [
            { platform: "Facebook", link: "https://facebook.com/Sportsclub", icon: '<i class="fab fa-facebook"></i>' },
            { platform: "Instagram", link: "https://instagram.com/Sportsclub", icon: '<i class="fab fa-instagram"></i>' },
            { platform: "LinkedIn", link: "https://linkedin.com/company/Sportsclub", icon: '<i class="fab fa-linkedin"></i>' },
            { platform: "Website", link: "https://sportsclub.com", icon: '<i class="fas fa-globe"></i>' }
        ]
    }, 
    {
        id:"music-club-004",
        name: "Music Club",
        logo: "/Images/Music club.jpeg",
        bio: "Music Club is a vibrant community of passionate individuals united by music. Whether you're a seasoned musician,or who appreciates good tunes.",
        description: "Music Club is a vibrant community of passionate individuals united by a shared love for music. Whether you're a seasoned musician, or someone who simply appreciates good tunes, this club offers a welcoming space for everyone to explore and express their musical talents. Our mission is to create an enriching environment that nurtures creativity, collaboration, and learning in all aspects of music.",
        category: "Art",
        coordinator: "Astha Parmar",
        teamMembers: [
            {
                name: "Astha Parmar",
                batch: "22-26",
                profileImage: "/Images/johndoe.jpg",
                linkedIn: "https://linkedin.com/in/Astha",
                email: "parmarjpv@gmail.com"
            },
            {
                name: "Rajani Sharma",
                batch: "22-26",
                profileImage: "/Images/janesmith.jpg",
                linkedIn: "https://linkedin.com/in/Rajjo",
                email: "rajjo453@gmail.com"
            }
        ],
        // achievements: [
        //     "1st Place in National Robotics Competition",
        //     "Developed an AI-based app"
        // ],
        events: [
            {
                name: "Music Night",
                image: "/Images/Hackathon.jpeg",
                description: "A live performance night where musicians showcase their talent."
            },
            {
                name: "Sur taal",
                image: "/Images/Coding Workshop.jpeg",
                description: "A traditional music event that celebrates classical and folk music."
            },
            {
                name: "Labja-Waya",
                image: "/Images/Robotics Competition.jpeg",
                description: "An annual event celebrating contemporary music styles."
            }
        ],
        // membershipInfo: "Join Our Club for tech stuffs.",
        socialMedia: [
            { platform: "Facebook", link: "https://facebook.com/club", icon: '<i class="fab fa-facebook"></i>' },
            { platform: "Instagram", link: "https://instagram.com/techclub", icon: '<i class="fab fa-instagram"></i>' },
            { platform: "LinkedIn", link: "https://linkedin.com/company/techclub", icon: '<i class="fab fa-linkedin"></i>' },
            { platform: "Website", link: "https://techclub.com", icon: '<i class="fas fa-globe"></i>' }
        ]
    }, 
    {
        id:"dance-club-005",
        name: "Dance Club",
        logo: "/Images/techclub_logo.jpeg",
        bio: "Dance Club is a vibrant community of dancers who share a passion for movement and rhythm. Whether you're a trained dancer or a beginner.",
        description: "We focus on robotics, AI, and software development.",
        category: "Art",
        coordinator: "Shreya Gupta",
        teamMembers: [
            {
                name: "Shreya Gupta",
                batch: "22-26",
                profileImage: "/Images/johndoe.jpg",
                linkedIn: "https://linkedin.com/in/johndoe",
                email: "Shreya23@gmail.com"
            },
            {
                name: "Akash Gulariya",
                batch: "22-26",
                profileImage: "/Images/janesmith.jpg",
                linkedIn: "https://linkedin.com/in/janesmith",
                email: "Gulariya934@gmail.com"
            }
        ],
        // achievements: [
        //     "1st Place in National Robotics Competition",
        //     "Developed an AI-based app"
        // ],
        events: [
            {
                name: "Hiphop Dance Competition",
                image: "/Images/Hackathon.jpeg",
                description: "A High-Energy competition showcasing urban dance talent. "
            },
            {
                name: "Classical Dance Competion",
                image: "/Images/Coding Workshop.jpeg",
                description: "A stage to display your skills in traditional dance forms."
            },
            {
                name: "DJ Night",
                image: "/Images/Robotics Competition.jpeg",
                description: "A vibrant event filled with music and dance."
            }
        ],
        // membershipInfo: "Join Our Club for tech stuffs.",
        socialMedia: [
            { platform: "Facebook", link: "https://facebook.com/techclub", icon: '<i class="fab fa-facebook"></i>' },
            { platform: "Instagram", link: "https://instagram.com/techclub", icon: '<i class="fab fa-instagram"></i>' },
            { platform: "LinkedIn", link: "https://linkedin.com/company/techclub", icon: '<i class="fab fa-linkedin"></i>' },
            { platform: "Website", link: "https://techclub.com", icon: '<i class="fas fa-globe"></i>' }
        ]
    },
    {
        id:"coding-club-006",
        name: "Coding Club",
        logo: "/Images/Coding club.jpeg",
        bio: "Coding Club is dedicated to developing problem-solving skills through coding. We provide opportunities to  learn new languages and frameworks.",
        description: "Coding Club is dedicated to developing problem-solving skills through coding. We provide opportunities to work on real-world coding projects, participate in competitive programming, and learn new languages and frameworks.",
        category: "Technology",
        coordinator: "Aryan Singh",
        teamMembers: [
            {
                name: "Aryan Singh",
                batch: "22-26",
                profileImage: "/Images/johndoe.jpg",
                linkedIn: "https://linkedin.com/in/johndoe",
                email: "SinghArya@gmail.com"
            },
            {
                name: "Shrashti Kulshreshta",
                batch: "22-26",
                profileImage: "/Images/janesmith.jpg",
                linkedIn: "https://linkedin.com/in/janesmith",
                email: "kulshrestha@gmail.com"
            }
        ],
        // achievements: [
        //     "1st Place in National Robotics Competition",
        //     "Developed an AI-based app"
        // ],
        events: [
            {
                name: "HackerRank Quest",
                image: "/Images/Hackathon.jpeg",
                description: "A Competitive coding event with a focus on algorithm-based problem solving."
            },
            {
                name: "Weekly Coding Workshops",
                image: "/Images/Coding Workshop.jpeg",
                description: "Regular sessions to enhance coding proficiency and explore new technologies."
            },
            {
                name: "Codingquest",
                image: "/Images/Robotics Competition.jpeg",
                description: "A series of coding challenges, encouraging participants to think outside the box."
            }
        ],
        // membershipInfo: "Join Our Club for tech stuffs.",
        socialMedia: [
            { platform: "Facebook", link: "https://facebook.com/techclub", icon: '<i class="fab fa-facebook"></i>' },
            { platform: "Instagram", link: "https://instagram.com/techclub", icon: '<i class="fab fa-instagram"></i>' },
            { platform: "LinkedIn", link: "https://linkedin.com/company/techclub", icon: '<i class="fab fa-linkedin"></i>' },
            { platform: "Website", link: "https://techclub.com", icon: '<i class="fas fa-globe"></i>' }
        ]
    },
    {
        id:"photography-club-007",
        name: "Photography Club",
        logo: "/Images/photography club.png",
        bio: "Photography Club encourages creativity through the lens. Whether you're a beginner or a seasoned photographer, we provide the perfect environment.",
        description: "Photography Club encourages creativity through the lens. Whether you're a beginner or a seasoned photographer, we provide the perfect environment to improve your photography skills through workshops, photowalks, and contests.",
        category: "Art",
        coordinator: "Yashika",
        teamMembers: [
            {
                name: "Yashika Pandey",
                batch: "22-26",
                profileImage: "/Images/johndoe.jpg",
                linkedIn: "https://linkedin.com/in/johndoe",
                email: "Pandeyji@gmail.com"
            },
            {
                name: "Utkarsh Gangil",
                batch: "22-26",
                profileImage: "/Images/janesmith.jpg",
                linkedIn: "https://linkedin.com/in/janesmith",
                email: "GangilUt@gmail.com"
            }
        ],
        // achievements: [
        //     "1st Place in National Robotics Competition",
        //     "Developed an AI-based app"
        // ],
        events: [
            {
                name: "Capture Nature Quest",
                image: "/Images/Hackathon.jpeg",
                description: "A competition focused on capturing the beauty of nature."
            },
            {
                name: "Monsoon Quest",
                image: "/Images/Coding Workshop.jpeg",
                description: "A seasonal Photography event Showcasing the magic of the monsoon."
            },
            {
                name: "Street Circle",
                image: "/Images/Robotics Competition.jpeg",
                description: "A street photography event that encourages creativity in urban settings."
            }
        ],
        // membershipInfo: "Join Our Club for tech stuffs.",
        socialMedia: [
            { platform: "Facebook", link: "https://facebook.com/techclub", icon: '<i class="fab fa-facebook"></i>' },
            { platform: "Instagram", link: "https://instagram.com/techclub", icon: '<i class="fab fa-instagram"></i>' },
            { platform: "LinkedIn", link: "https://linkedin.com/company/techclub", icon: '<i class="fab fa-linkedin"></i>' },
            { platform: "Website", link: "https://techclub.com", icon: '<i class="fas fa-globe"></i>' }
        ]
    },
    {
        id:"environment-club-007",
        name: "Environment Club",
        logo: "/Images/Environment club.jpeg",
        bio: "Environment Club focuses on sustainability and environmental awareness. We organize activities like tree-planting drives, clean-up campaigns, and eco-friendly initiatives.",
        description: "Environment Club focuses on sustainability and environmental awareness. We organize activities like tree-planting drives, clean-up campaigns, and eco-friendly initiatives to inspire responsible behavior towards nature.",
        category: "Environment",
        coordinator: "Niharika Sharma",
        teamMembers: [
            {
                name: "Niharika Sharma",
                batch: "22-26",
                profileImage: "/Images/johndoe.jpg",
                linkedIn: "https://linkedin.com/in/johndoe",
                email: "Niharika@gmail.com"
            },
            {
                name: "Bhoomi Goyal",
                batch: "22-26",
                profileImage: "/Images/janesmith.jpg",
                linkedIn: "https://linkedin.com/in/janesmith",
                email: "Bhoomi@gmail.com"
            }
        ],
        // achievements: [
        //     "1st Place in National Robotics Competition",
        //     "Developed an AI-based app"
        // ],
        events: [
            {
                name: " Eco Hackathon ",
                image: "/Images/Hackathon.jpeg",
                description: "A  hackathon where participants create solutions to environmental challenges."
            },
            {
                name: "Naure Walk",
                image: "/Images/Coding Workshop.jpeg",
                description: "An event to explore local biodiversity and raise environmental Awarness."
            },
            {
                name: "Sustainability Workshop",
                image: "/Images/Robotics Competition.jpeg",
                description: "A session dedicated to learning and implementing sustainable practices."
            }
        ],
        // membershipInfo: "Join Our Club for tech stuffs.",
        socialMedia: [
            { platform: "Facebook", link: "https://facebook.com/techclub", icon: '<i class="fab fa-facebook"></i>' },
            { platform: "Instagram", link: "https://instagram.com/techclub", icon: '<i class="fab fa-instagram"></i>' },
            { platform: "LinkedIn", link: "https://linkedin.com/company/techclub", icon: '<i class="fab fa-linkedin"></i>' },
            { platform: "Website", link: "https://techclub.com", icon: '<i class="fas fa-globe"></i>' }
        ]
    },
    {
        id: "literary-club-008",
        name: "Literary Club",
        logo: "/Images/LiteraryClub.jpeg",
        bio: "A haven for readers and writers to explore literature and creative expression.",
        description: "The Literary Club is for those who love reading, writing, and discussing literature. From poetry slams to storytelling workshops, we celebrate creativity and expression.",
        category: "Literature",
        coordinator: "Riya Sharma",
        teamMembers: [
            { name: "Riya Sharma", batch: "22-26", email: "riya.litclub@gmail.com" },
            { name: "Vivek Awasthi", batch: "23-27", email: "vivekawasthi@gmail.com" }
        ],
        events: [
            { name: "Poetry Slam", description: "An event to perform and appreciate poetry." },
            { name: "Creative Writing Contest", description: "A writing competition for budding writers." }
        ],
        socialMedia: [
            { platform: "Instagram", link: "https://instagram.com/literaryclub" }
        ]
    },
    {
        id: "gaming-club-009",
        name: "Gaming Club",
        logo: "/Images/GamingClub.jpeg",
        bio: "Where gamers unite for competitive tournaments and casual fun.",
        description: "Join us for LAN parties, eSports tournaments, and gaming workshops. Play, compete, and connect with other gamers!",
        category: "Technology",
        coordinator: "Rohan Mehta",
        teamMembers: [
            { name: "Rohan Mehta", batch: "21-25", email: "rohan.gamingclub@gmail.com" },
            { name: "Neha Kapoor", batch: "22-26", email: "nehakapoor92@gmail.com" }
        ],
        events: [
            { name: "Valorant Tournament", description: "Compete to be the top Valorant team." },
            { name: "FIFA Championship", description: "A contest for football gaming enthusiasts." }
        ],
        socialMedia: [
            { platform: "Discord", link: "https://discord.gg/gamingclub" }
        ]
    },
    {
        id: "debate-club-010",
        name: "Debate Club",
        logo: "/Images/DebateClub.png",
        bio: "Sharpen your reasoning, persuasion, and public speaking skills.",
        description: "Debate Club is dedicated to fostering critical thinking and articulation through formal debates and public speaking sessions.",
        category: "Public Speaking",
        coordinator: "Ananya Verma",
        teamMembers: [
            { name: "Ananya Verma", batch: "22-26", email: "ananyaverma@gmail.com" },
            { name: "Arjun Bhatt", batch: "21-25", email: "arjunbhatt123@gmail.com" }
        ],
        events: [
            { name: "Intercollege Debate", description: "A platform to debate current issues." },
            { name: "Extempore Competition", description: "Think and speak on your feet." }
        ],
        socialMedia: [
            { platform: "Facebook", link: "https://facebook.com/debateclub" }
        ]
    },
    {
        id: "robotics-club-011",
        name: "Robotics Club",
        logo: "/Images/RoboticsClub.jpeg",
        bio: "Build, code, and innovate through hands-on robotics projects.",
        description: "Robotics Club offers hands-on experience in building robots, organizing competitions, and advancing technology through innovation.",
        category: "Technology",
        coordinator: "Akshay Rawat",
        teamMembers: [
            { name: "Akshay Rawat", batch: "22-26", email: "akshayrawat@gmail.com" },
            { name: "Megha Joshi", batch: "23-27", email: "meghajoshi@gmail.com" }
        ],
        events: [
            { name: "Line Follower Challenge", description: "Design a robot to follow lines autonomously." },
            { name: "Battle Bots", description: "Compete in robot combat challenges." }
        ],
        socialMedia: [
            { platform: "LinkedIn", link: "https://linkedin.com/company/roboticsclub" }
        ]
    },
    {
        id: "finance-club-012",
        name: "Finance Club",
        logo: "/Images/FinanceClub.png",
        bio: "Learn, analyze, and grow through financial literacy and investments.",
        description: "The Finance Club equips members with skills in stock markets, investments, and financial management.",
        category: "Finance",
        coordinator: "Kunal Rajput",
        teamMembers: [
            { name: "Kunal Rajput", batch: "21-25", email: "kunalfinanceclub@gmail.com" },
            { name: "Pooja Tiwari", batch: "22-26", email: "poojatiwari@gmail.com" }
        ],
        events: [
            { name: "Stock Trading Simulation", description: "Compete in virtual stock trading." },
            { name: "Budgeting Workshop", description: "Learn how to manage your finances effectively." }
        ],
        socialMedia: [
            { platform: "Instagram", link: "https://instagram.com/financeclub" }
        ]
    },
    {
        id: "dramatics-club-013",
        name: "Dramatics Club",
        logo: "/Images/DramaticsClub.png",
        bio: "Explore the art of theatre, acting, and storytelling.",
        description: "Join the Dramatics Club to explore acting, scriptwriting, and direction through plays, skits, and workshops.",
        category: "Art",
        coordinator: "Varun Sharma",
        teamMembers: [
            { name: "Varun Sharma", batch: "22-26", email: "varun.dramaticsclub@gmail.com" },
            { name: "Simran Kaur", batch: "23-27", email: "simrankaur@gmail.com" }
        ],
        events: [
            { name: "Annual Drama Fest", description: "A showcase of student-led theatrical performances." },
            { name: "Skit Competition", description: "A fun competition to display acting skills." }
        ],
        socialMedia: [
            { platform: "Instagram", link: "https://instagram.com/dramaticsclub" }
        ]
    },
    {
        id: "culinary-club-014",
        name: "Culinary Club",
        logo: "/Images/CulinaryClub.jpeg",
        bio: "For aspiring chefs and food enthusiasts to experiment and learn.",
        description: "The Culinary Club celebrates the art of cooking through food tasting, recipe sharing, and culinary competitions.",
        category: "Lifestyle",
        coordinator: "Sanya Kapoor",
        teamMembers: [
            { name: "Sanya Kapoor", batch: "22-26", email: "sanyakapoor@gmail.com" },
            { name: "Nishant Jain", batch: "23-27", email: "nishantjain@gmail.com" }
        ],
        events: [
            { name: "Cooking Competition", description: "A contest to showcase culinary skills." },
            { name: "Bake-Off", description: "Test your baking creativity and expertise." }
        ],
        socialMedia: [
            { platform: "Facebook", link: "https://facebook.com/culinaryclub" }
        ]
    },
    {
        id: "astronomy-club-015",
        name: "Astronomy Club",
        logo: "/Images/AstronomyClub.png",
        bio: "Explore the wonders of the universe with stargazing and workshops.",
        description: "The Astronomy Club brings together space enthusiasts to explore celestial phenomena through observations and discussions.",
        category: "Science",
        coordinator: "Vikas Agrawal",
        teamMembers: [
            { name: "Vikas Agrawal", batch: "21-25", email: "vikasastroclub@gmail.com" },
            { name: "Pallavi Singh", batch: "22-26", email: "pallavisingh@gmail.com" }
        ],
        events: [
            { name: "Stargazing Night", description: "Observe the night sky with telescopes." },
            { name: "Astrophysics Workshop", description: "Learn about the science behind celestial bodies." }
        ],
        socialMedia: [
            { platform: "LinkedIn", link: "https://linkedin.com/company/astronomyclub" }
        ]
    }
];



localStorage.setItem("clubs", JSON.stringify(clubs));

