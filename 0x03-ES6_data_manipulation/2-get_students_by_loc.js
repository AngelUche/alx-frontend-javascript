export default function getStudentsByLocation(list, city) {
  return list.filter((items) => items.location === city);
}
