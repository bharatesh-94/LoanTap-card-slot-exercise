let eventsArr = [
    {
      amount: 11111,
      cardId: 'ALICE',
      id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
      type: 'RESERVATION',
    },
    {
      amount: 11111,
      cardId: 'ALICE',
      id: '0a646991-4898-4751-8bf6-c266a6728885',
      type: 'CONFIRMATION',
    },
  
    {
      amount: 22222,
      cardId: 'BOB',
      id: '2ace1ea9-b57e-4d0c-926c-d570450d17c6',
      type: 'RESERVATION',
    },
    {
      amount: 22222,
      cardId: 'BOB',
      id: '98d4608c-862a-4b46-9839-2faa30a65d30',
      type: 'CANCELLATION',
    },
  ]
  
/**
 * Write a function that receives a large batch of card events from multiple cards,
 * returning an object which maps from cardId -> valid transaction. Only cardIds with
 * a valid transaction should appear in the returned object.
 *
 * A valid transaction is a pair of card events, starting with a RESERVATION event
 * and finishing with either a CONFIRMATION or CANCELLATION event.
 *
 * The input is an array of unprocessed card events. Some events might be duplicated
 * or missing. For duplicated events, you may only use one of its occurrences and
 * discard the rest. Missing events invalidate the transaction.
 *
 */

//Please note the function is written in Javascript.
function processCardEvents(eventsArr) {
  let obj = {}

  for (let i = 0; i < eventsArr.length; i++) {
    if (eventsArr[i].type === "RESERVATION" && obj[eventsArr[i].cardId] === undefined) {
      obj[eventsArr[i].cardId] = [eventsArr[i]]
    }

    if (eventsArr[i].type != "RESERVATION" && obj[eventsArr[i].cardId][0].type == "RESERVATION") {
      obj[eventsArr[i].cardId].push(eventsArr[i])
    }

  }

  for (key in obj) {
    if (obj[key].length != 2) {
      delete obj[key]
    }
  }

  return obj
}

console.log(processCardEvents(eventsArr))