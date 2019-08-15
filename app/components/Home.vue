<template>
  <div>

    <router-link class="link" :to="{ name: 'page2', params: {datas} }">Page 2</router-link>
    
    <div class="background"></div>

    <div class="form__container">
      <div class="form">
        <label for="date">Please enter dates separated by commas :</label>
        <div class="input">
          <input type="text" name="date" @keyup.enter="submit($event.target.value)">
        </div>
      </div>
    </div>

    <div class="facts">
      <div class="title">
        <h1>A MOMENT OF HISTORY</h1>
        <h2 v-if="errors.length > 0" v-for="error in errors">
          {{ error.message + ' : ' + dates[error.index].month +'/' + dates[error.index].day }}
        </h2>
        <h2 v-if="!errors.length > 0">
          You entered {{ dates.length }} date{{dates.length >= 2 ? 's' : ''}}.
        </h2>
      </div>

      <div class="fact__container">
        <card v-if="!errors.length > 0" v-bind:data="data" v-for="data in datas"></card>
      </div>


    </div>


  </div>
</template>

<script>
  import Card from './Card';
  export default {
    components: {
      Card
    },
    data() {
      return {
        datas: [],
        dates: [],
        errors: []
      };

    },

    methods: {

      submit: function (dates) {
        let newDate;
        let newDates = []

        //renitialise
        this.errors = []
        this.dates = []
        this.datas = []
        
        //serialize
        // trim
        dates = dates.replace(/ /g, "");
        // split by date
        dates = dates.split(',')


        dates.forEach(date => {
          // separate days from month
          newDate = date.split('/')
          newDate = {
            day: newDate[1],
            month: newDate[0],
          }
          // push in newDates after serialazing 
          newDates.push(newDate);

        });
        this.dates = newDates;

        // check if the dates are valide
        if (this.dateIsValid()) {
        // if its valid go fetch
          this.fetch(this.dates)
        }
      },
      // function that check if a date is valid
      dateIsValid() {
        let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let valid = true;

        this.dates.forEach((date, index) => {
          // check if date.day is set
          if (!date.day) {
            date.day = '?'
            this.errors.push({
              message: 'le jour n\'est pas définit',
              index: index
            })
            valid = false
          }
          // check if the month is valid
          if (!(date.month > 0 && date.month < 13)) {
            this.errors.push({
              message: 'erreur sur le mois',
              index: index
            })
            valid = false
          }
          // check if the day is valid 
          if (date.day < 0 || date.day > monthLength[date.month - 1]) {
            this.errors.push({
              message: 'erreur sur le jour',
              index: index
            })
            valid = false
          }
        });
        return valid;
      },
      // take an array of object as parameter => dates[{day,month}] and fetch a fact corresponding to the date 
      fetch(dates) {

        dates.forEach(date => {
          let uri = 'http://localhost:4000/facts/' + date.month + '/' + date.day;
          this.axios.get(uri).then(response => {

            this.datas.push({
              day: response.data.day,
              month: response.data.month,
              content: response.data.content
            })
          });
        });
      }
    }
  };
</script>