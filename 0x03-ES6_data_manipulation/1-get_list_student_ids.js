export default function getListStudentIds(listitem) {
  if (Array.isArray(listitem)) {
    return listitem.map((obj) => obj.id);
  }

  return [];
}
