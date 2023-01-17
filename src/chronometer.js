class Chronometer {
  constructor() {
   this.currentTime = 0
   this.intervalId = null
  }

  start(printTimeCallback) {

this.intervalId = setInterval (() => {
  this.currentTime ++
  if (printTimeCallback) printTimeCallback()
},1000)
}


  getMinutes() {
const minutes = this.currentTime / 60
return Math.floor(minutes)
  }

  getSeconds() {
   const seconds = this.currentTime % 60
   return Math.floor(seconds)
  }



  computeTwoDigitNumber(value) {
 
return ("0" + value).slice(-2)


  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
   this.currentTime = 0
  }

  split() {
  
    let mm = this.computeTwoDigitNumber(this.getMinutes()) 
    let ss = this.computeTwoDigitNumber(this.getSeconds())

return mm + ":" + ss 
  }
}

