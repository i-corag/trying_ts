import _ from 'lodash';

const data = [
  {
    username: 'Nico',
    role: 'admin',
  },
  {
    username: 'Valentina',
    role: 'seller',
  },
  {
    username: 'Pedro',
    role: 'customer',
  },
  {
    username: 'Susana',
    role: 'seller',
  },
]

const rta = _.groupBy(data, (item)=>item.role);

console.log(rta);
