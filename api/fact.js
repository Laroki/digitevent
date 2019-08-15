class Fact {

  constructor(info) {
    this.errors=[];
    this.day = info.day;
    this.month = info.month
    this.monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.content="";
  }

  dateIsValid() {
    // check month first
    if (!(this.month > 0 && this.month < 13)) {
      this.errors.push({
        error: 'le mois doit être compris entre 0 et 12'
      })
      return false;
    }
    else
    {
       // Then check day
      if (this.day < 0 || this.day > this.monthLength[this.month - 1]) {
        this.errors.push({
          error: 'le jour doit être compris entre 0 et ' + this.monthLength[this.month - 1]
        })
        return false;
      }

      return true;
    }
  }

  setContent(content)
  {
    this.content = content;
  }

  json()
  {
    return {
      day : this.day,
      month:this.month,
      content: this.content
    }
  }

}

module.exports = Fact