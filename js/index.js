const mark = parseInt(prompt('enter your marks : '))

if (mark > 100 || mark < 0) {
  console.log(`you have parassed wrong number :=>${mark}`)
} else if (mark <= 100 && mark >= 80) {
  console.log(`you have gotten : A+ :=> ${mark}`)
} else if (mark <= 79 && mark >= 70) {
  console.log(`you have gotten : A :=>${mark}`)
} else if (mark <= 69 && mark >= 60) {
  console.log(`you have gotten : B :=>${mark}`)
} else if (mark <= 59 && mark >= 50) {
  console.log(`you have gotten : C :=>${mark}`)
} else if (mark <= 49 && mark >= 40) {
  console.log(`you have gotten : D :=>${mark}`)
} else if (mark <= 39 && mark >= 33) {
  console.log(`you have gotten : E :=>${mark}`)
} else if (mark <= 32) {
  console.log(`you are faild student:  :=>${mark}`)
} else if (mark !== ' ') {
  console.log('you didt try : plz your number   ')
}
