import { businesses } from '../data/FakeData';

export function Search(term, location) {
  let results = [];
  if (term && location) {
    results = businesses.filter((business) => {
      if (business.category == term && business.state == location) return true;
    });
  } else {
    results = businesses.filter((business) => {
      if (business.category == term || business.state == location) return true;
    });
  }
  return results;
}
