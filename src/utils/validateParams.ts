export const validateParams = (param: string, value: string) : boolean => {
  if(value === "") {
    alert(`Fill the ${param}`);
    return false;
  }

  return true;
}