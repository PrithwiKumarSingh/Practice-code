// const original_answere = ["Sachin Tendulkar", "West Indies", "Sachin Tendulkar", "264", "Muttiah Muralitharan"];
const original_answere = {
    q1 : "Sachin Tendulkar",
    q2 : "West Indies", 
    q3 : "Sachin Tendulkar", 
    q4 : "264", 
    q5 : "Muttiah Muralitharan"
};

const form = document.querySelector('form');
form.addEventListener('submit' ,(event) => {
    event.preventDefault();
    const data = new FormData(form);


    let result = 0;
    for(let [keys, values] of data.entries()){
        if(values === original_answere[keys]){
            result++;
        }
    }

    // const answere = Array.from(data.values());
    // let result = 0;
    // for(let i=0; i<answere.length; i++){
    //     if(answere[i] === original_answere[i]){
    //         result++;
    //     }
    // }
    const out = document.getElementById("out");
    out.innerText = `${result} out of 5 is correct !`
    out.style.textAlign = "center";


})










    // { question: "Who was the first player to score a century in T20 international cricket?", options: ["Chris Gayle", "Brendon McCullum", "Shane Watson", "Yuvraj Singh"], answer: "Chris Gayle" },
    // { question: "Which bowler has the best bowling figures in a World Cup match?", options: ["Glenn McGrath", "Chaminda Vaas", "Joel Garner", "Muttiah Muralitharan"], answer: "Chaminda Vaas" },
    // { question: "What year was the Indian Premier League (IPL) founded?", options: ["2007", "2008", "2009", "2010"], answer: "2008" },
    // { question: "Which country won the first ever ICC T20 World Cup?", options: ["India", "England", "Pakistan", "West Indies"], answer: "India" },
    // { question: "Who has the most runs in IPL history as of 2024?", options: ["Virat Kohli", "Suresh Raina", "David Warner", "Rohit Sharma"], answer: "Virat Kohli" },
    // { question: "Which cricketer is famous for his 'Helicopter Shot'?", options: ["MS Dhoni", "Virat Kohli", "Suresh Raina", "Ravindra Jadeja"], answer: "MS Dhoni" },
    // { question: "What is the nickname of the England cricket team?", options: ["The Lions", "The Tigers", "The Eagles", "The Lions"], answer: "The Lions" },
    // { question: "Who is the fastest cricketer to reach 10,000 ODI runs?", options: ["Virat Kohli", "AB de Villiers", "Sachin Tendulkar", "Rohit Sharma"], answer: "Virat Kohli" },
    // { question: "Which Indian cricketer scored 36 runs in one over against New Zealand in 2009?", options: ["Yuvraj Singh", "MS Dhoni", "Virender Sehwag", "Suresh Raina"], answer: "Yuvraj Singh" },
    // { question: "Which team has the most number of IPL titles as of 2024?", options: ["Mumbai Indians", "Chennai Super Kings", "Kolkata Knight Riders", "Sunrisers Hyderabad"], answer: "Mumbai Indians" },
    // { question: "Which country’s team is called the ‘Baggy Greens’?", options: ["Australia", "New Zealand", "South Africa", "England"], answer: "Australia" },
    // { question: "Who took the first ever hat-trick in IPL history?", options: ["Amit Mishra", "Lasith Malinga", "Sunil Narine", "Harbhajan Singh"], answer: "Lasith Malinga" },
    // { question: "Which cricketer has the most Test double centuries?", options: ["Don Bradman", "Sachin Tendulkar", "Brian Lara", "Virat Kohli"], answer: "Don Bradman" },
    // { question: "What is the length of a cricket pitch?", options: ["22 yards", "20 yards", "24 yards", "18 yards"], answer: "22 yards" },
    // { question: "Which bowler holds the record for the most wickets in a single IPL season?", options: ["Dwayne Bravo", "Sohail Tanvir", "Harbhajan Singh", "Bhuvneshwar Kumar"], answer: "Dwayne Bravo" },
    // { question: "Who was the first captain to win all three ICC trophies (World Cup, T20 World Cup, Champions Trophy)?", options: ["MS Dhoni", "Ricky Ponting", "Michael Clarke", "Graeme Smith"], answer: "MS Dhoni" },
    // { question: "In cricket scoring, what does the term 'Golden Duck' mean?", options: ["Out on the first ball", "Scoring zero in an innings", "Scoring one run", "Out caught"], answer: "Out on the first ball" },
    // { question: "Who is the only player to score a century in all three formats of international cricket?", options: ["Virat Kohli", "AB de Villiers", "Chris Gayle", "Hashim Amla"], answer: "Chris Gayle" },
    // { question: "Which stadium is known as the 'Home of Cricket'?", options: ["Lord's", "Eden Gardens", "Melbourne Cricket Ground", "Old Trafford"], answer: "Lord's" },
    // { question: "Who was the first bowler to take 500 wickets in ODIs?", options: ["Muttiah Muralitharan", "Wasim Akram", "Glenn McGrath", "Anil Kumble"], answer: "Muttiah Muralitharan" },
    // { question: "Who was the first cricketer to hit 100 sixes in ODIs?", options: ["Shahid Afridi", "Chris Gayle", "MS Dhoni", "Rohit Sharma"], answer: "Shahid Afridi" },
    // { question: "Which cricketer is known as the 'Little Master'?", options: ["Sachin Tendulkar", "Virat Kohli", "Brian Lara", "Jacques Kallis"], answer: "Sachin Tendulkar" },
    // { question: "Who holds the record for the fastest century in Test cricket?", options: ["Brendon McCullum", "Adam Gilchrist", "Viv Richards", "Jacques Kallis"], answer: "Brendon McCullum" },
    // { question: "Which team won the ICC Champions Trophy in 2017?", options: ["India", "Pakistan", "England", "Australia"], answer: "Pakistan" },
    // { question: "Who is the first bowler to take 10 wickets in a single Test innings?", options: ["Jim Laker", "Anil Kumble", "Muttiah Muralitharan", "Shane Warne"], answer: "Jim Laker" },
    // { question: "Which country has the nickname 'Proteas'?", options: ["South Africa", "Australia", "New Zealand", "England"], answer: "South Africa" },
    // { question: "Who was the youngest player to score a Test century?", options: ["Sachin Tendulkar", "Mushtaq Mohammad", "Mohammad Ashraful", "Alastair Cook"], answer: "Mushtaq Mohammad" },
    // { question: "Who is the only bowler to have taken four wickets in four balls in international cricket?", options: ["Lasith Malinga", "Curtly Ambrose", "Brett Lee", "Glenn McGrath"], answer: "Lasith Malinga" },
    // { question: "What does the term 'Yorker' refer to in cricket?", options: ["A ball that pitches at the batsman’s feet", "A wide ball", "A bouncer", "A no-ball"], answer: "A ball that pitches at the batsman’s feet" },
    // { question: "Which cricketer has the highest number of catches in Test cricket?", options: ["Rahul Dravid", "Mahela Jayawardene", "Mark Waugh", "Jacques Kallis"], answer: "Rahul Dravid" },
    // { question: "Who was the first player to score 1000 runs in a single IPL season?", options: ["Chris Gayle", "David Warner", "Virat Kohli", "Shane Watson"], answer: "Chris Gayle" },
    // { question: "Which captain led Australia to their first-ever World Cup victory?", options: ["Allan Border", "Steve Waugh", "Mark Taylor", "Ricky Ponting"], answer: "Allan Border" },
    // { question: "Who is the leading wicket-taker in IPL history as of 2024?", options: ["Lasith Malinga", "Amit Mishra", "Dwayne Bravo", "Bhuvneshwar Kumar"], answer: "Lasith Malinga" },
    // { question: "What is the diameter of a cricket ball?", options: ["22.4-22.9 cm", "18.4-19.0 cm", "20.6-22.2 cm", "23.0-23.5 cm"], answer: "22.4-22.9 cm" },
    // { question: "Which player is famous for his ‘Switch Hit’?", options: ["Kevin Pietersen", "AB de Villiers", "Glenn Maxwell", "David Warner"], answer: "Kevin Pietersen" },
    // { question: "Who was the first cricketer to score 150 runs in a T20 international?", options: ["Aaron Finch", "Brendon McCullum", "Chris Gayle", "Virat Kohli"], answer: "Aaron Finch" },
    // { question: "Which team won the inaugural ICC Women's T20 World Cup?", options: ["Australia", "England", "New Zealand", "India"], answer: "England" },
    // { question: "Who is the only cricketer to have captained both England and India?", options: ["Mike Gatting", "Nasser Hussain", "None", "Ben Stokes"], answer: "None" },
    // { question: "What is the term used when a bowler bowls a ball that the batsman misses and it hits the stumps?", options: ["Bowled", "LBW", "Caught", "Run out"], answer: "Bowled" },
    // { question: "Who has the highest number of sixes in Test cricket?", options: ["Shahid Afridi", "Brendon McCullum", "Adam Gilchrist", "Chris Gayle"], answer: "Brendon McCullum" },
    // { question: "Which bowler took a hat-trick on his Test debut for India?", options: ["Harbhajan Singh", "Irfan Pathan", "Kapil Dev", "Joginder Sharma"], answer: "Irfan Pathan" },
    // { question: "Who scored the first ever T20 international century?", options: ["Chris Gayle", "Brendon McCullum", "Aaron Finch", "Yuvraj Singh"], answer: "Chris Gayle" },
    // { question: "Which country has won the most ICC Under-19 World Cups?", options: ["India", "Australia", "Pakistan", "England"], answer: "India" },
    // { question: "Who is the only cricketer to score a triple century in ODIs?", options: ["Martin Guptill", "Rohit Sharma", "Virender Sehwag", "Chris Gayle"], answer: "Rohit Sharma" },
    // { question: "Who won the ICC Test Player of the Year award in 2023?", options: ["Joe Root", "Steve Smith", "Kane Williamson", "Ben Stokes"], answer: "Steve Smith" },
    // { question: "What is the maximum length of a cricket bat as per ICC regulations?", options: ["38 inches", "35 inches", "40 inches", "36 inches"], answer: "38 inches" },
    // { question: "Which cricketer is nicknamed 'The Wall' for his defensive skills?", options: ["Rahul Dravid", "VVS Laxman", "Mahela Jayawardene", "Jacques Kallis"], answer: "Rahul Dravid" },
    // { question: "Which team is known as the 'Men in Yellow'?", options: ["Australia", "South Africa", "India", "New Zealand"], answer: "Australia" },
    // { question: "Who was the captain of the South African cricket team during the 1999 World Cup?", options: ["Hansie Cronje", "AB de Villiers", "Jacques Kallis", "Shaun Pollock"], answer: "Hansie Cronje" },
    // { question: "Who was the first bowler to take 400 wickets in Test cricket?", options: ["Dennis Lillee", "Ian Botham", "Richard Hadlee", "Bob Willis"], answer: "Dennis Lillee" },
    // { question: "Which cricketer scored 3 double centuries in a single Test series?", options: ["Don Bradman", "Virat Kohli", "Steve Smith", "Brian Lara"], answer: "Don Bradman" }
      