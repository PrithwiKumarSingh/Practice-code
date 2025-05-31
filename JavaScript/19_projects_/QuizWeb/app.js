
      const questionBank = [
      { question: "Who won the ICC Cricket World Cup in 2019?", options: ["India", "Australia", "England", "New Zealand"], answer: "England" },
      { question: "Who holds the record for the highest individual score in a One Day International (ODI)?", options: ["Rohit Sharma", "Sachin Tendulkar", "Martin Guptill", "Chris Gayle"], answer: "Rohit Sharma" },
      { question: "Which country has won the most ICC Cricket World Cups?", options: ["India", "Australia", "England", "West Indies"], answer: "Australia" },
      { question: "What is the maximum number of overs allowed per bowler in a standard ODI match?", options: ["10", "15", "20", "25"], answer: "10" },
      { question: "Who is known as the 'God of Cricket'?", options: ["Virat Kohli", "MS Dhoni", "Ricky Ponting", "Sachin Tendulkar"], answer: "Sachin Tendulkar" },
      { question: "Who was the first batsman to score a double century in ODIs?", options: ["Virender Sehwag", "Chris Gayle", "Sachin Tendulkar", "Brian Lara"], answer: "Sachin Tendulkar" },
      { question: "Which country hosted the first ever Cricket World Cup?", options: ["Australia", "England", "India", "West Indies"], answer: "England" },
      { question: "Who is the highest run-scorer in Test cricket?", options: ["Ricky Ponting", "Jacques Kallis", "Sachin Tendulkar", "Steve Smith"], answer: "Sachin Tendulkar" },
      { question: "What is the term for 3 wickets in 3 consecutive balls?", options: ["Hat-trick", "Triple-wicket", "Treble", "Clean sweep"], answer: "Hat-trick" },
      { question: "Who was the captain of India during the 1983 World Cup win?", options: ["Sunil Gavaskar", "Kapil Dev", "Ravi Shastri", "Mohinder Amarnath"], answer: "Kapil Dev" },
      { question: "What does LBW stand for in cricket?", options: ["Leg Before Wicket", "Left Bat Wide", "Long Ball Wide", "Leg Bat Wrong"], answer: "Leg Before Wicket" },
      { question: "Who bowled the fastest recorded ball in cricket history?", options: ["Shoaib Akhtar", "Brett Lee", "Shaun Tait", "Jeff Thomson"], answer: "Shoaib Akhtar" },
      { question: "What color ball is used in Test matches?", options: ["Red", "White", "Pink", "Yellow"], answer: "Red" },
      { question: "Which Indian bowler took a hat-trick in the 2019 World Cup?", options: ["Jasprit Bumrah", "Mohammed Shami", "Bhuvneshwar Kumar", "Yuzvendra Chahal"], answer: "Mohammed Shami" },
      { question: "Who was the first cricketer to score 10,000 runs in ODIs?", options: ["Ricky Ponting", "Sanath Jayasuriya", "Sachin Tendulkar", "Brian Lara"], answer: "Sachin Tendulkar" },
      { question: "What is the standard number of players in a cricket team?", options: ["9", "10", "11", "12"], answer: "11" },
      { question: "Who has taken the most wickets in Test cricket?", options: ["Shane Warne", "Muttiah Muralitharan", "James Anderson", "Anil Kumble"], answer: "Muttiah Muralitharan" },
      { question: "Who won the ICC T20 World Cup in 2022?", options: ["India", "England", "Pakistan", "Australia"], answer: "England" },
      { question: "Who was the first Indian to take a five-wicket haul in T20Is?", options: ["Jasprit Bumrah", "Bhuvneshwar Kumar", "Deepak Chahar", "Harbhajan Singh"], answer: "Deepak Chahar" },
      { question: "What is the term for scoring 100 runs in a single innings?", options: ["Century", "Ton", "Half-century", "Double"], answer: "Century" },
      { question: "Which player is nicknamed “The Wall”?", options: ["Rahul Dravid", "Sourav Ganguly", "MS Dhoni", "Virat Kohli"], answer: "Rahul Dravid" },
      { question: "Who hit six sixes in an over in a T20 international match?", options: ["Chris Gayle", "Kieron Pollard", "Yuvraj Singh", "Glenn Maxwell"], answer: "Yuvraj Singh" },
      { question: "Who is the current head coach of the Indian men's cricket team (as of 2024)?", options: ["Rahul Dravid", "Ravi Shastri", "Anil Kumble", "VVS Laxman"], answer: "Rahul Dravid" },
      { question: "What does DRS stand for in cricket?", options: ["Decision Review System", "Direct Replay System", "Data Replay Setup", "Decision Replay Setup"], answer: "Decision Review System" },
      { question: "In cricket, what is a 'duck'?", options: ["Scoring zero runs", "Getting bowled", "Getting run out", "A no-ball"], answer: "Scoring zero runs" },
    { question: "Who was the first player to score a century in T20 international cricket?", options: ["Chris Gayle", "Brendon McCullum", "Shane Watson", "Yuvraj Singh"], answer: "Chris Gayle" },
    { question: "Which bowler has the best bowling figures in a World Cup match?", options: ["Glenn McGrath", "Chaminda Vaas", "Joel Garner", "Muttiah Muralitharan"], answer: "Chaminda Vaas" },
    { question: "What year was the Indian Premier League (IPL) founded?", options: ["2007", "2008", "2009", "2010"], answer: "2008" },
    { question: "Which country won the first ever ICC T20 World Cup?", options: ["India", "England", "Pakistan", "West Indies"], answer: "India" },
    { question: "Who has the most runs in IPL history as of 2024?", options: ["Virat Kohli", "Suresh Raina", "David Warner", "Rohit Sharma"], answer: "Virat Kohli" },
    { question: "Which cricketer is famous for his 'Helicopter Shot'?", options: ["MS Dhoni", "Virat Kohli", "Suresh Raina", "Ravindra Jadeja"], answer: "MS Dhoni" },
    { question: "What is the nickname of the England cricket team?", options: ["The Lions", "The Tigers", "The Eagles", "The Lions"], answer: "The Lions" },
    { question: "Who is the fastest cricketer to reach 10,000 ODI runs?", options: ["Virat Kohli", "AB de Villiers", "Sachin Tendulkar", "Rohit Sharma"], answer: "Virat Kohli" },
    { question: "Which Indian cricketer scored 36 runs in one over against New Zealand in 2009?", options: ["Yuvraj Singh", "MS Dhoni", "Virender Sehwag", "Suresh Raina"], answer: "Yuvraj Singh" },
    { question: "Which team has the most number of IPL titles as of 2024?", options: ["Mumbai Indians", "Chennai Super Kings", "Kolkata Knight Riders", "Sunrisers Hyderabad"], answer: "Mumbai Indians" },
    { question: "Which country’s team is called the ‘Baggy Greens’?", options: ["Australia", "New Zealand", "South Africa", "England"], answer: "Australia" },
    { question: "Who took the first ever hat-trick in IPL history?", options: ["Amit Mishra", "Lasith Malinga", "Sunil Narine", "Harbhajan Singh"], answer: "Lasith Malinga" },
    { question: "Which cricketer has the most Test double centuries?", options: ["Don Bradman", "Sachin Tendulkar", "Brian Lara", "Virat Kohli"], answer: "Don Bradman" },
    { question: "What is the length of a cricket pitch?", options: ["22 yards", "20 yards", "24 yards", "18 yards"], answer: "22 yards" },
    { question: "Which bowler holds the record for the most wickets in a single IPL season?", options: ["Dwayne Bravo", "Sohail Tanvir", "Harbhajan Singh", "Bhuvneshwar Kumar"], answer: "Dwayne Bravo" },
    { question: "Who was the first captain to win all three ICC trophies (World Cup, T20 World Cup, Champions Trophy)?", options: ["MS Dhoni", "Ricky Ponting", "Michael Clarke", "Graeme Smith"], answer: "MS Dhoni" },
    { question: "In cricket scoring, what does the term 'Golden Duck' mean?", options: ["Out on the first ball", "Scoring zero in an innings", "Scoring one run", "Out caught"], answer: "Out on the first ball" },
    { question: "Who is the only player to score a century in all three formats of international cricket?", options: ["Virat Kohli", "AB de Villiers", "Chris Gayle", "Hashim Amla"], answer: "Chris Gayle" },
    { question: "Which stadium is known as the 'Home of Cricket'?", options: ["Lord's", "Eden Gardens", "Melbourne Cricket Ground", "Old Trafford"], answer: "Lord's" },
    { question: "Who was the first bowler to take 500 wickets in ODIs?", options: ["Muttiah Muralitharan", "Wasim Akram", "Glenn McGrath", "Anil Kumble"], answer: "Muttiah Muralitharan" },
    { question: "Who was the first cricketer to hit 100 sixes in ODIs?", options: ["Shahid Afridi", "Chris Gayle", "MS Dhoni", "Rohit Sharma"], answer: "Shahid Afridi" },
    { question: "Which cricketer is known as the 'Little Master'?", options: ["Sachin Tendulkar", "Virat Kohli", "Brian Lara", "Jacques Kallis"], answer: "Sachin Tendulkar" },
    { question: "Who holds the record for the fastest century in Test cricket?", options: ["Brendon McCullum", "Adam Gilchrist", "Viv Richards", "Jacques Kallis"], answer: "Brendon McCullum" },
    { question: "Which team won the ICC Champions Trophy in 2017?", options: ["India", "Pakistan", "England", "Australia"], answer: "Pakistan" },
    { question: "Who is the first bowler to take 10 wickets in a single Test innings?", options: ["Jim Laker", "Anil Kumble", "Muttiah Muralitharan", "Shane Warne"], answer: "Jim Laker" },
    { question: "Which country has the nickname 'Proteas'?", options: ["South Africa", "Australia", "New Zealand", "England"], answer: "South Africa" },
    { question: "Who was the youngest player to score a Test century?", options: ["Sachin Tendulkar", "Mushtaq Mohammad", "Mohammad Ashraful", "Alastair Cook"], answer: "Mushtaq Mohammad" },
    { question: "Who is the only bowler to have taken four wickets in four balls in international cricket?", options: ["Lasith Malinga", "Curtly Ambrose", "Brett Lee", "Glenn McGrath"], answer: "Lasith Malinga" },
    { question: "What does the term 'Yorker' refer to in cricket?", options: ["A ball that pitches at the batsman’s feet", "A wide ball", "A bouncer", "A no-ball"], answer: "A ball that pitches at the batsman’s feet" },
    { question: "Which cricketer has the highest number of catches in Test cricket?", options: ["Rahul Dravid", "Mahela Jayawardene", "Mark Waugh", "Jacques Kallis"], answer: "Rahul Dravid" },
    { question: "Who was the first player to score 1000 runs in a single IPL season?", options: ["Chris Gayle", "David Warner", "Virat Kohli", "Shane Watson"], answer: "Chris Gayle" },
    { question: "Which captain led Australia to their first-ever World Cup victory?", options: ["Allan Border", "Steve Waugh", "Mark Taylor", "Ricky Ponting"], answer: "Allan Border" },
    { question: "Who is the leading wicket-taker in IPL history as of 2024?", options: ["Lasith Malinga", "Amit Mishra", "Dwayne Bravo", "Bhuvneshwar Kumar"], answer: "Lasith Malinga" },
    { question: "What is the diameter of a cricket ball?", options: ["22.4-22.9 cm", "18.4-19.0 cm", "20.6-22.2 cm", "23.0-23.5 cm"], answer: "22.4-22.9 cm" },
    { question: "Which player is famous for his ‘Switch Hit’?", options: ["Kevin Pietersen", "AB de Villiers", "Glenn Maxwell", "David Warner"], answer: "Kevin Pietersen" },
    { question: "Who was the first cricketer to score 150 runs in a T20 international?", options: ["Aaron Finch", "Brendon McCullum", "Chris Gayle", "Virat Kohli"], answer: "Aaron Finch" },
    { question: "Which team won the inaugural ICC Women's T20 World Cup?", options: ["Australia", "England", "New Zealand", "India"], answer: "England" },
    { question: "Who is the only cricketer to have captained both England and India?", options: ["Mike Gatting", "Nasser Hussain", "None", "Ben Stokes"], answer: "None" },
    { question: "What is the term used when a bowler bowls a ball that the batsman misses and it hits the stumps?", options: ["Bowled", "LBW", "Caught", "Run out"], answer: "Bowled" },
    { question: "Who has the highest number of sixes in Test cricket?", options: ["Shahid Afridi", "Brendon McCullum", "Adam Gilchrist", "Chris Gayle"], answer: "Brendon McCullum" },
    { question: "Which bowler took a hat-trick on his Test debut for India?", options: ["Harbhajan Singh", "Irfan Pathan", "Kapil Dev", "Joginder Sharma"], answer: "Irfan Pathan" },
    { question: "Who scored the first ever T20 international century?", options: ["Chris Gayle", "Brendon McCullum", "Aaron Finch", "Yuvraj Singh"], answer: "Chris Gayle" },
    { question: "Which country has won the most ICC Under-19 World Cups?", options: ["India", "Australia", "Pakistan", "England"], answer: "India" },
    { question: "Who is the only cricketer to score a triple century in ODIs?", options: ["Martin Guptill", "Rohit Sharma", "Virender Sehwag", "Chris Gayle"], answer: "Rohit Sharma" },
    { question: "Who won the ICC Test Player of the Year award in 2023?", options: ["Joe Root", "Steve Smith", "Kane Williamson", "Ben Stokes"], answer: "Steve Smith" },
    { question: "What is the maximum length of a cricket bat as per ICC regulations?", options: ["38 inches", "35 inches", "40 inches", "36 inches"], answer: "38 inches" },
    { question: "Which cricketer is nicknamed 'The Wall' for his defensive skills?", options: ["Rahul Dravid", "VVS Laxman", "Mahela Jayawardene", "Jacques Kallis"], answer: "Rahul Dravid" },
    { question: "Which team is known as the 'Men in Yellow'?", options: ["Australia", "South Africa", "India", "New Zealand"], answer: "Australia" },
    { question: "Who was the captain of the South African cricket team during the 1999 World Cup?", options: ["Hansie Cronje", "AB de Villiers", "Jacques Kallis", "Shaun Pollock"], answer: "Hansie Cronje" },
    { question: "Who was the first bowler to take 400 wickets in Test cricket?", options: ["Dennis Lillee", "Ian Botham", "Richard Hadlee", "Bob Willis"], answer: "Dennis Lillee" },
    { question: "Which cricketer scored 3 double centuries in a single Test series?", options: ["Don Bradman", "Virat Kohli", "Steve Smith", "Brian Lara"], answer: "Don Bradman" }
     
      ]


      // choose five random questions
         

      function randomQuestions(){

          // First Method to choose

    //     const data = new Set();
    //     //use set for unique object


    //     while(data.size != 5){
    //         const index = Math.floor(Math.random()*70);
    //         data.add(questionBank[index])
    //     }

    //     // convert set into array 
    //     return [...data];
    //   


      //Second Method to choose 
      
    //   questionBank.sort(() => Math.random()-0.5);
    //   return questionBank.slice(0,5);




      // third method to choose 

    const arr = [];
    let length = questionBank.length;

    for(let i=0; i<5; i++){
        const index = Math.floor(Math.random()*length);
        arr.push(questionBank[index]);

        //swap
        [questionBank[index], questionBank[length-1]] = [questionBank[length-1], questionBank[index]];
        length--;
    }
    return arr;

}

      //  select the form and insert all the elements into it 

      const form = document.querySelector('form');
      const problem = randomQuestions();

      const original_answere = {};


      problem.forEach((obj,index) => {
        const div_element = document.createElement('div');
        div_element.className = "question";
        original_answere[`q${index+1}`] = obj['answer'];

        // question: "Who won the ICC Cricket World Cup in 2019?"

        const para = document.createElement('p');
        para.textContent = `${index+1}. ${obj['question']}`;
        div_element.appendChild(para);

        // create 4 options 
        //  ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis" ]

        obj['options'].forEach((data) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = "radio";
            input.name = `q${index+1}`;
            input.value = data;

            label.appendChild(input);
            label.appendChild(document.createTextNode(data));
            div_element.appendChild(label);
            div_element.appendChild(document.createElement('br'));
        })
        
        form.appendChild(div_element);
      })

      const button = document.createElement('button');
      button.type = "submit";
      button.className = "submit-btn";
      button.textContent = "Submit";
      form.appendChild(button);



//  Submition checking 

form.addEventListener('submit' ,(event) => {
    event.preventDefault();
    const data = new FormData(form);


    let result = 0;
    for(let [key, value] of data.entries()){
        if(value === original_answere[key]){
            result++;
        }
    }

    const out = document.getElementById("out");
    out.innerText = `${result} out of 5 is correct !`
    out.style.textAlign = "center";


})



