import moment from "moment";

export default {
  min: (v, min) => {
    return moment(v) < moment(min) ? 'Minimum date is ' + moment(min).format('DD/MM/YYYY') : false;
  },
  max: (v, min) => {
    return moment(v) > moment(min) ? 'Maximum date is ' + moment(min).format('DD/MM/YYYY') : false;
  }
};