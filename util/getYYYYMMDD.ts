const getYYYYMMDD = (date: Date) => {
  const d = new Date(date);
  const yyyy = d.getFullYear();
  const mm = d.getMonth() + 1;
  const dd = d.getDate();
  return `${yyyy}년 ${mm}월 ${dd}일`;
};

export default getYYYYMMDD;
