// where we will store our answers for the magic 8 ball.

const answers = ['Yes', 'no', 'maybe', 'ask again', 'in the near future'];

let message = document.getElementById('message');

function foo() { document.getElementById("message").innerHTML = answers[Math.floor(Math.random() * 5)];
                
             
}
