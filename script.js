function quoteOnMoods() {
    console.log("Quotes on Moods :)")
    console.log("===================")

    // randoms
    let randomMood = Math.floor(Math.random() * 3);
    let randomQuote = Math.floor(Math.random() * 5);

    // resources
    const mood = ['sad ' , 'depressed ' , 'happy '];
    const happyQuotes = ["Happiness is not something ready-made. It comes from your own actions. — Dalai Lama" , 
    "The best way to cheer yourself up is to try to cheer somebody else up.— Mark Twain" ,
    "For every minute you are angry you lose sixty seconds of happiness. — Ralph Waldo Emerson" ,
    "Happiness is a warm puppy. — Charles M. Schulz" ,
    "The most wasted of days is one without laughter. — E.E. Cummings"
    ];
    const sadQuotes = ["It's okay to be sad. It's okay to be not okay. Just remember that you are not alone. — Unknown",
    "Sometimes it takes sadness to know happiness, noise to appreciate silence, and absence to value presence. — Unknown" ,
    "The greatest loss is what dies inside us while we live. — Unknown" ,
    "Sadness flies away on the wings of time. — Unknown" , 
    "Tears are words that need to be written. — Unknown"
    ];
    const depressedQuotes = ["The darkest hour has only sixty minutes. — Morris Mandel" ,
    "It is not the load that breaks you down, it's the way you carry it. — Lou Holtz" ,
    "Sometimes the only way to ever find yourself is to get completely lost. — Kellie Elmore" ,
    "Depression is like a war. You either win or you die trying. — Unknown" ,
    "Even the most beautiful days eventually end. — Unknown"
    ]; 
    const ending = ["Wishing you a day filled with joy and wellness—remember to take time for yourself and cherish every moment.",
        "May your day be as bright and uplifting as your spirit. Take good care of yourself and embrace the little joys around you." ,
        "Sending positive vibes your way for a healthy and happy day. Take care of yourself and make sure to find moments of peace and happiness."
    ]

    // other stuffs
    const moodStartLine = "Incase your mood is ";

    // codes for mood sad
    if (randomMood === 0) {
        console.log(moodStartLine + mood[0] + 'read this out!');
        switch (randomQuote) {
            case 0 :
                console.log(sadQuotes[0]);
                break;
            case 1 :
                console.log(sadQuotes[1]);
                break;
            case 2 :
                console.log(sadQuotes[2]);
                break;
            case 3 :
                console.log(sadQuotes[3]);
                break;
            case 4 :
                console.log(sadQuotes[4]);
                break;
        }
        console.log(ending[0]);
    } 

    // codes for mood despressed
    if (randomMood === 1) {
        console.log(moodStartLine + mood[1] + 'read this out!');
        switch (randomQuote) {
            case 0 :
                console.log(depressedQuotes[0]);
                break;
            case 1 :
                console.log(depressedQuotes[1]);
                break;
            case 2 :
                console.log(depressedQuotes[2]);
                break;
            case 3 :
                console.log(depressedQuotes[3]);
                break;
            case 4 :
                console.log(depressedQuotes[4]);
                break;
        }
        console.log(ending[1]);
    }


    // codes for mood happy
    if (randomMood === 2) {
        console.log(moodStartLine + mood[2] + 'read this out!');
        switch (randomQuote) {
            case 0 :
                console.log(happyQuotes[0]);
                break;
            case 1 :
                console.log(happyQuotes[1]);
                break;
            case 2 :
                console.log(happyQuotes[2]);
                break;
            case 3 :
                console.log(happyQuotes[3]);
                break;
            case 4 :
                console.log(happyQuotes[4]);
                break;
        }
        console.log(ending[2]);
    }

    console.log('-----');
};
quoteOnMoods();