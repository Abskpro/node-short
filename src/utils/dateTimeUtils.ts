export const currentDate = (days:number = 0) :string => {
  let date = new Date();
  date.setDate(date.getDate() + days);
  return date.toString();
}

export const dateToISOString = (dateString:string):string => new Date(dateString).toISOString();

