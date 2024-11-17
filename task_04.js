// 4. You have a list of event attendees. If you find a VIP guest, stop checking further. Use break when you find "VIP".

let attendees = ["John", "Mary", "Steve", "VIP", "Anna", "Tom"];

for (let i = 0; i < attendees.length; i++) {
 let lower = attendees[i].toLowerCase();
 console.log(lower)

 if (lower === 'vip') {
  console.log(lower)
  break;
 }
}