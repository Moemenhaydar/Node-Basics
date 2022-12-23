
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if (text.trim().startsWith("hello") || text.trim() === "hello\n") {
    hello(text.trim() + "!");
  }
  else if (text === 'help\n') {
    help();
    
  }
  else if(text.split(" ")[0] === 'add'){
    add(text);
  }
  else if (text === 'list\n') {
    list();
  }
  else if(text.split(" ")[0] === 'remove' || text === `remove\n`){
    remove(text);
  }
  else {
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(input) {
  const words = input.split(" ");
  var outputString;
  if (words.length > 1) {
    outputString = input.replace("hello", `${words[0]}`, 1)
  } else {
    outputString = input;
  }
  outputString = outputString.trim();
  console.log(outputString)
}
//list all the cmnds with help
function help() {
  const allCmds = ["hello", "hello (name)", "exit", "quit", "help"]
  console.log("the commands are: ")
  allCmds.forEach((e) => {
    console.log(e)

  })
  


}
//list function

let takeList = ["naruto", "one piece","AOT"]

  function list() {
    takeList.forEach((element, index) => {
      console.log(`${index + 1}  ${element}`)
    })
  }
  //add function
  function add(task){
    if(!task) {
      console.error("error needs an argument")
    } else {
      task = task.replace('\n', '').trim()
      task = task.split(" ").slice(1).join(' ');
      takeList.push(task)
    }
  }
  //remove function \
  function remove(removeList){
    if(removeList === `remove\n`) {
      return takeList.pop();
    } else {
      removeList = removeList.replace('\n', '').trim()
      removeList = removeList.split(" ").slice(1).join(' ');
      (typeof parseInt(removeList) == 'number') ? takeList.splice(removeList- 1,1) : console.log("please enter a nb");
  
    }
  }
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Moemen haydar")
