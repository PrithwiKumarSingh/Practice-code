
const quotes = [
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
    "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis",
    "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
    "Dream big and dare to fail. — Norman Vaughan",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "If you want to lift yourself up, lift up someone else. — Booker T. Washington",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "Act as if what you do makes a difference. It does. — William James",
    "In the end, we only regret the chances we didn’t take. — Lewis Carroll",
    "Life is really simple, but we insist on making it complicated. — Confucius",
    "Life is either a daring adventure or nothing at all. — Helen Keller",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. — Ralph Waldo Emerson",
    "Life isn't about finding yourself. It's about creating yourself. — George Bernard Shaw",
    "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
    "To live is the rarest thing in the world. Most people exist, that is all. — Oscar Wilde",
    "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
    "Difficulties in life are intended to make us better, not bitter. — Dan Reeves",
    "Life becomes easier when you learn to accept the apology you never got. — Robert Brault",
    "Love is not about how much you say 'I love you', but how much you prove that it's true. — Unknown",
    "We accept the love we think we deserve. — Stephen Chbosky",
    "The best thing to hold onto in life is each other. — Audrey Hepburn",
    "Where there is love, there is life. — Mahatma Gandhi",
    "To love and be loved is to feel the sun from both sides. — David Viscott",
    "You don't love someone for their looks or their clothes or for their fancy car, but because they sing a song only you can hear. — Oscar Wilde",
    "True love is rare, and it's the only thing that gives life real meaning. — Nicholas Sparks",
    "Love is composed of a single soul inhabiting two bodies. — Aristotle",
    "The greatest happiness of life is the conviction that we are loved. — Victor Hugo",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. — Lao Tzu",
    "Knowing yourself is the beginning of all wisdom. — Aristotle",
    "The only true wisdom is in knowing you know nothing. — Socrates",
    "In three words I can sum up everything I've learned about life: it goes on. — Robert Frost",
    "Turn your wounds into wisdom. — Oprah Winfrey",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. — Aristotle",
    "The fool doth think he is wise, but the wise man knows himself to be a fool. — William Shakespeare",
    "Sometimes you win, sometimes you learn. — John C. Maxwell",
    "It is not the length of life, but the depth. — Ralph Waldo Emerson",
    "He who opens a school door, closes a prison. — Victor Hugo",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. — Buddha",
    "Creativity is intelligence having fun. — Albert Einstein",
    "Every artist was first an amateur. — Ralph Waldo Emerson",
    "Imagination is more important than knowledge. — Albert Einstein",
    "Inspiration exists, but it has to find you working. — Pablo Picasso",
    "The desire to create is one of the deepest yearnings of the human soul. — Dieter F. Uchtdorf",
    "Don’t be satisfied with stories, how things have gone with others. Unfold your own myth. — Rumi",
    "Creativity takes courage. — Henri Matisse",
    "An essential aspect of creativity is not being afraid to fail. — Edwin Land",
    "You can’t use up creativity. The more you use, the more you have. — Maya Angelou",
    "Art enables us to find ourselves and lose ourselves at the same time. — Thomas Merton",
    "Success is how high you bounce when you hit bottom. — George S. Patton",
    "The secret of getting ahead is getting started. — Mark Twain",
    "Don’t be afraid to give up the good to go for the great. — John D. Rockefeller",
    "The road to success and the road to failure are almost exactly the same. — Colin R. Davis",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "I never dreamed about success. I worked for it. — Estée Lauder",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Opportunities don't happen. You create them. — Chris Grosser",
    "Don’t limit your challenges. Challenge your limits. — Unknown",
    "You never know how strong you are until being strong is your only choice. — Bob Marley",
    "Tough times never last, but tough people do. — Robert H. Schuller",
    "Fall seven times, stand up eight. — Japanese Proverb",
    "Out of difficulties grow miracles. — Jean de La Bruyère",
    "It does not matter how slowly you go as long as you do not stop. — Confucius",
    "Storms make trees take deeper roots. — Dolly Parton",
    "The human capacity for burden is like bamboo—far more flexible than you’d ever believe at first glance. — Jodi Picoult",
    "Scars are not injuries. A scar is a healing. After injury, a scar is what makes you whole. — China Miéville",
    "Although the world is full of suffering, it is also full of the overcoming of it. — Helen Keller",
    "Rock bottom became the solid foundation on which I rebuilt my life. — J.K. Rowling",
    "Peace begins with a smile. — Mother Teresa",
    "Be present in all things and thankful for all things. — Maya Angelou",
    "Quiet the mind, and the soul will speak. — Ma Jaya Sati Bhagavati",
    "The best way to capture moments is to pay attention. This is how we cultivate mindfulness. — Jon Kabat-Zinn",
    "Happiness is not something ready made. It comes from your own actions. — Dalai Lama",
    "You can’t stop the waves, but you can learn to surf. — Jon Kabat-Zinn",
    "Sometimes the most productive thing you can do is relax. — Mark Black",
    "Worrying is like a rocking chair: it gives you something to do but never gets you anywhere. — Erma Bombeck",
    "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor. — Thich Nhat Hanh",
    "Do less. Be more. — Unknown",
    "I'm not arguing, I'm just explaining why I'm right. — Unknown",
    "Behind every great man is a woman rolling her eyes. — Jim Carrey",
    "I used to think I was indecisive, but now I'm not so sure. — Unknown",
    "If you think you are too small to make a difference, try sleeping with a mosquito. — Dalai Lama",
    "Life is short. Smile while you still have teeth. — Unknown",
    "I am an early bird and a night owl… so I am wise and I have worms. — Michael Scott",
    "The elevator to success is out of order. You’ll have to use the stairs... one step at a time. — Joe Girard",
    "People say nothing is impossible, but I do nothing every day. — A.A. Milne",
    "I’m writing a book. I’ve got the page numbers done. — Steven Wright",
    "Why do they call it rush hour when nothing moves? — Robin Williams",
    "If at first you don't succeed, then skydiving definitely isn't for you. — Steven Wright",
    "I find television very educating. Every time somebody turns it on, I go into the other room and read a book. — Groucho Marx",
    "A day without laughter is a day wasted. — Charlie Chaplin",
    "Clothes make the man. Naked people have little or no influence on society. — Mark Twain",
    "Age is of no importance unless you're a cheese. — Billie Burke",
    "Not all those who wander are lost. — J.R.R. Tolkien",
    "Everything you can imagine is real. — Pablo Picasso",
    "The journey of a thousand miles begins with one step. — Lao"
]

const background = [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  ]

  //change the background every 5 seconds.
function backgroundImg(){
    const images = document.querySelector('#images');
    const index = Math.floor(Math.random()*background.length);
    images.src = background[index];

}
setInterval(backgroundImg,5000);

// Quotes change
const text = document.getElementById("quote");

function genrateQuotes(){
    const index = Math.floor(Math.random()*quotes.length);
    text.textContent = quotes[index];
}




const btn = document.querySelector("button");
btn.addEventListener("click",genrateQuotes)

