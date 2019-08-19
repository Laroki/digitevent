class Fact {
  
  /**
   * constructor 
   * @param {Object} info - Info contains the day and the month of the fact
   */

  constructor(info) {
    this.errors = [];
    this.day = info.day;
    this.month = info.month
    this.content = "";
  }

  /**
   * Give the static variable monthLength
   * @return {Array} - return an array with the number of days in a month
   */

  static get monthLength() {
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }

  /**
   * Check if the date is valid 
   * @return {Boolean} - return true if the date is valid
   */

  dateIsValid() {
    // check month first
    if (!(this.month > 0 && this.month < 13)) {
      this.errors.push({
        error: 'le mois doit être compris entre 0 et 12'
      })
      return false;
    } else {
      // Then check day
      if (this.day < 0 || this.day > Fact.monthLength[this.month - 1]) {
        this.errors.push({
          error: 'le jour doit être compris entre 0 et ' + Fact.monthLength[this.month - 1]
        })
        return false;
      }

      return true;
    }
  }

  /**
   * set content of the fact
   * @param {String} content - Content of the fact
   */

  setContent(content) {
    this.content = content;
  }

  /**
   * return fact in object format
   * @return {Object} - An object containing fact
   */

  get json() {
    return {
      day: this.day,
      month: this.month,
      content: this.content
    }
  }

}

module.exports = Fact