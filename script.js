let wordList = [
        { word: "გამოთხარაო", hint: "თაგვმა თხარა თხარაო, კატა * * * * * * * * * *" },
        { word: "მწევარი", hint: "ადრე ამდგარსა კურდღელსა ვერ დაეწევა * * * * * * *" },
        { word: "მოიმკი", hint: "რასაც დასთეს იმას * * * * * * " },
        { word: "წაიღებს", hint: "ქარის მოტანილს ქარი * * * * * * * " },
        { word: "გაჭერი", hint: "ასჯერ გაზომა, ერთხელ * * * * * *" },
        { word: "გაიყო", hint: "ერთი თხილის გული ცხრა ძმამ * * * * * " },
        { word: "თავითაო", hint: "რაც მოგივა დავითაო, ყველა შენი * * * * * * * *" },
        { word: "აქვს", hint: "ტყუილს მოკლე ფეხები * * * *" },
        { word: "გაჩვენებო", hint: "გაჭირვება მაჩვენე, გაქცევას * * * * * * * * *" },
    ];
    
    let attempts = 3;
    
    const alphabet = ["ა", "ბ", "გ", "დ", "ე", "ვ", "ზ", "თ", "ი", "კ", "ლ", "მ", "ნ", "ო", "პ", "ჟ", "რ", "ს", "ტ", "უ", "ფ", "ქ", "ღ", "ყ", "შ", "ჩ", "ც", "ძ", "წ", "ჭ", "ხ", "ჯ", "ჰ"];
    
    function RandomHintFromArray() {
        return wordList[Math.floor(Math.random() * wordList.length)];
    }
    
    function hangman() {
        alert('დაასრულე ქართული ანდაზა, ბგერების რაოდენობა აღნიშნულია ( * ) -ით. თქვენ გაქვთ 3 შეცდომის დაშევბის უფლება. ');
        playGame();
    }
    
    function playGame() {
        let correctAnswers = 0;
        for (let i = 0; i < wordList.length; i++) {
            let word = wordList[i];
            let correctAnswer = '';
            let hint = word.hint;
            while (attempts > 0) {
                let guess = prompt(`${hint}\n\n დარჩენილი ცდების რაოდენობა: ${attempts}\n შეიყვანეთ სიტყვა`);
                if (!guess) continue;
                let isValid = true;
                for (let letter of guess) {
                    if (!alphabet.includes(letter)) {
                        alert(',,გთხოვთ დაწეროთ ქართულად"');
                        isValid = false;
                        break;
                    }
                }
                if (!isValid) continue;
                if (guess.length === 1) {
                    if (word.word.includes(guess)) {
                        correctAnswer += guess;
                        if (correctAnswer === word.word) {
                            alert('პასუხი სწორია');
                            correctAnswers++;
                            break;
                        }
                    } else {
                        attempts--;
                        alert(`პასუხი არასწორია, დარჩენილი ცდების რაოდენობა: ${attempts}`);
                    }
                } else if (guess.length === word.word.length && guess === word.word) {
                    alert('პასუხი სწორია');
                    correctAnswers++;
                    break;
                } else {
                    attempts--;
                    alert(`პასუხი არასწორია, დარჩენილი ცდების რაოდენობა: ${attempts}`);
                }
            }
            if (attempts === 0) {
                alert(`ცდების რაოდენობა ამოიწურა, სწორი პასუხი იყო ${word.word}`);
                break;
            }
        }
    
        alert(`თქვენი შედეგია ${correctAnswers}/${wordList.length} `);
    }
    
    hangman();